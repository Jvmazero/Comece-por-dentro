import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { CONFIG } from '../constants/config';
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-36 pb-20 md:pt-52 md:pb-32 overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
          className="text-center">
          
          {/* Centered hero headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-sage-800 leading-[1.02] mb-6 sm:mb-8 mt-2 text-balance">
            Agora,
            <br />
            <span className="italic font-light text-sage-700">
              comece por dentro.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Um espaço para olhar para dentro, cuidar da mente e se reconectar
            consigo mesmo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 sm:mb-16">
            <a
              href={CONFIG.EXTERNAL_SALES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sage-700 hover:bg-sage-800 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
              
              <ShoppingBag className="w-5 h-5" />
              Comprar E-book
            </a>
            <a
              href="#ebook"
              className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur border border-lilac-200 text-sage-700 hover:bg-white px-8 py-4 rounded-full font-medium transition-all">
              
              Saber mais
            </a>
          </div>
        </motion.div>

        {/* Two delicate portrait circles below — symmetric, same on mobile */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.3
          }}
          className="flex items-center justify-center gap-6 sm:gap-10 md:gap-12">
          
          {CONFIG.PSYCHOLOGISTS.map((psy, index) =>
          <div key={psy.name} className="flex flex-col items-center group">
              <div className="relative">
                <div
                className={`absolute inset-0 rounded-full blur-2xl ${index === 0 ? 'bg-lilac-200' : 'bg-mint-200'} opacity-60 scale-110`} />
              
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform group-hover:scale-105">
                  <img
                  src={psy.photoUrl}
                  alt={psy.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: psy.objectPosition || 'center'
                  }} />
                
                </div>
              </div>
              <p className="mt-4 font-serif italic text-sage-700 text-sm sm:text-base">
                {psy.name}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>);

}