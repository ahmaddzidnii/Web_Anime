import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { getLabelStatusByValue } from "../route";

export async function GET(request, context) {
  const { userId } = auth();
  const user_id = context.params.userId;

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const id = searchParams.get("listId");

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

    const whereCondition = {
      owner: {
        id: user.id,
      },
      ...(status && status !== "ALL" ? { status: status } : {}),
    };

    const lists = await prisma.animeList.findMany({
      where: whereCondition,
    });

    return NextResponse.json(lists);
  } catch (error) {}
}
