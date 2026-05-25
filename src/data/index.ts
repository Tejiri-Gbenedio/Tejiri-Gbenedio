export const projects = [
  {
    id: 1,
    title: 'Mutiee Bakes',
    category: 'Business Website',
    tagline: 'A sweet online presence for a growing bakery brand.',
    clientNeed:
      'The client needed an attractive online presence to showcase their baked goods, take inquiries, and attract new customers beyond word-of-mouth.',
    solution:
      'Built a warm, visually rich website with an interactive menu, photo gallery, and direct WhatsApp inquiry flow — optimized for mobile since most traffic comes from phones.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: ['Interactive menu', 'Photo gallery', 'WhatsApp flow', 'Mobile-first', 'SEO optimized'],
    image: '/mutiee-bakes.png',
    liveUrl: 'https://mutiee-bakes-website.vercel.app/',
    status: 'live' as const,
  },
  {
    id: 2,
    title: 'Grills Cartel',
    category: 'Business Website',
    tagline: 'Bold digital identity for a premium grill & BBQ brand.',
    clientNeed:
      'A bold, appetizing website that matched the brand energy and helped customers find the menu, location, and contact the business easily.',
    solution:
      'Designed a high-energy site with full menu display, location info, and a direct contact flow — built for fast mobile load times and strong visual impact.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: ['Full menu display', 'Location & hours', 'Contact integration', 'Mobile responsive', 'Brand-aligned design'],
    image: '/grills-cartel.png',
    liveUrl: 'https://grills-cartel.netlify.app/',
    status: 'live' as const,
  },
  {
    id: 3,
    title: "Mama Tee's Kitchen",
    category: 'Business Website',
    tagline: 'A warm digital home for a beloved local kitchen.',
    clientNeed:
      'The client needed an inviting online presence where customers could browse the menu, learn about the food, and reach out easily.',
    solution:
      'Built a warm, mobile-first restaurant website with full menu display, location info, and a direct contact flow — designed to feel as welcoming as the kitchen itself.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: ['Full menu display', 'Mobile-first', 'WhatsApp integration', 'Brand-aligned design', 'Fast load times'],
    image: '/mamatees-kitchen.png',
    liveUrl: 'https://mamateeskitchenmenu.netlify.app/',
    status: 'live' as const,
  },
  {
    id: 4,
    title: "Mama Tee's AI Ordering App",
    category: 'AI Web App',
    tagline: 'AI-powered food ordering — chat, voice, and WhatsApp in one app.',
    clientNeed:
      "The client wanted a modern ordering experience that let customers place food orders through multiple channels without needing to call or visit in person.",
    solution:
      "Built a mobile-first ordering app with AI chat ordering, a Voice AI feature where customers literally talk to an AI to place orders, a full menu browser, and direct WhatsApp integration.",
    techStack: ['Next.js', 'TypeScript', 'OpenAI', 'Vapi', 'Tailwind CSS'],
    features: ['AI Chat Ordering', 'Voice AI (Talk to AI)', 'WhatsApp integration', 'Full menu browser', 'Mobile-first'],
    image: '/mamatees-app.png',
    liveUrl: 'https://mamateeskitchenmenu.netlify.app/',
    status: 'live' as const,
    hideLink: true,
  },
]

export const services = [
  {
    id: 1,
    title: 'Business Websites',
    description: 'Professional websites that represent your brand 24/7 and convert visitors into customers.',
    icon: 'Globe',
  },
  {
    id: 2,
    title: 'E-commerce Stores',
    description: 'Full online stores with payments, inventory management, and order tracking.',
    icon: 'ShoppingBag',
  },
  {
    id: 3,
    title: 'AI Automations',
    description: 'Automate repetitive tasks — lead follow-up, scheduling, reports — so you focus on growth.',
    icon: 'Bot',
  },
  {
    id: 4,
    title: 'Landing Pages',
    description: 'High-converting landing pages built to turn ad traffic into real customers.',
    icon: 'LayoutDashboard',
  },
  {
    id: 5,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that work seamlessly on iOS and Android.',
    icon: 'Smartphone',
  },
  {
    id: 6,
    title: 'UI/UX Design',
    description: 'Clean, intuitive designs that make your product a pleasure to use.',
    icon: 'Palette',
  },
  {
    id: 7,
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, fast, and professional experience.',
    icon: 'RefreshCw',
  },
  {
    id: 8,
    title: 'SEO Optimization',
    description: 'Get found on Google. Technical SEO and content strategy that drives organic traffic.',
    icon: 'Search',
  },
]

export const pricingTiers = [
  {
    id: 1,
    name: 'Starter Website',
    priceRange: '₦150,000 – ₦250,000',
    description: 'Perfect for small businesses and personal brands getting online.',
    features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO setup', 'WhatsApp integration', '2 revision rounds'],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Business Website',
    priceRange: '₦300,000 – ₦600,000',
    description: 'For established businesses that need a powerful digital presence.',
    features: ['Up to 10 pages', 'Custom animations', 'Blog/News section', 'Full SEO optimization', 'Analytics setup', 'Social media integration', '3 revision rounds'],
    highlighted: true,
  },
  {
    id: 3,
    name: 'E-commerce Store',
    priceRange: '₦500,000 – ₦1,500,000',
    description: 'Complete online store with payments and inventory management.',
    features: ['Unlimited products', 'Paystack/Flutterwave', 'Admin dashboard', 'Order tracking', 'Delivery management', 'Customer accounts', 'Mobile responsive'],
    highlighted: false,
  },
  {
    id: 4,
    name: 'Custom App / SaaS',
    priceRange: 'Custom Quote',
    description: 'Complex web apps, AI integrations, and SaaS platforms.',
    features: ['Full-stack development', 'Database architecture', 'AI/Automation integration', 'User authentication', 'API development', 'Ongoing support', 'Custom scope'],
    highlighted: false,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Chiamaka Obi',
    role: 'Owner, Mutiee Bakes',
    quote:
      'Tejiri completely transformed how my bakery looks online. Customers now find me and message directly from the site. The design is exactly what I wanted — beautiful and professional.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Eghosa',
    role: 'Co-founder, Grills Cartel',
    quote:
      "Fast delivery, clean result, and the site looks exactly like our brand. We've had people come in saying they found us online — which never happened before the new site.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Tolu Adeyemi',
    role: 'Startup Founder',
    quote:
      'Tejiri built our landing page in record time. The conversion rate is noticeably better than what we had before. Very professional and great communicator throughout.',
    rating: 5,
  },
]

export const techPills = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'n8n', 'OpenAI API']

export const contactLinks = {
  whatsapp: 'https://wa.me/2347052381068',
  email: 'tejirigbe@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gbenedio-tejiri-169998123',
  github: 'https://github.com/Tejiri-Gbenedio',
}
