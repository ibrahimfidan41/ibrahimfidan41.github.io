/* script.js 
   - Hamburger menü (X animasyonu + slide in/out menü)
   - Gelişmiş Form İşleme (fetch POST, reCAPTCHA placeholder)
   - Lazy loading is triggered in HTML with <img loading="lazy">
   - Basit i18n with data-i18n attributes
*/

// Eleman seçiciler
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const navbar = document.getElementById('navbar');
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

// Hamburger Menü Aç/Kapat
mobileMenuIcon.addEventListener('click', () => {
  // İkonun çubuklarını X'e çevirmek için "open" class ekliyoruz
  mobileMenuIcon.classList.toggle('open');
  
  // Menü aç/kapa
  if (navbar.style.display === 'flex') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
  }
});

// Form Gönderme (örnek)
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // reCAPTCHA kontrolü (V2 ise):
    // let recaptcha = document.querySelector('.g-recaptcha-response');
    // if (!recaptcha || recaptcha.value === "") {
    //   formResponse.innerText = "Please verify you're not a robot.";
    //   return;
    // }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    // Örnek fetch post
    // Sunucunuzun endpoint URL'sini girmeniz gerekir (ör: /api/contact).
    try {
      /*
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        formResponse.innerText = "Your message has been sent successfully!";
        contactForm.reset();
      } else {
        formResponse.innerText = "Error sending message. Please try again later.";
      }
      */
     
      // Demo amaçlı sadece mesaj basıyor
      formResponse.innerText = "Your message has been sent successfully!";
      contactForm.reset();
    } catch (err) {
      formResponse.innerText = "An error occurred. Please try again.";
    }
  });
}

/* Basit i18n Sözlük */
const i18nStrings = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.title": "Future-Ready Digital Solutions",
    "hero.subtitle": "We design and deliver cutting-edge e-commerce and consulting services...",
    "hero.cta": "Learn More",
    "about.title": "About Us",
    "about.text": "At Fidans Online, we blend family legacy and innovation...",
    "services.title": "Our Services",
    "services.ecommerce": "E-Commerce Solutions",
    "services.ecommerceText": "From secure payment gateways to scalable storefronts...",
    "services.consulting": "Consulting & Strategy",
    "services.consultingText": "Our experts guide you in digital marketing...",
    "services.performance": "Performance & SEO",
    "services.performanceText": "Boost your site's speed and visibility...",
    "contact.title": "Contact Us",
    "contact.text": "Connect with us at info@fidans.online or visit our warehouse at [Address].",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.submit": "Send Message",
    "footer.rights": "All rights reserved.",
    "footer.gdpr": "Adhering to GDPR/KVKK and global data protection standards."
  },
  tr: {
    "nav.home": "Anasayfa",
    "nav.about": "Hakkımızda",
    "nav.services": "Hizmetler",
    "nav.contact": "İletişim",
    "hero.title": "Geleceğe Hazır Dijital Çözümler",
    "hero.subtitle": "E-ticaret ve danışmanlık hizmetlerini en ileri düzeyde sunuyor...",
    "hero.cta": "Daha Fazla",
    "about.title": "Hakkımızda",
    "about.text": "Fidans Online olarak aile mirası ve inovasyonu harmanlıyoruz...",
    "services.title": "Hizmetlerimiz",
    "services.ecommerce": "E-Ticaret Çözümleri",
    "services.ecommerceText": "Güvenli ödeme altyapısından ölçeklenebilir mağaza tasarımlarına kadar...",
    "services.consulting": "Danışmanlık & Strateji",
    "services.consultingText": "Dijital pazarlama, lojistik ve büyüme stratejilerinde uzman ekibimizle...",
    "services.performance": "Performans & SEO",
    "services.performanceText": "Core Web Vitals optimizasyonu ile sitenizin hız ve görünürlüğünü artırın...",
    "contact.title": "İletişim",
    "contact.text": "Bize info@fidans.online üzerinden veya [Adres] konumunda ulaşabilirsiniz.",
    "form.name": "Ad",
    "form.email": "E-posta",
    "form.message": "Mesaj",
    "form.submit": "Gönder",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.gdpr": "GDPR/KVKK ve küresel veri koruma standartlarına uyuyoruz."
  }
};

function changeLang(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nStrings[lang] && i18nStrings[lang][key]) {
      el.textContent = i18nStrings[lang][key];
    }
  });
}

// Basit Scroll Animasyonu
window.addEventListener('scroll', () => {
  const fadeUpElements = document.querySelectorAll('.fade-in-up');
  fadeUpElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      el.classList.add('scroll-visible');
    }
  });
});

// Sayfa yüklendiğinde ilk scroll tetikleyelim
window.dispatchEvent(new Event('scroll'));