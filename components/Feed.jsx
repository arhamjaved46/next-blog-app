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

export default async function Feed() {
    const { posts } = await fetchPosts();
    {posts.map((p) => (
            <SinglePost p={p} key={p._id} />
        ))
    }
}