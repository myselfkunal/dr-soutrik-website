import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/sections/cta-section'
import { Clock, ArrowRight, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Patient Education & Blog | Dr. Soutrik Mukherjee',
  description: 'Educational articles about orthopedic conditions, treatments, recovery tips, and joint health. Stay informed about your musculoskeletal health.',
}

const categories = [
  'All',
  'Joint Health',
  'Spine Care',
  'Sports Medicine',
  'Arthritis',
  'Recovery Tips',
]

const articles = [
  {
    title: 'Signs You May Need Knee Replacement Surgery',
    excerpt: 'Knee replacement surgery is a major decision. Learn about the warning signs that indicate it might be time to consider this life-changing procedure, from persistent pain to mobility limitations.',
    category: 'Joint Health',
    readTime: '5 min read',
    date: 'Recent',
    slug: 'signs-you-may-need-knee-replacement',
    featured: true,
  },
  {
    title: 'Understanding Arthritis: Types, Symptoms, and Treatment Options',
    excerpt: 'Arthritis affects millions of people worldwide. This comprehensive guide covers the different types of arthritis, their symptoms, and the various treatment options available today.',
    category: 'Arthritis',
    readTime: '8 min read',
    date: 'Recent',
    slug: 'understanding-arthritis',
    featured: true,
  },
  {
    title: 'Common Causes of Back Pain and When to Seek Help',
    excerpt: 'Back pain is one of the most common reasons people visit orthopedic surgeons. Learn about the various causes of back pain and when conservative treatment may not be enough.',
    category: 'Spine Care',
    readTime: '6 min read',
    date: 'Recent',
    slug: 'common-causes-of-back-pain',
    featured: false,
  },
  {
    title: 'Preventing Sports Injuries: A Guide for Athletes',
    excerpt: 'Whether you are a professional athlete or a weekend warrior, preventing injuries is crucial. Discover essential tips for warming up, training safely, and protecting your joints.',
    category: 'Sports Medicine',
    readTime: '5 min read',
    date: 'Recent',
    slug: 'preventing-sports-injuries',
    featured: false,
  },
  {
    title: 'Recovery After Joint Replacement: What to Expect',
    excerpt: 'Understanding the recovery process after joint replacement surgery can help set realistic expectations. Learn about the timeline, rehabilitation exercises, and tips for a smooth recovery.',
    category: 'Recovery Tips',
    readTime: '7 min read',
    date: 'Recent',
    slug: 'recovery-after-joint-replacement',
    featured: true,
  },
  {
    title: 'Benefits of Early Orthopedic Consultation',
    excerpt: 'Many musculoskeletal problems are easier to treat when caught early. Learn why seeking early orthopedic consultation can prevent conditions from worsening and improve outcomes.',
    category: 'Joint Health',
    readTime: '4 min read',
    date: 'Recent',
    slug: 'benefits-of-early-consultation',
    featured: false,
  },
  {
    title: 'Maintaining Joint Health as You Age',
    excerpt: 'Aging does not have to mean joint pain. Discover lifestyle changes, exercises, and nutrition tips that can help maintain healthy joints throughout your life.',
    category: 'Joint Health',
    readTime: '6 min read',
    date: 'Recent',
    slug: 'maintaining-joint-health',
    featured: false,
  },
  {
    title: 'ACL Injuries: Prevention, Treatment, and Recovery',
    excerpt: 'ACL injuries are common in sports. Learn about how these injuries occur, treatment options including surgical and non-surgical approaches, and what to expect during rehabilitation.',
    category: 'Sports Medicine',
    readTime: '7 min read',
    date: 'Recent',
    slug: 'acl-injuries-guide',
    featured: false,
  },
  {
    title: 'When Conservative Treatment Is Not Enough',
    excerpt: 'Conservative treatments like medication and physical therapy are often the first line of treatment. But when should you consider surgery? Learn about the decision-making process.',
    category: 'Recovery Tips',
    readTime: '5 min read',
    date: 'Recent',
    slug: 'when-conservative-treatment-fails',
    featured: false,
  },
  {
    title: 'Understanding Minimally Invasive Spine Surgery',
    excerpt: 'Minimally invasive techniques have revolutionized spine surgery. Learn about the benefits, procedures, and what makes these surgeries different from traditional approaches.',
    category: 'Spine Care',
    readTime: '6 min read',
    date: 'Recent',
    slug: 'minimally-invasive-spine-surgery',
    featured: false,
  },
]

export default function BlogPage() {
  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Patient Education
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Health Resources & Articles
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Stay informed about your orthopedic health with our educational articles. 
            Written by Dr. Mukherjee to help you understand conditions, treatments, and recovery.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <article 
                key={index}
                className={`group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center ${
                  index === 0 ? 'aspect-[2/1]' : 'aspect-video'
                }`}>
                  <span className="text-6xl">📖</span>
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
                  <h3 className={`font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors ${
                    index === 0 ? 'text-2xl' : 'text-lg'
                  }`}>
                    {article.title}
                  </h3>
                  <p className={`text-muted-foreground mb-4 ${
                    index === 0 ? '' : 'text-sm line-clamp-2'
                  }`}>
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
            All Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <article 
                key={index}
                className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-4xl">📖</span>
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
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
