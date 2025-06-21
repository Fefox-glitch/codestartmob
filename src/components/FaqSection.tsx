'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all new users.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely! You can cancel your subscription at any time from your account settings.'
  },
  {
    question: 'Is my data secure?',
    answer: 'We use industry-standard encryption and security practices to protect your data.'
  },
  {
    question: 'Does the app support offline mode?',
    answer: 'Yes, you can access most features even without an internet connection.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach out to our support team via the contact form in the app or email us directly.'
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="p-6 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              {openIndex === index && (
                <p className="text-gray-700">{faq.answer}</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
