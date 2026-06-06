import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { EbookCatalog } from '../components/EbookCatalog';
import { About } from '../components/About';
import { TrustBadges } from '../components/TrustBadges';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';
import { PageBackground } from '../components/PageBackground';
export function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <PageBackground />
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustBadges />
        <EbookCatalog />
        <About />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>);

}