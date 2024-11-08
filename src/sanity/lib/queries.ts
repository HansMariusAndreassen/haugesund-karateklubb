import { groq } from "next-sanity";

export const postQuery = groq`
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
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

export const scheduleQuery = groq`
  *[_type == "schedule" && !(_id in path("drafts.**"))] | order(day) {
    _id,
    day,
    classes[] {
      startTime,
      endTime,
      name,
      group,
      room,
      color,
      age
    }
  }
`;

export const dayScheduleQuery = groq`
  *[_type == "schedule" && day == $day][0] {
    _id,
    day,
    classes[] {
      time,
      name,
      room,
      color
    }
  }
`;

export const schoolScheduleQuery = groq`
  *[_type == "schools"] {
    _id,
    school,
    schedule[] {
      day,
      classes[] {
        startTime,
        endTime,
        level
      }
    }
  }
`;
