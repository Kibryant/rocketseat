import { Link as LinkData } from "@/types/cms";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface LinkCardProps {
    link: LinkData;
}

export function LinkCard({ link }: LinkCardProps) {
    return (
        <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group w-full justify-between rounded-xl border-2 py-6 text-base font-semibold transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:shadow-md active:scale-[0.99]"
            )}
        >
            <span className="flex-1 truncate text-center">{link.label}</span>
            <ExternalLink className="absolute right-4 h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
        </Link>
    );
}
