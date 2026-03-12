export default function CheckoutPage() {
    return (
        <main className="relative w-full min-h-screen overflow-hidden pt-24 md:pt-0">
            {/* 3D Visual Anchor — hidden on mobile */}
            <div className="hidden lg:flex absolute right-[10%] top-[15%] w-[40%] h-[700px] z-10 items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-80 h-[500px] bg-slate-200/50 rounded-3xl border border-white/40 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-100/20 to-transparent" />
                        <div className="w-24 h-24 rounded-full border-4 border-white/80 flex items-center justify-center mb-8">
                            <div className="w-12 h-16 bg-white/40 rounded-lg relative">
                                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-8 h-10 border-4 border-white/40 border-b-0 rounded-t-full" />
                            </div>
                        </div>
                        <div className="text-slate-400 text-xs font-mono tracking-widest uppercase">
                            Encrypted Core
                        </div>
                    </div>
                    <div className="absolute top-20 right-10 w-24 h-24 glass-panel rounded-2xl rotate-12 blur-[2px] opacity-60" />
                    <div className="absolute bottom-40 left-0 w-32 h-32 glass-panel rounded-full -rotate-12 blur-[1px] opacity-40" />
                </div>
            </div>

            {/* Checkout Interface */}
            <section className="relative mx-auto px-4 sm:px-6 lg:absolute lg:left-[10%] lg:top-[20%] w-full max-w-lg lg:max-w-none lg:w-[45%] z-20 glass-panel p-6 sm:p-8 md:p-12 shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] rounded-[2rem] md:rounded-[2.5rem]">
                <header className="mb-6 md:mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-2 tracking-tight">Checkout</h1>
                    <p className="text-slate-500 text-sm md:text-base">Secure your spatial workspace environment.</p>
                </header>

                <div className="space-y-6 md:space-y-8">
                    {/* Plan Summary */}
                    <div className="flex items-center justify-between border-b border-white/30 pb-4 md:pb-6">
                        <div>
                            <h3 className="text-base md:text-lg font-medium text-slate-800">Pro Enterprise Plan</h3>
                            <p className="text-xs md:text-sm text-slate-500">Annual billing (save 20%)</p>
                        </div>
                        <div className="text-right">
                            <span className="text-xl md:text-2xl font-bold text-slate-900">$2,400</span>
                            <span className="block text-[10px] md:text-xs text-slate-400">USD / Year</span>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-3 md:space-y-4">
                        <label className="block text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                            Payment Method
                        </label>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="p-3 md:p-4 bg-white/40 border border-white/60 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-white/60 transition-colors">
                                <div className="w-6 md:w-8 h-4 md:h-5 bg-slate-800 rounded-sm" />
                                <span className="text-xs md:text-sm font-medium">•••• 4242</span>
                            </div>
                            <div className="p-3 md:p-4 bg-transparent border border-white/40 border-dashed rounded-xl md:rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                                <span className="text-xs md:text-sm text-slate-500">+ Add New</span>
                            </div>
                        </div>
                    </div>

                    {/* Security Badge */}
                    <div className="flex items-center gap-2 md:gap-3 py-3 md:py-4 px-4 md:px-5 bg-white/10 rounded-xl md:rounded-2xl">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                clipRule="evenodd"
                                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                fillRule="evenodd"
                            />
                        </svg>
                        <span className="text-[10px] md:text-xs text-slate-600 font-medium">
                            Bank-level 256-bit encryption active
                        </span>
                    </div>

                    {/* Pay Button */}
                    <button className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl shimmer-orange text-white font-bold text-base md:text-lg shadow-xl">
                        Pay $2,400.00
                    </button>
                    <p className="text-center text-[10px] md:text-xs text-slate-400">
                        By clicking pay, you agree to JANTRA&apos;s{" "}
                        <a className="underline" href="#">
                            Terms of Service
                        </a>
                        .
                    </p>
                </div>
            </section>
        </main>
    );
}
