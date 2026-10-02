'use client';

const CHECKOUT_URL = 'https://pay.cakto.com.br/jfu5bmc_1099946';

export function FinalCta() {
  const goToCheckout = () => {
    if (typeof window === 'undefined') return;
    const params = window.location.search;
    const separator = CHECKOUT_URL.includes('?') ? '&' : '?';
    window.location.href = params
      ? `${CHECKOUT_URL}${separator}${params.slice(1)}`
      : CHECKOUT_URL;
  };

  return (
      <section className="w-full py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#142B49' }}>
        <div className="mobile-content flex flex-col items-center gap-4">
          <div className="text-center space-y-3 mb-4 w-full">
            <h2 className="w-full font-grotesk text-2xl sm:text-3xl md:text-4xl leading-tight text-pretty" style={{ color: '#FAFBFC', boxSizing: 'border-box' }}>
              Pare de Olhar os Valores Separadamente
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl" style={{ color: 'rgba(255,255,255, 0.78)' }}>
              Tenha uma sequência visual para relacionar os parâmetros, acompanhar a interpretação e praticar com casos comentados.
            </p>
          </div>

        <button
          onClick={goToCheckout}
          className="w-full font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-base sm:text-lg active:scale-95 cta-animate"
          style={{
            maxWidth: '100%',
            boxSizing: 'border-box',
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
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#087F8C';
            e.currentTarget.style.borderColor = '#087F8C';
            e.currentTarget.style.boxShadow = '0 8px 22px rgba(8,127,140, 0.4)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          QUERO ACESSAR O GUIA DE GASOMETRIA
        </button>
        <p className="text-xs sm:text-sm text-center" style={{ color: 'rgba(255,255,255, 0.7)' }}>
          
        </p>
      </div>
    </section>
  );
}
