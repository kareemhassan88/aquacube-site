import { useState, useEffect, useRef } from "react";

/* ── BRAND COLORS ── */
const AQUA = "#1FB4BA";
const NAVY = "#093D79";
const LIGHT_BG = "#F7FAFB";
const WHITE = "#FFFFFF";
const DARK = "#0A1628";
const GREY_TEXT = "#5A6B7F";

/* ── IMAGE PATHS ── */
const IMAGES = {
  logoLight: "/images/logo-light.png.png",
  logoDark: "/images/logo-dark.png.png",
  greybox: "/images/greybox.png.png",
  greenbox: "/images/greenbox.png.png",
  whitebox: "/images/whitebox.png.png",
  bluebox: "/images/bluebox.png.png",
  blueboxCompact: "/images/bluebox-compact.png.png",
  greyboxSolar: "/images/greybox-solar.png.png",
  productFamily: "/images/product-family.png.png",
};

/* ── HELPER ── */
const isReal = (url) => url && url.startsWith("/");

/* ── REUSABLE COMPONENTS ── */
const ProductImage = ({ src, alt, style = {} }) => {
  if (isReal(src)) {
    return <img src={src} alt={alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", ...style }} />;
  }
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, ...style }}>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: 1 }}>{alt}</span>
    </div>
  );
};

const Logo = ({ light = false, height = 40, navSize = false }) => {
  const src = light ? IMAGES.logoLight : IMAGES.logoDark;
  if (isReal(src)) {
    return <img src={src} alt="AquaCube" style={{ height: "auto", width: navSize ? 150 : 200, cursor: "pointer" }} />;
  }
  return (
    <svg height={height} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: "pointer" }}>
      <path d="M25 4L38 12V28L25 36L12 28V12L25 4Z" stroke={light ? "rgba(255,255,255,0.8)" : NAVY} strokeWidth="1.8" fill="none"/>
      <path d="M25 11C25 11 20 18 20 22C20 24.8 22.2 27 25 27C27.8 27 30 24.8 30 22C30 18 25 11 25 11Z" fill={AQUA}/>
      <text x="48" y="24" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="400" fill={light ? "white" : NAVY}>Aqua</text>
      <text x="93" y="24" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" fill={AQUA}>Cube</text>
    </svg>
  );
};

