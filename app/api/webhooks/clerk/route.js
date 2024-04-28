import { Webhook } from "svix";
import * as Sentry from "@sentry/nextjs";
import { headers } from "next/headers";

import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOKS_SECRET;
  if (!WEBHOOK_SECRET) {
    throw new Error("Missing CLERK_WEBHOOKS_SECRET");
  }
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  // console.log(`Received event ${eventType} with id ${id}`);

  if (eventType === "user.created") {
    try {
      await prisma.user.create({
        data: {
          user_id: payload.data.id,
          username: payload.data.username,
          email: payload.data.email_addresses[0].email_address,
          image_url: payload.data.image_url,
        },
      });
      console.log(`Created user with id ${payload.data.id}`);
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  }

  if (eventType === "user.updated") {
    try {
      await prisma.user.update({
        where: {
          user_id: id,
        },
        data: {
          username: payload.data.username,
          email: payload.data.email_addresses[0].email_address,
          image_url: payload.data.image_url,
        },
      });
      console.log(`Updated user with id ${payload.data.id}`);
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  }

  if (eventType === "user.deleted") {
    try {
      await prisma.user.delete({
        where: {
          user_id: id,
        },
      });
      console.log(`Deleted user with id ${payload.data.id}`);
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  }

  return new Response("", { status: 200 });
}
