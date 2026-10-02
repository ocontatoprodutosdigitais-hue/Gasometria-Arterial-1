import { BookOpen, ListChecks, Brain } from 'lucide-react';

const beneficios = [
  {
    icon: BookOpen,
    title: 'Para entender os fundamentos',
    text: 'Comece pelo significado dos parâmetros e pela relação entre pH, PaCO₂ e bicarbonato antes de avançar para os distúrbios.',
  },
  {
    icon: ListChecks,
    title: 'Para organizar a revisão',
    text: 'Localize o assunto no mapa do conteúdo e consulte explicações, comparações e fórmulas conforme a sua dúvida.',
  },
  {
    icon: Brain,
    title: 'Para praticar o raciocínio',
    text: 'Resolva os casos sem olhar os comentários, justifique sua interpretação e depois confira cada etapa.',
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#F0EBF8' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#142B49' }}>
            Um Guia para Diferentes Momentos do Seu Estudo
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#526176' }}>
            Para começar pelo básico, retomar conceitos ou praticar a interpretação, encontre uma sequência organizada para acompanhar seu estudo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {beneficios.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="flex flex-col gap-5 p-8 md:p-9"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #DCE5EC', borderRadius: '20px', boxShadow: '0 8px 24px rgba(20,43,73, 0.07)' }}
              >
                <span
                  className="flex items-center justify-center rounded-xl"
                  style={{ width: '48px', height: '48px', backgroundColor: '#E8F5F4', color: '#087F8C' }}
                >
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </span>

                <h3 className="font-grotesk text-lg sm:text-xl leading-tight" style={{ color: '#142B49' }}>
                  {b.title}
                </h3>

                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#24364B' }}>
                  {b.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
