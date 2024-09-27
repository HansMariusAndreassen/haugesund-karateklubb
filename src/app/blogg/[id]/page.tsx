import { PortableText } from "@portabletext/react";
import { client } from "../../../sanity/lib/client";
import { singlePostQuery } from "../../../sanity/lib/queries";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TypedObject } from "sanity";
import ShadcnCarousel from "@/components/Carousel/Carousel";

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
  const post: Post | null = await client.fetch(singlePostQuery, {
    slug: params.id,
  });

  if (!post) {
    notFound();
  }

  // Create an array of image objects for the carousel
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

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {post.mainImage && (
        <div className="mb-6">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || post.title}
            width={1200}
            height={630}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {/* Display Carousel if there are multiple images */}
      {galleryImages.length > 0 && (
        <div className="mb-6">
          <ShadcnCarousel images={galleryImages} initialIndex={0} />
        </div>
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

      {/* Render the Portable Text Body */}
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
