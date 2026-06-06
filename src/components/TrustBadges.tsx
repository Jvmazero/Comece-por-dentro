import React from 'react';
import { ShieldCheck, Lock, Zap, RefreshCcw } from 'lucide-react';
export function TrustBadges() {
  const badges = [
  {
    icon: ShieldCheck,
    title: 'Compra 100% Segura',
    desc: 'Ambiente protegido'
  },
  {
    icon: Lock,
    title: 'Pagamento Criptografado',
    desc: 'Seus dados blindados'
  },
  {
    icon: Zap,
    title: 'Acesso Imediato',
    desc: 'Receba na hora via e-mail'
  },
  {
    icon: RefreshCcw,
    title: 'Garantia de 7 Dias',
    desc: 'Risco zero para você'
  }];

  return (
    <section className="py-12 bg-sage-900 text-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) =>
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3">
            
              <div className="w-12 h-12 bg-sage-800 rounded-full flex items-center justify-center text-sage-200">
                <badge.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium text-white text-sm md:text-base">
                  {badge.title}
                </h4>
                <p className="text-xs md:text-sm text-sage-300 mt-1">
                  {badge.desc}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}