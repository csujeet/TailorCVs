
import { NextRequest, NextResponse } from "next/server";

let blogs: { title: string; content: string }[] = [];

export async function POST(req: NextRequest) {
  const { title, content } = await req.json();
  blogs.push({ title, content });
  return NextResponse.json({ message: "Blog posted successfully" }, { status: 201 });
}

export async function GET() {
  return NextResponse.json(blogs);
}
