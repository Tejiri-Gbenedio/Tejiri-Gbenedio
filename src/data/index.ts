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

export interface Automation {
  id: number
  title: string
  icon: string
  tagline: string
  tools: string[]
  description: string
  businessImpact: string
  image: string
}

export const automations: Automation[] = [
  {
    id: 1,
    title: 'AI Email Classification',
    icon: 'Mail',
    tagline: 'Auto-sorts and routes your inbox before a human ever reads it.',
    tools: ['n8n', 'GPT-4.1-mini', 'Gmail', 'Airtable'],
    description:
      'Built an intelligent email triage system that automatically reads, classifies, summarizes, and routes incoming emails to the right department — without any human intervention. The workflow polls Gmail every minute, passes each email through a dedicated AI Classifier agent that returns a single department label (Sales, Customer Service, HR, Finance, Operations, or Other), then routes it through a Switch node into the correct branch.\n\nTwo separate AI agents handle distinct jobs: the Classifier uses a temperature of zero and a strict 20-token limit for consistent, deterministic output, while the Summarizer intelligently condenses emails longer than 2,500 characters into 2–3 sentences — leaving shorter emails untouched to avoid unnecessary processing. Each email is then labeled inside Gmail for visual inbox organization and logged to an Airtable database with full metadata: sender, subject, AI-generated summary, department, and timestamp.',
    businessImpact:
      'Businesses and teams that handle high email volumes across multiple departments spend significant time just sorting and reading emails before they can act on them. This system eliminates that entirely — every email is pre-triaged, summarized, and waiting in the right department\'s queue the moment it arrives.',
    image: '/email-classification.png',
  },
  {
    id: 2,
    title: 'Gym Life AI Receptionist',
    icon: 'Dumbbell',
    tagline: '24/7 member management and instant payment links on Telegram.',
    tools: ['n8n', 'GPT-4.1-mini', 'Telegram', 'Airtable', 'Flutterwave'],
    description:
      'Built a fully deployed AI receptionist for a gym business, running 24/7 on Telegram. Members message the bot just as they would a front-desk staff member — asking about their subscription, requesting renewals, raising complaints, or inquiring about gym services — and receive instant, personalized responses at any hour.\n\nThe workflow uses a single GPT-4.1-mini call to both classify the member\'s intent and write a warm, human-sounding reply in one shot. A Switch node then routes each conversation to the appropriate branch: subscription lookups, general enquiries, complaint handling, or payment processing. For the renewal flow, the bot looks up their membership record in Airtable, then calls the Flutterwave payment API to generate a unique, personalized payment link in real time — pre-filled with the member\'s name and email — and delivers it directly in the chat. The entire process, from message to payment link, is fully automated with zero staff involvement.',
    businessImpact:
      'Gyms lose members to poor communication — missed renewal reminders, unanswered messages, no one available after hours. This system ensures every member inquiry gets handled instantly, every renewal gets a payment link within seconds, and the business keeps running even when no staff are at the desk.',
    image: '/gym-ai-receptionist.png',
  },
  {
    id: 3,
    title: 'Konfam FM AI Assistant — RAG Chatbot',
    icon: 'Radio',
    tagline: 'AI assistant that knows the station\'s content and captures advertiser leads.',
    tools: ['n8n', 'GPT-4.1-mini', 'Pinecone', 'Telegram', 'Google Sheets'],
    description:
      'Built a fully automated AI assistant for Konfam FM 89.5, a Lagos-based radio station, deployed as a Telegram bot. The system uses Retrieval-Augmented Generation (RAG) — meaning every user question first queries a Pinecone vector database loaded with the station\'s actual content (shows, schedules, presenters, events) before the AI responds. This ensures the bot never makes up station information.\n\nThe bot handles listener enquiries, show schedules, and event information conversationally — matching the energy of the station\'s brand, including Pidgin-friendly responses. It maintains per-user conversation memory across a session so interactions feel natural and contextual. The standout feature is a built-in lead capture system: when a user expresses interest in advertising, the AI walks them through a structured 3-step conversation to collect their name and phone number. A JavaScript node silently parses the output, logs the lead to Google Sheets, and fires an instant Telegram alert to the station\'s sales team — all while the user simply receives a warm, seamless reply.',
    businessImpact:
      'Radio stations lose advertising enquiries daily to missed calls and unanswered DMs. This system turns every Telegram message into a handled interaction — whether it\'s a listener asking about a show or an advertiser ready to spend.',
    image: '/konfam-rag-agent.png',
  },
  {
    id: 4,
    title: "Mama Tee's Kitchen — AI Voice Receptionist",
    icon: 'Phone',
    tagline: 'Phone AI that takes orders, books reservations, and alerts staff instantly.',
    tools: ['n8n', 'Vapi', 'Airtable', 'Telegram'],
    description:
      "Built the complete backend automation layer for an AI-powered phone receptionist for a Nigerian restaurant. When customers call the restaurant, a Vapi voice AI handles the conversation — taking orders, booking reservations, or capturing callback requests — and fires structured tool calls to this n8n workflow in real time to log and act on everything collected during the call.\n\nThe workflow accepts payloads from two sources — Vapi phone calls and a website chat widget — and uses a JavaScript normalisation node to unify both into a single clean data structure before routing. A Switch node then directs each tool call to the correct Airtable table: a dedicated ORDERS table, a RESERVATIONS table, and a CALLBACKS table. Each table has its own status lifecycle. Once a record is written, the workflow immediately sends a structured HTTP response back to the Vapi voice agent so the call continues without delay. In parallel, formatted Telegram alerts fire to the restaurant's operations chat with the full details and a staff action prompt.",
    businessImpact:
      "Restaurants miss revenue every day through missed calls, forgotten orders, and unanswered reservation requests — especially during busy service hours. This system ensures every call is handled by the AI, every data point is logged automatically, and the right staff member gets an instant notification to follow up.",
    image: '/mama-tee-call-handler.png',
  },
  {
    id: 5,
    title: "Mama Tee's Kitchen — AI Chat Ordering System",
    icon: 'MessageCircle',
    tagline: 'Website chat AI that guides customers through ordering 24/7.',
    tools: ['n8n', 'GPT-4o', 'Airtable', 'Webhook'],
    description:
      "Built the complete AI-powered chat backend for a Nigerian restaurant's website ordering system. Customers open the chat widget, and \"Tee\" — a warm, conversational AI assistant — guides them through the full ordering experience: browsing the menu, selecting items with prices, choosing between pickup and delivery, selecting a delivery zone across Abuja, providing contact details, and confirming their order — all in natural conversation.\n\nEvery message is sent to n8n, which constructs a full prompt including the complete restaurant context and the entire conversation history, then calls GPT-4o with forced JSON output. GPT-4o responds with a structured object containing the reply and an action flag it only sets once the customer has explicitly confirmed. A zone normaliser function sanitises the AI's delivery zone output to match Airtable's exact field values before writing. All records land in the same shared Airtable base as the phone call system, giving the restaurant a single unified operations dashboard regardless of which channel the customer used.",
    businessImpact:
      'Most small restaurants take orders through WhatsApp manually — meaning someone has to be available, read every message, type responses, and remember to log the order. This system handles the entire interaction automatically, 24/7, on the restaurant\'s own website, while writing every confirmed order directly into an operations database ready for the kitchen team.',
    image: '/mama-tee-chat-handler.png',
  },
  {
    id: 6,
    title: 'Autonomous Job Hunt System',
    icon: 'Briefcase',
    tagline: '5-workflow pipeline that scrapes, scores, and writes cover letters automatically.',
    tools: ['n8n', 'Groq', 'Llama 3.3', 'Google Sheets', 'Telegram'],
    description:
      'Built a 5-workflow autonomous job search pipeline that runs every Monday–Wednesday at 9am and handles everything from discovery to application without human involvement.\n\nThe system scrapes five live job platforms (Adzuna, Remotive, RemoteOK and others), filters and deduplicates listings, then scores each job against a structured CV profile across six weighted dimensions — skill match, experience level, location, recency, and more — using Llama 3.3 70B via Groq. High-scoring jobs (75+) automatically get a tailored cover letter written, validated, and saved to disk. Mid-range jobs (50–74) trigger a Telegram alert for manual review. All results are logged to a Google Sheets tracker with status and timestamp. Errors surface instantly via Telegram.',
    businessImpact:
      'Job searching manually takes hours every week — browsing boards, reading listings, deciding what to apply for, then writing individual cover letters. This pipeline compresses the entire discovery-to-application workflow into a single automated run that delivers pre-scored opportunities with cover letters ready. The only human decision left is whether to hit send.',
    image: '/job-hunt-overview.png',
  },
]