/* ── SVG ICONS ── */
const ChevronRight = ({ color = AQUA }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>;
const ChevronLeft = ({ color = AQUA }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>;
const WifiIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>;
const ShieldIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const SunIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>;
const CubeIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>;
const ToolIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const GlobeIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const BoltIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const HeartIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const DollarIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>;
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MapPinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const ArrowUpIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg>;

/* ── ICON ARRAYS FOR WHY & SERVICES SECTIONS ── */
const whyIcons = [<CubeIcon />, <WifiIcon />, <SunIcon />, <DollarIcon />, <ShieldIcon />, <BoltIcon />, <HeartIcon />, <GlobeIcon />];
const svcIcons = [<ToolIcon />, <CubeIcon />, <BoltIcon />, <WifiIcon />, <ShieldIcon />, <GlobeIcon />, <SunIcon />, <HeartIcon />];

/* ══════════════════════════════════════════════
   TRANSLATIONS
   ══════════════════════════════════════════════ */
const translations = {
  en: {
    nav: { home: "Home", products: "Products", services: "Services", contact: "Contact", cta: "Get in Touch" },
    hero: {
      badge: "Next-Gen Compact Water Solutions",
      h1a: "Smart Water Solutions,", h1b: "Engineered for Impact",
      desc: "AquaCube delivers compact, IoT-powered water treatment systems that combine frontier technology with unmatched affordability. Robust, low-maintenance, and built at a fraction of traditional CAPEX — designed for the MENA region and ready for global reach.",
      btn1: "Explore Products", btn2: "Request a Demo",
      stat1n: "4", stat1l: "Product Lines",
      stat2n: "Multi", stat2l: "Sector", stat2tip: "Residential · Commercial · Agricultural · Institutional · Municipal · Humanitarian",
      stat3n: "IoT", stat3l: "Enabled"
    },
    cards: { label: "Our Solutions", title: "Four Systems, Frontier Innovation", subtitle: "Each AquaCube unit is purpose-built for a specific water treatment challenge — deploy individually or combine into a complete integrated water management system.", viewDetails: "View Details" },
    why: {
      label: "Why AquaCube", title: "The AquaCube Advantage",
      items: [
        { title: "Compact & Modular", desc: "Space-efficient units that deploy individually or combine into full-scale water management systems. Scale as you grow." },
        { title: "IoT-Powered", desc: "Real-time monitoring, remote diagnostics, and predictive maintenance through a cloud dashboard — plus built-in water savings analytics and cost-recovery tracking." },
        { title: "Solar-Ready", desc: "Off-grid capable with hybrid solar/grid power options — ideal for remote sites and off-network locations." },
        { title: "Ultra-Low CAPEX", desc: "Frontier engineering and smart design deliver enterprise-grade performance at a fraction of conventional system costs." },
        { title: "Minimal Maintenance", desc: "Robust construction and automated systems mean less downtime, fewer service calls, and lower operating costs." },
        { title: "Plug & Play Installation", desc: "Factory-calibrated units arrive ready to connect. On-site installation and commissioning completed within 48 hours of delivery." },
        { title: "Lifetime Support", desc: "From initial feasibility study through decades of operation — ongoing technical support, software updates, and spare parts availability guaranteed." },
        { title: "Global-Ready", desc: "Cutting-edge technologies manufactured locally with regional service networks — engineered for MENA conditions, ready for worldwide deployment." }
      ]
    },
    sectors: {
      label: "Where We Serve", title: "Solutions Across Every Sector",
      items: [
        { emoji: "🏠", title: "Residential", desc: "Homes, villas, and apartment complexes — greywater recycling and clean drinking water for everyday living." },
        { emoji: "🏢", title: "Commercial", desc: "Hotels, restaurants, shopping malls, and offices — water treatment, grease separation, and cost-efficient reuse systems." },
        { emoji: "🌾", title: "Agricultural", desc: "Farms, greenhouses, and livestock operations — irrigation-grade water recovery and desalination for arid farming." },
        { emoji: "🏫", title: "Institutional", desc: "Schools, hospitals, clinics, mosques, and government buildings — safe potable water and wastewater management at scale." },
        { emoji: "🏭", title: "Industrial", desc: "Factories, food processing, and manufacturing plants — process water treatment and regulatory-compliant discharge." },
        { emoji: "🚨", title: "Humanitarian", desc: "Refugee camps, disaster response, and remote field operations — rapid-deploy portable water purification and desalination." }
      ]
    },
    cta: { title: "Ready to Transform Your Water Management?", subtitle: "Whether you need a single unit or a full-scale deployment, our team is ready to design the right solution for you.", btn1: "Request a Demo", btn2: "Explore Products" },
    productsHub: { title: "The AquaCube Product Family", subtitle: "Four compact, IoT-powered water treatment systems — each engineered for a specific challenge, built to work alone or as an integrated solution.", viewSpecs: "View Full Specs" },
    detail: { back: "← All Products", quote: "Request Quote", features: "Key Features", specs: "Technical Specifications", apps: "Applications", other: "Other Products" },
    servicesPage: { title: "End-to-End Water Solutions", subtitle: "From initial consultation through decades of operation, AquaCube provides comprehensive services across the entire project lifecycle — so you can focus on results, not infrastructure." },
    contactPage: { title: "Let's Talk Water", subtitle: "Whether you need a system quote, a technical consultation, or a partnership discussion — our team is ready to help.", custBtn: "Customer Inquiry", invBtn: "Investor / Partner", fields: ["Full Name", "Email Address", "Organization / Company"], custField: "Country / Region", invField: "Investment Focus", msgLabel: "Message", msgPlaceholder: "Tell us about your needs...", sendBtn: "Send Message", offices: "Our Offices", directContact: "Direct Contact" },
    footer: { desc: "Next-gen compact water treatment systems powered by IoT and frontier technology. Designed for MENA, built for global reach.", productsLabel: "Products", companyLabel: "Company", copyright: "\u00a9 2026 AquaCube. All rights reserved." },
    offices: ["Amman, Jordan", "Cairo, Egypt", "Riyadh, Saudi Arabia"]
  },
  ar: {
    nav: { home: "الرئيسية", products: "المنتجات", services: "الخدمات", contact: "تواصل معنا", cta: "تواصل معنا" },
    hero: {
      badge: "حلول مياه ذكية ومدمجة من الجيل الجديد",
      h1a: "حلول مياه ذكية،", h1b: "مصممة لتحقيق الأثر",
      desc: "تقدم AquaCube أنظمة معالجة مياه مدمجة تعمل بتقنيات إنترنت الأشياء، تجمع بين التكنولوجيا المتقدمة والأسعار التنافسية. أنظمة متينة وقليلة الصيانة بتكلفة رأسمالية أقل بكثير من الأنظمة التقليدية — مصممة لمنطقة الشرق الأوسط وشمال أفريقيا وجاهزة للتوسع عالمياً.",
      btn1: "استكشف المنتجات", btn2: "اطلب عرضاً توضيحياً",
      stat1n: "4", stat1l: "خطوط إنتاج",
      stat2n: "متعدد", stat2l: "القطاعات", stat2tip: "سكني · تجاري · زراعي · مؤسسي · بلدي · إنساني",
      stat3n: "IoT", stat3l: "مُفعّل"
    },
    cards: { label: "حلولنا", title: "أربعة أنظمة، ابتكار رائد", subtitle: "كل وحدة من AquaCube مصممة خصيصاً لتحدٍّ محدد في معالجة المياه — يمكن نشرها بشكل مستقل أو دمجها في نظام متكامل لإدارة المياه.", viewDetails: "عرض التفاصيل" },
    why: {
      label: "لماذا AquaCube", title: "ميزات AquaCube",
      items: [
        { title: "مدمج ومعياري", desc: "وحدات موفرة للمساحة يمكن نشرها بشكل فردي أو دمجها في أنظمة إدارة مياه متكاملة. توسّع حسب احتياجاتك." },
        { title: "مدعوم بإنترنت الأشياء", desc: "مراقبة فورية وتشخيص عن بُعد وصيانة تنبؤية عبر لوحة تحكم سحابية — مع تحليلات توفير المياه وتتبع العائد على الاستثمار." },
        { title: "جاهز للطاقة الشمسية", desc: "يعمل خارج الشبكة مع خيارات طاقة شمسية/كهربائية هجينة — مثالي للمواقع النائية." },
        { title: "تكلفة رأسمالية منخفضة جداً", desc: "هندسة متقدمة وتصميم ذكي يوفران أداءً بمستوى المؤسسات بجزء بسيط من تكاليف الأنظمة التقليدية." },
        { title: "صيانة بسيطة", desc: "بناء متين وأنظمة آلية تعني وقت توقف أقل واستدعاءات صيانة أقل وتكاليف تشغيل أقل." },
        { title: "تركيب فوري", desc: "وحدات مُعايرة من المصنع جاهزة للتوصيل. التركيب والتشغيل في الموقع خلال 48 ساعة من التسليم." },
        { title: "دعم مدى الحياة", desc: "من دراسة الجدوى الأولى وعبر عقود من التشغيل — دعم فني مستمر وتحديثات برمجية وتوفر قطع غيار مضمون." },
        { title: "جاهز للعالمية", desc: "تقنيات متطورة تُصنّع محلياً مع شبكات خدمة إقليمية — مصممة لظروف منطقة الشرق الأوسط، جاهزة للانتشار عالمياً." }
      ]
    },
    sectors: {
      label: "أين نخدم", title: "حلول لكل قطاع",
      items: [
        { emoji: "🏠", title: "سكني", desc: "المنازل والفلل والمجمعات السكنية — إعادة تدوير المياه الرمادية ومياه شرب نظيفة للحياة اليومية." },
        { emoji: "🏢", title: "تجاري", desc: "الفنادق والمطاعم ومراكز التسوق والمكاتب — معالجة المياه وفصل الزيوت وأنظمة إعادة استخدام فعالة." },
        { emoji: "🌾", title: "زراعي", desc: "المزارع والبيوت البلاستيكية وعمليات الثروة الحيوانية — استرداد مياه الري وتحلية المياه للزراعة الجافة." },
        { emoji: "🏫", title: "مؤسسي", desc: "المدارس والمستشفيات والعيادات والمساجد والمباني الحكومية — مياه شرب آمنة وإدارة مياه الصرف على نطاق واسع." },
        { emoji: "🏭", title: "صناعي", desc: "المصانع ومرافق تصنيع الأغذية — معالجة مياه العمليات والتصريف المتوافق مع اللوائح البيئية." },
        { emoji: "🚨", title: "إنساني", desc: "مخيمات اللاجئين والاستجابة للكوارث والعمليات الميدانية — تنقية وتحلية مياه محمولة سريعة النشر." }
      ]
    },
    cta: { title: "هل أنت مستعد لتحويل إدارة المياه لديك؟", subtitle: "سواء كنت بحاجة إلى وحدة واحدة أو نشر واسع النطاق، فريقنا جاهز لتصميم الحل المناسب لك.", btn1: "اطلب عرضاً توضيحياً", btn2: "استكشف المنتجات" },
    productsHub: { title: "عائلة منتجات AquaCube", subtitle: "أربعة أنظمة مدمجة لمعالجة المياه تعمل بتقنية إنترنت الأشياء — كل نظام مصمم لتحدٍّ محدد، قابل للعمل منفرداً أو كحل متكامل.", viewSpecs: "عرض المواصفات الكاملة" },
    detail: { back: "← جميع المنتجات", quote: "اطلب عرض سعر", features: "الميزات الرئيسية", specs: "المواصفات الفنية", apps: "التطبيقات", other: "منتجات أخرى" },
    servicesPage: { title: "حلول مياه شاملة", subtitle: "من الاستشارة الأولى وعبر عقود من التشغيل، تقدم AquaCube خدمات شاملة عبر دورة حياة المشروع بالكامل — لتتمكن من التركيز على النتائج لا على البنية التحتية." },
    contactPage: { title: "لنتحدث عن المياه", subtitle: "سواء كنت بحاجة إلى عرض سعر أو استشارة فنية أو نقاش شراكة — فريقنا جاهز للمساعدة.", custBtn: "استفسار عميل", invBtn: "مستثمر / شريك", fields: ["الاسم الكامل", "البريد الإلكتروني", "المؤسسة / الشركة"], custField: "البلد / المنطقة", invField: "مجال الاستثمار", msgLabel: "الرسالة", msgPlaceholder: "أخبرنا عن احتياجاتك...", sendBtn: "إرسال الرسالة", offices: "مكاتبنا", directContact: "تواصل مباشر" },
    footer: { desc: "أنظمة معالجة مياه مدمجة من الجيل الجديد تعمل بتقنية إنترنت الأشياء والتكنولوجيا المتقدمة. مصممة لمنطقة الشرق الأوسط، جاهزة للعالم.", productsLabel: "المنتجات", companyLabel: "الشركة", copyright: "\u00a9 2026 AquaCube. جميع الحقوق محفوظة." },
    offices: ["عمّان، الأردن", "القاهرة، مصر", "الرياض، السعودية"]
  }
};

/* ══════════════════════════════════════════════
   PRODUCT DATA (bilingual)
   ══════════════════════════════════════════════ */
const getProducts = (lang) => [
  {
    id: "greybox", name: "GreyBox", image: IMAGES.greybox, gradient: "linear-gradient(135deg, #4B5563, #374151)",
    tagline: lang === "ar" ? "نظام إعادة تدوير المياه الرمادية" : "Greywater Recycling System",
    shortDesc: lang === "ar" ? "يعيد تدوير مياه غسيل السيارات والاستحمام والمغاسل والغسيل لإعادة استخدام آمنة. مراقبة بتقنية IoT وتصميم جاهز للطاقة الشمسية." : "Recycles car wash, shower, sink, and laundry water for safe non-potable reuse. IoT-monitored, solar-ready, compact design.",
    description: lang === "ar" ? "وحدة مدمجة لمعالجة المياه الرمادية تعيد تدوير مياه غسيل السيارات والاستحمام والمغاسل والغسيل لإعادة الاستخدام الآمن في التطبيقات غير الصالحة للشرب. تحقق استرداد مياه يصل إلى 75% مع عائد استثمار في أقل من عام. مراقبة بتقنية IoT وتصميم جاهز للطاقة الشمسية." : "Compact greywater treatment unit that recycles car washing water, shower, sink, and laundry water for safe reuse in non-potable applications. Achieves up to 75% water recovery with less than 1 year ROI. IoT-monitored with solar-ready design.",
    features: lang === "ar" ? ["ترشيح متعدد المراحل ومعالجة بيولوجية وتعقيم بالأشعة فوق البنفسجية","معدل استرداد مياه يصل إلى 75%","عائد استثمار في أقل من عام","لوحة مراقبة IoT مع تتبع مباشر لتوفير المياه والعائد المالي","متوافق مع الألواح الشمسية للعمل خارج الشبكة","تصميم عمودي مدمج مع عجلات للتنقل","وصلات أنابيب دخول/خروج للتركيب الفوري","شاشة عرض فورية لجودة المياه","مياه ناتجة خالية من الجسيمات والمواد الكيميائية والمخاطر البيولوجية والمعادن","مياه معقمة وآمنة لإعادة التدوير والاستخدام بثقة"] : ["Multi-stage filtration, biological treatment, and UV disinfection","Up to 75% water recovery rate","Less than 1 year return on investment","IoT-enabled monitoring dashboard with live water savings and cost-recovery tracking","Solar panel compatible for off-grid operation","Compact vertical design with casters for mobility","In/Out pipe connections for plug-and-play installation","Real-time water quality display","Output water free from particles, chemicals, biological hazards, and minerals","Safe disinfected water for confident recycling and reuse"],
    specs: lang === "ar" ? {"السعة":"5,000 – 50,000 لتر/يوم","الأبعاد":"100 × 100 × 200 سم","الطاقة":"شمسية / كهرباء / هجين","المراقبة":"شاشة لمس + IoT عن بُعد + تطبيق موبايل"} : {capacities:"5,000 – 50,000 L/day",dimensions:"100 × 100 × 200 cm",power:"Solar / Grid / Hybrid",monitoring:"Built-in touchscreen + remote IoT + mobile application"},
    applications: lang === "ar" ? ["الفلل والمجمعات السكنية","محطات غسيل السيارات","الفنادق والمنتجعات","المدارس والجامعات","المساجد والمرافق العامة","المباني التجارية والمكاتب","مرافق الغسيل والتنظيف"] : ["Residential villas and apartment complexes","Car wash stations","Hotels and resorts","Schools and universities","Mosques and public facilities","Commercial buildings and offices","Laundry and cleaning facilities"]
  },
  {
    id: "greenbox", name: "GreenBox", image: IMAGES.greenbox, gradient: "linear-gradient(135deg, #166534, #14532d)",
    tagline: lang === "ar" ? "نظام فصل الزيوت والشحوم" : "Oil & Grease Separation System",
    shortDesc: lang === "ar" ? "فصل آلي للزيوت والشحوم للمطابخ التجارية والمطاعم ومصانع الأغذية. مراقبة فورية وصيانة بسيطة." : "Automated oil and grease separation for commercial kitchens, restaurants, and food processing. Real-time monitoring, minimal maintenance.",
    description: lang === "ar" ? "فاصل زيوت-مياه مدمج يعمل بالجاذبية لإزالة الزيوت والشحوم والهيدروكربونات غير المستحلبة من مياه الصرف. يستخدم تقنية الفصل بالجاذبية والتجميع — بدون أجزاء متحركة وبدون مواد كيميائية. يمنع انسداد الصرف الصحي ويحمي أنظمة المعالجة ويضمن الامتثال لمعايير التصريف البيئية." : "Compact gravity-based oil-water separator for the effective removal of non-emulsified oils, greases, and hydrocarbons from wastewater. Utilizes static gravity separation and coalescence technology — no moving parts, no chemicals required. Prevents sewer clogging, protects downstream treatment systems, and ensures environmental discharge compliance.",
    features: lang === "ar" ? ["فصل بالجاذبية الساكنة عند الضغط الجوي — بدون آلات متحركة","تقنية ألواح التجميع لالتقاط قطرات الزيت المحسّن","إزالة كاملة للزيت الطافي عبر نظام شفط آلي","لا حاجة لمواد كيميائية — تشغيل سلبي بالكامل","يمنع التراكم والانسداد في شبكات الصرف وأنظمة المعالجة","بناء متين للاستخدام الصناعي المستمر","شاشة مراقبة فورية","متوافق مع معايير التصريف البيئية"] : ["Static gravity separation at atmospheric pressure — no moving machinery","Coalescence plate technology for enhanced oil droplet capture","Complete removal of floating oil via automatic suction system","No chemical dosing required — fully passive operation","Prevents accumulation and clogging in downstream sewer and treatment systems","Heavy-duty construction for continuous industrial use","Real-time monitoring display","Compliant with environmental discharge standards"],
    specs: lang === "ar" ? {"السعة":"3,000 – 15,000 لتر/يوم","الأبعاد":"160 × 100 × 150 سم","الطاقة":"حد أدنى — نظام سلبي بالجاذبية","المراقبة":"شاشة لمس + نظام IoT (اختياري)"} : {capacities:"3,000 – 15,000 L/day",dimensions:"160 × 100 × 150 cm",power:"Minimal — gravity-driven passive system",monitoring:"Integrated touchscreen panel + IoT system (optional)"},
    applications: lang === "ar" ? ["المطابخ التجارية والمطاعم","ورش السيارات ومحطات الغسيل","مرافق تصنيع الأغذية","المصانع والمنشآت الصناعية","الفنادق وقطاع الضيافة","ورش البتروكيماويات والميكانيكا"] : ["Commercial kitchens and restaurants","Car workshops and car washes","Food processing facilities","Factories and industrial plants","Hotels and hospitality","Petrochemical and mechanical workshops"]
  },
  {
    id: "whitebox", name: "WhiteBox", image: IMAGES.whitebox, gradient: "linear-gradient(135deg, #64748B, #475569)",
    tagline: lang === "ar" ? "وحدة تحلية محمولة" : "Portable Desalination Unit",
    shortDesc: lang === "ar" ? "تحلية محمولة للمياه المالحة والمسوسة ومياه البحر. مياه عذبة نظيفة للمجتمعات الساحلية والعمليات البحرية والطوارئ." : "Portable desalination for brackish, saline, and sea water sources. Clean freshwater for coastal, marine, and emergency operations.",
    description: lang === "ar" ? "نظام تحلية محمول ومدمج لمصادر المياه المالحة والمسوسة ومياه البحر. يوفر مياه عذبة نظيفة للمجتمعات الساحلية والسفن وقوارب الصيد والعمليات الميدانية وسيناريوهات الاستجابة للطوارئ." : "Compact portable desalination system for saline brackish water and sea water sources. Delivers clean freshwater for coastal communities, ships, fishing boats, field operations, and emergency response scenarios.",
    features: lang === "ar" ? ["يعالج المياه المسوسة والمالحة ومياه البحر","تصميم محمول وسريع النشر","مراقبة فورية لمستوى TDS ودرجة الحموضة","بناء من الفولاذ المقاوم للصدأ بمتانة بحرية","استهلاك طاقة منخفض","يلبي معايير منظمة الصحة العالمية لمياه الشرب","مراقبة عن بُعد بتقنية IoT","تركيب فوري — جاهز للتشغيل خلال ساعات"] : ["Handles brackish, saline, and sea water sources","Portable and rapid-deploy design","TDS and pH real-time monitoring","Stainless steel construction for marine-grade durability","Low energy consumption","Meets WHO drinking water standards","IoT-enabled remote monitoring","Plug-and-play installation — operational within hours"],
    specs: lang === "ar" ? {"السعة":"1,000 – 10,000 لتر/يوم","الأبعاد":"160 × 100 × 150 سم","الطاقة":"شمسية / كهرباء / هجين","المراقبة":"شاشة لمس + IoT عن بُعد + تطبيق موبايل"} : {capacities:"1,000 – 10,000 L/day",dimensions:"160 × 100 × 150 cm",power:"Solar / Grid / Hybrid",monitoring:"Built-in touchscreen + remote IoT + mobile application"},
    applications: lang === "ar" ? ["المجتمعات الساحلية","السفن وقوارب الصيد","العمليات العسكرية والميدانية","الاستجابة للطوارئ والكوارث","الجزر النائية والمنصات البحرية","المنتجعات والمرافق السياحية","الزراعة الدقيقة والمحمية (الزراعة المائية والأكوابونيك)"] : ["Coastal communities","Ships and fishing boats","Military and field operations","Emergency and disaster response","Remote islands and offshore platforms","Resort and tourism facilities","Precision and protected agriculture (hydroponics and aquaponics)"]
  },
  {
    id: "bluebox", name: "BlueBox", image: IMAGES.bluebox, gradient: "linear-gradient(135deg, " + NAVY + ", #061E47)",
    tagline: lang === "ar" ? "نظام مياه شرب بالتناضح العكسي" : "RO Drinking Water System",
    shortDesc: lang === "ar" ? "تنقية بالتناضح العكسي مع مراقبة IoT. مياه صالحة للشرب للمنازل والمدارس والعيادات والمزارع والمنشآت الصناعية." : "Reverse osmosis purification with IoT monitoring. Potable water for households, schools, clinics, farms, and industrial facilities.",
    description: lang === "ar" ? "وحدة متقدمة لتنقية مياه الشرب بالتناضح العكسي مع مراقبة بتقنية إنترنت الأشياء. توفر مياه صالحة للشرب للمنازل والمدارس والعيادات والمزارع والمنشآت الصناعية." : "Advanced reverse osmosis drinking water purification unit with IoT-enabled monitoring. Delivers potable water for households, schools, clinics, farms, and industrial facilities.",
    features: lang === "ar" ? ["تنقية متقدمة بالتناضح العكسي","لوحة IoT كاملة مع تشخيص الفلاتر ومراقبة الحالة وتتبع إنتاج المياه","تتبع درجة الحموضة وTDS ومعدل التدفق","تحليلات مباشرة لاستهلاك المياه والتكاليف","تصميم عمودي مدمج مع عجلات للتنقل","إدارة عن بُعد عبر السحابة وتطبيق الموبايل","مرحلة تعقيم بالأشعة فوق البنفسجية لضمان مياه شرب آمنة","تركيب فوري"] : ["Advanced reverse osmosis purification","Full IoT dashboard with filter diagnosis, status monitoring, and water production tracking","pH, TDS, and flow rate tracking","Live water consumption and cost analytics","Compact vertical design with casters for mobility","Cloud-connected remote management via mobile application","UV disinfection stage for guaranteed safe drinking water","Plug-and-play installation"],
    specs: lang === "ar" ? {"السعة":"1,000 – 20,000 لتر/يوم","الأبعاد":"100 × 100 × 200 سم","الطاقة":"شمسية / كهرباء / هجين","المراقبة":"شاشة لمس + IoT عن بُعد + تطبيق موبايل"} : {capacities:"1,000 – 20,000 L/day",dimensions:"100 × 100 × 200 cm",power:"Solar / Grid / Hybrid",monitoring:"Built-in touchscreen + remote IoT + mobile application"},
    applications: lang === "ar" ? ["المدارس والجامعات","المباني المكتبية","العيادات والصيدليات","المستشفيات","المباني الحكومية","الصالات الرياضية والمراكز الرياضية","المساجد","المزارع","المنشآت الصناعية","المجمعات السكنية","القرى الريفية"] : ["Schools and universities","Office buildings","Clinics and pharmacies","Hospitals","Government buildings","Gyms and sports centres","Mosques","Farms","Industrial facilities","Residential compounds","Rural villages"]
  }
];

/* ── SERVICES DATA ── */
const getServices = (lang) => [
  { title: lang === "ar" ? "الاستشارات ودراسات الجدوى" : "Consultation & Feasibility Studies", desc: lang === "ar" ? "تدقيق مائي في الموقع وتقييم الاحتياجات وتحليل جدوى فنية مفصل حسب موقعك وسعتك وميزانيتك." : "On-site water audit, needs assessment, and detailed technical feasibility analysis tailored to your location, capacity, and budget." },
  { title: lang === "ar" ? "تصميم وتخصيص الأنظمة" : "System Design & Customization", desc: lang === "ar" ? "أنظمة AquaCube مُعدّة حسب مواصفاتك — السعة والمساحة ومصدر المياه ومتطلبات المخرجات." : "Custom-configured AquaCube systems engineered to your exact specifications — capacity, space constraints, water source, and output requirements." },
  { title: lang === "ar" ? "تركيب فوري" : "Plug & Play Installation", desc: lang === "ar" ? "وحدات مُعايرة من المصنع يتم تسليمها وتشغيلها في الموقع خلال 48 ساعة. أعمال مدنية بسيطة مطلوبة." : "Factory-calibrated units delivered and professionally commissioned on-site within 48 hours. Minimal civil works required." },
  { title: lang === "ar" ? "مراقبة IoT والتحليلات" : "IoT Monitoring & Analytics", desc: lang === "ar" ? "مراقبة سحابية على مدار الساعة مع تشخيص فوري وتتبع توفير المياه وتحليلات التكاليف وتنبيهات صيانة تنبؤية." : "24/7 cloud-based monitoring with real-time diagnostics, water savings tracking, cost analytics, and predictive maintenance alerts." },
  { title: lang === "ar" ? "الصيانة الوقائية" : "Preventive Maintenance", desc: lang === "ar" ? "زيارات صيانة مجدولة واستبدال فلاتر وفحوصات صحة النظام لضمان أداء مستمر بأعلى مستوى." : "Scheduled service visits, filter replacements, and system health checks to ensure uninterrupted peak performance." },
  { title: lang === "ar" ? "التدريب وبناء القدرات" : "Training & Capacity Building", desc: lang === "ar" ? "تدريب عملي شامل للمشغلين وأدلة صيانة ودعم فني مستمر لفريقك." : "Comprehensive hands-on operator training, maintenance manuals, and ongoing technical support for your team." },
  { title: lang === "ar" ? "تكامل الطاقة الشمسية" : "Solar & Off-Grid Integration", desc: lang === "ar" ? "تصميم وتركيب أنظمة طاقة شمسية/كهربائية هجينة لمعالجة مياه مستقلة عن الطاقة في المواقع النائية." : "Hybrid solar/grid power system design and installation for energy-independent water treatment in remote locations." },
  { title: lang === "ar" ? "قطع الغيار والدعم مدى الحياة" : "Spare Parts & Lifetime Support", desc: lang === "ar" ? "توفر مضمون لقطع الغيار وتحديثات برمجية ودعم فني مخصص طوال عمر النظام." : "Guaranteed spare parts availability, software updates, and dedicated technical support throughout the system's lifetime." }
];

/* ══════════════════════════════════════════════
   PAGE COMPONENTS
   ══════════════════════════════════════════════ */

const Nav = ({ page, setPage, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const tx = translations[lang].nav;
  const isAr = lang === "ar";
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const solid = scrolled || page !== "home" || menuOpen;
  const links = [{ id: "home", label: tx.home },{ id: "products", label: tx.products },{ id: "services", label: tx.services },{ id: "contact", label: tx.contact }];
  return (
    <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:1000,background:solid?"rgba(10,22,40,0.97)":"transparent",backdropFilter:solid?"blur(20px)":"none",borderBottom:solid?"1px solid rgba(255,255,255,0.06)":"none",transition:"all 0.3s",padding:"0 24px",direction:isAr?"rtl":"ltr" }}>
      <div style={{ maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:72 }}>
        <div onClick={() => { setPage("home"); setMenuOpen(false); }} style={{cursor:"pointer"}}><Logo light height={52} navSize /></div>
        <div className="nav-desktop" style={{ display:"flex",gap:24,alignItems:"center" }}>
          {links.map(l => <button key={l.id} onClick={() => setPage(l.id)} style={{ background:"none",border:"none",color:page===l.id?AQUA:"rgba(255,255,255,0.7)",fontSize:14,fontWeight:page===l.id?600:400,cursor:"pointer",padding:"8px 4px",borderBottom:page===l.id?"2px solid "+AQUA:"2px solid transparent",fontFamily:"inherit" }}>{l.label}</button>)}
          <button onClick={() => setLang(lang==="en"?"ar":"en")} style={{ background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",color:"white",padding:"6px 14px",borderRadius:6,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit" }}>{lang==="en"?"عربي":"EN"}</button>
          <button onClick={() => setPage("contact")} style={{ background:AQUA,color:WHITE,border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit" }}>{tx.cta}</button>
        </div>
        <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background:"none",border:"none",cursor:"pointer",display:"none",padding:8 }}>
          {menuOpen ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>}
        </button>
      </div>
      {menuOpen && (
        <div className="nav-mobile-menu" style={{ display:"none",flexDirection:"column",gap:8,padding:"16px 0 24px",borderTop:"1px solid rgba(255,255,255,0.06)" }}>
          {links.map(l => <button key={l.id} onClick={() => { setPage(l.id); setMenuOpen(false); }} style={{ background:page===l.id?"rgba(31,180,186,0.1)":"none",border:"none",color:page===l.id?AQUA:"rgba(255,255,255,0.7)",fontSize:16,fontWeight:page===l.id?600:400,cursor:"pointer",padding:"12px 16px",borderRadius:8,textAlign:isAr?"right":"left",fontFamily:"inherit",width:"100%" }}>{l.label}</button>)}
          <button onClick={() => setLang(lang==="en"?"ar":"en")} style={{ background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",color:"white",padding:"12px",borderRadius:8,fontSize:15,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%" }}>{lang==="en"?"عربي":"English"}</button>
          <button onClick={() => { setPage("contact"); setMenuOpen(false); }} style={{ background:AQUA,color:WHITE,border:"none",padding:"12px 24px",borderRadius:8,fontSize:15,fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:8,width:"100%" }}>{tx.cta}</button>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setPage, solutionsRef, lang }) => { const tx = translations[lang].hero; const isAr = lang === "ar"; return (
  <section style={{ background:"linear-gradient(160deg,"+DARK+" 0%,"+NAVY+" 60%,#0D5070 100%)",minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",padding:"100px 24px 80px",direction:isAr?"rtl":"ltr" }}>
    <div style={{ position:"absolute",inset:0,opacity:0.04,backgroundImage:"radial-gradient(circle at 1px 1px, rgba(31,180,186,0.6) 1px, transparent 0)",backgroundSize:"48px 48px" }} />
    <div style={{ maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",gap:60,width:"100%",flexWrap:"wrap" }}>
      <div style={{ flex:"1 1 400px" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(31,180,186,0.08)",border:"1px solid rgba(31,180,186,0.15)",borderRadius:50,padding:"8px 18px",marginBottom:28 }}>
          <div style={{ width:8,height:8,borderRadius:"50%",background:AQUA }} />
          <span style={{ color:AQUA,fontSize:13,fontWeight:500 }}>{tx.badge}</span>
        </div>
        <h1 style={{ fontSize:"clamp(32px,5vw,54px)",fontWeight:700,color:"white",lineHeight:1.2,margin:"0 0 24px" }}>{tx.h1a}{" "}<span style={{ color:AQUA }}>{tx.h1b}</span></h1>
        <p style={{ fontSize:16,color:"rgba(255,255,255,0.65)",lineHeight:1.8,margin:"0 0 40px",maxWidth:520 }}>{tx.desc}</p>
        <div style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
          <button onClick={() => { if(solutionsRef&&solutionsRef.current) solutionsRef.current.scrollIntoView({behavior:"smooth"}); }} style={{ background:AQUA,color:WHITE,border:"none",padding:"14px 32px",borderRadius:8,fontSize:15,fontWeight:600,cursor:"pointer",fontFamily:"inherit" }}>{tx.btn1}</button>
          <button onClick={() => setPage("contact")} style={{ background:"transparent",color:"white",border:"1.5px solid rgba(255,255,255,0.25)",padding:"14px 32px",borderRadius:8,fontSize:15,fontWeight:600,cursor:"pointer",fontFamily:"inherit" }}>{tx.btn2}</button>
        </div>
        <div style={{ display:"flex",gap:48,marginTop:56 }}>
          <div><div style={{ fontSize:30,fontWeight:700,color:AQUA }}>{tx.stat1n}</div><div style={{ fontSize:12,color:"rgba(255,255,255,0.45)",marginTop:4 }}>{tx.stat1l}</div></div>
          <div title={tx.stat2tip} style={{ cursor:"pointer" }}><div style={{ fontSize:30,fontWeight:700,color:AQUA }}>{tx.stat2n}</div><div style={{ fontSize:12,color:"rgba(255,255,255,0.45)",marginTop:4 }}>{tx.stat2l}</div></div>
          <div><div style={{ fontSize:30,fontWeight:700,color:AQUA }}>{tx.stat3n}</div><div style={{ fontSize:12,color:"rgba(255,255,255,0.45)",marginTop:4 }}>{tx.stat3l}</div></div>
        </div>
      </div>
      <div style={{ flex:"1 1 360px",display:"flex",justifyContent:"center" }}>
        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute",inset:-40,borderRadius:"50%",background:"radial-gradient(circle,rgba(31,180,186,0.1) 0%,transparent 70%)" }} />
          <div style={{ position:"relative",background:"rgba(255,255,255,0.03)",borderRadius:24,border:"1px solid rgba(255,255,255,0.06)",padding:32,minWidth:320,minHeight:360,display:"flex",alignItems:"center",justifyContent:"center" }}>
            <ProductImage src={IMAGES.productFamily} alt="AquaCube" style={{ maxHeight:300 }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);};

const ProductCards = ({ setPage, setActiveProduct, solutionsRef, lang }) => { const tx = translations[lang].cards; const prods = getProducts(lang); const isAr = lang === "ar"; return (
  <section ref={solutionsRef} style={{ padding:"96px 24px",background:WHITE,direction:isAr?"rtl":"ltr" }}>
    <div style={{ maxWidth:1200,margin:"0 auto" }}>
      <div style={{ textAlign:"center",marginBottom:64 }}>
        <span style={{ color:AQUA,fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:3 }}>{tx.label}</span>
        <h2 style={{ fontSize:36,fontWeight:700,color:NAVY,margin:"14px 0 16px" }}>{tx.title}</h2>
        <p style={{ fontSize:16,color:GREY_TEXT,maxWidth:600,margin:"0 auto",lineHeight:1.7 }}>{tx.subtitle}</p>
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:20 }}>
        {prods.map(p => (
          <div key={p.id} onClick={() => { setActiveProduct(p.id); setPage("product-detail"); }} style={{ background:WHITE,borderRadius:16,padding:24,cursor:"pointer",border:"1px solid #E8EDF2",transition:"all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow="0 16px 48px rgba(9,61,121,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}>
            <div style={{ height:180,display:"flex",alignItems:"center",justifyContent:"center",background:LIGHT_BG,borderRadius:12,marginBottom:18,overflow:"hidden",padding:16 }}>
              <ProductImage src={p.image} alt={p.name} style={{ maxHeight:160 }} />
            </div>
            <h3 style={{ fontSize:20,fontWeight:700,color:NAVY,margin:"0 0 4px" }}>{p.name}</h3>
            <p style={{ fontSize:14,color:AQUA,fontWeight:500,margin:"0 0 10px" }}>{p.tagline}</p>
            <p style={{ fontSize:13,color:GREY_TEXT,lineHeight:1.65,margin:"0 0 14px" }}>{p.shortDesc}</p>
            <div style={{ display:"flex",alignItems:"center",gap:4,color:AQUA,fontSize:13,fontWeight:600 }}>{tx.viewDetails} {isAr?<ChevronLeft />:<ChevronRight />}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);};

const WhySection = ({ lang }) => { const tx = translations[lang].why; const isAr = lang === "ar"; return (
  <section style={{ padding:"96px 24px",background:NAVY,direction:isAr?"rtl":"ltr" }}>
    <div style={{ maxWidth:1200,margin:"0 auto" }}>
      <div style={{ textAlign:"center",marginBottom:64 }}>
        <span style={{ color:AQUA,fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:3 }}>{tx.label}</span>
        <h2 style={{ fontSize:36,fontWeight:700,color:"white",margin:"14px 0" }}>{tx.title}</h2>
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:20 }}>
        {tx.items.map((item,i) => (
          <div key={i} style={{ background:"rgba(255,255,255,0.04)",borderRadius:14,padding:28,border:"1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ marginBottom:14 }}>{whyIcons[i]}</div>
            <h3 style={{ fontSize:16,fontWeight:700,color:"white",margin:"0 0 8px" }}>{item.title}</h3>
            <p style={{ fontSize:13,color:"rgba(255,255,255,0.55)",lineHeight:1.65,margin:0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);};

const SectorsSection = ({ lang }) => { const tx = translations[lang].sectors; const isAr = lang === "ar"; return (
  <section style={{ padding:"96px 24px",background:LIGHT_BG,direction:isAr?"rtl":"ltr" }}>
    <div style={{ maxWidth:1200,margin:"0 auto",textAlign:"center" }}>
      <span style={{ color:AQUA,fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:3 }}>{tx.label}</span>
      <h2 style={{ fontSize:36,fontWeight:700,color:NAVY,margin:"14px 0 56px" }}>{tx.title}</h2>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:20 }}>
        {tx.items.map((s,i) => (
          <div key={i} style={{ background:WHITE,borderRadius:14,padding:28,border:"1px solid #E8EDF2",textAlign:isAr?"right":"left" }}>
            <div style={{ fontSize:36,marginBottom:14 }}>{s.emoji}</div>
            <h3 style={{ fontSize:18,fontWeight:700,color:NAVY,margin:"0 0 8px" }}>{s.title}</h3>
            <p style={{ fontSize:13,color:GREY_TEXT,margin:0,lineHeight:1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);};

const CTASection = ({ setPage, lang }) => { const tx = translations[lang].cta; const isAr = lang === "ar"; return (
  <section style={{ padding:"80px 24px",background:"linear-gradient(160deg,"+NAVY+","+DARK+")",textAlign:"center",direction:isAr?"rtl":"ltr" }}>
    <div style={{ marginBottom:20 }}><Logo light height={32} /></div>
    <h2 style={{ fontSize:32,fontWeight:700,color:"white",margin:"0 0 14px" }}>{tx.title}</h2>
    <p style={{ fontSize:16,color:"rgba(255,255,255,0.6)",maxWidth:520,margin:"0 auto 36px",lineHeight:1.7 }}>{tx.subtitle}</p>
    <div style={{ display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap" }}>
      <button onClick={() => setPage("contact")} style={{ background:AQUA,color:WHITE,border:"none",padding:"14px 36px",borderRadius:8,fontSize:15,fontWeight:600,cursor:"pointer",fontFamily:"inherit" }}>{tx.btn1}</button>
      <button onClick={() => setPage("products")} style={{ background:"transparent",color:"white",border:"1.5px solid rgba(255,255,255,0.2)",padding:"14px 36px",borderRadius:8,fontSize:15,fontWeight:600,cursor:"pointer",fontFamily:"inherit" }}>{tx.btn2}</button>
    </div>
  </section>
);};

const ProductsHub = ({ setPage, setActiveProduct, lang }) => { const tx = translations[lang].productsHub; const prods = getProducts(lang); const isAr = lang === "ar"; return (
  <div>
    <section style={{ background:"linear-gradient(160deg,"+DARK+","+NAVY+")",padding:"130px 24px 70px",textAlign:"center",direction:isAr?"rtl":"ltr" }}>
      <Logo light height={32} />
      <h1 style={{ fontSize:42,fontWeight:700,color:"white",margin:"20px 0 14px" }}>{tx.title}</h1>
      <p style={{ fontSize:16,color:"rgba(255,255,255,0.6)",maxWidth:600,margin:"0 auto",lineHeight:1.7 }}>{tx.subtitle}</p>
    </section>
    <section style={{ padding:"64px 24px",background:LIGHT_BG,direction:isAr?"rtl":"ltr" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        {prods.map((p,i) => (
          <div key={p.id} onClick={() => { setActiveProduct(p.id); setPage("product-detail"); }} style={{ display:"flex",alignItems:"center",gap:48,marginBottom:24,background:WHITE,borderRadius:18,padding:36,cursor:"pointer",border:"1px solid #E8EDF2",flexDirection:i%2===1?"row-reverse":"row",flexWrap:"wrap" }}>
            <div style={{ flex:"1 1 280px",display:"flex",justifyContent:"center",padding:20,background:LIGHT_BG,borderRadius:14,minHeight:240 }}>
              <ProductImage src={p.image} alt={p.name} style={{ maxHeight:220 }} />
            </div>
            <div style={{ flex:"1 1 400px" }}>
              <h3 style={{ fontSize:28,fontWeight:700,color:NAVY,margin:"0 0 4px" }}>{p.name}</h3>
              <p style={{ fontSize:15,color:AQUA,fontWeight:600,margin:"0 0 14px" }}>{p.tagline}</p>
              <p style={{ fontSize:14,color:GREY_TEXT,lineHeight:1.7,margin:"0 0 18px" }}>{p.description}</p>
              <div style={{ display:"flex",alignItems:"center",gap:4,color:AQUA,fontSize:14,fontWeight:600 }}>{tx.viewSpecs} {isAr?<ChevronLeft />:<ChevronRight />}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);};

const ProductDetail = ({ productId, setPage, setActiveProduct, lang }) => { const prods = getProducts(lang); const p = prods.find(x=>x.id===productId)||prods[0]; const others = prods.filter(x=>x.id!==productId); const tx = translations[lang].detail; const isAr = lang === "ar"; return (
  <div>
    <section style={{ background:p.gradient,padding:"130px 24px 70px",direction:isAr?"rtl":"ltr" }}>
      <div style={{ maxWidth:1100,margin:"0 auto",display:"flex",gap:48,flexWrap:"wrap",alignItems:"center" }}>
        <div style={{ flex:"1 1 300px",display:"flex",justifyContent:"center",padding:24 }}>
          <div style={{ background:"rgba(255,255,255,0.06)",borderRadius:20,border:"1px solid rgba(255,255,255,0.08)",padding:32,minHeight:280,display:"flex",alignItems:"center",justifyContent:"center",width:"100%" }}>
            <ProductImage src={p.image} alt={p.name} style={{ maxHeight:260 }} />
          </div>
        </div>
        <div style={{ flex:"1 1 400px" }}>
          <button onClick={() => setPage("products")} style={{ background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",color:"white",padding:"6px 16px",borderRadius:50,fontSize:13,cursor:"pointer",marginBottom:24,fontFamily:"inherit" }}>{tx.back}</button>
          <h1 style={{ fontSize:44,fontWeight:700,color:"white",margin:"0 0 6px" }}>{p.name}</h1>
          <p style={{ fontSize:18,color:AQUA,fontWeight:600,margin:"0 0 18px" }}>{p.tagline}</p>
          <p style={{ fontSize:15,color:"rgba(255,255,255,0.65)",lineHeight:1.75,margin:"0 0 28px" }}>{p.description}</p>
          <button onClick={() => setPage("contact")} style={{ background:AQUA,color:WHITE,border:"none",padding:"14px 32px",borderRadius:8,fontSize:15,fontWeight:600,cursor:"pointer",fontFamily:"inherit" }}>{tx.quote}</button>
        </div>
      </div>
    </section>
    <section style={{ padding:"64px 24px",background:WHITE,direction:isAr?"rtl":"ltr" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <h2 style={{ fontSize:26,fontWeight:700,color:NAVY,marginBottom:28 }}>{tx.features}</h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16 }}>
          {p.features.map((f,i) => <div key={i} style={{ display:"flex",alignItems:"center",gap:14,padding:18,background:LIGHT_BG,borderRadius:10 }}><div style={{ width:8,height:8,borderRadius:"50%",background:AQUA,flexShrink:0 }} /><span style={{ fontSize:14,color:DARK }}>{f}</span></div>)}
        </div>
      </div>
    </section>
    <section style={{ padding:"64px 24px",background:LIGHT_BG,direction:isAr?"rtl":"ltr" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <h2 style={{ fontSize:26,fontWeight:700,color:NAVY,marginBottom:28 }}>{tx.specs}</h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16 }}>
          {Object.entries(p.specs).map(([k,v]) => <div key={k} style={{ background:WHITE,borderRadius:12,padding:24,border:"1px solid #E8EDF2" }}><div style={{ fontSize:11,fontWeight:600,color:AQUA,textTransform:"uppercase",letterSpacing:1.5,marginBottom:8 }}>{k}</div><div style={{ fontSize:17,fontWeight:700,color:NAVY }}>{v}</div></div>)}
        </div>
      </div>
    </section>
    {p.applications && (
      <section style={{ padding:"64px 24px",background:WHITE,direction:isAr?"rtl":"ltr" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <h2 style={{ fontSize:26,fontWeight:700,color:NAVY,marginBottom:28 }}>{tx.apps}</h2>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12 }}>
            {p.applications.map((a,i) => <div key={i} style={{ display:"flex",alignItems:"center",gap:12,padding:16,background:LIGHT_BG,borderRadius:10 }}><div style={{ width:8,height:8,borderRadius:"50%",background:AQUA,flexShrink:0 }} /><span style={{ fontSize:14,color:DARK }}>{a}</span></div>)}
          </div>
        </div>
      </section>
    )}
    <section style={{ padding:"48px 24px",background:LIGHT_BG,direction:isAr?"rtl":"ltr" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <h2 style={{ fontSize:22,fontWeight:700,color:NAVY,marginBottom:20 }}>{tx.other}</h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14 }}>
          {others.map(o => (
            <div key={o.id} onClick={() => { setActiveProduct(o.id); window.scrollTo(0,0); }} style={{ display:"flex",alignItems:"center",gap:16,background:WHITE,borderRadius:12,padding:16,cursor:"pointer",border:"1px solid #E8EDF2" }}>
              <div style={{ width:60,height:60,borderRadius:8,background:LIGHT_BG,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden",padding:4 }}><ProductImage src={o.image} alt={o.name} style={{ maxHeight:52 }} /></div>
              <div><h4 style={{ fontSize:16,fontWeight:700,color:NAVY,margin:"0 0 2px" }}>{o.name}</h4><p style={{ fontSize:13,color:AQUA,margin:0,fontWeight:500 }}>{o.tagline}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);};

const ServicesPage = ({ setPage, lang }) => { const tx = translations[lang].servicesPage; const svcs = getServices(lang); const isAr = lang === "ar"; return (
  <div>
    <section style={{ background:"linear-gradient(160deg,"+DARK+","+NAVY+")",padding:"130px 24px 70px",textAlign:"center",direction:isAr?"rtl":"ltr" }}>
      <Logo light height={32} />
      <h1 style={{ fontSize:42,fontWeight:700,color:"white",margin:"20px 0 14px" }}>{tx.title}</h1>
      <p style={{ fontSize:16,color:"rgba(255,255,255,0.6)",maxWidth:580,margin:"0 auto",lineHeight:1.7 }}>{tx.subtitle}</p>
    </section>
    <section style={{ padding:"64px 24px",background:LIGHT_BG,direction:isAr?"rtl":"ltr" }}>
      <div style={{ maxWidth:900,margin:"0 auto" }}>
        {svcs.map((s,i) => (
          <div key={i} style={{ display:"flex",gap:20,alignItems:"flex-start",background:WHITE,borderRadius:14,padding:28,marginBottom:16,border:"1px solid #E8EDF2" }}>
            <div style={{ width:52,height:52,borderRadius:12,background:AQUA+"0D",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>{svcIcons[i]}</div>
            <div><h3 style={{ fontSize:18,fontWeight:700,color:NAVY,margin:"0 0 6px" }}>{s.title}</h3><p style={{ fontSize:14,color:GREY_TEXT,lineHeight:1.7,margin:0 }}>{s.desc}</p></div>
          </div>
        ))}
      </div>
    </section>
    <CTASection setPage={setPage} lang={lang} />
  </div>
);};

const ContactPage = ({ lang }) => { const tx = translations[lang].contactPage; const offices = translations[lang].offices; const isAr = lang === "ar"; const [formType, setFormType] = useState("customer"); return (
  <div>
    <section style={{ background:"linear-gradient(160deg,"+DARK+","+NAVY+")",padding:"130px 24px 70px",textAlign:"center",direction:isAr?"rtl":"ltr" }}>
      <Logo light height={32} />
      <h1 style={{ fontSize:42,fontWeight:700,color:"white",margin:"20px 0 14px" }}>{tx.title}</h1>
      <p style={{ fontSize:16,color:"rgba(255,255,255,0.6)",maxWidth:500,margin:"0 auto",lineHeight:1.7 }}>{tx.subtitle}</p>
    </section>
    <section style={{ padding:"64px 24px",background:LIGHT_BG,direction:isAr?"rtl":"ltr" }}>
      <div style={{ maxWidth:900,margin:"0 auto",display:"flex",gap:32,flexWrap:"wrap" }}>
        <div style={{ flex:"1 1 360px" }}>
          <div style={{ background:WHITE,borderRadius:16,padding:32,border:"1px solid #E8EDF2" }}>
            <div style={{ display:"flex",gap:8,marginBottom:28 }}>
              {["customer","investor"].map(tp => <button key={tp} onClick={() => setFormType(tp)} style={{ flex:1,padding:"10px 0",borderRadius:8,border:formType===tp?"2px solid "+AQUA:"2px solid #E8EDF2",background:formType===tp?AQUA+"08":WHITE,color:formType===tp?NAVY:GREY_TEXT,fontWeight:600,fontSize:13,cursor:"pointer",fontFamily:"inherit" }}>{tp==="customer"?tx.custBtn:tx.invBtn}</button>)}
            </div>
            {[...tx.fields, formType==="customer"?tx.custField:tx.invField].map((label,i) => <div key={i} style={{ marginBottom:16 }}><label style={{ fontSize:12,fontWeight:600,color:NAVY,display:"block",marginBottom:6 }}>{label}</label><input style={{ width:"100%",padding:"11px 14px",borderRadius:8,border:"1.5px solid #D1D5DB",fontSize:14,boxSizing:"border-box",fontFamily:"inherit",textAlign:isAr?"right":"left" }} placeholder={label} /></div>)}
            <div style={{ marginBottom:20 }}><label style={{ fontSize:12,fontWeight:600,color:NAVY,display:"block",marginBottom:6 }}>{tx.msgLabel}</label><textarea rows={4} style={{ width:"100%",padding:"11px 14px",borderRadius:8,border:"1.5px solid #D1D5DB",fontSize:14,resize:"vertical",boxSizing:"border-box",fontFamily:"inherit",textAlign:isAr?"right":"left" }} placeholder={tx.msgPlaceholder} /></div>
            <button style={{ width:"100%",background:AQUA,color:WHITE,border:"none",padding:"14px",borderRadius:8,fontSize:15,fontWeight:600,cursor:"pointer",fontFamily:"inherit" }}>{tx.sendBtn}</button>
          </div>
        </div>
        <div style={{ flex:"1 1 260px" }}>
          <div style={{ background:WHITE,borderRadius:16,padding:28,border:"1px solid #E8EDF2",marginBottom:16 }}>
            <h3 style={{ fontSize:18,fontWeight:700,color:NAVY,margin:"0 0 20px" }}>{tx.offices}</h3>
            {offices.map((city,i) => <div key={i} style={{ display:"flex",gap:12,marginBottom:16,alignItems:"center" }}><MapPinIcon /><div style={{ fontSize:14,fontWeight:600,color:NAVY }}>{city}</div></div>)}
          </div>
          <div style={{ background:WHITE,borderRadius:16,padding:28,border:"1px solid #E8EDF2" }}>
            <h3 style={{ fontSize:18,fontWeight:700,color:NAVY,margin:"0 0 20px" }}>{tx.directContact}</h3>
            <div style={{ display:"flex",gap:12,marginBottom:14,alignItems:"center" }}><MailIcon /><span style={{ fontSize:14,color:DARK }}>admin@aquacube.info</span></div>
            <div style={{ display:"flex",gap:12,alignItems:"center" }}><PhoneIcon /><span style={{ fontSize:14,color:DARK,direction:"ltr",unicodeBidi:"embed" }}>+962 79 150 79 49</span></div>
          </div>
        </div>
      </div>
    </section>
  </div>
);};

const Footer = ({ setPage, setActiveProduct, lang }) => { const tx = translations[lang].footer; const navTx = translations[lang].nav; const prods = getProducts(lang); const isAr = lang === "ar"; return (
  <footer style={{ background:DARK,padding:"56px 24px 24px",borderTop:"3px solid "+AQUA,direction:isAr?"rtl":"ltr" }}>
    <div style={{ maxWidth:1200,margin:"0 auto" }}>
      <div style={{ display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:36,marginBottom:44 }}>
        <div style={{ minWidth:220 }}>
          <Logo light height={32} />
          <p style={{ fontSize:13,color:"rgba(255,255,255,0.4)",marginTop:14,maxWidth:280,lineHeight:1.65 }}>{tx.desc}</p>
          <div style={{ marginTop:16,display:"flex",flexDirection:"column",gap:8 }}>
            <div style={{ display:"flex",gap:8,alignItems:"center" }}><MailIcon /><span style={{ fontSize:12,color:"rgba(255,255,255,0.5)" }}>admin@aquacube.info</span></div>
            <div style={{ display:"flex",gap:8,alignItems:"center" }}><PhoneIcon /><span style={{ fontSize:12,color:"rgba(255,255,255,0.5)",direction:"ltr",unicodeBidi:"embed" }}>+962 79 150 79 49</span></div>
          </div>
        </div>
        <div style={{ display:"flex",gap:56,flexWrap:"wrap" }}>
          <div>
            <h4 style={{ fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:2,marginBottom:16 }}>{tx.productsLabel}</h4>
            {prods.map(p => <div key={p.id} onClick={() => { setActiveProduct(p.id); setPage("product-detail"); }} style={{ fontSize:13,color:"rgba(255,255,255,0.55)",marginBottom:10,cursor:"pointer" }}>{p.name}</div>)}
          </div>
          <div>
            <h4 style={{ fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:2,marginBottom:16 }}>{tx.companyLabel}</h4>
            {[[navTx.products,"products"],[navTx.services,"services"],[navTx.contact,"contact"]].map(([l,id]) => <div key={id} onClick={() => setPage(id)} style={{ fontSize:13,color:"rgba(255,255,255,0.55)",marginBottom:10,cursor:"pointer" }}>{l}</div>)}
          </div>
        </div>
      </div>
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:20 }}>
        <p style={{ fontSize:11,color:"rgba(255,255,255,0.25)",margin:0 }}>{tx.copyright}</p>
      </div>
    </div>
  </footer>
);};

const ScrollTop = () => { const [show, setShow] = useState(false); useEffect(() => { const h = () => setShow(window.scrollY > 500); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []); if (!show) return null; return <button onClick={() => window.scrollTo({top:0,behavior:"smooth"})} style={{ position:"fixed",bottom:24,right:24,width:44,height:44,borderRadius:"50%",background:AQUA,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(31,180,186,0.4)",zIndex:999 }}><ArrowUpIcon /></button>;};

/* ══════════════════════════════════════════════
   APP ROOT
   ══════════════════════════════════════════════ */
export default function App() {
  const [page, setPage] = useState("home");
  const [activeProduct, setActiveProduct] = useState("greybox");
  const [lang, setLang] = useState("en");
  const solutionsRef = useRef(null);
  const navigate = (p) => { setPage(p); window.scrollTo({top:0,behavior:"smooth"}); };

  return (
    <div style={{ fontFamily: lang==="ar" ? "'Segoe UI','Tahoma','Arial',sans-serif" : "system-ui,-apple-system,'Segoe UI',sans-serif", minHeight:"100vh", background:WHITE }}>
      <style>{`
        *{box-sizing:border-box;margin:0}
        input:focus,textarea:focus{outline:none;border-color:${AQUA} !important}
        button{transition:opacity 0.2s}
        button:hover{opacity:0.9}
        ::selection{background:${AQUA}30}
        @media(max-width:768px){
          .nav-desktop{display:none !important}
          .nav-mobile-btn{display:flex !important}
          .nav-mobile-menu{display:flex !important}
        }
      `}</style>
      <Nav page={page} setPage={navigate} lang={lang} setLang={setLang} />
      {page==="home" && <><Hero setPage={navigate} solutionsRef={solutionsRef} lang={lang} /><ProductCards setPage={navigate} setActiveProduct={setActiveProduct} solutionsRef={solutionsRef} lang={lang} /><WhySection lang={lang} /><SectorsSection lang={lang} /><CTASection setPage={navigate} lang={lang} /></>}
      {page==="products" && <ProductsHub setPage={navigate} setActiveProduct={setActiveProduct} lang={lang} />}
      {page==="product-detail" && <ProductDetail productId={activeProduct} setPage={navigate} setActiveProduct={setActiveProduct} lang={lang} />}
      {page==="services" && <ServicesPage setPage={navigate} lang={lang} />}
      {page==="contact" && <ContactPage lang={lang} />}
      <Footer setPage={navigate} setActiveProduct={setActiveProduct} lang={lang} />
      <ScrollTop />
    </div>
  );
}
