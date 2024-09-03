import { Refractor, registerLanguage } from "react-refractor";
import js from "refractor/lang/javascript";
import ts from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import type { CodeBlock as CodeBlockType } from "@common/types/blocks.types";
import { CheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

registerLanguage(js);
registerLanguage(ts);
registerLanguage(tsx);

const CodeBlock = (props: CodeBlockType) => {
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(props.code);

		toast.success("Copied to clipboard");
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<div className="bg-secondary rounded-lg border overflow-x-scroll relative mt-6">
			<div className="px-4 py-2 bg-secondary-foreground text-secondary flex justify-between">
				<p className="uppercase">{props.language}</p>
				<button
					type="button"
					onClick={handleCopy}
					className="inline-flex items-center gap-2"
				>
					{copied ? (
						<CheckIcon className="size-4" />
					) : (
						<CopyIcon className="size-4" />
					)}
				</button>
			</div>
			<Refractor
				// In this example, `props` is the value of a `code` field
				language={"javascript"}
				value={props.code}
				markers={props.highlightedLines}
			/>
		</div>
	);
};

export default CodeBlock;
