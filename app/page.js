import SinglePost from "@/components/SinglePost";

const fetchPosts = async () => {

  const response = await fetch("http://localhost:3000/api/posts", {
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

      {posts ? (

        posts.map((p) => (
          <SinglePost p={p} key={p._id} />
        ))

      ) : (
        "Loading..."
      )
      }

      <h3 className="font-bold text-center text-gray-600">***Display only first 10 posts for now 🙂***</h3>
    </div>
  );
}
