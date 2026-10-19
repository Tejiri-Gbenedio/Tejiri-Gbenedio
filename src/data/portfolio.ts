export interface Project {
  id: string | number
  title: string
  category: 'AI Web Apps' | 'Corporate & SaaS' | 'E-Commerce & Brand' | string
  flagship: boolean
  tagline: string
  summary: string
  techStack: string[]
  liveUrl?: string
  image: string
  metrics?: string
  features?: string[]
  clientNeed?: string
  solution?: string
  status?: 'live' | 'coming-soon'
  hideLink?: boolean
}

export interface AutomationSystem {
  id: string | number
  title: string
  tagline: string
  pipeline: string[]
  tools: string[]
  businessImpact: string
  description: string
  image: string
  videoDemoUrl?: string
  hasVideoModal: boolean
  icon: string
}

export type Automation = AutomationSystem

export interface ServicePillar {
  id: string | number
  number: string
  title: string
  tagline: string
  deliverables: string[]
  idealFor: string
  timeline: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string | number
  clientName: string
  clientRole: string
  company: string
  quote: string
  projectContext: string
  name: string
  role: string
  rating: number
}

export const builderCredential = {
  name: 'Tejiri Gbenedio',
  role: 'AI Automation & Full-Stack Developer',
  badge: 'VERIFIED STACKEDHQ MEMBER',
  stacksEarned: 965,
  reviewedBuilds: 14,
  profileUrl: 'https://thestackedhq.com/builders/tejiri-gbenedio',
  location: 'Lagos, Nigeria (Global Remote)',
}

export const contactLinks = {
  whatsapp: 'https://wa.me/2347084721120',
  whatsappDisplay: '+234 708 472 1120',
  email: 'tejirigbe@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gbenedio-tejiri-169998123',
  github: 'https://github.com/Tejiri-Gbenedio',
  cvPdf: '/tejiri-gbenedio-cv.pdf',
}

export const techPills = [
  'Next.js 16',
  'TypeScript',
  'n8n Orchestration',
  'OpenAI GPT-4o',
  'Vapi Voice AI',
  'Tailwind CSS',
  'Framer Motion',
  'PostgreSQL / Supabase',
  'Pinecone Vector DB',
]

