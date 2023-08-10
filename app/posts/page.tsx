import {Metadata} from "next";
import Link from "next/link";

export async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

export const metadata: Metadata = {
  title: "Posts | Next App"
}

export default async function Posts() {
  const posts = await getData();

  return (
    <>
      <h1>Posts page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
};

