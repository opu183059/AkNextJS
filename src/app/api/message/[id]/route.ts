import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";

const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri as string);

type TParams = {
  id: string;
};

// Delete a message
// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: Promise<TParams> }
// ) {
//   try {
//     await client.connect();
//     const db = client.db("Portfolio");
//     await db
//       .collection("message")
//       .deleteOne({ _id: new ObjectId((await params).id) });
//     return NextResponse.json({ message: "message deleted successfully" });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to delete message", error },
//       { status: 500 }
//     );
//   }
// }

// Delete a message
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<TParams> }
) {
  try {
    await client.connect();
    const db = client.db("Portfolio");
    await db
      .collection("message")
      .deleteOne({ _id: new ObjectId((await params).id) });

    // Invalidate cache for 'messages' tag
    revalidateTag("messages");

    return NextResponse.json({ message: "Message deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete message", error },
      { status: 500 }
    );
  }
}
