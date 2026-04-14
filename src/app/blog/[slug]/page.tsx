import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mt-12 mb-6 font-serif text-2xl md:text-3xl text-foreground"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mt-8 mb-4 font-serif text-xl text-foreground">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
      if (match) {
        elements.push(
          <li key={i} className="ml-6 list-disc text-muted-foreground leading-relaxed marker:text-primary/60">
            <strong className="text-foreground font-medium">{match[1]}</strong>
            {match[2]}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-6 list-disc text-muted-foreground leading-relaxed marker:text-primary/60">
          {line.slice(2)}
        </li>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-muted-foreground leading-relaxed text-lg">
          {line}
        </p>
      );
    }

    i++;
  }

  return <div className="space-y-5">{elements}</div>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Journal
      </Link>
      <header className="mt-12 pb-10 border-b border-border/30">
        <time className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance leading-tight">
          {post.title}
        </h1>
        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
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
      </header>
      <div className="mt-12">{renderMarkdown(post.content)}</div>
    </article>
  );
}
