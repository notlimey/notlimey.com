import type { SanityBlockContent } from "@common/types/root.types";
import { PortableText as NativePortableText } from "@portabletext/react";
import CodeBlock from "./CodeBlock";
import type { CodeBlock as CodeBlockType } from "@common/types/blocks.types";

export default function PortableText({ value }: { value: SanityBlockContent }) {
	return (
		<NativePortableText
			value={value}
			components={{
				types: {
					code: ({ value }: { value: CodeBlockType }) => {
						return <CodeBlock {...value} />;
					},
				},
			}}
		/>
	);
}
