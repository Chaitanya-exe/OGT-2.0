import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { createError } from "@/utils";

const userClient = new PrismaClient();

async function handler(){
    try {
        
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error:"some error occured, check back later"},{status:501});
    }
}

export {handler as POST};