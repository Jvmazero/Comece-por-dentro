export const CONFIG = {
  // PLACEHOLDERS - User can change these easily
  WHATSAPP_NUMBER: '5511900000000', // Format: CountryCode + AreaCode + Number
  DOMAIN: 'agoracomecepordentro.com.br',
  BRAND_NAME: 'Agora, comece por dentro',
  BRAND_TAGLINE: 'Psicologia para reconectar você com você',
  LOGO_TEXT: 'Agora, comece por dentro',
  // Official brand logo
  LOGO_URL: "/pasted-image.jpg",


  // External sales page URL (Hotmart, Eduzz, Kiwify, etc.)
  // Replace this with your actual checkout link
  EXTERNAL_SALES_URL: 'https://pay.kiwify.com.br/DCNZN0F',

  // The two psychologists (co-founders, co-authors)
  PSYCHOLOGISTS: [
  {
    name: 'Daiane Monique',
    crp: 'CRP 00/00001',
    photoUrl: "/WhatsApp_Image_2026-05-22_at_21.38.53.jpg",

    // Focus crop on the face (top of the portrait)
    objectPosition: 'center 30%',
    bio: 'Daiane Monique é psicóloga comportamental com experiência em análise do comportamento e desenvolvimento de metas. Atua ajudando pessoas a se conectarem com seus recursos internos e a construírem uma vida mais equilibrada, saudável e consciente.'
  },
  {
    name: 'Niáscara Cerqueira',
    crp: 'CRP 00/00002',
    photoUrl: "/WhatsApp_Image_2026-06-05_at_22.32.20.jpg",

    objectPosition: 'center',
    bio: 'Niáscara Cerqueira é psicóloga capixaba, dedicada à criação de conteúdos e projetos que unem psicologia e autoconhecimento. Seu foco é apoiar homens e mulheres em seus processos de transformação, promovendo leveza, autoestima e propósito.'
  }],


  // WhatsApp Message Template
  getWhatsAppLink: (message: string) =>
  `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
};