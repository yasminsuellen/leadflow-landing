'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit() {
    setStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (response.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="py-24 bg-gray-50 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Fale com a <span className="text-orange-500">gente</span>:
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Preencha o formulário e nossa equipe entra em contato em até 24h.
        </p>
        <motion.div
          className="bg-white rounded-2xl p-10 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Mensagem</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Como podemos te ajudar?"
                rows={4}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors resize-none"
              />
            </div>
            {status === 'success' && (
              <p className="text-green-500 text-sm text-center">Mensagem enviada com sucesso!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center">Erro ao enviar. Tente novamente.</p>
            )}
            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className="bg-orange-500 text-white py-4 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}