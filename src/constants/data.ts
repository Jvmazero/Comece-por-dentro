export interface EbookBenefit {
  title: string;
  description: string;
}

export interface EbookChapter {
  number: string;
  title: string;
}

export interface Ebook {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  promoNote?: string;
  coverUrl: string;
  pages: number;
  format: string;
  benefits: EbookBenefit[];
  chapters: EbookChapter[];
  forWho: string[];
}

// SINGLE PRODUCT — the only ebook being sold on the site
export const EBOOK: Ebook = {
  id: 'eb-1',
  title: 'Escrita Terapêutica',
  subtitle: 'Um guia prático para transformar emoções em autoconhecimento',
  shortDescription:
  'Descubra o poder transformador da escrita terapêutica. Este eBook foi criado para guiar você em uma jornada de autoconhecimento, fortalecimento da saúde mental e reencontro com sua essência, oferecendo ferramentas práticas para cultivar mais clareza, equilíbrio emocional e bem-estar em sua vida.',
  longDescription:
  'Mais do que um eBook, este é um convite para olhar para dentro. Através da escrita terapêutica, você será conduzido por uma jornada de autoconhecimento, fortalecimento da saúde mental e reencontro com sua essência. Cada capítulo foi cuidadosamente elaborado para oferecer reflexões, exercícios e experiências de escrita que promovem mais clareza emocional, consciência e bem-estar.',
  price: 37.9,
  originalPrice: 49.9,
  promoNote: 'Promocional nos primeiros 15 dias · depois R$ 49,90',
  coverUrl:
    '/WhatsApp Image 2026-06-07 at 15.45.56.jpeg',
  pages: 36,
  format: 'PDF Digital',
  benefits: [
  {
    title: 'Conecte-se com suas emoções',
    description:
    'Aprenda a reconhecer, compreender e expressar sentimentos que muitas vezes permanecem guardados ou difíceis de nomear.'
  },
  {
    title: 'Exercícios de escrita guiada',
    description:
    'Práticas simples e profundas que ajudam a organizar pensamentos, aliviar tensões emocionais e ampliar a autoconsciência.'
  },
  {
    title: 'Desenvolva o autoconhecimento',
    description:
    'Explore crenças, padrões de comportamento, desejos e desafios por meio de perguntas reflexivas e propostas de escrita.'
  },
  {
    title: 'Cultive mais equilíbrio emocional',
    description:
    'Utilize a escrita como uma ferramenta de cuidado pessoal, fortalecendo sua saúde mental e sua conexão consigo mesma.'
  },
  {
    title: 'Um espaço seguro para sua transformação',
    description:
    'Transforme palavras em caminhos de reflexão, crescimento pessoal e reconexão com aquilo que realmente importa para você.'
  }],

  chapters: [
  {
    number: '01',
    title: 'Escrevendo com a Alma: O Que é a Escrita Terapêutica'
  },
  {
    number: '02',
    title: 'Seu Primeiro Passo: Começando a Escrever com Leveza'
  },
  {
    number: '03',
    title: 'Mergulhando Fundo: Estruturando Suas Sessões de Escrita'
  },
  {
    number: '04',
    title: 'Libere Suas Palavras: Superando os Bloqueios da Escrita'
  },
  {
    number: '05',
    title:
    'O Dia a Dia com Suas Palavras: Integrando a Escrita na Sua Rotina'
  }],

  forWho: [
  'Para pessoas que desejam utilizar a escrita como uma ferramenta de autoconhecimento e crescimento pessoal.',
  'Para quem busca compreender melhor suas emoções, pensamentos e comportamentos de forma acolhedora e consciente.',
  'Para quem deseja desenvolver mais clareza emocional, autoestima e conexão consigo mesmo.',
  'Para qualquer pessoa que queira desacelerar, olhar para dentro e cultivar uma relação mais gentil consigo mesma.']

};

export const TESTIMONIALS = [
{
  id: 1,
  name: 'Mariana S.',
  text: 'A escrita terapêutica mudou minha forma de lidar com as emoções. As propostas são acolhedoras, parece que elas estão conversando com a gente. Recomendo muito!'
},
{
  id: 2,
  name: 'Camila R.',
  text: 'Faço os exercícios de escrita quase todos os dias. É um conteúdo profundo, mas explicado de forma tão simples e empática. Fez toda a diferença na minha rotina.'
},
{
  id: 3,
  name: 'Juliana M.',
  text: 'Material impecável. Dá para sentir o cuidado e o profissionalismo em cada página. Me ajudou a enxergar minhas emoções de uma forma completamente nova.'
}];


export const FAQS = [
{
  question: 'Como recebo o e-book após a compra?',
  answer:
  'Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o e-book em formato PDF. Você pode ler no celular, tablet ou computador.'
},
{
  question: 'Quais são as formas de pagamento?',
  answer:
  'Aceitamos Pix (aprovação imediata), Cartão de Crédito em até 12x e Boleto Bancário (pode levar até 3 dias úteis para compensar).'
},
{
  question: 'Como funciona a garantia ou reembolso?',
  answer:
  'Você tem garantia incondicional de 7 dias. Se achar que o conteúdo não é para você, basta enviar um e-mail e devolvemos 100% do seu dinheiro, sem burocracia.'
},
{
  question: 'Posso imprimir o e-book?',
  answer:
  'Sim! O arquivo é liberado para impressão caso você prefira ler no papel e fazer suas anotações fisicamente.'
},
{
  question: 'O e-book substitui a terapia?',
  answer:
  'Não. Este material é psicoeducativo e oferece ferramentas e reflexões valiosas, mas não substitui o acompanhamento psicológico individualizado.'
}];