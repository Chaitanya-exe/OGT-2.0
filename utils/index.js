import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

export function fetchId(query) {
    const params = query.split("/");
    return params.pop();
}

export async function createError(error, fileName = __filename) {
    const writeStream = fs.createWriteStream("../errors.txt", "utf-8");
    writeStream.write(Buffer.from(`${error.toString()}\n\n--------------${fileName}`));
    writeStream.end();
}

export async function useai(prompt) {
    try {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const textResult = result.response.text();
        console.log(textResult);
        return textResult;
    } catch (error) {
        console.log(error);
    }
}

export async function payPalaccessToken() {
    const clientId = process.env.PAYPAL_ID;
    const clientSecret = process.env.PAYPAL_SECRET;

    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const response = await fetch(`${process.env.BASE_URL}/v1/oauth2/token`,{
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded",
            "Authorization":`Basic ${basicAuth}`
        },
        body:"grant_type=client_credentials"
    });
    const data = await response.json()
    console.log(data)
    if(data.access_token){
        return data.access_token;
    } else{
        throw new Error(`Error getting access token: ${data.error} - ${data.error_description}`);
    }
}