import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(request) {
  const body = await request.json();

  const { userId, data } = body;

  const {
    anime_id,
    anime_title,
    anime_image,
    status,
    type,
    score,
    total_episode,
    watched_episode,
  } = data;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const existingListUser = await prisma.list.count({
      where: {
        user_id: userId,
      },
    });

    if (existingListUser < 1) {
      await prisma.list.create({
        data: {
          user_id: userId,
        },
      });
    }

    const list_user = await prisma.list.findUnique({
      where: {
        user_id: userId,
      },
    });

    const existingList = await prisma.animeList.count({
      where: {
        list_id: list_user.user_id,
        anime_id,
      },
    });

    if (existingList > 0) {
      return NextResponse.json(
        { error: "Anime sudah ada di list!" },
        { status: 400 }
      );
    }

    await prisma.animeList.create({
      data: {
        anime_id,
        anime_title,
        anime_image,
        status,
        type,
        score,
        total_episode: parseInt(total_episode),
        watched_episode: parseInt(watched_episode),
        list_id: list_user.user_id,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request) {
  const body = await request.json();

  const { userId, id } = body;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await prisma.animeList.delete({
      where: {
        id,
        list: {
          user_id: userId,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Gagal menghapus anime dari list!" },
      { status: 500 }
    );
  }
}
