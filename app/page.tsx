import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'
import ImageGallery from '@/components/ImageGallery'
import About from '@/components/About'
import Process from '@/components/Process'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  // Featured images from different categories for homepage gallery
  const featuredImages = [
    // Sports Wear
    '/assets/sports wear/IMG-20251220-WA0014.jpg',
    '/assets/sports wear/IMG-20251220-WA0018.jpg',
    '/assets/sports wear/IMG-20251220-WA0022.jpg',
    // Winter Wear
    '/assets/winter wear/IMG-20251220-WA0173.jpg',
    '/assets/winter wear/IMG-20251220-WA0178.jpg',
    '/assets/winter wear/IMG-20251220-WA0182.jpg',
    // Summer Wear
    '/assets/summer wear/IMG-20251220-WA0034.jpg',
    '/assets/summer wear/IMG-20251220-WA0038.jpg',
    '/assets/summer wear/IMG-20251220-WA0051.jpg',
    // Street Wear
    '/assets/street wear/IMG-20251220-WA0060.jpg',
    '/assets/street wear/IMG-20251220-WA0066.jpg',
    '/assets/street wear/IMG-20251220-WA0072.jpg',
    // Leisure Wear
    '/assets/leisure wear/IMG-20251220-WA0150.jpg',
    '/assets/leisure wear/IMG-20251220-WA0157.jpg',
    '/assets/leisure wear/IMG-20251220-WA0160.jpg',
    // Gym Wear
    '/assets/gym wear/IMG-20251220-WA0083.jpg',
    '/assets/gym wear/IMG-20251220-WA0093.jpg',
    '/assets/gym wear/IMG-20251220-WA0098.jpg',
    // Caps & Beanies
    '/assets/caps and beanies/IMG-20251220-WA0112.jpg',
    '/assets/caps and beanies/IMG-20251220-WA0124.jpg',
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <div className="relative">
        {/* Decorative gradient background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />
      </div>
      <Categories />
      <FeaturedProducts />
      <ImageGallery
        images={featuredImages}
        title="Our Premium Collection"
        subtitle="Discover quality craftsmanship across all our product categories"
      />
      <About />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
