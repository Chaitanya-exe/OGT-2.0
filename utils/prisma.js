import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

const userClient = new PrismaClient({
    log: ['error','info']
});

globalForPrisma.userClient = userClient;

export default userClient;