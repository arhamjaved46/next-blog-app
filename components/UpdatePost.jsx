"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UpdatePost({ heading, btnTitle, title, description, id }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [updating, setUpdating] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newTitle || !newDescription) {
            return alert("Title and description are required!");
        }

        setUpdating(true);

        try {
           
            const response = await fetch(`/api/posts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newTitle,
                    newDescription,
                })
            });

            if (!response.ok) {
                setUpdating(false);
                setFailed(true);
                setTimeout(() => {
                    setFailed(false);
                }, 500);
                router.refresh();
            } else {
                setUpdating(false);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    router.refresh();
                    router.push("/");
                }, 1000);
            }



        } catch (error) {
            console.log("Error: " + error.message);
        }
    };

    return (
        <>
            <h1 className="my-4 text-2xl font-semibold">{heading}</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Post title"
                    className="p-3 border border-gray-400 rounded"
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    autoFocus="true"
                />
                <textarea
                    rows={8}
                    placeholder="Post description"
                    className="p-3 border border-gray-400 rounded"
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                />
                <button
                    type="submit"
                    className="p-3 text-white bg-black rounded w-[150px]"
                >
                    {updating ? "Updating..." : `${btnTitle}`}
                </button>
            </form>

            {success ? (
                <div className="p-4 mt-4 text-white bg-green-600 rounded">
                    Post updated successfully.
                </div>
            ) : null}

            {failed ? (
                <div className="p-4 mt-4 text-white bg-red-600 rounded">
                    Failed to update, Please try again later.
                </div>
            ) : null}
        </>
    );
}