export const projects: Project[] = [
  {
    id: 'dentalcare-hq',
    title: 'DentalCare HQ',
    category: 'Corporate & SaaS',
    flagship: true,
    tagline: 'High-conversion clinical acquisition and patient scheduling platform.',
    summary:
      'A modern patient acquisition and clinical booking platform engineered for frictionless appointment scheduling, service discovery architecture, and local medical search dominance.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://dentalcarehq.vercel.app/',
    image: '/file.svg',
    metrics: 'Sub-second Interactive Booking Flow',
    features: ['Appointment Funnel', 'Clinical Showcase', 'Mobile Ergonomics', 'SEO Architecture'],
    clientNeed: 'Patient drop-off due to slow booking pages.',
    solution: 'Engineered sub-second appointment scheduling and clinical service architecture.',
    status: 'live',
  },
  {
    id: 'rayvora-solar',
    title: 'Rayvora Solar',
    category: 'Corporate & SaaS',
    flagship: true,
    tagline: 'Commercial & residential clean energy consultation and capacity platform.',
    summary:
      'A commercial and residential clean-energy platform featuring modular system capacity showcases, solar ROI consultation funnels, and high-trust industrial design.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://rayvora-solar.vercel.app/',
    image: '/globe.svg',
    metrics: 'Direct ROI Estimator & Consultation Funnel',
    features: ['System Sizing Guide', 'Corporate Inquiries', 'Modern Clean-Tech UI', 'Lead Capture'],
    clientNeed: 'High friction in commercial solar quote requests.',
    solution: 'Modular capacity showcases with interactive ROI estimators.',
    status: 'live',
  },
  {
    id: 'mutiee-bakes',
    title: 'Mutiee Bakes',
    category: 'E-Commerce & Brand',
    flagship: true,
    tagline: 'Interactive culinary showcase and custom bakery inquiry engine.',
    summary:
      'Interactive digital bakery catalog and custom cake inquiry engine with direct WhatsApp order routing and mobile-first photo galleries.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://mutiee-bakes-website.vercel.app/',
    image: '/mutiee-bakes.png',
    metrics: 'Direct Inquiries Growth',
    features: ['Interactive Menu', 'Visual Gallery', 'WhatsApp Route'],
    clientNeed: 'Visual catalog to replace informal DMs.',
    solution: 'Warm photo-driven catalog with direct WhatsApp ordering flow.',
    status: 'live',
  },
  {
    id: 'mamatees-ai-ordering',
    title: "Mama Tee's AI Ordering App",
    category: 'AI Web Apps',
    flagship: false,
    tagline: 'Multi-modal food ordering system uniting voice AI, chat, and WhatsApp fulfillment.',
    summary:
      'A mobile-first culinary ordering platform unifying real-time conversational AI chat ordering, real-time Voice AI phone calling, structured menu browsing, and WhatsApp order fulfillment into a single cohesive system.',
    techStack: ['Next.js', 'TypeScript', 'OpenAI', 'Vapi', 'Tailwind CSS'],
    liveUrl: 'https://mamateeskitchenmenu.netlify.app/',
    image: '/mamatees-app.png',
    metrics: 'Multi-Modal Voice + Chat Ordering',
    features: ['Vapi Voice AI Calling', 'Autonomous AI Chatbot', 'Airtable Sync', 'WhatsApp Handoff'],
    clientNeed: 'Multi-channel order fulfillment without extra staff.',
    solution: 'Engineered voice + chat ordering connected to WhatsApp dispatch.',
    status: 'live',
  },
  {
    id: 'grills-cartel',
    title: 'Grills Cartel',
    category: 'E-Commerce & Brand',
    flagship: false,
    tagline: 'High-contrast digital flagship for a premium grill & BBQ establishment.',
    summary:
      'High-contrast digital flagship for a premium BBQ & grill brand featuring interactive menus, multi-location directions, and instant ordering handoff.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://grills-cartel.netlify.app/',
    image: '/grills-cartel.png',
    metrics: 'Brand Modernization',
    features: ['Full Menu Display', 'Location Direction', 'Mobile Optimized'],
    clientNeed: 'Bold visual brand identity and location finder.',
    solution: 'High-contrast digital menu with location routing.',
    status: 'live',
  },
  {
    id: 'mamatees-kitchen',
    title: "Mama Tee's Kitchen",
    category: 'E-Commerce & Brand',
    flagship: false,
    tagline: 'Mobile-first culinary storefront with instant WhatsApp order dispatch.',
    summary:
      'Mobile-first culinary storefront with full item indexing, real-time price updates, and direct WhatsApp customer order routing.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://mamateeskitchenmenu.netlify.app/',
    image: '/mamatees-kitchen.png',
    metrics: 'Frictionless Order Flow',
    features: ['Mobile Catalog', 'Instant WhatsApp Handoff', 'Rapid CDN'],
    clientNeed: 'Frictionless mobile food ordering.',
    solution: 'One-tap WhatsApp cart handoff.',
    status: 'live',
  },
]

