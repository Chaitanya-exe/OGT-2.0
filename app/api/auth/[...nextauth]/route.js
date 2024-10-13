import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { write, writeFileSync } from "fs";
import path from "path";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            
        })
    ],
    callbacks: {
        async session({ session }) {
            try {
                const userClient = new PrismaClient();
                const sessionUser = await userClient.users.findUnique({
                    where: {
                        email: session.user.email,
                    }
                });
                session.user.id = sessionUser.id;
                userClient.$disconnect();
                return session
            } catch (error) {
                writeFileSync(path.join(__dirname,"errors.log"),`${error}\n\n`);
                console.log("There is an error");
                return
            }
        },

        async signIn({ profile }) {
            try {
                
                const userClient = new PrismaClient();
                const isUser = await userClient.users.findUnique({where:{
                    email: profile.email
                }});
                if(!isUser){
                    const username = profile.email.split("@")[0];
                    const response = await userClient.users.create({data:{
                        email: profile.email,
                        name: profile.name,
                        Username: username,
                        img: `${profile.picture}`,
                        
                    }})
                    console.log(response);
                }
                console.log(isUser);
                userClient.$disconnect();
                return true;
            } catch (error) {
                writeFileSync(path.join(__dirname,"errors.log"), `${error}\n\n`);
                console.log("There is an error");
                return false
            }
        }
    }
})

export {handler as GET, handler as POST};