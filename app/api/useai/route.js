import { createError, useAI } from "@/utils";

async function handler(req){
    try {
        const {prompt} = await req.json();
        const result = await useAI(prompt);
        return Response.json({response: result},{status:200});
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({error: error.message},{status:500});
    }
}

export {handler as POST}