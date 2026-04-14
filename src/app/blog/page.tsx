import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on entrepreneurship, gaming, TV production, and building products that move people.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-6 block">
        Journal
      </span>
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
        Thoughts & Reflections
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Notes on entrepreneurship, gaming, TV production, and building products
        that move people.
      </p>

      <div className="mt-16 space-y-12">
        {posts.length === 0 && (
          <p className="text-muted-foreground">No posts yet. Check back soon.</p>
        )}
        {posts.map((post) => (
          <article key={post.slug} className="group border-b border-border/30 pb-12 last:border-none">
            <Link href={`/blog/${post.slug}`} className="block">
              <time className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-3 font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {post.description}
              </p>
              {post.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/50 bg-secondary/30 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
