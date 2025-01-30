import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import { NewsletterForm } from '@/components';
import { getFormattedDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Teknoloji İçerikleri | Fidans Blog',
  description: 'Blockchain, AI ve dijital dönüşüm üzerine derinlemesine analizler ve teknik rehberler',
  openGraph: {
    images: [{ url: '/blog-og.jpg', width: 1200, height: 630 }]
  }
};

type Post = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
};

const posts: Post[] = [
  {
    id: '1',
    slug: 'ai-ile-e-ticaret-devrimi',
    title: 'AI ile E-Ticaret Devrimi',
    summary: 'Yapay zeka destekli kişiselleştirme ve dinamik fiyatlandırma stratejileri',
    date: '2024-03-15',
    readTime: '5 dk',
    tags: ['AI', 'E-Ticaret', 'Makine Öğrenmesi'],
    image: '/blog/ai-ecommerce.jpg'
  },
  {
    id: '2',
    slug: 'blockchain-akilli-sozlesmeler',
    title: 'Blockchain ve Akıllı Sözleşmeler',
    summary: 'DeFi ekosisteminde güvenli işlem protokolleri',
    date: '2024-03-14',
    readTime: '8 dk',
    tags: ['Blockchain', 'DeFi', 'Web3'],
    image: '/blog/smart-contracts.jpg'
  },
  {
    id: '3',
    slug: 'nft-trendleri',
    title: 'NFT Trendleri ve Dijital Koleksiyonculuk',
    summary: 'Digital asset yönetimi ve fractional NFT sistemleri',
    date: '2024-03-13',
    readTime: '6 dk',
    tags: ['NFT', 'Metaverse', 'DApp'],
    image: '/blog/nft-trends.jpg'
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Blog Header */}
      <section className="container text-center">
        <h1 className="text-step-3 font-bold mb-4">
          Teknoloji Rehberleri
        </h1>
        <p className="text-step-0 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Blockchain, yapay zeka ve dijital dönüşüm üzerine teknik yazılar ve vaka analizleri
        </p>
      </section>

      {/* Featured Post */}
      <section className="container">
        <div className="relative group rounded-2xl overflow-hidden">
          <Image
            src={posts[0].image}
            alt={posts[0].title}
            width={1200}
            height={630}
            className="object-cover w-full h-96"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex gap-2 mb-4">
              {posts[0].tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-step-2 font-bold mb-2">
              <Link href={`/blog/${posts[0].slug}`} className="hover:text-primary-300 transition-colors">
                {posts[0].title}
              </Link>
            </h2>
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                {getFormattedDate(posts[0].date)}
              </span>
              <span className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                {posts[0].readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="group relative flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 text-sm text-neutral-600 dark:text-neutral-300">
                  <CalendarIcon className="w-4 h-4" />
                  <time>{getFormattedDate(post.date)}</time>
                  <span className="mx-2">•</span>
                  <ClockIcon className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-step-0 font-semibold mb-2">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-500 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-1">
                  {post.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-sm rounded-md flex items-center gap-1"
                    >
                      <TagIcon className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container max-w-2xl">
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8 text-center">
          <h2 className="text-step-1 font-bold mb-4">Teknoloji Güncellemeleri</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            En son teknoloji haberlerini ve teknik rehberleri e-posta kutunuza gönderelim
          </p>
          <NewsletterForm variant="inline" />
        </div>
      </section>
    </div>
  );
}