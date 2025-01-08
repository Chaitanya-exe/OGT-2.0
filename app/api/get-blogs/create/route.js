import { createError } from "@/utils";
import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt"; 

const userClient = new PrismaClient();

async function handler(req){
    try {
        const token = await getToken({req});
        const body = await req.json();
        console.log(body);
        
        if(token.id){
            const dbRes = await userClient.blogs.create({
                data:{
                    creatorId: token.id,
                    tags:{
                        set:body.tags
                    },
                    ...body
                }
            })

            if (dbRes){
                return Response.json({blog: dbRes}, {status:201});
            } else{
                throw new Error("Error creating the blog")
            }
        } else{
            throw new Error("You must be logged In");
        }
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error},{status:500});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as POST}