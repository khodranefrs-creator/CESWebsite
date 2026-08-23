import Link from "next/link";
import { PathDivider } from "@/components/graphics";
import { Inview } from "@/components/inview";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-bg-deep text-fg">
      <div className="bp-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[80svh] max-w-3xl flex-col items-center justify-center px-5 py-32 text-center md:px-10">
        <p className="label-mono text-accent">Error 404 — Signal not found</p>
        <h1 className="type-display-l mt-8">This pathway doesn&rsquo;t&nbsp;connect.</h1>
        <Inview variant="draw" className="mt-10 w-full max-w-md">
          <PathDivider />
        </Inview>
        <p className="type-body mt-10 max-w-md text-fg-muted">
          The page you&rsquo;re looking for was moved, removed, or never
          existed. Let&rsquo;s route you back to solid ground.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
