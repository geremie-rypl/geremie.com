import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
          className="mt-10 mb-4 text-2xl font-bold tracking-tight"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mt-8 mb-3 text-xl font-semibold">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
      if (match) {
        elements.push(
          <li key={i} className="ml-4 list-disc text-muted leading-relaxed">
            <strong className="text-foreground">{match[1]}</strong>
            {match[2]}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 list-disc text-muted leading-relaxed">
          {line.slice(2)}
        </li>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-muted leading-relaxed">
          {line}
        </p>
      );
    }

    i++;
  }

  return <div className="space-y-4">{elements}</div>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        className="text-sm text-accent hover:underline"
      >
        &larr; Back to blog
      </Link>
      <header className="mt-8">
        <time className="text-sm text-muted">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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
      </header>
      <div className="mt-12">{renderMarkdown(post.content)}</div>
    </article>
  );
}
