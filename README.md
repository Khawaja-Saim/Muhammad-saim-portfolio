# Muhammad Saim — VIP Flutter Developer Portfolio

An ultra-modern, high-performance portfolio website built with **React + Vite + Tailwind CSS**, featuring the exact VIP animations inspired by the award-winning developer portfolio.

---

## 🌟 Key Features & Animations Included

1. **Concentric Rings Experience Loader**:
   - Initial cinematic dark screen (`#0c0c0c`) with concentric pulsing, spinning, and pinging rings.
   - Glowing center badge with initials **"KS"**.
   - "Loading Experience..." text that smoothly transitions into the website.

2. **Custom Dual-Element Interactive Cursor**:
   - Smooth lerp lag ring following the cursor.
   - Automatically expands over clickable buttons, links, and cards.
   - Dynamic scaling on mousedown / click.

3. **Full Canvas Particle Trail**:
   - High-performance HTML5 Canvas emitting radiant particles (`#ff6b35`, `#ff8c5a`, `#f7c59f`) that fade and shrink behind cursor movements.

4. **Dual Scroll Progress Indicator**:
   - Top edge gradient progress line.
   - Bottom-right floating **Circular SVG Ring** displaying exact real-time scroll percentage (`0%` to `100%`) with smooth click-to-scroll-to-top.

5. **Dynamic Typewriter Effect**:
   - Hero section auto-typing and deleting multiple roles:
     - *Senior Flutter Developer*
     - *Cross-Platform Architect*
     - *iOS & Android Specialist*
     - *AI & Mobile Apps Engineer*

6. **Animated Number Counters**:
   - Viewport-aware counting up animation for:
     - **3+** Years Experience
     - **30+** Apps Built
     - **2** Tech Companies
     - **5+** Live on Stores

7. **3D Perspective Tilt Portfolio Cards**:
   - Filterable projects tab (All, Live on Stores, AI Apps, Social).
   - Real app icons (`mja_app_icon.png`, `cognize_app_icon.png`, `salomo_app_icon.png`, `earnovate_icon.png`, `social_app_icon.png`).
   - Interactive Modal with detailed breakdown, tags, and direct Play Store / App Store links.

8. **Direct WhatsApp One-Click Chat & Contact**:
   - Floating and dedicated WhatsApp button (+92 324 5352293).
   - Interactive form that pre-formats the message directly to WhatsApp.

---

## 📁 How to Customize Data

All portfolio data is kept in **one single file**:
`src/data/portfolioData.ts`

To update your bio, apps, store links, phone numbers, or social handles, simply open [portfolioData.ts](file:///C:/Users/Saim/.gemini/antigravity/scratch/khawaja-saim-portfolio/src/data/portfolioData.ts) and edit the fields. The whole website auto-updates immediately!

---

## 🚀 How to Run the Project

Open your terminal inside this folder:
```bash
# 1. Start the local development server:
npm run dev

# 2. Build for production:
npm run build

# 3. Preview production build:
npm run preview
```

Or simply open `preview.html` directly in your browser without any terminal!
