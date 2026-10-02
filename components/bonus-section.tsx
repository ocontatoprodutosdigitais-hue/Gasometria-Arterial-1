'use client';

// Image files still show the previous product; alt keeps describing the real file until the images are replaced.
const recursos = [
  {
    label: 'RECURSO 1',
    name: '14 Casos Comentados',
    description:
      'Casos fictícios com diferentes padrões ácido-base e de oxigenação, acompanhados de comentários para conferir o raciocínio.',
    image: '/images/osteo/bonus-revisao-express.webp',
    alt: 'Capa do bônus: Revisão Express de Osteologia',
  },
  {
    label: 'RECURSO 2',
    name: 'Roteiro de Interpretação',
    description:
      'Uma sequência de consulta para reunir contexto, parâmetros, resposta esperada, gap, oxigenação e síntese.',
    image: '/images/osteo/bonus-teste-identificacao.webp',
    alt: 'Capa do bônus: Teste Sua Identificação',
  },
  {
    label: 'RECURSO 3',
    name: 'Fórmulas e Revisão Final',
    description:
      'Fórmulas, siglas, erros frequentes e checklist para consultar os pontos essenciais durante o estudo.',
    image: '/images/osteo/bonus-flashcards.webp',
    alt: 'Capa do bônus: Flashcards de Osteologia Veterinária',
  },
];

export function BonusSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#142B49' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-10 md:mb-14">
          <span className="font-grotesk text-xs sm:text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#F7D8D1' }}>
            Recursos Inclusos
          </span>
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-balance" style={{ color: '#FFFFFF' }}>
            Além das Explicações, Você Conta com 3 Recursos de Estudo
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255, 0.90)' }}>
            Recursos integrados ao próprio guia para praticar, revisar e acompanhar a interpretação.
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-6 lg:flex-row lg:gap-6">
          {recursos.map((recurso) => (
            <div
              key={recurso.label}
              className="bonus-card flex w-full flex-col rounded-[20px] p-5 sm:p-6"
              style={{
                backgroundColor: '#FAFBFC',
                border: '1px solid #DCE5EC',
                boxShadow: '0 12px 30px rgba(20,43,73, 0.28)',
                transition: 'all 250ms ease',
              }}
            >
              <span
                className="self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                style={{ backgroundColor: '#142B49', color: '#FFFFFF' }}
              >
                {recurso.label}
              </span>

              <div className="mt-4 flex justify-center">
                <img
                  src={recurso.image || '/placeholder.svg'}
                  alt={recurso.alt}
                  className="w-full max-w-[320px] h-auto object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-4 font-grotesk text-base sm:text-lg leading-snug" style={{ color: '#142B49' }}>
                {recurso.name}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: '#526176' }}>
                {recurso.description}
              </p>

              <div className="mt-5 flex items-center justify-end gap-3 border-t pt-4" style={{ borderColor: '#DCE5EC' }}>
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                  style={{ backgroundColor: '#087F8C', color: '#FFFFFF' }}
                >
                  Incluso no guia
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bonus-card:hover {
          transform: translateY(-4px);
          border-color: #087F8C;
          box-shadow: 0 20px 42px rgba(20,43,73, 0.34);
        }
      `}</style>
    </section>
  );
}
