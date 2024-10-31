import { projectsData } from "@/config/constants";
import { PrismaClient } from "@prisma/client";
import { createError } from "@/utils";
const userClient = new PrismaClient();

export const GET = async (req) => {
  try {
    const baseURL = "http://localhost:3000";
    const url = new URL(req.url, baseURL);
    const searchParams = url.searchParams;
    const pageSize = 10;

    const category = searchParams.get("category");
    const stipendRange = searchParams.get("stipend");

    let filteredProjects = await userClient.project.findMany({
      skip: (page - 1) - pageSize,
      take: pageSize
    })
    if (category) {
      filteredProjects = filteredProjects.filter(
        (project) => project.role.toLowerCase() === category.toLowerCase()
      );
    }
    if (stipendRange) {
      filteredProjects = filteredProjects.filter((project) => {
        const stipendValue = parseFloat(project.stipend);

        if (isNaN(stipendValue)) {
          return false;
        }
        switch (stipendRange) {
          case "0-10k":
            return stipendValue <= 10000;
          case "10k-30k":
            return stipendValue > 10000 && stipendValue <= 30000;
          case "30k-50k":
            return stipendValue > 30000 && stipendValue <= 50000;
          case "50k+":
            return stipendValue > 50000;
          default:
            return true;
        }
      });
    } 

    return Response.json({filteredProjects}, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error fetching products:", error);
    createError(error);
    return Response.json({error: error.message}, {
      status: 500,
    });
  } finally{
    await userClient.$disconnect();
  }
};
