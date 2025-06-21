import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Designer',
    quote: 'This app has completely transformed how I manage my daily tasks. The interface is incredibly intuitive.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Software Developer',
    quote: 'The offline functionality is a game-changer. I can work anywhere without worrying about connectivity.',
    rating: 5
  },
  {
    name: 'Emma Davis',
    role: 'Digital Marketer',
    quote: 'The real-time sync across devices is seamless. It keeps me organized across all my devices.',
    rating: 5
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved by Professionals
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our users have to say about their experience with our app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name}
              className="p-8 bg-gray-900 border-gray-800 hover-lift group"
            >
              <div className="flex flex-col space-y-4">
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-300 text-lg italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
