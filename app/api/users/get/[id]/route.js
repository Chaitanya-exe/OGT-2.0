import { PrismaClient } from "@prisma/client";
import { createError, fetchId } from "@/utils";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const id = fetchId(req.url);
        const dbRes = await userClient.users.findUnique({
            where: {
                id: id,
            }
        });
        if(dbRes){
            return Response.json({dbRes},{status:200});
        } else{
            return Response.json({msg:"user not in database"},{status:404});
        }
    } catch (error) {
        console.log(error.message);
        createError(error);
        return new Response(JSON.stringify(error));
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as GET};