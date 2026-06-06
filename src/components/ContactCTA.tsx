import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mic, Users, Building2 } from 'lucide-react';
import { CONFIG } from '../constants/config';
export function ContactCTA() {
  return (
    <section
      id="palestras"
      className="py-24 bg-lilac-100/70 backdrop-blur-sm relative overflow-hidden">
      
      {/* Editorial accent shapes */}
      <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-mint-200 opacity-80 hidden md:block" />
      <div className="absolute bottom-12 left-12 w-20 h-20 rounded-full bg-skyblue-200 opacity-80 hidden md:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-sage-900/5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sage-600 font-medium tracking-wider text-sm uppercase mb-4">
                <Mic className="w-4 h-4" />
                Palestras & Workshops
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-sage-800 mb-5 text-balance">
                Leve a marca para{' '}
                <span className="italic font-light text-sage-600">
                  sua empresa, escola ou evento
                </span>
              </h2>

              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                As duas psicólogas conduzem juntas palestras, workshops e
                encontros sobre saúde mental, autoconhecimento e educação
                emocional para empresas, escolas e eventos. Entre em contato
                pelo WhatsApp para consultar disponibilidade.
              </p>

              <a
                href={CONFIG.getWhatsAppLink(
                  'Olá! Tenho interesse em contratar uma palestra/workshop com as psicólogas.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg">
                
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 p-5 bg-sage-50 rounded-xl">
                <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center text-sage-600 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sage-900 mb-1">
                    Eventos Corporativos
                  </h4>
                  <p className="text-sm text-stone-600">
                    Saúde mental no ambiente de trabalho e gestão emocional.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-sage-50 rounded-xl">
                <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center text-sage-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sage-900 mb-1">
                    Workshops & Imersões
                  </h4>
                  <p className="text-sm text-stone-600">
                    Encontros práticos com exercícios e ferramentas
                    terapêuticas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-sage-50 rounded-xl">
                <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center text-sage-600 shrink-0">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sage-900 mb-1">
                    Palestras Abertas
                  </h4>
                  <p className="text-sm text-stone-600">
                    Eventos, congressos e encontros para o público geral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}