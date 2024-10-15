import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { writeFileSync } from "fs"
import path from "path";
import { PrismaClient } from "@prisma/client";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,

        })
    ],
    callbacks: {
        async session({ session }) {
            const userClient = new PrismaClient();
            try {
                const sessionUser = await userClient.users.findUnique({
                    where: {
                        email: session.user.email,
                    },
                });
                console.log(sessionUser);
                if (!sessionUser) {
                    const newUser = await userClient.users.create({
                        data:{
                            name: session.user.name,
                            email: session.user.email,
                            img: `${session.user.image}`,
                            Username: session.user.email.split('@')[0]
                        }
                    });
                    session.user.id = newUser.id;
                } else{
                    session.user.id = sessionUser.id;
                }

                return session;
            } catch (error) {
                writeFileSync(path.join(__dirname, "errors.log"), `${error}\n\n`, { flag: 'a' }); // Append to file
                console.log(error);
                return null;
            } finally {
                await userClient.$disconnect();
            }
        },

        async signIn({ profile }) {
            try {
                const userClient = new PrismaClient();
                const isUser = userClient.users.findUnique({
                    where: {
                        email: profile.email
                    }
                });
                if (!isUser) {
                    const dbRes = await userClient.users.create({
                        data: {
                            email: profile.email,
                            img: `${profile.image}`,
                            name: profile.name,
                            Username: profile.email.split("@")[0],
                        }
                    });
                    return { status: 201 }
                }
                return { status: 200 };
            } catch (error) {
                writeFileSync(path.join(__dirname, "errors.log"), `${error}\n\n`);
                console.log(error);
                return { status: 501 }
            }
        }
    }
})

export { handler as GET, handler as POST };