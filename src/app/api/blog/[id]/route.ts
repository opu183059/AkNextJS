import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri as string);

// GET a single blog by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(params);
  try {
    await client.connect();
    const db = client.db("Portfolio");
    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(params.id) });
    if (!blog)
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    return NextResponse.json({ blog });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blog", error },
      { status: 500 }
    );
  }
}

// Update a blog
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await client.connect();
    const db = client.db("Portfolio");
    const body = await req.json();
    body.updatedAt = new Date();
    const updatedBlog = await db
      .collection("blogs")
      .updateOne({ _id: new ObjectId(params.id) }, { $set: body });
    return NextResponse.json(updatedBlog);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update blog", error },
      { status: 500 }
    );
  }
}

// Delete a blog
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await client.connect();
    const db = client.db("Portfolio");
    await db.collection("blogs").deleteOne({ _id: new ObjectId(params.id) });
    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete blog", error },
      { status: 500 }
    );
  }
}
