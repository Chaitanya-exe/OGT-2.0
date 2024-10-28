import { projectsData } from "@/config/constants";
import { PrismaClient } from "@prisma/client";
import { createError } from "@/utils";
const userClient = new PrismaClient();

export const GET = async (req) => {
  try {
    const baseURL = "http://localhost:3000";
    const url = new URL(req.url, baseURL);
    const searchParams = url.searchParams;

    // const query = {};
    const category = searchParams.get("category");
    const stipendRange = searchParams.get("stipend");

    // if (category) {
    //   query.category = category.toLowerCase();
    // }

    // let filteredProjects = await userClient.project.findMany();
    let filteredProjects = projectsData
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

    return new Response(JSON.stringify(filteredProjects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    createError(error);
    return new Response("Failed to fetch projects", {
      status: 500,
    });
  }
};
