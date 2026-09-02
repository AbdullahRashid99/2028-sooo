// Portfolio-Enhanced.jsx
import React, { useState, useEffect, useRef } from 'react';

import {
  Menu, X, Linkedin, Phone, LineChart,
  GraduationCap, Code, BarChart2,
  ArrowUp, ChevronLeft, ChevronRight
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

const MetricBadge = ({ label, value }) => (
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#031d1d]/90 border border-[#0d5c56] text-teal-400 backdrop-blur-md shadow-lg text-xs md:text-sm font-semibold">
    <div className="w-4 h-4 rounded-full border border-teal-400 flex items-center justify-center text-teal-300 text-[10px] font-bold">
      ✓
    </div>
    <span>
      {label}: <strong className="text-white font-bold ml-1">{value}</strong>
    </span>
  </div>
);

// --- Personal Info ---
const personalInfo = {
  name: "Abdullah Rashid",
  title: "Senior Media Buyer | Shopify Developer | Google Certificated Digital Marketer & E-commerce expert",
  linkedin: "https://www.linkedin.com/in/abdullah-rash-id/",
  whatsapp: "http://wa.me/+201025030220",
  tiktok: "https://www.tiktok.com/",
  profileImage: "https://i.postimg.cc/2574Ss9d/9c10a25ab53cc9bdf0a8fc20082d0868-tplv-tiktokx-cropcenter-1080-1080.jpg",
};

const sections = [
  { id: "skills", title: "Skills" },
  { id: "results", title: "Results" },
  { id: "before-after", title: "Before & After Us" },
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

// --- Cases Data (Before & After Us Section) ---
// تم تعديل هذا القسم لإضافة صورتين لكل Case (صورة قبل وصورة بعد)
const caseStudiesData = [
  {
    id: 1,
    title: "Case 1",
    niche: "Fashion & Apparel",
    note: "Scaled from scratch to high profitable margins in 3 months.",
    imageBefore: "https://i.postimg.cc/C5GsYm88/11.png", // ضع رابط صورة قبل هنا
    imageAfter: "https://i.postimg.cc/C5GsYm88/11.png",  // ضع رابط صورة بعد هنا
    metrics: [
      { label: "Conversion Rate", value: "4.1%" },
      { label: "CPA Reduction", value: "-42%" },
      { label: "ROAS", value: "4.8x" }
    ]
  },
  {
    id: 2,
    title: "Case 2",
    niche: "Beauty & Cosmetics",
    note: "Optimized ad creatives and landing page to boost AOV.",
    imageBefore: "https://i.postimg.cc/wMXQH0N1/8.png",
    imageAfter: "https://i.postimg.cc/wMXQH0N1/8.png",
    metrics: [
      { label: "CPM", value: "$4.20" },
      { label: "Total Sales", value: "$125,000" },
      { label: "ROAS", value: "5.2x" }
    ]
  },
  {
    id: 3,
    title: "Case 3",
    niche: "Electronics",
    note: "Targeted retargeting campaigns resulted in huge drop in CPP.",
    imageBefore: "https://i.postimg.cc/qqsx0jK6/10.png",
    imageAfter: "https://i.postimg.cc/qqsx0jK6/10.png",
    metrics: [
      { label: "CPP", value: "$12.5" },
      { label: "AOV", value: "$85" },
      { label: "Conversion Rate", value: "3.9%" }
    ]
  },
  {
    id: 4,
    title: "Case 4",
    niche: "Home & Garden",
    note: "Restructured the entire Google Ads and Shopify store.",
    imageBefore: "https://i.postimg.cc/L5t3RNPm/1.png",
    imageAfter: "https://i.postimg.cc/L5t3RNPm/1.png",
    metrics: [
      { label: "ROAS", value: "6.1x" },
      { label: "CPA Reduction", value: "-38%" },
      { label: "Total Sales", value: "$240,000" }
    ]
  }
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
          </div>
        ))}
      </div>
      <AnimatePresence>
        {zoomSrc && <GalleryModal images={images} startIndex={zoomSrc.start} onClose={() => setZoomSrc(null)} />}
      </AnimatePresence>
    </div>
  );
};

// --- SINGLE REELS STRIP RESULTS LOGIC ---
const resultsCasesData = [
  { 
    src: "https://i.postimg.cc/L5t3RNPm/1.png", 
    description: "Case 1: Scaled ROAS to 6.1x with $240K Sales" 
  },
  { 
    src: "https://i.postimg.cc/D0rPFBGm/5.png", 
    description: "Case 2: Consistent 300% Growth in E-commerce Revenue" 
  },
  { 
    src: "https://i.postimg.cc/mkfy00Pg/Untitled-design-(1).png", 
    description: "Case 3: Achieved $450K+ Monthly Revenue" 
  },
  { 
    src: "https://i.postimg.cc/cCRBZX34/2.png", 
    description: "Case 4: Dropped CPA by 40% globally in 3 weeks" 
  },
  { 
    src: "https://i.postimg.cc/7h3nDmzH/4.png", 
    description: "Case 5: Dominated the niche market efficiently" 
  }
];

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

