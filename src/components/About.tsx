import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Flower2, Sparkles } from 'lucide-react';
import { CONFIG } from '../constants/config';
export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-sage-600 font-medium tracking-wider text-xs uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            Conheça as autoras
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-sage-800 mb-5 text-balance">
            Duas psicólogas,{' '}
            <span className="italic font-light text-sage-700">
              uma jornada compartilhada
            </span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Somos duas psicólogas e fundadoras de "Agora, comece por dentro".
            Todo o nosso conteúdo — dos e-books às palestras — é desenvolvido a
            quatro mãos, unindo nossas experiências clínicas em um cuidado que
            é, ao mesmo tempo, profissional e profundamente humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-10 lg:gap-20 max-w-5xl mx-auto">
          {CONFIG.PSYCHOLOGISTS.map((psy, index) =>
          <motion.div
            key={psy.name}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.15
            }}
            className="text-center">
            
              <div className="relative w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-6">
                <div
                className={`absolute inset-0 rounded-full -z-10 blur-2xl ${index === 0 ? 'bg-lilac-200' : 'bg-mint-200'} opacity-70`} />
              
                <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl">
                  <img
                  src={psy.photoUrl}
                  alt={psy.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: psy.objectPosition || 'center'
                  }} />
                
                </div>
              </div>

              <h3 className="font-serif text-2xl text-sage-800 mb-1">
                {/* PLACEHOLDER: Nome da Psicóloga */}
                {psy.name}
              </h3>
              <p className="text-sage-500 text-sm font-medium mb-4 tracking-wide">
                {psy.crp}
              </p>
              <p className="text-stone-600 leading-relaxed max-w-sm mx-auto">
                {psy.bio}
              </p>
            </motion.div>
          )}
        </div>

        {/* Brand pillars */}
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
          className="mt-20 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="flex flex-col items-center text-center p-8 bg-sage-50 rounded-3xl">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-sage-500 shrink-0 mb-4 shadow-sm">
              <Brain className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-xl text-sage-800 mb-2">
              Autoconhecimento
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              Um olhar atento e gentil para o seu próprio interior.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-lilac-50 rounded-3xl">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-lilac-500 shrink-0 mb-4 shadow-sm">
              <Flower2 className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-xl text-sage-800 mb-2">
              Crescimento
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              Florescer no seu tempo, com cuidado e leveza.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-mint-50 rounded-3xl">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-mint-500 shrink-0 mb-4 shadow-sm">
              <Sparkles className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-xl text-sage-800 mb-2">
              Transformação
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              Liberdade emocional para a próxima fase da sua história.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}