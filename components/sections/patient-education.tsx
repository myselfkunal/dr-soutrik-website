import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const articles = [
  {
    title: 'Signs You May Need Knee Replacement',
    excerpt: 'Learn about the warning signs that indicate it might be time to consider knee replacement surgery for lasting relief from joint pain.',
    category: 'Joint Health',
    readTime: '5 min read',
    href: '/blog/signs-you-may-need-knee-replacement',
  },
  {
    title: 'Common Causes of Back Pain',
    excerpt: 'Understanding the various causes of back pain can help you prevent and manage this common condition more effectively.',
    category: 'Spine Care',
    readTime: '4 min read',
    href: '/blog/common-causes-of-back-pain',
  },
  {
    title: 'Understanding Arthritis',
    excerpt: 'A comprehensive guide to understanding different types of arthritis, their symptoms, and available treatment options.',
    category: 'Arthritis',
    readTime: '6 min read',
    href: '/blog/understanding-arthritis',
  },
  {
    title: 'Preventing Sports Injuries',
    excerpt: 'Essential tips for athletes and active individuals to prevent common sports injuries and maintain peak performance.',
    category: 'Sports Medicine',
    readTime: '4 min read',
    href: '/blog/preventing-sports-injuries',
  },
]

export function PatientEducation() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Patient Education
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Health Resources & Articles
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stay informed about your orthopedic health with our educational articles 
            written to help you understand conditions, treatments, and recovery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-4xl">📖</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <Link 
                  href={article.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors"
                >
                  Read Article
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
