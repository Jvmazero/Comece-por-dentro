import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../constants/data';
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="duvidas" className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-sage-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-stone-600 text-lg">
            Tudo o que você precisa saber antes de adquirir seu material.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={false}
                className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-sage-200 bg-sage-50/50' : 'border-stone-200 bg-white hover:border-sage-200'}`}>
                
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left">
                  
                  <span className="font-medium text-sage-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-sage-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}>
                    
                      <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}