export interface Product {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subcategory?: string;
  brand?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  isOnSale: boolean;
  isFeatured: boolean;
  isNew: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  productCount: number;
  color: "teal" | "terracotta" | "amber";
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Droguerie",
    nameAr: "المواد الكيميائية",
    slug: "droguerie",
    description: "Produits chimiques, colles, mastics et adhesifs pour tous vos travaux",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    icon: "Beaker",
    productCount: 156,
    color: "teal"
  },
  {
    id: "2",
    name: "Sanitaire",
    nameAr: "معدات الصحة",
    slug: "sanitaire",
    description: "Equipements de plomberie, robinetterie et accessoires sanitaires",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    icon: "Droplets",
    productCount: 243,
    color: "terracotta"
  },
  {
    id: "3",
    name: "Peinture",
    nameAr: "الدهانات",
    slug: "peinture",
    description: "Peintures interieures, exterieures, vernis et accessoires",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
    icon: "Paintbrush",
    productCount: 189,
    color: "amber"
  },
  {
    id: "4",
    name: "Quincaillerie",
    nameAr: "المعدات",
    slug: "quincaillerie",
    description: "Visserie, boulonnerie, serrurerie et petite quincaillerie",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    icon: "Wrench",
    productCount: 412,
    color: "teal"
  },
  {
    id: "5",
    name: "Outillage",
    nameAr: "الأدوات",
    slug: "outillage",
    description: "Outils manuels, electroportatifs et equipements professionnels",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    icon: "Hammer",
    productCount: 328,
    color: "terracotta"
  },
  {
    id: "6",
    name: "Electricite",
    nameAr: "الكهرباء",
    slug: "electricite",
    description: "Materiel electrique, cables, prises et interrupteurs",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: "Zap",
    productCount: 267,
    color: "amber"
  }
];

