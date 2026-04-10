'use client'

import { motion } from 'framer-motion'
import type { JSX } from 'react'

const icons: Record<string, JSX.Element> = {
  raio: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#fff7ed"/>
      <polygon points="24,8 18,26 23,26 17,40 31,20 25,20 33,8" fill="#f97316"/>
    </svg>
  ),
  alvo: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#fff7ed"/>
      <circle cx="24" cy="22" r="12" stroke="#f97316" strokeWidth="2.5"/>
      <circle cx="24" cy="22" r="5" fill="#f97316"/>
      <line x1="32" y1="30" x2="40" y2="38" stroke="#f97316" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  grafico: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#fff7ed"/>
      <polyline points="8,36 16,26 23,31 33,19 41,11" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="33" cy="19" r="3" fill="#f97316"/>
      <circle cx="41" cy="11" r="3" fill="#f97316"/>
      <line x1="8" y1="38" x2="41" y2="38" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  moeda: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#fff7ed"/>
      <circle cx="24" cy="24" r="14" fill="none" stroke="#f97316" strokeWidth="2.5"/>
      <line x1="24" y1="14" x2="24" y2="16" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="32" x2="24" y2="34" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 20 Q20 17 24 17 Q28 17 28 21 Q28 24 24 24 Q28 24 28 28 Q28 31 24 31 Q20 31 20 28" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  link: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#fff7ed"/>
      <circle cx="24" cy="24" r="7" fill="#f97316"/>
      <circle cx="10" cy="14" r="5" fill="none" stroke="#f97316" strokeWidth="2.5"/>
      <circle cx="38" cy="14" r="5" fill="none" stroke="#f97316" strokeWidth="2.5"/>
      <circle cx="10" cy="34" r="5" fill="none" stroke="#f97316" strokeWidth="2.5"/>
      <circle cx="38" cy="34" r="5" fill="none" stroke="#f97316" strokeWidth="2.5"/>
      <line x1="15" y1="17" x2="20" y2="21" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="33" y1="17" x2="28" y2="21" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15" y1="31" x2="20" y2="27" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="33" y1="31" x2="28" y2="27" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  barras: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#fff7ed"/>
      <rect x="8" y="30" width="8" height="10" rx="2" fill="#f97316"/>
      <rect x="20" y="22" width="8" height="18" rx="2" fill="#f97316"/>
      <rect x="32" y="14" width="8" height="26" rx="2" fill="#f97316"/>
    </svg>
  ),
}

const benefits = [
  { iconId: 'raio', title: 'Respostas instantâneas', description: 'Nenhum lead fica sem resposta, a qualquer hora do dia.' },
  { iconId: 'alvo', title: 'Leads mais qualificados', description: 'Seu time de vendas foca só em quem realmente tem interesse.' },
  { iconId: 'grafico', title: 'Mais conversões', description: 'Leads bem atendidos convertem até 3x mais que os ignorados.' },
  { iconId: 'moeda', title: 'Redução de custos', description: 'Automatize o que era feito manualmente e reduza sua equipe de pré-vendas.' },
  { iconId: 'link', title: 'Integração fácil', description: 'Conecta com WhatsApp, Instagram, seu site e seu CRM favorito.' },
  { iconId: 'barras', title: 'Relatórios em tempo real', description: 'Acompanhe métricas de atendimento e qualificação num dashboard simples.' },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Por que escolher o <span className="text-orange-500">LeadFlow</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-start mb-2">
                {icons[benefit.iconId]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}