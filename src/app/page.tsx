"use client";

import { ToggleThemeButton } from "@/components/toggle-theme-button";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="flex justify-end p-4">
        <ToggleThemeButton />
      </header>

      <section className="flex flex-1 flex-col items-center justify-center gap-8 px-4 pb-16">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-4xl">Portfolio</h1>
          <p className="text-foreground-muted text-sm">
            A minimal starter template. Get started by editing{" "}
            <code className="font-mono">src/app/page.tsx</code>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link className={buttonVariants()} href="https://nextjs.org/docs">
            Next.js Docs
          </Link>

          <Link
            className={buttonVariants({ variant: "secondary" })}
            href="https://design-time2code.vercel.app/docs/primitives"
          >
            Component Library
          </Link>
        </div>
      </section>
    </main>
  );
}
