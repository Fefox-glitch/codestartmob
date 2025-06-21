import { Card } from '@/components/ui/card'

const features = [
  {
    title: 'Intuitive Design',
    description: 'Clean and modern interface that puts everything at your fingertips',
    icon: '🎨'
  },
  {
    title: 'Real-time Sync',
    description: 'Your data is always up to date across all your devices',
    icon: '🔄'
  },
  {
    title: 'Secure & Private',
    description: 'Industry-leading security measures to protect your data',
    icon: '🔒'
  },
  {
    title: 'Offline Mode',
    description: 'Full functionality even without an internet connection',
    icon: '📱'
  },
  {
    title: 'Smart Notifications',
    description: 'Stay informed with intelligent, customizable alerts',
    icon: '🔔'
  },
  {
    title: 'Cloud Backup',
    description: 'Never lose your important data with automatic cloud backup',
    icon: '☁️'
  }
]

export default function FeatureSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Powerful Features for Modern Users
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to stay productive and connected, wrapped in a 
            beautiful, easy-to-use interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <Card 
              key={feature.title}
              className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white hover-lift group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <span 
                  className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110" 
                  role="img" 
                  aria-label={feature.title}
                >
                  {feature.icon}
                </span>
                <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
