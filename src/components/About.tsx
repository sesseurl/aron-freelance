import React, { useEffect, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const gsap: any

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !gsap) return
    const ctx = gsap.context(() => {
      const section = sectionRef.current!
      gsap.from('.about-header', {
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
      gsap.from('.about-text p', {
        opacity: 0,
        y: 15,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      })
      gsap.from('.about-meta', {
        opacity: 0,
        duration: 0.3,
        delay: 0.5,
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
    <section id="sobre" ref={sectionRef} className="container-section">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <h2 className="section-title about-header">Sobre</h2>
          <p className="section-subtitle">Quem sou e como trabalho</p>
        </div>
        <div className="space-y-4 text-secondary leading-relaxed about-text">
          <p>
            Desenvolvedor de software com mais de 10 anos de experiência em empresas
            nacionais e multinacionais, com foco em sistemas distribuídos, APIs e
            soluções escaláveis. Atuo no mercado desde 2016, tendo passado por grandes
            instituições financeiras como Banco do Brasil, Bradesco, IBM e Santander.
          </p>
          <p>
            Minha trajetória começa com desenvolvimento web freelance e evolui para
            engenharia de software em ambientes enterprise. Trabalho com Golang, Clojure,
            Elixir, TypeScript, Python, Java, React e Node.js. A parte técnica é onde
            meu maior dom está, mas vejo o projeto como um todo: escopo, comunicação,
            prazos e entrega.
          </p>
          <p>
            Além do desenvolvimento, ofereço mentoria e educação tech para equipes,
            empreendedores e profissionais em transformação digital. Acredito que boas
            decisões técnicas nascem de um entendimento claro do problema de negócio.
          </p>
          <p className="text-muted text-sm pt-2 about-meta">
            São Paulo, Brasil · Português (Nativo) · Inglês (Fluente)
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
