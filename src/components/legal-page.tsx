import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <a
        href="/"
        className="text-muted-foreground hover:text-foreground text-sm"
      >
        Blurpy
      </a>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {updated && (
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated: {updated}
        </p>
      )}
      <div className="mt-10 space-y-4 leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </main>
  );
}
