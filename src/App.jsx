import { useState, useEffect } from "react";

const AQUA = "#1FB4BA";
const NAVY = "#093D79";
const LIGHT_BG = "#F7FAFB";
const WHITE = "#FFFFFF";
const DARK = "#0A1628";
const GREY_TEXT = "#5A6B7F";

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
  heroLifestyle: "",
};

const isReal = (url) => url && url.startsWith("/");

const ProductImage = ({ src, alt, style = {} }) => {
  if (isReal(src)) {
    return <img src={src} alt={alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", ...style }} />;
  }
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, ...style }}>
      <svg width="48" height="48" viewBox="0 0 50 50" fill="none">
        <path d="M25 4L38 12V28L25 36L12 28V12L25 4Z" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
        <path d="M25 11C25 11 20 18 20 22C20 24.8 22.2 27 25 27C27.8 27 30 24.8 30 22C30 18 25 11 25 11Z" fill={AQUA} opacity="0.6"/>
      </svg>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: 1 }}>{alt}</span>
    </div>
  );
};

const Logo = ({ light = false, height = 40 }) => {
  const src = light ? IMAGES.logoLight : IMAGES.logoDark;
  if (isReal(src)) {
    return <img src={src} alt="AquaCube" style={{ height: height * 2, cursor: "pointer" }} />;
  }
  const textColor = light ? "white" : NAVY;
  return (
    <svg height={height} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: "pointer" }}>
      <path d="M25 4L38 12V28L25 36L12 28V12L25 4Z" stroke={light ? "rgba(255,255,255,0.8)" : NAVY} strokeWidth="1.8" fill="none"/>
      <path d="M25 11C25 11 20 18 20 22C20 24.8 22.2 27 25 27C27.8 27 30 24.8 30 22C30 18 25 11 25 11Z" fill={AQUA}/>
      <path d="M19 30C19 30 21 32 25 32C29 32 31 30 31 30" stroke={AQUA} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M20.5 33C20.5 33 22 34.5 25 34.5C28 34.5 29.5 33 29.5 33" stroke={AQUA} strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      <path d="M22 35.5C22 35.5 23 36.5 25 36.5C27 36.5 28 35.5 28 35.5" stroke={AQUA} strokeWidth="1" fill="none" strokeLinecap="round"/>
      <text x="48" y="24" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="400" fill={textColor}>Aqua</text>
      <text x="93" y="24" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" fill={AQUA}>Cube</text>
      <text x="48" y="40" fontFamily="system-ui, sans-serif" fontSize="10" fill={AQUA} letterSpacing="1.5">أكــوا كيــوب</text>
    </svg>
  );
};

