const productAssetPaths = [
  "box-logo-tee-1-product-front.jpeg",
  "box-logo-tee-2-model-front.jpeg",
  "box-logo-tee-3-model-front.jpeg",
  "box-logo-tee-4-model-front.jpeg",
  "fearless-tee-1-product-back.jpeg",
  "fearless-tee-2-model-back.jpeg",
  "fearless-tee-3-model-back.jpeg",
  "life-1-model-back.jpeg",
  "life-2-model-back.jpeg",
  "life-3-model-back.jpeg",
  "mockup-blank-sweatshirt-back.jpg",
  "mockup-blank-sweatshirt-front.jpg",
  "mockup-blank-tee-front-1.jpg",
  "mockup-blank-tee-front-2.jpg",
  "mockup-box-logo-tee-front-2.jpg",
  "mockup-box-logo-tee-front-3.jpg",
  "mockup-box-logo-tee-front-4.jpg",
  "mockup-box-logo-tee-front-5.jpg",
  "mockup-circle-hoodie-back.jpg",
  "mockup-circle-sweatshirt-back.jpg",
  "mockup-circle-sweatshirt-front.jpg",
  "mockup-circle-tee-back.jpg",
  "mockup-fearless-sweatshirt-back.jpg",
  "mockup-fearless-tee-back-2.jpg",
  "mockup-life-tee-back.jpg",
  "mockup-lion-profile-tee-back.jpg",
  "mockup-logo-hoodie-front.jpg",
  "mockup-logo-sweatshirt-front.jpg",
  "mockup-mentality-tee-back.jpg",
  "mockup-system-tee-back.jpg",
  "mockup-system-tee-front.jpg",
  "system-1-product-back.jpeg",
  "system-2-model-back.jpeg",
  "system-3-spotlight-back.jpeg",
  "system-4-spotlight-back.jpeg",
  "voidcult-hoodie-1-product-front.jpeg",
  "voidcult-hoodie-2-product-front.jpeg",
  "voidcult-sweatshirt-1-product-front.jpeg",
  "voidcult-sweatshirt-2-model-front.jpeg",
  "voidcult-sweatshirt-3-model-back.jpeg",
  "voidcult-sweatshirt-4-model-front.jpeg"
].map((name) => `assets/products/${name}`);

const motionState = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
  scrollY: window.scrollY
};

function renderHeroField() {
  const field = document.querySelector("#heroImageField");
  if (!field) return;

  field.innerHTML = productAssetPaths
    .map(
      (src, index) => `
        <figure class="hero-tile depth-${index % 5}" style="--delay:${index * -0.7}s">
          <img src="${src}" alt="">
        </figure>
      `
    )
    .join("");
}

function renderFeatured() {
  const featuredGrid = document.querySelector("#featuredGrid");
  if (!featuredGrid || typeof products === "undefined") return;

  const featured = products.slice(0, 6);
  featuredGrid.innerHTML = featured
    .map((product, index) => {
      const image = product.images[0];
      return `
        <article class="featured-card" data-parallax="${0.04 + index * 0.01}">
          <a class="featured-media" href="product.html?id=${product.id}">
            <img src="${image.src}" alt="${product.name} - ${image.label}">
          </a>
          <div>
            <span class="category-label">${categoryNameLocal(product.category)}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a class="buy-button" href="product.html?id=${product.id}">Shop</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMarquee() {
  const one = document.querySelector("#marqueeOne");
  const two = document.querySelector("#marqueeTwo");
  if (!one || !two) return;

  const build = (paths) =>
    [...paths, ...paths]
      .map(
        (src) => `
          <figure>
            <img src="${src}" alt="">
          </figure>
        `
      )
      .join("");

  one.innerHTML = build(productAssetPaths.slice(0, 16));
  two.innerHTML = build(productAssetPaths.slice(16, 32));
}

function categoryNameLocal(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function initPointerMotion() {
  const hero = document.querySelector("#voidHero");
  if (!hero) return;

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    motionState.targetX = (event.clientX - rect.left) / rect.width - 0.5;
    motionState.targetY = (event.clientY - rect.top) / rect.height - 0.5;
  });

  hero.addEventListener("pointerleave", () => {
    motionState.targetX = 0;
    motionState.targetY = 0;
  });
}

function initTextAnimation() {
  document.querySelectorAll("[data-animate-text]").forEach((node) => {
    const words = node.textContent.trim().split(/\s+/);
    node.innerHTML = words.map((word, index) => `<span style="--i:${index}">${word}</span>`).join(" ");
  });
}

function motionLoop() {
  motionState.x += (motionState.targetX - motionState.x) * 0.08;
  motionState.y += (motionState.targetY - motionState.y) * 0.08;
  motionState.scrollY += (window.scrollY - motionState.scrollY) * 0.08;

  document.documentElement.style.setProperty("--mx", motionState.x.toFixed(4));
  document.documentElement.style.setProperty("--my", motionState.y.toFixed(4));

  document.querySelectorAll("[data-parallax]").forEach((item) => {
    const speed = Number(item.dataset.parallax);
    const rect = item.getBoundingClientRect();
    const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
    item.style.transform = `translate3d(0, ${centerOffset * speed * -1}px, 0)`;
  });

  requestAnimationFrame(motionLoop);
}

renderHeroField();
renderFeatured();
renderMarquee();
initPointerMotion();
initTextAnimation();
motionLoop();
