import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

const userClient = new PrismaClient();

const handler = NextAuth({
    // adapter: PrismaAdapter(userClient),
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            
        })
    ],
    callbacks: {
        async session({ session }) {
            try {
                const sessionUser = await userClient.user.findUnique({
                    where: {
                        email: session.user.email,
                    }
                });
                session.user.id = sessionUser.id;
                userClient.$disconnect();
                return session
            } catch (error) {
                console.log(error);
                return
            }
        },

        async signIn({ profile }) {
            try {
                const userClient = new PrismaClient();
                const isUser = await userClient.user.findUnique({where:{
                    email: profile.email
                }});
                if (isUser == 0){
                    const response = await userClient.user.create({data:{
                        email: profile.email,
                        name: profile.name,
                        username: profile.email.split("@")[0],
                        img: `${profile.image}`,
                        
                    }}) 
                } 
                userClient.$disconnect();
                return true;
            } catch (error) {
                console.log(error);
                return false
            }
        }
    }
})

export {handler as GET, handler as POST};