'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    description: 'Ideal para pequenos negócios começando a automatizar.',
    features: ['Até 500 leads/mês', '1 canal de atendimento', 'Relatórios básicos', 'Suporte por email'],
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'Para negócios em crescimento que precisam de mais poder.',
    features: ['Até 3.000 leads/mês', '3 canais de atendimento', 'Relatórios avançados', 'Suporte prioritário', 'Integração com CRM'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Solução completa para grandes operações de vendas.',
    features: ['Leads ilimitados', 'Canais ilimitados', 'Dashboard personalizado', 'Gerente de conta dedicado', 'API própria'],
    highlighted: false,
  },
]

export default function Plans() {
  return (
    <section id="planos" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Escolha seu <span className="text-orange-500">plano</span>:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col gap-4 ${
                plan.highlighted
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white border border-gray-100'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm ${plan.highlighted ? 'text-orange-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {plan.features.map((feature) => (
                  <li key={feature} className={`text-sm flex items-center gap-2 ${plan.highlighted ? 'text-white' : 'text-gray-600'}`}>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${plan.highlighted ? 'bg-white text-orange-500' : 'bg-orange-100 text-orange-500'}`}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#contato"
                className={`mt-auto text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-orange-500 hover:bg-orange-50'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                Começar agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}