import { PortableText } from "@portabletext/react";
import { client } from "../../../sanity/lib/client";
import { singlePostQuery } from "../../../sanity/lib/queries";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { TypedObject } from "sanity";
import { unstable_cache } from "next/cache";

interface ImageType {
  asset: {
    _id: string;
    url: string;
  };
  alt: string | null;
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string | null;
  excerpt: string | null;
  author: string;
  mainImage: ImageType | null;
  gallery?: ImageType[];
  body: TypedObject | TypedObject[];
}

interface Props {
  params: { id: string };
}

export default async function BlogPost({ params }: Props) {
  const getPost = unstable_cache(
    async () => client.fetch(singlePostQuery, { slug: params.id }),
    ["post", params.id],
    { tags: ["posts"], revalidate: 1 }
  );

  const post: Post | null = await getPost();

  if (!post) {
    notFound();
  }

  const galleryImages = [
    ...(post.mainImage
      ? [{ src: post.mainImage.asset.url, alt: post.mainImage.alt || "" }]
      : []),
    ...(post.gallery
      ? post.gallery.map((image) => ({
          src: image.asset.url,
          alt: image.alt || "",
        }))
      : []),
  ];

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <Button asChild className="mb-6">
        <Link href="/blogg">← Tilbake til alle innlegg</Link>
      </Button>
      <h1 className="text-xl sm:text-2xl font-bold mb-4">{post.title}</h1>
      <ImageGallery images={galleryImages} title={post.title} />
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
      <div className="prose max-w-none">
        <PortableText
          value={post.body}
          components={{
            block: {
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold my-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-medium my-4">{children}</h3>
              ),
              normal: ({ children }) => <p className="my-2">{children}</p>,
            },
            list: {
              bullet: ({ children }) => (
                <ul className="list-disc ml-6 my-2">{children}</ul>
              ),
              number: ({ children }) => (
                <ol className="list-decimal ml-6 my-2">{children}</ol>
              ),
            },
          }}
        />
      </div>

      <Button asChild className="mt-8">
        <Link href="/blogg">← Tilbake til alle innlegg</Link>
      </Button>
    </article>
  );
}
