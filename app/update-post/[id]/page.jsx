import UpdatePost from "@/components/UpdatePost";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";

const fetchPost = async (id) => {

  try {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-store"
    });

    if(!response.ok) {
      throw new Error("Fail to fetch post");
    }

    return response.json();

  } catch (error) {
    console.log("Failed to fetch post", error.message);  
  }

}

export default async function Page({params}) {

  const {id} = params;

  const { post } = await fetchPost(id);

  const { title, description } = post;
  
  const heading = "Update a Post";
  const btnTitle = "Update";

  return (
    <div className="my-28">
      <Link href={"/"} className="flex items-center justify-start gap-2 mt-4"><BsChevronLeft /> <HiOutlineHome size={20} /> Home</Link>
      <UpdatePost heading={heading} btnTitle={btnTitle} title={title} description={description} id={id} />
    </div>
  );
}
