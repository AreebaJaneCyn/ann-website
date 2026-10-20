import { ArrowMark } from "@/components/ui/ArrowMark";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-900 text-white">
      <div aria-hidden className="bg-grid-dark absolute inset-0 -z-10" />
      <div className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <ArrowMark className="size-16 animate-arrow-rise" />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-mint-400">404</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">This page has moved on.</h1>
        <p className="mt-4 max-w-md text-muted-dark">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Contact us</ButtonLink>
        </div>
      </div>
    </section>
  );
}
