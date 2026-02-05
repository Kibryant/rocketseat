import { LinkCard } from "@/components/link-card";
import { Profile } from "@/components/profile";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { MOCK_PROFILE } from "@/lib/mock-data";

export default function Home() {
    // In a real scenario, we would fetch data from Prismic here.
    // const client = createClient();
    // const page = await client.getSingle("home");
    // const data = transformPrismicData(page);

    const data = MOCK_PROFILE;

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-16 transition-colors duration-300">
            <div className="absolute right-4 top-4">
                <ThemeToggle />
            </div>

            <div className="w-full max-w-md animate-in fade-in zoom-in duration-500 space-y-8">
                <Profile data={data} />

                <div className="space-y-4">
                    {data.links.map((link) => (
                        <LinkCard key={link.id} link={link} />
                    ))}
                </div>

                <SocialLinks links={data.socials} />
            </div>
        </main>
    );
}
