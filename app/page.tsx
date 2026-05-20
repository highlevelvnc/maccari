import Preloader from '@/components/preloader'
import WhatsappFab from '@/components/whatsapp-fab'
import MobileCtaBar from '@/components/mobile-cta-bar'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import TrustBar from '@/components/trust-bar'
import Services from '@/components/services'
import WhyMaccari from '@/components/why-maccari'
import EnergyHighlight from '@/components/energy-highlight'
import Projects from '@/components/projects'
import Coverage from '@/components/coverage'
import Testimonials from '@/components/testimonials'
import AuthorityReel from '@/components/authority-reel'
import Founder from '@/components/founder'
import FAQ from '@/components/faq'
import ContactForm from '@/components/contact-form'
import FinalCta from '@/components/final-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Preloader />
      <WhatsappFab />
      <MobileCtaBar />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyMaccari />
        <EnergyHighlight />
        <Projects />
        <Coverage />
        <Testimonials />
        <AuthorityReel />
        <Founder />
        <FAQ />
        <ContactForm />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
