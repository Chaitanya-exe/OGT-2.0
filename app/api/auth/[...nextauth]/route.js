import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {writeFileSync} from "fs"
import path from "path";
import { PrismaClient } from "@prisma/client";

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
                const sessionUser = await userClient.users.findUnique({
                    where: {
                        email: session.user.email,
                    }
                });
                session.user.id = sessionUser.id;
                userClient.$disconnect();
                return session
            } catch (error) {
                writeFileSync(path.join(__dirname, "errors.log"), `${error}\n\n`);
                console.log("There is an error");
                return
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
                if(!isUser){
                    const dbRes = await userClient.users.create({
                        data:{
                            email: profile.email,
                            img: `${profile.image}`,
                            name: profile.name,
                            Username: profile.email.split("@")[0],
                        }
                    })
                    console.log(dbRes);
                    return {status: 201}
                }
                return {status: 200};
            } catch (error) {
                writeFileSync(path.join(__dirname, "errors.log"), `${error}\n\n`);
                console.log("There is an error");
                return {status: 501}
            }
        }
    }
})

export { handler as GET, handler as POST };