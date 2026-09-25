import React, { useEffect, useRef } from 'react'
import Icon from './Icon'
import { processSteps, paymentInfo } from '../data/freelance'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const gsap: any

const Step: React.FC<{ step: (typeof processSteps)[0]; index: number }> = ({
  step,
  index,
}) => {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!itemRef.current || !gsap) return
    const ctx = gsap.context(() => {
      const item = itemRef.current!
      gsap.from(item, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        delay: index * 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          once: true,
        },
      })
    }, itemRef)

    return () => ctx.revert()
  }, [index, gsap])

  return (
    <div ref={itemRef} className="flex gap-5 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-sm font-semibold text-accent group-hover:bg-accent group-hover:text-white transition-colors">
        {step.number}
      </div>
      <p className="text-sm text-secondary leading-relaxed pt-1">{step.text}</p>
    </div>
  )
}

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !gsap) return
    const ctx = gsap.context(() => {
      const section = sectionRef.current!
      gsap.from('.process-header', {
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
    <section id="processo" ref={sectionRef} className="container-section">
      <div className="grid md:grid-cols-[1fr_3fr] gap-12 items-start mb-12 process-header">
        <div>
          <h2 className="section-title">Como funciona</h2>
          <p className="section-subtitle">
            Transparência desde o briefing até a entrega
          </p>
        </div>
        <p className="text-sm text-secondary leading-relaxed">
          Processo enxuto para freelas de alto impacto, sem burocracia
          desnecessária, mas com todos os controles que um projeto
          profissional exige.
        </p>
      </div>

      <div className="mb-12">
        {processSteps.map((step, index) => (
          <Step key={step.number} step={step} index={index} />
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {paymentInfo.map((info) => (
          <div key={info.label} className="card p-5">
            <h3 className="text-sm font-semibold text-primary mb-2">
              {info.label}
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              {info.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
