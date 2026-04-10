'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-orange-500 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white font-bold text-xl">LeadFlow</span>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
        </button>
      </div>
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            className="md:hidden bg-white px-6 pb-8 flex flex-col gap-5 pt-5 items-end"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-orange-500"
                onClick={() => setMenuAberto(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}