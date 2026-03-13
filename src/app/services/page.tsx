import ServiceShowcase from "@/components/marketing/ServiceShowcase";
import { serviceOfferings } from "@/content/site";

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

            {serviceOfferings.map((service) => (
                <ServiceShowcase key={service.id} service={service} />
            ))}

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
