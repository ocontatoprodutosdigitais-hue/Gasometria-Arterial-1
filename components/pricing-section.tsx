'use client';

import { Check, Star } from 'lucide-react';

/* ===== Constantes de preço e checkout (fáceis de editar) ===== */
const PRICE = 'R$ 24,90';
const CHECKOUT_URL = 'https://pay.cakto.com.br/jfu5bmc_1099946';

const highlightFeature: [string, string] = ['60 Páginas', 'de Estudo Visual'];

const includedFeatures: [string, string][] = [
  ['14 páginas', 'Fundamentos e Parâmetros'],
  ['6 páginas', 'Equilíbrio Ácido-Base'],
  ['14 páginas', 'Sequência e Distúrbios'],
  ['9 páginas', 'Compensação e Distúrbios Mistos'],
  ['6 páginas', 'Oxigenação'],
  ['11 páginas', 'Casos e Revisão Final'],
];

const recursos = [
  '14 casos comentados',
  'Roteiro de interpretação',
  'Fórmulas, siglas e checklist de estudo',
];

function goToCheckout(url: string) {
  if (!url || url === '#') return;
  const params = window.location.search;
  const separator = url.includes('?') ? '&' : '?';
  window.location.href = params ? `${url}${separator}${params.slice(1)}` : url;
}

export function PricingSection() {
  return (
    <section id="checkout" className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#FAFBFC' }}>
      <div className="mobile-content">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-10 md:mb-14">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#142B49' }}>
            
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#526176' }}>
            
          </p>
        </div>

        {/* Plano único */}
        <div className="mx-auto flex max-w-xl">
          <div
            className="relative flex w-full flex-col rounded-[22px] p-6 pt-10 sm:p-8 sm:pt-11"
            style={{
              backgroundColor: '#142B49',
              border: '2px solid #087F8C',
              boxShadow: '0 24px 55px rgba(20,43,73, 0.45)',
            }}
          >
            {/* Badge OFERTA ESPECIAL */}
            <div
              className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: '#087F8C', color: '#FFFFFF', boxShadow: '0 6px 16px rgba(8,127,140, 0.4)' }}
            >
              <Star size={12} strokeWidth={2.5} fill="#FAFBFC" aria-hidden="true" />
              Acesso ao Guia Completo
            </div>

            {/* Nome */}
            <div className="text-center">
              <h3 className="font-grotesk text-2xl sm:text-3xl leading-tight text-balance" style={{ color: '#FAFBFC' }}>
                Gasometria Arterial — Guia Visual de Estudos
              </h3>
            </div>

            {/* Mockup grande */}
            <div className="mt-5 flex justify-center">
              <img
                src="/images/osteo/pricing-colecao.webp"
                alt="Coleção Osteologia Veterinária completa com os volumes, os três bônus e o selo de garantia de 7 dias"
                className="w-full max-w-[440px] h-auto object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>

            {/* Destaque principal do pacote */}
            <ul className="mt-6 space-y-3.5">
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                  style={{ width: '24px', height: '24px', backgroundColor: '#087F8C', color: '#FFFFFF' }}
                >
                  <Check size={15} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-base sm:text-lg leading-snug" style={{ color: '#FAFBFC' }}>
                  <span className="font-bold" style={{ color: '#FAFBFC' }}>{highlightFeature[0]}</span>{' '}
                  <span className="font-semibold">{highlightFeature[1]}</span>
                </span>
              </li>

              {includedFeatures.map(([num, rest]) => (
                <li key={rest} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                    style={{ width: '22px', height: '22px', backgroundColor: '#087F8C', color: '#FFFFFF' }}
                  >
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm sm:text-base leading-snug" style={{ color: '#FAFBFC' }}>
                    <span className="font-bold">{num}</span> — {rest}
                  </span>
                </li>
              ))}
            </ul>

            {/* Recursos inclusos */}
            <ul className="mt-5 space-y-3">
              {recursos.map((recurso) => (
                <li key={recurso} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-base font-bold leading-none" style={{ color: '#F7D8D1' }} aria-hidden="true">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base font-semibold leading-snug" style={{ color: '#FAFBFC' }}>
                    {recurso}
                  </span>
                </li>
              ))}
            </ul>

            {/* Separador antes da área de preço */}
            <div className="mt-6 mb-5 h-px w-full" style={{ backgroundColor: 'rgba(255,255,255, 0.18)' }} />

            {/* Área de preço */}
            <div className="text-center">
              <p className="text-sm" style={{ color: 'rgba(255,255,255, 0.75)' }}>
                Guia completo em PDF
              </p>
              <p className="mt-3 font-grotesk text-xs sm:text-sm uppercase tracking-[0.16em]" style={{ color: '#F7D8D1' }}>
                Acesse por apenas
              </p>
              <p className="mt-1 font-grotesk text-6xl sm:text-7xl leading-none" style={{ color: '#FFFFFF' }}>
                {PRICE}
              </p>
              <p className="mt-3 text-xs sm:text-sm font-medium" style={{ color: 'rgba(255,255,255, 0.75)' }}>
                Pagamento único • Sem mensalidade
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => goToCheckout(CHECKOUT_URL)}
              className="mt-6 w-full rounded-full py-4 px-6 text-base font-bold active:scale-95 cta-animate"
              style={{
                background: '#087F8C',
                color: '#FFFFFF',
                border: '1px solid #087F8C',
                boxShadow: '0 10px 26px rgba(8,127,140, 0.35)',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#066571';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#087F8C';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO ACESSAR O GUIA DE GASOMETRIA
            </button>

            {/* Linha de confiança */}
            <p className="mt-5 text-center text-xs sm:text-sm font-medium leading-relaxed" style={{ color: 'rgba(255,255,255, 0.85)' }}>
              🔒 Compra segura • 💳 Pagamento protegido • 📄 Material digital • ✅ 7 dias de garantia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
