import { createError, fetchId } from "@/utils";
import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const id = fetchId(req.url);
        await userClient.users.delete({
            where:{
                id: id
            }
        });
        return Response.json({response:"user deleted successfully"},{status:203});
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error:"There was some error"},{status:501});
    } finally{
        await userClient.$disconnect();
    }  
}

export {handler as DELETE};