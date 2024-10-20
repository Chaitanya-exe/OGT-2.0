import { createError } from "@/utils";
import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const session = await getToken({req});
        let {...info} = await req.json();
        info.stipend = parseFloat(info.stipend);
        info.postedById = session.user.id;
        const dbRes = await userClient.project.create({data:{
        ...info,
        }});
        if(dbRes){
            return Response.json({response:dbRes},{status:201});
        } else{
            throw new Error("Unable to create project.");
        }
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error},{status:501});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as POST};