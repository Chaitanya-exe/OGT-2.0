import { getToken } from "next-auth/jwt";
import { createError } from "./utils";
import { NextResponse } from "next/server";

export default async function middleware(req){
    try {
        const token = await getToken({req});
        if(!token){
            console.log("This function executed perfectly");
            return NextResponse.json({msg:"unauthorized access"},{status:401});
        }
        return NextResponse.next();
    } catch (error) {
        console.log(error);
        createError(error);
        return NextResponse({error},{status:501});
    }

}

export const config = {
    matcher: ['/api/projects/apply']
}