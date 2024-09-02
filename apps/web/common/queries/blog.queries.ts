import { groq } from "next-sanity";

export const getPostBySlug = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
}`;  