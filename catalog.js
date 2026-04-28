const grid = document.querySelector("#productGrid");
const detail = document.querySelector("#productDetail");
const tabs = document.querySelectorAll(".category-tab");

function categoryName(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function productCard(product) {
  const [primary, secondary] = product.images;

  return `
    <article class="product-card" data-category="${product.category}">
      <a class="card-media" href="product.html?id=${product.id}" aria-label="Open ${product.name}">
        <img class="primary-img" src="${primary.src}" alt="${product.name} - ${primary.label}">
        ${secondary ? `<img class="hover-img" src="${secondary.src}" alt="${product.name} - ${secondary.label}">` : ""}
      </a>
      <div class="card-body">
        <span class="category-label">${categoryName(product.category)}</span>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="card-footer">
          <strong>${product.price}</strong>
          <a class="text-link" href="product.html?id=${product.id}">View details</a>
        </div>
      </div>
    </article>
  `;
}

function renderGrid(category = "all") {
  const visibleProducts = category === "all" ? products : products.filter((product) => product.category === category);

  grid.innerHTML = visibleProducts.map(productCard).join("");
}

function renderDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = products.find((item) => item.id === id) || products[0];

  document.title = `${product.name} | VOIDCULT`;

  detail.innerHTML = `
    <div class="detail-gallery">
      <figure class="main-image-wrap">
        <img id="mainProductImage" src="${product.images[0].src}" alt="${product.name} - ${product.images[0].label}">
      </figure>
      <div class="thumb-row" aria-label="Product images">
        ${product.images
          .map(
            (image, index) => `
              <button class="thumb-button ${index === 0 ? "is-active" : ""}" type="button" data-image="${image.src}" data-alt="${product.name} - ${image.label}">
                <img src="${image.src}" alt="${image.label}">
              </button>
            `
          )
          .join("")}
      </div>
    </div>

    <div class="detail-info">
      <span class="category-label">${categoryName(product.category)}</span>
      <h1>${product.name}</h1>
      <p class="detail-description">${product.description}</p>
      <div class="detail-price">${product.price}</div>
      <a class="buy-button" href="${product.buyUrl}">Buy Now</a>
      <div class="edit-note">
        Edit price and buy link in <strong>products.js</strong>.
      </div>
    </div>
  `;

  const mainImage = document.querySelector("#mainProductImage");
  const thumbButtons = document.querySelectorAll(".thumb-button");

  thumbButtons.forEach((button) => {
    button.addEventListener("click", () => {
      thumbButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      mainImage.src = button.dataset.image;
      mainImage.alt = button.dataset.alt;
    });
  });
}

if (grid) {
  renderGrid();

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      renderGrid(tab.dataset.category);
    });
  });
}

if (detail) {
  renderDetail();
}
