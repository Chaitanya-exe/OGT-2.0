import fs from "fs";
import path from "path";

export function fetchId(query){
    const params = query.split("/");
    return params.pop();
}

export function createError(error){
    const writeStream = fs.createWriteStream("./errors.txt",{encoding:"utf-8"});
    writeStream.write(`${error.toString()}\n\n`);
    writeStream.end();
}