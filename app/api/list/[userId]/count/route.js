import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request, context) {
  const user_id = context.params.userId;
  if (!user_id) {
    return NextResponse.json({ error: "Mising user_id" }, { status: 400 });
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const list = await prisma.animeList.findMany({
      where: {
        owner: {
          id: user.id,
        },
      },
    });

    return NextResponse.json(list);
  } catch (error) {}
}