export const products: Product[] = [
  // Droguerie Products
  {
    id: "d1",
    name: "Colle Multi-Usage Premium",
    nameAr: "غراء متعدد الاستخدامات",
    description: "Colle extra-forte pour tous types de materiaux. Sechage rapide et resistance exceptionnelle aux intemperies.",
    price: 45.00,
    originalPrice: 55.00,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    category: "droguerie",
    subcategory: "colles",
    brand: "SohofiBrico Pro",
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    stockQuantity: 45,
    isOnSale: true,
    isFeatured: true,
    isNew: false,
    tags: ["colle", "multi-usage", "professionnel"]
  },
  {
    id: "d2",
    name: "Mastic Silicone Blanc",
    nameAr: "معجون سيليكون أبيض",
    description: "Mastic silicone haute qualite pour joints sanitaires. Resistant a l'eau et aux moisissures.",
    price: 28.50,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    category: "droguerie",
    subcategory: "mastics",
    brand: "FlexSeal",
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    stockQuantity: 78,
    isOnSale: false,
    isFeatured: false,
    isNew: true,
    tags: ["mastic", "silicone", "sanitaire"]
  },
  // Sanitaire Products
  {
    id: "s1",
    name: "Robinet Mitigeur Cuisine",
    nameAr: "خلاط مطبخ",
    description: "Mitigeur cuisine chrome avec douchette extractible. Design moderne et economie d'eau.",
    price: 450.00,
    originalPrice: 520.00,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80",
    category: "sanitaire",
    subcategory: "robinetterie",
    brand: "AquaStyle",
    rating: 4.9,
    reviewCount: 234,
    inStock: true,
    stockQuantity: 15,
    isOnSale: true,
    isFeatured: true,
    isNew: false,
    tags: ["robinet", "cuisine", "chrome"]
  },
  {
    id: "s2",
    name: "Pack WC Complet",
    nameAr: "طقم مرحاض كامل",
    description: "WC a poser avec abattant soft-close. Chasse d'eau economique double debit.",
    price: 890.00,
    image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=600&q=80",
    category: "sanitaire",
    subcategory: "wc",
    brand: "SanitaPro",
    rating: 4.7,
    reviewCount: 167,
    inStock: true,
    stockQuantity: 8,
    isOnSale: false,
    isFeatured: true,
    isNew: true,
    tags: ["wc", "sanitaire", "economique"]
  },
  // Peinture Products
  {
    id: "p1",
    name: "Peinture Acrylique Mat",
    nameAr: "طلاء أكريليك مطفي",
    description: "Peinture interieure acrylique haute couverture. Sechage rapide et sans odeur.",
    price: 189.00,
    originalPrice: 220.00,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
    category: "peinture",
    subcategory: "interieure",
    brand: "ColorMaster",
    rating: 4.8,
    reviewCount: 312,
    inStock: true,
    stockQuantity: 67,
    isOnSale: true,
    isFeatured: true,
    isNew: false,
    tags: ["peinture", "acrylique", "interieur"]
  },
  {
    id: "p2",
    name: "Kit Rouleaux Premium",
    nameAr: "طقم بكرات دهان",
    description: "Set de 3 rouleaux professionnels avec manchon anti-goutte. Pour tous types de peintures.",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    category: "peinture",
    subcategory: "accessoires",
    brand: "PaintPro",
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    stockQuantity: 56,
    isOnSale: false,
    isFeatured: false,
    isNew: true,
    tags: ["rouleau", "peinture", "accessoire"]
  },
  // Quincaillerie Products
  {
    id: "q1",
    name: "Coffret Visserie 500 pcs",
    nameAr: "صندوق براغي 500 قطعة",
    description: "Assortiment complet de vis, ecrous et rondelles. Acier zingue anti-corrosion.",
    price: 125.00,
    originalPrice: 150.00,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
    category: "quincaillerie",
    subcategory: "visserie",
    brand: "FixAll",
    rating: 4.7,
    reviewCount: 256,
    inStock: true,
    stockQuantity: 28,
    isOnSale: true,
    isFeatured: true,
    isNew: false,
    tags: ["vis", "coffret", "assortiment"]
  },
  {
    id: "q2",
    name: "Serrure 3 Points",
    nameAr: "قفل 3 نقاط",
    description: "Serrure de securite haute resistance. Certification A2P pour portes d'entree.",
    price: 320.00,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "quincaillerie",
    subcategory: "serrurerie",
    brand: "SecuriLock",
    rating: 4.9,
    reviewCount: 178,
    inStock: true,
    stockQuantity: 12,
    isOnSale: false,
    isFeatured: true,
    isNew: false,
    tags: ["serrure", "securite", "porte"]
  },
  // Outillage Products
  {
    id: "o1",
    name: "Perceuse Sans Fil 18V",
    nameAr: "مثقاب لاسلكي 18 فولت",
    description: "Perceuse-visseuse professionnelle avec 2 batteries Li-Ion. Couple 65 Nm.",
    price: 650.00,
    originalPrice: 780.00,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    category: "outillage",
    subcategory: "electroportatif",
    brand: "PowerDrill",
    rating: 4.9,
    reviewCount: 423,
    inStock: true,
    stockQuantity: 18,
    isOnSale: true,
    isFeatured: true,
    isNew: false,
    tags: ["perceuse", "sans fil", "professionnel"]
  },
  {
    id: "o2",
    name: "Caisse a Outils 150 pcs",
    nameAr: "صندوق أدوات 150 قطعة",
    description: "Mallette complete d'outils professionnels. Cles, tournevis, pinces et plus.",
    price: 380.00,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
    category: "outillage",
    subcategory: "coffrets",
    brand: "ToolMaster",
    rating: 4.7,
    reviewCount: 289,
    inStock: true,
    stockQuantity: 22,
    isOnSale: false,
    isFeatured: true,
    isNew: true,
    tags: ["caisse", "outils", "complet"]
  },
  // Electricite Products
  {
    id: "e1",
    name: "Tableau Electrique 12 Modules",
    nameAr: "لوحة كهربائية 12 موديول",
    description: "Coffret pre-equipe avec disjoncteurs et differentiel. Norme NF C 15-100.",
    price: 189.00,
    originalPrice: 230.00,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "electricite",
    subcategory: "tableaux",
    brand: "ElectroPro",
    rating: 4.8,
    reviewCount: 198,
    inStock: true,
    stockQuantity: 14,
    isOnSale: true,
    isFeatured: true,
    isNew: false,
    tags: ["tableau", "disjoncteur", "electrique"]
  },
  {
    id: "e2",
    name: "Kit Prises + Interrupteurs",
    nameAr: "طقم مقابس ومفاتيح",
    description: "Lot de 10 prises et 5 interrupteurs design moderne. Finition blanc satin.",
    price: 145.00,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    category: "electricite",
    subcategory: "appareillage",
    brand: "SwitchStyle",
    rating: 4.5,
    reviewCount: 112,
    inStock: true,
    stockQuantity: 45,
    isOnSale: false,
    isFeatured: false,
    isNew: true,
    tags: ["prise", "interrupteur", "design"]
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(p => p.isNew);
};

export const getOnSaleProducts = (): Product[] => {
  return products.filter(p => p.isOnSale);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(p => p.category === categorySlug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(t => t.toLowerCase().includes(lowerQuery))
  );
};
