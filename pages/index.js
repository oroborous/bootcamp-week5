import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Home page</h1>
            {/*<a href="/blog">Regular hyperlink to Blog</a>*/}
            <Link href="/blog">
                <a>Link component to Blog</a>
            </Link>
        </div>
    )
}
