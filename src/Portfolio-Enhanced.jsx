import React, { useState, useEffect, useRef } from 'react';

import {
  Menu, X, Linkedin, Phone, LineChart,
  GraduationCap, Code, ArrowUp, ChevronLeft, ChevronRight
} from 'lucide-react';

import { SiTiktok } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

// Import SocialCircle component
import SocialCircle from '../src/components/SocialCircle.jsx';

// --- Global Protection Styles ---
const protectionStyles = {
  userSelect: 'none',
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
};

// --- Watermark Sub-component ---
const RenderName = () => (
  <span
    className="text-[14px] md:text-[22px] font-semibold text-white/40 tracking-[0.3em] uppercase leading-none select-none pointer-events-none"
    style={{ textShadow: '0 0 2px rgba(0,0,0,0.4)' }}
  >
    Rashid
  </span>
);

// --- Watermark Component ---
const WatermarkWrapper = ({ children }) => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      {children}

      <div className="absolute inset-0 pointer-events-none select-none opacity-50">
        <div
          className="absolute inset-[-50%] md:inset-[-50%]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                -45deg,
                rgba(255,255,255,0.08) 0px,
                rgba(255,255,255,0.08) 120px,
                transparent 120px,
                transparent 240px
              )
            `,
          }}
        />

        <div className="absolute inset-[-30%] md:inset-[-50%] rotate-[-45deg] flex flex-wrap gap-[60px] md:gap-[120px]">
          {Array.from({ length: 20 }).map((_, i) => (
            <RenderName key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- UI Components ---
const Button = ({ children, className, ...props }) => (
  <button className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out ${className}`} {...props}>
    {children}
  </button>
);

// --- Personal Info ---
const personalInfo = {
  name: "Abdullah Rashid",
  title: "Senior Media Buyer | Shopify Developer | Google Certificated Digital Marketer & E-commerce expert",
  linkedin: "https://www.linkedin.com/in/abdullah-rash-id/",
  whatsapp: "http://wa.me/+201025030220",
  tiktok: "https://www.tiktok.com/",
  profileImage: "https://i.postimg.cc/DwGWP6Y3/lkjhljkh.jpg",
};

const sections = [
  { id: "skills", title: "Skills" },
  { id: "results", title: "Results" },
  { id: "brands", title: "Brands" },
];

const skillsData = [
  "Analytical Mindset",
  "Problem-Solver",
  "E-commerce Expert",
  "Master, Optimize & Scale",
  "Strong interpersonal skills",
  "All Social Platforms Ads",
  "Content Strategys",
  "Business & Pricing Strategys",
  "Financial & Data Analyst",
  "Data-Driven Decision Making",
  "Shopify Developer",
  "Websites CRO"
];

// --- Brands Logos Data ---
const brandLogos = [
  { name: "Trillion Club", url: "https://trillionclubsa.com/", img: null },
  { name: "Fluency", url: "https://fluency.live/", img: null },
  { name: "Icona", url: "https://icona.ae/", img: "image_101d69.png" },
  { name: "Reborn", url: "https://rebornegypt.com/", img: "image_101d8b.png" },
  { name: "Torinese", url: "https://www.instagram.com/torinese.eg/", img: "image_41fca4.png" },
  { name: "Roots", url: "https://www.instagram.com/roots_hairrepair/", img: "image_42036f.png" },
  { name: "Viola", url: "https://www.instagram.com/getviola/", img: "image_4203aa.png" },
  { name: "Naturel", url: "https://www.instagram.com/___naturel___/", img: "image_4203ca.png" },
  { name: "The Rx Hair", url: "https://www.instagram.com/therxhair/", img: "image_420085.png" },
  { name: "Robust", url: "https://www.facebook.com/robustsportswear/", img: "image_420404.png" }
];

