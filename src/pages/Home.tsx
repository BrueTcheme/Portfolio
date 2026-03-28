import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Code2, Server, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?crop=entropy&cs=tinysrgb&fit=crop&h=1080&w=1920&q=80"
              alt="Developer workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-widest text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name.split(' ')[0].toUpperCase()}
                <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 tracking-[0.3em]">
                  {photographerInfo.name.split(' ').slice(1).join(' ').toUpperCase()}
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl font-light tracking-wide text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.tagline}
              </motion.p>

              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>

              {/* Tech Stack Pills */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 text-sm font-light tracking-wider text-white/90 border border-white/20 rounded-full backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">What I Do</h2>
                <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
                  {photographerInfo.biography.split('\n\n')[0]}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Code2, title: 'Frontend', desc: 'React.js, Next.js, TypeScript, TailwindCSS — pixel-perfect, responsive interfaces.' },
                { icon: Server, title: 'Backend', desc: 'Node.js, REST APIs, MongoDB, WebRTC & Socket.IO for real-time systems.' },
                { icon: Cloud, title: 'DevOps', desc: 'AWS EC2, Docker, Nginx, CI/CD — production-ready cloud deployments.' },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.15}>
                  <div className="p-8 border border-border rounded-sm space-y-4 hover:bg-accent/50 transition-colors">
                    <item.icon className="size-8 text-muted-foreground" />
                    <h3 className="text-xl font-light tracking-wide">{item.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="text-center mt-12">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                A selection of recent work
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
