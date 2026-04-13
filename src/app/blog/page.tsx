import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software engineering, building products, and the creative process.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-4 text-muted leading-relaxed">
        Thoughts on software engineering, building products, and the creative
        process.
      </p>

      <div className="mt-12 space-y-10">
        {posts.length === 0 && (
          <p className="text-muted">No posts yet. Check back soon.</p>
        )}
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <time className="text-sm text-muted">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-1 text-xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
              {post.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
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
