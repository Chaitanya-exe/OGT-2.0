import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { createError } from "@/utils";

const userClient = new PrismaClient(); 

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,

        })
    ],
    session:{
        strategy:"jwt",
    },
    callbacks: {
        async session({ session, token }) {
            try {
                if(token && token.user.id){
                    session.user = token.user;
                }
                return session;
            } catch (error) {
                console.log(error);
                createError(error);
                return null;
            } finally {
                await userClient.$disconnect();
            }
        },

        async signIn({ profile }) {
            try {
                const img = profile.picture
                const user = await userClient.users.findUnique({
                    where:{
                        email: profile.email
                    }
                })
                if(!user){
                    await userClient.users.create({
                        data:{
                            name: profile.name,
                            email: profile.email,
                            Username: profile.email.split("@")[0],
                            img: `${profile.picture}`
                        }
                    });
                }
                return true;
            } catch (error) {
                console.log(error);
                createError(error);
                return { status: 501 }
            }
        },

        async jwt({token, user}){
            if (user){
                const dbRes = await userClient.users.findUnique({
                    where:{
                        email: user.email
                    }
                });
                
                if(dbRes){
                    const info = dbRes;
                    token.user = info;
                }
            }
            return token
        }
    },
    secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };