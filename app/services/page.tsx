import { Metadata } from 'next';
import { CodeWindow, ServiceCard, TechBadge } from '@/components/services';
import { Tabs, Tab } from '@/components/ui';
import { BlockchainIcon, AIIcon, CloudIcon } from '@/components/icons';
import Image from 'next/image';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'Teknoloji Çözümlerimiz | Fidans Online',
  description: 'Blockchain, Yapay Zeka ve Bulut tabanlı ileri düzey çözümlerimizle dijital dönüşümünüzü hızlandırın',
  openGraph: {
    images: [{ url: '/services-og.jpg', width: 1200, height: 630 }]
  },
  metadataBase: new URL('https://fidans.online')
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-500 to-primary-700 text-white py-24">
        <div className="container text-center space-y-6">
          <h1 className="text-step-3 font-bold">
            Dijital Dönüşümünüz İçin <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600">
              Teknik Çözümler
            </span>
          </h1>
          <p className="text-step-0 max-w-3xl mx-auto text-primary-100">
            Enterprise seviye teknoloji çözümlerimizle iş süreçlerinizi optimize edin
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <Tabs defaultValue="blockchain" className="container">
        <div className="flex gap-4 overflow-x-auto pb-4">
          <Tab value="blockchain" icon={<BlockchainIcon />} title="Blockchain" />
          <Tab value="ai" icon={<AIIcon />} title="Yapay Zeka" />
          <Tab value="cloud" icon={<CloudIcon />} title="Bulut Çözümleri" />
        </div>

        {/* Blockchain Solutions */}
        <Tab.Panel value="blockchain" className="space-y-16">
          <ServiceCard
            title="Akıllı Sözleşme Geliştirme"
            description="Güvenli ve denetlenebilir self-executing kontrat sistemleri"
            features={[
              'ERC-20/721/1155 standart desteği',
              'DeFi protokolleri',
              'Çapraz zincir entegrasyon'
            ]}
            image="/smart-contract.jpg"
          >
            <CodeWindow 
              title="SimpleStorage.sol"
              language="solidity"
              code={`
                pragma solidity ^0.8.0;

                contract SimpleStorage {
                    uint256 private value;
                    
                    event ValueChanged(uint256 newValue);
                    
                    function store(uint256 newValue) public {
                        value = newValue;
                        emit ValueChanged(newValue);
                    }
                    
                    function retrieve() public view returns (uint256) {
                        return value;
                    }
                }
              `}
            />
          </ServiceCard>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-step-1 font-bold">NFT Altyapı Çözümleri</h2>
              <div className="flex flex-wrap gap-2">
                <TechBadge icon="⚡" title="Layer 2 Scaling" />
                <TechBadge icon="🔒" title="IPFS Storage" />
                <TechBadge icon="🖼️" title="Dynamic NFTs" />
              </div>
              <Accordion items={[
                { title: 'Mint Mekaniği', content: 'ERC-721A implementasyonu ile gas optimizasyonu' },
                { title: 'Royalty Yönetimi', content: '%10 default royalty dağıtım sistemi' }
              ]} />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <Image
                src="/nft-dashboard.jpg"
                alt="NFT Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Tab.Panel>

        {/* AI Solutions */}
        <Tab.Panel value="ai" className="space-y-16">
          <ServiceCard
            title="Doğal Dil İşleme"
            description="GPT-4 ve özel modellerimizle metin analiz çözümleri"
            features={[
              'Chatbot entegrasyonu',
              'Sentiment analiz',
              'Belge özetleme'
            ]}
            image="/ai-chat.jpg"
          >
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="flex-1 space-y-4">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                      <div className="h-4 bg-neutral-200 rounded"></div>
                    </div>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-neutral-600 dark:text-neutral-300">
                      "Fidans'ın AI çözümleriyle müşteri hizmetlerimizi %40 daha verimli hale getirdik."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ServiceCard>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image
                src="/computer-vision.jpg"
                alt="Computer Vision"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-step-1 font-bold">Görüntü İşleme</h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-primary-500">✔</span>
                  Nesne tanıma ve sınıflandırma
                </li>
                <li className="flex gap-2">
                  <span className="text-primary-500">✔</span>
                  Yüz tanıma sistemleri
                </li>
                <li className="flex gap-2">
                  <span className="text-primary-500">✔</span>
                  Anomali tespiti
                </li>
              </ul>
            </div>
          </div>
        </Tab.Panel>
      </Tabs>

      {/* CTA Section */}
      <section className="container text-center py-16 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
        <h2 className="text-step-1 font-bold mb-6">Projenizi Konuşalım</h2>
        <p className="max-w-2xl mx-auto mb-8 text-neutral-600 dark:text-neutral-300">
          Teklif almak veya teknik detayları görüşmek için uzman ekibimizle iletişime geçin
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition">
            Demo Talep Et
          </button>
          <button className="border border-primary-500 text-primary-500 px-6 py-3 rounded-lg hover:bg-primary-50 transition">
            Dokümantasyon
          </button>
        </div>
      </section>
    </div>
  );
}