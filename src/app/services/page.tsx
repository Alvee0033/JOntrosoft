export default function ServicesPage() {
    return (
        <main className="relative w-full overflow-x-hidden">
            {/* Hero Section */}
            <header className="pt-32 md:pt-48 pb-10 md:pb-16 text-center px-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-4 md:mb-6">
                    Elevating Reality
                </h1>
                <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
                    JANTRA delivers spatial computing solutions that bridge the gap between physical and digital dimensions.
                </p>
            </header>

            {/* Service Section 1 */}
            <section className="relative w-full py-16 md:py-32 min-h-0 md:min-h-[800px]" id="service-1">
                <div className="container mx-auto px-6 relative">
                    {/* Mobile: stacked layout, Desktop: absolute positioned overlap */}
                    <div className="flex flex-col lg:block gap-8">
                        {/* 3D Object Placeholder */}
                        <div className="relative lg:absolute lg:left-[10%] w-full lg:w-[45%] h-[250px] sm:h-[350px] md:h-[500px] z-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden flex items-center justify-center shadow-2xl animate-[float_6s_ease-in-out_infinite]">
                            <div className="w-40 md:w-64 h-40 md:h-64 bg-white/30 rounded-full blur-3xl" />
                            <span className="text-orange-400 font-mono text-[10px] md:text-xs uppercase tracking-widest absolute">
                                Volumetric Mesh Instance // 01
                            </span>
                        </div>
                        {/* Glass Content Card */}
                        <div className="relative lg:absolute lg:right-[15%] lg:top-[100px] w-full lg:w-[40%] z-20 glass-panel p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem]">
                            <span className="text-orange-500 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3 md:mb-4 block">
                                Core Service 01
                            </span>
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Spatial Infrastructure</h2>
                            <p className="text-slate-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                                Our specialized framework allows for the deployment of persistent digital twins within physical spaces. Leveraging advanced occlusion and real-world mapping, we create environments that feel natural and tactile.
                            </p>
                            <button className="bg-slate-900 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-orange-600 transition-all font-medium text-sm md:text-base">
                                Explore Architecture
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Section 2 */}
            <section className="relative w-full py-16 md:py-32 min-h-0 md:min-h-[800px]" id="service-2">
                <div className="container mx-auto px-6 relative">
                    <div className="flex flex-col-reverse lg:block gap-8">
                        {/* 3D Object Placeholder (Right Side on desktop) */}
                        <div
                            className="relative lg:absolute lg:right-[10%] w-full lg:w-[45%] h-[250px] sm:h-[350px] md:h-[500px] z-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-tr from-slate-200 to-slate-300 overflow-hidden flex items-center justify-center shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                            style={{ animationDelay: "-3s" }}
                        >
                            <div className="w-40 md:w-64 h-40 md:h-64 bg-white/40 rounded-full blur-3xl" />
                            <span className="text-slate-400 font-mono text-[10px] md:text-xs uppercase tracking-widest absolute">
                                Interactive Node // 02
                            </span>
                        </div>
                        {/* Glass Content Card (Left on desktop) */}
                        <div className="relative lg:absolute lg:left-[15%] lg:top-[100px] w-full lg:w-[40%] z-20 glass-panel p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem]">
                            <span className="text-orange-500 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3 md:mb-4 block">
                                Core Service 02
                            </span>
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Cognitive Interface</h2>
                            <p className="text-slate-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                                Designed for VisionOS and spatial platforms, our UX patterns prioritize gaze, voice, and gesture. We build interfaces that disappear into the workflow, reducing cognitive load while maximizing immersion.
                            </p>
                            <button className="bg-slate-900 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-orange-600 transition-all font-medium text-sm md:text-base">
                                Interface Design
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-12 md:py-24 px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem]">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to step into the future?</h3>
                    <p className="text-slate-600 mb-6 md:mb-8 text-sm md:text-base">
                        Join JANTRA in redefining how we interact with information and each other.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                        <input
                            className="px-5 md:px-6 py-3 rounded-full border-white/50 bg-white/20 backdrop-blur-md focus:ring-orange-500 focus:border-orange-500 w-full sm:min-w-[300px]"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <button className="bg-orange-500 text-white px-8 md:px-10 py-3 rounded-full hover:bg-orange-600 transition-all font-bold">
                            Get Access
                        </button>
                    </div>
                </div>
                <div className="mt-8 md:mt-12 text-slate-400 text-xs md:text-sm">
                    © 2024 JANTRA SERVICES. ALL RIGHTS RESERVED.
                </div>
            </footer>
        </main>
    );
}
