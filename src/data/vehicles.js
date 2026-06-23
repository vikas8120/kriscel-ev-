function makeScootySvg(label) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#eff8ff"/>
        <stop offset="48%" stop-color="#dff7ff"/>
        <stop offset="100%" stop-color="#f7fbff"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1888ff"/>
        <stop offset="100%" stop-color="#46f3ff"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="900" rx="48" fill="url(#bg)"/>
    <circle cx="170" cy="170" r="110" fill="#b8e4ff" opacity="0.45"/>
    <circle cx="1030" cy="150" r="130" fill="#b0f7ff" opacity="0.45"/>
    <rect x="120" y="110" width="960" height="620" rx="52" fill="#ffffff" opacity="0.9"/>
    <path d="M260 470C320 365 435 320 560 320C715 320 812 380 890 452L842 535H292L260 470Z" fill="#10182d"/>
    <circle cx="355" cy="560" r="74" fill="#10182d"/>
    <circle cx="355" cy="560" r="36" fill="url(#accent)"/>
    <circle cx="805" cy="560" r="74" fill="#10182d"/>
    <circle cx="805" cy="560" r="36" fill="url(#accent)"/>
    <rect x="465" y="344" width="240" height="62" rx="31" fill="url(#accent)"/>
    <rect x="470" y="210" width="260" height="84" rx="42" fill="#dff7ff"/>
    <text x="600" y="820" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#0f172a">${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function makeBikeSvg(label) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#eef8ff"/>
        <stop offset="45%" stop-color="#d7f6ff"/>
        <stop offset="100%" stop-color="#f6fbff"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1888ff"/>
        <stop offset="100%" stop-color="#46f3ff"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="900" rx="48" fill="url(#bg)"/>
    <circle cx="180" cy="160" r="110" fill="#d2ecff" opacity="0.45"/>
    <circle cx="1020" cy="160" r="150" fill="#b0f7ff" opacity="0.45"/>
    <rect x="110" y="110" width="980" height="620" rx="52" fill="#ffffff" opacity="0.9"/>
    <path d="M290 500L490 360H690L800 480L760 545H350L290 500Z" fill="#0f172a"/>
    <path d="M500 360L575 480H420L500 360Z" fill="#2a3558"/>
    <circle cx="370" cy="565" r="78" fill="#0f172a"/>
    <circle cx="370" cy="565" r="38" fill="url(#accent)"/>
    <circle cx="830" cy="565" r="78" fill="#0f172a"/>
    <circle cx="830" cy="565" r="38" fill="url(#accent)"/>
    <rect x="505" y="275" width="165" height="64" rx="32" fill="url(#accent)"/>
    <path d="M603 282L710 232" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
    <text x="600" y="820" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#0f172a">${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const vehicles = [
  {
    id: 's1',
    name: 'Kriscel S1',
    type: 'Scooty',
    range: 160,
    speed: 75,
    chargingTime: 45,
    battery: '4.6 kWh Lithium-Ion',
    warranty: '4 years',
    price: 124900,
    image: '/assets/voltedge-s1.png',
    heroImage: '/assets/voltedge-s1.png',
    features: ['Smart app lock', 'Reverse assist', 'Riding modes', 'LED matrix lighting'],
    colors: ['Arctic White', 'Graphite Black', 'Aqua Cyan'],
    description:
      'A luxury city scooty tuned for silent acceleration, premium comfort, and daily smart mobility.',
  },
  {
    id: 's1-pro',
    name: 'Kriscel S1 Pro',
    type: 'Scooty',
    range: 210,
    speed: 90,
    chargingTime: 35,
    battery: '5.2 kWh Smart Pack',
    warranty: '5 years',
    price: 149900,
    image: '/assets/voltedge-s1-pro.png',
    heroImage: '/assets/voltedge-s1-pro.png',
    features: ['Quick charge', 'Traction control', 'Geo-fence tracking', 'Premium seat'],
    colors: ['Pearl Silver', 'Cosmic Blue', 'Midnight Graphite'],
    description:
      'Sharper, faster, and more tech-rich - the S1 Pro is built for premium urban riders.',
  },
  {
    id: 's1-plus',
    name: 'Kriscel S1 Plus',
    type: 'Scooty',
    range: 235,
    speed: 95,
    chargingTime: 32,
    battery: '5.8 kWh Urban Pack',
    warranty: '5 years',
    price: 169900,
    image: '/assets/kriscel-s1-plus.png',
    heroImage: '/assets/kriscel-s1-plus.png',
    features: ['Hill hold assist', 'Cruise control', 'App diagnostics', 'Dual ride modes'],
    colors: ['Pearl White', 'Electric Blue', 'Graphite Black'],
    description:
      'A refined long-range scooty with extra comfort, stronger charging speed, and a calmer premium ride.',
  },
  {
    id: 's1-max',
    name: 'Kriscel S1 Max',
    type: 'Scooty',
    range: 260,
    speed: 100,
    chargingTime: 28,
    battery: '6.3 kWh Max Pack',
    warranty: '6 years',
    price: 189900,
    image: '/assets/kriscel-s1-max.png',
    heroImage: '/assets/kriscel-s1-max.png',
    features: ['Fast charging', 'Park assist', 'Smart keyless start', 'Wide comfort seat'],
    colors: ['Midnight Black', 'Aqua Cyan', 'Silver Mist'],
    description:
      'The top-end city scooty for riders who want maximum range, quick charging, and a plush daily commute.',
  },
  {
    id: 's2',
    name: 'Kriscel S2',
    type: 'Scooty',
    range: 180,
    speed: 82,
    chargingTime: 38,
    battery: '4.9 kWh City Pack',
    warranty: '4 years',
    price: 134900,
    image: '/assets/kriscel-s2.png',
    heroImage: '/assets/kriscel-s2.png',
    features: ['City ride modes', 'USB charging', 'Reverse alert', 'Ambient lighting'],
    colors: ['Pearl White', 'Sky Blue', 'Graphite Black'],
    description:
      'A balanced everyday scooty with approachable pricing, smooth performance, and a clean premium feel.',
  },
  {
    id: 's2-pro',
    name: 'Kriscel S2 Pro',
    type: 'Scooty',
    range: 220,
    speed: 92,
    chargingTime: 30,
    battery: '5.6 kWh Pro Pack',
    warranty: '5 years',
    price: 159900,
    image: '/assets/kriscel-s2-pro.png',
    heroImage: '/assets/kriscel-s2-pro.png',
    features: ['Cruise control', 'Smart lock', 'Hill assist', 'Fast charger ready'],
    colors: ['Midnight Graphite', 'Electric Blue', 'Pearl Silver'],
    description:
      'A more advanced urban scooty with stronger range, quicker charging, and a more polished feature set.',
  },
  {
    id: 'x',
    name: 'Kriscel X',
    type: 'Bike',
    range: 185,
    speed: 105,
    chargingTime: 40,
    battery: '6.0 kWh Performance Pack',
    warranty: '5 years',
    price: 189900,
    image: '/assets/voltedge-x.png',
    heroImage: '/assets/voltedge-x.png',
    features: ['Disc brake ABS', 'Sport mode', 'Ride-by-wire', 'Full LED visor'],
    colors: ['Storm Silver', 'Electro Blue', 'Shadow Black'],
    description:
      'A performance-forward electric bike with sculpted aerodynamics and confident road presence.',
  },
  {
    id: 'x-pro',
    name: 'Kriscel X Pro',
    type: 'Bike',
    range: 240,
    speed: 125,
    chargingTime: 30,
    battery: '7.2 kWh Long Range Pack',
    warranty: '6 years',
    price: 234900,
    image: '/assets/voltedge-x-pro.png',
    heroImage: '/assets/voltedge-x-pro.png',
    features: ['Launch control', 'Dual-channel ABS', 'Adaptive lighting', 'Performance telemetry'],
    colors: ['Pearl White', 'Titanium Grey', 'Neon Cyan'],
    description:
      'The flagship riding machine for riders who want unmistakable premium presence and speed.',
  },
  {
    id: 'x-r',
    name: 'Kriscel X R',
    type: 'Bike',
    range: 215,
    speed: 115,
    chargingTime: 34,
    battery: '6.6 kWh Performance Pack',
    warranty: '5 years',
    price: 209900,
    image: '/assets/kriscel-x-r.png',
    heroImage: '/assets/kriscel-x-r.png',
    features: ['Sport braking', 'Launch assist', 'Ride telemetry', 'Enhanced aerodynamics'],
    colors: ['Stealth Black', 'Racing Red', 'Ice Silver'],
    description:
      'A sharper electric bike tuned for riders who want a more aggressive stance and a responsive sport feel.',
  },
  {
    id: 'x-r-pro',
    name: 'Kriscel X R Pro',
    type: 'Bike',
    range: 260,
    speed: 135,
    chargingTime: 26,
    battery: '7.8 kWh Long Range Pack',
    warranty: '6 years',
    price: 259900,
    image: '/assets/kriscel-x-r-pro.png',
    heroImage: '/assets/kriscel-x-r-pro.png',
    features: ['Dual-channel ABS', 'Track mode', 'Adaptive display', 'Rapid charge support'],
    colors: ['Pearl White', 'Titanium Grey', 'Shadow Black'],
    description:
      'A high-spec performance bike with stronger range, quicker charging, and a more focused premium ride.',
  },
  {
    id: 'x-s',
    name: 'Kriscel X S',
    type: 'Bike',
    range: 195,
    speed: 110,
    chargingTime: 36,
    battery: '6.2 kWh Sport Pack',
    warranty: '5 years',
    price: 199900,
    image: '/assets/kriscel-x-s.png',
    heroImage: '/assets/kriscel-x-s.png',
    features: ['Sport stance', 'ABS braking', 'Ride-by-wire', 'Quick throttle response'],
    colors: ['Stealth Black', 'Racing Red', 'Titanium Grey'],
    description:
      'A sporty entry bike with crisp handling, sharp design cues, and a responsive everyday ride.',
  },
  {
    id: 'x-race',
    name: 'Kriscel X Race',
    type: 'Bike',
    range: 245,
    speed: 142,
    chargingTime: 24,
    battery: '8.0 kWh Race Pack',
    warranty: '6 years',
    price: 279900,
    image: '/assets/kriscel-x-race.png',
    heroImage: '/assets/kriscel-x-race.png',
    features: ['Track mode', 'Launch assist', 'Dual-channel ABS', 'Performance telemetry'],
    colors: ['Pearl White', 'Matte Black', 'Neon Cyan'],
    description:
      'The most aggressive bike in the lineup, aimed at riders who want maximum pace and a serious road presence.',
  },
];

