export interface Project {
  id: string;
  title: string;
  category: 'all' | 'store' | 'ai' | 'social';
  description: string;
  image: string;
  tags: string[];
  storeLabel: string;
  storeUrl: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon?: string }[];
}

export const portfolioData = {
  personal: {
    name: 'Khawaja Saim',
    fullName: 'Muhammad Saim (Khawaja Saim)',
    initials: 'KS',
    title: 'Senior Flutter Developer',
    subtitle: 'Mobile App Architect & Cross-Platform Engineer',
    bio: 'Turning ambitious ideas into smooth, production-ready mobile applications. Specialized in clean architecture, performance optimization, and AI integrations. Building beautifully responsive, native-grade experiences for Android, iOS, and Web.',
    avatar: '/assets/images/my_image.png',
    email: 'khawajasaim23@gmail.com',
    phone: '+92 324 5352293',
    whatsapp: 'https://wa.me/923245352293',
    linkedin: 'https://www.linkedin.com/in/muhammad-saim-447b64305/',
    github: 'https://github.com/Khawaja-Saim',
    resumeUrl: 'https://drive.google.com/file/d/16DD7RRLPKuGQbEAtzoCWvFDSQCM0cD8o/view?usp=sharing',
    location: 'Pakistan (Available Worldwide / Remote)',
    status: 'Available for New Projects & Teams',
  },

  roles: [
    'Senior Flutter Developer',
    'Cross-Platform Architect',
    'iOS & Android Specialist',
    'AI & Mobile Apps Engineer',
  ],

  stats: [
    { number: 3, suffix: '+', label: 'Years Experience', icon: 'Briefcase' },
    { number: 30, suffix: '+', label: 'Apps Built', icon: 'Smartphone' },
    { number: 2, suffix: '', label: 'Tech Companies', icon: 'Building2' },
    { number: 5, suffix: '+', label: 'Live on Stores', icon: 'Flame' },
  ],

  services: [
    {
      id: 'app-dev',
      title: 'Mobile App Development',
      description: 'End-to-end Flutter apps for iOS & Android built with clean architecture, high scalability, and 60+ FPS native responsiveness.',
      iconName: 'Smartphone',
      features: ['Cross-platform iOS & Android', 'State Management (GetX, Riverpod, Provider)', 'Offline-first database architecture', 'Hardware & sensor integrations']
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Implementation',
      description: 'Pixel-perfect translation of Figma / Adobe XD designs into dynamic, interactive widgets with silky-smooth micro-animations.',
      iconName: 'Palette',
      features: ['Figma to Flutter conversion', 'Responsive across tablets & phones', 'Adaptive Material 3 & Cupertino UI', 'Fluid custom animations']
    },
    {
      id: 'backend-api',
      title: 'API & AI Cloud Integration',
      description: 'Seamless integration of RESTful APIs, Firebase backends, Supabase, Payment Gateways, and intelligent OpenAI / Hugging Face models.',
      iconName: 'Cpu',
      features: ['REST APIs & GraphQL', 'Firebase Auth & Cloud Firestore', 'Push Notifications (FCM)', 'OpenAI & Hugging Face LLM integration']
    },
    {
      id: 'opt-deploy',
      title: 'Store Deployment & Optimization',
      description: 'Production publishing on Google Play Console and Apple App Store, CI/CD automated deployment, and up to 40% app speed optimization.',
      iconName: 'Rocket',
      features: ['Google Play & Apple App Store launch', 'Load time speedup & memory leak fixes', 'In-App Purchases (RevenueCat / StoreKit)', 'Continuous maintenance & updates']
    }
  ] as Service[],

  skillCategories: [
    {
      category: 'Core Framework & Languages',
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'Dart', level: 92 },
        { name: 'Clean Architecture', level: 90 },
        { name: 'MVC / MVVM', level: 88 },
        { name: 'Responsive UI Design', level: 94 },
      ]
    },
    {
      category: 'State Management & Architecture',
      skills: [
        { name: 'GetX', level: 95 },
        { name: 'Provider', level: 88 },
        { name: 'Riverpod', level: 85 },
        { name: 'BLoC / Cubit', level: 80 },
      ]
    },
    {
      category: 'Backend, Cloud & Database',
      skills: [
        { name: 'Firebase & Firestore', level: 92 },
        { name: 'REST APIs & JSON', level: 94 },
        { name: 'Supabase', level: 85 },
        { name: 'SQLite & Hive', level: 88 },
        { name: 'Push Notifications (FCM)', level: 90 },
      ]
    },
    {
      category: 'AI, Store & Advanced Integrations',
      skills: [
        { name: 'OpenAI & AI APIs', level: 86 },
        { name: 'Hugging Face', level: 82 },
        { name: 'Google Play Store Release', level: 95 },
        { name: 'Apple App Store Release', level: 90 },
        { name: 'In-App Purchases & Payments', level: 88 },
        { name: 'Google Maps & Geolocation', level: 87 },
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      company: 'Nextwys Software Solution',
      role: 'Senior Flutter Developer',
      period: '2025 — Present',
      location: 'Onsite / Hybrid',
      description: 'Leading mobile development projects by building scalable cross-platform Flutter applications and collaborating with backend teams for seamless API integration across various global industries.',
      achievements: [
        'Built and shipped 8+ production-ready mobile apps',
        'Directly mentored and guided a team of 3 junior Flutter developers',
        'Reduced app startup and render latency by 40% through deep code optimization',
        'Architected clean modular state handling with GetX and Riverpod',
      ]
    },
    {
      company: 'Byte Sources Solution',
      role: 'Flutter Developer',
      period: '2023 — 2024',
      location: 'Full-time',
      description: 'Learned Flutter development from fundamentals and quickly progressed to building responsive, scalable mobile applications while delivering high-value client projects professionally.',
      achievements: [
        'Delivered 15+ client projects on time with high client satisfaction',
        'Implemented complex custom animations and reusable widget components',
        'Integrated multi-tier REST APIs, Firebase authentication, and database syncing',
        'Participated in agile sprints, bug triaging, and store releases',
      ]
    }
  ] as Experience[],

  projects: [
    {
      id: 'mja',
      title: 'MJA: Meditation & Achtsamkeit',
      category: 'store',
      description: 'A soothing mindfulness, relaxation, and meditation app designed to help users reduce stress, overcome anxiety, improve sleep quality, and achieve mental wellness through calming soundscapes.',
      image: '/assets/images/mja_app_icon.png',
      tags: ['Flutter', 'Firebase', 'In-App Purchase', 'GetX', 'Audio Engine'],
      storeLabel: 'Play Store',
      storeUrl: 'https://play.google.com/store/apps/details?id=com.heikokusters.mindfulness_journey_app&pcampaignid=web_share',
      featured: true
    },
    {
      id: 'cognize',
      title: 'Cognize: Productivity Planner',
      category: 'store',
      description: 'An all-in-one daily life organizer and task manager featuring events, notes, reminders, alarms, stopwatch tasks, private media vaults, and password-protected encrypted folders.',
      image: '/assets/images/cognize_app_icon.png',
      tags: ['Flutter', 'Firebase', 'GetX', 'Push Notifications', 'Local Vault'],
      storeLabel: 'Play Store',
      storeUrl: 'https://play.google.com/store/apps/details?id=com.cognizeapp.app&pcampaignid=web_share',
      featured: true
    },
    {
      id: 'salomo',
      title: 'Salomo: AI Dream Companion',
      category: 'ai',
      description: 'An AI-powered subconscious reflection companion that helps users record, explore, and analyze dream symbols, sentiment patterns, and emotions to unlock personal psychological insights.',
      image: '/assets/images/salomo_app_icon.png',
      tags: ['Flutter', 'Supabase', 'Provider', 'AI / LLM', 'Analytics'],
      storeLabel: 'Play Store',
      storeUrl: 'https://play.google.com/store/apps/details?id=com.dreamsageai.app&pcampaignid=web_share',
      featured: true
    },
    {
      id: 'earnovate',
      title: 'Earnovate™: Digital Success Toolkit',
      category: 'store',
      description: 'A comprehensive digital entrepreneurship toolkit providing AI guides, branding resources, templates, planners, and interactive courses to help creators build digital products and scale online income.',
      image: '/assets/images/earnovate_icon.png',
      tags: ['Flutter', 'Firebase', 'In-App Purchase', 'GetX', 'iOS StoreKit'],
      storeLabel: 'Apple App Store',
      storeUrl: 'https://apps.apple.com/us/app/earnovate/id6755743036',
      featured: true
    },
    {
      id: 'uni-social',
      title: 'Uni-Social App',
      category: 'social',
      description: 'Modern social networking mobile app featuring real-time feed updates, rich story sharing, multimedia uploads (photos/videos), interactive likes, dynamic comments, and instant notifications.',
      image: '/assets/images/social_app_icon.png',
      tags: ['Flutter', 'GetX', 'Firebase Auth', 'Firestore', 'Media Streaming'],
      storeLabel: 'Watch Video Demo',
      storeUrl: 'https://drive.google.com/file/d/1XsYQB9YdOgCLDBmcwTopTJPOFyD0EWPV/view?usp=sharing',
      featured: false
    }
  ] as Project[]
};
