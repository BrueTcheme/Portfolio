import { motion } from 'framer-motion';
import { Github, Linkedin, Briefcase, GraduationCap, Code2, Globe } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${photographerInfo.name}, ${photographerInfo.tagline}. ${photographerInfo.biography.split('\n\n')[0]}`}
        image={photographerInfo.portraitImage}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                About
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Full Stack Developer & Problem Solver
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Portrait / Code Image */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
                  <img
                    src={photographerInfo.portraitImage}
                    alt={photographerInfo.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {photographerInfo.socialLinks.github && (
                    <a
                      href={photographerInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.linkedin && (
                    <a
                      href={photographerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Biography and Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                    {photographerInfo.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">
                    {photographerInfo.tagline}
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-4 space-y-2">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a href={`mailto:${photographerInfo.email}`} className="text-foreground hover:text-muted-foreground transition-colors">
                      {photographerInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="text-foreground">{photographerInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.h2
              className="text-3xl md:text-4xl font-light tracking-wide text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Technical Skills
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code2 className="size-5" />
                  <h3 className="text-sm font-medium tracking-wide uppercase">Languages & Frameworks</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {photographerInfo.skills.languages.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm font-light bg-accent rounded-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
                  <h3 className="text-sm font-medium tracking-wide uppercase">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {photographerInfo.skills.databases.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm font-light bg-accent rounded-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="size-5" />
                  <h3 className="text-sm font-medium tracking-wide uppercase">Tools & Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {photographerInfo.skills.tools.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm font-light bg-accent rounded-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="size-5" />
                  <h3 className="text-sm font-medium tracking-wide uppercase">Methodologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {photographerInfo.skills.methodologies.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm font-light bg-accent rounded-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.h2
              className="text-3xl md:text-4xl font-light tracking-wide text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Work Experience
            </motion.h2>

            <div className="space-y-10">
              {photographerInfo.experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="relative pl-8 border-l-2 border-border space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary" />
                  <div>
                    <h3 className="text-xl font-medium">{exp.company}</h3>
                    <p className="text-muted-foreground font-light">{exp.role} · {exp.location}</p>
                    <p className="text-sm text-muted-foreground font-light">{exp.period}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm font-light text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Languages */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div className="space-y-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2">
                <GraduationCap className="size-5 text-muted-foreground" />
                <h3 className="text-2xl font-light tracking-wide">Education</h3>
              </div>
              <ul className="space-y-3">
                {photographerInfo.education.map((edu, i) => (
                  <li key={i} className="text-base font-light text-muted-foreground">{edu}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="space-y-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-2">
                <Globe className="size-5 text-muted-foreground" />
                <h3 className="text-2xl font-light tracking-wide">Languages</h3>
              </div>
              <ul className="space-y-3">
                {photographerInfo.languages.map((lang) => (
                  <li key={lang.name} className="text-base font-light text-muted-foreground">
                    <span className="text-foreground">{lang.name}</span> — {lang.level}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
