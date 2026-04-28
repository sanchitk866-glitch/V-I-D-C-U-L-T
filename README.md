# VOIDCULT Landing + Product Catalog

This is a plain HTML/CSS/JS streetwear landing page, brand page, and product detail system.

## Files

- `index.html` is the immersive landing page.
- `brand.html` is the narrative brand page.
- `product.html` opens the product detail page with gallery, description, price, and buy button.
- `products.js` is where you edit product names, prices, descriptions, images, and buy links.
- `landing.js` powers the hero image field, featured products, marquee, mouse motion, and parallax.
- `catalog.css` controls the landing, brand, catalog, and product detail design.
- `catalog.js` powers the original product grid behavior and product detail galleries.
- `assets/products/` contains the catalog images with web-safe names.

## Edit Prices And Buy Links

Open `products.js` and update:

```js
price: "Add price",
buyUrl: "#",
```

Example:

```js
price: "₹1,499",
buyUrl: "https://your-checkout-link.com/product",
```

## Add This To Your Website

Copy these files and the `assets` folder into your website. Link to `index.html` as your product catalog page.
