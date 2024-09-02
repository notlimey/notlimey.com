import { CodeBlock as RCCodeBlock, github } from "react-code-blocks";

const CodeBlock = ({
	value,
	language,
}: { value: string; language: string }) => {
	return (
		<RCCodeBlock
			text={value}
			language={language}
			wrapLongLines
			theme={github}
			as={"div"}
			customStyle={{
				borderRadius: "0.25rem",
			}}
		/>
	);
};

export default CodeBlock;
