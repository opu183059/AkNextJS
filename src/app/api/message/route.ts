import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri as string);

// GET message
// export async function GET() {
//   try {
//     await client.connect();
//     const db = client.db("Portfolio");
//     const message = await db
//       .collection("message")
//       .find()
//       .sort({ createdAt: -1 })
//       .toArray();
//     return NextResponse.json(message);
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to fetch message", error },
//       { status: 500 }
//     );
//   }
// }

// GET message
export async function GET() {
  try {
    await client.connect();
    const db = client.db("Portfolio");
    const message = await db
      .collection("message")
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    return NextResponse.json(message, {
      // Attach a tag to this fetch
      headers: {
        "x-nextjs-revalidate-tag": "messages",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch message", error },
      { status: 500 }
    );
  }
}

// POST message
export async function POST(req: NextRequest) {
  try {
    await client.connect();
    const db = client.db("Portfolio");
    const body = await req.json();
    body.createdAt = new Date();
    const result = await db.collection("message").insertOne(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create message", error },
      { status: 500 }
    );
  }
}
