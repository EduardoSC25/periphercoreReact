import React, { useState, useMemo, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useNavigate, 
  useSearchParams, 
  useLocation, 
  useParams 
} from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  CreditCard,
  Lock,
  Package,
  Heart,
  User,
  ExternalLink,
  ChevronDown,
  Trash2,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  RefreshCcw,
  Globe,
  Leaf,
  Recycle,
  BarChart3,
  Waves,
  Zap,
  Mountain,
  Sun,
  Droplets
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products, categories, Product } from './data';

// --- Shared Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants: any = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-xl shadow-zinc-900/10',
    secondary: 'bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-800 hover:bg-zinc-50 shadow-sm',
    ghost: 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100',
    link: 'text-zinc-900 font-bold hover:underline underline-offset-4'
  };
  return (
    <motion.button 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center px-8 py-4 rounded-2xl text-[13px] font-black uppercase tracking-widest transition-all disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const SectionContainer = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 ${className}`}>
    {children}
  </div>
);

// --- Layout Components ---

const Navbar = ({ onSearchOpen, cartCount }: { onSearchOpen: () => void, cartCount: number }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname, search } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mouses', path: '/shop?category=mice' },
    { name: 'Teclados', path: '/shop?category=keyboards' },
    { name: 'Audio', path: '/shop?category=audio' },
    { name: 'Webcams', path: '/shop?category=webcams' },
    { name: 'Streaming', path: '/shop?category=streaming' },
    { name: 'Gaming', path: '/shop?category=gaming' },
  ];

  const currentPath = pathname + search;

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-zinc-100 py-4' : 'bg-white py-8'}`}>
      <SectionContainer>
        <div className="flex items-center justify-between gap-8 h-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-2xl shadow-zinc-900/20"
            >
              <Package size={22} className="text-white" />
            </motion.div>
            <span className="font-display font-black text-2xl tracking-tight text-zinc-900">PeriphCore</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-xl ${currentPath === link.path ? 'text-zinc-900 bg-zinc-100' : 'text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onSearchOpen}
              className="p-3 text-zinc-400 hover:text-zinc-900 rounded-full transition-all"
            >
              <Search size={20} strokeWidth={2.5} />
            </motion.button>
            <Link to="/cart" className="relative p-3 bg-zinc-900 text-white rounded-2xl hover:bg-black transition-all shadow-xl shadow-zinc-900/10 group ml-2">
              <ShoppingCart size={20} strokeWidth={2.5} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-3 text-zinc-900 hover:bg-zinc-100 rounded-2xl ml-2"
            >
              <Menu size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </SectionContainer>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-zinc-50 border-t border-zinc-100 pt-32 pb-16 mt-40">
    <SectionContainer>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-20 mb-32">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center">
              <Package size={22} className="text-white" />
            </div>
            <span className="font-display font-black text-2xl tracking-tight text-zinc-900">PeriphCore</span>
          </div>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-[320px] font-medium italic">
            "Redefiniendo la frontera entre la voluntad humana y la precisión digital."
          </p>
        </div>
        <div>
          <h4 className="font-black text-zinc-900 text-[10px] mb-10 uppercase tracking-[0.4em] font-mono opacity-40">Hardware</h4>
          <ul className="space-y-5 text-sm font-bold text-zinc-400">
            <li><Link to="/shop?category=mice" className="hover:text-zinc-900 transition-colors">Mouses</Link></li>
            <li><Link to="/shop?category=keyboards" className="hover:text-zinc-900 transition-colors">Teclados</Link></li>
            <li><Link to="/shop?category=audio" className="hover:text-zinc-900 transition-colors">Audio</Link></li>
            <li><Link to="/shop?category=webcams" className="hover:text-zinc-900 transition-colors">Webcams</Link></li>
            <li><Link to="/shop?category=streaming" className="hover:text-zinc-900 transition-colors">Streaming</Link></li>
            <li><Link to="/shop?category=gaming" className="hover:text-zinc-900 transition-colors">Gaming</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-zinc-900 text-[10px] mb-10 uppercase tracking-[0.4em] font-mono opacity-40">Estudio</h4>
          <ul className="space-y-5 text-sm font-bold text-zinc-400">
            <li><Link to="/compromiso" className="hover:text-zinc-900 transition-colors">Sustentabilidad</Link></li>
            <li><Link to="/" className="hover:text-zinc-900 transition-colors">Filosofía</Link></li>
            <li><Link to="/" className="hover:text-zinc-900 transition-colors">Carreras</Link></li>
            <li><Link to="/" className="hover:text-zinc-900 transition-colors">Prensa</Link></li>
          </ul>
        </div>
        <div className="col-span-2">
          <h4 className="font-black text-zinc-900 text-[10px] mb-10 uppercase tracking-[0.4em] font-mono opacity-40">Protocolo</h4>
          <p className="text-xs text-zinc-500 font-bold mb-6">Suscríbete para recibir actualizaciones de firmware y lanzamientos.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="protocol@periphercore.com" 
              className="flex-1 bg-white border border-zinc-200 rounded-2xl px-8 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all font-medium shadow-sm" 
            />
            <Button className="!rounded-2xl px-10">UNIRSE</Button>
          </form>
        </div>
      </div>
      <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em]">© 2026 PeriphCore Labs. Crafted for Performance.</p>
        <div className="flex gap-12 text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">
          <Link to="/" className="hover:text-zinc-900">Privacidad</Link>
          <Link to="/" className="hover:text-zinc-900">Términos</Link>
          <Link to="/" className="hover:text-zinc-900">Legal</Link>
        </div>
      </div>
    </SectionContainer>
  </footer>
);

