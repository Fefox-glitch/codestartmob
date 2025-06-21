import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for getting started',
    features: [
      'Basic features access',
      'Up to 3 devices',
      'Cloud backup (1GB)',
      'Community support'
    ]
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'Best for professionals',
    features: [
      'All Basic features',
      'Unlimited devices',
      'Cloud backup (100GB)',
      'Priority support',
      'Advanced analytics',
      'Custom integrations'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'All Pro features',
      'Unlimited storage',
      'Dedicated support',
      'Custom branding',
      'API access',
      'SLA guarantee'
    ]
  }
]

export default function PricingSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select the perfect plan that suits your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`p-8 hover-lift ${
                plan.popular 
                  ? 'border-2 border-black relative bg-black text-white' 
                  : 'bg-white'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className={`mt-2 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-6 ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-900'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
