// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Animasyon Sistemleri
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quad'
    });
  
    // Akıllı Navigasyon Scroll Etkisi
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.smart-nav');
      if (window.scrollY > 100) {
        nav.style.background = 'rgba(247, 250, 252, 0.98)';
      } else {
        nav.style.background = 'rgba(247, 250, 252, 0.95)';
      }
    });
  
    // AI Sohbet Sistemi
    class AIChatSystem {
      constructor() {
        this.chatHistory = [];
        this.initChat();
      }
  
      initChat() {
        const chatButton = document.querySelector('.ai-button');
        const chatContainer = document.getElementById('ai-chat');
  
        chatButton.addEventListener('click', () => {
          this.showLoadingState();
          setTimeout(() => this.generateAIResponse(), 1500);
        });
      }
  
      showLoadingState() {
        const chatContainer = document.getElementById('ai-chat');
        chatContainer.innerHTML = `
          <div class="ai-message loading">
            <div class="dot-flashing"></div>
          </div>
        `;
      }
  
      generateAIResponse() {
        const responses = [
          "Mevcut satış verilerinize göre optimize öneriler:",
          "SEO skorunuz: 92/100 - Detaylı analiz için tıklayın",
          "Amazon envanteriniz 3 gün içinde tükenecek!"
        ];
  
        const chatContainer = document.getElementById('ai-chat');
        chatContainer.innerHTML = responses.map(msg => `
          <div class="ai-message" data-aos="fade-up">
            <i class="fas fa-robot"></i>
            <div class="message-content">${msg}</div>
          </div>
        `).join('');
      }
    }
  
    // Platform Entegrasyon Yöneticisi
    class PlatformManager {
      constructor() {
        this.initPlatformCards();
      }
  
      initPlatformCards() {
        document.querySelectorAll('.platform-card').forEach(card => {
          card.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
              this.showPlatformModal(card.querySelector('h3').textContent);
            }
          });
        });
      }
  
      showPlatformModal(platform) {
        const modalContent = {
          'Google Business': 'Google My Business verileriniz gerçek zamanlı senkronize ediliyor...',
          'Shopify Pro': 'Mağaza performans raporunuz hazırlanıyor',
          'Amazon FBA': 'Envanter optimizasyon önerileri analiz ediliyor'
        };
  
        const modal = document.createElement('div');
        modal.className = 'platform-modal';
        modal.innerHTML = `
          <div class="modal-content">
            <h3>${platform} Analiz</h3>
            <p>${modalContent[platform]}</p>
            <div class="loading-bar"></div>
          </div>
        `;
        
        document.body.appendChild(modal);
        setTimeout(() => modal.remove(), 3000);
      }
    }
  
    // Sistemleri Başlat
    new AIChatSystem();
    new PlatformManager();
  
    // Gerçek Zamanlı SEO Analiz
    const seoTags = document.querySelectorAll('.keyword-tag');
    seoTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const keyword = tag.textContent;
        window.open(`https://ads.google.com/intl/tr_tr/home/?subid=tr-tr-aw-et-ga-biz1-g-c!o3${encodeURIComponent(keyword)}`, '_blank');
      });
    });
  });// Mobil menüyü açıp kapama
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  
  menuToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
  
  // Basit bir form mesajı göstermek isterseniz
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          alert("Mesajınız gönderildi! En kısa sürede dönüş yapacağız.");
          contactForm.reset();
      });
  }/* 
  script.js 
  - Mobil menü aç/kapat 
  - AOS init 
  - Bülten modal aç/kapat
  - Basit sepet mantığı 
  - İletişim formu 
*/

// 1. MOBİL MENÜ
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});

// 2. AOS (Animate On Scroll) Başlatma
AOS.init({
  duration: 1000, // animasyon süresi (ms)
  offset: 100,    // scroll başladığı mesafe
});

// 3. BÜLTEN MODALI
const subscribeBtn = document.getElementById('subscribe-button');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal');
const newsletterForm = document.getElementById('newsletter-form');

if (subscribeBtn) {
  subscribeBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Bültene kaydınız alınmıştır. Teşekkürler!");
    modalOverlay.style.display = 'none';
    newsletterForm.reset();
  });
}

// 4. BASİT SEPET MANTIĞI (Front-End)
const cartIcon = document.getElementById('cart-icon');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');

// "Ürün veritabanı" gibi davranan bir örnek obje:
const productsData = {
  1: { name: 'Ürün 1', price: 99.99 },
  2: { name: 'Ürün 2', price: 149.99 },
  3: { name: 'Ürün 3', price: 89.99 },
  4: { name: 'Ürün 4', price: 199.99 },
};

// Sepet içeriği (productId -> quantity):
let cart = {};

// Sepet açma/kapama
if (cartIcon) {
  cartIcon.addEventListener('click', () => {
    cartOverlay.style.display = 'flex';
    renderCart();
  });
}

if (closeCartBtn) {
  closeCartBtn.addEventListener('click', () => {
    cartOverlay.style.display = 'none';
  });
}

// Sepete Ekle butonları
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const productId = btn.getAttribute('data-product-id');
    addToCart(productId);
  });
});

function addToCart(productId) {
  if (!cart[productId]) {
    cart[productId] = 1;
  } else {
    cart[productId]++;
  }
  updateCartCount();
  alert(`${productsData[productId].name} sepete eklendi!`);
}

// Sepet öğelerini render etme
function renderCart() {
  cartItemsContainer.innerHTML = ''; 
  let totalPrice = 0;

  for (let id in cart) {
    const quantity = cart[id];
    const product = productsData[id];
    const itemPrice = product.price * quantity;
    totalPrice += itemPrice;

    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
      <p>${product.name} (x${quantity})</p>
      <p>₺${itemPrice.toFixed(2)}</p>
    `;
    cartItemsContainer.appendChild(cartItemDiv);
  }

  cartTotal.innerText = `Toplam: ₺${totalPrice.toFixed(2)}`;
}

// Sepet simgesindeki adet gösterimi
function updateCartCount() {
  let count = 0;
  for (let id in cart) {
    count += cart[id];
  }
  cartCount.innerText = count;
}

// Basit "Satın Al" butonu
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    if (Object.keys(cart).length === 0) {
      alert('Sepetiniz boş!');
      return;
    }
    // Burada gerçek ödeme entegrasyonu (Stripe/PayPal vs.) devreye girebilir.
    alert('Satın alma işlemi simüle edildi. Ödeme entegrasyonu eklemeyi unutmayın!');
    cart = {}; // sepeti temizle
    updateCartCount();
    renderCart();
    cartOverlay.style.display = 'none';
  });
}

// 5. İLETİŞİM FORMU (Basit Uyarı)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Mesajınız gönderildi! En kısa sürede dönüş yapacağız.");
    contactForm.reset();
  });
}