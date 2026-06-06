import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Check,
  FileText,
  BookOpen,
  Clock,
  Star,
  ExternalLink,
  Users } from
'lucide-react';
import { EBOOK } from '../constants/data';
import { CONFIG } from '../constants/config';
export function EbookCatalog() {
  return (
    <section id="ebook" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur border border-lilac-200 text-sage-700 text-xs font-medium uppercase tracking-wider mb-4">
            
            <Star className="w-3.5 h-3.5 fill-current" />
            Nosso e-book
          </motion.div>
          <motion.h2
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
            className="text-4xl md:text-5xl font-serif text-sage-800 mb-4 text-balance">
            
            Um guia escrito{' '}
            <span className="italic font-light text-sage-600">
              a quatro mãos
            </span>
          </motion.h2>
          <motion.p
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
            transition={{
              delay: 0.1
            }}
            className="text-stone-600 text-lg leading-relaxed">
            
            {EBOOK.shortDescription}
          </motion.p>
        </div>

        {/* Featured Product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Cover */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="relative">
            
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Decorative behind-cover blobs */}
              <div className="absolute -inset-6 bg-lilac-100 rounded-[3rem] blur-2xl opacity-60 -z-10" />

              <motion.div
                whileHover={{
                  rotate: 0,
                  y: -8
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200
                }}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl rotate-[-3deg] origin-center">
                
                <img
                  src={EBOOK.coverUrl}
                  alt={`Capa do e-book ${EBOOK.title}`}
                  className="w-full h-full object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-sage-800/30 to-transparent" />
              </motion.div>

              {/* Floating info badges */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.4
                }}
                className="absolute -bottom-4 -right-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-lilac-100 flex items-center gap-3">
                
                <div className="w-9 h-9 rounded-lg bg-mint-100 flex items-center justify-center text-sage-600">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Formato</p>
                  <p className="text-sm font-medium text-sage-800">
                    PDF Digital
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.5
                }}
                className="absolute -top-4 -left-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-lilac-100 flex items-center gap-3">
                
                <div className="w-9 h-9 rounded-lg bg-lilac-100 flex items-center justify-center text-lilac-500">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Páginas</p>
                  <p className="text-sm font-medium text-sage-800">
                    {EBOOK.pages} páginas
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>
            
            <div className="inline-flex items-center gap-2 text-sage-600 text-sm font-medium mb-3">
              <Users className="w-4 h-4" />
              <span>
                Escrito por {CONFIG.PSYCHOLOGISTS[0].name} &{' '}
                {CONFIG.PSYCHOLOGISTS[1].name}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-sage-800 mb-3 leading-tight">
              {EBOOK.title}
            </h3>
            <p className="text-lg text-sage-600 italic mb-6 font-serif font-light">
              {EBOOK.subtitle}
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              {EBOOK.longDescription}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {EBOOK.benefits.map((benefit, index) =>
              <div key={index} className="flex gap-3">
                  <div className="w-6 h-6 bg-mint-200 rounded-full flex items-center justify-center text-sage-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sage-800">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-stone-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Price + CTA */}
            <div className="bg-white p-6 rounded-3xl border border-lilac-100 shadow-sm">
              <div className="flex items-baseline gap-3 mb-1">
                {EBOOK.originalPrice &&
                <span className="text-stone-400 line-through text-lg">
                    R$ {EBOOK.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                }
                <span className="inline-flex items-center px-2 py-0.5 bg-lilac-100 text-sage-700 text-xs font-semibold rounded-full">
                  Promoção de lançamento
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm text-stone-500">por apenas</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-medium text-sage-700 font-serif">
                  R$ {EBOOK.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
              {EBOOK.promoNote &&
              <p className="text-sm text-stone-500 mb-6">{EBOOK.promoNote}</p>
              }

              <a
                href={CONFIG.EXTERNAL_SALES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sage-500 hover:bg-sage-600 text-white font-medium py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg">
                
                <ShoppingBag className="w-5 h-5" />
                Comprar E-book
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-stone-500">
                <Clock className="w-3.5 h-3.5" />
                <span>Pagamento processado em plataforma externa segura</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* For Whom + Chapters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            className="bg-white p-8 rounded-3xl border border-lilac-100">
            
            <h4 className="font-serif text-2xl text-sage-800 mb-6">
              Para quem é este e-book?
            </h4>
            <ul className="space-y-3">
              {EBOOK.forWho.map((item, index) =>
              <li key={index} className="flex gap-3 text-stone-600">
                  <Check className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              )}
            </ul>
          </motion.div>

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
            transition={{
              delay: 0.1
            }}
            className="bg-sage-800 p-8 rounded-3xl text-sage-50">
            
            <h4 className="font-serif text-2xl text-white mb-6">
              O que você vai encontrar
            </h4>
            <ul className="space-y-4">
              {EBOOK.chapters.map((chapter, index) =>
              <li
                key={index}
                className="flex gap-4 items-baseline border-b border-sage-700 pb-3 last:border-0">
                
                  <span className="font-serif text-lilac-300 text-sm font-medium w-6">
                    {chapter.number}
                  </span>
                  <span className="text-sage-100">{chapter.title}</span>
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);

}