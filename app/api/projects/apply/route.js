import { PrismaClient } from "@prisma/client";
import { createError } from "@/utils";
import { getToken } from "next-auth/jwt";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const {projectId,answers} = await req.json();
        console.log(answers);
        const session = await getToken({req});
        const project = await userClient.project.update({
            where:{
                id: projectId
            },
            data:{
                requests:{
                    push:[session.id]
                }
            }
        });
        const dbRes = await userClient.applications.create({
            data:{
                applicantId: session.id,
                projectId: project.id,
                answers: {
                    set:answers
                }
            }
        });
        if(dbRes){
            return Response.json({response:"SUCCESS"},{status:201});
        } else{
            throw new Error("unable to apply");
        }
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error: "There was some error occured"},{status:501});
    }
}

export {handler as POST}