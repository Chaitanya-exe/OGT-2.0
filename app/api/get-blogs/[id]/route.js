import { fetchId, createError } from "@/utils";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const userClient = new PrismaClient();

async function handler(req) {
    try {
        const blogId = fetchId(req.url);
        return NextResponse.json({msg:"success"},{status:200});
    } catch (error) {
        console.log(error);
        createError(error);
        return Response.json({ error: error.message }, { status: 500 });
    } finally {
        await userClient.$disconnect();
    }
}

export { handler as GET }