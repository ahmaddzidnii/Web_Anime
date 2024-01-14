import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(request) {
  const body = await request.json();

  const { user, data } = body;

  const { user_id, email } = user;

  const { userId } = auth();

  if (!userId || !user_id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (userId !== user_id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

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

  try {
    const existingUser = await prisma.user.count({
      where: {
        user_id: userId,
      },
    });

    if (existingUser < 1) {
      await prisma.user.create({
        data: {
          user_id: userId,
          email,
        },
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        user_id: userId,
      },
      select: {
        id: true,
      },
    });

    const existingList = await prisma.animeList.count({
      where: {
        owner_id: user.id,
        anime_id: anime_id,
      },
    });

    if (existingList > 0) {
      return NextResponse.json(
        { error: "Anime sudah ada di list!" },
        { status: 400 }
      );
    }

    const data = {
      anime_id,
      anime_id,
      anime_title,
      anime_image,
      status,
      type,
      score,
      total_episode: parseInt(total_episode),
      watched_episode: parseInt(watched_episode),
      owner_id: user.id,
    };

    await prisma.animeList.create({
      data,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request) {
  const body = await request.json();

  const { user_id, id } = body;
  const { userId } = auth();

  if (!userId || !user_id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (userId !== user_id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    await prisma.animeList.delete({
      where: {
        id,
        owner: {
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
