'use client'

import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Lead entra em contato', description: 'O cliente manda uma mensagem pelo WhatsApp, site ou redes sociais.' },
  { number: '02', title: 'Automação inicia o atendimento', description: 'O sistema responde instantaneamente, 24h por dia, sem intervenção humana.' },
  { number: '03', title: 'Qualificação inteligente', description: 'O lead responde perguntas-chave e o sistema identifica seu perfil e interesse.' },
  { number: '04', title: 'Lead qualificado entregue', description: 'Apenas leads prontos para compra chegam até o seu time de vendas.' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Como <span className="text-orange-500">funciona</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <span className="text-5xl font-bold text-orange-500">{step.number}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 min-h-[70px]">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}