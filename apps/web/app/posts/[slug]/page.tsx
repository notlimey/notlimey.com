"use client";

import { getPostBySlug } from "@common/queries/blog.queries";
import { client } from "../../../sanity/lib/client";
import PostView from "@common/views/posts/post-view";

export default async function PostPage({
	params,
}: { params: { slug: string } }) {
	const post = await client.fetch(getPostBySlug, { slug: params.slug });

	return <PostView {...post} />;
}
