import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants/data';
export function Testimonials() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
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
            className="text-3xl md:text-4xl font-serif text-sage-800 mb-4">
            
            O que dizem as leitoras
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
            className="text-stone-600 text-base sm:text-lg">
            
            Histórias reais de pessoas que deram o primeiro passo rumo ao
            autoconhecimento através dos materiais.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial, index) =>
          <motion.div
            key={testimonial.id}
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
              delay: index * 0.1
            }}
            className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-sm border border-lilac-100 relative">
            
              <Quote className="absolute top-6 right-6 w-8 h-8 text-lilac-200" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) =>
              <Star
                key={i}
                className="w-4 h-4 fill-sage-400 text-sage-400" />

              )}
              </div>
              <p className="text-stone-600 mb-6 italic leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div className="font-medium text-sage-800">
                {testimonial.name}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}