import CreatePost from "@/components/CreatePost";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs"
import { HiOutlineHome } from "react-icons/hi";

export default function Page() {

  const heading = "Create a new Post";
  const btnTitle = "Create";

  return (
    <div className="my-28">
      <Link href={"/"} className="flex items-center justify-start gap-2 mt-4"><BsChevronLeft /> <HiOutlineHome size={20} /> Home</Link>
      <CreatePost heading={heading} btnTitle={btnTitle} />
    </div>
  );
}
