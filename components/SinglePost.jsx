"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SinglePost({ p }) {
    const router = useRouter();

    const handleDelete = async (id) => {

        const confirmed = confirm("Are you sure you want to delete this post?");

        if (confirmed) {
            const response = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                router.refresh();
            }
        }
    }

    return (
        <>
            <div className="mb-6 border rounded hover:shadow-md">
                <h2 className="px-6 py-3 text-xl font-medium bg-slate-50">{p.title}</h2>
                <p className="px-6 py-3 max-h-[158px] overflow-hidden">{p.description}</p>
                <div className="flex items-center justify-end gap-2 px-6 py-2 bg-slate-50">
                    <Link href={`/update-post/${p._id}`} className="px-2 py-1 text-sm text-white bg-black rounded">Update</Link>
                    <div className="p-1 text-sm text-red-500 border border-red-500 rounded cursor-pointer hover:bg-red-500 hover:text-white" onClick={() => handleDelete(p._id)} >Delete</div>
                </div>
            </div>
        </>
    )
};