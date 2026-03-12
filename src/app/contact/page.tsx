"use client";

import { useEffect } from "react";

export default function ContactPage() {
    useEffect(() => {
        // Only apply parallax on desktop
        const isMobile = window.innerWidth < 1024;
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;

            const anchor = document.getElementById("central-anchor");
            const widgetL = document.getElementById("contact-form-widget");
            const widgetR = document.getElementById("contact-info-widget");

            if (anchor) anchor.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
            if (widgetL) widgetL.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
            if (widgetR) widgetR.style.transform = `translate(${x * 2.5}px, ${y * 2.5}px)`;
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <main className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0 px-4 sm:px-6 lg:px-0 gap-6 lg:gap-0">
            {/* Central Globe — hidden on mobile */}
            <section
                className="hidden lg:flex absolute inset-0 m-auto w-[50%] h-[600px] z-10 items-center justify-center pointer-events-none"
                id="central-anchor"
            >
                <div className="relative w-[500px] h-[500px] rounded-full border border-orange-200/30 globe-shadow animate-[float_6s_ease-in-out_infinite] flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-100/20 to-transparent blur-xl" />
                    <div className="text-center">
                        <svg
                            className="w-64 h-64 text-orange-400 opacity-60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0.5"
                            />
                        </svg>
                        <p className="text-orange-500/50 text-xs mt-4 uppercase tracking-[0.3em]">
                            Jantra Global Node
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Widget */}
            <section
                className="relative lg:absolute lg:left-[15%] lg:top-[25%] w-full max-w-md lg:w-[30%] lg:min-w-[320px] lg:max-w-[450px] z-20 glass-panel rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 spatial-hover"
                id="contact-form-widget"
            >
                <header className="mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl font-light tracking-tight text-slate-800">
                        Send a <span className="font-semibold text-orange-500">Signal</span>
                    </h1>
                    <p className="text-slate-500 text-xs md:text-sm mt-2">
                        We typically respond within 2 orbital cycles.
                    </p>
                </header>
                <form action="#" className="space-y-4 md:space-y-6">
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 ml-4">
                            Identifier
                        </label>
                        <input
                            className="w-full bg-white/40 border-0 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-orange-300 placeholder:text-slate-400 text-sm transition-all"
                            placeholder="Full Name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 ml-4">
                            Frequency
                        </label>
                        <input
                            className="w-full bg-white/40 border-0 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-orange-300 placeholder:text-slate-400 text-sm transition-all"
                            placeholder="email@example.com"
                            type="email"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 ml-4">
                            Transmission
                        </label>
                        <textarea
                            className="w-full bg-white/40 border-0 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-orange-300 placeholder:text-slate-400 text-sm transition-all resize-none"
                            placeholder="How can we help you navigate?"
                            rows={4}
                        />
                    </div>
                    <button
                        className="w-full bg-slate-900 text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-medium tracking-wide hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200/50 active:scale-95 text-sm md:text-base"
                        type="submit"
                    >
                        Dispatch
                    </button>
                </form>
            </section>

            {/* Info Card Widget */}
            <section
                className="relative lg:absolute lg:right-[15%] lg:top-[40%] w-full max-w-md lg:w-[25%] lg:min-w-[280px] lg:max-w-[380px] z-20 glass-panel rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 spatial-hover"
                id="contact-info-widget"
            >
                <div className="space-y-8 md:space-y-10">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3 md:mb-4">
                            Contact
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
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Email</p>
                                    <p className="text-xs md:text-sm font-medium text-slate-700">hello@jantra.io</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 md:mr-4 text-orange-600 flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Voice</p>
                                    <p className="text-xs md:text-sm font-medium text-slate-700">+1 (555) 890-JANTRA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="pt-4 md:pt-6 border-t border-white/30">
                        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-slate-400 font-bold mb-3 md:mb-4">
                            Location
                        </h2>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic">
                            Remote First. <br />
                            Operating across Global Timezones.
                        </p>
                        <div className="mt-4 md:mt-6 flex items-center space-x-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                                Active Now
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
