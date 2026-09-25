import React, { useEffect, useRef } from 'react'
import Icon from './Icon'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const gsap: any

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !gsap) return
    const ctx = gsap.context(() => {
      const section = sectionRef.current!
      gsap.from('.contact-card', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [gsap])

  return (
    <section id="contact" ref={sectionRef} className="container-section">
      <div className="card p-8 md:p-12 text-center max-w-2xl mx-auto contact-card">
        <h2 className="text-2xl font-semibold mb-3">Vamos tirar sua ideia do papel?</h2>
        <p className="text-secondary mb-8">
          Estou aberto a discutir novos projetos, freelas e oportunidades.
          Entre em contato pelo WhatsApp ou agende uma call.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://wa.me/5511986993010"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="briefcase" className="w-4 h-4" />
            Falar no WhatsApp
          </a>
          <a
            href="https://calendar.app.google/7jMRsV2HJP9zzm17A"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Icon name="layers" className="w-4 h-4" />
            Agendar Call
          </a>
          <a
            href="mailto:aron.ribeiro.chaves@gmail.com"
            className="btn-secondary"
          >
            <Icon name="mail" className="w-4 h-4" />
            Email
          </a>
        </div>
        <div className="flex items-center justify-center gap-6 pt-6 border-t border-border">
          <a
            href="https://github.com/sesseurl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors"
          >
            <Icon name="github" className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/aron-chaves/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors"
          >
            <Icon name="linkedin" className="w-5 h-5" />
          </a>
          <a
            href="mailto:aron.ribeiro.chaves@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-accent transition-colors"
          >
            <Icon name="mail" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
