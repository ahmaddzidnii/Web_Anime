import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request, context) {
  const user_id = context.params.userId;
  if (!user_id) {
    return NextResponse.json({ error: "Mising user_id" }, { status: 400 });
  }
  try {
    const lists = await prisma.animeList.findMany({
      where: {
        list: {
          user_id,
        },
      },
    });

    return NextResponse.json(lists);
  } catch (error) {}
}
