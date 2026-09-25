import React, { useEffect, useRef } from 'react'
import Icon from './Icon'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const gsap: any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const ScrollTrigger: any

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !gsap) return
    const ctx = gsap.context(() => {
      const section = sectionRef.current!

      // Badge
      gsap.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.2,
        ease: 'power2.out',
      })

      // Headline lines
      gsap.from('.hero-headline-line', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.3,
        ease: 'power2.out',
      })

      // Subtext
      gsap.from('.hero-subtext', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.6,
        ease: 'power2.out',
      })

      // CTA buttons
      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.8,
        ease: 'power2.out',
      })

      // Social icons
      gsap.from('.hero-socials', {
        opacity: 0,
        y: 15,
        duration: 0.4,
        delay: 1.0,
        ease: 'power2.out',
      })

      // Scroll down chevron
      gsap.from('.hero-scroll-chevron', {
        opacity: 0,
        duration: 0.4,
        delay: 1.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [gsap])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-surface-elevated opacity-60" />
      <div className="container-section relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 hero-badge">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted">
              Disponível para novos projetos
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Software Engineer
            <br />
            <span className="text-muted hero-headline-line">
              construindo sistemas confiáveis
            </span>
            <br />
            <span className="text-accent hero-headline-line">
              com tecnologia moderna
            </span>
          </h1>
          <p className="text-lg text-secondary max-w-2xl mb-8 leading-relaxed hero-subtext">
            Sou Aron Chaves, desenvolvedor de software freelancer sediado em São Paulo,
            especializado em sistemas backend, APIs, automações, websites e plataformas
            sob medida. Entrego código de qualidade com comunicação transparente e
            prazos cumpridos.
          </p>
          <div className="flex flex-wrap gap-4 hero-cta">
            <a href="#services" className="btn-primary">
              Ver Serviços
              <Icon name="arrow-right" className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Entrar em Contato
            </a>
          </div>
          <div className="flex items-center gap-4 mt-10 hero-socials">
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
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block hero-scroll-chevron">
          <a
            href="#sobre"
            className="text-muted hover:text-accent transition-colors animate-bounce"
          >
            <Icon name="chevron-down" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
