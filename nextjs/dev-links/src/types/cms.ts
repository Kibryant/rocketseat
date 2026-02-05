export interface SocialLink {
    id: string;
    platform: "github" | "linkedin" | "twitter" | "instagram" | "facebook" | "website";
    url: string;
}

export interface Link {
    id: string;
    label: string;
    url: string;
    icon?: string; // Optional icon name or url
}

export interface ProfileData {
    name: string;
    bio: string;
    avatarUrl: string;
    socials: SocialLink[];
    links: Link[];
}
