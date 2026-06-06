import React from 'react';
import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { CONFIG } from '../constants/config';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-lilac-100 text-sage-800 py-16 border-t border-lilac-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 mb-6 group">
              
              <img
                src={CONFIG.LOGO_URL}
                alt="Agora, comece por dentro"
                className="w-12 h-12 rounded-full object-cover bg-white group-hover:scale-105 transition-transform shadow-sm" />
              
              <div className="flex flex-col leading-[1.05]">
                <span className="font-serif text-2xl text-sage-800">
                  Agora,
                </span>
                <span className="font-serif italic text-lg text-sage-700">
                  comece por dentro
                </span>
              </div>
            </a>
            <p className="text-stone-600 max-w-sm mb-6 leading-relaxed">
              Um projeto de duas psicólogas dedicado ao autoconhecimento, à
              saúde mental e à reconexão com seu interior.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-sage-700 hover:bg-lilac-300 hover:text-sage-900 transition-colors">
                
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-sage-700 hover:bg-lilac-300 hover:text-sage-900 transition-colors">
                
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:contato@${CONFIG.DOMAIN}`}
                aria-label="E-mail"
                className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-sage-700 hover:bg-lilac-300 hover:text-sage-900 transition-colors">
                
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sage-800 font-medium mb-6 uppercase tracking-wider text-xs">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-stone-600 hover:text-sage-800 transition-colors">
                  
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#ebook"
                  className="text-stone-600 hover:text-sage-800 transition-colors">
                  
                  O E-book
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-stone-600 hover:text-sage-800 transition-colors">
                  
                  As Autoras
                </a>
              </li>
              <li>
                <a
                  href="#palestras"
                  className="text-stone-600 hover:text-sage-800 transition-colors">
                  
                  Palestras
                </a>
              </li>
              <li>
                <a
                  href="#duvidas"
                  className="text-stone-600 hover:text-sage-800 transition-colors">
                  
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sage-800 font-medium mb-6 uppercase tracking-wider text-xs">
              Suporte
            </h4>
            <ul className="space-y-3 text-stone-600 text-sm">
              <li>{CONFIG.PSYCHOLOGISTS[0].crp}</li>
              <li>{CONFIG.PSYCHOLOGISTS[1].crp}</li>
              <li>contato@{CONFIG.DOMAIN}</li>
              <li>
                <a
                  href={CONFIG.getWhatsAppLink('Olá! Preciso de suporte.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-600 hover:text-sage-800 transition-colors">
                  
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp (suporte)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-lilac-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <p>
            © {currentYear} {CONFIG.BRAND_NAME}. Todos os direitos reservados.
          </p>
          <p>
            {/* PLACEHOLDER: agoracomecepordentro.com.br */}
            {CONFIG.DOMAIN}
          </p>
        </div>
      </div>
    </footer>);

}