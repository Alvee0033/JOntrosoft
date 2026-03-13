import Link from "next/link";
import { ArrowRight, MapPin, Clock, Zap, Heart, Coffee, Monitor } from "lucide-react";

export default function CareersPage() {
    const jobs = [
        { title: "Senior AI Engineer (LLM/RAG)", type: "Full-Time", location: "Dhaka / Remote", department: "Engineering" },
        { title: "Principal Systems Architect", type: "Full-Time", location: "Remote", department: "Engineering" },
        { title: "Senior React Developer", type: "Full-Time", location: "Dhaka", department: "Frontend" },
        { title: "Technical Product Manager", type: "Full-Time", location: "Dhaka", department: "Product" },
    ];

    return (
        <main className="relative w-full min-h-screen pt-32 pb-24 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero */}
                <header className="mb-20 md:mb-32 text-center max-w-4xl mx-auto">
                    <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">Careers</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                        Build software that <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">matters</span>.
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                        Join an elite squad of engineers and designers building highly scalable digital products for the world's most visionary enterprises.
                    </p>
                    <a href="#open-roles" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg active:scale-95">
                        View Open Positions <ArrowRight className="w-4 h-4" />
                    </a>
                </header>

                {/* Why JONTRO */}
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Why build with us?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "High-Impact Work", desc: "No red tape. Ship code that affects millions of users globally." },
                            { icon: Monitor, title: "Top-Tier Tech Stack", desc: "Work with latest tools: Next.js 14, Rust, OpenAI APIs, and Kubernetes." },
                            { icon: Coffee, title: "Flexible & Remote", desc: "Results matter, not office hours. Work from Dhaka HQ or anywhere worldwide." },
                            { icon: Heart, title: "Comprehensive Health", desc: "Premium health, dental, and vision insurance for you and your dependents." }
                        ].map((benefit, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Open Listings */}
                <section id="open-roles" className="mb-32 scroll-mt-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">Open Positions</h2>
                            <p className="text-slate-600">Currently looking for exceptional talent.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((job, i) => (
                            <div key={i} className="bg-white hover:bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-colors group cursor-pointer">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
                                        <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-md">
                                            <MapPin className="w-4 h-4" /> {job.location}
                                        </span>
                                        <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-md">
                                            <Clock className="w-4 h-4" /> {job.type}
                                        </span>
                                        <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-md">
                                            {job.department}
                                        </span>
                                    </div>
                                </div>

                                <button className="shrink-0 font-bold text-slate-900 group-hover:text-orange-600 flex items-center gap-2 border border-slate-200 group-hover:border-orange-200 bg-white px-6 py-3 md:py-4 rounded-full transition-all">
                                    Apply Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Open Application */}
                <section className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't see a fit?</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                        We are always on the lookout for brilliant minds. If you think you'd be a great addition to JANTRA, send us your resume and portfolio anyway.
                    </p>
                    <a href="mailto:careers@jantra.agency" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-full font-bold transition-all text-lg shadow-lg">
                        Submit Open Application
                    </a>
                </section>

            </div>
        </main>
    );
}
