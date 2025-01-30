import Image from 'next/image';
import { TeamCard, TimelineItem } from '@/components/about';
import { CeoMessage, ValuesSection } from '@/components/sections';
import { Metadata } from 'next';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Hakkımızda | Fidans Online',
  description: '50 yıllık geleneği dijital inovasyonla buluşturan vizyonumuz ve ekibimizle tanışın.',
  openGraph: {
    images: [{ url: '/about-og.jpg', width: 1200, height: 630 }]
  }
};

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="Fidans Ekibi"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-neutral-900/60" />
        </div>
        
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-step-3 font-bold">
              Geleneği Geleceğe Taşıyoruz
            </h1>
            <p className="text-step-0 text-neutral-100">
              1970'lerden bugüne, üç nesildir yenilikçi çözümler üretiyoruz
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <CeoMessage
        name="Ahmet Fidan"
        position="CEO & Kurucu"
        image="/ceo.jpg"
        message="Teknolojiyi insanlığın hizmetine sunma vizyonuyla, her nesilde bir adım öteye taşıdığımız mirasımızla çalışıyoruz."
        stats={[
          { value: '50+', label: 'Yıllık Deneyim' },
          { value: '300+', label: 'Tamamlanan Proje' },
          { value: '95%', label: 'Müşteri Memnuniyeti' }
        ]}
      />

      {/* Company Timeline */}
      <section className="container">
        <h2 className="text-step-2 font-bold text-center mb-16">
          Yolculuğumuz
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          {TIMELINE_DATA.map((item, index) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
              position={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </section>

      {/* Core Values */}
      <ValuesSection
        title="Değerlerimiz"
        values={[
          {
            title: 'İnovasyon',
            description: 'Sınırları zorlayarak sürekli gelişim',
            icon: '⚡'
          },
          {
            title: 'Şeffaflık',
            description: 'Açık iletişim ve hesap verebilirlik',
            icon: '🔍'
          },
          {
            title: 'Sürdürülebilirlik',
            description: 'Gelecek nesiller için teknoloji',
            icon: '🌱'
          }
        ]}
      />

      {/* Team Section */}
      <section className="container">
        <h2 className="text-step-2 font-bold text-center mb-12">
          Uzman Ekibimiz
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard
              key={member.name}
              {...member}
            />
          ))}
        </div>
      </section>

      {/* Legacy Section */}
      <section className="bg-neutral-50 dark:bg-neutral-800 py-16">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-step-2 font-bold">
              Aile Mirasımız
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              3 nesildir teknolojiye olan tutkumuzu koruyor, dedemiz Mustafa Fidan'ın 
              1972'de başlattığı elektronik atölyeden bugünün global dijital ajansına 
              uzanan yolculuğumuzda sizleri de aramızda görmek istiyoruz.
            </p>
            <a 
              href="/history" 
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors"
            >
              Tarihçemizi Keşfedin
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src="/legacy.jpg"
              alt="Aile Mirası"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const TIMELINE_DATA = [
  {
    year: 1972,
    title: 'Temellerin Atılışı',
    description: 'Mustafa Fidan tarafından elektronik tamir atölyesi kuruldu'
  },
  {
    year: 1995,
    title: 'Dijital Dönüşüm',
    description: 'Bilgisayar sistemleri ve yazılım geliştirme alanına geçiş'
  },
  {
    year: 2010,
    title: 'Global Vizyon',
    description: 'Uluslararası ilk projelerimizi hayata geçirdik'
  },
  {
    year: 2020,
    title: 'AI Çağı',
    description: 'Yapay zeka ve blockchain odaklı çözümler dönemi'
  }
];

const TEAM_MEMBERS = [
  {
    name: 'Mehmet Fidan',
    role: 'CTO',
    expertise: 'Blockchain & AI',
    image: '/team/mehmet.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Ayşe Kaya',
    role: 'UX Lead',
    expertise: 'Kullanıcı Deneyimi',
    image: '/team/ayse.jpg',
    social: {
      dribbble: '#',
      behance: '#'
    }
  },
  {
    name: 'Emirhan Tekin',
    role: 'Full Stack Developer',
    expertise: 'Next.js & TypeScript',
    image: '/team/emirhan.jpg',
    social: {
      github: '#',
      linkedin: '#'
    }
  }
];

export default AboutPage;