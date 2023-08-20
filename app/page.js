import Feed from "@/components/Feed";

export default async function Home() {
  return (
    <div className="my-28">
      <h1 className="my-4 text-2xl font-semibold">Latest Blog Posts</h1>
      <Feed />
      <h3 className="font-bold text-center text-gray-600">***Display only first 10 posts for now 🙂***</h3>
    </div>
  );
}
