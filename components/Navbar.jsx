import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed flex items-center justify-between w-full p-8 bg-white border">
      <Link href={"/"}>
        <Image src={"../next.svg"} alt="Next-logo" width={130} height={130} />
      </Link>
      <Link
        href={"/create-post"}
        className="px-3 py-2 text-white bg-black rounded-md font-sm"
      >
        New post
      </Link>
    </nav>
  );
}
