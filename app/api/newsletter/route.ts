import { NextRequest, NextResponse } from 'next/server';

// Basit bir örnek. Normalde MailChimp / Veritabanı vs. bağlantı yaparsınız.
// Burada sadece "Teşekkürler" diyerek yanıt veriyoruz.
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    // E-posta adresini kaydetmek istediğiniz yere kaydedin (db / 3rd party)
    console.log('Yeni bülten kaydı:', email);

    return NextResponse.json({ message: 'Teşekkürler! Bültene kaydınız alındı.' });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}