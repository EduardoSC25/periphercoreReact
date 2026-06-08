export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  shortDescription: string;
  badge?: string;
  colors?: string[];
  slug: string;
}

export const products: Product[] = [
  // --- MOUSES ---
  {
    id: '1',
    name: 'MX Master 3S Wireless Mouse',
    brand: 'PeriphCore',
    category: 'Mouses',
    categorySlug: 'mice',
    price: 2299,
    originalPrice: 2599,
    rating: 4.9,
    reviews: 1240,
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1200'],
    description: 'El ratón más icónico ahora perfeccionado. Siente cada momento de tu flujo de trabajo con aún más precisión, tactilidad y rendimiento. Clics discretos y sensor de 8,000 DPI sobre cristal.',
    shortDescription: 'Ratón inalámbrico de alto rendimiento con scroll MagSpeed.',
    badge: 'Más vendido',
    colors: ['#18181b', '#f4f4f5', '#71717a'],
    slug: 'mx-master-3s'
  },
  {
    id: 'm2',
    name: 'Pebble M350 Wireless Mouse',
    brand: 'PeriphCore',
    category: 'Mouses',
    categorySlug: 'mice',
    price: 599,
    originalPrice: 799,
    rating: 4.5,
    reviews: 820,
    images: ['https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=1200'],
    description: 'Haz que cualquier espacio sea minimalista, moderno y silencioso con PeriphCore Pebble. Su diseño portátil y forma orgánica se adapta a tu estilo de vida.',
    shortDescription: 'Ratón Bluetooth moderno, delgado y silencioso.',
    badge: 'Nuevo Color',
    colors: ['#f87171', '#fbbf24', '#34d399'],
    slug: 'pebble-m350'
  },
  {
    id: 'm3',
    name: 'Lift Vertical Ergonomic Mouse',
    brand: 'PeriphCore',
    category: 'Mouses',
    categorySlug: 'mice',
    price: 1599,
    rating: 4.8,
    reviews: 320,
    images: ['https://images.unsplash.com/photo-1605773527852-c546a8584ea3?auto=format&fit=crop&q=80&w=1200'],
    description: 'Ponte cómodo de la mañana a la noche con Lift. Un ratón ergonómico vertical diseñado para manos pequeñas y medianas.',
    shortDescription: 'Ratón vertical inalámbrico diseñado para el confort.',
    badge: 'Ergonómico',
    slug: 'lift-vertical'
  },

  // --- TECLADOS ---
  {
    id: '2',
    name: 'G915 TKL Mechanical Keyboard',
    brand: 'PeriphCore',
    category: 'Teclados',
    categorySlug: 'keyboards',
    price: 4599,
    rating: 4.8,
    reviews: 850,
    images: ['https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1200'],
    description: 'Un avance en diseño e ingeniería. G915 TKL incorpora tecnología inalámbrica LIGHTSPEED de grado profesional y switches mecánicos de bajo perfil.',
    shortDescription: 'Teclado mecánico RGB inalámbrico sin teclado numérico.',
    badge: 'Pro Gaming',
    colors: ['#18181b', '#ffffff'],
    slug: 'g915-tkl'
  },
  {
    id: 'k2',
    name: 'MX Keys S Keyboard',
    brand: 'PeriphCore',
    category: 'Teclados',
    categorySlug: 'keyboards',
    price: 2499,
    originalPrice: 2799,
    rating: 4.9,
    reviews: 1100,
    images: ['https://images.unsplash.com/photo-1587829741301-dc798b83aca2?auto=format&fit=crop&q=80&w=1200'],
    description: 'Teclado inalámbrico avanzado con retroiluminación inteligente y teclas cóncavas para una escritura fluida y precisa.',
    shortDescription: 'Escritura fluida, precisa y silenciosa con MX Keys S.',
    badge: 'Productividad',
    slug: 'mx-keys-s'
  },
  {
    id: 'k3',
    name: 'POP Keys Wireless Mechanical',
    brand: 'PeriphCore',
    category: 'Teclados',
    categorySlug: 'keyboards',
    price: 2199,
    rating: 4.6,
    reviews: 150,
    images: ['https://images.unsplash.com/photo-1562619425-c307bb83bc42?auto=format&fit=crop&q=80&w=1200'],
    description: 'Deja que tu personalidad brille en tu escritorio con POP Keys. Con teclas de emoji personalizables y una estética retro-moderna.',
    shortDescription: 'Teclado mecánico inalámbrico con teclas de emoji.',
    badge: 'Estilo',
    slug: 'pop-keys'
  },

  // --- AUDIO ---
  {
    id: '3',
    name: 'Zone Vibe 100 Headset',
    brand: 'PeriphCore',
    category: 'Audio',
    categorySlug: 'audio',
    price: 1899,
    originalPrice: 2199,
    rating: 4.6,
    reviews: 420,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200'],
    description: 'Exprésate con Zone Vibe 100. Audífonos inalámbricos modernos y ligeros para trabajar y jugar desde casa.',
    shortDescription: 'Audífonos inalámbricos ligeros con micrófono con cancelación de ruido.',
    badge: 'Home Office',
    slug: 'zone-vibe-100'
  },
  {
    id: 'a2',
    name: 'G733 LIGHTSPEED Wireless',
    brand: 'PeriphCore',
    category: 'Audio',
    categorySlug: 'audio',
    price: 3299,
    rating: 4.7,
    reviews: 1500,
    images: ['https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&q=80&w=1200'],
    description: 'Juega a tu manera. Finalmente, unos audífonos que pueden ser tan expresivos como tú con tecnología LIGHTSPEED.',
    shortDescription: 'Audífonos inalámbricos para gaming con iluminación RGB.',
    badge: 'Color Collection',
    slug: 'g733-wireless'
  },
  {
    id: 'a3',
    name: 'Yeti GX Dynamic Mic',
    brand: 'PeriphCore',
    category: 'Audio',
    categorySlug: 'audio',
    price: 3499,
    rating: 4.9,
    reviews: 85,
    images: ['https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200'],
    description: 'Micrófono dinámico premium para juegos con LIGHTSYNC RGB y cápsula optimizada para transmisión de voz clara.',
    shortDescription: 'Micrófono dinámico para streaming con RGB.',
    badge: 'Premium Audio',
    slug: 'yeti-gx'
  },

  // --- WEBCAMS / STREAMING ---
  {
    id: '4',
    name: 'MX Brio 4K Webcam',
    brand: 'PeriphCore',
    category: 'Webcams',
    categorySlug: 'webcams',
    price: 4299,
    rating: 4.9,
    reviews: 210,
    images: ['https://images.unsplash.com/photo-1626084300762-5ec803362a74?auto=format&fit=crop&q=80&w=1200'],
    description: 'Nuestra webcam más avanzada. 4K Ultra HD con sensor de imagen avanzado para videollamadas de calidad cinematográfica.',
    shortDescription: 'Webcam 4K Ultra HD avanzada con soporte de inteligencia artificial.',
    badge: 'Lo más nuevo',
    slug: 'mx-brio-4k'
  },
  {
    id: 's2',
    name: 'Litra Beam Streaming Light',
    brand: 'PeriphCore',
    category: 'Streaming',
    categorySlug: 'streaming',
    price: 2899,
    rating: 4.8,
    reviews: 120,
    images: ['https://images.unsplash.com/photo-1616423641454-940003058866?auto=format&fit=crop&q=80&w=1200'],
    description: 'Logra una iluminación de estudio con Litra Beam. Una luz de escritorio LED premium con tecnología TrueSoft.',
    shortDescription: 'Luz LED premium de escritorio para streaming.',
    badge: 'Studio Ready',
    slug: 'litra-beam'
  },

  // --- GAMING ---
  {
    id: 'g1',
    name: 'PRO X SUPERLIGHT 2',
    brand: 'PeriphCore',
    category: 'Gaming',
    categorySlug: 'gaming',
    price: 3699,
    rating: 4.9,
    reviews: 980,
    images: ['https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=1200'],
    description: 'El ratón de gaming más rápido y preciso, ahora evolucionado para los profesionales de eSports más exigentes.',
    shortDescription: 'Ratón inalámbrico ultra-ligero para eSports.',
    badge: 'Esports Ready',
    slug: 'pro-x-superlight-2'
  },
  {
    id: 'g2',
    name: 'G502 X LIGHTSPEED',
    brand: 'PeriphCore',
    category: 'Gaming',
    categorySlug: 'gaming',
    price: 2999,
    rating: 4.8,
    reviews: 2400,
    images: ['https://images.unsplash.com/photo-1527814732930-de47d30026a1?auto=format&fit=crop&q=80&w=1200'],
    description: 'El ratón de gaming más popular del mundo, rediseñado con interruptores híbridos óptico-mecánicos LIGHTFORCE.',
    shortDescription: 'Ratón inalámbrico icónico para gaming.',
    badge: 'Icono',
    slug: 'g502-x-lightspeed'
  }
];

export const categories = [
  { id: '1', name: 'Mouses', slug: 'mice', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800', count: 12 },
  { id: '2', name: 'Teclados', slug: 'keyboards', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800', count: 8 },
  { id: '3', name: 'Audio', slug: 'audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800', count: 15 },
  { id: '4', name: 'Webcams', slug: 'webcams', image: 'https://images.unsplash.com/photo-1626084300762-5ec803362a74?auto=format&fit=crop&q=80&w=800', count: 6 },
  { id: '5', name: 'Streaming', slug: 'streaming', image: 'https://images.unsplash.com/photo-1616423641454-940003058866?auto=format&fit=crop&q=80&w=800', count: 4 },
  { id: '6', name: 'Gaming', slug: 'gaming', image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=800', count: 20 },
];
