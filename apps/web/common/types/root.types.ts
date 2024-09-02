
export type SanityImage = {
    _type: "image";
    asset: {
        _ref: string;
        _type: string;
    }
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type SanityBlockContent = any[];