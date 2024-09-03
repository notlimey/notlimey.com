"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function PostCard({
	website,
}: {
	website: {
		url: string;
		name: string;
		description: string;
	};
}) {
	return (
		<a href={website.url} key={website.url} className="h-full">
			<Card className="h-full flex-col flex">
				<CardHeader>
					<CardTitle className="line-clamp-2">{website.name}</CardTitle>
				</CardHeader>
				<CardContent className="flex-grow">
					<p className="text-muted-foreground line-clamp-4">
						{website.description}
					</p>
				</CardContent>
			</Card>
		</a>
	);
}
