import Preloader from '@/components/preloader'
import WhatsappFab from '@/components/whatsapp-fab'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import TrustBar from '@/components/trust-bar'
import Services from '@/components/services'
import WhyMaccari from '@/components/why-maccari'
import EnergyHighlight from '@/components/energy-highlight'
import Coverage from '@/components/coverage'
import Testimonials from '@/components/testimonials'
import AuthorityReel from '@/components/authority-reel'
import FinalCta from '@/components/final-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Preloader />
      <WhatsappFab />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyMaccari />
        <EnergyHighlight />
        <Coverage />
        <Testimonials />
        <AuthorityReel />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
