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
  }