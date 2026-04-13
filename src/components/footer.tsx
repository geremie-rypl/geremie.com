import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Geremie Camara. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://github.com/geremie-rypl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/geremie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:hello@geremie.com"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
