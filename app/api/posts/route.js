import Posts from "@/models/posts";
import connection from "@/lib/DB";
import { NextResponse } from "next/server";

export async function GET() {

    await connection();
    try {
        const posts = await Posts.find();
        return NextResponse.json({ posts });
    } catch (error) {
        console.log("Failed to fetch posts", error.message);
    }
}

export async function POST(req) {

    const {title, description} = await req.json();
    await connection();

    await Posts.create({
        title,
        description,
    });

    return NextResponse.json({message: "Post created!"}, {status: 200});

}

export async function DELETE(req) {
    
    const id = req.nextUrl.searchParams.get("id");
    await connection();
    await Posts.findByIdAndDelete(id);

    return NextResponse.json({message: "Post has been deleted!"}, {status: 200});
    
};