// --- Feature Pages ---

const Home = ({ onAddToCart }: any) => {
  return (
    <main className="pt-24 overflow-x-hidden bg-white">
      {/* Hero: Asymmetric Split */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_0%,rgba(244,244,245,0.5)_0%,rgba(255,255,255,1)_100%)]" />
        
        <SectionContainer className="w-full">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-left"
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-12 block font-mono"
              >
                Pure Tech Performance
              </motion.span>
              <h1 className="font-display text-7xl md:text-8xl lg:text-[120px] font-black tracking-tight text-zinc-900 leading-[0.8] mb-12">
                La Maestría <br /> del <span className="text-zinc-200">Control.</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed max-w-lg mb-16">
                Equipamiento de grado profesional para los arquitectos del código y artesanos digitales.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/shop" className="bg-zinc-900 text-white px-12 py-6 rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-zinc-900/40 hover:bg-black hover:scale-[1.05] transition-all flex items-center justify-center gap-3 active:scale-95 group">
                  Explorar Catálogo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/shop" className="bg-white text-zinc-900 border border-zinc-200 px-12 py-6 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-zinc-900 transition-all flex items-center justify-center active:scale-95">
                  Nuestra Visión
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative aspect-[4/5] group"
            >
              <div className="absolute inset-0 bg-zinc-900/5 blur-[120px] rounded-full scale-90 -z-10 group-hover:bg-zinc-900/10 transition-colors duration-1000" />
              <SafeImage 
                src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=2000" 
                alt="Product Hero" 
                className="w-full h-full rounded-[64px] shadow-[0_64px_120px_-12px_rgba(0,0,0,0.15)] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              />
            </motion.div>
          </div>
        </SectionContainer>
      </section>

      {/* Categories: Bento Grid */}
      <section className="py-40 bg-zinc-50/50 border-y border-zinc-100">
        <SectionContainer>
          <div className="flex items-center justify-between mb-24">
             <h2 className="font-display text-5xl font-black tracking-tight text-zinc-900">Categorías</h2>
             <div className="flex gap-4">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-200" />)}
             </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={cat.id}
              >
                <Link 
                  to={`/shop?category=${cat.slug}`} 
                  className="group flex flex-col items-center text-center p-10 rounded-[48px] bg-white border border-zinc-100 hover:shadow-2xl hover:shadow-zinc-900/5 transition-all duration-700"
                >
                  <div className="w-24 h-24 rounded-3xl overflow-hidden bg-zinc-50 mb-10 group-hover:scale-110 transition-transform duration-700">
                    <SafeImage src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-display font-black text-sm text-zinc-900 mb-2 uppercase tracking-tight">{cat.name}</h3>
                  <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest font-mono">{cat.count} Sku</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Featured Grid: Asymmetric */}
      <section className="py-40 bg-white">
        <SectionContainer>
          <div className="flex flex-col items-start mb-24">
            <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.4em] mb-10 block font-mono">Performance Selection</span>
            <h2 className="font-display text-6xl md:text-7xl font-black tracking-tight text-zinc-900 leading-[0.9] max-w-2xl">Hardware que define el Estándar.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.slice(0, 3).map((product, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={product.id}
              >
                <ProductCard product={product} onAddToCart={() => onAddToCart(product)} />
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Corporate Section: Refined Cold Luxury */}
      <section className="py-40 bg-zinc-950 text-white relative overflow-hidden rounded-[80px] mx-6 sm:mx-12 my-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />
        <SectionContainer>
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="text-left relative z-10">
              <span className="text-emerald-500 font-black tracking-[0.5em] uppercase text-[10px] mb-12 block font-mono">Enterprise Solution</span>
              <h2 className="font-display text-6xl md:text-[90px] font-black tracking-tight leading-[0.85] mb-12">Impulsando el <br /> Futuro del Trabajo.</h2>
              <p className="text-zinc-400 text-xl leading-relaxed mb-16 max-w-xl font-medium">
                Hardware empresarial diseñado para el ecosistema híbrido. Precisión, seguridad y escalabilidad global.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-20">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10"><ShieldCheck size={24} className="text-emerald-500" /></div>
                  <h4 className="font-display font-black text-lg tracking-tight">Seguridad Logi Bolt</h4>
                  <p className="text-xs text-zinc-500 font-bold leading-relaxed">Encriptación de grado militar en cada pulsación.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10"><Globe size={24} className="text-emerald-500" /></div>
                  <h4 className="font-display font-black text-lg tracking-tight">Soporte Global</h4>
                  <p className="text-xs text-zinc-500 font-bold leading-relaxed">Asistencia dedicada 24/7 en cualquier hemisferio.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-zinc-950 px-12 py-6 rounded-2xl text-[13px] font-black tracking-widest shadow-2xl"
                >
                  SOLICITAR COTIZACIÓN
                </motion.button>
                <button className="text-zinc-400 hover:text-white font-black uppercase tracking-widest text-[11px] flex items-center gap-3 transition-colors px-8 border border-white/10 rounded-2xl hover:bg-white/5">
                  Catálogo Corporativo <ExternalLink size={18} />
                </button>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
               <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full scale-75 group-hover:scale-95 transition-transform duration-1000" />
               <SafeImage 
                 src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1400" 
                 alt="Professional Office Setup" 
                 className="rounded-[64px] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5"
               />
            </motion.div>
          </div>
        </SectionContainer>
      </section>

      {/* Sustainability: Bento Layout */}
      <section className="py-40 bg-white">
        <SectionContainer>
          <div className="bg-zinc-50 rounded-[80px] p-20 md:p-32 overflow-hidden relative group border border-zinc-100">
             <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-10 lg:opacity-100">
                <SafeImage 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                  alt="Nature" 
                  className="w-full h-full object-cover rounded-l-[100px] grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
             </div>
             <div className="max-w-2xl relative z-10">
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-emerald-500/40">
                      <Leaf size={28} />
                   </div>
                   <span className="text-emerald-700 font-black tracking-[0.5em] uppercase text-[10px] font-mono">Planet First</span>
                </div>
                <h2 className="font-display text-6xl md:text-8xl font-black tracking-tight text-zinc-900 leading-[0.8] mb-12">Todo <br /> Importa.</h2>
                <p className="text-zinc-500 text-2xl font-medium leading-relaxed mb-16 max-w-xl">
                  Estamos cuestionando cada material para reducir nuestra huella de carbono a cero. Un diseño premium no debería costarle al planeta.
                </p>
                <Link to="/compromiso" className="inline-flex items-center gap-4 bg-zinc-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-black transition-all shadow-2xl active:scale-95 group">
                  Conoce nuestra visión <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>
        </SectionContainer>
      </section>
    </main>
  );
};

const SafeImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [error, setError] = useState(false);
  const fallback = 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop';
  
  return (
    <img 
      src={error ? fallback : src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)}
    />
  );
};

const ProductCard = ({ product, onAddToCart }: { product: Product, onAddToCart: () => void }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="group flex flex-col bg-white rounded-[40px] border border-zinc-100 overflow-hidden hover:shadow-[0_64px_100px_-12px_rgba(0,0,0,0.08)] transition-all duration-700"
  >
    <div className="relative aspect-[4/5] bg-zinc-50 overflow-hidden">
      <Link to={`/product/${product.slug}`} className="block h-full">
        <SafeImage 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
      </Link>
      <div className="absolute top-8 left-8">
        {product.badge && (
          <span className="px-4 py-1.5 bg-white/90 backdrop-blur-xl shadow-xl rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-zinc-900 border border-white/20 w-max">
            {product.badge}
          </span>
        )}
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          onAddToCart();
        }}
        className="absolute bottom-8 right-8 w-16 h-16 bg-zinc-900 text-white rounded-2xl flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-2xl z-10"
      >
        <Plus size={28} />
      </motion.button>
    </div>
    <div className="p-10 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] font-mono">{product.category}</span>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-50 rounded-lg">
          <Star size={10} fill="#fbbf24" stroke="none" />
          <span className="text-[10px] font-black text-zinc-900">{product.rating}</span>
        </div>
      </div>
      <Link to={`/product/${product.slug}`} className="block mb-6">
        <h3 className="font-display text-2xl font-black text-zinc-900 tracking-tight leading-tight group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-zinc-400 text-sm font-medium line-clamp-2 mb-10 leading-relaxed">
        {product.shortDescription}
      </p>
      <div className="mt-auto flex items-center justify-between pt-8 border-t border-zinc-50">
        <div className="flex flex-col">
          {product.originalPrice && (
            <span className="text-[10px] text-zinc-300 line-through font-mono font-bold mb-0.5">${product.originalPrice.toLocaleString()}</span>
          )}
          <span className="text-2xl font-mono font-black text-zinc-900 tracking-tighter">${product.price.toLocaleString()}</span>
        </div>
        <Link 
          to={`/product/${product.slug}`}
          className="w-12 h-12 rounded-xl border border-zinc-100 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-500 group/btn"
        >
          <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const Sustainability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 overflow-x-hidden bg-white">
      {/* Hero: Immersive and Dark */}
      <section className="relative min-h-[100dvh] flex items-center justify-center text-center px-6 overflow-hidden">
         <div className="absolute inset-0 -z-10">
            <SafeImage 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" 
              alt="Nature Forest" 
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
         </div>
         <div className="max-w-6xl mx-auto relative z-10 text-white">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-emerald-400 font-black tracking-[0.6em] uppercase text-xs mb-12 block font-mono"
            >
              Everything Matters
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-7xl md:text-[160px] font-black tracking-tighter leading-[0.75] mb-12"
            >
              Cuestionamos <br /> <span className="text-zinc-400">Cada Atomo.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-3xl text-zinc-300 font-medium max-w-3xl mx-auto leading-relaxed"
            >
               Porque el diseño premium no debería costarle al planeta. Estamos rediseñando el futuro de la tecnología para un mundo circular.
            </motion.p>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-24"
            >
               <ChevronDown size={48} className="mx-auto text-emerald-400/30" strokeWidth={1} />
            </motion.div>
         </div>
      </section>

      {/* Impact Stats */}
      <section className="py-32 bg-white relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-zinc-100" />
         <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
               <div className="text-center group">
                  <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-emerald-100">
                     <BarChart3 size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="text-6xl font-black text-zinc-900 tracking-tighter mb-4">-42%</h3>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed max-w-[200px] mx-auto">Reducción de huella de carbono para 2026</p>
               </div>
               <div className="text-center group">
                  <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-indigo-100">
                     <Recycle size={32} className="text-indigo-600" />
                  </div>
                  <h3 className="text-6xl font-black text-zinc-900 tracking-tighter mb-4">65%</h3>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed max-w-[200px] mx-auto">Plástico reciclado en nuestros dispositivos</p>
               </div>
               <div className="text-center group">
                  <div className="w-20 h-20 bg-amber-50 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-amber-100">
                     <Globe size={32} className="text-amber-600" />
                  </div>
                  <h3 className="text-6xl font-black text-zinc-900 tracking-tighter mb-4">100%</h3>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed max-w-[200px] mx-auto">Energía renovable en operaciones globales</p>
               </div>
            </div>
         </SectionContainer>
      </section>

      {/* Narrative Section 01 */}
      <section className="py-40 bg-zinc-50/50 overflow-hidden">
         <SectionContainer>
            <div className="grid lg:grid-cols-2 gap-32 items-center mb-48">
               <div className="relative">
                  <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-500/5 blur-[80px] rounded-full" />
                  <span className="text-zinc-400 font-black tracking-[0.4em] uppercase text-xs mb-8 block font-mono">Visión 2030</span>
                  <h2 className="text-6xl font-black text-zinc-900 tracking-tighter leading-[0.9] mb-10">Transparencia <br /> Radical.</h2>
                  <p className="text-zinc-500 text-xl font-medium leading-relaxed mb-12 max-w-lg">
                     Fuimos los primeros en incluir etiquetas de impacto de carbono en nuestro hardware. Queremos que cada usuario tome decisiones informadas sobre su tecnología.
                  </p>
                  <Link to="/" className="inline-flex items-center gap-3 text-sm font-black text-zinc-900 group">
                    <span className="border-b-4 border-zinc-900 pb-1 group-hover:text-zinc-400 group-hover:border-zinc-400 transition-all uppercase tracking-widest">Aprende sobre etiquetas</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>
               <div className="relative group">
                  <div className="absolute inset-0 bg-zinc-900/10 rounded-[64px] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" alt="Transparency" className="w-full aspect-[4/5] object-cover rounded-[64px] shadow-2xl transition-all duration-1000 group-hover:scale-[1.02]" />
               </div>
            </div>

            {/* Bridge Section to fill white space */}
            <div className="flex flex-col items-center text-center mb-48">
               <div className="w-px h-24 bg-gradient-to-b from-zinc-200 to-transparent mb-12" />
               <h3 className="text-3xl md:text-5xl font-black text-zinc-300 tracking-tighter mb-8 max-w-3xl">Diseñamos no solo el producto, sino también su fin de vida.</h3>
               <div className="flex gap-4">
                  {[1,2,3,4].map(i => <div key={i} className="w-2 h-2 rounded-full bg-zinc-200" />)}
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-32 items-center">
               <div className="lg:order-2">
                  <span className="text-zinc-400 font-black tracking-[0.4em] uppercase text-xs mb-8 block font-mono">Circularidad</span>
                  <h2 className="text-6xl font-black text-zinc-900 tracking-tighter leading-[0.9] mb-10">Materiales que <br /> Vuelven a Nacer.</h2>
                  <p className="text-zinc-500 text-xl font-medium leading-relaxed mb-12 max-w-lg">
                     Desde aluminio bajo en carbono hasta plásticos recolectados de los océanos. Cada componente es elegido por su capacidad de ser reciclado infinitamente.
                  </p>
                  <Link to="/" className="inline-flex items-center gap-3 text-sm font-black text-zinc-900 group">
                    <span className="border-b-4 border-zinc-900 pb-1 group-hover:text-zinc-400 group-hover:border-zinc-400 transition-all uppercase tracking-widest">Nuestra política de materiales</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>
               <div className="relative group lg:order-1">
                  <div className="absolute inset-0 bg-emerald-500/10 rounded-[64px] -translate-x-6 translate-y-6 -z-10 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
                  <SafeImage src="https://images.unsplash.com/photo-1591193516411-949247139ef1?auto=format&fit=crop&q=80&w=1200" alt="Materials" className="w-full aspect-[4/5] object-cover rounded-[64px] shadow-2xl transition-all duration-1000 group-hover:scale-[1.02]" />
               </div>
            </div>
         </SectionContainer>
      </section>

      {/* Bento Grid Gallery Section */}
      <section className="py-40 bg-zinc-950 text-white relative">
         <SectionContainer>
            <div className="text-center mb-32">
               <span className="text-emerald-500 font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Casos de Estudio</span>
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight text-white">Nuestra Serie <br /> de Impacto.</h2>
               <p className="text-zinc-500 text-xl font-medium max-w-2xl mx-auto">Explora las historias detrás de cada cambio sistémico que estamos implementando en nuestras fábricas.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {/* Main Episode */}
               <div className="md:col-span-3 aspect-video bg-zinc-900 rounded-[56px] overflow-hidden relative group border border-white/5">
                  <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1600" alt="Ep 1" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 p-16 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                     <span className="text-emerald-400 font-black tracking-[0.3em] uppercase text-xs mb-6">Episodio 01</span>
                     <h3 className="text-5xl md:text-6xl font-black tracking-tighter max-w-2xl">La Revolución del Plástico Reciclado de Consumo</h3>
                     <p className="mt-8 text-zinc-400 text-lg font-medium max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">Transformamos desechos electrónicos en hardware premium de alta durabilidad.</p>
                  </div>
               </div>

               {/* Right side bento box */}
               <div className="md:col-span-1 bg-emerald-600 rounded-[56px] p-12 flex flex-col justify-between hover:bg-emerald-500 transition-all duration-500 group shadow-2xl shadow-emerald-500/10">
                   <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:rotate-12 transition-transform">
                      <BarChart3 size={32} />
                   </div>
                   <div>
                     <h3 className="text-3xl font-black tracking-tighter mb-6 leading-tight">Circularidad <br /> Total</h3>
                     <p className="text-emerald-50/80 text-sm font-bold leading-relaxed">Cómo cerramos el ciclo de vida de cada mouse y teclado que fabricamos.</p>
                   </div>
               </div>

               {/* Bottom row bento boxes */}
               <div className="md:col-span-2 bg-white text-zinc-950 rounded-[56px] p-16 flex flex-col justify-center relative overflow-hidden group shadow-2xl">
                  <div className="relative z-10">
                     <h3 className="text-4xl font-black tracking-tighter mb-8 leading-tight">Embalaje sin <br /> Residuos.</h3>
                     <p className="text-zinc-500 font-bold text-lg max-w-xs mb-10 leading-relaxed">Eliminamos los plásticos de un solo uso en todas nuestras cajas para 2025.</p>
                     <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Package size={24} className="text-zinc-900" />
                     </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-zinc-50 rounded-tl-[100px] -z-0 translate-x-12 translate-y-12" />
               </div>

               <div className="md:col-span-2 aspect-square md:aspect-auto bg-zinc-800 rounded-[56px] overflow-hidden group border border-white/5">
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200" alt="Ep 2" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0" />
                  <div className="absolute inset-0 p-12 flex flex-col items-center justify-center text-center">
                     <Zap size={48} className="text-amber-400 mb-8" />
                     <h3 className="text-4xl font-black tracking-tighter">Energía Limpia</h3>
                     <p className="mt-4 text-zinc-400 font-bold text-sm uppercase tracking-widest">Nuestra red global funciona al 100% con renovables.</p>
                  </div>
               </div>
            </div>
         </SectionContainer>
      </section>

      {/* Large Visual Section to fill white space */}
      <section className="py-0 relative h-[80vh] overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            alt="Mountains" 
            className="w-full h-full object-cover grayscale brightness-50" 
         />
         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
            <Mountain size={64} className="mb-8 text-emerald-400" />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">Inquebrantable.</h2>
            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">Nuestra promesa con las generaciones futuras es más sólida que nunca.</p>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-60 bg-white text-center">
         <SectionContainer>
            <div className="max-w-4xl mx-auto">
               <h2 className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-12">Hagámoslo <br /> Juntos.</h2>
               <p className="text-xl text-zinc-500 font-medium mb-16 max-w-2xl mx-auto">Únete a nuestra comunidad y sé parte del cambio sistémico que el mundo necesita.</p>
               <Link to="/shop" className="bg-zinc-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-2xl active:scale-95">Explorar productos responsables</Link>
            </div>
         </SectionContainer>
      </section>
    </main>
  );
};

