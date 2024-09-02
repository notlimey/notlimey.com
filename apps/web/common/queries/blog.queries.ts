import { groq } from "next-sanity";
import { AUTHOR_QUERY_RAW } from "./author.queries";

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
    author->${AUTHOR_QUERY_RAW},
    categories[]->
}`;  