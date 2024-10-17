import { PrismaClient } from "@prisma/client";
import { createError } from "@/utils";
const userClient = new PrismaClient();

async function handler(req){
    try {
        const {projectId} = await req.json();
        const dbRes = await userClient.project.update({
            where :{
                id: projectId
            },
            data:{
                requests:{
                    push: [projectId]
                }
            }
        });
        if(dbRes){
            return Response.json({response:"SUCCESS"},{status:201});
        } else{
            throw new Error("unable to update");
        }
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error: "There was some error occured"},{status:501});
    }
}

export {handler as POST}