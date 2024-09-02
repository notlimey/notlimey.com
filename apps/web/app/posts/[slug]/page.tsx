import { POST_BY_SLUG_QUERY } from "@common/queries/blog.queries";
import { client } from "../../../sanity/lib/client";
import PostView from "@common/views/posts/post-view";
import type { Metadata } from "next";
import { toPlainText } from "next-sanity";
import type { Post } from "@common/types/post.types";
import { urlFor } from "../../../sanity/lib/image";

export const generateMetadata = async ({
	params,
}: { params: { slug: string } }) => {
	const post: Post = await client.fetch(POST_BY_SLUG_QUERY, {
		slug: params.slug,
	});

	return {
		title: post?.title,
		description: `${toPlainText(post?.body ?? []).slice(0, 150)}...`,
		openGraph: {
			images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
		},
		twitter: {
			images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
		},
		authors: post.author ? [post.author] : [],
	} satisfies Metadata;
};

export default async function PostPage({
	params,
}: { params: { slug: string } }) {
	const post = await client.fetch(POST_BY_SLUG_QUERY, { slug: params.slug });

	return <PostView {...post} />;
}
