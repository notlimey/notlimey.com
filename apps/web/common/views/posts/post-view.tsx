"use client";

import type { Post } from "@common/types/post.types";
import { PortableText } from "@portabletext/react";

export default function PostView({ body, title }: Post) {
	return (
		<div className="flex flex-col gap-5 max-w-[880px] mx-auto px-8 py-10">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
				{title}
			</h1>
			<div className="portabletext">
				<PortableText value={body} />
			</div>
		</div>
	);
}
