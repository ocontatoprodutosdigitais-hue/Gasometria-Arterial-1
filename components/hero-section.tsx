'use client';

import { Check } from 'lucide-react';

export function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  const scrollToOffer = () => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#FAFBFC' }}>
      <div className="mobile-content flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border" style={{ backgroundColor: 'rgba(8,127,140, 0.06)', color: '#087F8C', borderColor: 'rgba(8,127,140, 0.30)' }}>
              🔒 COMPRA SEGURA • PAGAMENTO PROTEGIDO
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-3 sm:gap-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em]" style={{ color: '#087F8C', fontFamily: 'var(--font-inter)' }}>
              Gasometria Arterial
            </span>
            <h1 className="font-grotesk text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-balance text-center max-w-2xl" style={{ color: '#142B49' }}>
              Gasometria Arterial — Guia Visual de Estudos
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-pretty text-center max-w-md sm:max-w-lg" style={{ color: '#526176' }}>
              Decorar os valores é só o começo. Aprenda a relacionar pH, PaCO₂ e bicarbonato com fluxogramas, explicações visuais e casos comentados em um guia de 60 páginas.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-pretty text-center max-w-md" style={{ color: '#526176' }}>
              Fundamentos, distúrbios ácido-base, compensação, oxigenação e 14 casos comentados em um só material.
            </p>
          </div>
          <div className="w-full flex justify-center py-2 sm:py-4 md:py-6 overflow-visible">
            <div className="w-full max-w-2xl flex justify-center items-center">
              <img
                src="/images/osteo/hero-colecao.webp"
                alt="Coleção Osteologia Veterinária: volumes principais, bônus e páginas internas com crânio, vértebras e ossos dos membros"
                className="w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 24px 45px rgba(20,43,73, 0.25))' }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-12 rounded-full text-sm sm:text-base md:text-lg active:scale-95 cta-animate"
              style={{
                background: '#087F8C',
                color: '#FFFFFF',
                border: '1px solid #087F8C',
                boxShadow: '0 8px 22px rgba(8,127,140, 0.4)',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#066571';
                e.currentTarget.style.borderColor = '#066571';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(8,127,140, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#087F8C';
                e.currentTarget.style.borderColor = '#087F8C';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(8,127,140, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO ACESSAR O GUIA DE GASOMETRIA
            </button>
            <p className="text-xs sm:text-sm text-center" style={{ color: '#526176' }}>Acesso após a confirmação do pagamento.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-2">
            {['Pagamento único', 'Consulte quando precisar', '7 dias de garantia', 'Material digital em PDF'].map((label) => <div key={label} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: '#24364B' }}><span className="rounded-full flex items-center justify-center" style={{ backgroundColor: '#087F8C', color: '#FFFFFF', width: '18px', height: '18px' }}><Check size={11} strokeWidth={3} aria-hidden="true" /></span>{label}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
