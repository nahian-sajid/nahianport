import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const body = await req.json();

  const user = await prisma.user.findUnique({
    where: { email: body.email?.toLowerCase() }
  });

  if (!user) {
    return NextResponse.json({ error: "Invalid login" }, { status: 400 });
  }

  const valid = await bcrypt.compare(body.password, user.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: "Invalid login" }, { status: 400 });
  }

  return NextResponse.json({ userId: user.id });
}
