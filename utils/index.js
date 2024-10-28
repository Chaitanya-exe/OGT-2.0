import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

export function fetchId(query){
    const params = query.split("/");
    return params.pop();
}

export async function createError(error, fileName = __filename){
    const writeStream = fs.createWriteStream("../errors.txt","utf-8");
    writeStream.write(Buffer.from(`${error.toString()}\n\n--------------${fileName}`));
    writeStream.end();
}

export async function useAI(prompt){
    try {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"});

        const result = await model.generateContent(prompt);
        const textResult = result.response.text();
        console.log(textResult);
        return textResult;
    } catch (error) {
        console.log(error);
    }
}