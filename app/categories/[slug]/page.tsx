import { getCategoryImages, getCategoryInfo } from '@/lib/imageUtils'
import CategoryPageClient from './CategoryPageClient'

// Define all category slugs for static generation
export function generateStaticParams() {
  return [
    { slug: 'sportswear' },
    { slug: 'winter-wear' },
    { slug: 'summer-wear' },
    { slug: 'street-wear' },
    { slug: 'leisure-wear' },
    { slug: 'gym-wear' },
    { slug: 'rain-wear' },
    { slug: 'caps-and-beanies' },
  ]
}

interface CategoryPageProps {
  params: { slug: string }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params
  const categoryInfo = getCategoryInfo(slug)
  const images = getCategoryImages(slug)

  return (
    <CategoryPageClient
      slug={slug}
      categoryInfo={categoryInfo}
      images={images}
    />
  )
}
