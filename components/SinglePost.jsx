import Link from "next/link";

export default function SinglePost() {
    return (
        <div className="border rounded">
            <h2 className="px-6 py-3 text-xl font-medium bg-slate-50">Title</h2>
            <p className="px-6 py-3">Hello, This is a sample post.</p>
            <div className="flex items-center justify-end gap-2 px-6 py-2 bg-slate-50">
                <Link href={"/update-post"} className="px-2 py-1 text-sm text-white bg-black rounded">Update</Link>
                <div className="p-1 text-sm text-red-500 border border-red-500 rounded">Delete</div>
            </div>
        </div>
    )
};