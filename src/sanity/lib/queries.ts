import { groq } from "next-sanity";

export const postQuery = groq`
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc, _createdAt desc, _updatedAt desc) {
    _id,
    title,
    slug,
    mainImage{asset->{_id, url}},
    gallery[]{asset->{_id, url}, alt},
    body,
    publishedAt,
    excerpt,
    "author": author->name
  }
`;

export const singlePostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug, // Include slug to maintain consistency
    mainImage{asset->{_id, url}},
    gallery[]{asset->{_id, url}, alt},
    body,
    publishedAt,
    excerpt,
    "author": author->name
  }
`;
