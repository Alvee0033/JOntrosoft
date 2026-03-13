import Image from "next/image";
import Link from "next/link";
import { Blocks, Globe2, PencilRuler, Rocket, SearchCheck } from "lucide-react";
import {
  SiAwsamplify,
  SiDocker,
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import LottiePlayer from "@/components/LottiePlayer";
import {
  homeDifferentiators,
  homePortfolioHighlights,
  homeProcess,
  homeServicePreview,
  homeStats,
  homeTechStack,
  homeTestimonials,
} from "@/content/site";

function Icon({ name }: { name: string }) {
  const common = "h-5 w-5";

  switch (name) {
    case "rocket":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M5 19c2.5-1 4-2.5 5-5m4-9c2.2.6 4.4 2.8 5 5-1.3 4-4 7.3-8 10-2-.5-3.5-2-4-4 2.7-4 6-6.7 10-8Z" /><path d="M8 16 5 19l-1 4 4-1 3-3" /><circle cx="15" cy="9" r="1.5" /></svg>;
    case "globe":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>;
    case "star":
      return <svg viewBox="0 0 24 24" fill="currentColor" className={common}><path d="m12 3.8 2.6 5.3 5.9.8-4.2 4.1 1 5.8L12 17l-5.3 2.8 1-5.8L3.5 10l5.9-.8L12 3.8Z" /></svg>;
    case "users":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="3" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 4.13a3 3 0 0 1 0 5.74" /></svg>;
    case "code":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="m8 16-4-4 4-4M16 8l4 4-4 4M14 4l-4 16" /></svg>;
    case "spark":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3ZM19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16ZM5 16l.9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16Z" /></svg>;
    case "flow":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><rect x="3" y="4" width="7" height="6" rx="2" /><rect x="14" y="4" width="7" height="6" rx="2" /><rect x="9" y="14" width="7" height="6" rx="2" /><path d="M6.5 10v2a2 2 0 0 0 2 2H12m5.5-4v2a2 2 0 0 1-2 2H12" /></svg>;
    case "stack":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="m12 4 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4" /><path d="m4 16 8 4 8-4" /></svg>;
    case "mobile":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></svg>;
    case "cloud":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M7 18a4 4 0 1 1 .7-7.9A5.5 5.5 0 0 1 18 12a3.5 3.5 0 1 1 0 7H7Z" /></svg>;
    case "eye":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /><circle cx="12" cy="12" r="2.5" /></svg>;
    case "search":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><circle cx="11" cy="11" r="6" /><path d="m20 20-4.35-4.35" /></svg>;
    case "pen":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></svg>;
    case "chart":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M3 3v18h18" /><path d="m7 14 3-3 3 2 4-5" /></svg>;
    default:
      return <span className={common} />;
  }
}

export default function HomePage() {
  const techStackLoop = [...homeTechStack, ...homeTechStack];
  const processIcons = [SearchCheck, PencilRuler, Blocks, Rocket];
  const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    OpenAI: SiOpenai,
    Flutter: SiFlutter,
    PostgreSQL: SiPostgresql,
    TypeScript: SiTypescript,
    Docker: SiDocker,
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    Python: SiPython,
    AWS: SiAwsamplify,
  };

  return (
    <main className="relative overflow-hidden pt-24">
      <section className="relative px-6 pb-14 pt-10 md:px-10 lg:px-16 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-100/70 via-white/40 to-amber-50/80 p-[1px] shadow-[0_35px_90px_-45px_rgba(249,115,22,0.45)] md:rounded-[2.5rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.16),transparent_24%)]" />
            <div className="glass-panel relative overflow-hidden rounded-[calc(2rem-1px)] border-orange-100/60 bg-white/25 p-7 backdrop-blur-[44px] md:rounded-[calc(2.5rem-1px)] sm:p-8 md:p-9 lg:p-10">
              <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-orange-300/18 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-amber-200/18 blur-3xl" />
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-5 md:space-y-6">
                <header>
                  <h1 className="max-w-xl text-3xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.6rem]">
                    Showcasing Technical Capability. <br />
                    <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                      Building Digital Trust.
                    </span>
                  </h1>
                </header>
                <p className="max-w-xl text-sm leading-relaxed text-slate-600 md:text-base lg:text-lg">
                  JANTRA converts visitors into leads through premium Custom Software, AI Agents, and Agentic Workflow Automation.
                </p>
                <div className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center">
                  <Link
                    href="/checkout"
                    className="text-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 font-bold text-white shadow-[0_12px_24px_-8px_rgba(249,115,22,0.5)] transition-all hover:shadow-[0_18px_30px_-8px_rgba(249,115,22,0.55)] active:scale-95 md:px-6"
                  >
                    View Our Work
                  </Link>
                  <Link
                    href="/services"
                    className="text-center rounded-full border border-orange-100/80 bg-white/70 px-5 py-3 font-semibold text-slate-800 transition-all hover:bg-white md:px-6"
                  >
                    Our Services
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-4 border-t border-orange-100/70 pt-5 md:gap-5 md:pt-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-slate-700 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.28)]">
                    <Globe2 className="h-4 w-4 text-orange-500" strokeWidth={2} />
                    <span className="text-xs font-semibold md:text-sm">Trusted by businesses across the world</span>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
                <LottiePlayer src="/lottie/robotics.json" className="relative h-full w-full scale-x-[-1] scale-y-110" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="w-full overflow-hidden border-y border-orange-200/70 bg-gradient-to-r from-orange-50/85 via-white to-orange-100/80 py-3 shadow-[0_18px_45px_-34px_rgba(249,115,22,0.28)]">
          <div className="marquee-track">
            {techStackLoop.map((item, index) => {
              const TechIcon = techIcons[item];

              return (
                <span
                  key={`${item}-${index}`}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-gradient-to-r from-white to-orange-50 px-5 py-2 text-sm font-medium text-orange-900 shadow-[0_10px_22px_-18px_rgba(249,115,22,0.35)]"
                >
                  {TechIcon ? <TechIcon className="h-4 w-4 shrink-0" /> : null}
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-orange-100/80 bg-gradient-to-br from-white via-orange-50/55 to-amber-50/70 p-3 shadow-[0_25px_65px_-40px_rgba(249,115,22,0.35)] md:p-4">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {homeStats.map((stat, index) => (
              <div
                key={stat.label}
                className="fade-up rounded-[1.5rem] border border-white/80 bg-white/85 p-5 shadow-[0_14px_35px_-28px_rgba(15,23,42,0.25)] transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-300 text-white shadow-lg">
                    <Icon name={stat.icon} />
                  </div>
                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-700">
                    Metric
                  </span>
                </div>
                <p className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-600">Services Preview</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Core services designed for modern product teams
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              We cover the technical layers that move a company from idea to reliable software operation.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {homeServicePreview.map((service) => (
              <article
                key={service.title}
                className={`glass-panel fade-up overflow-hidden rounded-[1.75rem] p-0 transition-transform duration-300 hover:-translate-y-1 ${service.accentClassName ?? ""}`}
                style={{ animationDelay: "180ms" }}
              >
                {service.animationSrc ? (
                  <div className="border-b border-white/50 bg-gradient-to-br from-white/60 via-white/10 to-white/40 px-5 pb-3 pt-5">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                        {service.eyebrow}
                      </p>
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 text-slate-700 shadow-sm">
                        <Icon name={service.icon} />
                      </div>
                    </div>
                    <div className="h-44 sm:h-52">
                      <LottiePlayer src={service.animationSrc} className="h-full w-full scale-[1.35]" />
                    </div>
                  </div>
                ) : (
                  <div className="px-5 pb-3 pt-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
                      <Icon name={service.icon} />
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-white via-orange-50/55 to-amber-50/70 shadow-[0_24px_60px_-36px_rgba(249,115,22,0.3)]">
            <div className="h-full p-8 text-slate-900 md:p-10">
              <div className="inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-orange-600">
                Why JONTRO
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                A delivery model built to create trust before launch day
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                Strong engineering matters, but so does the way we scope, communicate, and reduce uncertainty while the work is moving.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-[0_12px_35px_-28px_rgba(15,23,42,0.25)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600">Working Style</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Clear milestones, fewer surprises, and steady client visibility through each build phase.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-[0_12px_35px_-28px_rgba(15,23,42,0.25)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600">Outcome Focus</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    We optimize for systems that teams can adopt, maintain, and grow into after delivery.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm text-slate-700">
                  Transparent scope
                </span>
                <span className="rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm text-slate-700">
                  Fast feedback loops
                </span>
                <span className="rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm text-slate-700">
                  Launch-ready execution
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {homeDifferentiators.map((item, index) => (
              <div
                key={item.title}
                className="glass-panel fade-up rounded-[1.75rem] border border-white/50 p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.25)] transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${260 + index * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 via-orange-50 to-white text-orange-700 shadow-sm">
                    <Icon name={item.icon} />
                  </div>
                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-orange-700">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-600">How We Work</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                A cleaner delivery rhythm from discovery to launch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                Each phase is designed to reduce ambiguity, keep momentum visible, and turn complex delivery into a sequence clients can follow.
              </p>
            </div>
            <div className="glass-panel rounded-full px-5 py-3 text-sm font-medium text-slate-700">
              Structured in 4 execution phases
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-orange-200 via-orange-300/60 to-transparent lg:block" />
            <div className="grid gap-4">
              {homeProcess.map((step, index) => {
                const StepIcon = processIcons[index] ?? Rocket;

                return (
                  <div
                    key={step.title}
                    className="glass-panel fade-up rounded-[1.9rem] border border-white/50 p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.28)] transition-transform duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${180 + index * 80}ms` }}
                  >
                    <div className="grid gap-5 lg:grid-cols-[72px_160px_1fr] lg:items-center">
                      <div className="relative flex items-center justify-start lg:justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-lg">
                          <StepIcon className="h-6 w-6" strokeWidth={1.9} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-600">
                          Phase 0{index + 1}
                        </p>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/40 bg-white/45 p-5">
                        <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-600">Portfolio Highlights</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Selected product and automation work
              </h2>
            </div>
            <Link href="/checkout" className="text-sm font-semibold text-orange-600 underline underline-offset-4">
              View pricing and engagement models
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {homePortfolioHighlights.map((project) => (
              <article key={project.name} className="glass-panel fade-up rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1" style={{ animationDelay: "220ms" }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-lg">
                  <Icon name={project.icon} />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-orange-600">{project.category}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-600">Testimonials</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              What clients say when the process feels clear
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {homeTestimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="glass-panel fade-up rounded-[2rem] border border-white/40 p-6 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: "240ms" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-white/80 shadow-lg"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-600">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                    Verified Review
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Icon key={index} name="star" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-white/20 pt-4 text-sm text-slate-500">
                  Client feedback on delivery quality, clarity, and execution.
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-orange-950 p-8 text-white shadow-[0_25px_60px_-20px_rgba(15,23,42,0.65)] md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-200">Build With JONTRO</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Ready to turn an idea, workflow, or product bottleneck into something reliable?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                Let&apos;s scope the right engagement model and build a roadmap your team can actually execute.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-4 text-center font-bold text-slate-900 transition-all hover:bg-orange-100"
              >
                Talk to Us
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition-all hover:bg-white/10"
              >
                View Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