export const priorityAutomations: AutomationSystem[] = [
  {
    id: 'voice-ai-booking',
    title: 'Voice AI Agent for Inbound Calls & Booking',
    tagline: '24/7 human-sounding inbound phone receptionist that qualifies callers and books appointments.',
    pipeline: [
      'Inbound Call',
      'Vapi Voice Agent',
      'n8n Webhook',
      'Calendar Availability Check',
      'Airtable / SMS Confirmation',
    ],
    tools: ['Vapi Voice AI', 'n8n', 'Google Calendar', 'Airtable', 'Twilio'],
    businessImpact:
      'Answers client calls 24/7 with ultra-low voice latency, understands accents and colloquial queries, checks live slot availability, and books appointments autonomously without human operators.',
    description:
      'Engineered an enterprise-grade voice automation using Vapi linked to an n8n orchestration backbone. When a customer dials the business line, the agent converses naturally, extracts scheduling intent, queries calendar availability in real time via webhook, secures the slot, and dispatches multi-channel confirmations.',
    image: '/mama-tee-call-handler.png',
    hasVideoModal: true,
    icon: 'Phone',
  },
  {
    id: 'whatsapp-order-intake',
    title: 'WhatsApp Order Intake & Automated Confirmation System',
    tagline: 'Converts unstructured chat orders into structured database records with instant receipts.',
    pipeline: [
      'WhatsApp Webhook',
      'n8n Orchestrator',
      'GPT-4o Parser',
      'Airtable Inventory & Orders',
      'Automated Receipt Dispatch',
    ],
    tools: ['n8n', 'GPT-4o', 'WhatsApp Cloud API', 'Airtable'],
    businessImpact:
      'Converts messy, unstructured customer WhatsApp messages into structured line-item orders, calculates totals, checks stock levels, logs records, and delivers instant PDF/text receipts.',
    description:
      'Replaced chaotic manual chat management with an autonomous conversational parser. Customers message natural requests; the system validates items against active inventory, handles zone-based delivery fees, creates the order record, and responds in under 3 seconds.',
    image: '/mama-tee-chat-handler.png',
    hasVideoModal: true,
    icon: 'MessageCircle',
  },
  {
    id: 'ai-lead-qualification',
    title: 'AI Chatbot for Lead Qualification & Booking',
    tagline: 'Retrieval-augmented conversational agent that scores prospects and schedules high-value calls.',
    pipeline: [
      'Web Chat Trigger',
      'n8n Agent',
      'Pinecone RAG / GPT-4o',
      'Lead Scoring Router',
      'CRM & Calendar Booking',
    ],
    tools: ['n8n', 'Pinecone Vector DB', 'GPT-4o', 'HubSpot / Sheets', 'Cal.com'],
    businessImpact:
      'Engages site visitors in real time, answers technical domain-specific questions with zero hallucination, scores budget/readiness intent, and directly embeds booking calendar for qualified leads.',
    description:
      'Vector-indexed knowledge base agent that acts as a first-line solutions engineer. Unqualified visitors receive polite automated assistance, while enterprise leads with qualified budget signals are immediately routed to high-priority calendar links.',
    image: '/konfam-rag-agent.png',
    hasVideoModal: true,
    icon: 'Bot',
  },
  {
    id: 'ai-office-assistant',
    title: 'AI Office Assistant on Google Workspace',
    tagline: 'Executive inbox triage, document parsing, spreadsheet logging, and context-aware drafting.',
    pipeline: [
      'Gmail / Drive Trigger',
      'n8n Orchestrator',
      'LLM Executive Summarizer',
      'Google Sheets / Docs',
      'Drafted Replies & Alerts',
    ],
    tools: ['n8n', 'Gmail API', 'Google Drive', 'GPT-4o-mini', 'Slack / Telegram'],
    businessImpact:
      'Automates executive inbox triage, extracts structured data from PDF/DOCX attachments, populates operational spreadsheets, and drafts high-context email replies ready for 1-click approval.',
    description:
      'An end-to-end administrative copilot running in background cron and webhook monitors. Reduces executive email processing time by 80% while ensuring critical vendor invoices and client requests never get lost.',
    image: '/email-classification.png',
    hasVideoModal: true,
    icon: 'Mail',
  },
  {
    id: 'appointment-reminders',
    title: 'Appointment Reminder & SMS Confirmation System',
    tagline: 'Two-way automated SMS/WhatsApp sync preventing no-shows and rescheduling on demand.',
    pipeline: [
      'Scheduled Cron',
      'n8n',
      'Airtable / Calendar Lookup',
      'Twilio / WhatsApp Dispatch',
      'Two-Way Status Sync',
    ],
    tools: ['n8n', 'Twilio', 'WhatsApp Business API', 'Airtable', 'Google Calendar'],
    businessImpact:
      'Eliminates appointment no-shows by dispatching scheduled multi-channel reminders (24h and 2h prior) and autonomously updating booking statuses based on client replies (Confirm / Reschedule / Cancel).',
    description:
      'A bi-directional stateful communication workflow that interprets conversational replies. If a client replies "I need to move this 1 hour later", the LLM parses the request and updates the calendar slot seamlessly.',
    image: '/gym-ai-receptionist.png',
    hasVideoModal: true,
    icon: 'Calendar',
  },
  {
    id: 'multichannel-intake',
    title: 'Multi-Channel Intake to Structured Records',
    tagline: 'Schema-validated normalization engine turning emails, PDFs, and forms into central database rows.',
    pipeline: [
      'Email / Webhooks / Forms',
      'n8n Normalization Engine',
      'LLM Entity Extraction',
      'Validation Layer',
      'Central Database',
    ],
    tools: ['n8n', 'GPT-4o', 'PostgreSQL', 'Airtable', 'Webhook Gateway'],
    businessImpact:
      'Unifies inbound data streams from emails, attachments, and forms into clean, schema-validated database records without manual data entry or human copy-pasting.',
    description:
      'Standardizes disparate vendor records and user registrations into a single canonical JSON schema before inserting into production databases, guaranteeing 100% data hygiene across all company departments.',
    image: '/job-hunt-overview.png',
    hasVideoModal: true,
    icon: 'Database',
  },
]

