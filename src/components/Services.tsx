import React, { useEffect, useRef } from 'react'
import Icon from './Icon'
import { services } from '../data/freelance'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const gsap: any

const ServiceCard: React.FC<{ service: (typeof services)[0]; index: number }> = ({
  service,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current || !gsap) return
    const ctx = gsap.context(() => {
      const card = cardRef.current!
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
      })
    }, cardRef)

    return () => ctx.revert()
  }, [index, gsap])

  const IconComponent = Icon

  return (
    <div ref={cardRef} className="card p-6 md:p-8 flex flex-col h-full group">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
          <IconComponent name={service.icon} className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
      </div>
      <p className="text-sm text-secondary leading-relaxed mb-6 flex-1">
        {service.description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
          {service.price}
        </span>
        <a
          href="#contact"
          className="text-xs text-muted hover:text-accent flex items-center gap-1 transition-colors"
        >
          Saiba Mais
          <Icon name="arrow-right" className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !gsap) return
    const ctx = gsap.context(() => {
      const section = sectionRef.current!
      gsap.from('.services-header', {
        opacity: 0,
        y: 20,
        duration: 0.5,
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
    <section id="services" ref={sectionRef} className="container-section">
      <div className="grid md:grid-cols-[1fr_3fr] gap-12 items-start mb-12 services-header">
        <div>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Pacotes práticos para resolver dor real
          </p>
        </div>
        <p className="text-sm text-secondary leading-relaxed">
          Soluções enxutas e eficazes para pequenos e médios projetos,
          com entrega rápida e código sustentável.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Services
