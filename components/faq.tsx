'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Para quem é este guia de Gasometria Arterial?',
      a: 'Para quem deseja estudar, revisar ou compreender melhor a gasometria arterial. O conteúdo reúne fundamentos, etapas de interpretação, distúrbios, oxigenação e casos comentados para acompanhar diferentes momentos do estudo.',
    },
    {
      q: 'O que está incluído no material?',
      a: 'Um guia digital em PDF com 60 páginas, incluindo explicações visuais, fluxogramas, comparações, fórmulas, 14 casos comentados e recursos de revisão. Os casos e os recursos de consulta já fazem parte dessas 60 páginas.',
    },
    {
      q: 'O guia substitui livros, aulas ou avaliação profissional?',
      a: 'Ele funciona como material complementar de estudo e consulta. Não substitui livros, aulas, protocolos ou avaliação profissional, e os exemplos apresentados são fictícios.',
    },
    {
      q: 'O material é físico ou digital?',
      a: 'O material é digital, em PDF. Você não receberá um produto físico pelos Correios.',
    },
    {
      q: 'Posso acessar pelo celular?',
      a: 'Sim. O PDF pode ser aberto no celular, tablet ou computador. Para visualizar detalhes das páginas, você pode ampliar a imagem ou estudar em uma tela maior.',
    },
    {
      q: 'Posso imprimir?',
      a: 'Sim. Você pode imprimir o PDF para uso pessoal e organizar suas revisões da forma que preferir.',
    },
    {
      q: 'Como receberei o acesso?',
      a: 'As instruções de acesso serão disponibilizadas após a confirmação do pagamento, pelo canal informado no checkout. O produto é um PDF com pagamento único, sem mensalidade.',
    },
    {
      q: 'Como funciona a garantia?',
      a: 'Você tem 7 dias para conhecer o material. Caso ele não atenda às suas expectativas, poderá solicitar o reembolso pelo canal de atendimento informado na compra, dentro desse prazo.',
    },
  ];

  return (
    <section className="w-full py-14 px-0" style={{ backgroundColor: '#142B49' }}>
      <div className="mobile-content">
        <h2
          className="font-grotesk text-center"
          style={{ color: '#FAFBFC', fontSize: '32px', fontWeight: 600, marginBottom: '28px', lineHeight: 1.2 }}
        >
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col" style={{ gap: '10px' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FAFBFC',
                  border: '1px solid #DCE5EC',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 14px rgba(20,43,73, 0.18)',
                  width: '100%',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between transition-colors"
                  style={{ padding: '19px 18px' }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-left"
                    style={{
                      color: '#24364B',
                      fontSize: '15px',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      paddingRight: '14px',
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="transition-transform duration-200"
                    style={{
                      color: '#087F8C',
                      fontSize: '20px',
                      fontWeight: 700,
                      flexShrink: 0,
                      lineHeight: 1,
                      marginTop: '1px',
                    }}
                  >
                    {isOpen ? '\u2212' : '+'}
                  </span>
                </button>

                <div
                  className="transition-all duration-200 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '600px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      borderTop: '1px solid #DCE5EC',
                      backgroundColor: '#E8F5F4',
                      padding: '19px 18px',
                    }}
                  >
                    <p
                      className="text-left"
                      style={{ color: '#24364B', fontSize: '15px', lineHeight: 1.6 }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
