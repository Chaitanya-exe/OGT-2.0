import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { createError } from "@/utils";

const userClient = new PrismaClient();

async function handler(req){
    try {
        let {...info} = await req.json();
        const session = await getSession({req});
        const dbRes = await userClient.project.update({
            where:{
                postedById: session.user.id
            },
            data:{...info}
        }); 
        if(dbRes){
            return Response.json({response:dbRes},{status:201});
        }
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error:"some error occured, check back later"},{status:501});
    }
}

export {handler as POST};