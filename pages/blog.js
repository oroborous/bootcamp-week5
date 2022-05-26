import posts from "../posts.json";
import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>

            <ul>
                {Object.keys(posts).map((id, index) => {
                    return (
                        <li key={index}>
                            <Link href={`/blog/${id}`}>
                                { /* <Link href="/blog/[id]" as={"/blog/" + id}> */ }
                                <a>{posts[id].title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
