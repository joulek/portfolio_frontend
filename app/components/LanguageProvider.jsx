"use client";
import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      work: "Work",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      badge: "Available for new projects",
      line1: "We build digital",
      line2: "experiences",
      line3: "that",
      line4: "convert.",
      words: ["Design.", "Develop.", "Deliver."],
      sub: "Two creative minds, one unified vision — crafting brands and digital products that leave a mark.",
      cta_work: "See our work",
      cta_about: "About us",
      scroll: "Scroll",
      stats: [
        { value: "100%", label: "Client satisfaction" },
        { value: "2", label: "Creative minds" },
        { value: "∞", label: "Ideas to build" },
      ],
    },
    about: {
      badge: "Who we are",
      title1: "Two developers,",
      title2: "one vision.",
      subtitle: "We combine technical depth and design sensibility to build products people actually love to use.",
      values: {
        creative: {
          title: "Creative thinking",
          desc: "Every project starts with a blank page and a genuine curiosity for what could make it remarkable.",
        },
        craft: {
          title: "Technical craft",
          desc: "Clean architecture, performant code, and attention to detail at every layer of the stack.",
        },
        care: {
          title: "Client care",
          desc: "We treat your project like our own — with full transparency, honest timelines, and real commitment.",
        },
      },
      team: [
        {
          name: "Yosr Joulek",
          role: "Full-Stack Developer",
          bio: "Passionate Full-Stack Developer with experience in designing, developing, and deploying modern web applications. Works across front-end, back-end, databases, APIs, cloud services, and AI-powered solutions to build scalable and user-focused digital products.",
          tags: ["Frontend", "Backend", "Databases", "Cloud", "APIs", "UI/UX", "DevOps"],
        },
        {
          name: "Nourhene Abbes",
          role: "Full-Stack Developer",
          bio: "Dedicated Full-Stack Developer specializing in building secure, scalable, and high-performance applications. Experienced in software architecture, API development, database management, cloud technologies, and creating seamless user experiences.",
          tags: ["Frontend", "Backend", "Databases", "Cloud", "APIs", "UI/UX", "DevOps"],
        },
      ],
    },
    services: {
      badge: "What we do",
      title1: "Services built",
      title2: "for growth.",
      subtitle: "Every service is designed to move your business forward — not just look good.",
      deliverables_label: "Deliverables",
      items: [
        {
          number: "01",
          title: "Custom Web Development",
          short: "Web applications built from scratch.",
          description: "We design and develop custom web applications tailored to your business needs. From MVPs to enterprise platforms, we build scalable, secure, and high-performance solutions.",
          deliverables: ["Custom Web Applications", "Business Platforms", "REST APIs", "Authentication & Security"],
        },
        {
          number: "02",
          title: "UI/UX Design",
          short: "Interfaces users love.",
          description: "We create modern, intuitive, and responsive user interfaces that provide exceptional user experiences while aligning with your business goals.",
          deliverables: ["UI Design", "UX Research", "Responsive Design", "Interactive Prototypes"],
        },
        {
          number: "03",
          title: "Mobile Applications",
          short: "Apps for every device.",
          description: "We develop cross-platform mobile applications with modern technologies, ensuring smooth performance, beautiful interfaces, and seamless user experiences.",
          deliverables: ["Cross-Platform Apps", "API Integration", "Responsive UI", "App Maintenance"],
        },
        {
          number: "04",
          title: "AI Integration",
          short: "Smarter digital experiences.",
          description: "We integrate artificial intelligence into web and mobile applications, including AI assistants, chatbots, document processing, recommendation systems, and intelligent automation.",
          deliverables: ["AI Assistants", "Chatbots", "Automation", "LLM Integration"],
        },
        {
          number: "05",
          title: "SEO & Performance Optimization",
          short: "Increase visibility and speed.",
          description: "We optimize websites for search engines, performance, accessibility, and Core Web Vitals to improve rankings, user experience, and conversion rates.",
          deliverables: ["Technical SEO", "Performance Optimization", "Core Web Vitals", "Accessibility"],
        },
        {
          number: "06",
          title: "Deployment & Cloud Solutions",
          short: "Launch with confidence.",
          description: "We deploy, monitor, and maintain your applications using modern cloud infrastructure, CI/CD pipelines, domain configuration, SSL security, and scalable hosting solutions.",
          deliverables: ["Cloud Deployment", "CI/CD", "Domain & SSL", "Maintenance & Monitoring"],
        },
      ],
    },
    work: {
      badge: "Our work",
      title1: "Projects we're",
      title2: "proud of.",
      filters: ["All", "Brand", "Web", "E-commerce", "Mobile UI"],
      cta_text: "Want to see more? Let's talk about your project.",
      cta_btn: "Start a project",
      projects: [
        {
          id: 1,
          title: "MTR - Manufacture Tunisienne des Ressorts",
          category: "Corporate Website",
          description: "Designed and developed a modern corporate website for MTR, showcasing the company's expertise in spring manufacturing, industrial solutions, and product catalog with a responsive, multilingual, and SEO-optimized experience.",
          tags: ["Next.js", "Responsive Design", "SEO"],
          year: "2025",
          link: "https://mtr-ressorts.tn/fr",
          image: "/mtr.png",
          color: "#C9F538",
          bg: "from-[#C9F538]/10 to-transparent",
        },
        {
          id: 2,
          title: "Recrutement OPTYLAB",
          category: "Recruitment Platform",
          description: "Designed and developed a modern recruitment platform for OPTYLAB, enabling candidates to explore career opportunities, submit applications, and providing an intuitive, responsive, and SEO-optimized hiring experience.",
          tags: ["Next.js", "Recruitment", "Responsive Design"],
          year: "2026",
          link: "https://recrutement.optylab.com",
          image: "/optylab.png",
          color: "#8B5CF6",
          bg: "from-[#8B5CF6]/10 to-transparent",
        },
      ],
    },
    contact: {
  badge: "Get in touch",
  title1: "Have a project",
  title2: "in mind?",
  subtitle: "We'd love to hear about it. Fill in the form and we'll get back to you within 24 hours.",

  emailTitle: "Email us directly",
  howItWorks: "How it works",

  steps: {
    s1: {
      title: "Discovery call",
      desc: "We chat about your vision, goals, and timeline.",
    },
    s2: {
      title: "Custom proposal",
      desc: "We send a tailored plan and transparent pricing.",
    },
    s3: {
      title: "We build",
      desc: "Iterative process with regular updates and reviews.",
    },
    s4: {
      title: "Launch 🚀",
      desc: "You go live with a product you're proud of.",
    },
  },

  form: {
    name: "Your name",
    email: "Email address",
    service: "Select a service",
    message: "Tell us about your project...",
    button: "Send message",
    sending: "Sending...",
    successTitle: "Message sent!",
    successDesc: "We'll get back to you within 24 hours. Can't wait to work together! 🌿",
    another: "Send another",
  },

  services: {
    placeholder: "Select a service",
    list: {
      brand: "Brand & Visual Identity",
      web: "Web Design & Development",
      ecommerce: "E-commerce",
      mobile: "Mobile App Design",
      uiux: "UI/UX Consulting",
      other: "Other",
    },
  },
},
footer: {
  description: "Two full-stack developers building modern web, AI, and scalable digital solutions.",
  navigation: "Navigation",
  contact: "Contact",
  status: "Available for projects",
  copyright: "© 2026 YNITY Studio. All rights reserved.",
  made: "Designed & built by YNITY ✦",
  social: {
    portfolio: "Portfolio",
  },
  nav: {
    about: "About",
    services: "Services",
    work: "Work",
    contact: "Contact",
  },
}
  },
  fr: {
    nav: {
      about: "À propos",
      services: "Services",
      work: "Réalisations",
      contact: "Contact",
      cta: "Discutons",
    },
    hero: {
      badge: "Disponible pour de nouveaux projets",
      line1: "Nous créons des",
      line2: "expériences",
      line3: "qui",
      line4: "convertissent.",
      words: ["Design.", "Développement.", "Livraison."],
      sub: "Deux esprits créatifs, une vision commune — des marques et produits digitaux qui marquent les esprits.",
      cta_work: "Voir nos projets",
      cta_about: "À propos",
      scroll: "Défiler",
      stats: [
        { value: "100%", label: "Satisfaction client" },
        { value: "2", label: "Esprits créatifs" },
        { value: "∞", label: "Idées à construire" },
      ],
    },
    about: {
      badge: "Qui sommes-nous",
      title1: "Deux développeurs,",
      title2: "une vision.",
      subtitle: "Nous combinons expertise technique et sensibilité design pour créer des produits que les gens adorent vraiment utiliser.",
      values: {
        creative: {
          title: "Pensée créative",
          desc: "Chaque projet commence par une page blanche et une vraie curiosité pour ce qui pourrait le rendre remarquable.",
        },
        craft: {
          title: "Maîtrise technique",
          desc: "Architecture propre, code performant et attention aux détails à chaque niveau de la stack.",
        },
        care: {
          title: "Suivi client",
          desc: "Nous traitons votre projet comme le nôtre — avec transparence totale, délais honnêtes et engagement réel.",
        },
      },
      team: [
        {
          name: "Yosr Joulek",
          role: "Développeuse Full-Stack",
          bio: "Développeuse Full-Stack passionnée, expérimentée dans la conception, le développement et le déploiement d'applications web modernes. Intervient sur le front-end, le back-end, les bases de données, les APIs, les services cloud et les solutions IA pour créer des produits digitaux scalables et centrés utilisateur.",
          tags: ["Frontend", "Backend", "Bases de données", "Cloud", "APIs", "UI/UX", "DevOps"],
        },
        {
          name: "Nourhene Abbes",
          role: "Développeuse Full-Stack",
          bio: "Développeuse Full-Stack spécialisée dans la conception d'applications sécurisées, scalables et haute performance. Expérimentée en architecture logicielle, développement d'APIs, gestion de bases de données, technologies cloud et création d'expériences utilisateur fluides.",
          tags: ["Frontend", "Backend", "Bases de données", "Cloud", "APIs", "UI/UX", "DevOps"],
        },
      ],
    },
    services: {
      badge: "Ce que nous faisons",
      title1: "Des services conçus",
      title2: "pour grandir.",
      subtitle: "Chaque service est pensé pour faire avancer votre activité — pas seulement pour faire beau.",
      deliverables_label: "Livrables",
      items: [
        {
          number: "01",
          title: "Développement Web sur mesure",
          short: "Applications web créées de zéro.",
          description: "Nous concevons et développons des applications web personnalisées adaptées à vos besoins. Des MVPs aux plateformes d'entreprise, nous construisons des solutions scalables, sécurisées et performantes.",
          deliverables: ["Applications Web sur mesure", "Plateformes métier", "APIs REST", "Authentification & Sécurité"],
        },
        {
          number: "02",
          title: "Design UI/UX",
          short: "Des interfaces que les utilisateurs adorent.",
          description: "Nous créons des interfaces utilisateur modernes, intuitives et responsives qui offrent des expériences exceptionnelles tout en s'alignant sur vos objectifs métier.",
          deliverables: ["Design UI", "Recherche UX", "Design Responsive", "Prototypes Interactifs"],
        },
        {
          number: "03",
          title: "Applications Mobiles",
          short: "Des apps pour chaque appareil.",
          description: "Nous développons des applications mobiles multiplateformes avec des technologies modernes, garantissant fluidité, interfaces soignées et expériences utilisateur sans friction.",
          deliverables: ["Apps multiplateformes", "Intégration API", "UI Responsive", "Maintenance"],
        },
        {
          number: "04",
          title: "Intégration IA",
          short: "Des expériences digitales plus intelligentes.",
          description: "Nous intégrons l'intelligence artificielle dans vos applications web et mobiles : assistants IA, chatbots, traitement de documents, systèmes de recommandation et automatisation intelligente.",
          deliverables: ["Assistants IA", "Chatbots", "Automatisation", "Intégration LLM"],
        },
        {
          number: "05",
          title: "SEO & Optimisation des performances",
          short: "Visibilité et vitesse améliorées.",
          description: "Nous optimisons vos sites pour les moteurs de recherche, les performances, l'accessibilité et les Core Web Vitals afin d'améliorer le classement, l'expérience utilisateur et les taux de conversion.",
          deliverables: ["SEO Technique", "Optimisation des performances", "Core Web Vitals", "Accessibilité"],
        },
        {
          number: "06",
          title: "Déploiement & Solutions Cloud",
          short: "Lancez avec sérénité.",
          description: "Nous déployons, surveillons et maintenons vos applications grâce à une infrastructure cloud moderne, des pipelines CI/CD, la configuration de domaines, la sécurité SSL et des solutions d'hébergement scalables.",
          deliverables: ["Déploiement Cloud", "CI/CD", "Domaine & SSL", "Maintenance & Monitoring"],
        },
      ],
    },
    work: {
      badge: "Nos réalisations",
      title1: "Des projets dont nous sommes",
      title2: "fiers.",
      filters: ["Tous", "Marque", "Web", "E-commerce", "UI Mobile"],
      cta_text: "Envie d'en voir plus ? Parlons de votre projet.",
      cta_btn: "Démarrer un projet",
      projects: [
        {
          id: 1,
          title: "MTR - Manufacture Tunisienne des Ressorts",
          category: "Site Vitrine",
          description: "Conception et développement d'un site corporate moderne pour MTR, mettant en valeur l'expertise de l'entreprise dans la fabrication de ressorts, les solutions industrielles et le catalogue produits avec une expérience responsive, multilingue et optimisée SEO.",
          tags: ["Next.js", "Design Responsive", "SEO"],
          year: "2025",
          link: "https://mtr-ressorts.tn/fr",
          image: "/mtr.png",
          color: "#C9F538",
          bg: "from-[#C9F538]/10 to-transparent",
        },
        {
          id: 2,
          title: "Recrutement OPTYLAB",
          category: "Plateforme de Recrutement",
          description: "Conception et développement d'une plateforme de recrutement moderne pour OPTYLAB, permettant aux candidats d'explorer les opportunités de carrière, de soumettre leurs candidatures, avec une expérience intuitive, responsive et optimisée SEO.",
          tags: ["Next.js", "Recrutement", "Design Responsive"],
          year: "2026",
          link: "https://recrutement.optylab.com",
          image: "/optylab.png",
          color: "#8B5CF6",
          bg: "from-[#8B5CF6]/10 to-transparent",
        },
      ],
    },
    contact: {
  badge: "Contact",
  title1: "Vous avez un projet",
  title2: "en tête ?",
  subtitle: "Nous serions ravies d’en discuter. Remplissez le formulaire et nous vous répondrons sous 24 heures.",

  emailTitle: "Nous écrire directement",
  howItWorks: "Comment ça fonctionne",

  steps: {
    s1: {
      title: "Appel de découverte",
      desc: "Nous discutons de votre vision, vos objectifs et vos délais.",
    },
    s2: {
      title: "Proposition personnalisée",
      desc: "Nous envoyons un plan détaillé avec un prix transparent.",
    },
    s3: {
      title: "Développement",
      desc: "Processus itératif avec mises à jour régulières.",
    },
    s4: {
      title: "Lancement 🚀",
      desc: "Mise en ligne de votre produit final prêt à être utilisé.",
    },
  },

  form: {
    name: "Votre nom",
    email: "Adresse email",
    service: "Choisir un service",
    message: "Parlez-nous de votre projet...",
    button: "Envoyer le message",
    sending: "Envoi...",
    successTitle: "Message envoyé !",
    successDesc: "Nous vous répondrons sous 24 heures. Hâte de collaborer ! 🌿",
    another: "Envoyer un autre message",
  },

  services: {
    placeholder: "Choisir un service",
    list: {
      brand: "Identité visuelle & branding",
      web: "Conception & développement web",
      ecommerce: "E-commerce",
      mobile: "Application mobile",
      uiux: "Consulting UI/UX",
      other: "Autre",
    },
  },
},footer: {
  description: "Deux développeuses full-stack créant des solutions web modernes, IA et scalables.",
  navigation: "Navigation",
  contact: "Contact",
  status: "Disponible pour des projets",
  copyright: "© 2026 YNITY Studio. Tous droits réservés.",
  made: "Conçu & développé par YNITY ✦",
  social: {
    portfolio: "Portfolio",
  },
  nav: {
    about: "À propos",
    services: "Services",
    work: "Réalisations",
    contact: "Contact",
  },
}
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "fr" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const t = (path) => {
    return path.split(".").reduce((obj, key) => obj?.[key], translations[lang]) ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}