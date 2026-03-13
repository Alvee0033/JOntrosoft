import Link from "next/link";
import { ArrowRight, Target, Users, Zap, Shield, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="relative w-full min-h-screen pt-32 pb-24 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero / Mission */}
                <header className="mb-20 md:mb-32 text-center max-w-4xl mx-auto">
                    <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">Our Identity</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-8">
                        Engineering algorithms that <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">elevate human potential.</span>
                    </h1>
                    <p className="text-slate-600 text-lg md:text-2xl leading-relaxed">
                        JANTRA is a premium software engineering and AI automation agency based in Dhaka, Bangladesh, serving global visionary enterprises.
                    </p>
                </header>

                {/* Company Story & Stats */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p>
                                Founded in 2024, JANTRA began with a singular mission: to bridge the gap between complex theoretical computer science and practical, scalable business solutions.
                            </p>
                            <p>
                                What started as a small cohort of systems architects has quickly evolved into a full-scale digital innovation laboratory. We don't just write code; we architect systems that think, scale, and secure themselves.
                            </p>
                            <p>
                                Today, we partner with industry leaders worldwide, delivering everything from high-frequency trading platforms to autonomous customer service agents.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {[
                            { value: "50+", label: "Products Launched" },
                            { value: "4", label: "Global Continents" },
                            { value: "2M+", label: "Lines of Code" },
                            { value: "100%", label: "Founder Owned" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-orange-50/50 border border-orange-100 p-8 rounded-[2rem] text-center">
                                <div className="text-4xl font-black text-orange-600 mb-2">{stat.value}</div>
                                <div className="text-sm font-bold text-slate-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Core Values */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Core Values</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">The principles that guide our technical decisions and partnerships.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Zero Trust Architecture", desc: "Security isn't a feature; it's the foundation of every line of code we write." },
                            { icon: Target, title: "Radical Candor", desc: "We don't sugarcoat technical debt. We identify problems and solve them efficiently." },
                            { icon: Users, title: "Collaborative Synergy", desc: "We act as an extension of your team, deeply integrating with your domain knowledge." },
                            { icon: Zap, title: "Relentless Optimization", desc: "Performance matters. We obsess over milliseconds and compute costs." },
                            { icon: Globe, title: "Global Standards", desc: "Based in Dhaka, delivering Silicon Valley-grade architecture to the world." }
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                    <val.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technology Partners */}
                <section className="mb-32 text-center bg-slate-50 py-16 rounded-[3rem] border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-10">Technology Partners & Certifications</h2>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <div className="text-xl md:text-2xl font-black text-slate-700">AWS Partner</div>
                        <div className="text-xl md:text-2xl font-black text-slate-700">Google Cloud</div>
                        <div className="text-xl md:text-2xl font-black text-slate-700">Microsoft Azure</div>
                        <div className="text-xl md:text-2xl font-black text-slate-700">Next.js Experts</div>
                    </div>
                </section>

                {/* Team Elements (Simplified for agency) */}
                <section className="mb-32 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The Architects</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-16">
                        We are a lean, elite team of senior engineers, AI researchers, and product designers. We don't hire junior staff—every developer touching your project has a minimum of 5 years of rigorous industry experience.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {/* Abstract Team representations */}
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="aspect-square bg-slate-100 rounded-3xl flex items-end justify-start p-4 border border-slate-200 hover:border-orange-300 transition-colors">
                                <div className="w-full text-left">
                                    <div className="w-1/2 h-2 bg-slate-300 rounded mb-2"></div>
                                    <div className="w-3/4 h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Careers & Contact CTA */}
                <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 p-32 bg-orange-500/20 rounded-full blur-[100px]"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Build the future with us.</h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                            Whether you're looking to transform your enterprise or looking for your next career challenge, we want to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-full transition-all text-lg shadow-[0_10px_30px_-10px_rgba(249,115,22,0.8)] active:scale-95">
                                Start a Project
                            </Link>
                            <Link href="/careers" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all text-lg backdrop-blur-md">
                                View Open Roles
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