export const archiveAutomations: AutomationSystem[] = [
  {
    id: 'konfam-fm',
    title: 'Konfam FM 89.5 AI Assistant — Live RAG Chatbot',
    tagline: 'Telegram RAG bot for live radio show scheduling and advertiser lead capture.',
    pipeline: ['Telegram Message', 'Pinecone RAG', 'GPT-4.1-mini', 'Google Sheets Lead Log', 'Sales Alert'],
    tools: ['n8n', 'GPT-4.1-mini', 'Pinecone', 'Telegram', 'Google Sheets'],
    businessImpact: 'Captures advertising sponsorship leads and answers listener show schedules in natural Nigerian Pidgin/English.',
    description: 'Vector-indexed station assistant that handles radio inquiries and funnels high-budget advertisers directly to sales.',
    image: '/konfam-rag-agent.png',
    hasVideoModal: false,
    icon: 'Radio',
  },
  {
    id: 'gym-life',
    title: 'Gym Life AI Receptionist & Payment Pipeline',
    tagline: '24/7 fitness membership renewals and real-time Flutterwave payment link generation.',
    pipeline: ['Telegram Enquiry', 'GPT Intent Classifier', 'Airtable Lookup', 'Flutterwave API', 'Instant Checkout Link'],
    tools: ['n8n', 'GPT-4.1-mini', 'Telegram', 'Airtable', 'Flutterwave'],
    businessImpact: 'Recovers lapsed gym memberships 24/7 with zero front-desk personnel overhead.',
    description: 'Generates customized Flutterwave payment links directly inside Telegram chats, logging transactions back to Airtable.',
    image: '/gym-ai-receptionist.png',
    hasVideoModal: false,
    icon: 'Dumbbell',
  },
  {
    id: 'job-hunt-pipeline',
    title: 'Autonomous Job Hunt System',
    tagline: 'Multi-agent scraper and CV matcher with automated customized cover letter creation.',
    pipeline: ['5 Job APIs', 'Deduplication', 'Groq / Llama 3.3 Scoring', 'Cover Letter Generator', 'Telegram Dispatch'],
    tools: ['n8n', 'Groq', 'Llama 3.3', 'Google Sheets', 'Telegram'],
    businessImpact: 'Compresses 15 hours of weekly manual job discovery into an automated 9am evaluation and cover letter pipeline.',
    description: 'Scrapes live engineering roles, evaluates profile match across 6 vectors, and outputs custom draft materials.',
    image: '/job-hunt-overview.png',
    hasVideoModal: false,
    icon: 'Briefcase',
  },
  {
    id: 'email-classifier',
    title: 'AI Email Classification & Routing Engine',
    tagline: 'Automated departmental routing and executive email condensation.',
    pipeline: ['Gmail Polling', 'Zero-Temp Classifier', 'Summarizer Agent', 'Gmail Labeling', 'Airtable Ledger'],
    tools: ['n8n', 'GPT-4.1-mini', 'Gmail', 'Airtable'],
    businessImpact: 'Pre-triages 100% of inbound corporate communications with zero manual sorting.',
    description: 'Routes inquiries to Sales, Ops, Support, or Finance queues while attaching executive summaries for fast review.',
    image: '/email-classification.png',
    hasVideoModal: false,
    icon: 'Mail',
  },
]

// Backwards-compatible aliases for other pages while we develop phases 3, 4, 5
export const automations = [...priorityAutomations, ...archiveAutomations]