export const featureHighlights = [
  'Long Range Battery',
  'Fast Charging',
  'Smart Dashboard',
  'Mobile App Control',
  'GPS Tracking',
  'Reverse Assist',
  'Regenerative Braking',
  'Anti Theft Security',
  'Ride Analytics',
  'Crisp LED Lighting',
];

export const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Urban Commuter',
    quote:
      'Kriscel EV feels like a luxury tech brand on two wheels. The animations and product presentation are outstanding.',
  },
  {
    name: 'Nisha Kapoor',
    role: 'Weekend Rider',
    quote:
      'The compare flow, booking experience, and premium look make the entire site feel like a high-end launch platform.',
  },
  {
    name: 'Kabir Singh',
    role: 'Fleet Owner',
    quote:
      'Smooth, fast, and polished. The localStorage features work perfectly and the product pages are very persuasive.',
  },
];

export const faqs = [
  {
    q: 'Do I need a backend for bookings and wishlist?',
    a: 'No. Everything is handled on the frontend with localStorage for a fully offline-capable demo experience.',
  },
  {
    q: 'Can I replace the placeholder visuals with my own assets?',
    a: 'Yes. Drop your videos and product images into public/assets using the same filenames and the site will pick them up.',
  },
  {
    q: 'Is the site mobile responsive?',
    a: 'Yes. The layout, navigation, cards, and forms are built to adapt cleanly across mobile, tablet, and desktop.',
  },
];
