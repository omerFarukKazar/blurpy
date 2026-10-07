import { Mail, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg text-center">
        <div className="bg-primary/10 text-primary mx-auto mb-8 flex size-16 items-center justify-center rounded-2xl">
          <Sparkles className="size-7" />
        </div>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Blurpy
        </h1>

        <p className="text-muted-foreground mx-auto mt-4 max-w-sm text-balance">
          Something new is being built here.
        </p>

        <div className="mt-8">
          <Button asChild size="lg">
            <a href="mailto:hello@blurpy.app">
              <Mail />
              Get in touch
            </a>
          </Button>
        </div>

        <p className="text-muted-foreground mt-10 flex justify-center gap-6 text-sm">
          <a href="/privacy/" className="hover:text-foreground">
            Privacy
          </a>
          <a href="/support/" className="hover:text-foreground">
            Support
          </a>
        </p>
      </div>
    </main>
  );
}
