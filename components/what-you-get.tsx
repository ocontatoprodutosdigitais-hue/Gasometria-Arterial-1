export function WhatYouGet() {
  const collections = [
    ['14', 'FUNDAMENTOS E PARÂMETROS', 'Conheça a proposta do guia, o roteiro geral de interpretação, as diferenças entre amostras, a leitura do laudo e os principais parâmetros da gasometria.', 'Entender o exame e o significado dos seus dados.'],
    ['6', 'EQUILÍBRIO ÁCIDO-BASE', 'Estude ácidos, bases, tampões, o papel dos pulmões e dos rins, a relação entre pH, CO₂ e bicarbonato e os quatro distúrbios primários.', 'Compreender a lógica por trás das alterações.'],
    ['14', 'SEQUÊNCIA E DISTÚRBIOS', 'Acompanhe a ordem de leitura da gasometria e aprofunde os mecanismos e a interpretação das acidoses e alcaloses respiratórias e metabólicas.', 'Organizar o raciocínio e reconhecer os principais padrões.'],
    ['9', 'COMPENSAÇÃO E DISTÚRBIOS MISTOS', 'Explore a resposta esperada, a fórmula de Winter, o gap aniônico, a correção pela albumina e as pistas para reconhecer alterações associadas.', 'Comparar os resultados e investigar distúrbios mistos.'],
    ['6', 'OXIGENAÇÃO', 'Relacione PaO₂ e FiO₂, acompanhe a relação P/F, o gradiente alvéolo-arterial, os mecanismos de hipoxemia e o transporte de oxigênio.', 'Interpretar a oxigenação considerando o contexto.'],
    ['11', 'CASOS E REVISÃO FINAL', 'Pratique com 14 casos comentados em sete páginas e revise os erros frequentes, o roteiro de interpretação e as fórmulas e siglas.', 'Aplicar o raciocínio e revisar o conteúdo.'],
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FAFBFC' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-12">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl" style={{ color: '#142B49' }}>
            60 Páginas Organizadas em 6 Blocos de Estudo
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: '#526176' }}>
            Um único guia dividido por assunto para você estudar em sequência ou consultar o tema que precisa revisar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {collections.map(([count, title, description, funcao]) => (
            <article
              key={title}
              className="group relative flex min-h-[220px] flex-col rounded-[18px] border p-6 shadow-[0_8px_24px_rgba(20,43,73,0.06)] transition-all duration-250 hover:-translate-y-1 hover:border-[#087F8C] hover:shadow-[0_14px_30px_rgba(20,43,73,0.12)]"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE5EC' }}
            >
              <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-[#087F8C] opacity-70 transition-opacity duration-250 group-hover:opacity-100" />
              <div className="flex items-baseline gap-2">
                <span className="font-grotesk text-4xl leading-none sm:text-5xl" style={{ color: '#087F8C' }}>
                  {count}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#087F8C' }}>
                  Páginas
                </span>
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <h3 className="font-grotesk text-lg leading-tight text-pretty sm:text-xl uppercase tracking-wide" style={{ color: '#142B49' }}>{title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: '#526176' }}>{description}</p>
              </div>
              <p className="mt-5 border-t pt-4 text-xs sm:text-sm" style={{ color: '#526176', borderColor: '#DCE5EC' }}>
                <span className="font-bold uppercase tracking-wide" style={{ color: '#087F8C' }}>Função:</span>{' '}
                {funcao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
