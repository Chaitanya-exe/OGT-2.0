import { PrismaClient } from "@prisma/client";
import { createError } from "@/utils";

const userClient = new PrismaClient();

async function handler(){
    try {
        
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error: error.message},{status:500});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as GET}