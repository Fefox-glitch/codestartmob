import HeroSection from '@/components/HeroSection'
import FeatureSection from '@/components/FeatureSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import FaqSection from '@/components/FaqSection'
import ContactSection from '@/components/ContactSection'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Mobile App - Modern Mobile Experience',
  description: 'Transform your mobile experience with our innovative app. Download now for iOS and Android.',
}

export default function MobileAppPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Download Section */}
      <section className="py-20 bg-black text-white" id="download">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Mobile Experience?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already upgraded their mobile experience. 
            Download now and start exploring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6"
              asChild
            >
              <a 
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                Download for iOS
              </a>
            </Button>
            <Button 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-lg px-8 py-6"
              asChild
            >
              <a 
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
              >
                Download for Android
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Mobile App. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
