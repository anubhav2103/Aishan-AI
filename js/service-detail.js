/* ============================================
   AI Agent Service - Service Detail Page JS
   ============================================ */

// ---- Service Data for All AI Agents ----
const servicesData = {
  'voice-call': {
    icon: 'fa-phone-volume',
    name: 'Voice Call AI Agent',
    tagline: 'Supercharge your sales team with AI-powered voice calls that convert. Built for real estate, insurance, banking, and high-ticket sales.',
    features: [
      { icon: 'fa-microphone-lines', title: 'Natural Voice Conversations', desc: 'Human-like AI voice that engages prospects naturally with context-aware responses.' },
      { icon: 'fa-language', title: 'Multi-Language Support', desc: 'Supports 12+ Indian and international languages including Hindi, English, Tamil, and more.' },
      { icon: 'fa-chart-bar', title: 'Real-Time Analytics', desc: 'Live dashboard tracking call outcomes, conversion rates, and customer sentiment.' },
      { icon: 'fa-plug', title: 'CRM Integration', desc: 'Seamless integration with Salesforce, HubSpot, Zoho, and custom CRMs.' },
      { icon: 'fa-clock', title: '24/7 Availability', desc: 'Never miss a lead. AI agent works around the clock, even on holidays.' },
      { icon: 'fa-shield-halved', title: 'Compliance Built-In', desc: 'DND registry compliance, call recording consent, and TRAI regulations handled automatically.' }
    ],
    howItWorks: [
      { step: 1, title: 'Upload Your Leads', desc: 'Import your lead database via CSV, API, or direct CRM sync.' },
      { step: 2, title: 'Configure AI Script', desc: 'Customize conversation flow, objection handling, and qualification criteria.' },
      { step: 3, title: 'AI Makes Calls', desc: 'The AI agent initiates calls, qualifies leads, and handles objections naturally.' },
      { step: 4, title: 'Warm Transfer', desc: 'Hot leads are transferred to your sales team in real-time with full context.' },
      { step: 5, title: 'Review & Optimize', desc: 'Analyze call recordings, refine scripts, and continuously improve conversion rates.' }
    ],
    useCases: [
      { icon: 'fa-building', title: 'Real Estate Sales', desc: 'Qualify property buyers, schedule site visits, and follow up on inquiries automatically.' },
      { icon: 'fa-shield-halved', title: 'Insurance Sales', desc: 'Explain policy features, handle objections, and schedule meetings with agents.' },
      { icon: 'fa-landmark', title: 'Banking & Finance', desc: 'Cross-sell products, collect feedback, and manage loan application follow-ups.' },
      { icon: 'fa-car', title: 'Automotive Sales', desc: 'Book test drives, share vehicle details, and nurture leads to purchase.' }
    ],
    pricing: {
      basic: { price: '₹9,999', period: '/month', desc: 'For small teams getting started', features: ['Up to 1,000 calls/month', 'Basic voice AI', '1 language', 'Email support', 'Basic analytics', 'Standard scripts'], disabled: ['CRM integration', 'Custom voice', 'Priority support'] },
      pro: { price: '₹24,999', period: '/month', desc: 'For growing sales teams', features: ['Up to 10,000 calls/month', 'Advanced voice AI', '5 languages', 'CRM integration', 'Advanced analytics', 'Custom scripts', 'Warm transfer', 'Priority support'], disabled: ['Custom voice cloning'] },
      enterprise: { price: 'Custom', period: '', desc: 'For large-scale operations', features: ['Unlimited calls', 'Premium voice AI', 'All languages', 'Custom CRM integration', 'Real-time analytics', 'Custom voice cloning', 'Dedicated account manager', '24/7 phone support', 'SLA guarantee'], disabled: [] }
    }
  },
  'daily-tasks': {
    icon: 'fa-list-check',
    name: 'Day-to-Day Task AI Agent',
    tagline: 'Your personal AI assistant that manages calendars, tasks, reminders, and follow-ups so you can focus on what matters.',
    features: [
      { icon: 'fa-calendar-check', title: 'Smart Calendar Management', desc: 'AI schedules meetings, avoids conflicts, and suggests optimal time slots.' },
      { icon: 'fa-bell', title: 'Intelligent Reminders', desc: 'Context-aware reminders that adapt based on your habits and priorities.' },
      { icon: 'fa-envelope', title: 'Email Summarization', desc: 'AI reads and summarizes your emails, drafts responses, and flags urgent items.' },
      { icon: 'fa-repeat', title: 'Workflow Automation', desc: 'Automate repetitive tasks like data entry, report generation, and follow-ups.' },
      { icon: 'fa-comment-dots', title: 'Natural Language Commands', desc: 'Just tell the AI what you need in plain language — it figures out the rest.' },
      { icon: 'fa-link', title: 'App Integrations', desc: 'Connects with Google Workspace, Microsoft 365, Slack, Trello, and 100+ apps.' }
    ],
    howItWorks: [
      { step: 1, title: 'Connect Your Apps', desc: 'Link your calendar, email, task manager, and communication tools.' },
      { step: 2, title: 'Set Preferences', desc: 'Define your working hours, priorities, and preferred workflows.' },
      { step: 3, title: 'AI Learns Your Patterns', desc: 'The agent studies your habits and optimizes task management over time.' },
      { step: 4, title: 'Automate & Delegate', desc: 'AI handles scheduling, reminders, follow-ups, and routine tasks.' },
      { step: 5, title: 'Daily Summary', desc: 'Get a morning brief and evening recap of what was accomplished.' }
    ],
    useCases: [
      { icon: 'fa-user-tie', title: 'Busy Professionals', desc: 'Manage packed schedules, prioritize tasks, and never miss deadlines.' },
      { icon: 'fa-people-group', title: 'Team Managers', desc: 'Track team tasks, send follow-up reminders, and manage workloads.' },
      { icon: 'fa-briefcase', title: 'Freelancers', desc: 'Juggle multiple clients, invoices, deadlines, and meetings effortlessly.' },
      { icon: 'fa-graduation-cap', title: 'Students', desc: 'Manage assignments, class schedules, exam prep, and extracurricular activities.' }
    ],
    pricing: {
      basic: { price: '₹499', period: '/month', desc: 'For individual users', features: ['Basic task management', 'Calendar sync', 'Daily reminders', '1 app integration', 'Email support', 'Basic automation'], disabled: ['Email summarization', 'Team features', 'Priority support'] },
      pro: { price: '₹1,499', period: '/month', desc: 'For power users', features: ['Advanced task management', 'Smart scheduling', 'Unlimited reminders', '10 app integrations', 'Email summarization', 'Custom workflows', 'Priority support', 'Weekly reports'], disabled: ['Team management'] },
      enterprise: { price: '₹4,999', period: '/month', desc: 'For teams & organizations', features: ['Everything in Pro', 'Team management', 'Unlimited integrations', 'Custom automation', 'Admin dashboard', 'API access', 'Dedicated support', 'Data export', 'SSO & security'], disabled: [] }
    }
  },
  'emi-reminder': {
    icon: 'fa-indian-rupee-sign',
    name: 'EMI Due Date Reminder Agent',
    tagline: 'Reduce payment defaults with smart, polite, and persistent AI-powered EMI reminders via calls, SMS, and WhatsApp.',
    features: [
      { icon: 'fa-clock', title: 'Timely Reminders', desc: 'Automated reminders 7, 3, and 1 day before EMI due date with escalation logic.' },
      { icon: 'fa-comments', title: 'Multi-Channel Outreach', desc: 'Reach customers via voice call, SMS, WhatsApp, and email — all automated.' },
      { icon: 'fa-hand-holding-dollar', title: 'Payment Link Sharing', desc: 'AI shares direct UPI and payment gateway links during the conversation.' },
      { icon: 'fa-face-smile', title: 'Polite & Professional', desc: 'Carefully crafted tone that maintains customer relationship while ensuring action.' },
      { icon: 'fa-calendar-days', title: 'Reschedule Options', desc: 'Customers can request EMI reschedule or partial payment through the AI.' },
      { icon: 'fa-chart-pie', title: 'Collection Analytics', desc: 'Track collection rates, promise-to-pay ratios, and agent performance.' }
    ],
    howItWorks: [
      { step: 1, title: 'Upload EMI Data', desc: 'Import customer loan data with EMI schedules via API or file upload.' },
      { step: 2, title: 'Set Reminder Rules', desc: 'Configure reminder frequency, channels, escalation rules, and tone.' },
      { step: 3, title: 'AI Reaches Out', desc: 'Agent contacts customers across channels with personalized payment reminders.' },
      { step: 4, title: 'Handle Responses', desc: 'AI processes payments, schedules callbacks, and logs promise-to-pay.' },
      { step: 5, title: 'Escalation', desc: 'Unresolved cases are escalated to human agents with full conversation history.' }
    ],
    useCases: [
      { icon: 'fa-landmark', title: 'Banks & NBFCs', desc: 'Automate loan EMI collections for personal, home, and vehicle loans.' },
      { icon: 'fa-mobile-screen', title: 'Fintech Companies', desc: 'Manage BNPL and micro-loan collections at scale with AI efficiency.' },
      { icon: 'fa-building-columns', title: 'Housing Finance', desc: 'Send home loan EMI reminders with payment options and support.' },
      { icon: 'fa-credit-card', title: 'Credit Cards', desc: 'Remind customers about minimum due, total due, and offer EMI conversion.' }
    ],
    pricing: {
      basic: { price: '₹7,999', period: '/month', desc: 'For small lenders', features: ['Up to 2,000 reminders/month', 'Voice + SMS', '1 language', 'Basic analytics', 'Email support', 'Standard templates'], disabled: ['WhatsApp integration', 'Payment links', 'Custom escalation'] },
      pro: { price: '₹19,999', period: '/month', desc: 'For mid-size lenders', features: ['Up to 20,000 reminders/month', 'Voice + SMS + WhatsApp', '5 languages', 'Payment link sharing', 'Advanced analytics', 'Custom templates', 'Escalation rules', 'Priority support'], disabled: ['Custom API integration'] },
      enterprise: { price: 'Custom', period: '', desc: 'For banks & large NBFCs', features: ['Unlimited reminders', 'All channels', 'All languages', 'Custom API integration', 'Real-time dashboard', 'Dedicated account manager', 'Regulatory compliance', 'SLA guarantee', 'On-premise option'], disabled: [] }
    }
  },
  'doctor-appointment': {
    icon: 'fa-user-doctor',
    name: 'Doctor Appointment AI Agent',
    tagline: 'Streamline patient scheduling, reduce no-shows, and improve healthcare access with intelligent AI-powered appointment management.',
    features: [
      { icon: 'fa-calendar-plus', title: 'Smart Scheduling', desc: 'AI finds optimal appointment slots based on doctor availability and patient preferences.' },
      { icon: 'fa-rotate', title: 'Easy Rescheduling', desc: 'Patients can reschedule via voice or chat — AI handles the entire process.' },
      { icon: 'fa-bell-concierge', title: 'Appointment Reminders', desc: 'Automated reminders via call, SMS, and WhatsApp to minimize no-shows.' },
      { icon: 'fa-notes-medical', title: 'Pre-Visit Info Collection', desc: 'AI gathers symptoms, medical history, and insurance details before the visit.' },
      { icon: 'fa-hospital', title: 'Multi-Location Support', desc: 'Manage appointments across multiple clinics, hospitals, and doctor profiles.' },
      { icon: 'fa-lock', title: 'HIPAA Compliant', desc: 'Enterprise-grade security and compliance for patient data protection.' }
    ],
    howItWorks: [
      { step: 1, title: 'Setup Clinic Profile', desc: 'Add doctor profiles, specialties, available slots, and clinic locations.' },
      { step: 2, title: 'Patient Calls or Messages', desc: 'AI answers patient inquiries about availability, specialties, and location.' },
      { step: 3, title: 'Smart Slot Suggestion', desc: 'AI suggests best time slots based on urgency, preference, and doctor load.' },
      { step: 4, title: 'Confirmation & Reminders', desc: 'Booking confirmed instantly with automated reminders before appointment.' },
      { step: 5, title: 'Follow-Up', desc: 'Post-visit follow-up for feedback, next appointment, and prescription reminders.' }
    ],
    useCases: [
      { icon: 'fa-stethoscope', title: 'Private Clinics', desc: 'Manage patient flow for solo practitioners and small group practices.' },
      { icon: 'fa-hospital', title: 'Multi-Specialty Hospitals', desc: 'Centralized booking across departments with smart doctor assignment.' },
      { icon: 'fa-tooth', title: 'Dental Clinics', desc: 'Schedule cleanings, procedures, and follow-ups with automated reminders.' },
      { icon: 'fa-eye', title: 'Eye Care Centers', desc: 'Book eye exams, manage follow-ups, and handle prescription renewals.' }
    ],
    pricing: {
      basic: { price: '₹5,999', period: '/month', desc: 'For solo practitioners', features: ['1 doctor profile', 'Up to 200 appointments/month', 'SMS reminders', 'Basic scheduling', 'Email support', 'Patient portal'], disabled: ['Multi-location', 'Pre-visit forms', 'API access'] },
      pro: { price: '₹14,999', period: '/month', desc: 'For clinics & group practices', features: ['Up to 10 doctor profiles', 'Up to 2,000 appointments/month', 'Call + SMS + WhatsApp reminders', 'Smart scheduling', 'Pre-visit info collection', 'Multi-location support', 'Priority support', 'Analytics dashboard'], disabled: ['Custom integration'] },
      enterprise: { price: 'Custom', period: '', desc: 'For hospitals & chains', features: ['Unlimited doctors', 'Unlimited appointments', 'All channels', 'Custom EHR integration', 'Multi-location + departments', 'Real-time analytics', 'HIPAA compliance', 'Dedicated support', 'White-label option'], disabled: [] }
    }
  },
  'salon-appointment': {
    icon: 'fa-scissors',
    name: 'Salon Appointment & Time Suggestion Agent',
    tagline: 'Fill your salon chairs with smart AI booking that suggests the best times, manages stylists, and keeps customers coming back.',
    features: [
      { icon: 'fa-wand-magic-sparkles', title: 'Smart Time Suggestions', desc: 'AI analyzes salon load and suggests optimal slots to minimize wait and maximize bookings.' },
      { icon: 'fa-user-group', title: 'Stylist Matching', desc: 'Automatically matches customers with their preferred or best-available stylist.' },
      { icon: 'fa-spa', title: 'Service Upselling', desc: 'AI suggests complementary services based on booking history and preferences.' },
      { icon: 'fa-star', title: 'Loyalty & Rewards', desc: 'Track visit history, manage loyalty points, and trigger special offers automatically.' },
      { icon: 'fa-rotate-left', title: 'Cancellation Management', desc: 'Handles cancellations, fills empty slots from waitlist, and manages refunds.' },
      { icon: 'fa-mobile-retro', title: 'Walk-In Management', desc: 'Real-time queue management for walk-in customers with wait time estimates.' }
    ],
    howItWorks: [
      { step: 1, title: 'Setup Your Salon', desc: 'Add services, stylists, pricing, working hours, and salon locations.' },
      { step: 2, title: 'Customer Reaches Out', desc: 'AI handles booking requests via phone, WhatsApp, website chat, or social media.' },
      { step: 3, title: 'AI Suggests Best Slots', desc: 'Based on service duration, stylist availability, and salon load — AI picks the best times.' },
      { step: 4, title: 'Book & Confirm', desc: 'Instant booking with confirmation message and calendar invite to the customer.' },
      { step: 5, title: 'Reminders & Follow-Up', desc: 'Pre-appointment reminders and post-visit feedback requests with rebooking suggestions.' }
    ],
    useCases: [
      { icon: 'fa-scissors', title: 'Hair Salons', desc: 'Manage haircut, coloring, and styling appointments with stylist preferences.' },
      { icon: 'fa-spa', title: 'Spas & Wellness', desc: 'Book massages, facials, and wellness treatments with room/therapist management.' },
      { icon: 'fa-paintbrush', title: 'Nail Studios', desc: 'Schedule manicures, pedicures, and nail art with duration-based slot management.' },
      { icon: 'fa-face-smile-beam', title: 'Beauty Studios', desc: 'Manage bridal makeup, party packages, and recurring beauty appointments.' }
    ],
    pricing: {
      basic: { price: '₹2,999', period: '/month', desc: 'For single-location salons', features: ['1 location', 'Up to 5 stylists', 'Up to 500 bookings/month', 'SMS reminders', 'Basic scheduling', 'Email support'], disabled: ['Smart time suggestions', 'Upselling', 'Multi-location'] },
      pro: { price: '₹7,999', period: '/month', desc: 'For growing salons', features: ['Up to 3 locations', 'Up to 20 stylists', 'Up to 3,000 bookings/month', 'Smart time suggestions', 'Stylist matching', 'Service upselling', 'WhatsApp integration', 'Priority support'], disabled: ['Loyalty program'] },
      enterprise: { price: '₹19,999', period: '/month', desc: 'For salon chains', features: ['Unlimited locations', 'Unlimited stylists', 'Unlimited bookings', 'Full AI features', 'Loyalty & rewards program', 'Walk-in management', 'Custom branding', 'API access', 'Dedicated account manager'], disabled: [] }
    }
  },
  'marketing-leads': {
    icon: 'fa-bullhorn',
    name: 'Marketing & Lead Generation Agent',
    tagline: 'Turn website visitors and social media engagement into qualified sales leads with AI-powered conversations and smart follow-ups.',
    features: [
      { icon: 'fa-robot', title: 'AI Chatbot Qualification', desc: 'Intelligent chat widget that qualifies leads through natural conversations on your website.' },
      { icon: 'fa-hashtag', title: 'Social Media Integration', desc: 'Captures and qualifies leads from Facebook, Instagram, LinkedIn, and Google Ads.' },
      { icon: 'fa-filter', title: 'Lead Scoring', desc: 'AI scores leads based on behavior, engagement, and purchase intent signals.' },
      { icon: 'fa-envelopes-bulk', title: 'Automated Nurturing', desc: 'Multi-step email and WhatsApp drip campaigns triggered by lead behavior.' },
      { icon: 'fa-bullseye', title: 'Retargeting Intelligence', desc: 'AI identifies high-intent visitors and triggers personalized retargeting campaigns.' },
      { icon: 'fa-magnifying-glass-chart', title: 'ROI Tracking', desc: 'Track cost per lead, conversion rates, and campaign ROI across all channels.' }
    ],
    howItWorks: [
      { step: 1, title: 'Install & Configure', desc: 'Add AI chat widget to your website and connect social media ad accounts.' },
      { step: 2, title: 'Define Lead Criteria', desc: 'Set qualification questions, scoring rules, and ideal customer profiles.' },
      { step: 3, title: 'AI Captures Leads', desc: 'AI engages visitors, answers questions, and captures contact information naturally.' },
      { step: 4, title: 'Score & Nurture', desc: 'Leads are scored, segmented, and enrolled in automated nurturing campaigns.' },
      { step: 5, title: 'Deliver to Sales', desc: 'Qualified leads are pushed to your CRM with full context for sales follow-up.' }
    ],
    useCases: [
      { icon: 'fa-store', title: 'E-Commerce', desc: 'Convert abandoned carts, answer product queries, and upsell through AI chat.' },
      { icon: 'fa-laptop-code', title: 'SaaS Companies', desc: 'Qualify demo requests, handle pricing questions, and book sales calls.' },
      { icon: 'fa-graduation-cap', title: 'EdTech', desc: 'Capture student inquiries, explain courses, and schedule counseling sessions.' },
      { icon: 'fa-building', title: 'Real Estate', desc: 'Qualify property buyers from ads, share brochures, and schedule site visits.' }
    ],
    pricing: {
      basic: { price: '₹4,999', period: '/month', desc: 'For small businesses', features: ['Up to 500 leads/month', 'Website chatbot', 'Basic lead scoring', 'Email integration', 'Basic analytics', 'Email support'], disabled: ['Social media integration', 'Drip campaigns', 'CRM integration'] },
      pro: { price: '₹14,999', period: '/month', desc: 'For marketing teams', features: ['Up to 5,000 leads/month', 'Website + social chatbot', 'Advanced lead scoring', 'Email + WhatsApp nurturing', 'CRM integration', 'A/B testing', 'Priority support', 'ROI dashboard'], disabled: ['Custom AI training'] },
      enterprise: { price: 'Custom', period: '', desc: 'For agencies & enterprises', features: ['Unlimited leads', 'All channels', 'Custom AI training', 'White-label option', 'API access', 'Multi-brand support', 'Dedicated strategist', 'Custom analytics', 'SLA guarantee'], disabled: [] }
    }
  },
  'web-development': {
    icon: 'fa-code',
    name: 'Dynamic & Portfolio Websites',
    tagline: 'From jaw-dropping portfolios to high-converting business websites — we craft pixel-perfect, blazing-fast, SEO-optimized websites using React, Next.js, Vue, and modern frameworks. Your brand deserves a website that works as hard as you do.',
    features: [
      { icon: 'fa-laptop-code', title: 'Custom Design & Development', desc: 'No templates. Every website is designed from scratch in Figma, then hand-coded with React, Next.js, Vue.js, or classic HTML/CSS/JS. We build it to match your brand DNA perfectly.' },
      { icon: 'fa-mobile-screen', title: 'Fully Responsive & Mobile-First', desc: 'Your website looks flawless on every device — phones, tablets, laptops, and 4K monitors. We design mobile-first because 70% of web traffic is now mobile.' },
      { icon: 'fa-gauge-high', title: 'Lightning Fast Performance', desc: 'Sub-2-second load times. Lazy loading, image optimization, CDN delivery, code splitting, and Core Web Vitals mastery. Speed = better SEO + more conversions.' },
      { icon: 'fa-palette', title: 'Portfolio & Creative Showcase', desc: 'Stunning portfolio sites for freelancers, photographers, designers, agencies, and artists. Masonry galleries, lightboxes, smooth scrolling, parallax effects, and project case studies.' },
      { icon: 'fa-database', title: 'Dynamic CMS & Admin Panel', desc: 'Update your content without touching code. WordPress, Strapi, Sanity, or custom admin dashboards — you control your site\'s content, blog, and media.' },
      { icon: 'fa-shield-halved', title: 'SEO & Security Hardened', desc: 'Every website ships with on-page SEO, structured data schema, XML sitemap, robots.txt, SSL, security headers, and XSS/CSRF protection built-in.' },
      { icon: 'fa-wand-magic-sparkles', title: 'Animations & Micro-Interactions', desc: 'Scroll-triggered animations (AOS, GSAP), hover effects, page transitions, loading animations, and interactive elements that make your site memorable.' },
      { icon: 'fa-cart-shopping', title: 'E-Commerce Ready', desc: 'Full online stores with Shopify, WooCommerce, or custom checkout. Product catalogs, cart, payment gateway (Razorpay, Stripe), order management, and inventory.' },
      { icon: 'fa-plug', title: 'Third-Party Integrations', desc: 'Connect Google Analytics, Meta Pixel, CRM, email marketing (Mailchimp, ConvertKit), booking systems, payment gateways, and any API you need.' }
    ],
    howItWorks: [
      { step: 1, title: 'Discovery & Strategy Call', desc: 'We dive deep into your brand, goals, target audience, competitors, and technical needs. You get a detailed project roadmap and timeline.' },
      { step: 2, title: 'UI/UX Design in Figma', desc: 'Our designers create wireframes → high-fidelity mockups → interactive prototypes. You approve every screen before we write a single line of code.' },
      { step: 3, title: 'Frontend & Backend Development', desc: 'Clean, semantic, scalable code. React/Next.js for complex sites, or optimized HTML/CSS/JS for simpler ones. Backend with Node.js, Python, or PHP as needed.' },
      { step: 4, title: 'Content, SEO & Performance', desc: 'We add your content, optimize every page for SEO, compress images, set up analytics, and run Lighthouse audits until you score 90+ on all metrics.' },
      { step: 5, title: 'Testing Across 20+ Devices', desc: 'We test on Chrome, Firefox, Safari, Edge + real iOS and Android devices. Cross-browser, accessibility (WCAG), and responsive checks at every breakpoint.' },
      { step: 6, title: 'Launch, Training & Support', desc: 'We deploy to your domain, set up hosting (Vercel, Netlify, AWS), train you on the CMS, and provide ongoing maintenance and support.' }
    ],
    useCases: [
      { icon: 'fa-building', title: 'Business & Corporate Websites', desc: 'Professional multi-page websites for startups, SMBs, consulting firms, and enterprises with lead capture, team pages, and service showcases.' },
      { icon: 'fa-camera', title: 'Creative Portfolios', desc: 'Showcase photography, design work, art, architecture, or any creative project with beautiful galleries, case studies, and smooth animations.' },
      { icon: 'fa-cart-shopping', title: 'E-Commerce & Online Stores', desc: 'Complete online stores with product catalog, filters, cart, checkout, payment integration, and order tracking.' },
      { icon: 'fa-rocket', title: 'Startup & SaaS Landing Pages', desc: 'High-converting landing pages with hero sections, feature grids, pricing tables, testimonials, and clear CTAs for product launches.' },
      { icon: 'fa-blog', title: 'Blogs & Content Platforms', desc: 'SEO-optimized blog platforms with CMS, categories, tags, search, author profiles, and social sharing built-in.' },
      { icon: 'fa-utensils', title: 'Restaurant & Service Sites', desc: 'Menus, online ordering, reservation systems, location maps, and Google Business integration for local businesses.' }
    ],
    pricing: {
      basic: { price: '₹14,999', period: ' one-time', desc: 'For simple websites', features: ['Up to 5 pages', 'Responsive design', 'Contact form', 'Basic SEO setup', 'Mobile friendly', 'Basic animations', 'Google Analytics', '1 month support'], disabled: ['CMS/Admin panel', 'Custom animations', 'E-commerce'] },
      pro: { price: '₹49,999', period: ' one-time', desc: 'For business websites', features: ['Up to 15 pages', 'Custom Figma design', 'CMS / Admin panel', 'Advanced SEO & schema', 'GSAP/AOS animations', 'Blog setup', 'Social media integration', 'Performance optimization', '3 months support'], disabled: ['E-commerce features'] },
      enterprise: { price: 'Custom', period: '', desc: 'For complex web apps', features: ['Unlimited pages', 'React / Next.js development', 'Full-stack custom backend', 'E-commerce / SaaS features', 'Custom CMS & admin', 'API integrations', 'Advanced security', '12 months support', 'Dedicated project manager'], disabled: [] }
    }
  },
  'app-development': {
    icon: 'fa-mobile-screen-button',
    name: 'App Development',
    tagline: 'We turn your app idea into reality. Custom iOS, Android, and cross-platform apps with AI-powered features, beautiful UI, scalable architecture, and end-to-end support — from concept to App Store to 1 million users.',
    features: [
      { icon: 'fa-apple-whole', title: 'iOS & Android Native Apps', desc: 'High-performance native apps built with Swift (iOS) and Kotlin (Android), or cross-platform with React Native and Flutter for faster delivery at lower cost.' },
      { icon: 'fa-robot', title: 'AI-Powered Smart Features', desc: 'Integrate AI chatbots, voice assistants, recommendation engines, image recognition, predictive analytics, and natural language processing directly into your app.' },
      { icon: 'fa-server', title: 'Scalable Cloud Backend', desc: 'Cloud-native backends on AWS, GCP, or Azure with Node.js, Python, or Go. Microservices, real-time databases (Firebase, Supabase), and auto-scaling for millions of users.' },
      { icon: 'fa-paintbrush', title: 'Award-Worthy UI/UX Design', desc: 'User-centered design with Figma prototypes, user journey mapping, usability testing, and beautiful interfaces that follow iOS HIG and Material Design guidelines.' },
      { icon: 'fa-plug', title: 'Any Integration You Need', desc: 'Payment gateways (Razorpay, Stripe, PayPal), maps, social login (Google, Apple, Facebook), push notifications, SMS, analytics, and any third-party API.' },
      { icon: 'fa-cloud-arrow-up', title: 'App Store Submission & ASO', desc: 'We handle everything — screenshots, descriptions, App Store Optimization (ASO), Google Play and Apple App Store submission, and approval process.' },
      { icon: 'fa-lock', title: 'Enterprise-Grade Security', desc: 'End-to-end encryption, biometric authentication, OAuth 2.0, JWT tokens, data encryption at rest, and penetration testing for your peace of mind.' },
      { icon: 'fa-arrows-spin', title: 'Real-Time Features', desc: 'Live chat, real-time notifications, live tracking, WebSocket connections, and real-time data sync across all devices.' },
      { icon: 'fa-chart-simple', title: 'Admin Dashboard & Analytics', desc: 'Custom admin panel to manage users, content, orders, and analytics. Real-time dashboards with charts, filters, and export capabilities.' }
    ],
    howItWorks: [
      { step: 1, title: 'Ideation & Discovery Workshop', desc: 'We define the app vision, target users, core features, user stories, competitor analysis, and technical architecture in a detailed workshop.' },
      { step: 2, title: 'UI/UX Design & Interactive Prototype', desc: 'Wireframes → high-fidelity Figma designs → clickable prototype. You can tap through the entire app experience before development starts.' },
      { step: 3, title: 'Agile Sprint Development', desc: 'We build in 2-week sprints. You get a working demo every sprint, provide feedback, and we iterate. Full transparency with daily standups and sprint reviews.' },
      { step: 4, title: 'Backend & API Development', desc: 'Scalable REST/GraphQL APIs, database design, authentication, file storage, and integration with all required third-party services.' },
      { step: 5, title: 'QA Testing & Beta Launch', desc: 'Manual + automated testing (unit, integration, E2E). Beta launch via TestFlight (iOS) and Google Play Internal Testing. Real user feedback before public launch.' },
      { step: 6, title: 'App Store Launch & Growth', desc: 'Full app store submission with ASO optimization, launch marketing support, crash monitoring (Crashlytics), and ongoing feature updates to grow your user base.' }
    ],
    useCases: [
      { icon: 'fa-cart-shopping', title: 'E-Commerce & Marketplace Apps', desc: 'Full shopping apps — product catalog, search filters, wishlist, cart, checkout, payment, order tracking, reviews, and seller dashboards.' },
      { icon: 'fa-truck-fast', title: 'On-Demand & Delivery Apps', desc: 'Uber/Swiggy-style apps with real-time tracking, driver/delivery partner apps, customer apps, and admin dashboards for complete control.' },
      { icon: 'fa-heartbeat', title: 'Health & Telemedicine Apps', desc: 'Patient portals, video consultations, appointment booking, health records, prescription management, and fitness tracking with wearable integration.' },
      { icon: 'fa-graduation-cap', title: 'EdTech & Learning Platforms', desc: 'Online courses with video streaming, quizzes, assignments, progress tracking, certificates, live classes, and student/teacher dashboards.' },
      { icon: 'fa-utensils', title: 'Food & Restaurant Apps', desc: 'Online ordering, table reservation, loyalty programs, kitchen display systems, and delivery management for restaurants and cloud kitchens.' },
      { icon: 'fa-building-columns', title: 'FinTech & Banking Apps', desc: 'Digital wallets, UPI integration, expense tracking, investment platforms, insurance apps, and secure financial transaction systems.' }
    ],
    pricing: {
      basic: { price: '₹99,999', period: ' starting', desc: 'For MVP / simple apps', features: ['Single platform (iOS or Android)', 'Up to 10 screens', 'Basic backend & API', 'Push notifications', 'Basic UI design', 'User authentication', 'Basic admin panel', '3 months support'], disabled: ['AI features', 'Real-time features', 'Advanced analytics'] },
      pro: { price: '₹2,99,999', period: ' starting', desc: 'For full-featured apps', features: ['iOS + Android (cross-platform)', 'Up to 30 screens', 'Scalable cloud backend', 'AI-powered features', 'Full admin dashboard', 'Payment integration', 'Custom Figma UI/UX', 'Real-time features', '6 months support'], disabled: ['Multi-tenant / white-label'] },
      enterprise: { price: 'Custom', period: '', desc: 'For complex platforms', features: ['Native iOS + Android', 'Unlimited screens', 'Microservices architecture', 'Full AI & ML integration', 'Multi-tenant / white-label', 'Real-time sync & chat', 'CI/CD pipeline', 'Security audit & pen testing', '12 months support + dedicated team'], disabled: [] }
    }
  },
  'seo-optimization': {
    icon: 'fa-magnifying-glass',
    name: 'SEO Optimization',
    tagline: 'Dominate Google search results with data-driven SEO. Technical audits, keyword strategy, on-page optimization, link building, and Core Web Vitals mastery — everything to rank #1.',
    features: [
      { icon: 'fa-wrench', title: 'Technical SEO Audit', desc: 'In-depth crawl analysis, fixing broken links, site speed, mobile-friendliness, indexation issues, and schema markup.' },
      { icon: 'fa-key', title: 'Keyword Research & Strategy', desc: 'Data-driven keyword discovery with search volume, difficulty, and intent analysis for maximum ROI.' },
      { icon: 'fa-file-code', title: 'On-Page Optimization', desc: 'Meta titles, descriptions, headings, internal linking, image ALT tags, and content structure optimization.' },
      { icon: 'fa-link', title: 'Link Building', desc: 'High-quality backlink acquisition through guest posts, digital PR, and strategic outreach campaigns.' },
      { icon: 'fa-gauge-high', title: 'Core Web Vitals', desc: 'Optimize LCP, FID, and CLS scores to meet Google performance benchmarks and boost rankings.' },
      { icon: 'fa-map-location-dot', title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, reviews management, and local pack rankings.' }
    ],
    howItWorks: [
      { step: 1, title: 'Technical Audit', desc: 'Full website crawl to identify indexing issues, speed problems, broken links, and technical gaps.' },
      { step: 2, title: 'Keyword Research', desc: 'Identify high-value keywords based on search volume, competition, and buyer intent for your industry.' },
      { step: 3, title: 'On-Page Optimization', desc: 'Optimize every page — titles, meta descriptions, headings, content, images, and internal links.' },
      { step: 4, title: 'Off-Page & Link Building', desc: 'Acquire authoritative backlinks through guest posting, digital PR, and strategic partnerships.' },
      { step: 5, title: 'Monitor & Iterate', desc: 'Monthly ranking reports, traffic analysis, and continuous optimization based on data insights.' }
    ],
    useCases: [
      { icon: 'fa-store', title: 'E-Commerce Stores', desc: 'Product page SEO, category optimization, and shopping search visibility to drive sales.' },
      { icon: 'fa-building', title: 'Local Businesses', desc: 'Dominate "near me" searches with local SEO, Google Maps optimization, and review strategy.' },
      { icon: 'fa-laptop-code', title: 'SaaS Companies', desc: 'Content-led SEO to drive free trial signups, demo bookings, and organic MRR growth.' },
      { icon: 'fa-briefcase-medical', title: 'Healthcare & Clinics', desc: 'Patient acquisition through medical SEO, doctor profiles, and healthcare content strategy.' }
    ],
    pricing: {
      basic: { price: '₹9,999', period: '/month', desc: 'For small businesses', features: ['Technical SEO audit', 'Up to 15 keywords', 'On-page optimization', 'Google Business setup', 'Monthly reporting', '1 blog post/month'], disabled: ['Link building', 'Content strategy', 'Competitor analysis'] },
      pro: { price: '₹24,999', period: '/month', desc: 'For growing businesses', features: ['Full technical SEO', 'Up to 50 keywords', 'On-page + off-page SEO', 'Link building (10/month)', '4 blog posts/month', 'Local SEO', 'Competitor tracking', 'Bi-weekly reporting'], disabled: ['Enterprise reporting'] },
      enterprise: { price: 'Custom', period: '', desc: 'For large-scale SEO', features: ['Unlimited keywords', 'Enterprise technical SEO', 'Advanced link building', 'Content strategy & creation', 'Multi-location local SEO', 'Custom reporting dashboard', 'Dedicated SEO manager', 'Weekly calls', 'International SEO'], disabled: [] }
    }
  },
  'geo': {
    icon: 'fa-wand-magic-sparkles',
    name: 'GEO — Generative Engine Optimization',
    tagline: 'The future of search is AI-generated answers. GEO ensures your brand appears inside responses from ChatGPT, Gemini, Perplexity, Copilot, and every generative AI platform.',
    features: [
      { icon: 'fa-robot', title: 'AI Response Visibility', desc: 'Optimize your content to be cited and referenced when AI tools generate answers about your industry.' },
      { icon: 'fa-quote-left', title: 'Citation Optimization', desc: 'Structure content so AI engines cite your brand as a source — driving traffic even without traditional search.' },
      { icon: 'fa-database', title: 'Knowledge Graph Alignment', desc: 'Ensure your brand data is accurate in AI training sets, knowledge graphs, and entity databases.' },
      { icon: 'fa-sitemap', title: 'Structured Data & Schema', desc: 'Advanced schema markup, FAQ schema, and structured content that AI engines prefer to surface.' },
      { icon: 'fa-bullseye', title: 'Brand Authority Building', desc: 'Build E-E-A-T signals (Experience, Expertise, Authority, Trust) that AI models use to rank content.' },
      { icon: 'fa-chart-line', title: 'GEO Analytics & Tracking', desc: 'Track your brand mentions across AI platforms — ChatGPT, Gemini, Perplexity — with custom monitoring.' }
    ],
    howItWorks: [
      { step: 1, title: 'GEO Audit', desc: 'Analyze how AI engines currently perceive your brand. Test queries on ChatGPT, Gemini, and Perplexity.' },
      { step: 2, title: 'Content Strategy', desc: 'Create content specifically structured for generative AI consumption — clear, authoritative, and well-cited.' },
      { step: 3, title: 'Entity & Schema Optimization', desc: 'Optimize knowledge graph entries, Wikipedia presence, and structured data for AI model consumption.' },
      { step: 4, title: 'Authority Building', desc: 'Build topical authority through comprehensive content clusters, expert citations, and digital PR.' },
      { step: 5, title: 'Monitor AI Presence', desc: 'Continuously track brand mentions in AI responses and refine strategy based on real-time data.' }
    ],
    useCases: [
      { icon: 'fa-building', title: 'B2B Companies', desc: 'Ensure your SaaS or service brand appears when prospects ask AI for recommendations in your space.' },
      { icon: 'fa-shopping-bag', title: 'D2C Brands', desc: 'Get recommended by AI when users ask "best [product category]" or "where to buy [product]".' },
      { icon: 'fa-graduation-cap', title: 'EdTech & Courses', desc: 'Appear in AI responses for learning queries like "best course for X" or "how to learn X".' },
      { icon: 'fa-globe', title: 'Global Brands', desc: 'Maintain consistent AI representation across languages and markets worldwide.' }
    ],
    pricing: {
      basic: { price: '₹14,999', period: '/month', desc: 'For startups entering AI search', features: ['GEO audit report', 'Brand monitoring (3 AI engines)', 'Schema markup setup', 'Monthly content optimization', 'Knowledge graph review', 'Monthly report'], disabled: ['Wikipedia optimization', 'Digital PR for GEO', 'Multi-language GEO'] },
      pro: { price: '₹34,999', period: '/month', desc: 'For serious AI visibility', features: ['Full GEO audit + strategy', 'Brand monitoring (all AI engines)', 'Advanced schema + structured data', 'Weekly GEO content creation', 'Entity optimization', 'Citation building', 'Authority content clusters', 'Bi-weekly reporting'], disabled: ['Dedicated GEO strategist'] },
      enterprise: { price: 'Custom', period: '', desc: 'For market leaders', features: ['Enterprise GEO strategy', 'All AI platform monitoring', 'Wikipedia & knowledge graph ops', 'Full digital PR program', 'Custom AI response tracking', 'Multi-language GEO', 'Dedicated GEO strategist', 'Weekly strategy calls', 'Competitive AI analysis'], disabled: [] }
    }
  },
  'aeo': {
    icon: 'fa-comment-dots',
    name: 'AEO — Answer Engine Optimization',
    tagline: 'Get your content picked as THE answer. AEO optimizes your content for featured snippets, voice search, People Also Ask, and AI answer engines like ChatGPT and Gemini.',
    features: [
      { icon: 'fa-star', title: 'Featured Snippet Optimization', desc: 'Structure content to win Google\'s position zero — the featured snippet box that gets 35%+ CTR.' },
      { icon: 'fa-microphone', title: 'Voice Search Readiness', desc: 'Optimize for conversational queries from Siri, Alexa, Google Assistant, and other voice interfaces.' },
      { icon: 'fa-circle-question', title: 'People Also Ask (PAA)', desc: 'Target PAA boxes with structured Q&A content that drives incremental organic traffic.' },
      { icon: 'fa-layer-group', title: 'Content Structuring', desc: 'Clear headings, concise answers, bullet points, tables — the format AI engines prefer to surface.' },
      { icon: 'fa-crown', title: 'E-E-A-T Signals', desc: 'Build Experience, Expertise, Authoritativeness, and Trust signals that answer engines prioritize.' },
      { icon: 'fa-file-lines', title: 'FAQ & How-To Schema', desc: 'Implement FAQ, HowTo, and QAPage schema markup to maximize answer engine visibility.' }
    ],
    howItWorks: [
      { step: 1, title: 'Answer Audit', desc: 'Analyze current featured snippet ownership, PAA presence, and voice search performance.' },
      { step: 2, title: 'Question Research', desc: 'Identify the questions your target audience asks — across Google, AI tools, and voice assistants.' },
      { step: 3, title: 'Content Optimization', desc: 'Restructure content with direct answers, proper formatting, and schema markup for answer engines.' },
      { step: 4, title: 'Authority Building', desc: 'Build E-E-A-T signals through expert content, author profiles, citations, and trust indicators.' },
      { step: 5, title: 'Track & Win', desc: 'Monitor snippet ownership, PAA appearances, and AI answer inclusions — iterate to win more.' }
    ],
    useCases: [
      { icon: 'fa-heartbeat', title: 'Healthcare', desc: 'Own the answer for health queries — symptoms, treatments, and doctor recommendations.' },
      { icon: 'fa-scale-balanced', title: 'Legal & Finance', desc: 'Become the trusted answer for legal questions, tax advice, and financial guidance.' },
      { icon: 'fa-book', title: 'Education & How-To', desc: 'Dominate tutorial, how-to, and educational queries with structured answer content.' },
      { icon: 'fa-utensils', title: 'Food & Recipes', desc: 'Win recipe featured snippets, cooking how-tos, and restaurant recommendation queries.' }
    ],
    pricing: {
      basic: { price: '₹11,999', period: '/month', desc: 'For content-driven businesses', features: ['Answer audit report', 'Up to 20 target questions', 'Content restructuring', 'FAQ schema setup', 'Monthly snippet tracking', 'Monthly report'], disabled: ['Voice search optimization', 'PAA strategy', 'E-E-A-T program'] },
      pro: { price: '₹27,999', period: '/month', desc: 'For answer domination', features: ['Full answer audit', 'Up to 100 target questions', 'Content creation + optimization', 'Full schema implementation', 'Voice search optimization', 'PAA targeting strategy', 'E-E-A-T enhancement', 'Bi-weekly reporting'], disabled: ['Dedicated AEO manager'] },
      enterprise: { price: 'Custom', period: '', desc: 'For industry authority', features: ['Unlimited target queries', 'Full content strategy', 'Advanced schema + structured data', 'Voice search mastery', 'Complete E-E-A-T program', 'Multi-language AEO', 'Competitive answer tracking', 'Dedicated AEO manager', 'Weekly optimization calls'], disabled: [] }
    }
  },
  'ai-seo': {
    icon: 'fa-robot',
    name: 'AI SEO — AI-Powered Search Optimization',
    tagline: 'The smartest way to do SEO. Combine the power of AI with proven SEO strategies — AI content generation, predictive rankings, automated optimization, and intelligent keyword tracking.',
    features: [
      { icon: 'fa-brain', title: 'AI Content Generation', desc: 'High-quality, SEO-optimized blog posts, landing pages, and product descriptions generated and refined with AI.' },
      { icon: 'fa-chart-line', title: 'Predictive Ranking Analysis', desc: 'AI models predict which keywords and content topics will drive the most traffic before you invest.' },
      { icon: 'fa-gears', title: 'Automated Optimization', desc: 'AI continuously monitors and optimizes meta tags, internal links, and content based on ranking changes.' },
      { icon: 'fa-eye', title: 'Competitor Intelligence', desc: 'AI tracks competitor strategies, content gaps, and ranking movements to find opportunities.' },
      { icon: 'fa-pen-nib', title: 'Smart Content Briefs', desc: 'AI generates detailed content briefs with headings, keywords, word count, and competitor analysis.' },
      { icon: 'fa-arrows-spin', title: 'Continuous Learning', desc: 'Our AI models learn from your site performance data and improve recommendations over time.' }
    ],
    howItWorks: [
      { step: 1, title: 'AI Site Analysis', desc: 'Our AI crawls your site, analyzes competitors, and identifies the highest-impact optimization opportunities.' },
      { step: 2, title: 'AI Strategy Generation', desc: 'AI creates a prioritized SEO roadmap based on predicted impact, effort, and competitive landscape.' },
      { step: 3, title: 'AI Content at Scale', desc: 'Generate and publish SEO-optimized content at 10x speed with AI writing, human review, and automated publishing.' },
      { step: 4, title: 'Automated Monitoring', desc: 'AI watches rankings 24/7, detects drops, identifies causes, and suggests fixes in real-time.' },
      { step: 5, title: 'AI-Driven Growth', desc: 'Continuous AI optimization cycle — more data, better predictions, higher rankings, more traffic.' }
    ],
    useCases: [
      { icon: 'fa-rocket', title: 'Startups', desc: 'Get to page 1 faster with AI-powered content velocity and smart keyword targeting.' },
      { icon: 'fa-store', title: 'E-Commerce', desc: 'AI-generate thousands of product descriptions, category pages, and buying guides at scale.' },
      { icon: 'fa-newspaper', title: 'Media & Publishing', desc: 'Produce SEO-optimized articles at scale while maintaining quality and editorial standards.' },
      { icon: 'fa-city', title: 'Agencies', desc: 'Manage SEO for multiple clients with AI automation, reporting, and content generation.' }
    ],
    pricing: {
      basic: { price: '₹12,999', period: '/month', desc: 'For AI-curious businesses', features: ['AI site audit', 'Up to 20 keywords tracked', 'AI content briefs', '2 AI articles/month', 'Automated rank tracking', 'Monthly reporting'], disabled: ['Competitor intelligence', 'Predictive analysis', 'Dedicated manager'] },
      pro: { price: '₹29,999', period: '/month', desc: 'For AI-first SEO teams', features: ['Full AI audit + strategy', 'Up to 100 keywords tracked', 'AI competitor intelligence', '8 AI articles/month', 'Predictive ranking analysis', 'Automated optimization', 'Smart content briefs', 'Bi-weekly reporting'], disabled: ['Unlimited AI content'] },
      enterprise: { price: 'Custom', period: '', desc: 'For AI-powered scale', features: ['Unlimited keywords', 'Full AI SEO automation', 'Unlimited AI content generation', 'Custom AI model training', 'Real-time rank monitoring', 'Multi-site management', 'API access', 'Dedicated AI SEO manager', 'White-label reporting'], disabled: [] }
    }
  },
  'ai-marketing': {
    icon: 'fa-bullseye',
    name: 'AI Marketing & Automation',
    tagline: 'Supercharge your marketing with AI. Automated ad campaigns, AI content creation, social media management, email marketing, and data-driven strategies that maximize ROI.',
    features: [
      { icon: 'fa-ad', title: 'AI-Powered Ad Campaigns', desc: 'Smart Google Ads, Meta Ads, and LinkedIn campaigns with AI bid optimization and audience targeting.' },
      { icon: 'fa-share-nodes', title: 'Social Media Automation', desc: 'AI creates, schedules, and optimizes posts across Instagram, LinkedIn, Facebook, Twitter/X, and YouTube.' },
      { icon: 'fa-envelope-open-text', title: 'AI Email Marketing', desc: 'Personalized email sequences, AI subject line optimization, and behavior-triggered automation.' },
      { icon: 'fa-wand-magic-sparkles', title: 'AI Content Creation', desc: 'Blog posts, ad copy, social posts, video scripts, and marketing collateral generated with AI at scale.' },
      { icon: 'fa-users-viewfinder', title: 'Audience Intelligence', desc: 'AI analyzes your audience data to build detailed buyer personas and targeting strategies.' },
      { icon: 'fa-chart-pie', title: 'ROI Analytics Dashboard', desc: 'Real-time dashboard tracking spend, conversions, ROAS, and AI-powered recommendations for improvement.' }
    ],
    howItWorks: [
      { step: 1, title: 'Marketing Audit', desc: 'Analyze current marketing channels, ad spend, conversion funnels, and identify quick wins.' },
      { step: 2, title: 'AI Strategy Design', desc: 'Build a data-driven marketing strategy with AI tools for each channel — ads, social, email, content.' },
      { step: 3, title: 'Campaign Launch', desc: 'Launch AI-optimized campaigns across all channels with automated budget allocation and A/B testing.' },
      { step: 4, title: 'AI Optimization Loop', desc: 'AI continuously optimizes bids, audiences, creatives, and send times based on real-time performance.' },
      { step: 5, title: 'Scale & Grow', desc: 'Double down on what works. AI identifies winning patterns and scales campaigns for maximum growth.' }
    ],
    useCases: [
      { icon: 'fa-cart-shopping', title: 'E-Commerce', desc: 'AI-powered product ads, retargeting, abandoned cart emails, and social commerce automation.' },
      { icon: 'fa-building', title: 'B2B Companies', desc: 'LinkedIn lead gen, account-based marketing, and AI-powered sales enablement content.' },
      { icon: 'fa-utensils', title: 'Restaurants & Food', desc: 'Local marketing, social media automation, review management, and promotional campaign automation.' },
      { icon: 'fa-home', title: 'Real Estate', desc: 'Property marketing, lead generation ads, virtual tour promotions, and email nurturing.' }
    ],
    pricing: {
      basic: { price: '₹14,999', period: '/month', desc: 'For small marketing budgets', features: ['1 platform ad management', 'Social media (2 platforms)', '2 email campaigns/month', 'AI content calendar', 'Basic analytics', 'Monthly reporting'], disabled: ['Multi-platform ads', 'AI content creation', 'Dedicated manager'] },
      pro: { price: '₹39,999', period: '/month', desc: 'For growth-stage companies', features: ['Google + Meta Ads management', 'Social media (4 platforms)', 'AI email automation', 'Weekly AI content', 'Audience intelligence', 'A/B testing', 'ROI dashboard', 'Bi-weekly reporting'], disabled: ['Video marketing'] },
      enterprise: { price: 'Custom', period: '', desc: 'For full-service marketing', features: ['All-platform ad management', 'Social media (all platforms)', 'Full AI email marketing', 'Unlimited AI content', 'Video marketing', 'Influencer coordination', 'Custom reporting', 'Dedicated marketing team', 'Weekly strategy calls'], disabled: [] }
    }
  },

  'portfolio-creation': {
    icon: 'fa-briefcase',
    name: 'Portfolio Creation',
    tagline: 'Stunning personal & professional portfolio websites that showcase your talent and win clients.',
    features: [
      { icon: 'fa-palette', title: 'Custom Design', desc: 'Unique, hand-crafted design tailored to your personal brand and industry — no cookie-cutter templates.' },
      { icon: 'fa-images', title: 'Animated Galleries', desc: 'Beautiful project galleries with lightbox views, hover effects, filtering, and smooth animations.' },
      { icon: 'fa-mobile-screen', title: 'Fully Responsive', desc: 'Looks perfect on every device — desktop, tablet, and mobile — with touch-friendly navigation.' },
      { icon: 'fa-bolt', title: 'Lightning Fast', desc: 'Optimized images, lazy loading, and clean code for sub-2-second load times and great SEO scores.' },
      { icon: 'fa-pen-fancy', title: 'Blog & Case Studies', desc: 'Built-in blog or case study section to showcase your process, tell your story, and boost SEO.' },
      { icon: 'fa-envelope', title: 'Contact & Lead Capture', desc: 'Integrated contact forms, calendly booking, and WhatsApp chat to convert visitors into clients.' }
    ],
    howItWorks: [
      { step: 1, title: 'Discovery Call', desc: 'We learn about your work, goals, target audience, and preferred style through a detailed consultation.' },
      { step: 2, title: 'Design Mockup', desc: 'Our designers create a custom mockup with your branding, color palette, typography, and layout.' },
      { step: 3, title: 'Content Setup', desc: 'Upload your projects, images, case studies, testimonials, and bio — we organize everything beautifully.' },
      { step: 4, title: 'Development', desc: 'We build the portfolio with clean code, animations, SEO optimization, and blazing-fast performance.' },
      { step: 5, title: 'Launch & Support', desc: 'Deploy on your domain with SSL, analytics, and ongoing support to keep your portfolio updated.' }
    ],
    useCases: [
      { icon: 'fa-camera', title: 'Photographers', desc: 'Showcase photo galleries with full-screen lightbox, categories, and client proofing features.' },
      { icon: 'fa-paintbrush', title: 'Designers & Artists', desc: 'Present creative work with animated transitions, project details, and process breakdowns.' },
      { icon: 'fa-code', title: 'Developers', desc: 'Highlight projects with live demos, GitHub links, tech stacks, and code showcase sections.' },
      { icon: 'fa-briefcase', title: 'Freelancers & Consultants', desc: 'Professional portfolios with service pages, testimonials, pricing, and booking integration.' }
    ],
    pricing: {
      basic: { price: '₹9,999', period: ' one-time', desc: 'Simple personal portfolio', features: ['Single-page design', 'Up to 10 projects', 'Contact form', 'Mobile responsive', 'SEO basics', '1 revision round'], disabled: ['Blog/case studies', 'Custom animations', 'CMS integration'] },
      pro: { price: '₹24,999', period: ' one-time', desc: 'Professional portfolio', features: ['Multi-page design', 'Unlimited projects', 'Blog/case studies', 'Custom animations', 'Advanced SEO', 'Contact + booking', '3 revision rounds', 'Analytics setup'], disabled: ['CMS dashboard'] },
      enterprise: { price: '₹49,999', period: ' one-time', desc: 'Premium portfolio + CMS', features: ['Premium multi-page design', 'Unlimited projects', 'CMS dashboard to manage content', 'Blog + case studies', 'Advanced animations', 'Full SEO optimization', 'Lead capture forms', 'Unlimited revisions', '6 months support'], disabled: [] }
    }
  },

  'app-creation': {
    icon: 'fa-rocket',
    name: 'App Creation',
    tagline: 'From idea to App Store — we turn your concept into a fully functional, beautifully designed mobile or web app.',
    features: [
      { icon: 'fa-lightbulb', title: 'Idea to Prototype', desc: 'We translate your idea into wireframes, user flows, and an interactive prototype before writing any code.' },
      { icon: 'fa-mobile-screen-button', title: 'iOS & Android', desc: 'Native or cross-platform apps for both iOS and Android using React Native, Flutter, or Swift/Kotlin.' },
      { icon: 'fa-pencil-ruler', title: 'UI/UX Design', desc: 'Beautiful, intuitive interface design with user research, personas, accessibility, and usability testing.' },
      { icon: 'fa-server', title: 'Backend & APIs', desc: 'Scalable cloud backends with real-time databases, authentication, push notifications, and third-party integrations.' },
      { icon: 'fa-vial', title: 'QA & Testing', desc: 'Rigorous testing across devices — unit tests, integration tests, beta testing, and performance optimization.' },
      { icon: 'fa-store', title: 'Store Launch', desc: 'Complete App Store and Play Store submission — screenshots, descriptions, ASO, and approval handling.' }
    ],
    howItWorks: [
      { step: 1, title: 'Concept & Planning', desc: 'Define the app idea, target users, feature list, and technical requirements through a strategy session.' },
      { step: 2, title: 'UI/UX Design', desc: 'Create wireframes, user flows, and high-fidelity mockups for every screen of the app.' },
      { step: 3, title: 'Development Sprints', desc: 'Agile development in 2-week sprints with regular demos, feedback, and iteration cycles.' },
      { step: 4, title: 'Testing & QA', desc: 'Comprehensive testing on real devices, bug fixing, performance optimization, and beta user feedback.' },
      { step: 5, title: 'Launch & Iterate', desc: 'Deploy to app stores, set up analytics, and plan post-launch updates based on user data.' }
    ],
    useCases: [
      { icon: 'fa-shopping-cart', title: 'E-Commerce Apps', desc: 'Online stores with product catalogs, cart, payments, order tracking, and loyalty programs.' },
      { icon: 'fa-utensils', title: 'Food Delivery', desc: 'Restaurant apps with ordering, real-time tracking, driver management, and payment integration.' },
      { icon: 'fa-heart-pulse', title: 'Health & Fitness', desc: 'Wellness apps with tracking, appointments, video consultations, and wearable integrations.' },
      { icon: 'fa-graduation-cap', title: 'EdTech', desc: 'Learning platforms with courses, quizzes, progress tracking, certificates, and live classes.' }
    ],
    pricing: {
      basic: { price: '₹49,999', period: ' starting', desc: 'Simple MVP app', features: ['Single platform (iOS or Android)', 'Up to 8 screens', 'Basic backend', 'Authentication', 'Push notifications', '2 revision rounds'], disabled: ['Admin panel', 'Payment integration', 'Cross-platform'] },
      pro: { price: '₹1,49,999', period: ' starting', desc: 'Full-featured app', features: ['Cross-platform (iOS + Android)', 'Up to 20 screens', 'Scalable backend', 'Payment gateway', 'Admin panel', 'Push notifications', 'Analytics', '3 months support'], disabled: ['AI features'] },
      enterprise: { price: 'Custom', period: '', desc: 'Enterprise-grade app', features: ['Cross-platform or native', 'Unlimited screens', 'Microservices backend', 'AI/ML features', 'Full admin panel', 'Third-party integrations', 'Performance optimization', 'Dedicated team', '12 months support'], disabled: [] }
    }
  },

  'website-creation': {
    icon: 'fa-globe',
    name: 'Website Creation',
    tagline: 'Professional business websites, landing pages, and e-commerce stores designed to convert visitors into customers.',
    features: [
      { icon: 'fa-pen-nib', title: 'Custom Design', desc: 'Pixel-perfect custom designs that match your brand identity — no generic themes or templates.' },
      { icon: 'fa-mobile', title: 'Mobile-First', desc: 'Designed mobile-first for perfect performance on all devices — phones, tablets, laptops, and desktops.' },
      { icon: 'fa-gauge-high', title: 'Speed Optimized', desc: 'Sub-2-second load times with optimized assets, CDN delivery, and Core Web Vitals compliance.' },
      { icon: 'fa-search', title: 'SEO-Ready', desc: 'Built with semantic HTML, meta tags, Open Graph, schema markup, and sitemap for top search rankings.' },
      { icon: 'fa-lock', title: 'Secure & Reliable', desc: 'SSL certificates, DDoS protection, regular backups, and 99.9% uptime hosting infrastructure.' },
      { icon: 'fa-sliders', title: 'Easy CMS', desc: 'Content management system so you can update pages, blogs, images, and products without coding.' }
    ],
    howItWorks: [
      { step: 1, title: 'Requirement Analysis', desc: 'We understand your business, target audience, competitors, and goals to plan the perfect website.' },
      { step: 2, title: 'Design & Mockup', desc: 'Custom homepage and inner page designs in Figma with your branding, imagery, and content layout.' },
      { step: 3, title: 'Development', desc: 'Clean, hand-coded development with responsive design, animations, forms, and CMS integration.' },
      { step: 4, title: 'Content & SEO', desc: 'Add your content, optimize for search engines, set up analytics, and configure contact forms.' },
      { step: 5, title: 'Launch & Train', desc: 'Deploy on your domain, configure email, and train your team to manage the website independently.' }
    ],
    useCases: [
      { icon: 'fa-building', title: 'Business Websites', desc: 'Corporate sites with about, services, team, blog, and contact pages for professional businesses.' },
      { icon: 'fa-cart-shopping', title: 'E-Commerce Stores', desc: 'Online shops with product catalogs, cart, checkout, payment integration, and order management.' },
      { icon: 'fa-bullhorn', title: 'Landing Pages', desc: 'High-converting landing pages for campaigns, product launches, and lead generation funnels.' },
      { icon: 'fa-blog', title: 'Blogs & Content Sites', desc: 'Content-driven websites with CMS, SEO features, newsletter signup, and social sharing.' }
    ],
    pricing: {
      basic: { price: '₹14,999', period: ' one-time', desc: 'Starter business website', features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO setup', 'Social media links', '1 revision round'], disabled: ['CMS/blog', 'E-commerce', 'Custom animations'] },
      pro: { price: '₹39,999', period: ' one-time', desc: 'Professional website', features: ['Up to 15 pages', 'CMS integration', 'Blog section', 'Advanced SEO', 'Custom animations', 'Google Analytics', 'Email setup', '3 revision rounds'], disabled: ['E-commerce'] },
      enterprise: { price: '₹79,999', period: ' one-time', desc: 'Full-featured website', features: ['Unlimited pages', 'Full CMS dashboard', 'E-commerce ready', 'Blog + case studies', 'Advanced animations', 'Full SEO optimization', 'Payment integration', 'Unlimited revisions', '6 months support'], disabled: [] }
    }
  }
};

// ---- Read URL Parameter ----
function getServiceId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('service') || 'voice-call';
}

// ---- Render Page Content ----
function renderServiceDetail() {
  const serviceId = getServiceId();
  const service = servicesData[serviceId];

  if (!service) {
    document.getElementById('service-content').innerHTML = `
      <div class="text-center py-5">
        <i class="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
        <h3>Service Not Found</h3>
        <p class="text-muted">The requested service does not exist.</p>
        <a href="index.html#services" class="btn btn-primary-custom mt-3">
          <i class="fas fa-arrow-left"></i> Back to Services
        </a>
      </div>`;
    return;
  }

  // Update page title
  document.title = `${service.name} - Aishan.ai`;

  // Update breadcrumb
  document.getElementById('breadcrumb-service').textContent = service.name;

  // Render hero
  document.getElementById('detail-icon').className = `fas ${service.icon}`;
  document.getElementById('detail-name').textContent = service.name;
  document.getElementById('detail-tagline').textContent = service.tagline;

  // Render features
  const featuresGrid = document.getElementById('features-grid');
  featuresGrid.innerHTML = service.features.map((f, i) => `
    <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="feature-item">
        <i class="fas ${f.icon}"></i>
        <h5>${f.title}</h5>
        <p>${f.desc}</p>
      </div>
    </div>`).join('');

  // Render how it works
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = service.howItWorks.map(s => `
    <div class="timeline-item" data-aos="fade-up">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="step-number">Step ${s.step}</span>
        <h5>${s.title}</h5>
        <p>${s.desc}</p>
      </div>
    </div>`).join('');

  // Render use cases
  const useCases = document.getElementById('use-cases');
  useCases.innerHTML = service.useCases.map((u, i) => `
    <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="use-case-item">
        <i class="fas ${u.icon}"></i>
        <div>
          <h6>${u.title}</h6>
          <p>${u.desc}</p>
        </div>
      </div>
    </div>`).join('');

  // Render pricing
  renderPricing(service.pricing);

  // Update all CTA links
  document.querySelectorAll('.cta-enquiry').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = `index.html#contact`;
    });
  });

  // Re-init AOS
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

