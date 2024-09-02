"use client";

import { getPostBySlug } from "@common/queries/blog.queries";
import { client } from "../../../sanity/lib/client";

export default async function PostPage({
	params,
}: { params: { slug: string } }) {
	const post = await client.fetch(getPostBySlug, { slug: params.slug });

	return <pre>{JSON.stringify(post, null, 2)}</pre>;
}
