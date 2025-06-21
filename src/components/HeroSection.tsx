import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform Your Mobile Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Discover a new way to interact with your mobile device. Powerful features, 
            seamless integration, and an intuitive interface designed for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6"
              asChild
            >
              <a href="#download">Download iOS App</a>
            </Button>
            <Button 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-lg px-8 py-6"
              asChild
            >
              <a href="#download">Get it on Android</a>
            </Button>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 relative">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="animate-float">
              <Image
                src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg"
                alt="Mobile app interface showcase"
                width={400}
                height={800}
                priority
                className="rounded-3xl shadow-2xl w-auto h-auto max-w-full"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 blur-3xl opacity-30 bg-blue-500 w-full h-full transform rotate-12 translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  )
}
