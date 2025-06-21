import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const posts = [
  {
    title: 'Introducing Our New Feature',
    excerpt: 'Discover how our latest feature can help you stay productive and organized.',
    date: 'August 15, 2024',
    url: '#'
  },
  {
    title: 'Tips for Maximizing Productivity',
    excerpt: 'Learn the best practices to get the most out of our app and your day.',
    date: 'July 30, 2024',
    url: '#'
  },
  {
    title: 'How We Ensure Your Data Security',
    excerpt: 'An inside look at the measures we take to protect your information.',
    date: 'July 10, 2024',
    url: '#'
  }
]

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Latest from Our Blog</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and insights from our team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">{post.date}</span>
                <Button asChild size="sm" variant="outline">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
