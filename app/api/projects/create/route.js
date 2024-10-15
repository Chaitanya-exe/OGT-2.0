import { createError } from "@/utils";
import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient();

async function handler(req){
    try {
        
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error},{status:501});
    }
}

export {handler as POST};