import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request, context) {
  const { userId } = auth();
  const user_id = context.params.userId;

  if (!user_id || !userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (userId !== user_id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
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

    const lists = await prisma.animeList.findMany({
      where: {
        owner: {
          id: user.id,
        },
      },
    });

    return NextResponse.json(lists);
  } catch (error) {}
}
