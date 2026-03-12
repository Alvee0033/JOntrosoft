import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full flex items-center overflow-hidden pt-20 md:pt-0">
      {/* 3D Anchor Placeholder — hidden on mobile, visible on desktop */}
      <section className="hidden lg:flex absolute right-[5%] top-[15%] w-[55%] h-[80%] z-10 items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center animate-[float_8s_ease-in-out_infinite]">
          {/* Central Cube */}
          <div className="relative w-48 h-48 xl:w-64 xl:h-64 bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl rounded-[3rem] rotate-45 flex items-center justify-center">
            <div className="w-24 h-24 xl:w-32 xl:h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-inner animate-[spin_12s_linear_infinite]" />
          </div>
          {/* Node 1 */}
          <div className="absolute top-1/4 left-1/4 w-14 h-14 xl:w-16 xl:h-16 bg-white/40 backdrop-blur-xl rounded-full border border-white/60 shadow-lg flex items-center justify-center animate-[float_4s_ease-in-out_infinite] z-30">
            <div className="w-3 h-3 bg-orange-500 rounded-full" />
          </div>
          {/* Node 2 */}
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 xl:w-20 xl:h-20 bg-white/30 backdrop-blur-xl rounded-full border border-white/60 shadow-lg flex items-center justify-center animate-[float_6s_ease-in-out_infinite] z-30">
            <div className="w-4 h-4 bg-orange-400 rounded-full opacity-60" />
          </div>
          {/* Node 3 */}
          <div className="absolute top-1/2 -right-4 w-10 h-10 xl:w-12 xl:h-12 bg-white/50 backdrop-blur-xl rounded-full border border-white/60 shadow-lg flex items-center justify-center animate-[float_8s_ease-in-out_infinite] z-30">
            <div className="w-2 h-2 bg-orange-600 rounded-full" />
          </div>
        </div>
      </section>

      {/* Glass Interface */}
      <section className="relative mx-auto px-6 sm:px-10 lg:absolute lg:left-[10%] lg:top-[25%] lg:w-[40%] z-20 glass-panel bg-white/20 backdrop-blur-[40px] border border-white/50 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-12 lg:p-16 max-w-lg lg:max-w-none">
        <div className="space-y-6 md:space-y-8">
          <header>
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
              Future of Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Enterprise Software, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                Reimagined.
              </span>
            </h1>
          </header>
          <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-md">
            Experience the next generation of spatial computing for business. Modular, intuitive, and designed for the visionaries of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 pt-2 md:pt-4">
            <Link
              href="/checkout"
              className="text-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(249,115,22,0.5)] transition-all active:scale-95"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="text-center px-6 md:px-8 py-3 md:py-4 bg-white/50 hover:bg-white/80 text-slate-800 font-semibold rounded-full transition-all border border-white/40"
            >
              View Demo
            </Link>
          </div>
        </div>
        {/* Social proof */}
        <div className="mt-8 md:mt-12 flex items-center gap-4 md:gap-6 border-t border-white/20 pt-6 md:pt-8">
          <div className="flex -space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-200" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-300" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-400" />
          </div>
          <p className="text-xs md:text-sm text-slate-500 font-medium">Joined by 2,000+ companies</p>
        </div>
      </section>
    </main>
  );
}
