import { SocialLink } from "@/types/cms";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Facebook, Globe } from "lucide-react";
import Link from "next/link";

interface SocialLinksProps {
    links: SocialLink[];
}

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    facebook: Facebook,
    website: Globe,
};

export function SocialLinks({ links }: SocialLinksProps) {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            {links.map((social) => {
                const Icon = iconMap[social.platform] || Globe;
                return (
                    <Button
                        key={social.id}
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        asChild
                    >
                        <Link href={social.url} target="_blank" rel="noopener noreferrer">
                            <Icon className="h-6 w-6" />
                            <span className="sr-only">{social.platform}</span>
                        </Link>
                    </Button>
                );
            })}
        </div>
    );
}