export const servicePillars: ServicePillar[] = [
  {
    id: 'ai-automations',
    number: '01',
    title: 'AI Automations & Custom AI Agents',
    tagline: 'Automate your customer support, phone calls, WhatsApp orders, and daily repetitive tasks.',
    description: 'I build custom AI workflows using n8n, OpenAI, and Voice AI that answer customer inquiries, qualify leads, book appointments, and update your spreadsheets or CRM automatically.',
    deliverables: [
      'Inbound Voice AI receptionist with calendar & CRM sync',
      'Conversational WhatsApp & Web Chat order-taking engines',
      'RAG knowledge assistants with zero hallucination guardrails',
      'Automated inbox triage, document parsing, and invoice routing',
    ],
    idealFor: 'Businesses spending 20+ hours a week on repetitive customer intake, appointment booking, or manual data entry.',
    timeline: '2 – 3 Weeks per production workflow system',
    icon: 'Bot',
  },
  {
    id: 'fullstack-web',
    number: '02',
    title: 'Custom Web Applications & AI Platforms',
    tagline: 'Full-stack web apps, booking platforms, client portals, and internal business tools.',
    description: 'Need more than a standard website? I build fast, secure web applications with databases, user accounts, payment integration, and built-in AI features tailored to how your business operates.',
    deliverables: [
      'Next.js 16 + TypeScript architectural web apps',
      'AI-integrated search, generation, and voice chat surfaces',
      'Tailored conversion funnels and checkout experiences',
      'Studio-grade editorial motion and micro-interactions',
    ],
    idealFor: 'Founders and high-growth brands needing a flagship digital product that converts and commands authority.',
    timeline: '3 – 5 Weeks from design system to production launch',
    icon: 'Globe',
  },
  {
    id: 'architecture-apis',
    number: '03',
    title: 'Business Websites, Landing Pages & E-Commerce',
    tagline: 'Clean, fast, mobile-ready websites designed to make your brand look professional and turn visitors into paying customers.',
    description: 'From high-converting landing pages for your ads to full company websites and online stores with WhatsApp or card checkout — built to load fast and rank on Google.',
    deliverables: [
      'High-converting landing pages & company flagships',
      'E-commerce catalogs with automated WhatsApp or card checkout',
      'Sub-second page speeds with 95+ Google Lighthouse scores',
      'SEO-engineered metadata and schema markup',
    ],
    idealFor: 'Companies needing an authoritative digital flagship that turns traffic into qualified inquiries and sales.',
    timeline: '2 – 4 Weeks depending on system scope',
    icon: 'Layers',
  },
]

export const services = servicePillars

export const testimonials: Testimonial[] = [
  {
    id: 'chiamaka-obi',
    clientName: 'Chiamaka Obi',
    clientRole: 'Founder & Head Baker',
    company: 'Mutiee Bakes',
    name: 'Chiamaka Obi',
    role: 'Founder & Head Baker, Mutiee Bakes',
    rating: 5,
    quote:
      'Tejiri completely transformed how our business appears online. Customers find our catalog and initiate customized orders directly through WhatsApp. The design is crisp, elegant, and perfectly represents our brand standards.',
    projectContext: 'Digital Catalog & WhatsApp Inquiry Engine',
  },
  {
    id: 'david-eghosa',
    clientName: 'David Eghosa',
    clientRole: 'Co-Founder',
    company: 'Grills Cartel',
    name: 'David Eghosa',
    role: 'Co-Founder, Grills Cartel',
    rating: 5,
    quote:
      'Unmatched execution speed and architectural precision. Our visitors immediately find our menu and locations without friction. We regularly receive customers saying our digital presence stood out compared to any other grill brand.',
    projectContext: 'High-Impact Brand Flagship & Menu Architecture',
  },
  {
    id: 'tolu-adeyemi',
    clientName: 'Tolu Adeyemi',
    clientRole: 'Startup Product Lead',
    company: 'SaaS Acquisition Venture',
    name: 'Tolu Adeyemi',
    role: 'Startup Product Lead',
    rating: 5,
    quote:
      'Tejiri engineered our landing and customer funnel in record turnaround. The visual polish, typography contrast, and conversion rates were immediately evident. Exceptionally communicative engineer.',
    projectContext: 'High-Conversion Acquisition Platform',
  },
]

export const cv = {
  title: 'Tejiri Gbenedio CV',
  role: 'AI Automation & Full-Stack Developer',
  summary:
    'A concise overview of my automation, web development, project management, and creative experience for recruiters, clients, and collaborators.',
  file: contactLinks.cvPdf,
  previewImage: '/tejiri-gbenedio-cv-preview-1.png',
  fileName: 'Tejiri-Gbenedio-CV.pdf',
  updated: 'April 2026',
}
