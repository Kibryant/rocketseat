import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileData } from "@/types/cms";

interface ProfileProps {
    data: Pick<ProfileData, "name" | "bio" | "avatarUrl">;
}

export function Profile({ data }: ProfileProps) {
    return (
        <div className="flex flex-col items-center space-y-4 text-center">
            <Avatar className="h-28 w-28 ring-4 ring-primary/10">
                <AvatarImage
                    src={data.avatarUrl}
                    alt={data.name}
                    className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold">
                    {data.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight">{data.name}</h1>
                <p className="max-w-xs text-muted-foreground">{data.bio}</p>
            </div>
        </div>
    );
}
