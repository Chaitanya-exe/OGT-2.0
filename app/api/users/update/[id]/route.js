import { PrismaClient } from "@prisma/client";
import { fetchId } from "@/utils";

const userClient = new PrismaClient();

async function handler(req, res){
    try {
        
        const id = fetchId(req.url);

        const {dob, role, skills, description, country, phNumber} = await req.json();
        const dbRes = await userClient.users.update({
            where:{
                id: id
            },
            data:{
                DOB:dob,
                role: role,
                skills: skills,
                description: description,
                phNumber: phNumber,
                country: country
            }
        });
        console.log(dbRes);
        return Response.json({msg:"data Received"});
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error));
    } finally{
        userClient.$disconnect();
    }
}

export {handler as POST};