import { unstable_cache } from "next/cache";
import { client } from "../../sanity/lib/client";
import { postQuery } from "../../sanity/lib/queries";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ImageType = {
  asset: {
    _id: string;
    url: string;
  };
  alt: string | null;
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string | null;
  excerpt: string | null;
  author: string;
  mainImage: ImageType | null;
  gallery?: ImageType[];
  body: object;
};

export default async function Blog() {
  const getPosts = unstable_cache(
    async () => client.fetch(postQuery),
    ["posts"],
    { tags: ["posts"], revalidate: 60 }
  );

  const posts: Post[] = await getPosts();
  const [newestPost, ...olderPosts] = posts;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="sr-only">Bloggside</h1>

      {/* Newest Post Section */}
      {newestPost && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Siste</h2>
          <Card className="overflow-hidden shadow-lg border rounded-lg">
            <div className="flex flex-col md:flex-row">
              {/* Main Image */}
              <div className="relative w-full md:w-1/2 h-[400px]">
                {newestPost.mainImage ? (
                  <Image
                    src={newestPost.mainImage.asset.url}
                    alt={newestPost.mainImage.alt || newestPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    style={{ objectPosition: "center top" }} // Focus on the top center
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Bilde ikke tilgjengelig</p>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col justify-between md:w-1/2">
                <CardHeader>
                  <CardTitle className="text-3xl mb-4">
                    {newestPost.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>
                      <strong>Av:</strong> {newestPost.author}
                    </p>
                    {newestPost.publishedAt && (
                      <p>
                        <strong>Publisert:</strong>{" "}
                        {new Date(newestPost.publishedAt).toLocaleDateString(
                          "no-NO",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    )}
                  </div>
                  {newestPost.excerpt && (
                    <p className="mb-4">{newestPost.excerpt}</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blogg/${newestPost.slug.current}`}>
                      Les mer
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Older Posts Section */}
      {olderPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">Eldre Innlegg</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {olderPosts.map((post) => (
              <Card
                key={post._id}
                className="flex flex-col overflow-hidden shadow-lg border rounded-lg"
              >
                <div className="relative h-64">
                  {" "}
                  {/* Increased height for better image display */}
                  {post.mainImage ? (
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Bilde ikke tilgjengelig</p>
                    </div>
                  )}
                </div>

                <CardHeader className="p-4">
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-500 mb-4">
                    <p>
                      <strong>Av:</strong> {post.author}
                    </p>
                    {post.publishedAt && (
                      <p>
                        <strong>Publisert:</strong>{" "}
                        {new Date(post.publishedAt).toLocaleDateString(
                          "no-NO",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    )}
                  </div>
                  {post.excerpt && <p>{post.excerpt}</p>}
                </CardContent>
                <CardFooter className="p-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blogg/${post.slug.current}`}>Les mer</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export const dynamic = "force-dynamic";
