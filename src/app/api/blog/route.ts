import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri as string);
// const secret = process.env.JWT_SECRET;

// GET Blogs
export async function GET() {
  try {
    await client.connect();
    const db = client.db("Portfolio");
    const blogs = await db.collection("blogs").find().toArray();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blogs", error },
      { status: 500 }
    );
  }
}

// POST Blog
export async function POST(req: NextRequest) {
  try {
    await client.connect();
    const db = client.db("Portfolio");
    const body = await req.json();
    body.createdAt = new Date();
    body.updatedAt = new Date();
    const result = await db.collection("blogs").insertOne(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create blog", error },
      { status: 500 }
    );
  }
}