// --- Section Wrapper ---
const SectionWrapper = React.forwardRef(({ id, title, children, className }, ref) => (
  <motion.section
    ref={ref}
    id={id}
    className={`py-20 md:py-28 ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-sky-400">{title}</span>
    </h2>
    {children}
  </motion.section>
));

// --- Navbar ---
const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-950/70 backdrop-blur-lg z-50 border-b border-neutral-800/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <a href="#home" className="text-2xl font-bold tracking-tight text-white hover:text-teal-400 transition-colors">{personalInfo.name}</a>
        <div className="hidden md:flex gap-8 items-center">
          {sections.map((sec) => (
            <a key={sec.id} href={`#${sec.id}`} className={`font-medium transition-colors ${activeSection === sec.id ? 'text-teal-400' : 'text-neutral-300 hover:text-teal-400'}`}>
              {sec.title}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-transparent text-white p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-neutral-900">
            <div className="flex flex-col items-center gap-4 py-4">
              {sections.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`} onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium transition-colors ${activeSection === sec.id ? 'text-teal-400' : 'text-neutral-300 hover:text-teal-400'}`}>
                  {sec.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Gallery Modal ---
const GalleryModal = ({ images = [], startIndex = 0, onClose }) => {
  const [index, setIndex] = useState(startIndex);
  const containerRef = useRef(null);

  useEffect(() => { setIndex(startIndex); }, [startIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIndex(i => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + images.length) % images.length);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, onClose]);

  if (!images.length) return null;

  return (
    <motion.div className="fixed inset-0 bg-black/95 flex justify-center items-center z-[100] p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="relative w-full flex items-center justify-center max-w-7xl" initial={{ scale: 0.95 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()} ref={containerRef}>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-3 right-3 z-50 bg-black/60 hover:bg-black/70 p-2 rounded-md text-white"
        >
          <X />
        </button>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setIndex(i => (i - 1 + images.length) % images.length); }}
          className="hidden md:flex absolute left-3 z-50 items-center justify-center h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white"
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setIndex(i => (i + 1) % images.length); }}
          className="hidden md:flex absolute right-3 z-50 items-center justify-center h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white"
        >
          <ChevronRight />
        </button>

        <div className="max-w-full max-h-[90vh] flex items-center justify-center rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 p-2 md:p-4">
          <WatermarkWrapper>
            <img src={images[index]} alt={`zoom-${index}`} className="object-contain max-h-[85vh] w-full h-full" draggable={false} style={protectionStyles} />
          </WatermarkWrapper>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-50 flex gap-2">
          {images.map((_, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setIndex(i); }} className={`h-2 w-8 rounded-full transition-colors ${i === index ? 'bg-teal-400' : 'bg-white/30'}`} type="button" />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- CERTIFICATIONS SECTION ---
const CERT_IMAGES = [
  'https://i.postimg.cc/rsxncdPk/65952225.jpg',
  'https://i.postimg.cc/B6dYd5MJ/6NXTTFXQ7B77-page-0001.jpg',
  'https://i.postimg.cc/Znp7Z9Mt/7WWC9OROA2E2-page-0001.jpg',
  'https://i.postimg.cc/0jDWx6Bv/CINQDM1IJMQR-page-0001.jpg',
  'https://i.postimg.cc/WzgWjDH4/CJB4ROD8WKVL-page-0001.jpg',
  'https://i.postimg.cc/9Mv8vP1d/3ZWC24LXWG87_page_0001.jpg',
  'https://i.postimg.cc/BZKw2ynt/Google-Certification.png',
];

const ImageSlider = ({ images = CERT_IMAGES, speed = 60 }) => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomSrc, setZoomSrc] = useState(null);
  const duplicated = [...images, ...images];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let lastTime = 0;
    let rafId;
    const step = (ts) => {
      if (!lastTime) lastTime = ts;
      const dt = (ts - lastTime) / 1000;
      lastTime = ts;
      if (!isPaused) {
        el.scrollLeft += speed * dt;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed, isPaused]);

  return (
    <div className="w-full py-12">
      <div className="max-w-5xl mx-auto overflow-hidden">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-amber-400">Google Certifications</h3>
        <div 
          ref={containerRef}
          className="flex overflow-x-hidden gap-4 py-4 no-scrollbar"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicated.map((src, i) => (
            <motion.div 
              key={i} 
              className="flex-shrink-0 w-48 h-32 md:w-64 md:h-40 bg-neutral-800 rounded-xl overflow-hidden cursor-pointer border border-neutral-700"
              whileHover={{ scale: 1.05 }}
              onClick={() => setZoomSrc({ start: images.indexOf(src) })}
            >
              <img src={src} className="w-full h-full object-cover" alt="Cert" draggable={false} style={protectionStyles} />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {zoomSrc && <GalleryModal images={images} startIndex={zoomSrc.start} onClose={() => setZoomSrc(null)} />}
      </AnimatePresence>
    </div>
  );
};

// --- RESULTS DATA FOR BOTH ROWS ---
const reelsCasesImages = [
  "https://i.postimg.cc/L5t3RNPm/1.png", 
  "https://i.postimg.cc/D0rPFBGm/5.png", 
  "https://i.postimg.cc/mkfy00Pg/Untitled-design-(1).png", 
  "https://i.postimg.cc/cCRBZX34/2.png", 
  "https://i.postimg.cc/7h3nDmzH/4.png"
];

// --- LANDSCAPE BANNER ITEMS WITH CUSTOM TITLES ---
const landscapeBannerItems = [
  {
    src: "https://i.postimg.cc/C5GsYm88/11.png",
    title: "Last 7 days Average 🔥"
  },
  {
    src: "https://i.postimg.cc/wMXQH0N1/8.png",
    title: "Hits harder than I love you"
  },
  {
    src: "https://i.postimg.cc/qqsx0jK6/10.png",
    title: "From 80K ad spend & 260K Purchase to 60K & 525K in no-time"
  },
  {
    src: "https://i.postimg.cc/Gp9FRGX5/1.png",
    title: "$$$ Traget Roas=4"
  },
  {
    src: "https://i.postimg.cc/N0L6tmdZ/2.png",
    title: "From 0 to hero Startup Brand BEP Roas 2.5"
  },
  {
    src: "https://i.postimg.cc/1z4GSwvL/3.png",
    title: "Sustained Growth & High Return on Ad Spend"
  }
];

// --- AUTO SCROLL HOOK ---
function useAutoScrollResults(containerRef, { speed = 80, reverse = false, isPaused = false }) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let lastTime = 0;
    let rafId;
    const step = (ts) => {
      if (!lastTime) lastTime = ts;
      const dt = (ts - lastTime) / 1000;
      lastTime = ts;
      if (!isPaused) {
        const move = speed * dt;
        if (reverse) {
          el.scrollLeft -= move;
          if (el.scrollLeft <= 0) el.scrollLeft = el.scrollWidth / 2;
        } else {
          el.scrollLeft += move;
          if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed, reverse, isPaused]);
}

// --- ROW 1: REELS STYLE BANNER STRIP ---
const ReelsBannerStrip = ({ images, reverse = false, onImageClick }) => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const duplicated = [...images, ...images];
  useAutoScrollResults(containerRef, { speed: 80, reverse, isPaused });

  return (
    <div 
      ref={containerRef}
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-auto no-scrollbar flex touch-pan-x select-none py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="flex items-center">
        {duplicated.map((src, i) => (
          <div key={i} className="w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] flex-shrink-0 px-3 md:px-4 flex flex-col items-center">
            <motion.div 
              className="w-full aspect-[9/16] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
              onClick={() => onImageClick(src)}
            >
              <WatermarkWrapper>
                <img 
                  src={src} 
                  alt="Result Case" 
                  className="w-full h-full object-cover object-top" 
                  draggable={false} 
                  style={protectionStyles} 
                />
              </WatermarkWrapper>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- ROW 2: WIDE LANDSCAPE BANNER STRIP WITH HEADINGS ABOVE EACH BANNER ---
const LandscapeBannerStrip = ({ items, reverse = true, onImageClick }) => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimerRef = useRef(null);
  const holdResumeRef = useRef(null);

  const duplicated = [...items, ...items];
  useAutoScrollResults(containerRef, { speed: 90, reverse, isPaused });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let directionDetermined = false;
    let isHorizontal = false;
    let isDragging = false;
    let hasCapture = false;

    const clearResumeTimer = () => {
      if (resumeTimerRef.current) { clearTimeout(resumeTimerRef.current); resumeTimerRef.current = null; }
      if (holdResumeRef.current) { clearTimeout(holdResumeRef.current); holdResumeRef.current = null; }
    };

    const startResumeTimer = (ms = 3000) => {
      clearResumeTimer();
      resumeTimerRef.current = setTimeout(() => {
        setIsPaused(false);
        resumeTimerRef.current = null;
      }, ms);
    };

    const onPointerDown = (e) => {
      if (e.target.closest && e.target.closest('button')) return;
      if (pointerId !== null) return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      lastX = startX;
      directionDetermined = false;
      isHorizontal = false;
      isDragging = true;
      setIsPaused(true);
      clearResumeTimer();
      holdResumeRef.current = setTimeout(() => { setIsPaused(false); holdResumeRef.current = null; }, 3000);
      try { el.setPointerCapture(pointerId); hasCapture = true; } catch(err) { hasCapture = false; }
    };

    const onPointerMove = (e) => {
      if (!isDragging || e.pointerId !== pointerId) return;
      const dxTotal = e.clientX - startX;
      const dyTotal = e.clientY - startY;
      const dx = e.clientX - lastX;

      if (!directionDetermined) {
        if (Math.abs(dxTotal) > 6 || Math.abs(dyTotal) > 6) {
          directionDetermined = true;
          isHorizontal = Math.abs(dxTotal) > Math.abs(dyTotal);
        } else {
          return;
        }
      }

      if (isHorizontal) {
        e.preventDefault();
        el.scrollLeft -= dx;
        lastX = e.clientX;
      } else {
        if (hasCapture) { try { el.releasePointerCapture(pointerId); } catch(err){} hasCapture = false; }
        isDragging = false;
        pointerId = null;
      }
    };

    const onPointerUp = (e) => {
      if (pointerId !== e.pointerId && pointerId !== null) return;
      const totalDx = e.clientX - startX;
      const totalDy = e.clientY - startY;
      const isTap = Math.abs(totalDx) < 10 && Math.abs(totalDy) < 10;

      if (isTap) {
        const elAt = document.elementFromPoint(e.clientX, e.clientY);
        const card = elAt ? elAt.closest('[data-result-src]') : null;
        if (card) {
          const src = card.getAttribute('data-result-src');
          if (src) {
            setIsPaused(true);
            clearResumeTimer();
            onImageClick(src);
          }
        }
      }

      startResumeTimer(3000);

      if (pointerId !== null && hasCapture) { try { el.releasePointerCapture(pointerId); } catch(err){} hasCapture = false; }
      pointerId = null;
      isDragging = false;
      directionDetermined = false;
      isHorizontal = false;
    };

    const onMouseEnter = () => { setIsPaused(true); clearResumeTimer(); };
    const onMouseLeave = () => { startResumeTimer(3000); };

    el.addEventListener('pointerdown', onPointerDown, { passive: true });
    el.addEventListener('pointermove', onPointerMove, { passive: false });
    el.addEventListener('pointerup', onPointerUp, { passive: true });
    el.addEventListener('pointercancel', onPointerUp, { passive: true });
    el.addEventListener('lostpointercapture', onPointerUp, { passive: true });
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      clearResumeTimer();
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('lostpointercapture', onPointerUp);
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
    };

  }, [onImageClick]);

  const handleImageClick = (src) => {
    setIsPaused(true);
    if (resumeTimerRef.current) { clearTimeout(resumeTimerRef.current); resumeTimerRef.current = null; }
    onImageClick(src);
  };

  return (
    <div 
      ref={containerRef}
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-auto no-scrollbar flex touch-pan-x select-none py-4"
      style={{ scrollbarWidth: 'none', touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}
    >
      <div className="flex">
        {duplicated.map((item, i) => (
          <div key={i} className="w-screen md:w-[60vw] lg:w-[40vw] flex-shrink-0 px-2 md:px-4 flex flex-col items-center">
            {item.title && (
              <h4 className="text-teal-400 font-bold text-sm md:text-base mb-2 text-center tracking-wide px-2">
                {item.title}
              </h4>
            )}
            <motion.div 
              data-result-src={item.src}
              className="w-full h-[220px] md:h-[350px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleImageClick(item.src)}
            >
              <WatermarkWrapper>
                <img 
                  src={item.src} 
                  alt={item.title || "Result Landscape"} 
                  className="w-full h-full object-cover object-top" 
                  draggable={false} 
                  style={protectionStyles}
                />
              </WatermarkWrapper>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- ROW 3: NEW BRANDS LOGOS STRIP (Clients Section) ---
const BrandsBannerStrip = ({ items, speed = 45 }) => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicating the array multiple times to ensure seamless infinite scrolling
  const duplicated = [...items, ...items, ...items, ...items, ...items]; 

  useAutoScrollResults(containerRef, { speed, reverse: false, isPaused });

  return (
    <div
      ref={containerRef}
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden flex items-center py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex gap-4 md:gap-8 px-4">
        {duplicated.map((brand, i) => (
          <a
            key={i}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-36 h-20 md:w-52 md:h-28 bg-neutral-900/60 border border-neutral-800 rounded-2xl flex items-center justify-center p-4 hover:border-teal-400/50 hover:bg-neutral-800/90 transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] relative overflow-hidden"
          >
            {brand.img ? (
              <img
                src={brand.img}
                alt={brand.name}
                className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                draggable={false}
              />
            ) : (
              <span className="text-sm md:text-lg font-bold text-neutral-500 group-hover:text-teal-400 transition-colors uppercase tracking-widest text-center">
                {brand.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

// --- MULTI STRIP BANNERS (2 ROWS IN ONE SECTION) ---
const MultiStripBanners = () => {
  const [zoomSrc, setZoomSrc] = useState(null);

  const landscapeUrls = landscapeBannerItems.map(item => item.src);
  const allImages = [...reelsCasesImages, ...landscapeUrls];

  const onOpenFromStrip = (src) => {
    const idx = allImages.indexOf(src);
    setZoomSrc({ start: idx !== -1 ? idx : 0 });
  };

  return (
    <div className="space-y-6 md:space-y-12">
      {/* ROW 1: Reels Style Format */}
      <div>
        <ReelsBannerStrip images={reelsCasesImages} reverse={false} onImageClick={onOpenFromStrip} />
      </div>

      {/* ROW 2: Wide Landscape Format with Titles directly above banners */}
      <div>
        <LandscapeBannerStrip items={landscapeBannerItems} reverse={true} onImageClick={onOpenFromStrip} />
      </div>

      {/* Shared Lightbox / Gallery Modal */}
      <AnimatePresence>
        {zoomSrc && (
          <GalleryModal 
            images={allImages} 
            startIndex={zoomSrc.start} 
            onClose={() => setZoomSrc(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Portfolio ---
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = { 
    home: useRef(null), 
    skills: useRef(null), 
    results: useRef(null),
    brands: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );
    Object.values(sectionRefs).forEach(ref => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="bg-neutral-950 text-white min-h-screen font-sans antialiased relative overflow-x-hidden"
      onContextMenu={(e) => e.preventDefault()} 
      style={protectionStyles}
    >
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_100%)] opacity-60"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
              radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
              radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))
            `,
            backgroundSize: '200px 200px'
          }}
        ></div>
      </div>

      <Navbar activeSection={activeSection} />

      <main className="relative z-10 max-w-5xl mx-auto px-4 pb-24">
        {/* Hero */}
        <section ref={sectionRefs.home} id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 blur-[120px] rounded-full -z-10" />

          <motion.img 
            src={personalInfo.profileImage} 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="w-32 h-32 rounded-full object-cover border-4 border-neutral-700 mb-6 shadow-[0_0_20px_rgba(20,184,166,0.3)]" 
            draggable="false"
          />
          <motion.h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            Abdullah Rashid<br /> Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Growth</span> Partner.
          </motion.h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-8">{personalInfo.title}</p>
        </section>

        <SocialCircle />
        <ImageSlider />

        {/* Skills Section */}
        <SectionWrapper ref={sectionRefs.skills} id="skills" title="Skills">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skillsData.map((skill, i) => (
              <motion.div 
                key={i} 
                className="bg-neutral-800/60 backdrop-blur-md text-neutral-200 px-5 py-2.5 rounded-full text-sm font-medium border border-neutral-700 hover:border-teal-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Results Section */}
        <SectionWrapper ref={sectionRefs.results} id="results" title="Results">
          <MultiStripBanners />
        </SectionWrapper>

        {/* Brands Section (Clients & Partners) */}
        <SectionWrapper ref={sectionRefs.brands} id="brands" title="Brands We've Scaled" className="pt-0 md:pt-10">
          <BrandsBannerStrip items={brandLogos} />
        </SectionWrapper>

        {/* Yellow Cards Container */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-neutral-900/90 border-2 border-amber-400/80 rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_0_15px_rgba(251,191,36,0.15)] hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all"
          >
            <GraduationCap className="text-amber-400 mb-4" size={38} />
            <p className="text-neutral-200 font-semibold text-base">
              Bachelor of Business Administration from Ain Shams University.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-neutral-900/90 border-2 border-amber-400/80 rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_0_15px_rgba(251,191,36,0.15)] hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all"
          >
            <LineChart className="text-amber-400 mb-4" size={38} />
            <p className="text-neutral-200 font-semibold text-base">
              Financial Analyst with over 4 years of experience in financial markets.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-neutral-900/90 border-2 border-amber-400/80 rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_0_15px_rgba(251,191,36,0.15)] hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all"
          >
            <Code className="text-amber-400 mb-4" size={38} />
            <p className="text-neutral-200 font-semibold text-base">
              Web Developer & E-commerce Solutions.⭐
            </p>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 text-center py-12 border-t border-neutral-800/50 bg-neutral-950/50 backdrop-blur-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href={personalInfo.linkedin}
            className="w-10 h-10 flex items-center justify-center rounded-full text-neutral-500 hover:text-teal-400 hover:bg-neutral-800 transition-all"
          >
            <Linkedin size={20} />
          </a>

          <a
            href={personalInfo.whatsapp}
            className="w-10 h-10 flex items-center justify-center rounded-full text-neutral-500 hover:text-green-500 hover:bg-neutral-800 transition-all"
          >
            <Phone size={20} />
          </a>

          <a
            href={personalInfo.tiktok}
            className="w-10 h-10 flex items-center justify-center rounded-full text-neutral-500 hover:text-pink-500 hover:bg-neutral-800 transition-all"
          >
            <SiTiktok size={18} />
          </a>
        </div>

        <p className="text-neutral-500 text-sm">
          © 2022 - {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
        </p>
      </footer>
      <ScrollToTopButton />
    </div>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 bg-teal-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-teal-400 transition-colors">
      <ArrowUp size={24} />
    </button>
  );
}
