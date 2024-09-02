import type { Author } from "./author.types";

export type Post = {
    title: string;
    slug: string;
    publishedAt?: string;
    author?: Author;
}