import { PrismaClient } from "@prisma/client";
import { createError, fetchId } from "@/utils";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const id = fetchId(req.url);
        const dbRes = await userClient.project.findUnique({
            where:{
                id: id
            }
        });

        if(dbRes){
            return Response.json({response: dbRes},{status:200});
        } else{
            return Response.json({error:"Project not found"},{status:404});
        }

    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error},{status:501});
    }
}

export {handler as POST}