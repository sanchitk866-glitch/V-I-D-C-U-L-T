const products = [
  {
    id: "life-is-beautiful-tee",
    name: "Life Is Beautiful Oversized Tee",
    category: "t-shirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Black oversized T-shirt with a warm back graphic inspired by ornate architecture, sunlit courtyards, and calm everyday beauty.",
    images: [
      { label: "Back product", src: "assets/products/mockup-life-tee-back.jpg" },
      { label: "Model back", src: "assets/products/life-1-model-back.jpeg" },
      { label: "Alternate model", src: "assets/products/life-2-model-back.jpeg" },
      { label: "Editorial model", src: "assets/products/life-3-model-back.jpeg" }
    ]
  },
  {
    id: "system-mentality-tee",
    name: "System Mentality Acid Wash Tee",
    category: "t-shirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Acid-wash black tee with a bold samurai-inspired back print, red accents, and the statement Code, Honor, Repeat.",
    images: [
      { label: "Front product", src: "assets/products/mockup-system-tee-front.jpg" },
      { label: "Back product mockup", src: "assets/products/mockup-system-tee-back.jpg" },
      { label: "Back product", src: "assets/products/system-1-product-back.jpeg" },
      { label: "Model back", src: "assets/products/system-2-model-back.jpeg" },
      { label: "Spotlight back", src: "assets/products/system-3-spotlight-back.jpeg" },
      { label: "Alternate spotlight", src: "assets/products/system-4-spotlight-back.jpeg" }
    ]
  },
  {
    id: "voidcult-box-logo-tee",
    name: "VOIDCULT Box Logo Tee",
    category: "t-shirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Clean black short-sleeve tee with a crisp VOIDCULT chest mark, made for sharp minimal streetwear styling.",
    images: [
      { label: "Front mockup", src: "assets/products/mockup-box-logo-tee-front-2.jpg" },
      { label: "Front product", src: "assets/products/box-logo-tee-1-product-front.jpeg" },
      { label: "Street model", src: "assets/products/box-logo-tee-2-model-front.jpeg" },
      { label: "Studio model", src: "assets/products/box-logo-tee-4-model-front.jpeg" }
    ]
  },
  {
    id: "fearless-lion-tee",
    name: "Fearless Lion Oversized Tee",
    category: "t-shirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Oversized black T-shirt with a high-impact blue lion back graphic and repeated Fearless typography.",
    images: [
      { label: "Back mockup", src: "assets/products/mockup-fearless-tee-back-2.jpg" },
      { label: "Back product", src: "assets/products/fearless-tee-1-product-back.jpeg" },
      { label: "Lion profile model", src: "assets/products/fearless-tee-3-model-back.jpeg" },
      { label: "Court model back", src: "assets/products/fearless-tee-2-model-back.jpeg" }
    ]
  },
  {
    id: "voidcult-embossed-hoodie",
    name: "VOIDCULT Embossed Hoodie",
    category: "hoodies",
    price: "Add price",
    buyUrl: "#",
    description:
      "All-black hoodie with tonal embossed VOIDCULT branding, a structured hood, and a clean futuristic silhouette.",
    images: [
      { label: "Front product", src: "assets/products/voidcult-hoodie-1-product-front.jpeg" },
      { label: "Alternate front", src: "assets/products/voidcult-hoodie-2-product-front.jpeg" }
    ]
  },
  {
    id: "voidcult-logo-hoodie",
    name: "VOIDCULT Logo Hoodie",
    category: "hoodies",
    price: "Add price",
    buyUrl: "#",
    description:
      "Black hoodie with a clean VOIDCULT chest logo and a tonal circle graphic on the back.",
    images: [
      { label: "Front product", src: "assets/products/mockup-logo-hoodie-front.jpg" },
      { label: "Back product", src: "assets/products/mockup-circle-hoodie-back.jpg" }
    ]
  },
  {
    id: "voidcult-minimal-sweatshirt",
    name: "VOIDCULT Minimal Sweatshirt",
    category: "sweatshirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Black sweatshirt range with minimalist VOIDCULT branding, heavy street styling, and moody architectural campaign shots.",
    images: [
      { label: "Front mockup", src: "assets/products/mockup-logo-sweatshirt-front.jpg" },
      { label: "Back mockup", src: "assets/products/mockup-blank-sweatshirt-back.jpg" },
      { label: "Product front", src: "assets/products/voidcult-sweatshirt-1-product-front.jpeg" },
      { label: "Model front", src: "assets/products/voidcult-sweatshirt-2-model-front.jpeg" },
      { label: "Model back", src: "assets/products/voidcult-sweatshirt-3-model-back.jpeg" },
      { label: "Architectural model", src: "assets/products/voidcult-sweatshirt-4-model-front.jpeg" }
    ]
  },
  {
    id: "circle-mark-sweatshirt",
    name: "Circle Mark Sweatshirt",
    category: "sweatshirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Black crewneck sweatshirt with a minimal tonal square-and-circle chest mark and a clean blank back.",
    images: [
      { label: "Front product", src: "assets/products/mockup-circle-sweatshirt-front.jpg" },
      { label: "Back product", src: "assets/products/mockup-circle-sweatshirt-back.jpg" }
    ]
  },
  {
    id: "essential-blank-sweatshirt",
    name: "Essential Blank Sweatshirt",
    category: "sweatshirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Plain black crewneck sweatshirt with a clean silhouette for minimal everyday styling.",
    images: [
      { label: "Front product", src: "assets/products/mockup-blank-sweatshirt-front.jpg" },
      { label: "Back product", src: "assets/products/mockup-blank-sweatshirt-back.jpg" }
    ]
  },
  {
    id: "fearless-lion-sweatshirt",
    name: "Fearless Lion Sweatshirt",
    category: "sweatshirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Black crewneck sweatshirt with the blue Fearless lion graphic printed on the back.",
    images: [
      { label: "Front product", src: "assets/products/mockup-blank-sweatshirt-front.jpg" },
      { label: "Back product", src: "assets/products/mockup-fearless-sweatshirt-back.jpg" }
    ]
  },
  {
    id: "circle-mark-tee",
    name: "Circle Mark Tee",
    category: "t-shirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Black T-shirt with a tonal geometric circle mark on the back and a stripped-back front.",
    images: [
      { label: "Front product", src: "assets/products/mockup-blank-tee-front-2.jpg" },
      { label: "Back product", src: "assets/products/mockup-circle-tee-back.jpg" }
    ]
  },
  {
    id: "lion-profile-tee",
    name: "Lion Profile Tee",
    category: "t-shirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Black oversized T-shirt with a framed lion profile graphic on the back in white, gold, and dark navy tones.",
    images: [
      { label: "Front product", src: "assets/products/mockup-blank-tee-front-2.jpg" },
      { label: "Back product", src: "assets/products/mockup-lion-profile-tee-back.jpg" }
    ]
  },
  {
    id: "mentality-statue-tee",
    name: "Mentality Statue Tee",
    category: "t-shirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Black T-shirt with a VOIDCULT front logo and a detailed Mentality poster graphic on the back.",
    images: [
      { label: "Front product", src: "assets/products/mockup-box-logo-tee-front-5.jpg" },
      { label: "Back product", src: "assets/products/mockup-mentality-tee-back.jpg" }
    ]
  },
  {
    id: "essential-blank-tee",
    name: "Essential Blank Tee",
    category: "t-shirts",
    price: "Add price",
    buyUrl: "#",
    description:
      "Plain black oversized T-shirt with a clean front, made as a minimal base piece.",
    images: [
      { label: "Front product", src: "assets/products/mockup-blank-tee-front-2.jpg" },
      { label: "Alternate front", src: "assets/products/mockup-blank-tee-front-1.jpg" }
    ]
  }
];
