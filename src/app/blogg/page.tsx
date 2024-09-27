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
    { tags: ["posts"], revalidate: 60 } // Revalidate every 60 seconds as a fallback
  );

  const posts: Post[] = await getPosts();
  const [newestPost, ...olderPosts] = posts;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="sr-only">Bloggside</h1>
      {/* Display Newest Post */}
      {newestPost && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Siste</h2>
          <Card className="overflow-hidden shadow-purple-500/50 shadow-lg">
            <div className="flex flex-col">
              {/* Main Image */}
              <div className="w-full h-[400px] relative">
                {newestPost.mainImage ? (
                  <Image
                    src={newestPost.mainImage.asset.url}
                    alt={newestPost.mainImage.alt || newestPost.title}
                    width={1200}
                    height={630}
                    className="w-full h-full rounded-b-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Bilde ikke tilgjengelig</p>
                  </div>
                )}
              </div>

              {/* Display Gallery Images in a Grid */}
              {newestPost.gallery && newestPost.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-2 p-4">
                  {newestPost.gallery.map((image) => (
                    <div key={image.asset._id} className="relative h-32 w-auto">
                      <Image
                        src={image.asset.url}
                        alt={image.alt || `Gallery image`}
                        fill
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-6 flex flex-col justify-between">
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
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full shadow-sm shadow-black/50 hover:shadow-lg"
                  >
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

      {/* Display Older Posts */}
      {olderPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">Eldre Innlegg</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {olderPosts.map((post) => (
              <Card
                key={post._id}
                className="flex flex-col overflow-hidden shadow-purple-800/50 shadow-lg"
              >
                <div className="relative h-48">
                  {post.mainImage ? (
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt || post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-b-lg"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Bilde ikke tilgjengelig</p>
                    </div>
                  )}
                </div>

                {/* Display Gallery for Older Posts */}
                {post.gallery && post.gallery.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 p-4">
                    {post.gallery.map((image) => (
                      <div
                        key={image.asset._id}
                        className="relative h-32 w-full"
                      >
                        <Image
                          src={image.asset.url}
                          alt={image.alt || `Gallery image`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-sm text-gray-500">
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
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full shadow-sm shadow-black/50 hover:shadow-lg"
                  >
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