const ReelsBannerStrip = ({ items, reverse, onImageClick }) => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const duplicated = [...items, ...items];
  useAutoScrollResults(containerRef, { speed: 80, reverse, isPaused });

  return (
    <div 
      ref={containerRef}
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-auto no-scrollbar flex touch-pan-x select-none py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="flex items-end">
        {duplicated.map((item, i) => (
          <div key={i} className="w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] flex-shrink-0 px-3 md:px-4 flex flex-col items-center">
            
            <p className="text-teal-400 text-sm md:text-base font-semibold mb-3 text-center px-2">
              {item.description}
            </p>

            <motion.div 
              className="w-full aspect-[9/16] rounded-2xl overflow-hidden border border-neutral-800 bg-black cursor-pointer shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
              onClick={() => onImageClick(item.src)}
            >
              <WatermarkWrapper>
                <img 
                  src={item.src} 
                  alt="Result Case" 
                  className="w-full h-full object-contain" 
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

const MultiStripBanners = () => {
  const [zoomSrc, setZoomSrc] = useState(null);
  const imagesList = resultsCasesData.map(item => item.src);

  const onOpenFromStrip = (src) => {
    const idx = imagesList.indexOf(src);
    setZoomSrc({ start: idx !== -1 ? idx : 0 });
  };

  return (
    <div className="space-y-4 md:space-y-8">
      <ReelsBannerStrip items={resultsCasesData} reverse={false} onImageClick={onOpenFromStrip} />
      
      <AnimatePresence>
        {zoomSrc && <GalleryModal images={imagesList} startIndex={zoomSrc.start} onClose={() => setZoomSrc(null)} />}
      </AnimatePresence>
    </div>
  );
};

// --- BEFORE / AFTER SLIDER COMPONENT ---
const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onPointerDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const onPointerUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-neutral-800 bg-neutral-900 shadow-xl touch-none"
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onMouseLeave={onPointerUp}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
    >
      <WatermarkWrapper>
        {/* Base Image (After) */}
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
          style={protectionStyles}
        />

        {/* Overlay Image (Before) */}
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ ...protectionStyles, clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          draggable={false}
        />

        {/* Slider Line & Button */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none z-10"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <ChevronLeft className="text-black w-4 h-4 -mr-0.5" />
            <ChevronRight className="text-black w-4 h-4 -ml-0.5" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium pointer-events-none z-10">
          Before
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium pointer-events-none z-10">
          After
        </div>
      </WatermarkWrapper>
    </div>
  );
};

// --- TABBED CASES COMPONENT (Before & After Us) ---
const InteractiveCasesView = () => {
  const [activeCaseId, setActiveCaseId] = useState(1);
  const activeCase = caseStudiesData.find(c => c.id === activeCaseId) || caseStudiesData[0];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Case Selector Buttons */}
      <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
        {caseStudiesData.map((caseItem) => {
          const isActive = caseItem.id === activeCaseId;
          return (
            <button
              key={caseItem.id}
              onClick={() => setActiveCaseId(caseItem.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex-shrink-0 border ${
                isActive 
                  ? 'bg-teal-500/20 border-teal-400 text-teal-300' 
                  : 'bg-neutral-800/50 border-neutral-700 text-neutral-400 hover:bg-neutral-800'
              }`}
            >
              {caseItem.title}
            </button>
          );
        })}
      </div>

      {/* Case Content */}
      <motion.div 
        key={activeCase.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-6 flex flex-col items-center text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-1">{activeCase.title}</h3>
        
        <p className="text-teal-400 font-semibold mb-2">
          Industry / Niche: <span className="text-white">{activeCase.niche}</span>
        </p>
        {activeCase.note && (
          <p className="text-neutral-300 max-w-2xl mx-auto mb-6">
            Note: {activeCase.note}
          </p>
        )}

        {/* Metrics Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {activeCase.metrics.map((m, idx) => (
            <MetricBadge key={idx} label={m.label} value={m.value} />
          ))}
        </div>

        {/* Slider Component implementation */}
        <BeforeAfterSlider 
          beforeImage={activeCase.imageBefore} 
          afterImage={activeCase.imageAfter} 
        />
      </motion.div>
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
    'before-after': useRef(null)
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

        {/* Before & After Us Section */}
        <SectionWrapper ref={sectionRefs['before-after']} id="before-after" title="Before & After Us">
          <InteractiveCasesView />
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
