import { groq } from "next-sanity";

export const postQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    body,
    slug,
    publishedAt,
    excerpt,
    "author": author->name
  }
`;

export const singlePostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    body,
    publishedAt,
    "author": author->name
  }
`;
