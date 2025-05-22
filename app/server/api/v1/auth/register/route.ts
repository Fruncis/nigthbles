// /app/api/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/server/generated/prisma";
import {hashPassword} from "@/lib/hash";
import { z } from "zod";

interface userRegister{
    email: string,
    password_hash: string,
    full_name: string,
    phone_number: string
}

const userSchema = z.object({
  email: z.string().email(),
  password_hash: z.string().min(8).max(50),
  full_name: z.string().min(3).max(50),
  phone_number: z.string().length(10),
});


export async function POST(req: NextRequest) {
    const prisma = new PrismaClient()
    const body:userRegister = await req.json();
    const {password_hash} = body;

    const result = userSchema.safeParse(body);

    if (!result.success) {
        return NextResponse.json({ error: result.error.format() }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password_hash);

    body.password_hash = hashedPassword;

    const user = await prisma.users.create({data: body});

    return NextResponse.json({ message: "Utente registrato!", user: { email: user.email } , status: 400});
}
