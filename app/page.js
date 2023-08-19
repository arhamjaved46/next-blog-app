import SinglePost from "@/components/SinglePost";

export default function Home() {
  return (
    <div className="my-28">
      <h1 className="my-4 text-2xl font-semibold">Latest Blog Posts</h1>
      <div className="mb-6">
        <SinglePost />
      </div>
    </div>
  );
}
