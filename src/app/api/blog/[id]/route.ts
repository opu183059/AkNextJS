import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri as string);

type TParams = {
  id: string;
};

// GET a single blog by ID
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<TParams> }
) {
  if (!(await params).id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  try {
    await client.connect();
    const db = client.db("Portfolio");
    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId((await params).id) });
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
  { params }: { params: Promise<TParams> }
) {
  if (!(await params).id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }
  try {
    await client.connect();
    const db = client.db("Portfolio");
    const body = await req.json();
    body.updatedAt = new Date();
    const updatedBlog = await db
      .collection("blogs")
      .updateOne({ _id: new ObjectId((await params).id) }, { $set: body });
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
  { params }: { params: Promise<TParams> }
) {
  try {
    await client.connect();
    const db = client.db("Portfolio");
    await db
      .collection("blogs")
      .deleteOne({ _id: new ObjectId((await params).id) });
    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete blog", error },
      { status: 500 }
    );
  }
}

// import { NextRequest, NextResponse } from "next/server";
// import { MongoClient, ObjectId } from "mongodb";

// const uri = process.env.DATABASE_URL!;
// const client = new MongoClient(uri);

// type TParams = {
//   id: string;
// };

// // ✅ Awaiting params inside the function
// export async function GET(
//   req: NextRequest,
//   context: { params: Promise<TParams> }
// ) {
//   const { id } = await context.params; // ✅ Correct way to handle params

//   if (!id) {
//     return NextResponse.json({ error: "ID is required" }, { status: 400 });
//   }

//   try {
//     await client.connect();
//     const db = client.db("Portfolio");
//     const blog = await db
//       .collection("blogs")
//       .findOne({ _id: new ObjectId(id) });

//     if (!blog) {
//       return NextResponse.json({ message: "Blog not found" }, { status: 404 });
//     }

//     return NextResponse.json({ blog });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to fetch blog", error },
//       { status: 500 }
//     );
//   }
// }

// // ✅ Same fix for PUT request
// export async function PUT(
//   req: NextRequest,
//   context: { params: Promise<TParams> }
// ) {
//   const { id } = await context.params;

//   if (!id) {
//     return NextResponse.json({ error: "ID is required" }, { status: 400 });
//   }

//   try {
//     await client.connect();
//     const db = client.db("Portfolio");
//     const body = await req.json();
//     body.updatedAt = new Date();

//     const updatedBlog = await db
//       .collection("blogs")
//       .updateOne({ _id: new ObjectId(id) }, { $set: body });

//     return NextResponse.json(updatedBlog);
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to update blog", error },
//       { status: 500 }
//     );
//   }
// }

// // ✅ Same fix for DELETE request
// export async function DELETE(
//   req: NextRequest,
//   context: { params: Promise<TParams> }
// ) {
//   const { id } = await context.params;

//   if (!id) {
//     return NextResponse.json({ error: "ID is required" }, { status: 400 });
//   }

//   try {
//     await client.connect();
//     const db = client.db("Portfolio");

//     await db.collection("blogs").deleteOne({ _id: new ObjectId(id) });

//     return NextResponse.json({ message: "Blog deleted successfully" });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to delete blog", error },
//       { status: 500 }
//     );
//   }
// }