const Shop = ({ onAddToCart }: any) => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const cat = searchParams.get('category');
  
  const filtered = useMemo(() => {
    let result = products;
    if (q) {
      result = result.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()));
    }
    if (cat) {
      result = result.filter(p => p.categorySlug === cat);
    }
    return result;
  }, [q, cat]);

  const currentCategory = categories.find(c => c.slug === cat);

  return (
    <main className="pt-48 pb-20 bg-white">
      <SectionContainer>
        <div className="flex flex-col items-start mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-6 block font-mono"
          >
            {cat ? currentCategory?.name : 'Performance Catalog'}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-7xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-12"
          >
            {q ? `Resultados: "${q}"` : 'Hardware.'}
          </motion.h1>
          
          {/* Filters: Professional Pill List */}
          <div className="flex flex-wrap items-center gap-3">
             <Link 
               to="/shop" 
               className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border ${!cat ? 'bg-zinc-900 text-white border-zinc-900 shadow-2xl shadow-zinc-900/20' : 'bg-white text-zinc-400 border-zinc-100 hover:border-zinc-900 hover:text-zinc-900'}`}
             >
               Todos
             </Link>
             {categories.map(c => (
               <Link 
                 key={c.id}
                 to={`/shop?category=${c.slug}`} 
                 className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border ${cat === c.slug ? 'bg-zinc-900 text-white border-zinc-900 shadow-2xl shadow-zinc-900/20' : 'bg-white text-zinc-400 border-zinc-100 hover:border-zinc-900 hover:text-zinc-900'}`}
               >
                 {c.name}
               </Link>
             ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-60 text-center bg-zinc-50 rounded-[64px] border border-zinc-100 border-dashed">
            <Search size={64} className="mx-auto text-zinc-100 mb-8" strokeWidth={1} />
            <h3 className="text-3xl font-black text-zinc-900 tracking-tight">Sin coincidencias.</h3>
            <p className="mt-4 text-zinc-400 font-medium text-lg">Intenta con otros términos o categorías.</p>
            <Link to="/shop" className="mt-12 inline-block px-12 py-5 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl">Ver todo el catálogo</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filtered.map((p, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                key={p.id}
              >
                <ProductCard key={p.id} product={p} onAddToCart={() => onAddToCart(p)} />
              </motion.div>
            ))}
          </div>
        )}
      </SectionContainer>
    </main>
  );
};