const ChevronRight = ({ color = AQUA }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>;
const WifiIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>;
const ShieldIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const SunIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>;
const CubeIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>;
const ToolIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const GlobeIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>;
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MapPinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={AQUA} strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const ArrowUpIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg>;

const products = [
  {
    id: "greybox", name: "GreyBox", tagline: "Greywater Treatment System",
    color: "#6B7280", image: IMAGES.greybox,
    description: "Advanced greywater recycling unit designed for residential, commercial, and institutional applications. Treats shower, sink, and laundry water for safe reuse in irrigation and non-potable applications.",
    features: ["Multi-stage filtration", "IoT-enabled monitoring dashboard", "Solar panel compatible", "Compact vertical design with casters", "In/Out pipe connections", "Real-time water quality display"],
    specs: { capacity: "1,000 – 5,000 L/day", dimensions: "600 × 600 × 1,400 mm", power: "Solar / Grid hybrid", monitoring: "Built-in touchscreen + remote IoT" },
    gradient: "linear-gradient(135deg, #4B5563, #374151)"
  },
  {
    id: "greenbox", name: "GreenBox", tagline: "Smart Aquaponics Module",
    color: "#166534", image: IMAGES.greenbox,
    description: "Decoupled smart aquaponics system designed for arid and semi-arid climates. Combines fish farming with soilless plant cultivation in a modular, water-efficient enclosed system.",
    features: ["Decoupled aquaponics design", "Climate-controlled environment", "Nutrient cycling automation", "Top-mounted monitoring display", "Heavy-duty construction", "Ideal for GCC/arid regions"],
    specs: { capacity: "50 – 200 kg fish/cycle", dimensions: "1,200 × 600 × 900 mm", power: "Grid / Solar optional", monitoring: "Integrated touchscreen panel" },
    gradient: "linear-gradient(135deg, #166534, #14532d)"
  },
  {
    id: "whitebox", name: "WhiteBox", tagline: "Drinking Water Purification",
    color: "#94A3B8", image: IMAGES.whitebox,
    description: "Multi-stage drinking water purification unit delivering safe, clean potable water. Designed for households, schools, clinics, and community facilities in water-stressed regions.",
    features: ["RO + UV purification stages", "TDS and pH monitoring", "Compact horizontal footprint", "Stainless steel build", "Low maintenance design", "Meets WHO drinking water standards"],
    specs: { capacity: "500 – 3,000 L/day", dimensions: "1,000 × 500 × 700 mm", power: "Grid powered", monitoring: "Top-mount LCD panel" },
    gradient: "linear-gradient(135deg, #64748B, #475569)"
  },
  {
    id: "bluebox", name: "BlueBox", tagline: "Wastewater Recycling Unit",
    color: NAVY, image: IMAGES.bluebox,
    description: "Industrial-grade wastewater treatment and recycling system for commercial and municipal applications. Advanced biological and chemical treatment stages ensure compliance with discharge and reuse standards.",
    features: ["Advanced biological treatment", "Full IoT dashboard with filter health", "pH, TDS, and flow rate monitoring", "Compact vertical design", "In/Out connection ports", "Regulatory compliance ready"],
    specs: { capacity: "5,000 – 20,000 L/day", dimensions: "600 × 600 × 1,400 mm", power: "Grid / Generator", monitoring: "7\" touchscreen + cloud dashboard" },
    gradient: `linear-gradient(135deg, ${NAVY}, #061E47)`
  }
];

const services = [
  { icon: <ToolIcon />, title: "Consultation & Feasibility Studies", desc: "Site assessment, water audit, and technical feasibility analysis tailored to your location and requirements." },
  { icon: <CubeIcon />, title: "System Design & Customization", desc: "Custom-configured AquaCube systems matched to your capacity, space, and water quality requirements." },
  { icon: <ShieldIcon />, title: "Installation & Commissioning", desc: "Professional on-site installation, system calibration, and performance verification by certified engineers." },
  { icon: <WifiIcon />, title: "IoT Monitoring & Maintenance", desc: "24/7 remote monitoring, predictive maintenance alerts, and scheduled service visits to ensure peak performance." },
  { icon: <GlobeIcon />, title: "Training & Capacity Building", desc: "Comprehensive operator training programs, maintenance manuals, and ongoing technical support." },
  { icon: <SunIcon />, title: "Solar Integration", desc: "Off-grid and hybrid solar power system design and integration for energy-independent water treatment." }
];

const Nav = ({ page, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const solid = scrolled || page !== "home";
  const links = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" }
  ];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: solid ? "rgba(10,22,40,0.97)" : "transparent", backdropFilter: solid ? "blur(20px)" : "none", borderBottom: solid ? "1px solid rgba(255,255,255,0.06)" : "none", transition: "all 0.3s", padding: "0 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div onClick={() => setPage("home")}><Logo light height={52} /></div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map(l => (
            <button key={l.id} onClick={() => setPage(l.id)} style={{ background: "none", border: "none", color: page === l.id ? AQUA : "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: page === l.id ? 600 : 400, cursor: "pointer", padding: "8px 4px", borderBottom: page === l.id ? `2px solid ${AQUA}` : "2px solid transparent", transition: "all 0.2s", fontFamily: "inherit" }}>{l.label}</button>
          ))}
          <button onClick={() => setPage("contact")} style={{ background: AQUA, color: WHITE, border: "none", padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Get in Touch</button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ setPage }) => (
  <section style={{ background: `linear-gradient(160deg, ${DARK} 0%, ${NAVY} 60%, #0D5070 100%)`, minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "100px 24px 80px" }}>
    <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(31,180,186,0.6) 1px, transparent 0)", backgroundSize: "48px 48px" }} />
    <div style={{ position: "absolute", top: "5%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(31,180,186,0.06) 0%, transparent 70%)" }} />
    <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 60, width: "100%", flexWrap: "wrap" }}>
      <div style={{ flex: "1 1 400px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(31,180,186,0.08)", border: "1px solid rgba(31,180,186,0.15)", borderRadius: 50, padding: "8px 18px", marginBottom: 28 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: AQUA }} />
          <span style={{ color: AQUA, fontSize: 13, fontWeight: 500, letterSpacing: "0.5px" }}>Modular Smart Water Solutions</span>
        </div>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 700, color: "white", lineHeight: 1.12, margin: "0 0 24px", letterSpacing: "-0.5px" }}>
          Clean Water,{" "}<span style={{ color: AQUA }}>Smart Technology</span><br />for Arid Climates
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: "0 0 40px", maxWidth: 500 }}>
          AquaCube delivers modular, IoT-enabled water treatment systems designed for the MENA region. From greywater recycling to drinking water purification — deployed where it matters most.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button onClick={() => setPage("products")} style={{ background: AQUA, color: WHITE, border: "none", padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Explore Products</button>
          <button onClick={() => setPage("contact")} style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.25)", padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Partner With Us</button>
        </div>
        <div style={{ display: "flex", gap: 48, marginTop: 56 }}>
          {[["4", "Product Lines"], ["3+", "Countries"], ["IoT", "Enabled"]].map(([n, l], i) => (
            <div key={i}>
              <div style={{ fontSize: 30, fontWeight: 700, color: AQUA }}>{n}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4, letterSpacing: "0.5px" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: "1 1 360px", display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -40, borderRadius: "50%", background: "radial-gradient(circle, rgba(31,180,186,0.1) 0%, transparent 70%)" }} />
          <div style={{ position: "relative", background: "rgba(255,255,255,0.03)", borderRadius: 24, border: "1px solid rgba(255,255,255,0.06)", padding: 32, minWidth: 320, minHeight: 360, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ProductImage src={IMAGES.productFamily} alt="AquaCube Product Family" style={{ maxHeight: 300 }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductCards = ({ setPage, setActiveProduct }) => (
  <section style={{ padding: "96px 24px", background: WHITE }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ color: AQUA, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 3 }}>Our Solutions</span>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: NAVY, margin: "14px 0 16px" }}>Four Products, One Mission</h2>
        <p style={{ fontSize: 16, color: GREY_TEXT, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>Each AquaCube module targets a specific water challenge — designed to work independently or as an integrated system.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {products.map(p => (
          <div key={p.id} onClick={() => { setActiveProduct(p.id); setPage("product-detail"); }}
            style={{ background: WHITE, borderRadius: 16, padding: 24, cursor: "pointer", border: "1px solid #E8EDF2", transition: "all 0.3s ease" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(9,61,121,0.1)"; e.currentTarget.style.borderColor = AQUA + "40"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = "#E8EDF2"; }}>
            <div style={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center", background: LIGHT_BG, borderRadius: 12, marginBottom: 18, overflow: "hidden", padding: 16 }}>
              <ProductImage src={p.image} alt={p.name} style={{ maxHeight: 160 }} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: NAVY, margin: "0 0 4px" }}>{p.name}</h3>
            <p style={{ fontSize: 14, color: AQUA, fontWeight: 500, margin: "0 0 10px" }}>{p.tagline}</p>
            <p style={{ fontSize: 13, color: GREY_TEXT, lineHeight: 1.65, margin: "0 0 14px" }}>{p.description.slice(0, 110)}...</p>
            <div style={{ display: "flex", alignItems: "center", gap: 4, color: AQUA, fontSize: 13, fontWeight: 600 }}>View Details <ChevronRight /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhySection = () => (
  <section style={{ padding: "96px 24px", background: NAVY }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ color: AQUA, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 3 }}>Why AquaCube</span>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: "white", margin: "14px 0" }}>Built for the Region's Toughest Challenges</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        {[
          { icon: <CubeIcon />, title: "Modular Design", desc: "Deploy single units or combine into integrated systems. Scale on demand." },
          { icon: <WifiIcon />, title: "IoT-Enabled", desc: "Real-time monitoring, remote diagnostics, and predictive maintenance via cloud." },
          { icon: <SunIcon />, title: "Solar Compatible", desc: "Off-grid ready with hybrid solar/grid power for remote deployments." },
          { icon: <ShieldIcon />, title: "Arid-Climate Proven", desc: "Engineered for high-temperature, low-humidity MENA environments." },
          { icon: <GlobeIcon />, title: "Local Production", desc: "Manufactured in Egypt, serviced regionally — reducing cost and lead times." },
          { icon: <ToolIcon />, title: "Full Lifecycle Support", desc: "From feasibility to maintenance — we're with you at every step." }
        ].map((item, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 28, border: "1px solid rgba(255,255,255,0.06)", transition: "all 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}>
            <div style={{ marginBottom: 14 }}>{item.icon}</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", margin: "0 0 8px" }}>{item.title}</h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MarketSection = () => (
  <section style={{ padding: "96px 24px", background: LIGHT_BG }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
      <span style={{ color: AQUA, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 3 }}>Market Opportunity</span>
      <h2 style={{ fontSize: 36, fontWeight: 700, color: NAVY, margin: "14px 0 56px" }}>Serving the World's Most Water-Stressed Region</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
        {[
          { country: "Jordan", flag: "🇯🇴", status: "Primary Market", detail: "JV with Flow Group — pilot & scale" },
          { country: "Saudi Arabia", flag: "🇸🇦", status: "Expansion Market", detail: "Institutional & agricultural demand" },
          { country: "Egypt", flag: "🇪🇬", status: "Production Hub", detail: "Manufacturing & R&D center" },
          { country: "Syria · Iraq · Lebanon", flag: "🌍", status: "Phase 2 Markets", detail: "Post-conflict water infrastructure" }
        ].map((m, i) => (
          <div key={i} style={{ background: WHITE, borderRadius: 14, padding: 28, border: "1px solid #E8EDF2", transition: "all 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 32px rgba(9,61,121,0.06)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = ""}>
            <div style={{ fontSize: 36, marginBottom: 14 }}>{m.flag}</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: "0 0 4px" }}>{m.country}</h3>
            <div style={{ fontSize: 12, fontWeight: 600, color: AQUA, marginBottom: 8, letterSpacing: "0.5px" }}>{m.status}</div>
            <p style={{ fontSize: 13, color: GREY_TEXT, margin: 0, lineHeight: 1.5 }}>{m.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = ({ setPage }) => (
  <section style={{ padding: "80px 24px", background: `linear-gradient(160deg, ${NAVY}, ${DARK})`, textAlign: "center" }}>
    <div style={{ marginBottom: 20 }}><Logo light height={48} /></div>
    <h2 style={{ fontSize: 32, fontWeight: 700, color: "white", margin: "0 0 14px" }}>Ready to Transform Your Water Management?</h2>
    <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>Join the growing network deploying AquaCube solutions across the MENA region.</p>
    <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
      <button onClick={() => setPage("contact")} style={{ background: AQUA, color: WHITE, border: "none", padding: "14px 36px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Request a Demo</button>
      <button onClick={() => setPage("contact")} style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.2)", padding: "14px 36px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Become a Partner</button>
    </div>
  </section>
);

const ProductsHub = ({ setPage, setActiveProduct }) => (
  <div>
    <section style={{ background: `linear-gradient(160deg, ${DARK}, ${NAVY})`, padding: "130px 24px 70px", textAlign: "center" }}>
      <Logo light height={48} />
      <h1 style={{ fontSize: 42, fontWeight: 700, color: "white", margin: "20px 0 14px" }}>AquaCube Product Family</h1>
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>Four modular water treatment solutions — designed to operate independently or as a complete integrated water management system.</p>
    </section>
    <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {products.map((p, i) => (
          <div key={p.id} onClick={() => { setActiveProduct(p.id); setPage("product-detail"); }}
            style={{ display: "flex", alignItems: "center", gap: 48, marginBottom: 24, background: WHITE, borderRadius: 18, padding: 36, cursor: "pointer", border: "1px solid #E8EDF2", flexDirection: i % 2 === 1 ? "row-reverse" : "row", flexWrap: "wrap", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(9,61,121,0.08)"; e.currentTarget.style.borderColor = AQUA + "30"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = "#E8EDF2"; }}>
            <div style={{ flex: "1 1 280px", display: "flex", justifyContent: "center", padding: 20, background: LIGHT_BG, borderRadius: 14, minHeight: 240 }}>
              <ProductImage src={p.image} alt={p.name} style={{ maxHeight: 220 }} />
            </div>
            <div style={{ flex: "1 1 400px" }}>
              <h3 style={{ fontSize: 28, fontWeight: 700, color: NAVY, margin: "0 0 4px" }}>{p.name}</h3>
              <p style={{ fontSize: 15, color: AQUA, fontWeight: 600, margin: "0 0 14px" }}>{p.tagline}</p>
              <p style={{ fontSize: 14, color: GREY_TEXT, lineHeight: 1.7, margin: "0 0 18px" }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                {p.features.slice(0, 3).map((f, j) => (
                  <span key={j} style={{ background: `${AQUA}0D`, color: NAVY, fontSize: 12, fontWeight: 500, padding: "5px 14px", borderRadius: 50, border: `1px solid ${AQUA}20` }}>{f}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, color: AQUA, fontSize: 14, fontWeight: 600 }}>View Full Specs <ChevronRight /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const ProductDetail = ({ productId, setPage, setActiveProduct }) => {
  const p = products.find(x => x.id === productId) || products[0];
  const others = products.filter(x => x.id !== productId);
  return (
    <div>
      <section style={{ background: p.gradient, padding: "130px 24px 70px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 48, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center", padding: 24 }}>
            <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", padding: 32, minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
              <ProductImage src={p.image} alt={p.name} style={{ maxHeight: 260 }} />
            </div>
          </div>
          <div style={{ flex: "1 1 400px" }}>
            <button onClick={() => setPage("products")} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white", padding: "6px 16px", borderRadius: 50, fontSize: 13, cursor: "pointer", marginBottom: 24, fontFamily: "inherit" }}>← All Products</button>
            <h1 style={{ fontSize: 44, fontWeight: 700, color: "white", margin: "0 0 6px" }}>{p.name}</h1>
            <p style={{ fontSize: 18, color: AQUA, fontWeight: 600, margin: "0 0 18px" }}>{p.tagline}</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: "0 0 28px" }}>{p.description}</p>
            <button onClick={() => setPage("contact")} style={{ background: AQUA, color: WHITE, border: "none", padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Request Quote</button>
          </div>
        </div>
      </section>
      <section style={{ padding: "64px 24px", background: WHITE }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: NAVY, marginBottom: 28 }}>Key Features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {p.features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: 18, background: LIGHT_BG, borderRadius: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: AQUA, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: DARK }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: NAVY, marginBottom: 28 }}>Technical Specifications</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {Object.entries(p.specs).map(([k, v]) => (
              <div key={k} style={{ background: WHITE, borderRadius: 12, padding: 24, border: "1px solid #E8EDF2" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: AQUA, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>{k}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: NAVY }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "48px 24px", background: WHITE }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 20 }}>Other Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {others.map(o => (
              <div key={o.id} onClick={() => { setActiveProduct(o.id); window.scrollTo(0, 0); }}
                style={{ display: "flex", alignItems: "center", gap: 16, background: LIGHT_BG, borderRadius: 12, padding: 16, cursor: "pointer", border: "1px solid #E8EDF2", transition: "all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = AQUA + "40"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#E8EDF2"}>
                <div style={{ width: 60, height: 60, borderRadius: 8, background: WHITE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden", padding: 4 }}>
                  <ProductImage src={o.image} alt={o.name} style={{ maxHeight: 52 }} />
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: NAVY, margin: "0 0 2px" }}>{o.name}</h4>
                  <p style={{ fontSize: 13, color: AQUA, margin: 0, fontWeight: 500 }}>{o.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ setPage }) => (
  <div>
    <section style={{ background: `linear-gradient(160deg, ${DARK}, ${NAVY})`, padding: "130px 24px 70px", textAlign: "center" }}>
      <Logo light height={48} />
      <h1 style={{ fontSize: 42, fontWeight: 700, color: "white", margin: "20px 0 14px" }}>End-to-End Services</h1>
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>From initial assessment to ongoing maintenance, AquaCube provides comprehensive water management services across the project lifecycle.</p>
    </section>
    <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {services.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", background: WHITE, borderRadius: 14, padding: 28, marginBottom: 16, border: "1px solid #E8EDF2", transition: "all 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = AQUA + "30"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#E8EDF2"}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: `${AQUA}0D`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${AQUA}15` }}>{s.icon}</div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: "0 0 6px" }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: GREY_TEXT, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <CTASection setPage={setPage} />
  </div>
);

const ContactPage = () => {
  const [formType, setFormType] = useState("customer");
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${DARK}, ${NAVY})`, padding: "130px 24px 70px", textAlign: "center" }}>
        <Logo light height={48} />
        <h1 style={{ fontSize: 42, fontWeight: 700, color: "white", margin: "20px 0 14px" }}>Let's Talk Water</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>Whether you're a customer, investor, or partner — we'd love to hear from you.</p>
      </section>
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 32, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 360px" }}>
            <div style={{ background: WHITE, borderRadius: 16, padding: 32, border: "1px solid #E8EDF2" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
                {["customer", "investor"].map(t => (
                  <button key={t} onClick={() => setFormType(t)} style={{ flex: 1, padding: "10px 0", borderRadius: 8, border: formType === t ? `2px solid ${AQUA}` : "2px solid #E8EDF2", background: formType === t ? `${AQUA}08` : WHITE, color: formType === t ? NAVY : GREY_TEXT, fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
                    {t === "customer" ? "Customer Inquiry" : "Investor / Partner"}
                  </button>
                ))}
              </div>
              {["Full Name", "Email Address", "Organization", formType === "customer" ? "Country / Region" : "Investment Focus"].map((label, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: NAVY, display: "block", marginBottom: 6 }}>{label}</label>
                  <input style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid #D1D5DB", fontSize: 14, boxSizing: "border-box", fontFamily: "inherit" }} placeholder={label} />
                </div>
              ))}
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: NAVY, display: "block", marginBottom: 6 }}>Message</label>
                <textarea rows={4} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid #D1D5DB", fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} placeholder="Tell us about your needs..." />
              </div>
              <button style={{ width: "100%", background: AQUA, color: WHITE, border: "none", padding: "14px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Send Message</button>
            </div>
          </div>
          <div style={{ flex: "1 1 260px" }}>
            <div style={{ background: WHITE, borderRadius: 16, padding: 28, border: "1px solid #E8EDF2", marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: "0 0 20px" }}>Our Offices</h3>
              {[
                { city: "Amman, Jordan", detail: "Regional HQ & Operations" },
                { city: "Cairo, Egypt", detail: "Manufacturing & R&D" },
                { city: "Riyadh, Saudi Arabia", detail: "GCC Market Development" }
              ].map((o, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                  <MapPinIcon />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: NAVY }}>{o.city}</div>
                    <div style={{ fontSize: 12, color: GREY_TEXT }}>{o.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: WHITE, borderRadius: 16, padding: 28, border: "1px solid #E8EDF2" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: "0 0 20px" }}>Direct Contact</h3>
              <div style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "center" }}>
                <MailIcon /><span style={{ fontSize: 14, color: DARK }}>info@aquacube.tech</span>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <PhoneIcon /><span style={{ fontSize: 14, color: DARK }}>+962 6 XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer = ({ setPage, setActiveProduct }) => (
  <footer style={{ background: DARK, padding: "56px 24px 24px", borderTop: `3px solid ${AQUA}` }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 36, marginBottom: 44 }}>
        <div style={{ minWidth: 220 }}>
          <Logo light height={48} />
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 14, maxWidth: 260, lineHeight: 1.65 }}>Modular smart water treatment solutions engineered for the MENA region.</p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Products</h4>
            {products.map(p => (
              <div key={p.id} onClick={() => { setActiveProduct(p.id); setPage("product-detail"); }} style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 10, cursor: "pointer" }}>{p.name}</div>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Company</h4>
            {[["Products", "products"], ["Services", "services"], ["Contact", "contact"]].map(([l, id]) => (
              <div key={id} onClick={() => setPage(id)} style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 10, cursor: "pointer" }}>{l}</div>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Markets</h4>
            {["Jordan", "Saudi Arabia", "Egypt"].map(m => (
              <div key={m} style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 10 }}>{m}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", margin: 0 }}>© 2026 AquaCube. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const ScrollTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: 24, right: 24, width: 44, height: 44, borderRadius: "50%", background: AQUA, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(31,180,186,0.4)", zIndex: 999 }}>
      <ArrowUpIcon />
    </button>
  );
};

export default function App() {
  const [page, setPage] = useState("home");
  const [activeProduct, setActiveProduct] = useState("greybox");
  const navigate = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif", minHeight: "100vh", background: WHITE }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; }
        input:focus, textarea:focus { outline: none; border-color: ${AQUA} !important; }
        button { transition: opacity 0.2s; }
        button:hover { opacity: 0.9; }
        ::selection { background: ${AQUA}30; }
      `}</style>
      <Nav page={page} setPage={navigate} />
      {page === "home" && <><Hero setPage={navigate} /><ProductCards setPage={navigate} setActiveProduct={setActiveProduct} /><WhySection /><MarketSection /><CTASection setPage={navigate} /></>}
      {page === "products" && <ProductsHub setPage={navigate} setActiveProduct={setActiveProduct} />}
      {page === "product-detail" && <ProductDetail productId={activeProduct} setPage={navigate} setActiveProduct={setActiveProduct} />}
      {page === "services" && <ServicesPage setPage={navigate} />}
      {page === "contact" && <ContactPage />}
      <Footer setPage={navigate} setActiveProduct={setActiveProduct} />
      <ScrollTop />
    </div>
  );
}
