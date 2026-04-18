import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const channels = await prisma.channel.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      creator: {
        select: { displayName: true }
      }
    }
  });

  return NextResponse.json(channels);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, userId } = body;

    if (!name || !userId) {
      return NextResponse.json(
        { error: "Name and user required" },
        { status: 400 }
      );
    }

    const channel = await prisma.channel.create({
      data: {
        name,
        createdBy: userId
      }
    });

    return NextResponse.json(channel);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed" },
      { status: 500 }
    );
  }
}