export const metadata = {
  title: 'Sponsors - Fidans Online',
  description: 'Our trusted partners and sponsors.',
};

export default function SponsorsPage() {
  const sponsors = [
    { name: 'Google', logo: '/google.png' },
    { name: 'Apple', logo: '/apple.png' },
    { name: 'Microsoft', logo: '/microsoft.png' },
    { name: 'Amazon', logo: '/amazon.png' },
  ];

  return (
    <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '1rem' }}>
      <h1>Sponsorlar</h1>
      <p>Fidans Online olarak aşağıdaki büyük şirketlerle işbirliği yapmaktan gurur duyuyoruz:</p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} style={{ textAlign: 'center' }}>
            <img src={sponsor.logo} alt={sponsor.name} style={{ width: '100px', height: 'auto' }} />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}