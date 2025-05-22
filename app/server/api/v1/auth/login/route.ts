import { PrismaClient } from "@/server/generated/prisma";
import { verifyPassword } from "@/lib/hash";

interface userLogin{
    email: string,
    password_hash: string,
}

export async function POST(req: Request) {
    const prisma = new PrismaClient();
    const body:userLogin = await req.json();
    const {email, password_hash} = body;

    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) return new Response("Credenziali errate", { status: 401 });

    const isValid = await verifyPassword(password_hash, user.password_hash);
    if (!isValid) return new Response("Credenziali errate", { status: 401 });
    
    return new Response(JSON.stringify({ message: "Login OK", user: { phone_number : user.phone_number } }));
}
