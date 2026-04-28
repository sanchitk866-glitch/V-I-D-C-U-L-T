// Initialize Lenis Smooth Scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

// Mouse Reactivity & Injection for Hero Grid
const heroGrid = document.getElementById('heroGrid');
if (heroGrid && typeof products !== 'undefined') {
  // Inject product images into the hero marquee/grid
  // We'll collect all images from the products array
  const allImages = products.flatMap(p => p.images.map(img => img.src));
  
  // Shuffle array for a random grid effect
  const shuffledImages = allImages.sort(() => 0.5 - Math.random()).slice(0, 24); // Limit to 24 for performance

  const imgElements = shuffledImages.map(src => {
    return `<img src="${src}" alt="VOID CULT Product" loading="lazy">`;
  }).join('');
  
  heroGrid.innerHTML = imgElements;

  // Parallax on mousemove
  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) * 0.05;
    const y = (window.innerHeight / 2 - e.clientY) * 0.05;
    
    gsap.to(heroGrid, {
      x: x,
      y: y,
      duration: 1.5,
      ease: 'power2.out'
    });
  });

  // Fade out hero on scroll
  gsap.to(heroGrid, {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: -150,
    opacity: 0
  });
  
  gsap.to('.hero-content', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 100,
    opacity: 0,
    scale: 0.95
  });
}

// Staggered reveal for catalog items when dynamically added
const productGridNode = document.querySelector('.product-grid');
if (productGridNode) {
  // Use MutationObserver to animate items whenever catalog.js re-renders them
  const observer = new MutationObserver(() => {
    const cards = productGridNode.querySelectorAll('.product-card');
    if(cards.length > 0) {
      gsap.fromTo(cards, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out'
        }
      );
    }
  });
  
  observer.observe(productGridNode, { childList: true });
}

// Brand Page Animations
const brandTitle = document.querySelector('.brand-title-large');
if (brandTitle) {
  const chars = brandTitle.textContent.split('');
  brandTitle.textContent = '';
  chars.forEach(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    brandTitle.appendChild(span);
  });

  gsap.fromTo('.brand-title-large span', 
    { y: 150, opacity: 0, rotateX: -90 },
    {
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      stagger: 0.05, 
      duration: 1.2, 
      ease: 'power4.out',
      delay: 0.2
    }
  );
}

const splitSections = document.querySelectorAll('.split-section');
splitSections.forEach(section => {
  const imgWrapper = section.querySelector('.split-img-wrapper img');
  const contentElems = section.querySelectorAll('.split-content h2, .split-content p');
  
  if (imgWrapper) {
    gsap.fromTo(imgWrapper,
      { scale: 1.2 },
      {
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        scale: 1,
        ease: 'none'
      }
    );
  }

  if (contentElems.length > 0) {
    gsap.fromTo(contentElems,
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }
    );
  }
});
