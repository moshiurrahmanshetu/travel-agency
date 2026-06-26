/**
 * WanderLuxe Premium Travel Template - Master JavaScript
 * Vanilla ES6+ Execution (No Frameworks)
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. Preloader & Loading Animation
     ========================================================================== */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 500);
    });
    // Fallback if window load already fired
    setTimeout(() => {
      preloader.classList.add('loaded');
    }, 1500);
  }

  /* ==========================================================================
     2. Sticky Header & Top Bar Reveal
     ========================================================================== */
  const header = document.querySelector('.main-navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky Header
    if (header) {
      if (scrollPos > 100) {
        header.classList.add('sticky-header');
      } else {
        header.classList.remove('sticky-header');
      }
    }

    // Scroll To Top Button
    if (scrollTopBtn) {
      if (scrollPos > 400) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     3. Initialize Animate On Scroll (AOS)
     ========================================================================== */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }

  /* ==========================================================================
     4. Initialize Swiper Carousels
     ========================================================================== */
  if (typeof Swiper !== 'undefined') {
    // Featured Tours Swiper
    new Swiper('.tours-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }
    });

    // Testimonials Swiper — isolated instance, unique selectors only
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 28,
      loop: true,
      speed: 600,
      grabCursor: true,
      centeredSlides: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      pagination: {
        el: '.testimonials-pagination',
        clickable: true,
        dynamicBullets: false,
      },
      navigation: {
        nextEl: '.testimonials-next',
        prevEl: '.testimonials-prev',
      },
      breakpoints: {
        // mobile: 1 card (default above)
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
      },
    });
  }

  /* ==========================================================================
     5. Wishlist Heart Button Interactivity
     ========================================================================== */
  const wishlistButtons = document.querySelectorAll('.tour-wishlist-btn');
  wishlistButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const icon = btn.querySelector('i');
      if (icon) {
        if (icon.classList.contains('fa-regular')) {
          icon.classList.remove('fa-regular');
          icon.classList.add('fa-solid');
          btn.style.backgroundColor = '#ff3b30';
          btn.style.color = '#ffffff';
        } else {
          icon.classList.remove('fa-solid');
          icon.classList.add('fa-regular');
          btn.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          btn.style.color = '#1A1A1A';
        }
      }
    });
  });

  /* ==========================================================================
     6. Form Submission Handlers (Demo Experience)
     ========================================================================== */
  const searchForm = document.getElementById('quickSearchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = searchForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Searching Deals...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> 24 Tours Found!';
        btn.classList.replace('btn-wl-primary', 'btn-wl-secondary');
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          btn.classList.replace('btn-wl-secondary', 'btn-wl-primary');
        }, 2000);
      }, 1000);
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const btn = newsletterForm.querySelector('button');
      if (input && input.value) {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Subscribed!';
        btn.style.background = '#00BFA6';
        input.value = '';
        input.placeholder = 'Welcome to our VIP list!';
        setTimeout(() => {
          btn.innerHTML = 'Subscribe <i class="fa-solid fa-paper-plane"></i>';
          btn.style.background = '';
          input.placeholder = 'Enter your email address...';
        }, 3500);
      }
    });
  }
});
