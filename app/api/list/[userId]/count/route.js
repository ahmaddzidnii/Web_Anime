import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request, context) {
  const user_id = context.params.userId;
  if (!user_id) {
    return NextResponse.json({ error: "Mising user_id" }, { status: 400 });
  }
  try {
    const listCount = await prisma.animeList.count({
      where: {
        list: {
          user_id,
        },
      },
    });

    return NextResponse.json({
      userId: user_id,
      count: listCount,
    });
  } catch (error) {}
}
