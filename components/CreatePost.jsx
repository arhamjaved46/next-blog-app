"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePost({ heading, btnTitle }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [creating, setCreating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please enter a title or description");
      return;
    }

    setCreating(true);

    try {
      const URI = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${URI}/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (response.ok) {
        setCreating(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          router.refresh();
          router.push("/");
        }, 1000);
        setTitle("");
        setDescription("");
      } else {
        setCreating(false);
        setFailed(true);
        setTimeout(() => {
          setFailed(false);
        }, 500);
        throw new Error("An error occurred.");
      }
    } catch (error) {
      console.log(
        "An error occurred while submitting the post.",
        error.message
      );
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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus="true"
        />
        <textarea
          rows={8}
          placeholder="Post description"
          className="p-3 border border-gray-400 rounded"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button
          type="submit"
          className="p-3 text-white bg-black rounded w-[150px]"
        >
          {creating ? "Creating..." : `${btnTitle}`}
        </button>
      </form>

      {success ? (
        <div className="p-4 mt-4 text-white bg-green-600 rounded">
          Post created successfully.
        </div>
      ) : null}

      {failed ? (
        <div className="p-4 mt-4 text-white bg-red-600 rounded">
          Failed, Please try again later.
        </div>
      ) : null}
    </>
  );
}