function renderPricing(pricing) {
  const container = document.getElementById('pricing-cards');
  if (!container) return;

  function renderFeatures(plan) {
    let html = '';
    plan.features.forEach(f => {
      html += `<li><i class="fas fa-check"></i> ${f}</li>`;
    });
    plan.disabled.forEach(f => {
      html += `<li class="disabled"><i class="fas fa-xmark"></i> ${f}</li>`;
    });
    return html;
  }

  container.innerHTML = `
    <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="0">
      <div class="pricing-card">
        <h4>Basic</h4>
        <div class="price">${pricing.basic.price}<span>${pricing.basic.period}</span></div>
        <p class="price-desc">${pricing.basic.desc}</p>
        <ul class="pricing-features">${renderFeatures(pricing.basic)}</ul>
        <a href="index.html#contact" class="btn btn-pricing cta-enquiry">Get Started</a>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
      <div class="pricing-card popular">
        <span class="popular-badge">Most Popular</span>
        <h4>Professional</h4>
        <div class="price">${pricing.pro.price}<span>${pricing.pro.period}</span></div>
        <p class="price-desc">${pricing.pro.desc}</p>
        <ul class="pricing-features">${renderFeatures(pricing.pro)}</ul>
        <a href="index.html#contact" class="btn btn-pricing cta-enquiry">Get Started</a>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
      <div class="pricing-card">
        <h4>Enterprise</h4>
        <div class="price">${pricing.enterprise.price}<span>${pricing.enterprise.period}</span></div>
        <p class="price-desc">${pricing.enterprise.desc}</p>
        <ul class="pricing-features">${renderFeatures(pricing.enterprise)}</ul>
        <a href="index.html#contact" class="btn btn-pricing cta-enquiry">Contact Sales</a>
      </div>
    </div>`;
}

// ---- Other Services Navigation ----
function renderOtherServices() {
  const currentId = getServiceId();
  const container = document.getElementById('other-services');
  if (!container) return;

  let html = '';
  Object.keys(servicesData).forEach(id => {
    if (id === currentId) return;
    const s = servicesData[id];
    html += `
      <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
        <a href="service-detail.html?service=${id}" class="text-decoration-none">
          <div class="service-card">
            <div class="service-icon"><i class="fas ${s.icon}"></i></div>
            <h4>${s.name}</h4>
            <p>${s.tagline.substring(0, 100)}...</p>
            <span class="service-link">Explore <i class="fas fa-arrow-right"></i></span>
          </div>
        </a>
      </div>`;
  });
  container.innerHTML = html;
}

// ---- Navbar scroll effect ----
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
}

// ---- Back to Top ----
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- Preloader ----
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('hidden'), 400);
  }
});

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
  renderServiceDetail();
  renderOtherServices();
  initNavbarScroll();
  initBackToTop();

  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 80 });
  }
});
