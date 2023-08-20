import SinglePost from "@/components/SinglePost";

const fetchPosts = async () => {
  const URI = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${URI}/api/posts`, {
    cache: "no-store"
  });
  if (!response.ok) {
    console.log("Fetching posts failed");
  }
  return response.json();

};

export default async function Home() {

  const { posts } = await fetchPosts();

  return (
    <div className="my-28">
      <h1 className="my-4 text-2xl font-semibold">Latest Blog Posts</h1>

      {
        posts.map((p) => (
          <SinglePost p={p} key={p._id} />
        ))
      }

      <h3 className="font-bold text-center text-gray-600">***Display only 10 posts for now 🙂***</h3>
    </div>
  );
}
