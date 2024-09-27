import { PortableText } from "@portabletext/react";
import { client } from "../../../sanity/lib/client";
import { singlePostQuery } from "../../../sanity/lib/queries";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TypedObject } from "sanity";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string | null;
  excerpt: string | null;
  author: string;
  imageUrl: string | null;
  body: TypedObject | TypedObject[];
}

interface Props {
  params: { id: string };
}

export default async function BlogPost({ params }: Props) {
  const post: Post | null = await client.fetch(singlePostQuery, {
    slug: params.id,
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <Button asChild className="mb-6">
        <Link href="/blogg">← Tilbake til alle innlegg</Link>
      </Button>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {post.imageUrl && (
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full h-auto rounded-lg mb-6"
        />
      )}

      <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
        <p>
          <strong>Av:</strong> {post.author}
        </p>
        {post.publishedAt && (
          <p>
            <strong>Publisert:</strong>{" "}
            {new Date(post.publishedAt).toLocaleDateString("no-NO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </div>

      {post.excerpt && (
        <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
      )}

      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>

      <Button asChild className="mt-8">
        <Link href="/blogg">← Tilbake til alle innlegg</Link>
      </Button>
    </article>
  );
}

export async function generateStaticParams() {
  const posts: Post[] = await client.fetch(`*[_type == "post"]{ slug }`);
  return posts.map((post) => ({
    id: post.slug.current,
  }));
}
