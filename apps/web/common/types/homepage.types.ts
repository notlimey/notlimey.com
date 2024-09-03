import type { Post } from "./post.types";
import type { SanityImage } from "./root.types";

export type Homepage = {
    _type: "homePage",
    latestPosts: Post[];
    hero: {
        image: SanityImage;
        title: string;
        description: string;
    };
    otherWebsitesTitle: string;
    otherWebsites: {
        title: string;
        description: string;
        url: string;
    }[];
    latestPostsTitle: string;
};