import { getAuth } from "@clerk/nextjs/server";
import { NextResponse as res } from "next/server";

export async function GET(req) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  // Load any data your application needs for the API route
  return res.status(200).json({ userId: userId });
}
