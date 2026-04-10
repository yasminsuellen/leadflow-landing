'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-white px-6 pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Automatize seu atendimento e <span className="text-orange-500">qualifique leads</span> com inteligência!
        </motion.h1>

        <motion.p
          className="text-xl text-gray-500 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Transforme conversas em oportunidades reais de negócio, 24 horas por dia, 7 dias por semana.
        </motion.p>

        <motion.a
          href="#contato"
          className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          quero automatizar agora
        </motion.a>
      </div>
    </section>
  )
}