import Link from "next/link";
import LottiePlayer from "@/components/LottiePlayer";
import {
  Code, Bot, Smartphone, Workflow, ArrowRight,
  CheckCircle, Target, Zap, Shield, Users, Globe
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-hidden pt-20 md:pt-0">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center lg:mb-20">
        {/* Lottie Animation — hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex absolute right-[5%] top-[10%] w-[55%] h-[80%] z-10 items-center justify-center">
          <LottiePlayer src="/lottie/robotics.json" className="w-full h-full" />
        </div>

        {/* Glass Interface */}
        <div className="relative mx-auto px-6 sm:px-10 lg:absolute lg:left-[5%] xl:left-[10%] lg:top-[20%] w-full lg:w-[45%] z-20 glass-panel bg-white/40 backdrop-blur-[40px] border border-white/50 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-12 lg:p-14 mb-10 lg:mb-0 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]">
          <div className="space-y-6 md:space-y-8">
            <header>
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
                Welcome to JANTRA
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight">
                Showcasing Technical Capability. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                  Building Digital Trust.
                </span>
              </h1>
            </header>
            <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-lg">
              JANTRA converts visionary ideas into robust digital realities through premium Custom Software, state-of-the-art AI Agents, and Agentic Workflow Automation.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 pt-2 md:pt-4">
              <Link
                href="/work"
                className="text-center px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(249,115,22,0.5)] hover:-translate-y-0.5 transition-all text-sm md:text-base flex justify-center items-center gap-2 group"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="text-center px-6 md:px-8 py-3.5 md:py-4 bg-white/70 hover:bg-white text-slate-800 font-bold rounded-full transition-all border border-slate-200 shadow-sm text-sm md:text-base"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-10 md:mt-14 flex items-center gap-4 md:gap-6 border-t border-slate-200/60 pt-6 md:pt-8">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600 shadow-sm">J</div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm">K</div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-700 shadow-sm">M</div>
            </div>
            <p className="text-xs md:text-sm text-slate-600 font-medium">Trusted by leading enterprises globally</p>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR WITH CREDIBILITY METRICS */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 -mt-10 lg:mt-0 mb-20 lg:mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-[2rem] p-6 md:p-10">
          {[
            { metric: "50+", label: "Projects Delivered" },
            { metric: "99%", label: "Client Retention" },
            { metric: "15+", label: "Industry Experts" },
            { metric: "24/7", label: "Ongoing Support" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <h3 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 mb-2">
                {stat.metric}
              </h3>
              <p className="text-sm md:text-base text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SERVICES PREVIEW GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center md:text-left md:flex justify-between items-end mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-3 block">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Capabilities designed for the future</h2>
          </div>
          <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors">
            View all services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code, title: "Custom Software", desc: "Bespoke web & desktop applications built for massive scale.", link: "/services/custom-software-development" },
            { icon: Bot, title: "AI Agents", desc: "Autonomous AI entities that execute complex business tasks.", link: "/services/ai-agent-development" },
            { icon: Smartphone, title: "Mobile Apps", desc: "High-performance iOS and Android applications.", link: "/services/mobile-app-development" },
            { icon: Workflow, title: "Automations", desc: "Agentic workflows that eliminate manual bottlenecks.", link: "/services/agentic-workflow-automation" },
          ].map((svc, i) => (
            <Link key={i} href={svc.link} className="group block h-full">
              <div className="bg-white/50 backdrop-blur-sm border border-slate-200 hover:border-orange-500/50 rounded-3xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                <div className="w-14 h-14 bg-orange-100/80 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <svc.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 flex-1">
                  {svc.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mt-auto">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link href="/services" className="inline-flex items-center gap-2 font-bold text-orange-600 bg-orange-50 px-6 py-3 rounded-full">
            View all 10 services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. WHY JONTRO SECTION */}
      <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden mt-10">
        {/* Abstract Background patterns */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #f97316 0%, transparent 40%)' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
                Why Partner With Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
                We orchestrate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">digital transformation</span>.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                JANTRA is not just an agency; we are your strategic technology partner. We combine deep engineering expertise with proactive problem-solving to deliver systems that scale seamlessly.
              </p>

              <ul className="space-y-6">
                {[
                  { icon: Target, title: "Precision Engineering", desc: "Military-grade architecture that withstands extreme loads." },
                  { icon: Zap, title: "Agile Execution", desc: "Rapid iterations ensuring massive time-to-market advantages." },
                  { icon: Globe, title: "Global Perspective", desc: "World-class standards brought to every line of code we write." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-orange-400 shrink-0 mt-1">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[2.5rem] bg-gradient-to-bl from-slate-800 to-slate-900 border border-slate-700/50 overflow-hidden shadow-2xl h-[400px] md:h-[550px] flex items-center justify-center">
                <LottiePlayer src="/lottie/globe.json" className="w-[80%] h-[80%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK PROCESS TIMELINE */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-3 block">Methodology</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Innovation Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-100 z-0"></div>

            {[
              { num: "01", title: "Discovery", desc: "Deep dive into your business logic, bottlenecks, and core objectives." },
              { num: "02", title: "Architecture", desc: "Designing scalable system blueprints and intuitive UI/UX prototypes." },
              { num: "03", title: "Development", desc: "Agile sprints of rigorous coding, AI integration, and continuous testing." },
              { num: "04", title: "Deployment", desc: "Seamless launch, scaling infrastructure, and ongoing maintenance." },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-24 h-24 rounded-full bg-white border-[8px] border-slate-50 flex items-center justify-center text-3xl font-black text-slate-300 mb-6 shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO HIGHLIGHTS */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-3 block">Selected Work</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Visions materialized.</h2>
          </div>
          <Link href="/work" className="mt-4 md:mt-0 font-bold text-orange-600 hover:text-orange-700 flex items-center gap-2 border border-orange-200 px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">
            View full portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { tag: "Fintech App", name: "FinEdge Analytics Platform", imgColor: "bg-slate-200", brand: "F" },
            { tag: "AI Autonomous Agent", name: "HealthSync Medical AI Assistant", imgColor: "bg-orange-100", brand: "H" },
            { tag: "Enterprise SaaS", name: "AutoServe Logistics Tracker", imgColor: "bg-slate-800", brand: "A", textWhite: true },
          ].map((project, i) => (
            <Link key={i} href="/work/case-study-placeholder" className="group block focus:outline-none">
              <div className={`w-full aspect-square ${project.imgColor} rounded-3xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-all duration-500`}>
                <div className={`text-8xl font-black ${project.textWhite ? 'text-white/20' : 'text-slate-900/10'} group-hover:scale-110 transition-transform duration-700`}>
                  {project.brand}
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">{project.tag}</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2 group-hover:text-orange-600 transition-colors">{project.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-orange-50/50 border-y border-orange-100/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-16">What our partners say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { quote: "JANTRA entirely transformed our chaotic backend logic into a streamlined, high-performance microservices architecture. Outstanding engineering.", name: "Sarah Jenkins", title: "CTO, FinEdge" },
              { quote: "Their AI Agents perform flawlessly. What used to take our support team hours is now resolved autonomously in seconds. Highly recommended.", name: "David Chen", title: "Operations Head, RetailOS" },
              { quote: "The sheer professionalism and technical depth this team brings to the table is unmatched in the region. They truly build for the future.", name: "Amanda Royce", title: "Product Manager, HealthSync" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                <div className="flex gap-1 text-orange-400 mb-6">
                  {[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-slate-600 font-medium text-lg italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECH STACK BANNER */}
      <section className="py-20 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Powered by Industry-Leading Technologies</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 px-6 max-w-5xl mx-auto overflow-hidden">
          {["React", "Next.js", "Node.js", "Python", "TensorFlow", "AWS", "Docker", "Kubernetes", "PostgreSQL", "TailwindCSS"].map((tech, i) => (
            <div key={i} className="text-xl md:text-3xl font-black text-slate-300 hover:text-slate-600 transition-colors whitespace-nowrap cursor-default">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* 9. CALL TO ACTION STRIP */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        {/* Abstract background setup */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 opacity-10"></div>
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-32 bg-orange-500/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Ready to accelerate your growth?
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a free discovery call today. Let's discuss your technical challenges and map out a solution tailored perfectly to your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-full transition-all text-lg shadow-[0_10px_30px_-10px_rgba(249,115,22,0.8)] hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,1)] hover:-translate-y-1">
                Start a Project
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all text-lg backdrop-blur-md">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
