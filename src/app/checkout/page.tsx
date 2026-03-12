
export default function CheckoutPage() {
    return (
        <main className="relative w-full min-h-screen overflow-hidden pt-24 md:pt-0">

            {/* Pricing Interface */}
            <section className="relative mx-auto px-4 sm:px-6 z-20 w-full max-w-6xl mt-12 lg:mt-32 mb-24">
                <header className="mb-10 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">Simple, predictable pricing.</h1>
                    <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">Scale your operations with our transparent engagement models.</p>
                </header>

                {/* Toggle Button UI */}
                <div className="flex justify-center mb-12">
                    <div className="glass-panel p-1 rounded-full flex gap-1">
                        <button className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-medium text-sm transition-all shadow-md">
                            Project
                        </button>
                        <button className="px-6 py-2.5 rounded-full text-slate-600 hover:text-slate-900 font-medium text-sm transition-all">
                            Monthly
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Starter Card */}
                    <div className="glass-panel p-8 shadow-[0_8px_32px_0_rgba(251,146,60,0.05)] rounded-[2rem]">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Starter</h3>
                        <p className="text-sm text-slate-500 mb-6 h-10">Ideal for MVP and initial phase builds.</p>
                        <div className="mb-8 border-b border-white/30 pb-6">
                            <span className="text-3xl md:text-4xl font-bold text-slate-900">$5,000</span>
                            <span className="text-slate-400 text-xs ml-1">– $15,000</span>
                        </div>
                        <button className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/40 border border-white/60 text-slate-800 hover:bg-white/60 font-semibold transition-all">
                            Start Small
                        </button>
                    </div>

                    {/* Growth Card (Highlighted) */}
                    <div className="glass-panel p-8 shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] border border-orange-200/50 rounded-[2rem] relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold shadow-lg">
                            Most Popular
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-orange-600 mb-2">Growth</h3>
                        <p className="text-sm text-slate-500 mb-6 h-10">Scaling operations and advanced AI integrations.</p>
                        <div className="mb-8 border-b border-orange-200/30 pb-6">
                            <span className="text-3xl md:text-4xl font-bold text-slate-900">$15,000</span>
                            <span className="text-slate-400 text-xs ml-1">– $50,000</span>
                        </div>
                        <button className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl shimmer-orange text-white font-bold transition-all shadow-lg hover:shadow-orange-300">
                            Scale Now
                        </button>
                    </div>

                    {/* Enterprise Card */}
                    <div className="glass-panel p-8 shadow-[0_8px_32px_0_rgba(251,146,60,0.05)] rounded-[2rem]">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                        <p className="text-sm text-slate-500 mb-6 h-10">Complete digital transformation and custom microservices.</p>
                        <div className="mb-8 border-b border-white/30 pb-6">
                            <span className="text-3xl md:text-4xl font-bold text-slate-900">$50,000+</span>
                            <span className="text-slate-400 text-xs ml-1">USD</span>
                        </div>
                        <button className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/40 border border-white/60 text-slate-800 hover:bg-white/60 font-semibold transition-all">
                            Let&apos;s Talk
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
