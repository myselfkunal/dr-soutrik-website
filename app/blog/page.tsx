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
    title: '5 Signs It Is Time to See an Orthopedic Surgeon for Your Knee Pain',
    excerpt: 'Knee pain that persists beyond 4–6 weeks, worsens on stairs, causes swelling, or limits your daily activities is not something to ignore. Dr. Soutrik Mukherjee explains the specific warning signs that indicate your knee needs professional evaluation — and why early intervention almost always leads to better outcomes.',
    category: 'Joint Health',
    readTime: '5 min read',
    date: 'June 2025',
    slug: 'signs-you-may-need-knee-replacement',
    featured: true,
  },
  {
    title: 'Knee Replacement: Myths vs. Facts — A Surgeon\'s Perspective',
    excerpt: '"I am too young for a knee replacement." "Recovery takes a year." "I will never walk normally again." These are among the most common fears patients share before surgery. Dr. Mukherjee addresses 8 common myths about knee replacement surgery — and what the evidence actually shows about outcomes, age, and recovery.',
    category: 'Joint Health',
    readTime: '7 min read',
    date: 'May 2025',
    slug: 'knee-replacement-myths-facts',
    featured: true,
  },
  {
    title: 'Understanding Your MRI Report: What Orthopedic Terms Actually Mean',
    excerpt: 'Most patients receive an MRI report full of terms like "disc herniation", "meniscal tear", "chondral loss", or "ligamentous laxity" — and have no idea what they mean. This plain-language guide by Dr. Mukherjee helps you understand the most common findings and what they imply for your treatment.',
    category: 'Spine Care',
    readTime: '8 min read',
    date: 'May 2025',
    slug: 'understanding-mri-report',
    featured: true,
  },
  {
    title: 'Sciatica vs. Back Pain: How to Tell the Difference',
    excerpt: 'Not all lower back pain is the same. Sciatica — caused by nerve compression — has a very different pattern from mechanical back pain, and the treatments differ significantly. Learn how to identify which one you might have, and when each requires surgery vs. physiotherapy.',
    category: 'Spine Care',
    readTime: '6 min read',
    date: 'April 2025',
    slug: 'sciatica-vs-back-pain',
    featured: false,
  },
  {
    title: 'ACL Tear: Do You Always Need Surgery?',
    excerpt: 'A complete ACL tear does not automatically mean you need surgery — it depends on your age, activity level, other structures injured, and your goals. Dr. Mukherjee breaks down who benefits from reconstruction vs. conservative rehab, and what the criteria-based return-to-sport protocol looks like.',
    category: 'Sports Medicine',
    readTime: '6 min read',
    date: 'April 2025',
    slug: 'acl-tear-surgery-or-not',
    featured: false,
  },
  {
    title: 'Osteoporosis in India: Why Women Over 50 Need a Bone Density Check',
    excerpt: 'India has one of the highest burdens of osteoporosis in the world, yet most women are diagnosed only after a fracture. Dr. Mukherjee explains who should get a DEXA scan, what the T-score means, and how osteoporosis is managed before it leads to a fragility fracture.',
    category: 'Arthritis',
    readTime: '5 min read',
    date: 'March 2025',
    slug: 'osteoporosis-women-india',
    featured: false,
  },
  {
    title: 'What Happens During a Hip Replacement — Step by Step',
    excerpt: 'Many patients are anxious about hip replacement because they do not know what to expect. This article walks you through exactly what happens on the day of surgery, what implants are used, and what the first 48 hours look like — including why most patients walk the next morning.',
    category: 'Recovery Tips',
    readTime: '7 min read',
    date: 'March 2025',
    slug: 'hip-replacement-step-by-step',
    featured: false,
  },
  {
    title: 'Runner\'s Knee vs. Meniscus Tear: Getting the Diagnosis Right',
    excerpt: 'Both conditions cause knee pain in active people, but they have different causes, locations, and treatments. Misdiagnosis is common. Dr. Mukherjee explains how to distinguish between patellofemoral pain syndrome and a true meniscus tear — and why it matters for treatment.',
    category: 'Sports Medicine',
    readTime: '5 min read',
    date: 'February 2025',
    slug: 'runners-knee-vs-meniscus-tear',
    featured: false,
  },
  {
    title: 'Physiotherapy vs. Surgery for Rotator Cuff Tears: Making the Right Choice',
    excerpt: 'A rotator cuff tear on an MRI does not always need an operation. The decision depends on the type of tear, your age, symptoms, and how long you have had it. Dr. Mukherjee outlines the evidence-based approach to deciding between arthroscopic repair and structured physiotherapy.',
    category: 'Recovery Tips',
    readTime: '6 min read',
    date: 'January 2025',
    slug: 'rotator-cuff-physio-vs-surgery',
    featured: false,
  },
  {
    title: 'Complex Trauma: Why the First 24 Hours After a Fracture Matter Most',
    excerpt: 'In complex fractures — especially around the pelvis, hip, or long bones — the decisions made in the first 24 hours significantly affect long-term outcomes. Dr. Mukherjee explains the "damage control" approach to trauma surgery and why early fixation, when appropriate, prevents complications.',
    category: 'Recovery Tips',
    readTime: '6 min read',
    date: 'December 2024',
    slug: 'complex-trauma-first-24-hours',
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
