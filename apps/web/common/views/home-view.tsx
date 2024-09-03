"use client";
import { Badge } from "@common/components/ui/badge";
import { Card, CardContent } from "@components/ui/card";
import Link from "next/link";

export default function HomeView() {
	return (
		<div className="mx-auto max-w-[1240px] py-12 lg:py-24 flex flex-col gap-12 ">
			<section className="w-full">
				<div className="container mx-auto px-4 md:px-6">
					<div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
									Martin Kulvedrøsten Myhre
								</h1>
								<div className="flex gap-2 pb-4 pt-2">
									<Badge>Software Developer</Badge>
									<Badge>CEO</Badge>
									<Badge>Entrepreneur</Badge>
								</div>
								<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Welcome to my portfolio website, where I showcase my work and
									share my thoughts.
								</p>
							</div>
						</div>
						<img
							src="/placeholder.svg"
							width="550"
							height="400"
							alt="Hero"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
						/>
					</div>
				</div>
			</section>
			<section className="w-full">
				<div className="container mx-auto px-4 md:px-6">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Latest Blog Posts
						</h2>
						<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
							<Card>
								<CardContent className="p-4">
									<h3 className="text-lg font-semibold">
										Mastering React Hooks: A Comprehensive Guide
									</h3>
									<p className="text-muted-foreground">
										Dive deep into the power of React Hooks and learn how to
										leverage them to build more efficient and maintainable
										applications.
									</p>
									<div className="mt-4">
										<Link
											href="#"
											className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
											prefetch={false}
										>
											Read More
										</Link>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4">
									<h3 className="text-lg font-semibold">
										Optimizing Website Performance: Best Practices
									</h3>
									<p className="text-muted-foreground">
										Learn how to improve the speed and responsiveness of your
										website through various optimization techniques.
									</p>
									<div className="mt-4">
										<Link
											href="#"
											className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
											prefetch={false}
										>
											Read More
										</Link>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4">
									<h3 className="text-lg font-semibold">
										Designing Accessible User Interfaces
									</h3>
									<p className="text-muted-foreground">
										Explore the principles of accessible design and learn how to
										create user interfaces that are inclusive and user-friendly.
									</p>
									<div className="mt-4">
										<Link
											href="#"
											className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
											prefetch={false}
										>
											Read More
										</Link>
									</div>
								</CardContent>
							</Card>
						</div>
						<div className="flex justify-center">
							<Link href="/posts">View All Posts</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="w-ful">
				<div className="container mx-auto px-4 md:px-6">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Other Websites to Visit
						</h2>
						<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
							<Card>
								<CardContent className="p-4">
									<h3 className="text-lg font-semibold">Vercel</h3>
									<p className="text-muted-foreground">
										Vercel is a platform for frontend frameworks and static
										sites, built to integrate with your headless content,
										commerce, or database.
									</p>
									<div className="mt-4">
										<Link
											href="#"
											className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
											prefetch={false}
										>
											Visit Vercel
										</Link>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4">
									<h3 className="text-lg font-semibold">Tailwind CSS</h3>
									<p className="text-muted-foreground">
										Tailwind CSS is a utility-first CSS framework packed with
										classes like flex, pt-4, text-center and rotate-90 that can
										be composed to build any design, directly in your markup.
									</p>
									<div className="mt-4">
										<Link
											href="#"
											className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
											prefetch={false}
										>
											Visit Tailwind CSS
										</Link>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4">
									<h3 className="text-lg font-semibold">Shadcn/UI</h3>
									<p className="text-muted-foreground">
										Shadcn/UI is a set of accessible, customizable, and
										production-ready components for building high-quality,
										accessible React applications.
									</p>
									<div className="mt-4">
										<Link
											href="#"
											className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
											prefetch={false}
										>
											Visit Shadcn/UI
										</Link>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
