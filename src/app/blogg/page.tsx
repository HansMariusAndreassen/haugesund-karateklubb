// import { PortableText } from "@portabletext/react"
import { client } from "../../sanity/lib/client";
import { postQuery } from "../../sanity/lib/queries";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string | null;
  excerpt: string | null;
  author: string;
  imageUrl: string | null;
  body: object;
}

export default async function Blog() {
  const posts: Post[] = await client.fetch(postQuery);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Bloggen</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post._id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {post.imageUrl ? (
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Bilde ikke tilgjengelig</p>
              </div>
            )}
            <div className="p-6 flex-grow flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">
                {post.excerpt || "Ingen beskrivelse tilgjengelig"}
              </p>
              <div className="text-sm text-gray-500 mb-4">
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
              <Button asChild className="w-full">
                <Link href={`/blogg/${post.slug.current}`}>Les mer</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
