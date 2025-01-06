import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import { PriceCalculator } from '@/components/PriceCalculator'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <PriceCalculator />
          </div>
        </section>
        <WhyUs />
      </main>
      <Footer />
    </div>
  )
}

