'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ana Paula Silva',
    role: 'CEO, Clínica Estética Renovar',
    text: 'Desde que implementamos o LeadFlow, nossa taxa de conversão triplicou. Os leads chegam muito mais qualificados pro nosso time.',
    initials: 'AS',
  },
  {
    name: 'Carlos Mendes',
    role: 'Diretor Comercial, ImóveisPrime',
    text: 'Antes perdíamos leads por demora no atendimento. Agora o sistema responde na hora e nosso time só cuida do fechamento.',
    initials: 'CM',
  },
  {
    name: 'Juliana Rocha',
    role: 'Fundadora, Escola de Idiomas Fluente',
    text: 'Automatizamos o atendimento no WhatsApp e Instagram ao mesmo tempo. Simplesmente não consigo imaginar voltar ao jeito antigo.',
    initials: 'JR',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          O que nossos <span className="text-orange-500">clientes</span> dizem.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-sm leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-semibold text-sm">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}