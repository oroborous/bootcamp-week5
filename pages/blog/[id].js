import { useRouter } from "next/router";
import posts from "../../posts.json";
import Link from "next/link";

export default function BlogPost() {
    const router = useRouter();

    const post = posts[router.query.id];

    if (!post)
        return <p>No post yet</p>;

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link href="/blog">
                <a>Back</a>
            </Link>
        </>
    );
}
