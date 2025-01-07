import { fetchId,createError } from "@/utils";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const blogId = fetchId(req.url);
        if (blogId){
            const blog = await userClient.blogs.findUnique({
                where: {
                    id: blogId
                }
            })
            if(blog){
                return Response.json({blog},{status:200});
            }
            return NextResponse.json({error:"Blogs not found"},{status:404});
        } else{
            throw new Error("Blog Id not present or unable to fetch");
        }
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error: error.message},{status:500});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as GET}