const ProductDetails = ({ onAddToCart }: any) => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedQty, setSelectedQty] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <div className="pt-48 text-center text-zinc-400 font-black uppercase tracking-widest">Hardware no encontrado.</div>;

  return (
    <main className="pt-48 pb-20 bg-white">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-zinc-50 rounded-[64px] -z-10" />
            <SafeImage src={product.images[0]} alt={product.name} className="w-full aspect-[4/5] object-cover rounded-[64px] shadow-[0_64px_100px_-12px_rgba(0,0,0,0.1)] transition-transform duration-1000 hover:scale-[1.01]" />
            <div className="absolute top-12 left-12">
               {product.badge && (
                 <span className="px-6 py-2 bg-white/90 backdrop-blur-2xl shadow-2xl rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 border border-white/20">
                   {product.badge}
                 </span>
               )}
            </div>
          </div>

          <div className="flex flex-col pt-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.4em] font-mono">{product.category}</span>
              <div className="h-1 w-1 bg-zinc-200 rounded-full" />
              <div className="flex items-center gap-1.5 px-4 py-1.5 bg-zinc-50 rounded-xl border border-zinc-100">
                <Star size={12} fill="#fbbf24" stroke="none" />
                <span className="text-[11px] font-black text-zinc-900">{product.rating}</span>
                <span className="text-[11px] font-bold text-zinc-300 ml-1">/ {product.reviews}</span>
              </div>
            </div>

            <h1 className="font-display text-6xl md:text-7xl font-black text-zinc-900 tracking-tighter leading-[0.85] mb-12">{product.name}</h1>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed mb-16 max-w-xl">{product.description}</p>

            <div className="flex items-center gap-8 mb-16">
               <div className="flex flex-col">
                  {product.originalPrice && (
                    <span className="text-xs text-zinc-300 line-through font-mono font-bold mb-1">${product.originalPrice.toLocaleString()}</span>
                  )}
                  <span className="text-6xl font-mono font-black text-zinc-900 tracking-tighter leading-none">${product.price.toLocaleString()}</span>
               </div>
               <div className="px-5 py-2 bg-zinc-900 text-white rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] shadow-xl">
                 Envío Prioritario
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-20">
               <div className="flex items-center bg-zinc-50 rounded-[28px] p-2 border border-zinc-100 h-20">
                  <button onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))} className="w-16 h-16 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-zinc-900/5 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-all">
                    <Minus size={24} />
                  </button>
                  <span className="w-20 text-center font-mono font-black text-2xl">{selectedQty}</span>
                  <button onClick={() => setSelectedQty(selectedQty + 1)} className="w-16 h-16 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-zinc-900/5 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-all">
                    <Plus size={24} />
                  </button>
               </div>
               <motion.button 
                 whileHover={{ y: -4, scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 onClick={() => {
                   for(let i=0; i<selectedQty; i++) onAddToCart(product);
                 }}
                 className="flex-1 h-20 bg-zinc-900 text-white rounded-[28px] font-black uppercase tracking-[0.3em] text-[13px] shadow-[0_40px_80px_-12px_rgba(0,0,0,0.3)] hover:bg-black transition-all flex items-center justify-center gap-4"
               >
                 <ShoppingCart size={22} strokeWidth={2.5} /> Añadir al Protocolo
               </motion.button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-zinc-100">
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 shadow-sm border border-zinc-100"><Truck size={24} strokeWidth={1.5} /></div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Entrega rápida</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">Logística optimizada para entrega en 48h.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 shadow-sm border border-zinc-100"><ShieldCheck size={24} strokeWidth={1.5} /></div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900">PeriphCare+</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">Cobertura total contra fallas técnicas.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 shadow-sm border border-zinc-100"><RefreshCcw size={24} strokeWidth={1.5} /></div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Devolución</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">Retorno garantizado en 30 días.</p>
               </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

const Cart = ({ cart, onRemove, onUpdateQty }: any) => {
  const subtotal = cart.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
  
  return (
    <main className="pt-48 pb-20 min-h-screen bg-zinc-50/50">
      <SectionContainer>
        <div className="grid lg:grid-cols-[1fr_480px] gap-24 items-start">
          <div>
            <div className="flex flex-col items-start mb-20">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-4 block font-mono">Carrito de Selección</span>
              <h1 className="font-display text-7xl font-black text-zinc-900 tracking-tighter mb-4">Tu Orden.</h1>
              <p className="text-zinc-400 text-lg font-medium">Equipamiento configurado listo para despliegue.</p>
            </div>
            
            {cart.length === 0 ? (
              <div className="bg-white rounded-[64px] p-32 text-center shadow-[0_48px_80px_-12px_rgba(0,0,0,0.05)] border border-zinc-100">
                <div className="w-32 h-32 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-10 text-zinc-100">
                  <ShoppingCart size={64} strokeWidth={1} />
                </div>
                <p className="text-2xl text-zinc-900 font-black tracking-tight mb-12">Tu selección está vacía.</p>
                <Link to="/shop" className="bg-zinc-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all">Explorar Hardware</Link>
              </div>
            ) : (
              <div className="space-y-8">
                {cart.map((item: any, i: number) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={`${item.id}-${i}`} 
                    className="bg-white rounded-[48px] p-10 border border-zinc-100 flex flex-col sm:flex-row gap-12 items-center shadow-sm hover:shadow-xl hover:shadow-zinc-900/5 transition-all duration-700 group"
                  >
                    <div className="relative">
                      <SafeImage src={item.images[0]} alt={item.name} className="w-40 h-40 rounded-[32px] object-cover bg-zinc-50 group-hover:scale-105 transition-transform duration-700" />
                      <button 
                        onClick={() => onRemove(i)} 
                        className="absolute -top-4 -right-4 w-10 h-10 bg-white text-zinc-200 hover:text-rose-500 rounded-full shadow-2xl border border-zinc-100 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      >
                        <X size={18} strokeWidth={2.5} />
                      </button>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="mb-2">
                        <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest font-mono">{item.category}</p>
                      </div>
                      <h3 className="font-display text-2xl font-black text-zinc-900 tracking-tight leading-tight mb-8 group-hover:text-emerald-600 transition-colors">{item.name}</h3>
                      
                      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 pt-8 border-t border-zinc-50">
                        <div className="flex items-center bg-zinc-50 rounded-2xl p-1.5 border border-zinc-100">
                          <button onClick={() => onUpdateQty(i, -1)} className="w-10 h-10 rounded-xl hover:bg-white hover:shadow-sm flex items-center justify-center text-zinc-300 hover:text-zinc-900 transition-all">
                            <Minus size={16} />
                          </button>
                          <span className="w-12 text-center font-mono font-black text-lg">{item.quantity}</span>
                          <button onClick={() => onUpdateQty(i, 1)} className="w-10 h-10 rounded-xl hover:bg-white hover:shadow-sm flex items-center justify-center text-zinc-300 hover:text-zinc-900 transition-all">
                            <Plus size={16} />
                          </button>
                        </div>
                        <p className="text-3xl font-mono font-black text-zinc-900 tracking-tighter">${(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <aside className="sticky top-40">
            <div className="bg-zinc-900 text-white rounded-[64px] p-16 shadow-[0_64px_120px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-12 translate-x-12" />
              <h2 className="text-3xl font-black text-white mb-12 tracking-tight flex items-center gap-4">
                 Resumen <span className="h-px flex-1 bg-white/10" />
              </h2>
              <div className="space-y-6 mb-12 pb-12 border-b border-white/10">
                <div className="flex justify-between text-zinc-400 font-medium">
                  <span className="text-[10px] font-black uppercase tracking-widest">Subtotal</span>
                  <span className="font-mono text-white font-bold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-400 font-medium">
                  <span className="text-[10px] font-black uppercase tracking-widest">Logística</span>
                  <span className="text-emerald-400 font-black uppercase text-[10px] tracking-[0.2em] font-mono">Gratis</span>
                </div>
                <div className="flex justify-between text-zinc-400 font-medium">
                  <span className="text-[10px] font-black uppercase tracking-widest">Impuestos (16%)</span>
                  <span className="font-mono text-white font-bold text-sm">${Math.round(subtotal * 0.16).toLocaleString()}</span>
                </div>
              </div>
              <div className="flex justify-between items-end mb-16">
                <span className="font-black text-zinc-500 text-[10px] uppercase tracking-[0.4em] mb-4 block">Total de Orden</span>
                <span className="text-5xl font-mono font-black text-white tracking-tighter leading-none">${(subtotal + Math.round(subtotal * 0.16)).toLocaleString()}</span>
              </div>
              <Link to="/checkout" className="block w-full bg-white text-zinc-950 text-center py-8 rounded-3xl font-black uppercase tracking-[0.3em] text-[13px] shadow-2xl hover:scale-[1.02] hover:bg-zinc-100 transition-all active:scale-95">
                FINALIZAR PEDIDO
              </Link>
              
              <div className="mt-12 flex items-center justify-center gap-3 text-zinc-500">
                <Lock size={14} className="text-emerald-500" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Cifrado de grado militar activo</span>
              </div>
            </div>
          </aside>
        </div>
      </SectionContainer>
    </main>
  );
};

// --- FAKE PAYMENT GATEWAY (Scale Ready) ---

const Checkout = ({ cart, onClear }: any) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [installments, setInstallments] = useState(1);
  const subtotal = cart.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
  const total = subtotal + Math.round(subtotal * 0.16);

  const handlePay = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      onClear();
    }, 3000);
  };

  if (success) {
    return (
      <main className="pt-60 pb-20 flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-32 h-32 bg-emerald-50 rounded-[48px] flex items-center justify-center mb-12 shadow-2xl shadow-emerald-500/10"
        >
          <CheckCircle2 size={64} className="text-emerald-500" />
        </motion.div>
        <h1 className="font-display text-7xl font-black text-zinc-900 tracking-tighter mb-6 leading-tight">Protocolo <br /> Completado.</h1>
        <p className="text-zinc-400 font-medium text-xl mb-16 max-w-md mx-auto">Tu pedido #PC-2026-{(Math.random() * 10000).toFixed(0)} ha sido verificado. El hardware está en camino.</p>
        <Link to="/" className="bg-zinc-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all">Regresar al Inicio</Link>
      </main>
    );
  }

  if (cart.length === 0) {
    return <main className="pt-60 text-center"><Link to="/shop" className="bg-zinc-900 text-white px-12 py-5 rounded-2xl font-black">Ir al Catálogo</Link></main>;
  }

  return (
    <main className="pt-48 pb-20 min-h-screen bg-zinc-50/50">
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-4 block font-mono">Secure Gateway</span>
            <h1 className="font-display text-7xl font-black text-zinc-900 tracking-tighter">Finalizar Orden.</h1>
          </div>
          
          <div className="bg-white rounded-[64px] p-16 md:p-24 shadow-[0_64px_120px_-12px_rgba(0,0,0,0.08)] border border-zinc-100 overflow-hidden relative">
            <AnimatePresence>
              {loading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/90 backdrop-blur-xl z-50 flex flex-col items-center justify-center"
                >
                   <div className="w-20 h-20 border-[3px] border-zinc-100 border-t-zinc-900 rounded-full animate-spin mb-10" />
                   <p className="font-black text-zinc-900 uppercase tracking-[0.4em] text-[10px] animate-pulse">Verificando Credenciales Bancarias...</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-3 mb-20 px-8 py-3 bg-zinc-900 text-white rounded-2xl w-max mx-auto shadow-2xl">
              <Lock size={16} className="text-emerald-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Cifrado de Grado Militar Activado</span>
            </div>

            <form onSubmit={handlePay} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] ml-1 font-mono">Titular del Hardware</label>
                  <input required placeholder="NOMBRE COMPLETO" className="w-full px-8 py-6 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:bg-white transition-all font-black uppercase tracking-widest text-[13px] placeholder:text-zinc-200" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] ml-1 font-mono">Número de Tarjeta</label>
                  <div className="relative group">
                    <CreditCard size={20} className="absolute left-8 top-1/2 -translate-y-1/2 text-zinc-200 group-focus-within:text-zinc-900 transition-colors" />
                    <input required placeholder="0000 0000 0000 0000" className="w-full pl-20 pr-8 py-6 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:bg-white transition-all font-mono text-sm font-black" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="space-y-4 col-span-1">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] ml-1 font-mono">Expira</label>
                  <input required placeholder="MM/AA" className="w-full px-4 py-6 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:bg-white transition-all text-center font-mono font-black text-sm" />
                </div>
                <div className="space-y-4 col-span-1">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] ml-1 font-mono">CVV</label>
                  <input required placeholder="000" className="w-full px-4 py-6 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:bg-white transition-all text-center font-mono font-black text-sm" />
                </div>
                <div className="space-y-4 col-span-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] ml-1 font-mono">Plan de Parcelas</label>
                  <select 
                    value={installments}
                    onChange={(e) => setInstallments(Number(e.target.value))}
                    className="w-full px-8 py-6 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-zinc-900/5 transition-all font-black text-[13px]"
                  >
                    <option value="1">Liquidación Total — ${total.toLocaleString()}</option>
                    <option value="3">3 pagos de ${(total / 3).toFixed(2)} (Sin Interés)</option>
                    <option value="6">6 pagos de ${(total / 6).toFixed(2)}</option>
                  </select>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-3xl p-10 border border-zinc-100 space-y-6">
                 <div className="flex justify-between items-center text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">
                   <span>Total Final</span>
                   <span className="text-zinc-900 font-mono text-2xl font-black">${total.toLocaleString()} MXN</span>
                 </div>
                 {installments > 1 && (
                   <div className="flex justify-between items-center text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em] pt-6 border-t border-zinc-200">
                     <span>Cuota Mensual</span>
                     <span>${(total / installments).toFixed(2)} MXN</span>
                   </div>
                 )}
              </div>

              <motion.button 
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit" 
                className="w-full bg-zinc-900 text-white py-8 rounded-3xl text-[13px] font-black uppercase tracking-[0.4em] shadow-[0_40px_80px_-12px_rgba(0,0,0,0.3)] hover:bg-black transition-all"
              >
                Autorizar Transacción Segura
              </motion.button>
              
              <div className="flex justify-center gap-12 pt-8 grayscale opacity-20">
                {['visa', 'mastercard', 'amex'].map(brand => (
                  <div key={brand} className="flex flex-col items-center gap-2">
                    <div className="w-14 h-9 bg-zinc-900 rounded-lg" />
                    <span className="text-[8px] font-black tracking-widest uppercase">{brand}</span>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

// --- Main App Logic ---

const SearchOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
      onClose();
      setQuery('');
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] bg-white/98 backdrop-blur-3xl flex flex-col items-center justify-center p-8"
    >
      <motion.button 
        whileHover={{ rotate: 90, scale: 1.1 }}
        onClick={onClose} 
        className="absolute top-12 right-12 p-6 text-zinc-400 hover:text-zinc-900 transition-all"
      >
        <X size={56} strokeWidth={1} />
      </motion.button>
      
      <div className="w-full max-w-6xl">
        <form onSubmit={handleSearch} className="relative">
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar hardware..."
            className="w-full bg-transparent border-b-[12px] border-zinc-50 py-16 text-6xl md:text-[140px] font-display font-black text-zinc-900 placeholder-zinc-50 focus:outline-none focus:border-zinc-900 transition-all tracking-tight leading-none"
          />
          <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 p-8 text-zinc-100 hover:text-zinc-900 transition-colors">
            <ArrowRight size={120} strokeWidth={3} />
          </button>
        </form>
        <div className="mt-24 flex flex-wrap justify-center gap-6">
          {['MX Master 3S', 'G915 TKL', 'Gaming', 'Webcams', 'Streaming'].map((item, i) => (
            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item} 
              onClick={() => setQuery(item)} 
              className="px-12 py-5 bg-zinc-50 hover:bg-zinc-900 hover:text-white rounded-2xl text-[13px] font-black text-zinc-400 transition-all border border-zinc-100 uppercase tracking-widest font-mono"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, delta: number) => {
    setCart(prev => {
      const newCart = [...prev];
      const newQty = newCart[index].quantity + delta;
      if (newQty > 0) {
        newCart[index] = { ...newCart[index], quantity: newQty };
      }
      return newCart;
    });
  };

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="antialiased min-h-screen flex flex-col bg-white selection:bg-zinc-900 selection:text-white">
        <Navbar onSearchOpen={() => setIsSearchOpen(true)} cartCount={cartTotalItems} />
        <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
            <Route path="/product/:slug" element={<ProductDetails onAddToCart={addToCart} />} />
            <Route path="/compromiso" element={<Sustainability />} />
            <Route path="/cart" element={<Cart cart={cart} onRemove={removeFromCart} onUpdateQty={updateQuantity} />} />
            <Route path="/checkout" element={<Checkout cart={cart} onClear={() => setCart([])} />} />
            <Route path="*" element={<Home onAddToCart={addToCart} />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}
