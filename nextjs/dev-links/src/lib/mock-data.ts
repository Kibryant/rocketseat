import { ProfileData } from "@/types/cms";

export const MOCK_PROFILE: ProfileData = {
    name: "Arthur Developer",
    bio: "Full Stack Developer | React, Next.js, Node.js. Building things for the web.",
    avatarUrl: "https://github.com/shadcn.png", // Using shadcn placeholder
    socials: [
        {
            id: "1",
            platform: "github",
            url: "https://github.com",
        },
        {
            id: "2",
            platform: "linkedin",
            url: "https://linkedin.com",
        },
        {
            id: "3",
            platform: "twitter",
            url: "https://twitter.com",
        },
        {
            id: "4",
            platform: "instagram",
            url: "https://instagram.com",
        },
    ],
    links: [
        {
            id: "1",
            label: "Portfolio Project: E-commerce",
            url: "https://example.com/project1",
        },
        {
            id: "2",
            label: "My Tech Blog",
            url: "https://example.com/blog",
        },
        {
            id: "3",
            label: "Download my Resume",
            url: "https://example.com/resume",
        },
        {
            id: "4",
            label: "Youtube Channel",
            url: "https://youtube.com",
        },
    ],
};
