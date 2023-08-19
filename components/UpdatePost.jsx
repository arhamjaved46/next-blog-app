import CreatePost from "./CreatePost";

export default function UpdatePost() {
    return (
        <>
            <hr />
            <form className="flex flex-col gap-4 mt-4">
                <input type="text" placeholder="Post title" className="p-3 border border-gray-400 rounded" />
                <textarea rows={8} placeholder="Post description" className="p-3 border border-gray-400 rounded" />
                <button type="submit" className="p-3 text-white bg-black rounded w-[150px]">Update</button>
            </form>
        </>
    )
};