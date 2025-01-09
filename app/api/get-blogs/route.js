import { PrismaClient } from "@prisma/client";
import { createError } from "@/utils";
import { NextResponse } from "next/server";
import userClient from "@/utils/prisma";

async function handler(req){
    try {
        return NextResponse.json({msg:"success"});
    } catch (error) {
        console.log(error);
        createError(error);
        return NextResponse.json({error: error.message},{status:500});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as GET}