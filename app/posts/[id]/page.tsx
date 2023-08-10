import {Metadata} from "next";

type Props = {
  params: {
    id: string
  }
}

export async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
  const post = await getData(id)
  return {
    title: post.title,
  }
}

export default async function Post({params: {id}}: Props) {
  const post = await getData(id)
  return (
    <div>
      <h1>{post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

