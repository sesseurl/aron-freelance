export interface Service {
  icon: 'code' | 'layers' | 'zap' | 'briefcase'
  title: string
  description: string
  price: string
}

export interface ProcessStep {
  number: number
  text: string
}

export interface PaymentInfo {
  label: string
  value: string
}

export const services: Service[] = [
  {
    icon: 'code',
    title: 'Sites Interativos',
    description:
      'Site responsivo, rápido e otimizado para SEO, com foco em conversão.',
    price: 'A partir de R$ 5.000',
  },
  {
    icon: 'layers',
    title: 'Sistemas Customizados',
    description:
      'Backend, APIs e banco de dados sob medida para o core do seu negócio.',
    price: 'A partir de R$ 8.000',
  },
  {
    icon: 'zap',
    title: 'Plataformas Completas',
    description:
      'E-commerce e áreas de membros com painel de gestão e escalabilidade.',
    price: 'A partir de R$ 15.000',
  },
  {
    icon: 'briefcase',
    title: 'Automações Empresariais',
    description:
      'Scripts para eliminar tarefas repetitivas e gerar relatórios de forma confiável.',
    price: 'A partir de R$ 3.000',
  },
]

export const processSteps: ProcessStep[] = [
  { number: 1, text: 'Briefing inicial e alinhamento de escopo.' },
  { number: 2, text: 'Requisitos e cronograma organizados no Notion.' },
  { number: 3, text: 'Entregas incrementais com calls de acompanhamento.' },
  { number: 4, text: 'Aprovação final e handoff com suporte.' },
]

export const paymentInfo: PaymentInfo[] = [
  { label: 'Pagamento', value: '60% adiantado + 40% na entrega' },
  { label: 'Contrato digital', value: 'DocuSign ou Gov.br' },
  { label: 'Emissão de nota fiscal', value: 'Emitida para todas as entregas' },
]
