"use client";

import { useEffect, useRef } from "react";
import LottiePlayer from "@/components/LottiePlayer";
import { contactBudgetOptions, contactServiceOptions } from "@/content/site";

interface ContactField {
    label: string;
    placeholder: string;
    type: "text" | "email";
    required?: boolean;
}

const contactFields: ContactField[] = [
    { label: "Name", placeholder: "Full Name", type: "text", required: true },
    { label: "Email", placeholder: "work@domain.com", type: "email", required: true },
    { label: "Company", placeholder: "Organization", type: "text" },
    { label: "Country", placeholder: "Your Region", type: "text" },
];

export default function ContactPage() {
    const anchorRef = useRef<HTMLElement | null>(null);
    const formRef = useRef<HTMLElement | null>(null);
    const infoRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        // Only apply parallax on desktop
        const isMobile = window.innerWidth < 1024;
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;

            if (anchorRef.current) anchorRef.current.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
            if (formRef.current) formRef.current.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
            if (infoRef.current) infoRef.current.style.transform = `translate(${x * 2.5}px, ${y * 2.5}px)`;
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <main className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0 px-4 sm:px-6 lg:px-0 gap-6 lg:gap-0">
            {/* Central Globe Lottie — hidden on mobile */}
            <section
                className="hidden lg:flex absolute inset-0 m-auto w-[50%] h-[600px] z-10 items-center justify-center pointer-events-none"
                ref={anchorRef}
            >
                <div className="relative w-[500px] h-[500px] rounded-full animate-[float_6s_ease-in-out_infinite] flex items-center justify-center">
                    <LottiePlayer src="/lottie/globe.json" className="w-80 h-80" />
                    <p className="absolute bottom-16 text-orange-500/50 text-xs uppercase tracking-[0.3em]">
                        Jantra — Dhaka, BD
                    </p>
                </div>
            </section>

            {/* Contact Form Widget */}
            <section
                className="relative lg:absolute lg:left-[10%] lg:top-[15%] w-full max-w-lg lg:w-[40%] lg:min-w-[400px] lg:max-w-[500px] z-20 glass-panel rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 spatial-hover"
                ref={formRef}
            >
                <header className="mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl font-light tracking-tight text-slate-800">
                        Send a <span className="font-semibold text-orange-500">Signal</span>
                    </h1>
                    <p className="text-slate-500 text-xs md:text-sm mt-2">
                        Let&apos;s build something extraordinary together.
                    </p>
                </header>
                <form action="#" className="space-y-4 md:space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        {contactFields.slice(0, 2).map((field) => (
                            <div key={field.label}>
                                <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 ml-4">
                                    {field.label}
                                </label>
                                <input
                                    className="w-full bg-white/40 border-0 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 focus:ring-2 focus:ring-orange-300 placeholder:text-slate-400 text-sm transition-all"
                                    placeholder={field.placeholder}
                                    type={field.type}
                                    required={field.required}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {contactFields.slice(2).map((field) => (
                            <div key={field.label}>
                                <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 ml-4">
                                    {field.label}
                                </label>
                                <input
                                    className="w-full bg-white/40 border-0 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 focus:ring-2 focus:ring-orange-300 placeholder:text-slate-400 text-sm transition-all"
                                    placeholder={field.placeholder}
                                    type={field.type}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 ml-4">
                                Service Interest
                            </label>
                            <select className="w-full bg-white/40 border-0 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 focus:ring-2 focus:ring-orange-300 text-slate-700 text-sm transition-all appearance-none cursor-pointer">
                                <option value="">Select Service</option>
                                {contactServiceOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 ml-4">
                                Budget Range
                            </label>
                            <select className="w-full bg-white/40 border-0 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 focus:ring-2 focus:ring-orange-300 text-slate-700 text-sm transition-all appearance-none cursor-pointer">
                                <option value="">Select Budget</option>
                                {contactBudgetOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 ml-4">
                            Project Description
                        </label>
                        <textarea
                            className="w-full bg-white/40 border-0 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 focus:ring-2 focus:ring-orange-300 placeholder:text-slate-400 text-sm transition-all resize-none"
                            placeholder="Tell us about your project challenges and goals..."
                            rows={3}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 ml-4">
                            Referral Source
                        </label>
                        <input
                            className="w-full bg-white/40 border-0 rounded-xl md:rounded-2xl px-4 md:px-5 py-2.5 focus:ring-2 focus:ring-orange-300 placeholder:text-slate-400 text-sm transition-all"
                            placeholder="How did you hear about us?"
                            type="text"
                        />
                    </div>
                    <button
                        className="w-full bg-slate-900 text-white py-3 md:py-4 mt-2 rounded-xl md:rounded-2xl font-medium tracking-wide hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200/50 active:scale-95 text-sm md:text-base"
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Info Card Widget */}
            <section
                className="relative lg:absolute lg:right-[15%] lg:top-[35%] w-full max-w-md lg:w-[25%] lg:min-w-[280px] lg:max-w-[380px] z-20 glass-panel rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 spatial-hover"
                ref={infoRef}
            >
                <div className="space-y-8 md:space-y-10">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3 md:mb-4">
                            Global Reach
                        </h2>
                        <div className="space-y-3 md:space-y-4">
                            <div className="flex items-start">
                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 md:mr-4 text-orange-600 flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Email Response</p>
                                    <p className="text-xs md:text-sm font-medium text-slate-700">Under 2 hours typical</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 md:mr-4 text-orange-600 flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Consultation</p>
                                    <a href="#" className="text-xs md:text-sm font-medium text-orange-600 hover:text-orange-700 underline underline-offset-2">Book Calendar Slot →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="pt-4 md:pt-6 border-t border-white/30">
                        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-slate-400 font-bold mb-3 md:mb-4">
                            Operations
                        </h2>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic">
                            Mon - Fri, 9:00 AM - 6:00 PM (GMT+6) <br />
                            Serving clients globally.
                        </p>
                        <div className="mt-4 md:mt-6 flex items-center space-x-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                                Global Nodes Active
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
