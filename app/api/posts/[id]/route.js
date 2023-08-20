import connection from "@/lib/DB";
import Posts from "@/models/posts";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {

    const { id } = params;
    const { newTitle: title, newDescription: description } = await req.json();

    await connection();
    await Posts.findByIdAndUpdate(id, {
        title,
        description
    });

    return NextResponse.json({ message: "Post updated successfully" }, { status: 200 });
}

export async function GET(req, {params}) {

    const {id} = params;
    await connection();
    const post = await Posts.findOne({_id: id});   

    return NextResponse.json({ post });
}