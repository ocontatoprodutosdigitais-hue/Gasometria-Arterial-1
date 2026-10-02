'use client';

import { useRef } from 'react';
import { TopBar } from '@/components/top-bar';
import { HeroSection } from '@/components/hero-section';
import { ProductCarousel } from '@/components/product-carousel';
import { HowItWorks } from '@/components/how-it-works';
import { WhatYouGet } from '@/components/what-you-get';
import { SubjectsSection } from '@/components/subjects-section';
import { PricingSection } from '@/components/pricing-section';
import { BonusSection } from '@/components/bonus-section';
import { Testimonials } from '@/components/testimonials';
import { Guarantee } from '@/components/guarantee';
import { FAQ } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

// Image files still show the previous product; alt keeps describing the real file until the images are replaced.
const carrossel1 = [
  { image: '/images/osteo/pg-costela.webp', title: 'Visão Geral da Interpretação', alt: 'Como Reconhecer e Orientar uma Costela' },
  { image: '/images/osteo/pg-vertebras-toracicas.webp', title: 'Como Ler um Laudo', alt: 'Vértebras Torácicas — Comparação entre Espécies' },
  { image: '/images/osteo/pg-cranio-ventral.webp', title: 'pH: O Estado Ácido-Base', alt: 'Crânio — Vista Ventral' },
  { image: '/images/osteo/pg-vertebras-cervicais.webp', title: 'PaCO₂: O Componente Respiratório', alt: 'Vértebras Cervicais — Comparação entre Espécies' },
  { image: '/images/osteo/pg-vistas-cranio.webp', title: 'HCO₃⁻: O Componente Metabólico', alt: 'Como Identificar as Vistas do Crânio' },
  { image: '/images/osteo/pg-cranio.webp', title: 'Os Quatro Distúrbios Primários', alt: 'Crânio — Estrutura e Comparação' },
  { image: '/images/osteo/pg-mapa-torax.webp', title: 'Verifique a Compensação', alt: 'Mapa Visual do Tórax Veterinário' },
  { image: '/images/osteo/pg-sacro.webp', title: 'Casos Comentados', alt: 'Sacro — Identificação e Comparação' },
];

const carrossel2 = [
  { image: '/images/osteo/pg-denticao.webp', title: 'Compensação na Acidose Metabólica', alt: 'Dentição e Arcadas Dentárias' },
  { image: '/images/osteo/pg-cavidade-nasal.webp', title: 'Como Calcular o Gap Aniônico', alt: 'Cavidade Nasal e Conchas' },
  { image: '/images/osteo/pg-maxila.webp', title: 'Albumina e Gap Corrigido', alt: 'Maxila, Incisivo e Zigomático' },
  { image: '/images/osteo/pg-neurocranio.webp', title: 'Como Reconhecer Distúrbios Mistos', alt: 'Neurocrânio e Viscerocrânio' },
  { image: '/images/osteo/pg-base-cranio.webp', title: 'PaO₂ Depende do Contexto', alt: 'Base do Crânio' },
  { image: '/images/osteo/pg-seios-paranasais.webp', title: 'Relação PaO₂/FiO₂', alt: 'Seios Paranasais' },
  { image: '/images/osteo/pg-arcadas-dentarias.webp', title: 'Roteiro de Interpretação', alt: 'Arcadas Dentárias e Tipos de Dentes' },
  { image: '/images/osteo/pg-orbita.webp', title: 'Fórmulas e Siglas', alt: 'Órbita e Cavidade Orbital' },
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#E8F5F4' }}>
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <ProductCarousel
        title="Conheça o Guia de Gasometria por Dentro"
        subtitle="Veja como os conceitos, as etapas de interpretação e os casos foram organizados para ajudar você a entender o conjunto dos resultados."
        items={carrossel1}
        bg="#FAFBFC"
      />
      <HowItWorks />
      <WhatYouGet />
      <SubjectsSection />
      <ProductCarousel
        title="Relacione, Interprete e Revise com Mais Clareza"
        subtitle="Cada tipo de página ajuda você a acompanhar o raciocínio e revisar os pontos que mais geram dúvida."
        flowSteps={[
          ['Fluxogramas de Interpretação', 'Acompanhe a ordem de leitura e as perguntas que orientam cada etapa.'],
          ['Explicações Visuais', 'Entenda as relações entre os parâmetros e os mecanismos dos distúrbios.'],
          ['Comparações de Padrões', 'Observe diferenças entre alterações respiratórias, metabólicas e respostas esperadas.'],
          ['Fórmulas e Consulta', 'Encontre os cálculos e as siglas apresentados no material para apoiar sua revisão.'],
          ['Casos Comentados', 'Pratique com resultados fictícios e confira o raciocínio explicado.'],
        ]}
        items={carrossel2}
        reverse={true}
        bg="#FAFBFC"
      />
      <Testimonials />
      <BonusSection />
      <div ref={offerRef}><PricingSection /></div>
      <Guarantee />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
