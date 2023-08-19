import UpdatePost from "@/components/UpdatePost";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";

export default function Page() {
  return (
    <div className="my-28">
      <Link href={"/"} className="flex items-center justify-start gap-2 mt-4"><BsChevronLeft /> <HiOutlineHome size={20} /> Home</Link>
      <h1 className="my-4 text-2xl font-semibold">Update post</h1>
      <UpdatePost />
    </div>
  );
}
