import { PrismaClient } from "@prisma/client";
import { fetchId, createError } from "@/utils";

const userClient = new PrismaClient();

async function handler(req){
    try {
        
        const id = fetchId(req.url);

        const {...info} = await req.json();
        const dbRes = await userClient.users.update({
            where:{
                id: id
            },
            data:{
                ...info
            }
        });
        console.log(dbRes);
        return Response.json({response: dbRes},{status:202});
    } catch (error) {
        console.log(error.message);
        createError(error);
        return new Response(JSON.stringify(error));
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as POST};