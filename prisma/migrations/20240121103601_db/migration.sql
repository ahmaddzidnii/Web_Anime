-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Watching', 'Completed', 'OnHold', 'Dropped', 'PlanToWatch');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimeList" (
    "id" TEXT NOT NULL,
    "anime_id" INTEGER NOT NULL,
    "anime_title" TEXT NOT NULL,
    "anime_image" TEXT,
    "status" "Status",
    "type" TEXT,
    "score" INTEGER,
    "total_episode" INTEGER,
    "watched_episode" INTEGER,
    "start_watch" INTEGER,
    "end_watch" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "AnimeList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- AddForeignKey
ALTER TABLE "AnimeList" ADD CONSTRAINT "AnimeList_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
