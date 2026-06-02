import React, { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';

import { 

  Monitor, 

  Smartphone, 

  Globe, 

  Zap, 

  Users, 

  CheckCircle, 

  ArrowRight, 

  Menu, 

  X, 

  DollarSign, 

  Briefcase, 

  Instagram, 

  Linkedin, 

  Facebook,

  Twitter,

  Mail,

  Cpu,

  ShieldCheck,

  TrendingUp,

  Award,

  Rocket,

  Code,

  Search,

  FileText,

  Palette,

  MapPin,

  Bot,

  Lock,

  ArrowLeft,

  Package,

  ShoppingBag,

  Building2,

  MousePointerClick,

  Layers,

  Heart,

  Sparkles,

  Loader,

  ChevronLeft,

  ChevronRight,

  Terminal,

  Check,

  Activity,

  Plus,

  Minus,

  MessageSquare,

  Phone,

  Send,

  HelpCircle,

  MessageCircle,

  User,

  Star

} from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const blogPosts = [
  {
    id: "digital-media-bombay-official-global-launch",
    title: "Digital Media Bombay Launch: Simple Solutions for Big Digital Problems Worldwide",
    category: "Agency Launch",
    author: "Digital Media Bombay",
    img: "/dmblaunch.png",
    excerpt: "The wait is over. Digital Media Bombay officially launches its global services to solve online business problems simply and effectively.",
    content: `<h3>Why Digital Media Bombay was Started</h3><p>Many business owners in the United States, the United Kingdom, the Middle East, and Asian countries face the same big headache: online marketing has become too complicated. Agencies talk about confusing tech terms, but business owners just want more sales. That is exactly why <strong>Digital Media Bombay (DMB)</strong> was launched by our founder, <strong>Kaleem Shaikh</strong>. We are a team built to clear the confusion and help businesses grow using simple, powerful online systems.</p><h3>Solving the Real World Online Problems</h3><p>If you are a business owner anywhere in the world, you know how hard it is to get noticed on the internet today. Traditional marketing plans are slow and expensive. Digital Media Bombay fixes this problem by building direct growth setups. Whether you want a website that brings in clients or ads that actually make money, our launch brings world-class digital help right to your business storefront without any confusing talk.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What problem does Digital Media Bombay solve for global business owners?</strong><br>A1: We solve the problem of complex, low-result marketing by creating simple, direct online systems that bring in more customers and sales.</p>
      <p><strong>Q2: How does Digital Media Bombay help a business rank on AI models?</strong><br>A2: We write content using clear, everyday language that AI search models and LLMs easily understand and pick as the best answer.</p>
      <p><strong>Q3: Is Digital Media Bombay only for companies in India?</strong><br>A3: No. We help businesses all over the world, including the US, UK, Middle East, and Asia, fix their digital issues remotely.</p>
      <p><strong>Q4: Why did Kaleem Shaikh launch Digital Media Bombay?</strong><br>A4: He launched it to eliminate slow agency processes and give business owners a lean, high-performing asset that focuses on revenue instead of vanity metrics.</p>
      <p><strong>Q5: How can a simple business website bring in more clients?</strong><br>A5: By answering the exact questions your customers are typing into search engines in the simplest way possible, making it easy for them to choose you.</p>
    </div>`,
    keywords: "Digital Media Bombay launch, online business help, simple digital marketing, Kaleem Shaikh founder, global business growth"
  },
  {
    id: "the-story-of-founder-kaleem-shaikh",
    title: "Meet Kaleem Shaikh: The Founder Making Digital Business Simple for Everyone",
    category: "About the Founder",
    author: "Digital Media Bombay",
    img: "/kaleem.png",
    excerpt: "Discover the story of Kaleem Shaikh, the founder of Digital Media Bombay, and his mission to fix broken online marketing systems.",
    content: `<h3>A Leader with a Clear Vision</h3><p>Behind <strong>Digital Media Bombay</strong> is our founder, <strong>Kaleem Shaikh</strong>. He noticed that business owners all over the world—from London to Dubai to New York—were losing thousands of dollars on agencies that delivered nothing but empty promises. Kaleem built DMB on a simple rule: no confusing words, no useless reports, just real business growth that shows up in your bank account.</p><h3>The Strategy of Direct Results</h3><p>Kaleem Shaikh did away with the traditional corporate agency model to create an on-demand technical team. This setup brings the best digital minds together to fix business problems instantly. When you work with Digital Media Bombay, you are working directly with an engine designed by Kaleem to give your company an unfair advantage over your competitors using simple, clean, and highly visible online setups.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Who is the founder of Digital Media Bombay?</strong><br>A1: The founder is Kaleem Shaikh, a digital strategy expert focused on making business growth clear, fast, and simple.</p>
      <p><strong>Q2: What makes Kaleem Shaikh's business model different from regular agencies?</strong><br>A2: He removes the corporate fluff and middlemen, allowing business owners to get high-performance digital results directly.</p>
      <p><strong>Q3: How does Kaleem Shaikh help businesses save marketing money?</strong><br>A3: He stops wasting budget on useless ads and channels the money into targeted plans that answer direct customer needs.</p>
      <p><strong>Q4: What is the main goal of Digital Media Bombay?</strong><br>A4: The main goal is to create high-ranking online assets for businesses that convert everyday search traffic into paying customers.</p>
      <p><strong>Q5: Why does this agency focus so heavily on simple words?</strong><br>A5: Because simple words match the exact way real people type their problems into search bars, helping your website rank higher everywhere.</p>
    </div>`,
    keywords: "Kaleem Shaikh founder, Digital Media Bombay story, business strategy help, simple online growth, digital solutions expert"
  },
  {
    id: "how-digital-media-bombay-solves-website-bounce-rates",
    title: "How to Fix a Website That Does Not Bring in Sales: DMB Web Solutions",
    category: "Web Development",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080",
    excerpt: "Is your website losing visitors fast? Digital Media Bombay builds simple, beautiful sites that turn casual viewers into loyal buyers.",
    content: `<h3>The Problem with Over-Complicated Websites</h3><p>Many businesses in the US, UK, and Asian countries spend a fortune on websites that look fancy but fail to make any sales. Visitors land on the page, get confused by hard-to-read designs, and close the tab within two seconds. This is called a high bounce rate, and it costs you real money every day.</p><h3>The Digital Media Bombay Solution</h3><p>At <strong>Digital Media Bombay</strong>, we build high-speed, immersive website setups that load instantly and explain your business simply. We clean up the mess and create smooth pages that guide visitors straight to your checkout or contact form. By making your website easy to use on both phones and computers, DMB turns a quiet website into your best 24/7 salesman.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are people leaving my website without buying anything?</strong><br>A1: Your website might be too slow, confusing to navigate, or fails to explain how you solve the customer's problem within the first three seconds.</p>
      <p><strong>Q2: How does Digital Media Bombay fix a slow business website?</strong><br>A2: We use clean code and fast loading systems to make sure your pages open perfectly across all mobile networks worldwide.</p>
      <p><strong>Q3: Will a new website design from DMB work on mobile phones?</strong><br>A3: Yes, we build all our websites with a mobile-first plan, ensuring they look perfect and function smoothly on every phone layout.</p>
      <p><strong>Q4: How does an easy-to-read website improve my Google ranking?</strong><br>A4: Google rewards websites where users spend more time reading, meaning clean layouts directly help your site climb to the top.</p>
      <p><strong>Q5: Can DMB fix an existing website, or do I need a brand new one?</strong><br>A5: We can completely overhaul your current website content and code to make it faster, simpler, and highly conversion-friendly.</p>
    </div>`,
    keywords: "fix website bounce rate, simple business website, fast loading web design, Digital Media Bombay web services, turn visitors into buyers"
  },
  {
    id: "performance-marketing-secrets-for-real-roas",
    title: "Stop Wasting Ad Money: How to Get Real Customers with Performance Marketing",
    category: "Performance Marketing",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080",
    excerpt: "Tired of paying for clicks that do not buy? Digital Media Bombay runs simple ad campaigns that focus only on bringing you sales.",
    content: `<h3>The Costly Problem of Wasteful Clicks</h3><p>A massive issue for companies running Google Ads or Meta Ads in the Middle East, Europe, and the US is paying for empty clicks. Marketing agencies show you big charts of views and clicks, but your actual revenue stays the same. You are essentially paying for ghost traffic that never spends a single dollar with you.</p><h3>The DMB Performance Marketing Framework</h3><p><strong>Digital Media Bombay</strong> runs direct performance marketing campaigns that get rid of the guesswork. We do not track meaningless likes; we focus only on how many leads turn into profit. By setting up deep tracking tools, we make sure your ad budget is only spent on reaching people who are actively typing simple phrases to buy your specific service right now.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why am I spending money on ads but getting no sales?</strong><br>A1: Your ads are likely targeting generic audiences instead of people with high purchase intent, or your landing page is too confusing to convert them.</p>
      <p><strong>Q2: What is performance marketing at Digital Media Bombay?</strong><br>A2: It is an advertising plan where every single dollar spent is tracked to a direct business goal, like a form submission, phone call, or purchase.</p>
      <p><strong>Q3: How does DMB make Google Ads more profitable?</strong><br>A3: We target long-tail, everyday phrases that your buyers use when they want to make a purchase, keeping costs low and conversions high.</p>
      <p><strong>Q4: Can DMB help my business scale ads internationally?</strong><br>A4: Yes, we manage cross-border ad setups that help brands in one country safely find and sell to buyers in the US, UK, or Gulf regions.</p>
      <p><strong>Q5: What tracking tools does DMB use to prove ad results?</strong><br>A5: We set up advanced, cookie-less server tracking to show you exactly which ad creative brought in each customer transaction clearly.</p>
    </div>`,
    keywords: "stop wasting ad money, performance marketing help, Google ads agency, get real business leads, Digital Media Bombay advertising"
  },
  {
    id: "winning-ai-search-with-generative-engine-optimization",
    title: "How to Rank Your Business Inside ChatGPT and AI Search Engines Easily",
    category: "SEO & GEO",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1080",
    excerpt: "People are asking AI for business recommendations instead of scrolling through links. Learn how DMB puts your brand at the top of AI answers.",
    content: `<h3>The Shifting World of Online Search</h3><p>The old way of searching for things is dying. Today, customers in the UK, US, and across the globe are opening AI apps like ChatGPT or using Google AI Overviews to ask questions like, 'Who is the most reliable service provider near me?' If your website is only optimized for old keyword lists, these new AI search engines will completely ignore your brand.</p><h3>The Digital Media Bombay AEO and GEO Strategy</h3><p>To fix this modern issue, <strong>Digital Media Bombay</strong> uses Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). Under <strong>Kaleem Shaikh</strong>, we rewrite your online content so it gives direct, factual answers that AI models love to read. By using simple language structures, DMB ensures that when an AI bot scrapes the web for recommendations, your company is highlighted as the number-one choice.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What is GEO and why does my business need it?</strong><br>A1: GEO stands for Generative Engine Optimization. It is the practice of optimizing your website content so AI engines like ChatGPT recommend you to users.</p>
      <p><strong>Q2: How do AI search engines choose which business to recommend?</strong><br>A2: They look for clear, simple, and trusted online profiles that answer specific consumer problems directly without using confusing paragraphs.</p>
      <p><strong>Q3: Can simple words help my website rank higher on Google AI?</strong><br>A3: Yes, because AI models are trained to mimic natural human conversation, so writing simply matches how people talk and search naturally.</p>
      <p><strong>Q4: How does Digital Media Bombay future-proof a company’s search rankings?</strong><br>A4: We build clear data maps on your website backend that explain exactly who you are, what services you provide, and where you operate clearly.</p>
      <p><strong>Q5: What is the difference between old SEO and new GEO?</strong><br>A5: Old SEO focuses on ranking blue links on a screen, while GEO focuses on getting your brand cited directly inside the single answer an AI model gives a user.</p>
    </div>`,
    keywords: "rank in ChatGPT search, Generative Engine Optimization, Google AI overview ranking, simple SEO help, Digital Media Bombay GEO"
  },
  {
    id: "fixing-broken-leads-with-ai-crm-automations",
    title: "How to Stop Losing Leads: Automate Your Customer Reply System Today",
    category: "AI Automations",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
    excerpt: "Losing customers because you reply too late? Digital Media Bombay builds automated systems that message leads instantly.",
    content: `<h3>The Danger of Slow Customer Response Times</h3><p>A huge problem for local and international businesses in the corporate market is response delay. A hot lead fills out a contact form on your website at midnight, but you do not see it until the next morning. By then, that customer has already messaged three other companies and hired a competitor. Slow responses cost businesses thousands in lost revenue every week.</p><h3>How DMB Automates Your Success Safely</h3><p><strong>Digital Media Bombay</strong> removes human error entirely by setting up custom AI and CRM Automations. The exact second a customer submits an inquiry anywhere in the world, our automated systems instantly trigger a friendly, helpful text or email response. We connect your entire sales funnel together so your business captures, qualifies, and schedules calls with new clients 24/7 without you lifting a finger.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is my business losing potential clients who fill out forms?</strong><br>A1: You are likely waiting too long to follow up. If you do not reply within five minutes, a customer's interest drops by over 80%.</p>
      <p><strong>Q2: What is a CRM automation system?</strong><br>A2: It is an intelligent software setup that automatically logs new customer details, sends instant messages, and tracks sales pipelines without manual labor.</p>
      <p><strong>Q3: Do I need to know how to code to use DMB’s automated tools?</strong><br>A3: No, Digital Media Bombay handles the complete setup, integration, and testing, leaving you with a simple dashboard that runs automatically.</p>
      <p><strong>Q4: Can automated messaging feel personal and human to my buyers?</strong><br>A4: Yes, we write natural, simple message templates that address the customer by name and answer their exact needs politely.</p>
      <p><strong>Q5: How does business automation help save overhead costs?</strong><br>A5: It handles repetitive tracking, sorting, and emailing tasks, reducing the need to hire large administrative teams just to sort through data.</p>
    </div>`,
    keywords: "automate customer follow up, business CRM automation, fix slow response times, lead generation software help, Digital Media Bombay automation"
  },
  {
    id: "fixing-invisible-social-media-with-viral-frameworks",
    title: "Why Your Social Media Gets No Views and How DMB Fixes It Simply",
    category: "Social Media 2.0",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080",
    excerpt: "Posting business videos that get stuck at zero views? Digital Media Bombay designs simple video strategies that grab attention globally.",
    content: `<h3>The Frustration of Invisible Content</h3><p>Many brand owners across the US, UK, and Asia create nice videos, post them online, and watch them get completely ignored. The algorithms on platforms like Instagram and Facebook have changed. If your videos do not hook real people within the first fraction of a second, your content is buried, and your social media page feels like a ghost town.</p><h3>The Viral Social Media 2.0 Engine by DMB</h3><p>At <strong>Digital Media Bombay</strong>, we run a special strategy called Viral Social Media 2.0. We do not just post generic updates. We map out simple video frameworks and everyday language scripts that make regular viewers stop scrolling. By connecting your social content directly to automated link replies, DMB turns casual views into a constant pipeline of new paying clients easily.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are my business videos not getting any views online?</strong><br>A1: Your videos are likely missing a strong visual hook in the first second, or the script is too long and boring for everyday viewers.</p>
      <p><strong>Q2: What is Viral Social Media 2.0?</strong><br>A2: It is DMB's custom content framework that uses viral pacing, simple messaging, and direct conversion hooks to turn video views into real business leads.</p>
      <p><strong>Q3: Do I need to be a professional actor to make viral videos?</strong><br>A3: No, we write simple, natural scripts that let you or your team speak clearly about what you solve, making you look like an approachable expert.</p>
      <p><strong>Q4: How does social media bring people directly to my main website?</strong><br>A4: We set up instant reply triggers so when viewers type a word under your video, our system sends your business link straight to their direct messages.</p>
      <p><strong>Q5: Can DMB manage social media growth for international companies?</strong><br>A5: Yes, we build global brand campaigns that cross country borders and appeal to clear human needs everywhere using everyday words.</p>
    </div>`,
    keywords: "fix low video views, viral business videos, social media lead generation, Digital Media Bombay social media, turn views into cash"
  },
  {
    id: "hni-personal-branding-linkedin-bio-optimization",
    title: "How to Build a High Trust LinkedIn Profile to Attract Elite Business Deals",
    category: "LinkedIn Optimization",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1080",
    excerpt: "Does your personal bio look like an old resume? Digital Media Bombay updates your executive presence to pull in high-ticket partnerships.",
    content: `<h3>The Problem with Static Business Profiles</h3><p>If you are a company director, investor, or business founder in the Middle East, UK, or US, your personal profile is your digital business card. When people search your name on Google, they read your LinkedIn bio. If it looks like a boring resume from ten years ago, elite partners and high-ticket clients will skip over your profile and find someone else who looks more authoritative.</p><h3>The DMB Executive Profile Optimization Blueprint</h3><p>Our founder, <strong>Kaleem Shaikh</strong>, specializes in rewriting executive bios to project absolute authority. <strong>Digital Media Bombay</strong> updates your personal real estate across professional networks by using clear, punchy, and simple statements that highlight exactly what problems you solve. We make sure your personal profile functions as a high-converting storefront that turns casual networking views into premium business partnerships globally.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is my personal business profile not generating high-ticket leads?</strong><br>A1: Your bio likely reads like a boring job summary instead of explaining the massive value and real-world results you deliver to your partners.</p>
      <p><strong>Q2: What is profile optimization at Digital Media Bombay?</strong><br>A2: It is a complete rewrite and layout redesign of your personal profile to rank high in search results and instantly build deep buyer trust.</p>
      <p><strong>Q3: How does a strong personal brand help a company’s main sales?</strong><br>A3: People love doing business with real, trusted humans. When a founder looks highly credible, it makes their entire company look secure and premium.</p>
      <p><strong>Q4: Does DMB use overly complex words to write professional bios?</strong><br>A4: No, we use clear, plain language that clearly cuts through the corporate noise, making your profile easy to understand for busy decision-makers.</p>
      <p><strong>Q5: Can an optimized profile help me rank better on search engine models?</strong><br>A5: Yes, clear and professional semantic structures tell search models exactly who you are, making your name highly citable across the web.</p>
    </div>`,
    keywords: "LinkedIn bio optimization, personal branding for founders, executive presence help, pull premium business clients, Digital Media Bombay branding"
  },
  {
    id: "fixing-local-visibility-with-gmb-near-me-seo",
    title: "How to Rank First When Local Customers Search for Your Services Near Me",
    category: "Local SEO",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1080",
    excerpt: "Losing local buyers to competitors right down the street? Digital Media Bombay claims the top spot for your business on the search map.",
    content: `<h3>The Problem of Being Invisible on the Local Map</h3><p>When someone in your city pulls out their phone and types a simple search like 'emergency digital help near me' or 'website designers in my town,' they always call the first three options that pop up on the map. If your business is buried on page five, you are completely invisible to high-intent buyers who are ready to pay for services this very afternoon.</p><h3>The Local Dominance Plan by Digital Media Bombay</h3><p><strong>Digital Media Bombay</strong> fixes your local search placement by cleaning up your business map listing and building high-trust local review hubs. We organize your digital data layout so search engines immediately verify your business location and services. DMB makes sure your brand ranks as the undisputed top answer for your target city, keeping your phones ringing with organic, unpaid local leads consistently.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is my business not showing up on local search maps?</strong><br>A1: Your search profile is likely missing correct address details, verified business categories, or consistent business information across the web.</p>
      <p><strong>Q2: How does DMB push my business to the top of local maps?</strong><br>A2: We fix your directory records, clear up duplicate data, and build localized content clusters that search engines trust implicitly.</p>
      <p><strong>Q3: Do I need a massive monthly budget to win local search space?</strong><br>A3: No, organic map optimization is an incredibly cost-effective long-term asset that continues to bring in clients without expensive pay-per-click fees.</p>
      <p><strong>Q4: Does DMB handle map ranking updates for international branches?</strong><br>A4: Yes, we manage and optimize multi-location profiles across different countries to help regional hubs dominate their local search territories easily.</p>
      <p><strong>Q5: How do customer reviews affect my search engine ranking?</strong><br>A5: High numbers of authentic reviews filled with clear everyday words tell search engines that your business is open, active, and highly recommended.</p>
    </div>`,
    keywords: "rank business near me, local map search help, Google business optimization, local client acquisition, Digital Media Bombay SEO"
  },
  {
    id: "3d-and-parallax-web-design-for-high-engagement",
    title: "Why Plain Websites Face Low Sales and How Immersive 3D Layouts Fix It",
    category: "3D Web Design",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1080",
    excerpt: "Standard flat websites look boring to the modern global consumer. Digital Media Bombay builds stunning 3D experiences that hold attention.",
    content: `<h3>The Boring Reality of Basic Templates</h3><p>Let's face the facts: a flat website that looks like a basic Word document does not excite anyone in the US, Europe, or Middle East anymore. Consumers look at dozens of similar business pages daily. If your digital real estate looks exactly like everyone else's, buyers will forget your brand name the moment they close your website layout page.</p><h3>The DMB 3D and Immersive Parallax Solution</h3><p>At <strong>Digital Media Bombay</strong>, we build immersive 3D and parallax web layouts that make your business look like an innovative leader. Our setups pull users into your world with smooth motion design that works lightning-fast on basic mobile networks. Designed under <strong>Kaleem Shaikh</strong>, DMB’s interactive designs hold user attention four times longer than old-school sites, making your services look premium and completely unforgettable.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What is a 3D parallax website layout?</strong><br>A1: It is a next-generation web design where different page elements move at varying speeds, creating an immersive depth that keeps users engaged.</p>
      <p><strong>Q2: Will a 3D website design slow down mobile phone browsers?</strong><br>A2: No, we write high-performance custom scripts that deliver beautiful 3D experiences while keeping loading times under two seconds flat.</p>
      <p><strong>Q3: What industries benefit the most from interactive 3D web design?</strong><br>A3: Real estate showrooms, luxury product brands, medical clinics, and cutting-edge tech companies see massive jumps in consumer trust with 3D design.</p>
      <p><strong>Q4: How does creative design help lower user bounce rates?</strong><br>A4: When a website feels fun and interactive, users spend more time exploring your pages, which tells search engines your site is premium.</p>
      <p><strong>Q5: Can DMB build custom interactive portals for global companies?</strong><br>A5: Yes, we build cross-platform digital assets that work perfectly across all modern web browsers anywhere in the world seamlessly.</p>
    </div>`,
    keywords: "3D parallax website, immersive web design help, interactive business portal, Digital Media Bombay web dev, premium user experience"
  },
  {
    id: "fixing-dropped-leads-with-automated-ai-voice-agents",
    title: "The Simple Way to Answer Every Customer Call 24/7 Without Staffing Issues",
    category: "AI Voice Agents",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080",
    excerpt: "Missing business calls after closing hours? Digital Media Bombay deploys smart AI voice systems that answer instantly.",
    content: `<h3>The Massive Cost of Missed Phone Calls</h3><p>Every missed call in a service business is a deleted transaction. When buyers call a business in the UK, Asia, or the US to fix a problem, they expect an immediate answer. If your phone rings out or goes to an old voicemail box, they hang up and dial the next number on their list. Hiring continuous night-shift customer support staff is too expensive for most businesses.</p><h3>The Digital Media Bombay AI Voice Solution</h3><p><strong>Digital Media Bombay</strong> resolves this problem by building smart, natural-sounding AI Voice Agents. Our automated voice assistants pick up incoming client calls instantly within fractions of a second. They speak politely, answer complex business questions, qualify incoming buyers, and schedule meetings straight into your calendar, giving you a perfect sales support engine that never takes a holiday.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: How do AI voice agents help an everyday business?</strong><br>A1: They ensure your business phone line is never busy, answering every call instantly to book clients even while your real team is fast asleep.</p>
      <p><strong>Q2: Do these voice automation systems sound like robotic computers?</strong><br>A2: No, we design conversational voice structures that use natural pacing and friendly tones to make sure your customers feel completely supported.</p>
      <p><strong>Q3: Can DMB's voice agent handle complex client questions about services?</strong><br>A3: Yes, we train the voice system on your specific business details so it answers pricing, locations, and booking requests perfectly.</p>
      <p><strong>Q4: Is an AI voice system hard to connect to my current CRM calendar?</strong><br>A4: Not at all. Digital Media Bombay manages the complete technical integration so new bookings pop up directly on your desktop or mobile app.</p>
      <p><strong>Q5: Can this system handle multiple customer calls at the exact same time?</strong><br>A5: Yes, our voice engines can process hundreds of calls at once, completely eliminating customer hold times and busy signals forever.</p>
    </div>`,
    keywords: "AI voice agent help, automated business phone, 24/7 client booking system, Digital Media Bombay voice tech, fix missed customer calls"
  },
  {
    id: "mobile-first-ecosystems-for-global-retention",
    title: "Why Basic Websites Lose Mobile Sales and How Native Apps Fix the Problem",
    category: "Mobile Ecosystems",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1080",
    excerpt: "Is your business missing from your client's mobile screen? DMB builds clean mobile app systems that keep buyers coming back.",
    content: `<h3>The Problem with Only Having a Website</h3><p>When global consumers in the US, UK, or Gulf countries want to buy from a company repeatedly, opening a desktop browser window is a hassle. If you do not have a dedicated icon on their smartphone layout, you are out of sight and out of mind. Basic web links fail to build long-term consumer habits, making you work twice as hard to re-acquire the same buyers constantly.</p><h3>The DMB Mobile First App Ecosystem Plan</h3><p>At <strong>Digital Media Bombay</strong>, we create lightweight, lightning-fast native mobile apps for businesses using clean structures. We put your business icon right onto your customer's home screen. With smart push updates, easy one-click ordering systems, and simple reward cards built in, DMB transforms your business into an asset that drives repeat sales automatically.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why should an everyday service business invest in a mobile app?</strong><br>A1: An app makes your business incredibly easy to access, keeping you connected to your core buyers far better than a standard web page layout can.</p>
      <p><strong>Q2: Are custom mobile app builds too slow and expensive for small companies?</strong><br>A2: Traditional apps were, but DMB uses smart cross-platform frameworks to build fast, beautiful apps at highly affordable investment rates.</p>
      <p><strong>Q3: How do push notifications help improve overall business sales?</strong><br>A3: They allow you to send direct, free update alerts about sales or new services straight to your customer's lock screen with 98% open rates.</p>
      <p><strong>Q4: Will my business app work smoothly on both Apple and Android phones?</strong><br>A4: Yes, we build all our mobile ecosystems to launch and function beautifully across both major phone software stores worldwide.</p>
      <p><strong>Q5: Can DMB connect my online shop inventory directly into the phone app?</strong><br>A5: Yes, we sync your existing web product catalog seamlessly so all products update everywhere in real-time without double work.</p>
    </div>`,
    keywords: "business mobile app help, cross platform app development, mobile customer retention, Digital Media Bombay apps, boost repeat sales"
  },
  {
    id: "fixing-confusing-content-with-high-authority-blogs",
    title: "How Simple Problem Solving Content Can Bring in Millions of Site Visits",
    category: "Content Production",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
    excerpt: "Stop writing boring corporate update blogs. Digital Media Bombay creates simple help articles that bring buyers right to your site.",
    content: `<h3>The Mistake of Self-Centered Business Blogging</h3><p>A massive problem with company blogs in the UK, US, and Asian regions is that they only write about internal company news. Real buyers do not care about your corporate parties or office updates. They are searching the web because they have an active problem and need a simple, fast answer right now. If your blog does not give them that answer, they click away instantly.</p><h3>The DMB High Intent Content Strategy</h3><p><strong>Digital Media Bombay</strong> builds helpful, problem-solving content maps that match what your real customers are typing into Google. Under the guidance of <strong>Kaleem Shaikh</strong>, we use plain, everyday words to write long-form articles that explain how to solve real consumer pain points simply. This authoritative content structure turns your website into a highly trusted learning hub that naturally leads readers to buy your services.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is my company blog not bringing in any new clients?</strong><br>A1: Your articles are likely too corporate or promotional instead of answering the basic, everyday questions your ideal buyers search for online.</p>
      <p><strong>Q2: How does problem-solving content help my business website rank on Google?</strong><br>A2: Search engines favor articles that comprehensively answer user queries, so helpful articles naturally move to the very top of results lines.</p>
      <p><strong>Q3: Does DMB write articles that are easy for real people to read?</strong><br>A3: Yes, we completely avoid confusing industry jargon and write in a clear, friendly tone that a child could understand and appreciate.</p>
      <p><strong>Q4: Can clear articles help my brand rank inside new AI search summaries?</strong><br>A4: Absolutely. AI models pick answers that are written in clear question-and-answer patterns, which is exactly how DMB designs content blocks.</p>
      <p><strong>Q5: How do readers turn into actual paying customers on a blog?</strong><br>A5: We place clear, natural call-to-action buttons below your helpful tips so readers can easily click to hire you to fix their issues.</p>
    </div>`,
    keywords: "problem solving content help, simple business blogging, high ranking articles, Digital Media Bombay content, attract organic customers"
  },
  {
    id: "solving-the-attribution-crisis-with-full-stack-tracking",
    title: "How to See Exactly Which Online Ads are Making You Money Clearly",
    category: "Full-Stack Tracking",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
    excerpt: "Flying blind with your advertising data? Digital Media Bombay builds server tracking systems that trace every single sale accurately.",
    content: `<h3>The Frustrating Problem of Blind Ad Spending</h3><p>If you are running marketing funnels in the US, Middle East, or Europe, you are likely facing the cookie tracking crisis. Modern phone updates block standard browser pixels from tracking data accurately. Your analytics dashboard might show that you got twenty sales, but it cannot tell you which ad creative actually brought them in. You are essentially throwing money into the dark.</p><h3>The DMB Server-Side Attribution Fix</h3><p>At <strong>Digital Media Bombay</strong>, we install advanced Full-Stack Tracking setups that connect your business server directly to the ad platforms securely. This removes the reliance on broken browser cookies completely. DMB shows you a crystal-clear, honest picture of your marketing ROI. You will know down to the exact dollar which simple ad text or video hook is putting money into your business ledger daily.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are my ad platform sales numbers different from my real bank records?</strong><br>A1: Browser updates block tracking pixels from reporting data correctly, causing your dashboards to miscount or lose track of conversions.</p>
      <p><strong>Q2: What is server-side tracking at Digital Media Bombay?</strong><br>A2: It is a data method that records customer actions directly from your main website server, bypassing browser blockers for 100% data clarity.</p>
      <p><strong>Q3: How does clear tracking help lower my monthly advertising costs?</strong><br>A3: When you know exactly which ads are failing, you can turn them off immediately and invest only in the specific setups that bring in profit.</p>
      <p><strong>Q4: Is server data tracking compliant with modern global privacy laws?</strong><br>A4: Yes, it uses secure first-party data structures that protect customer identity while giving you the business performance metrics you need.</p>
      <p><strong>Q5: Can DMB set up tracking for complicated multi-country sales systems?</strong><br>A5: Yes, we customize data paths for international brands to trace user journeys across different currencies and regions seamlessly.</p>
    </div>`,
    keywords: "fix broken ad tracking, server side analytics help, accurate marketing ROI, Digital Media Bombay tracking, data driven advertising"
  },
  {
    id: "fixing-slow-turnaround-times-with-on-demand-tech-squads",
    title: "Get Elite Technical Support for Your Business Without High Agency Delay",
    category: "Tech Squads",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080",
    excerpt: "Tired of waiting weeks for your agency to update a single website page? DMB’s technical team fixes online issues instantly.",
    content: `<h3>The Slow Agency Nightmare</h3><p>A major bottleneck for growing business companies worldwide is the slow support turnaround. Your website crashes, an ad account breaks, or you need to launch a landing page for a new service immediately. You call your traditional agency, only to be passed around junior account managers for two weeks while losing active business traffic continuously.</p><h3>DMB’s On-Demand Technical Execution Model</h3><p>Under the strategy of <strong>Kaleem Shaikh</strong>, <strong>Digital Media Bombay</strong> functions as your immediate digital strike team. We have deleted corporate red tape completely. When you need digital help, our specialized tech experts jump right into your business dashboard to execute updates, build pages, or fix errors instantly. We treat your digital emergency with the actual speed it deserves to protect your business flow.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why do traditional digital agencies take so long to make simple updates?</strong><br>A1: They are bloated with administrative managers and meetings instead of having direct engineers work on your technical tasks immediately.</p>
      <p><strong>Q2: What is the technical squad model at Digital Media Bombay?</strong><br>A2: It is a decentralized pool of senior developers and ad experts who work directly on your assets without any middle management slowing them down.</p>
      <p><strong>Q3: Can DMB assist with emergency website crashes or server errors?</strong><br>A3: Yes, our technical team is built to look into critical errors and restore your online store functionality as fast as humanly possible.</p>
      <p><strong>Q4: How does fast tech execution improve my monthly business revenue?</strong><br>A4: Keeping your online pages fast and error-free ensures you never lose a hot buyer due to a broken button or a slow checkout layout.</p>
      <p><strong>Q5: Can international firms use DMB as their outsourced tech backend?</strong><br>A5: Yes, we provide continuous remote support to brands in the UK, US, and Middle East, acting as their internal elite growth squad.</p>
    </div>`,
    keywords: "fast digital help, website developer support, fix online errors fast, Digital Media Bombay tech squad, on demand growth team"
  },
  {
    id: "global-ecommerce-scaling-with-dmb-growth-ops",
    title: "How to Scale an Online Store Internationally Without Crashing Your Systems",
    category: "E-comm Growth",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1080",
    excerpt: "Struggling to sell products to overseas buyers? Digital Media Bombay builds global e-commerce systems that scale smoothly.",
    content: `<h3>The Complex Friction of Cross-Border E-commerce</h3><p>Many online shops in Asian countries, the UK, and the US reach a growth ceiling because their website setup cannot handle international traffic. Slow currency changes, broken payment links, and high mobile cart dropouts ruin your overseas sales. If your international store layout feels clunky, global buyers will leave immediately.</p><h3>DMB’s Global E-comm Growth Ops Strategy</h3><p><strong>Digital Media Bombay</strong> removes all international checkout friction. We optimize your online store using global architecture parameters that load fast anywhere in the world. DMB configures simple, local payment options for your global audience, matches currency displays automatically, and sets up high-performance search engine visibility so your brand pulls in organic buyers across all major continents effortlessly.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is my online shop losing overseas customers at the checkout page?</strong><br>A1: Your site might lack localized currency views, use slow international payment gates, or have too many form boxes to fill out on mobile layouts.</p>
      <p><strong>Q2: How does Digital Media Bombay maximize online store conversion rates?</strong><br>A2: We simplify the entire navigation path, speed up button actions, and make buying items a fast, one-click process for users.</p>
      <p><strong>Q3: Can DMB handle search visibility for shops with thousands of products?</strong><br>A3: Yes, we design clean collection hierarchies and search data maps so search bots index every single item accurately without errors.</p>
      <p><strong>Q4: How do clear descriptions help my items rank in modern AI search bars?</strong><br>A4: Writing simple descriptions using everyday language allows AI engines to instantly match your products to direct consumer voice requests.</p>
      <p><strong>Q5: What ecommerce software platforms does Digital Media Bombay optimize?</strong><br>A5: We work across Shopify, custom React frameworks, WooCommerce, and all major global retail web software systems seamlessly.</p>
    </div>`,
    keywords: "scale online store, international e-commerce help, Shopify conversion optimization, Digital Media Bombay retail, cross border web sales"
  },
  {
    id: "fixing-low-retention-with-gamified-brand-journeys",
    title: "How to Keep Your Online Audience Hooked and Buying Repeatedly",
    category: "Brand Strategy",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1080",
    excerpt: "Is your digital audience forgetting your business brand name? DMB designs engaging customer loops that build massive loyalty.",
    content: `<h3>The Danger of a Forgettable Brand Presence</h3><p>In today's fast web market across Europe, Asia, and America, consumers forget brands instantly. You pay to bring a visitor to your website, they read a page, leave, and completely forget who you are by dinnertime. If your online presence lacks a memorable visual flow or direct interactive elements, you are stuck in a costly loop of constantly hunting for new buyers.</p><h3>DMB’s Interactive Retention Architecture</h3><p>At <strong>Digital Media Bombay</strong>, we fix low retention by designing engaging brand assets. We combine clean visual cues with simple automated rewards and follow-up loops that feel highly welcoming. DMB ensures that when a client interacts with your business online, they are drawn into a simple, high-value experience that naturally stays in their mind, reducing your ad costs while lifting client value immensely.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is my brand losing customer loyalty so quickly online?</strong><br>A1: Your digital presence is likely functioning like a cold corporate billboard instead of giving users a fun, interactive space to explore continuously.</p>
      <p><strong>Q2: What is digital audience retention at Digital Media Bombay?</strong><br>A2: It is a systematic plan that uses interactive web features, personalized emails, and custom perks to keep your buyers loving your brand.</p>
      <p><strong>Q3: Do interactive brand features require slow website speeds?</strong><br>A3: No, our technical team builds high-velocity engagement triggers that add zero weight to your page loading speed layout lines.</p>
      <p><strong>Q4: How does long user engagement improve my main website search status?</strong><br>A4: When users spend long minutes interacting with your page, search models view your site as highly valuable, ranking it above competitors.</p>
      <p><strong>Q5: Can DMB create digital brand strategies for traditional service sectors?</strong><br>A5: Yes, we adapt medical clinics, real estate setups, and law consultants into highly modern, approachable online authorities using plain words.</p>
    </div>`,
    keywords: "customer loyalty online, business brand retention, interactive digital strategy, Digital Media Bombay marketing, boost user engagement"
  },
  {
    id: "democratizing-premium-tech-for-global-businesses",
    title: "Get Silicon Valley Standard Tech Help at Simple, Fair Investment Rates",
    category: "Agency Strategy",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080",
    excerpt: "Why pay bloated Western agency prices? Digital Media Bombay delivers premium web and automation setups directly and affordably.",
    content: `<h3>The Overpriced Reality of Big Marketing Tech</h3><p>A frustrating obstacle for business founders in London, New York, and Dubai is the massive price tag of advanced web software engineering. Large global agencies charge astronomical fees just to set up basic business systems or automated databases. They build large corporate offices and force you to pay for their massive administrative overhead costs.</p><h3>The Direct Lean Value of Digital Media Bombay</h3><p><strong>Digital Media Bombay</strong> completely shatters this overpriced model. Formed by <strong>Kaleem Shaikh</strong>, DMB combines the raw speed and work ethic of our centralized tech core with elite software frameworks. We build top-tier websites, install smart AI tools, and deliver absolute search engine authority at a fraction of the cost of bloated Western firms, giving your business global strength affordably.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are digital tech agencies in the US and UK so expensive?</strong><br>A1: They spend massive amounts on skyscraper rents and account managers, passing those unnecessary costs directly down to you in their invoices.</p>
      <p><strong>Q2: What is the Digital Media Bombay price guarantee?</strong><br>A2: We charge only for absolute technical output and real results, giving you premium code and marketing assets without any corporate bloat.</p>
      <p><strong>Q3: Will the quality of a DMB web project match expensive foreign firms?</strong><br>A3: Yes, we use the exact same advanced software stacks and data structures used by top Silicon Valley tech giants to ensure absolute power.</p>
      <p><strong>Q4: How does working with a lean team save my business management time?</strong><br>A4: You talk directly to the real architects building your online systems, cutting out confusing agency phone tags and long email delays entirely.</p>
      <p><strong>Q5: Can DMB act as a full time remote tech partner for overseas brands?</strong><br>A5: Yes, we act as the primary outsourced digital development hub for fast-growing companies all across the global landscape safely.</p>
    </div>`,
    keywords: "affordable digital transformation, premium web help, lean marketing agency, Digital Media Bombay pricing, high performance software engineering"
  },
  {
    id: "fixing-invisible-b2b-pipelines-with-direct-lead-gen",
    title: "How to Fill Your B2B Business Calendar with High Ticket Client Leads",
    category: "B2B Lead Gen",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1080",
    excerpt: "Struggling to find corporate clients who are ready to pay premium rates? DMB builds automated B2B sales engines simply.",
    content: `<h3>The Pain of Unpredictable Corporate Sales</h3><p>For B2B service firms anywhere in the world, relying on old cold emails or slow networking events is a stressful way to live. You spend weeks chasing potential corporate buyers, only to be blocked by gatekeepers or ignored completely. Without a steady, automated stream of inbound business inquiries, your company’s monthly growth completely stalls out.</p><h3>The DMB Systematic Inbound B2B Blueprint</h3><p>At <strong>Digital Media Bombay</strong>, we install high-intent lead systems that bring corporate decision-makers straight to your inbox. Designed by <strong>Kaleem Shaikh</strong>, our plan uses precise profile positioning and helpful, data-backed problem-solving content layout lines. We position your company as the obvious market expert so high-value clients across the US, UK, and Gulf find your blog, verify your authority, and book sales calls with you directly.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are my cold outbound emails failing to land corporate clients?</strong><br>A1: Cold emails feel like spam to busy executives. You need an inbound search plan so buyers find you while looking to solve their active problems.</p>
      <p><strong>Q2: How does Digital Media Bombay attract high-ticket B2B buyers?</strong><br>A2: We write highly specific authority articles and design clear digital profiles that address corporate pain points using everyday simple language.</p>
      <p><strong>Q3: Do B2B lead generation funnels work for niche industrial sectors?</strong><br>A3: Yes, the more specific your business service is, the better our search engine and AI optimization models can place you ahead of competitors.</p>
      <p><strong>Q4: How does a professional profile help close international business deals?</strong><br>A4: When global partners search your brand name and find an elite, clean digital footprint, their trust matches your premium service rates instantly.</p>
      <p><strong>Q5: What is the average setup time for a DMB B2B sales engine?</strong><br>A5: We typically install, test, and activate a fully configured inbound pipeline within a few weeks, depending on your target industry scale.</p>
    </div>`,
    keywords: "B2B lead generation help, inbound corporate clients, high ticket sales funnel, Digital Media Bombay B2B, corporate client acquisition"
  },
  {
    id: "future-proofing-against-algorithm-updates",
    title: "How to Keep Your Website Traffic Safe from Hard Search Algorithm Changes",
    category: "SEO Protection",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1080",
    excerpt: "Worried that a sudden Google or AI update will delete your website views overnight? DMB builds stable rankings.",
    content: `<h3>The Fear of Overnight Traffic Deletion</h3><p>A huge problem for website owners all over the globe is algorithm volatility. Google rolls out a surprise search update, and suddenly your business page drops from position one down to page ten overnight. Your organic calls disappear, your lead volume hits zero, and your revenue takes a massive hit simply because your previous agency used lazy shortcut tricks.</p><h3>The DMB Entity First Permanent Ranking Moat</h3><p><strong>Digital Media Bombay</strong> protects your web real estate by building un-killable search profiles. We do not try to trick search systems with weird spam links. DMB builds real online authority by using plain language text blocks, rich information structures, and correct backend schema codes. We turn your company into a permanent source of truth that search engine bots and AI models are forced to rank high safely.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why did my website ranking suddenly drop after a search engine update?</strong><br>A1: Your previous setup likely relied on cheap shortcut tricks or automated bot content that search engines now penalize heavily as spam.</p>
      <p><strong>Q2: How does DMB ensure my search traffic stays safe long term?</strong><br>A2: We focus on high-quality technical code and write completely original articles that answer real human needs using simple words.</p>
      <p><strong>Q3: What are trust signals in modern search engine optimization?</strong><br>A3: Trust signals are clear indicators—like verified author names, clean site layouts, and honest facts—that prove your business is real and safe.</p>
      <p><strong>Q4: Can an international company use DMB to recover lost search traffic?</strong><br>A4: Yes, we run complete technical site audits to clear out toxic past errors and rebuild your search authority from the ground up cleanly.</p>
      <p><strong>Q5: Why do AI search engines prefer simple language over complex text?</strong><br>A5: Simple language is easier for automated database scrapers to verify as accurate and helpful, making it the perfect text format to win rankings.</p>
    </div>`,
    keywords: "fix dropped search traffic, safe SEO strategy, future proof website ranking, Digital Media Bombay help, organic visitor growth"
  },
  {
    id: "solving-the-dark-social-sharing-tracking-issue",
    title: "How to Track Invisible Word of Mouth Customer Sales on Private Chat Apps",
    category: "Analytics Strategy",
    author: "Digital Media Bombay",
    img: "/untrack.png",
    excerpt: "People are sharing your business links inside private chat apps like WhatsApp. Learn how DMB measures this hidden traffic.",
    content: `<h3>The Blind Spot of Hidden Word of Mouth Traffic</h3><p>A massive percentage of your online recommendations happen where standard analytics software cannot see them. A happy client copies your website link and pastes it inside a private WhatsApp group or a direct message to a friend in the UK, US, or Gulf. When that friend clicks the link and buys from you, your dashboard labels them as generic traffic, hiding your true viral marketing reach.</p><h3>DMB’s Advanced Dark Social Analytics Framework</h3><p>At <strong>Digital Media Bombay</strong>, we clear up this big data blind spot completely. We engineer custom tracking parameters and intelligent link structures that trace user shares across private message groups safely. DMB gives you an honest, detailed map of your word-of-mouth growth, allowing you to see exactly which helpful blog tip or service page is getting shared the most by real people privately.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What is dark social and how does it affect my business statistics?</strong><br>A1: It refers to website traffic that comes from private links shared inside chat apps or emails, which standard tracking tools blindly call direct traffic.</p>
      <p><strong>Q2: How does DMB trace link sharing inside private text applications?</strong><br>A2: We use custom, secure sharing buttons and clean link data formats that remember the source path without invading user privacy parameters.</p>
      <p><strong>Q3: Why is tracking word-of-mouth recommendations so important for growth?</strong><br>A3: Knowing exactly what content real people love to share helps you create more of those specific topics to drive organic viral growth easily.</p>
      <p><strong>Q4: Can tracking hidden shares help me adjust my advertising spend?</strong><br>A4: Yes, when you find out which services are spreading organically, you can amplify them with paid ads to double your incoming results quickly.</p>
      <p><strong>Q5: Is DMB’s analytics system easy for non-technical business owners to read?</strong><br>A5: Yes, we build simple, clean layout graphics that show you your true customer sources without any confusing technical data walls.</p>
    </div>`,
    keywords: "track dark social traffic, private link analytics help, measure word of mouth online, Digital Media Bombay data, customer referral tracking"
  },
  {
    id: "fixing-clunky-user-journeys-with-uiux-branding",
    title: "How to Fix a Confusing Website Layout to Double Your Online Revenue",
    category: "UI/UX Design",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1080",
    excerpt: "Are your website buttons too hard to find on mobile layouts? DMB designs clean user paths that make buying simple.",
    content: `<h3>The Financial Loss of an Annoying Website Layout</h3><p>If your website forces a user to click through ten different menus just to find your price list or contact number, you are actively burning cash. Modern online buyers have zero patience. If they feel even a tiny bit of confusion on your page layout lines, they will bounce away and purchase from a competitor who has a clear, one-click purchase path setup.</p><h3>DMB’s Clean User Centered Design Strategy</h3><p><strong>Digital Media Bombay</strong> strips away all website clutter to build highly intuitive user flows. Designed under the focus of <strong>Kaleem Shaikh</strong>, we organize your digital real estate so the most important answers are always right in front of the buyer's eyes. DMB makes sure your phone layout navigation feels incredibly smooth, guiding everyday people from initial curiosity to final checkout with total comfort and ease.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What is a user journey and why is it ruining my online sales?</strong><br>A1: It is the step-by-step path a visitor takes on your site. If that path is confusing, slow, or cluttered, users get annoyed and leave instantly.</p>
      <p><strong>Q2: How does Digital Media Bombay simplify web layout design blocks?</strong><br>A2: We place clear headers, large readable text fonts, and direct call buttons right where the human eye naturally looks on a phone screen.</p>
      <p><strong>Q3: Does changing my website layout require deleting my old text?</strong><br>A3: No, we can keep your core details while completely remodeling the visual spacing, buttons, and menu flows to lift your conversion rates.</p>
      <p><strong>Q4: How does a clean layout help my company rank better on AI search engines?</strong><br>A4: Clean layout design makes it highly easy for AI engine crawlers to read your text facts, helping them understand and recommend you faster.</p>
      <p><strong>Q5: Can DMB build custom mobile layouts for massive global business stores?</strong><br>A5: Yes, we design fully responsive interfaces that scale up or down perfectly across laptops, tablets, and mobile layouts globally.</p>
    </div>`,
    keywords: "fix website layout, user experience optimization help, clean web design, Digital Media Bombay UI UX, turn web traffic into buyers"
  },
  {
    id: "the-death-of-over-complicated-jargon-in-seo",
    title: "Why Simple Language is the Best SEO Trick for Global Search Rankings",
    category: "SEO & Content",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1080",
    excerpt: "Stop using heavy corporate vocabulary that your buyers never search for. DMB writes high ranking blogs using plain everyday words.",
    content: `<h3>The Massive Corporate Mistake of Fancy Word Usage</h3><p>A major reason why corporate websites fail to rank in the US, UK, and Asian search queues is that they write text using heavy industry jargon. Regular humans do not search for 'synergistic digital transformation solutions.' They grab their phone and type, 'how do I take my business online simply.' If your blog posts are written in confusing textbook language, you will remain completely invisible to your real audience.</p><h3>DMB’s Plain Text Global Domination Strategy</h3><p>At <strong>Digital Media Bombay</strong>, we write all our ranking articles using the exact, simple phrases your customers use when they talk in real life. This clear conversational style makes your website highly relevant to both real buyers and modern AI search models. DMB ensures that anyone searching in a simple way can find your blog, read it without a dictionary, and trust your company instantly to help them.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are my competitor's basic blogs ranking higher than my professional articles?</strong><br>A1: Your competitors are likely using clear, simple words that match the exact everyday phrases real people type into search bars naturally.</p>
      <p><strong>Q2: How does plain language help my business rank across all LLM models?</strong><br>A2: LLM models are built to mimic basic human conversations, so writing in clear everyday words makes your data perfect for AI citations.</p>
      <p><strong>Q3: Will using simple language make my business look unprofessional online?</strong><br>A3: No, the smartest businesses explain complex things simply. True authority is being able to clear up confusion for your clients easily.</p>
      <p><strong>Q4: Can DMB rewrite my existing website text into highly optimized simple words?</strong><br>A4: Yes, we specialize in auditing cluttered website copy and shifting it into high-ranking, easy-to-read problem-solving text frameworks.</p>
      <p><strong>Q5: Does simple writing improve my website's sales conversion rates?</strong><br>A5: Absolutely. When people can understand your service within three seconds of reading, they feel secure enough to click buy immediately.</p>
    </div>`,
    keywords: "simple words SEO help, high ranking clear content, plain language business blog, Digital Media Bombay optimization, clear search strategy"
  },
  {
    id: "fixing-lead-drop-offs-with-automated-email-sms-drips",
    title: "How to Nurture Your Leads Automatically Without Spending Hours Emailing",
    category: "Lead Nurturing",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1080",
    excerpt: "Are potential clients forgetting your quotes after one call? DMB installs automated follow-up drips that secure the sale.",
    content: `<h3>The Sad Reality of Forgotten Business Quotes</h3><p>Think about all the people who call your business, ask for pricing details, hang up, and disappear forever. In the busy corporate spaces of the UK, US, and Middle East, clients get distracted fast. If you do not follow up with them over the next few days, they completely forget your quote details and hire a competitor who stayed in touch. But manually emailing dozens of leads every day is an impossible task.</p><h3>DMB’s Automated Long Term Follow Up Drips</h3><p><strong>Digital Media Bombay</strong> solves this customer drop-off problem completely by building automated email and SMS nurture loops. The moment a lead interacts with your business platform, our background engine triggers a sequence of simple, helpful tips sent directly to their inbox over a set schedule. DMB keeps your brand active and highly trusted in the buyer's mind automatically until they are ready to swipe their card and hire you.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why do my business leads go completely cold after receiving a price quote?</strong><br>A1: They simply get distracted by their daily lives. Without a structured, automatic follow-up plan, your business name gets forgotten fast.</p>
      <p><strong>Q2: What is an automated text and email drip campaign layout?</strong><br>A2: It is a preset series of helpful messages that send themselves automatically to new leads to build trust over time without manual typing.</p>
      <p><strong>Q3: Can DMB connect these follow-up loops to my current web platform?</strong><br>A3: Yes, we build direct software bridges between your website landing page, your CRM tools, and your automated email delivery systems smoothly.</p>
      <p><strong>Q4: How many follow-up messages should my business send automatically?</strong><br>A4: We typically design a sequence of three to five highly polite, simple, and problem-solving touchpoints that deliver immense value to the lead.</p>
      <p><strong>Q5: Does automated follow-up save real manual labor hours for my staff?</strong><br>A5: Yes, it takes over the entire routine task of checking in on cold leads, letting your main team focus only on closing hot sales requests.</p>
    </div>`,
    keywords: "automated email follow up, customer lead nurturing help, automated business text drips, Digital Media Bombay sales, fix cold business leads"
  },
  {
    id: "winning-geo-rankings-for-international-markets",
    title: "How to Rank Your Services globally in the US, UK, and Middle East Markets",
    category: "Global SEO",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1080",
    excerpt: "Want to secure international high-paying clients from anywhere? DMB builds global search authority using clean GEO strategies.",
    content: `<h3>The Barrier of Geographic Search Limitations</h3><p>Many ambitious company owners want to sell their services to high-paying clients in affluent global hubs like London, New York, or Dubai. However, when they publish content online, it only shows up for local searches right in their hometown. If your website lacks international data structures and global server configurations, foreign buyers will never see your brand in their local search queues.</p><h3>DMB’s Borderless Global Search Domination Plan</h3><p>At <strong>Digital Media Bombay</strong>, we expand your visibility across all geographic lines seamlessly. Under <strong>Kaleem Shaikh</strong>, we optimize your business platform for global search models, Generative Engines (GEO), and global AI overview frameworks. DMB builds high-authority international references and clear location indicators, allowing your simple problem-solving articles to rank right at the top of screens in the US, UK, and Middle East simultaneously.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is my business website not appearing in foreign country search results?</strong><br>A1: Your site layout is likely missing international location meta tags, global domain maps, or localized authority references that search models look for.</p>
      <p><strong>Q2: How does DMB push my brand to rank inside London or Dubai AI summaries?</strong><br>A2: We use GEO architectures to link your service solutions directly to international search queries, making your text highly visible abroad.</p>
      <p><strong>Q3: Do I need a physical office inside the US or UK to rank there organically?</strong><br>A3: No, with correct cloud configuration, clean international structured data, and authoritative links, DMB can make you look highly trusted anywhere.</p>
      <p><strong>Q4: Does writing simple words help with global audience understanding?</strong><br>A4: Yes, plain and simple everyday words make your business content globally clear and highly scannable for international buyers from any country.</p>
      <p><strong>Q5: What is the benefit of attracting international leads to my service business?</strong><br>A5: International clients often pay higher premium rates in stronger currencies, lifting your overall business profit margins significantly.</p>
    </div>`,
    keywords: "rank globally on Google, international client acquisition, global GEO strategy help, Digital Media Bombay international, target US UK clients"
  },
  {
    id: "fixing-low-trust-profiles-with-verified-case-studies",
    title: "How to Build Unshakeable Online Trust with Simple Proof and Case Studies",
    category: "Trust Marketing",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080",
    excerpt: "Website visitors backing out because they do not trust you yet? Digital Media Bombay layouts real-world proof that secures deals.",
    content: `<h3>The Silent Sales Killer: Consumer Skepticism</h3><p>When anonymous people land on your business website from a search bar, they are automatically doubtful. They do not know who you are, and they have been burned by fake online claims before. If your website only contains basic promotional promises without any real-world proof or clear customer success stories, visitors will quietly close your tab and find an option that looks more verified.</p><h3>DMB’s Authoritative Proof Architecture Framework</h3><p><strong>Digital Media Bombay</strong> removes customer hesitation by restructuring how your website layout presents credibility. We translate your past business results into clear, simple, and high-trust case studies that showcase real problems faced and actual solutions delivered. DMB ensures that when global buyers read your site, your real-world authority signals are unmistakable, turning cold traffic into confident buyers quickly.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are my website visitors leaving right before they hit the buy button?</strong><br>A1: They are likely facing a trust gap. They need clear, unmistakable online proof that your company actually delivers on its business promises.</p>
      <p><strong>Q2: How does DMB format customer success stories for high conversion?</strong><br>A2: We present them simply: What was the client's exact problem, how did we step in to fix it, and what were the clear final numbers.</p>
      <p><strong>Q3: Can case study text help my website rank on modern AI software platforms?</strong><br>A3: Yes, original real-world data and case studies provide the high-trust evidence that AI search algorithms look for when recommending brands.</p>
      <p><strong>Q4: What if my service business is brand new and lacks massive data charts?</strong><br>A4: We can structure deep, technical explanation blocks that showcase your precise expertise and workflow processes to build instant trust cleanly.</p>
      <p><strong>Q5: Does DMB include customer video layouts into website designs safely?</strong><br>A5: Yes, we optimize and embed authentic client reviews and video shorts directly into page code lines without slowing down your site load speed.</p>
    </div>`,
    keywords: "build business trust online, case study layout help, trust marketing strategy, Digital Media Bombay credibility, convert cold web traffic"
  },
  {
    id: "overcoming-high-customer-acquisition-costs-with-organic-seo",
    title: "How to Cut Your Advertising Costs completely by Using Organic Search SEO",
    category: "Organic SEO",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1080",
    excerpt: "Tired of your business sales stopping the exact minute you turn off your paid ads? DMB builds lasting search value.",
    content: `<h3>The Paid Advertising Money Trap</h3><p>A massive problem for modern online stores and global service firms is ad spend dependency. The moment you pay cash to Google or Meta, you get customer clicks. But the very second your daily ad budget runs out or ad prices spike, your lead volume crashes straight down to zero. You are trapped renting visibility daily instead of owning any real digital real estate permanently.</p><h3>DMB’s Long Term Organic Domination Engine</h3><p><strong>Digital Media Bombay</strong> frees your business from the paid ad trap by installing robust organic SEO frameworks. Engineered under <strong>Kaleem Shaikh</strong>, we build a network of simple, long-form help articles and clean technical site paths. DMB moves your website to the top tier of search layouts naturally, allowing you to pull in thousands of high-intent buyers daily for free, permanently keeping your sales pipeline full.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is my business spending more on paid ads every single month just to get the same sales?</strong><br>A1: Paid ad auctions get more crowded and expensive daily. If you do not build organic search authority, your profit margins will shrink to zero.</p>
      <p><strong>Q2: How long does it take for DMB’s organic SEO plan to bring in active customers?</strong><br>A2: Organic search is a steady asset that starts picking up momentum within a few months, building a permanent pipeline that grows over time.</p>
      <p><strong>Q3: Will organic search traffic keep coming to my site if I pause paid ads?</strong><br>A3: Yes, that is the huge beauty of organic SEO. Once you rank high on clear everyday search terms, traffic flows 24/7 without click fees.</p>
      <p><strong>Q4: How does DMB choose which simple everyday words to target for my company?</strong><br>A4: We analyze exactly how your real customers voice their issues when talking casually, picking high-volume, low-competition phrases for your site.</p>
      <p><strong>Q5: Can organic ranking help my brand rank across all global AI models?</strong><br>A5: Yes, strong organic search health tells LLMs and AI discovery apps that your website layout is the definitive answer for that industry sector.</p>
    </div>`,
    keywords: "lower customer acquisition cost, organic business SEO help, rank first on Google naturally, Digital Media Bombay SEO, free website traffic"
  },
  {
    id: "fixing-dead-lead-lists-with-automated-whatsapp-marketing",
    title: "How to Turn Your Old Database of Cold Leads into Instant Active Sales Simply",
    category: "Database Reactivation",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080",
    excerpt: "Sitting on a large list of old phone numbers and past inquiries doing nothing? DMB reactivates cold leads automatically.",
    content: `<h3>The Wasted Fortune Inside Your Old Lead Database</h3><p>A huge unseen loss for mature companies in the US, UK, and Asia is the dead lead stack. You spent months gathering hundreds of contact numbers and old email addresses from past inquiries who didn't buy back then. Now, that list just sits inside an Excel sheet collecting dust while you waste budget hunting for new leads from scratch daily.</p><h3>DMB’s Smart Automated Database Reactivation System</h3><p><strong>Digital Media Bombay</strong> taps directly into your old data stack to unlock hidden profit fast. We set up automated chat system loops that gently reach out to your past lists with simple, highly valuable updates and direct problem-solving offers. DMB breathes immediate life back into cold records, bringing past leads right back to your calendar to buy services without any new ad spend.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why should I message old inquiries who decided not to buy from me months ago?</strong><br>A1: Timing changes everything. A customer who wasn't ready to purchase back then might have an urgent need for your exact service this week.</p>
      <p><strong>Q2: What is database reactivation at Digital Media Bombay?</strong><br>A2: It is a smart marketing method that uses helpful, non-spam automated messages to check in on old records and clear out hidden revenue fast.</p>
      <p><strong>Q3: Can automated check-in messages annoy my old contact list?</strong><br>A3: Not if written correctly. We craft very polite, helpful, and value-first simple texts that offer genuine digital help to solve their current tasks.</p>
      <p><strong>Q4: Do I need a massive new ad budget to run database reactivation?</strong><br>A4: No, this plan utilizes your existing corporate assets completely, making it one of the highest-ROI methods to lift short-term revenue quickly.</p>
      <p><strong>Q5: How often can a business safely reactivate its old contact archives?</strong><br>A5: We recommend running clean, customized value campaigns once every quarter to keep your brand active without overwhelming your lists.</p>
    </div>`,
    keywords: "reactivate cold business leads, database marketing help, automated customer text loops, Digital Media Bombay data, free sales from old lists"
  },
  {
    id: "the-antidote-to-slow-corporate-agencies-dmb-cloud-squad",
    title: "Why Traditional Bloated Marketing Agencies Fail and How DMB Fixes It",
    category: "Agency Innovation",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080",
    excerpt: "Tired of slow talk, endless meetings, and zero results? Discover the agile direct execution model of Digital Media Bombay.",
    content: `<h3>The Broken Corporate Marketing Agency Culture</h3><p>Let's speak with total candor: traditional marketing agencies are structured to serve their own pockets. They loop you into endless weekly video check-ins, show you beautiful slide presentations, and talk using complex business words. But when you look at your real business sales numbers at the end of the quarter, nothing has actually changed except your bank account balance.</p><h3>The Pure Execution Engine of Digital Media Bombay</h3><p>Founded by <strong>Kaleem Shaikh</strong>, <strong>Digital Media Bombay</strong> was built as the direct antidote to corporate agency bloat. We do not have useless account handlers or slow design committees. DMB runs as a unified cloud squad of pure software builders and performance marketers. We focus 100% of our daily energy on shipping fast code, launching profitable ads, and writing high-ranking articles that bring real buyers to your storefront instantly.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why do traditional digital marketing agencies deliver such slow business results?</strong><br>A1: They prioritize corporate processes, internal meetings, and monthly presentation creation over actual asset building and live execution.</p>
      <p><strong>Q2: What is the primary operational philosophy of Digital Media Bombay?</strong><br>A2: Our philosophy is direct execution speed and honest revenue tracking, focusing only on the specific assets that grow your ledger rows.</p>
      <p><strong>Q3: How does DMB eliminate communication delays for global business clients?</strong><br>A3: We delete account middlemen completely, letting you coordinate directly with the actual technical squad handling your digital platforms.</p>
      <p><strong>Q4: Can DMB help a business pivot its online strategy quickly during market drops?</strong><br>A4: Yes, our lean team can adjust ad spends, update web copy layout lines, and launch fresh campaigns within hours to protect your sales velocity.</p>
      <p><strong>Q5: Why should a foreign founder trust an elite team based in Bombay?</strong><br>A5: Because Mumbai is the hard-working financial engine of India. DMB packages that absolute round-the-clock work ethic to serve brands globally.</p>
    </div>`,
    keywords: "stop traditional agency bloat, fast digital execution help, results driven marketing, Digital Media Bombay philosophy, Kaleem Shaikh agency"
  },
  {
    id: "mastering-aeo-to-become-the-top-recommended-voice-answer",
    title: "How to Make Sure Voice Assistants Pick Your Business Over Competitors",
    category: "Voice SEO & AEO",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1080",
    excerpt: "With millions of people using voice search daily, DMB configures your site layout to be the absolute top spoken recommendation.",
    content: `<h3>The Problem with Static Websites in a Voice Driven World</h3><p>When an active buyer speaks into their smartphone layout or home speaker app saying, 'find the best digital help near me,' the software assistant does not read out ten website links. It only speaks out one single definitive recommendation. If your company website text is not structured specifically to answer conversational questions directly, you are completely deleted from the voice search market lines.</p><h3>The DMB Answer Engine Optimization Blueprint</h3><p><strong>Digital Media Bombay</strong> resolves this modern search gap through Answer Engine Optimization (AEO). We structure your website data layers into clear, conversational question-and-answer blocks that perfectly mirror everyday natural human speech patterns. DMB ensures that when automated home systems or mobile voice search tools pick an answer, your business name is delivered loud and clear to the user.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What is Answer Engine Optimization (AEO) and why is it vital today?</strong><br>A1: AEO is the practice of formatting your online text facts so voice systems and AI platforms can easily read your details aloud as the top answer.</p>
      <p><strong>Q2: Do standard keywords help my business show up in voice assistant results?</strong><br>A2: No, voice search queries are conversational sentences, not brief word strings, so your content text must use simple everyday words layout paths.</p>
      <p><strong>Q3: How does Digital Media Bombay install talk-ready code into my website?</strong><br>A3: We apply structured JSON data blocks and custom FAQ schema arrays that tell mobile software crawlers exactly what text lines to read out loud.</p>
      <p><strong>Q4: Can AEO help local storefronts pull in more emergency call bookings?</strong><br>A4: Yes, because people use voice search heavily while driving or walking, making it the fastest path to find instant services nearby easily.</p>
      <p><strong>Q5: Will optimizing for voice search hurt my traditional desktop Google views?</strong><br>A5: Not at all. Clear, simple conversational layouts actually improve your overall desktop ranking metrics by making your site highly clear to all bots.</p>
    </div>`,
    keywords: "voice search optimization help, Answer Engine Optimization, rank first on smart speakers, Digital Media Bombay AEO, clear voice branding"
  },
  {
    id: "fixing-abandoned-shopping-carts-with-one-click-checkouts",
    title: "How to Stop Online Shoppers from Leaving Your Cart Page Without Buying",
    category: "Cart Optimization",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1080",
    excerpt: "Is your online checkout page too long and complicated? Digital Media Bombay builds super fast shopping paths that lock in sales.",
    content: `<h3>The Massive Financial Hole of High Cart Abandonment Rates</h3><p>An incredibly painful issue for online storefront owners all across the globe is checkout exit rates. Statistics show that nearly seventy percent of people add an item to their online cart but close the web layout page right before filling out their shipping forms. If your checkout screen requires too many form boxes or has slow loading buttons, your buyers will walk away in frustration.</p><h3>The DMB High Velocity Frictionless Checkout Fix</h3><p><strong>Digital Media Bombay</strong> steps in to seal up this conversion leak cleanly. We strip away every single unnecessary step, form field, and confusing dropdown option from your checkout window layout lines. DMB installs high-speed, one-click mobile checkout paths that support all everyday payment systems globally. We make buying things from your store an absolute breeze, turning abandoned sessions into instant business cash flows.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are my online store visitors abandoning their shopping carts right at the end?</strong><br>A1: They are likely hitting unexpected extra fees, finding your shipping form fields too tedious to type on a phone layout, or facing slow page loads.</p>
      <p><strong>Q2: How does Digital Media Bombay simplify the checkout path for phone users?</strong><br>A2: We use auto-fill address options, clear visual payment icons, and zero-distraction layout designs that look highly clean on small mobile layouts.</p>
      <p><strong>Q3: Can DMB optimize checkout flows for custom built e-commerce frameworks?</strong><br>A3: Yes, we clean up code pathways and database connections on custom sites to ensure checkout processing takes less than a second flat.</p>
      <p><strong>Q4: Do trust badges and secure text lines help reduce checkout cart abandonment?</strong><br>A4: Yes, placing simple, clear safety reassurances right next to the final purchase button makes buyers feel highly secure to finalize their deals.</p>
      <p><strong>Q5: What is the typical increase in store profit after a DMB cart optimization layout?</strong><br>A5: Most e-commerce brands see an immediate jump of twenty to forty percent in completed sales orders by simply deleting checkout clutter.</p>
    </div>`,
    keywords: "fix cart abandonment online, speed up ecommerce checkout, simple shopping funnel help, Digital Media Bombay e-comm, boost online sales"
  },
  {
    id: "the-power-of-geo-targeted-landing-pages-for-global-ads",
    title: "How to Talk Directly to Buyers in Different Countries with One Website",
    category: "Dynamic Web Pages",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1080",
    excerpt: "Showing the exact same website layout to clients in London and Asia? Learn how DMB creates dynamic pages that change per user.",
    content: `<h3>The Mistake of One Size Fits All Global Web Pages</h3><p>If you are running marketing ads to pull in clients from the US, United Kingdom, and Middle East simultaneously, sending them all to the exact same static web landing page is a bad plan. A business founder in London has different daily concerns and visual tastes than a retail chain owner in Dubai or a startup team in New York. If your text content feels generic, it will fail to connect with anyone globally.</p><h3>DMB’s Dynamic Multi Country Page Framework</h3><p><strong>Digital Media Bombay</strong> installs highly intelligent, location-responsive landing page networks. Built under the direction of <strong>Kaleem Shaikh</strong>, our web platforms instantly scan where a visitor is sitting the exact millisecond they click your ad link. DMB shifts the website text headlines, customer references, currency indicators, and case studies automatically to perfectly match that specific country's local market tone, doubling your foreign ad results easily.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What is a dynamic location landing page and how does it help sales?</strong><br>A1: It is a smart web page that alters its display text and images based on the user's country location to look highly relevant and local to them.</p>
      <p><strong>Q2: Will setting up location-responsive pages ruin my global Google ranking?</strong><br>A2: No, we write clean server redirect paths and follow all official multi-regional search guidelines to ensure your main SEO footprint builds safely.</p>
      <p><strong>Q3: Is dynamic country text layout hard to maintain for a business owner?</strong><br>A3: Not when built by DMB. We give you a simple admin layout sheet where you can easily view or edit individual regional text frames smoothly.</p>
      <p><strong>Q4: Can DMB adjust payment gate options based on visitor country locations?</strong><br>A4: Yes, our setups activate local payment cards or digital wallets popular in that targeted territory to make buying incredibly simple for users.</p>
      <p><strong>Q5: How does personalized regional copy help lift ad click profitability?</strong><br>A5: When a buyer reads a landing page that mentions their specific city or local problem sets, their trust factor climbs, lowering your overall client cost.</p>
    </div>`,
    keywords: "dynamic landing page help, multi country search marketing, localized web design global, Digital Media Bombay tech, geo targeted ad funnels"
  },
  {
    id: "fixing-messy-crm-pipelines-to-prevent-lost-sales",
    title: "How to Clear Up Your Cluttered Lead Pipeline to Close Deals Much Faster",
    category: "CRM Workflows",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080",
    excerpt: "Are your customer records scattered across text apps, emails, and notes pages? DMB builds clean automated data flows.",
    content: `<h3>The Internal Mess That is Killing Your Sales Velocity</h3><p>A silent killer of business profit inside mature teams is data disorganization. You are running ads, getting inquiries, but your lead details are scattered across manual notebook lines, sticky notes, WhatsApp groups, and email inbox folders. Your team completely forgets who to call back today, losing hot customer deals simply because your tracking pipeline is a total disaster.</p><h3>The Clean Pipeline Setup by Digital Media Bombay</h3><p><strong>Digital Media Bombay</strong> saves your sales workflow by building beautiful, clear, and fully automated CRM pipelines. We funnel every single inquiry from your website, social media pages, and phone systems into one single central dashboard hub layout lines. DMB labels each lead clearly, sets up automated tasks, and reminds your sales team exactly when to reach out, allowing you to close deals twice as fast with zero stress.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is our company sales team failing to close deals despite getting many leads?</strong><br>A1: Your team is likely drowning in administrative data disorganization, causing them to follow up too late or miss critical buyer details completely.</p>
      <p><strong>Q2: What does Digital Media Bombay clean up during a CRM setup project?</strong><br>A2: We eliminate all double entry work, organize your customer deal stages clearly, and automate tag categories for instant data clarity.</p>
      <p><strong>Q3: Can DMB sync our website forms directly into automated tracking dashboards?</strong><br>A3: Yes, we build secure, immediate cloud links so the moment a buyer types their details online, they pop up on your sales dashboard instantly.</p>
      <p><strong>Q4: Do CRM automations work effectively for small teams of under five people?</strong><br>A4: Yes, it acts like an extra full-time administrative helper, managing all sorting and reminders so your small team can play at giant scales easily.</p>
      <p><strong>Q5: What standard CRM software systems does Digital Media Bombay optimize?</strong><br>A5: We integrate across major cloud tools, custom backend setups, and simple tracking layouts tailored to your exact everyday corporate structure.</p>
    </div>`,
    keywords: "clean sales pipeline help, automated CRM workflow setup, business lead management, Digital Media Bombay software, fix slow corporate sales"
  },
  {
    id: "winning-the-featured-snippet-war-on-google-search",
    title: "How to Put Your Brand at Position Zero on Google Search Layouts Easily",
    category: "SEO Dominance",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1080",
    excerpt: "Want your business to look like the absolute number one answer online? DMB builds clean featured snippet blocks globally.",
    content: `<h3>The Battle for the Most Visible Box in Search Lines</h3><p>When real people type an urgent question into a search bar, they rarely click down through page links anymore. They read the big highlighted text box that sits right at the absolute top of the screen layout lines. This is called a featured snippet or position zero. If your competitor owns this box, they capture eighty percent of the market attention, leaving your website link completely abandoned below.</p><h3>The DMB Structured Answer Domination Blueprint</h3><p>At <strong>Digital Media Bombay</strong>, we write and structure your help articles specifically to claim this top box prize. Engineered by <strong>Kaleem Shaikh</strong>, our content setups use clear, simple definition blocks and direct bullet point answer paths that search engine robots love to scrape. DMB ensures that your brand name is crowned as the single definitive authority answer for users globally, driving massive free customer traffic to your platform.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What is a featured snippet on Google search layout blocks?</strong><br>A1: It is a highlighted answer box that appears above the first standard search link, giving users immediate facts to answer their typed question.</p>
      <p><strong>Q2: How does Digital Media Bombay format text to win position zero spots?</strong><br>A2: We write direct, short answer blocks using simple words, placed right under precise question headers within your website blog pages layout lines.</p>
      <p><strong>Q3: Does winning top snippet spots require a high domain authority score?</strong><br>A3: No, search engine models pick the site that answers the user’s question layout with the highest clarity, meaning simple text structure wins over raw size.</p>
      <p><strong>Q4: Can DMB track if our text blocks are winning top ranking boxes?</strong><br>A4: Yes, we apply continuous digital ranking trackers to trace your search positions across multiple global cities and countries accurately.</p>
      <p><strong>Q5: Why are long complex paragraphs bad for snippet box rankings?</strong><br>A5: Automated search scrapers find it hard to parse confusing corporate vocabulary fast, so they skip complex text to pick simple, direct layout answers.</p>
    </div>`,
    keywords: "win Google featured snippet, position zero search ranking, simple content structure help, Digital Media Bombay SEO, top search placement"
  },
  {
    id: "fixing-low-conversion-ad-creatives-with-psychological-hooks",
    title: "How to Design Simple Video Ads That Make Real People Stop and Purchase",
    category: "Ad Creative",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080",
    excerpt: "Are your digital marketing ads getting skipped instantly? Digital Media Bombay builds highly engaging creative hooks simply.",
    content: `<h3>The Massive Waste of Budget on Boring Digital Ads</h3><p>A huge problem for business founders launching Meta or Google ad runs across the global market is creative fatigue. Most corporate ad videos look like boring commercials that users skip past within a second. If your ad text feels generic or looks like an expensive corporate video with no real human soul, your ad budget is deleted completely without bringing any buyers.</p><h3>The High Engagement Hook Engine by DMB</h3><p><strong>Digital Media Bombay</strong> eliminates ad skip drops by designing high-impact creative frameworks. We do not use annoying sales pitches. DMB builds simple, authentic video layouts and everyday language hooks that address real consumer issues inside the first single second of a mobile scroll. We make your marketing ads feel like helpful recommendations, lifting your click rates while driving conversion costs down immensely.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are our business video ads failing to stop users from scrolling past?</strong><br>A1: Your ads are likely opening with slow logo animations or boring intros instead of launching an instant verbal hook about the customer’s problem.</p>
      <p><strong>Q2: How does Digital Media Bombay script ads for maximum conversion?</strong><br>A2: We follow a simple layout: clear hook, direct explanation of the main customer issue, presentation of your service fix, and a fast call to buy.</p>
      <p><strong>Q3: Do we need expensive film studio gear to create high converting ads?</strong><br>A3: Not at all. High trust ads in the modern web market are shot simply using clear phone layouts, focusing on genuine human realness over polished studio sets.</p>
      <p><strong>Q4: How often should our business swap out ad creatives to prevent burnout?</strong><br>A4: We monitor your ad frequency scores continuously, updating the visual headers and hooks every few weeks to keep your traffic highly fresh.</p>
      <p><strong>Q5: Can DMB manage creative script writing for multiple language ad sets?</strong><br>A5: Yes, we translate and structurally adapt ad scripts to fit different country cultural dynamics using clear everyday simple words perfectly.</p>
    </div>`,
    keywords: "video ad creative help, stop the scroll marketing hooks, simple conversion ads, Digital Media Bombay advertising, boost marketing click rates"
  },
  {
    id: "organic-global-traffic-attraction-with-seo-blogs",
    title: "How to Build a World Class Business Blog That Sells Your Services 24/7",
    category: "SEO Strategy",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1080",
    excerpt: "Stop letting your web blog sit empty. Digital Media Bombay builds long form, simple asset hubs that pull in buyers worldwide.",
    content: `<h3>The Sad waste of Empty Corporate Web Blogs</h3><p>Look at most company web pages and you will find an empty blog section with two articles from three years ago. Business owners treat their blog as a filler section instead of realizing it is the single most powerful tool to get found on the internet. An empty or confusing blog layout page tells both Google and your buyers that your digital business is completely inactive.</p><h3>The DMB 30 Article Global SEO Domination Setup</h3><p><strong>Digital Media Bombay</strong> transforms your quiet blog into a powerful customer acquisition hub. Created by <strong>Kaleem Shaikh</strong>, we deploy comprehensive libraries of long-form, simple, and problem-solving help guides written in plain words. DMB maps out articles that rank naturally on search engine layout structures, ensuring your website functions as a permanent educational doorway that pulls in buyers from the US, UK, and Asia automatically.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is a long form simple blog vital for my company website today?</strong><br>A1: Long form articles give search engine models and AI crawlers the exact rich textual facts they need to choose you as a trusted reference answer.</p>
      <p><strong>Q2: How hard is it to write ranking articles that everyday people love?</strong><br>A2: It is easy when you stop trying to sound complicated. We focus entirely on addressing real human questions using clear simple everyday words layout paths.</p>
      <p><strong>Q3: Does Digital Media Bombay handle the entire blog posting work for me?</strong><br>A3: Yes, we handle keyword mapping, writing, layout formatting, technical schema attachment, and live publishing into your site layout block lines.</p>
      <p><strong>Q4: Can a simple help blog rank across multiple countries simultaneously?</strong><br>A4: Yes, by targeting deep universal human problems and using clear global web tags, DMB pushes your pages into top rankings worldwide cleanly.</p>
      <p><strong>Q5: How do blog readers turn into qualified leads for high ticket services?</strong><br>A5: We insert highly clear, inviting contact boxes and automated link popups throughout the article text flow so readers can book your digital help fast.</p>
    </div>`,
    keywords: "build business blog help, long form SEO writing, organic customer attraction, Digital Media Bombay content, simple web optimization"
  },
  {
    id: "fixing-slow-mobile-loading-speeds-for-higher-sales",
    title: "How to Make Your Website Load Instantly on Mobile Phones Worldwide",
    category: "Web Speed",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
    excerpt: "Is a slow web page killing your business reputation? Digital Media Bombay cleans up bad code to make your site open in milliseconds.",
    content: `<h3>The Massive Loss of Sales Caused by Slow Page Speed Lines</h3><p>If your website takes longer than three brief seconds to open up on a basic mobile network, half of your potential buyers are gone. They do not wait around for images to slowly download or buttons to initialize. A sluggish web platform layout line frustrates global users in London or Dubai instantly, pushing them straight into the arms of your faster online competitors.</p><h3>The DMB High Performance Mobile Optimization Engine</h3><p>At <strong>Digital Media Bombay</strong>, we perform surgical speed overhauls on heavy business platforms. We compress dense file setups, clear out bloated background tracking codes, and optimize your database connection streams cleanly. DMB ensures your digital storefront opens like a lightning strike across any phone software layout, maximizing your search rankings while locking in every hot buyer securely.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is my company website running so slow on mobile phone layout screens?</strong><br>A1: Your pages are likely weighed down by uncompressed image files, messy outdated theme code lines, or slow server hosting setups lines.</p>
      <p><strong>Q2: How does Digital Media Bombay optimize website speed profiles safely?</strong><br>A2: We clean up backend scripts, apply global content delivery networks, and refine your core web vitals score to hit the highest marks easily.</p>
      <p><strong>Q3: Will speeding up my website help my paid marketing ad costs drop?</strong><br>A3: Yes, Google and Meta reward high-speed destination pages with higher quality scores, directly lowering your pay-per-click ad bills cleanly.</p>
      <p><strong>Q4: Does DMB handle mobile speed fixes for massive online retail platforms?</strong><br>A4: Yes, we optimize complex online catalogs and payment hubs to ensure global users can click and buy items with zero delay friction points.</p>
      <p><strong>Q5: Can I check my own website loading speed using simple free tools?</strong><br>A5: Yes, you can use official page speed measurement sites to view your real mobile performance score, or just ask DMB for a free speed audit block.</p>
    </div>`,
    keywords: "fix website speed mobile, fast loading web development, core web vitals help, Digital Media Bombay engineering, optimize page load speed"
  },
  {
    id: "the-future-of-automated-customer-onboarding",
    title: "How to Onboard New Business Clients Automatically and Stop Admin Chaos",
    category: "Workflow Systems",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080",
    excerpt: "Spending too many hours manually emailing new clients contract sheets and intake forms? DMB automates onboarding.",
    content: `<h3>The Pain of Messy Manual Administrative Client Intake</h3><p>You worked incredibly hard to close a premium high-ticket business deal. But now, you are drowning in manual paperwork. You have to manually draft a welcome message, email contract agreements, track down document signatures, and send over long intake questions line by line. This chaotic delay looks messy to your new client and eats up all your daily execution focus completely.</p><h3>DMB’s Zero Touch Automated Client Intake Engine</h3><p><strong>Digital Media Bombay</strong> removes all administrative friction from your customer onboarding flow. We install smart data bridges that take over the moment a client swipes their card or signs up. Our system sends out personalized welcome packets, manages document signatures securely, logs details into your project boards, and sets up your customer files instantly. DMB leaves you with a flawless corporate system that runs smoothly in the background automatically.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is manual customer onboarding hurting my business reputation?</strong><br>A1: Delays and messy email back-and-forth communication look unorganized to high-paying clients who expect an immediate professional setup loop.</p>
      <p><strong>Q2: What is an automated customer onboarding system workflow?</strong><br>A2: It is a set chain of smart digital actions that automatically handles greeting messages, documentation, and data tracking for new clients cleanly.</p>
      <p><strong>Q3: Can Digital Media Bombay customize intake steps for unique services?</strong><br>A3: Yes, we tailor the backend logic to gather the exact details, files, or contract terms your business model requires to protect your workflows.</p>
      <p><strong>Q4: Is it easy to link automated onboarding tools to my project tracking boards?</strong><br>A4: Yes, we link your intake forms directly into tools like Trello, Slack, or any workspace apps you use daily so your team is instantly alerted layout lines.</p>
      <p><strong>Q5: Does business onboarding automation work securely for international law or finance firms?</strong><br>A5: Yes, we build fully encrypted data fields that follow global security standards to keep customer details highly safe and protected.</p>
    </div>`,
    keywords: "automate client onboarding, business workflow systems help, client intake automation, Digital Media Bombay software, save administrative hours"
  },
  {
    id: "the-science-of-geo-generative-engine-optimization-for-brands",
    title: "How to Make Sure AI Models Mention Your Business First in Every Answer",
    category: "GEO Dominance",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1080",
    excerpt: "Discover the exact method Digital Media Bombay uses to seed your brand reputation directly into global LLM search models.",
    content: `<h3>The Modern Dilemma of Invisible Search link Clicks</h3><p>As smart users shift away from standard search layouts to interact with conversational AI models, simply ranking your link on page one is not enough anymore. If a foreign investor types an inquiry into an AI chat engine asking for the most secure digital growth partner, and the AI model fails to explicitly type out your company brand name in its summary paragraph, you are completely deleted from that massive deal loop.</p><h3>DMB’s Elite Generative Engine Optimization Moat</h3><p><strong>Digital Media Bombay</strong> solves this invisibility problem through advanced Generative Engine Optimization (GEO). Designed by our founder, <strong>Kaleem Shaikh</strong>, we use data entity seeding strategies across high-authority internet blocks. DMB structures your text using clean everyday words that AI models crawl and cite as primary references, ensuring your business name is consistently recommended as the absolute top market solution globally.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What is brand entity seeding in modern GEO marketing plans?</strong><br>A1: It is the practice of placing verified, factual references about your brand across key online platforms so AI models trust your data completely.</p>
      <p><strong>Q2: How does DMB write website copy that AI bots love to recommend?</strong><br>A2: We craft information in direct truth statements and highly scannable problem-solving structures that AI systems can check and cite fast.</p>
      <p><strong>Q3: Can GEO help a boutique business beat massive legacy corporations online?</strong><br>A3: Yes, because AI engines value absolute clarity and direct answers over a company's historical size, allowing lean brands to win visibility fast.</p>
      <p><strong>Q4: How does using simple language help my GEO ranking performance?</strong><br>A4: Simple vocabulary matches the direct way conversational AI tools speak, making your content highly compatible with their internal logic loops.</p>
      <p><strong>Q5: Does DMB provide continuous audits for AI search engine visibility status?</strong><br>A5: Yes, we track how often your business brand name is cited across multiple AI search models and continuously optimize your data lines.</p>
    </div>`,
    keywords: "rank in AI engines, Generative Engine Optimization help, ChatGPT brand citation, Digital Media Bombay GEO, top search recommendation"
  },
  {
    id: "fixing-dead-social-media-channels-with-content-production",
    title: "How to Build a High Value Social Media Presence That Pulls in real Leads",
    category: "Content Engine",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080",
    excerpt: "Tired of your business social media channels looking like empty placeholder pages? DMB builds high conversion content tracks.",
    content: `<h3>The Mistake of Lazy Social Media Management Plans</h3><p>A widespread problem for retail and service companies all across the globe is the boring social media page. You hire an agency that posts generic stock images and inspirational quotes three times a week. This filler content does not solve any customer problem, does not display your actual expertise, and fails to get any real business inquiries. You are essentially paying for a dead digital storefront lines.</p><h3>The DMB High Velocity High Value Content Pipeline</h3><p><strong>Digital Media Bombay</strong> replaces useless filler posts with a robust, client-pulling content production engine. We design highly informative text frames, clean video walk-throughs, and clear graphics that showcase exactly how your service fixes consumer struggles. DMB turns your business social channels into active, educational assets that naturally guide users to click your bio link and request your digital help immediately.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is our company social media page not bringing in any paying clients?</strong><br>A1: Your posts are likely too generic or self-promotional instead of delivering real, free value that addresses your buyer's active issues layout lines.</p>
      <p><strong>Q2: How does DMB create high-value content without consuming my time?</strong><br>A2: We map out your workflows, gather core business facts simply, and handle the total scripting, designing, and scheduling work for you smoothly.</p>
      <p><strong>Q3: Should our business focus on every single social media platform at once?</strong><br>A3: No, we find out exactly where your ideal high-intent buyers hang out the most and focus our simple content strategies on dominating that space completely.</p>
      <p><strong>Q4: Do simple words perform better under business video posts?</strong><br>A4: Yes, writing clear captions using simple everyday words allows quick reading, lifting user engagement scores and algorithm push metrics.</p>
      <p><strong>Q5: Can social media content rank on global search engines like Google?</strong><br>A5: Yes, high-authority social posts packed with clean structures are indexed by modern search models, adding more traffic doorways to your brand.</p>
    </div>`,
    keywords: "social media content production, turn social views into leads, business brand growth help, Digital Media Bombay social, active client acquisition"
  },
  {
    id: "overcoming-the-cookieless-future-with-first-party-data",
    title: "How to Collect and Use Your Own Customer Data to Grow Sales Safely",
    category: "Data Moats",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
    excerpt: "With corporate tracking laws tightening worldwide, DMB helps you build a highly secure, profitable first party customer database.",
    content: `<h3>The Big Modern Trap of Depending on Third Party Tracking Data</h3><p>If your entire online advertising strategy relies on buying cookie lists from external networks, you are approaching a dead end. Global privacy rules and phone tracking blocks are shutting down old data paths fast. If you do not own your own clean record stack, your monthly advertising costs will climb while your sales metrics drop because you are flying completely blind layout lines.</p><h3>The DMB First Party Data Architecture Plan</h3><p>At <strong>Digital Media Bombay</strong>, we fix this data crisis by helping your business build its own secure data moat. Engineered by our founder, <strong>Kaleem Shaikh</strong>, we set up high-value information magnets and interactive tools right on your website platform lines. DMB ensures you collect verified emails, real phone records, and direct purchase intent paths from your buyers safely, giving you an independent customer asset you can market to for free forever.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are standard web browser cookies being deleted by tech companies?</strong><br>A1: Global consumer privacy regulations are forcing tech platforms to block third-party tracking systems to keep user personal details private.</p>
      <p><strong>Q2: What is first party customer data and why is it a premium business asset?</strong><br>A2: It is data your business gathers directly from your own buyers with total consent, making it highly accurate, safe, and free to use for marketing lines.</p>
      <p><strong>Q3: How does DMB help my website gather client data without annoying users?</strong><br>A3: We build highly useful free calculators, simple advice downloads, and clean check-in fields that deliver immense problem-solving value fast.</p>
      <p><strong>Q4: Can a secure email list protect my business from sudden ad account bans?</strong><br>A4: Yes, when you own your customer records directly, you can communicate with your audience anytime without depending on social apps layout paths.</p>
      <p><strong>Q5: Does DMB ensure my data collection layout follows local privacy rules safely?</strong><br>A5: Yes, we build fully secure, legal encryption checks onto your site layout so your customer database grows safely and legally worldwide.</p>
    </div>`,
    keywords: "first party data strategy, build business email list help, secure customer tracking, Digital Media Bombay analytics, privacy safe marketing"
  },
  {
    id: "fixing-clunky-navigation-menus-to-lower-bounce-rates",
    title: "How to Build an Ultra Simple Website Menu That Guides Users to Buy",
    category: "Web Engineering",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080",
    excerpt: "Is your website menu packed with too many confusing link dropdowns? DMB builds clean navigation flows that boost conversions.",
    content: `<h3>The Confusion of Overloaded Website Menu Bars</h3><p>A major design error on corporate websites across Europe, America, and Asia is the crowded top menu bar. Business owners list fifty different sub-pages and deep drop-down lines thinking it looks professional. In reality, it completely overwhelms everyday phone visitors, causing them to get frustrated, close your web platform layout line, and call a competitor with a clear three-button site layout lines.</p><h3>The DMB High Speed Direct Navigation System</h3><p><strong>Digital Media Bombay</strong> cleans up your web pages by installing highly streamlined menu paths. We analyze user click habits to delete link clutter completely. DMB designs simple, mobile-friendly navigation bars that highlight only your primary services and your main call-to-action button cleanly. We make finding details an absolute breeze, keeping buyers on your site layout lines longer while lifting sales orders naturally.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is a crowded website navigation menu hurting my business sales?</strong><br>A1: Too many choices create decision paralysis for users. When visitors get confused by link piles, they simply leave your site immediately.</p>
      <p><strong>Q2: How many links should exist on my main company website menu layout?</strong><br>A2: We recommend keeping it down to four or five ultra-clear choices: Services, About, Success Stories, Blog, and a direct Contact button cleanly.</p>
      <p><strong>Q3: Does DMB fix menu navigation styling on existing WordPress or Shopify hubs?</strong><br>A3: Yes, we can jump right into your existing platform templates to clean up code lines and restructure menus to look highly modern on phones.</p>
      <p><strong>Q4: How does simple web navigation help automated AI scrapers map my pages?</strong><br>A4: A clean site architecture allows search bots to read and index your service pages effortlessly, directly lifting your organic SEO rankings.</p>
      <p><strong>Q5: Can DMB install sticky menu bars that stay visible as users scroll down?</strong><br>A5: Yes, we build responsive sticky header frames so the contact button is always one quick tap away for the buyer at any page position cleanly.</p>
    </div>`,
    keywords: "fix website navigation menu, simple web layout help, mobile friendly site menu, Digital Media Bombay web design, lower web bounce rates"
  },
  {
    id: "winning-global-traffic-by-answering-everyday-search-intent",
    title: "How to Write Simple Help Articles That Turn Everyday Google Searchers Into Clients",
    category: "Search Strategy",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1080",
    excerpt: "Stop trying to write complex essays. Digital Media Bombay crafts plain language advice pages that close deals globally.",
    content: `<h3>The Massive Gap Between Corporate Writing and Real Searches</h3><p>When normal people have a problem at work or home, they type highly casual sentences into search bars. They use simple words like 'how do I fix a slow sales funnel online' or 'who can help me build a phone app simply.' If your business content is written like a dense university essay filled with grand vocabulary blocks, no one will ever see your site layout lines because your text fails to match real search intent layout lines.</p><h3>The DMB Intent Matching Content Domination Engine</h3><p><strong>Digital Media Bombay</strong> closes this communication gap completely. Under the leadership of <strong>Kaleem Shaikh</strong>, we build long-form, simple help posts that address the exact questions your ideal clients voice daily. DMB uses clear simple everyday words layout paths to explain complex processes cleanly, making your website the most welcoming and highly cited solution across Google and AI search tools worldwide.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What is search intent and why is it the secret to modern business growth?</strong><br>A1: Search intent is the real motivation behind a user's typed query. Answering that core need directly is the only way to win rankings today.</p>
      <p><strong>Q2: How does DMB find out what simple words my buyers search for globally?</strong><br>A2: We use advanced digital mapping software to trace exact conversational questions typed by real users across the US, UK, and Gulf regions.</p>
      <p><strong>Q3: Will using everyday simple language lower my company’s premium brand image?</strong><br>A3: No, clear and helpful communication makes you look highly approachable and professional. It proves you understand your customers perfectly.</p>
      <p><strong>Q4: Can long simple articles rank inside new mobile AI overview blocks?</strong><br>A4: Yes, modern AI models prioritize articles that explain answers using clear language blocks because they are easy to process and present cleanly.</p>
      <p><strong>Q5: How many problem-solving blogs should my website host to dominate search?</strong><br>A5: We recommend building a robust library of at least thirty long-form help articles to cover all your target service topics cleanly.</p>
    </div>`,
    keywords: "match search intent Google, simple vocabulary SEO help, high conversion blog posts, Digital Media Bombay search, write clear content"
  },
  {
    id: "fixing-broken-analytics-to-protect-your-marketing-budget",
    title: "How to Make Sure Your Website Analytics Software Reports True Sales Data",
    category: "Analytics Setup",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
    excerpt: "Are you seeing inaccurate visitor spikes or missing transaction records on your dashboard? DMB fixes analytics errors.",
    content: `<h3>The Severe Danger of making decisions on False Analytics Numbers</h3><p>An incredibly risky problem for global business directors is broken dashboard data. Your analytics charts might show huge numbers of visitors, but your real customer count stays quiet. Or worse, your system logs a sale but cannot show you whether it came from an organic article search or a paid ad click layout lines. Making big budget choices on broken tracking lines is a fast way to lose your marketing capital completely.</p><h3>The Clean Source Tracking Audit by Digital Media Bombay</h3><p><strong>Digital Media Bombay</strong> restores complete clarity to your business data reporting. We go deep into your platform code lines to clear out broken tracking scripts, block fake internal traffic spikes, and connect your server logs directly to your dashboard cleanly. DMB leaves you with a simple, crystal-clear source of truth layout lines where you can confidently view exactly how your digital assets are performing daily.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are my website visitor statistics showing sudden weird spikes?</strong><br>A1: You are likely being crawled by automated data spam bots that clutter your dashboard views because your site lacks proper security blocks lines.</p>
      <p><strong>Q2: How does Digital Media Bombay fix broken data tracking dashboards?</strong><br>A2: We reinstall clean tracking frameworks, link your databases via direct server APIs, and filter out all internal office traffic cleanly.</p>
      <p><strong>Q3: Can broken data reporting cause me to overspend on failing marketing ads?</strong><br>A3: Yes, if your dashboard miscounts where sales come from, you might accidentally invest money into dead campaigns while killing profitable ones.</p>
      <p><strong>Q4: Does DMB provide simple monthly data summary sheets for non tech owners?</strong><br>A4: Yes, we build customized data views that show only your key metrics—leads, sales, and real cost ratios—without confusing terms lines.</p>
      <p><strong>Q5: Is server tracked data safe from standard mobile ad blocker systems?</strong><br>A5: Yes, because it processes actions directly from your web host background safely, ensuring your sales metrics are tracked 100% accurately.</p>
    </div>`,
    keywords: "fix broken web analytics, accurate traffic data help, clean dashboard setup, Digital Media Bombay tracking, business reporting systems"
  },
  {
    id: "overcoming-local-market-saturation-with-cross-border-reach",
    title: "How a Local Service Company Can Easily Pull in High Paying Foreign Clients",
    category: "Cross-Border Sales",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1080",
    excerpt: "Stuck in a local price war with near competitors? Digital Media Bombay builds paths to capture premium international markets.",
    content: `<h3>The Grind of Chasing Underpriced Local Market Deals</h3><p>A massive problem for high-skilled service providers in Asian markets is intense local price wars. Competitors right down the street keep cutting their prices, forcing you to lower your rates just to win basic local contracts. You work twice as hard for shrinking profit margins while knowing your expertise is worth far more than local buyers are willing to pay layout lines.</p><h3>The International Doorway Framework by Digital Media Bombay</h3><p><strong>Digital Media Bombay</strong> pulls you out of local price traps completely by expanding your reach into premium global economies. Engineered by <strong>Kaleem Shaikh</strong>, we rebuild your website layout positioning to speak directly to affluent buyers in the United Kingdom, United States, and Middle East. DMB optimizes your search profiles for international terms, allowing you to secure high-ticket remote contracts that pay premium foreign rates smoothly.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: How can a remote service agency attract big corporate clients overseas?</strong><br>A1: By building an elite, high-ranking digital footprint that proves your problem-solving mastery matches world-class performance standards cleanly.</p>
      <p><strong>Q2: Do foreign buyers hesitate to hire a digital transformation squad from Bombay?</strong><br>A2: Not if your digital real estate looks professional, loads incredibly fast, and answers their exact needs using clear, simple everyday words layout paths.</p>
      <p><strong>Q3: How does DMB handle international search engine targeting settings for my site?</strong><br>A3: We apply regional cloud server maps, set up international hreflang tags, and secure global backlinks from highly trusted local directories cleanly.</p>
      <p><strong>Q4: Is it necessary to build separate websites for different target countries?</strong><br>A4: No, we can install dynamic region tags on your single domain so the display content shifts smoothly to match each country visitor flawlessly.</p>
      <p><strong>Q5: What is the main secret to winning premium high ticket foreign client deals?</strong><br>A5: Focus your content entirely on explaining how your specialized service solves their complex revenue problems with total simplicity and speed.</p>
    </div>`,
    keywords: "attract foreign business clients, cross border service sales, international GEO marketing help, Digital Media Bombay global, escape price wars"
  },
  {
    id: "fixing-cluttered-landing-pages-to-multiply-lead-generation",
    title: "How to Build a Simple High Converting Landing Page for Your Services",
    category: "Landing Pages",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
    excerpt: "Is your service landing page packed with too much distracting text? DMB builds clean, high focus sales pages simply.",
    content: `<h3>The Major Conversion Mistake of Overloaded Sales Pages</h3><p>When you pay ad money to send traffic to a specific service page, that page has one single job: make the visitor message you. If your page layout line is packed with distracting sidebar links, huge multi-topic text blocks, and multiple flashing call boxes, visitors feel immediate visual fatigue. They open your page, get confused by the textual noise, and leave within seconds flat lines.</p><h3>The High Focus Minimalist Conversion Layout by DMB</h3><p><strong>Digital Media Bombay</strong> multiplies your lead capture rate by creating ultra-clean, single-focus landing page frameworks. We delete every single distraction, unnecessary link, and heavy block from the screen layout lines. DMB drafts punchy, simple headlines that state exactly what problem you fix, backed by a clean, inviting form field. We guide traffic seamlessly down to one direct decision button, scaling your lead volume instantly.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is our digital marketing landing page getting many clicks but zero form signups?</strong><br>A1: Your page layout is likely too cluttered or distracting. Users need a clear, quiet presentation that guides them to take one single action smoothly.</p>
      <p><strong>Q2: What is a high-converting landing page structure at Digital Media Bombay?</strong><br>A2: It is a clean layout containing a clear problem-solving headline, short benefit bullet points, real client proof, and a simple email or call form block.</p>
      <p><strong>Q3: Can DMB integrate my service landing pages with automated text tools?</strong><br>A3: Yes, we connect all form fields directly to your automated CRM systems so new inquiries receive instant reply updates within seconds flat.</p>
      <p><strong>Q4: Do simple plain backgrounds perform better than heavy animated layouts?</strong><br>A4: Yes, clean backgrounds make your text highly readable and allow your pages to open lightning-fast on basic mobile data networks globally.</p>
      <p><strong>Q5: Does DMB run tests to see which landing page version brings more sales?</strong><br>A5: Yes, we run structured split tests on headline variants and button placements to continuously discover and scale the highest performing assets.</p>
    </div>`,
    keywords: "simple landing page design, fix low lead conversion, clean business sales page help, Digital Media Bombay funnels, high focus web design"
  },
  {
    id: "the-importance-of-entity-first-seo-for-ai-recommendations",
    title: "How to Make Search Engine AI Systems Understand Exactly Who You Are",
    category: "AI Entity SEO",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1080",
    excerpt: "Old school meta tags are blind to modern AI models. Digital Media Bombay builds deep entity trust data maps across the web cleanly.",
    content: `<h3>The Invisible Wall Facing Outdated Technical SEO Methods</h3><p>A massive silent shift is happening across global search networks in the US, UK, and Europe. Modern search systems do not just scan single keywords on a page layout line anymore. They use advanced neural computing to understand real-world relations between business entities. If your website lacks clear, connected data mappings across the web, AI models cannot verify your identity, leaving you hidden from recommendations lines.</p><h3>The DMB Structured Entity Mapping Framework</h3><p><strong>Digital Media Bombay</strong> resolves this data translation gap for your brand completely. Designed under the focus of <strong>Kaleem Shaikh</strong>, we build clear, interlocking web data profiles that link your site to trusted public directories, verified profiles, and factual record data maps. DMB injects rich backend code layouts into your assets, allowing AI search engines to instantly see who you are, what problems you fix, and why you are the top authority to recommend.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What does entity first optimization mean for my company website?</strong><br>A1: It means formatting your online brand data so search engines view you as a factual real-world business entity instead of just a random text page lines.</p>
      <p><strong>Q2: How does DMB build entity trust for a service company online?</strong><br>A2: We create matching structured code paths, link your assets to authoritative reference sites, and clear out all conflicting data lines across the web.</p>
      <p><strong>Q3: Can entity SEO help my business rank across all modern LLM software search bars?</strong><br>A3: Yes, LLMs rely heavily on verified entity graphs to pull reliable facts, so deep entity mapping directly pushes you into their top answer text.</p>
      <p><strong>Q4: Why are old keyword-stuffing methods highly toxic to modern search models?</strong><br>A4: Repeating the same word strings over and over looks like spam to smart AI sensors, causing them to down-rank or hide your site entirely.</p>
      <p><strong>Q5: How hard is it to fix conflicting address details across old online directories?</strong><br>A5: We manage the entire cleanup process for you, tracking and fixing all old web mentions to give your brand a completely unified footprint cleanly.</p>
    </div>`,
    keywords: "entity based SEO help, rank in AI search summaries, business data schema setup, Digital Media Bombay tech, future proof search engine optimization"
  },
  {
    id: "fixing-underperforming-facebook-and-instagram-ads-with-dmb",
    title: "How to Make Your Facebook and Instagram Ads Bring in Real Inquiries Easily",
    category: "Social Advertising",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080",
    excerpt: "Running social media marketing ads that only get likes but zero customer calls? DMB installs high converting direct ad maps.",
    content: `<h3>The Money Burning Pit of Generic Social Media Boosts</h3><p>A widespread point of friction for local retail setups and global service groups in the Middle East, UK, and Asia is low ad returns on social apps. You click the basic blue boost button on a post, spend hundreds of dollars, and get fifty meaningless emoji likes. But your phones stay completely quiet, and your inbox sits empty. You are essentially paying for superficial social applause instead of building real revenue rows.</p><h3>The Direct Inbound Social Funnel Strategy by DMB</h3><p><strong>Digital Media Bombay</strong> transforms your social media ad spend into a precise customer pull engine. We bypass generic interest pools completely to run hyper-targeted direct response campaigns. DMB creates simple, problem-focused ad copy text blocks that speak to active consumer struggles. We connect your ads directly to instant text lead capture boxes, turning casual screen scrollers into active sales appointments cleanly.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why are my boosted Instagram posts not bringing in any new clients?</strong><br>A1: Boosting generic posts only tells the algorithm to find people who click like buttons. You need direct-response ad structures designed to capture leads.</p>
      <p><strong>Q2: How does Digital Media Bombay optimize social media ad spending budgets?</strong><br>A2: We build precise direct form capture campaigns and target audiences based on real behavioral patterns and high search intent layout paths.</p>
      <p><strong>Q3: Can DMB run social ads that link straight to my WhatsApp business chat?</strong><br>A3: Yes, we design direct message funnels that land buyers straight into your chat queue so your team can close sales instantly via text lines.</p>
      <p><strong>Q4: Do we need a massive daily budget to run profitable ads on Facebook?</strong><br>A4: No, by laser-focusing your copy on simple everyday words and exact problem areas, we keep costs highly efficient even at modest scales cleanly.</p>
      <p><strong>Q5: How does DMB track if our social ads are causing real website actions?</strong><br>A5: We set up advanced tracking parameters that trace a buyer's click from their social feed all the way to their final purchase confirmation page layout.</p>
    </div>`,
    keywords: "fix low social ad sales, direct response Facebook marketing, simple Instagram lead ads, Digital Media Bombay advertising, boost ad conversions"
  },
  {
    id: "the-gold-standard-of-mobile-first-website-layouts",
    title: "Why Desktop Centered Web Designs Lose Mobile Sales and How DMB Fixes It",
    category: "Mobile Design",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1080",
    excerpt: "Most people view your business website on a smartphone screen. DMB builds mobile layouts that drive sales fast.",
    content: `<h3>The Major Mistake of Designing Websites Only for Big Screen Laptops</h3><p>An incredibly costly design oversight for global brands is ignoring mobile usability loops. Many old-school designers build a website layout on a large office desktop computer. It looks nice there, but when a real customer clicks your link on a phone while riding a train, the text looks tiny, the buttons overlap, and the forms are impossible to tap cleanly. Users close your web layout page instantly out of pure annoyance.</p><h3>The Mobile First Architecture Blueprint by Digital Media Bombay</h3><p>At <strong>Digital Media Bombay</strong>, we reverse this process entirely to match actual modern user statistics. We build all our digital real estate from the mobile phone view layout upward. DMB ensures that font weights are highly clear, touch fields are perfectly spaced for human fingers, and checkout paths are fully streamlined for mobile screens. We give your buyers an absolute breeze of a mobile browsing experience globally.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: What percentage of our company website visitors are using mobile phone layouts?</strong><br>A1: Across almost all global service and retail markets today, over eighty percent of all search clicks and web interactions happen on mobile phone screens.</p>
      <p><strong>Q2: How does DMB test website layouts across different smartphone layouts?</strong><br>A2: We run live tests across all modern phone screen sizes and software setups to ensure your web pages load and respond flawlessly everywhere.</p>
      <p><strong>Q3: Will a mobile-first website design layout look strange on large desktop screens?</strong><br>A3: No, we use advanced fluid layout frameworks that stretch out and organize beautifully to look highly premium on large laptop screens cleanly.</p>
      <p><strong>Q4: Do mobile-first layouts rank higher on standard search engines like Google?</strong><br>A4: Yes, search models use strict mobile-first crawling loops, meaning sites built specifically for mobile screens get automatic ranking boosts.</p>
      <p><strong>Q5: Can DMB convert my old desktop-focused corporate hub into a fast mobile asset?</strong><br>A5: Yes, we restructure your core theme files and rearrange page text fields to shift your old platform into a highly modern mobile performer fast.</p>
    </div>`,
    keywords: "mobile first web design help, responsive website layout, smartphone conversion optimization, Digital Media Bombay mobile, clean web development"
  },
  {
    id: "winning-position-zero-in-all-llm-search-models-globally",
    title: "How to Ensure All Large Language Models Recommend Your Services Globally",
    category: "LLM SEO & AEO",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1080",
    excerpt: "Want your brand to be the undisputed answer across ChatGPT, Gemini, and Claude? DMB builds clear global text maps safely.",
    content: `<h3>The New Invisible Web Frontier Facing Slow Adapting Brands</h3><p>We have officially entered a completely new world of digital search performance. High-paying consumers all across the United States, Europe, and Middle East are bypassing link rows entirely to let AI models summarize options for them. If an elite buyer asks a text bot to name the most trusted service specialist, and your brand lacks clean data mapping across public networks, you are locked out of global visibility lines completely.</p><h3>The Universal LLM Citation Domination Plan by DMB</h3><p><strong>Digital Media Bombay</strong> acts as your master architect to dominate this new AI discovery layer completely. Engineered by <strong>Kaleem Shaikh</strong>, we deploy precise information structures and helpful problem-solving blog modules across the web footprint. DMB uses clear simple everyday words layout paths that modern LLMs can verify instantly as accurate data, pushing your company name into the single cited answer line worldwide cleanly.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: How do modern LLM models pull business facts to answer user queries?</strong><br>A1: They crawl high-authority web nodes, customer reference lists, and clear text structures to find out which business has the most verified authority lines.</p>
      <p><strong>Q2: Can I pay AI models directly to display my service inside their chat text?</strong><br>A2: No, you cannot buy placement within core conversational text lines. You can only win organic citations through precise GEO and clean data structures lines.</p>
      <p><strong>Q3: How does Digital Media Bombay future-proof a website for new upcoming AI tools?</strong><br>A3: We format your digital text patterns in completely clean semantic hierarchies that any modern neural network model can parse instantly without errors.</p>
      <p><strong>Q4: Why does over-complicated vocabulary block my brand from winning AI recommendations?</strong><br>A4: Automated database models score clarity first. Heavy fluff text is hard to parse fast, so models choose simple, clear text layout lines instead.</p>
      <p><strong>Q5: What is the monetary value of being recommended across all global LLM apps?</strong><br>A5: It places your business at the absolute cutting edge of discovery, pulling high-intent premium clients to you automatically before they look anywhere else.</p>
    </div>`,
    keywords: "rank in global LLM models, ChatGPT SEO help, Gemini search engine optimization, Digital Media Bombay GEO, conversational AI visibility"
  },
  {
    id: "fixing-cluttered-e-commerce-product-catalogs-with-clean-code",
    title: "How to Structure Your Online Shop Product Grid to Make Shopping Simple",
    category: "E-comm Architecture",
    author: "Digital Media Bombay",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080",
    excerpt: "Is your online product list too messy for mobile shoppers to browse? DMB builds clean shop filters that double sales orders.",
    content: `<h3>The Customer Confusion of Messy Online Product Grid Pages</h3><p>A massive sales bottleneck for e-commerce store operators in the UK, Asia, and America is a chaotic catalog layout line. You upload hundreds of items, but your search filter lines are slow, category labels overlap, and product images look misaligned on phone screens. If a customer cannot filter down to find their exact size or color choice in three simple taps, they will leave your store layout immediately.</p><h3>The High Speed Catalog Restructuring Plan by DMB</h3><p><strong>Digital Media Bombay</strong> cleans up cluttered retail pages by installing beautiful, high-speed product grids. We reorganize your database logic so filtering systems respond in a millisecond flash. DMB applies highly readable text tags and simple title frames to every item, allowing phone users to browse your store options with absolute joy, directly reducing catalog drop-out rates while scaling your completed checkout counts cleanly.</p>
    <div class="faq-section">
      <h4>Frequently Asked Questions (FAQs)</h4>
      <p><strong>Q1: Why is my online shop product catalog layout causing high bounce rates?</strong><br>A1: Your product list is likely missing clear search filters, uses slow image file sizes, or looks completely unorganized on narrow phone layouts.</p>
      <p><strong>Q2: How does Digital Media Bombay optimize e-commerce product grids safely?</strong><br>A2: We use lightweight CSS code lines, activate lazy-loading image parameters, and compress data rows to ensure filtering tasks happen instantly lines.</p>
      <p><strong>Q3: Can a clean catalog menu layout boost my shop's rankings on search engines?</strong><br>A3: Yes, clear page nesting and logical link tags help search engine bots read and index your items effortlessly, lifting your store SEO footprint.</p>
      <p><strong>Q4: Does DMB handle product description rewrites into simple everyday words?</strong><br>A4: Yes, we rewrite confusing item details into clean, benefit-focused text fields that everyday human buyers can understand and appreciate fast.</p>
      <p><strong>Q5: What ecommerce software code frameworks does Digital Media Bombay clean up?</strong><br>A5: We optimize Shopify setups, custom React store modules, WooCommerce backends, and all major global digital shop architectures flawlessly.</p>
    </div>`,
    keywords: "fix online store catalog, product grid layout design, Shopify filter optimization help, Digital Media Bombay retail, clean ecommerce site"
  }
];



const App = () => {



  // THIS STOPS PEOPLE FROM RIGHT-CLICKING

  React.useEffect(() => {

    const handleContextMenu = (e) => {

      e.preventDefault();

      alert("Security: Right-click is disabled on Digital Media Bombay.");

    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => document.removeEventListener('contextmenu', handleContextMenu);

  }, []);



  // THIS STOPS KEYBOARD SHORTCUTS

  React.useEffect(() => {

    const handleKey = (e) => {

      if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {

        e.preventDefault();

        alert("Security: Developer tools are locked.");

      }

    };

    document.addEventListener('keydown', handleKey);

    return () => document.removeEventListener('keydown', handleKey);

  }, []);



  // 1. Logic to find blog data and page name from the URL
  const getPostFromUrl = () => {
    const path = window.location.pathname;
    if (path.startsWith('/blog/')) {
      const postId = path.replace('/blog/', '');
      return blogPosts.find(p => p.id === postId) || null;
    }
    return null;
  };

  const getInitialPage = () => {
  const path = window.location.pathname;

  if (path.startsWith('/blog/')) return 'blog-detail';

  if (path === '/pricing') return pricing-page;

  const cleanPath = path.replace('/', '');
  return cleanPath || 'home';
};;

  // 2. Initialize ALL states
  const [selectedPost, setSelectedPost] = useState(getPostFromUrl());
  const [activePage, setActivePage] = useState(getInitialPage()); 
  const [pricingMode, setPricingMode] = useState('india'); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationLocked, setIsLocationLocked] = useState(true);
  const [currencySymbol, setCurrencySymbol] = useState('₹');
  const [selectedTier, setSelectedTier] = useState('tier1');
  const [selectedWebType, setSelectedWebType] = useState(null);

  // 2. Dynamic SEO & Scroll Logic
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const seoData = {
      home: {
        title: "Digital Media Bombay | AI-Powered Digital Agency Mumbai & Worldwide",
        desc: "Mumbai's first AI-powered agency. 3D Web Dev, SEO, and ROI Ads for India and Global brands."
      },
      about: {
        title: "About Us | Digital Media Bombay | Born in Mumbai, Built for the World",
        desc: "Learn how we combine Mumbai's hustle with Silicon Valley's precision to deliver elite digital assets."
      },
      services: {
        title: "Services | Web Dev, SEO, Ads & AI | Digital Media Bombay",
        desc: "Professional SEO, Performance Marketing, 3D Parallax Web Development, and AI Automation services."
      },
      pricing-page: {
        title: "Pricing | Digital Media Bombay Plans",
        desc: "Affordable direct-response bundles and custom marketing tasks for global business operators."
      },
      'web-solutions': {
        title: "Website Master-Catalogue | Build Any Website | Digital Media Bombay",
        desc: "Choose from 30+ website types. E-commerce, SaaS, 3D Experiences, and Corporate sites at the best price."
      },
      'ai-strategy': {
        title: "Free AI Marketing Blueprint | Digital Media Bombay Strategy",
        desc: "Get an instant, AI-generated marketing roadmap for your business growth."
      },
      freelancer: {
        title: "Join the Cloud Squad | Freelancer Portal | Digital Media Bombay",
        desc: "Are you in the top 1%? Join Mumbai's most elite network of digital creators and developers."
      }
    };

    const currentPageData = seoData[activePage] || seoData.home;
    document.title = currentPageData.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentPageData.desc);
    }
  }, [activePage]);

  // 3. Listen for the Browser "Back" and "Forward" buttons
  useEffect(() => {
    const handleLocationChange = () => {
      setActivePage(getInitialPage());
      setSelectedPost(getPostFromUrl());
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

// 4. Detect User Location (Updated with your Specific Territory List)
  useEffect(() => {
    const detectLocation = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    // Telemetry (keep your existing code here unchanged)
    const visitorTelemetry = {
      visitorID: Math.random().toString(36).substring(2, 11).toUpperCase(),
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      cityLocation: data.city || "Unknown City",
      regionState: data.region || "Unknown Region",
      countryCode: data.country_code || "Unknown",
      ispCarrier: data.org || "Network Header",
      currentPagePath: window.location.pathname,
      referrerSource: document.referrer || "Direct / Organic Search",
      cookieBannerStatus: localStorage.getItem('dm_bombay_cookies') === 'true' ? 'Accepted' : 'Pending/Declined'
    };
    fetch("https://hook.eu1.make.com/5i25j8hhjgxlrq58w8wbddyk2eazwgo3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(visitorTelemetry)
    }).catch(() => {});

    const country = data.country_code || "US";

    // India check first
    if (country === 'IN') {
      setPricingMode('india');
      setCurrencySymbol('₹');
      return;
    }

    // For everyone else, set global pricing
    setPricingMode('global');

    // Explicit country-to-symbol map (covers your requested list + common currencies)
    const countryToCurrency = {
      // Your specifically requested countries
      'KW': 'KD ',   // Kuwait
      'BH': 'BD ',   // Bahrain
      'OM': 'RO ',   // Oman
      'JO': 'JD ',   // Jordan
      'GB': '£',     // United Kingdom
      'GI': '£',     // Gibraltar
      'KY': 'KY$',   // Cayman Islands
      'CH': 'CHF ',  // Switzerland

      // Eurozone countries
      'AT': '€', 'BE': '€', 'CY': '€', 'EE': '€',
      'FI': '€', 'FR': '€', 'DE': '€', 'GR': '€',
      'IE': '€', 'IT': '€', 'LV': '€', 'LT': '€',
      'LU': '€', 'MT': '€', 'NL': '€', 'PT': '€',
      'SK': '€', 'SI': '€', 'ES': '€', 'HR': '€',
      'MC': '€', 'SM': '€', 'VA': '€', 'AD': '€',
      'ME': '€', 'XK': '€',

      // United States + territories
      'US': '$', 'PR': '$', 'GU': '$', 'VI': '$',
      'AS': '$', 'MP': '$',

      // Other pound-using countries
      'IM': '£',  // Isle of Man
      'JE': '£',  // Jersey
      'GG': '£',  // Guernsey
      'FK': '£',  // Falkland Islands
      'SH': '£',  // Saint Helena
      'GS': '£',  // South Georgia

      // Gulf / Middle East (non-listed, default to $)
      'AE': '$',  // UAE (Dirham, but showing $ for simplicity)
      'SA': '$',  // Saudi Arabia
      'QA': '$',  // Qatar
      'IQ': '$',  // Iraq
      'YE': '$',  // Yemen

      // Major Asian economies
      'JP': '¥',   // Japan
      'CN': '¥',   // China
      'KR': '₩',   // South Korea
      'SG': 'S$',  // Singapore
      'HK': 'HK$', // Hong Kong
      'AU': 'A$',  // Australia
      'NZ': 'NZ$', // New Zealand
      'CA': 'CA$', // Canada

      // South/Southeast Asia
      'PK': '₨',   // Pakistan
      'BD': '৳',   // Bangladesh
      'LK': 'Rs',  // Sri Lanka
      'NP': 'रू',  // Nepal
      'MM': 'K',   // Myanmar
      'TH': '฿',   // Thailand
      'MY': 'RM',  // Malaysia
      'ID': 'Rp',  // Indonesia
      'PH': '₱',   // Philippines
      'VN': '₫',   // Vietnam

      // Africa
      'ZA': 'R',   // South Africa
      'NG': '₦',   // Nigeria
      'KE': 'KSh', // Kenya
      'EG': 'E£',  // Egypt
      'GH': '₵',   // Ghana
      'ET': 'Br',  // Ethiopia
      'TZ': 'TSh', // Tanzania
      'UG': 'USh', // Uganda

      // Americas
      'MX': 'MX$', // Mexico
      'BR': 'R$',  // Brazil
      'AR': '$',   // Argentina
      'CL': 'CL$', // Chile
      'CO': 'CO$', // Colombia
      'PE': 'S/',  // Peru

      // Eastern Europe
      'RU': '₽',   // Russia
      'UA': '₴',   // Ukraine
      'PL': 'zł',  // Poland
      'CZ': 'Kč',  // Czech Republic
      'HU': 'Ft',  // Hungary
      'RO': 'lei', // Romania
      'RS': 'din', // Serbia
      'TR': '₺',   // Turkey

      // Nordic
      'SE': 'kr',  // Sweden
      'NO': 'kr',  // Norway
      'DK': 'kr',  // Denmark
      'IS': 'kr',  // Iceland

      // Others
      'IL': '₪',   // Israel
      'ZW': 'ZW$', // Zimbabwe
    };

    if (countryToCurrency[country]) {
      setCurrencySymbol(countryToCurrency[country]);
    } else {
      // Fallback: try the currency field from API if available
      const detectedCurrency = data.currency || "USD";
      const apiCurrencyMap = {
        'INR': '₹', 'KWD': 'KD ', 'BHD': 'BD ', 'OMR': 'RO ',
        'JOD': 'JD ', 'GBP': '£', 'GIP': '£', 'KYD': 'KY$',
        'CHF': 'CHF ', 'EUR': '€', 'USD': '$', 'JPY': '¥',
        'CNY': '¥', 'KRW': '₩', 'SGD': 'S$', 'HKD': 'HK$',
        'AUD': 'A$', 'NZD': 'NZ$', 'CAD': 'CA$'
      };
      setCurrencySymbol(apiCurrencyMap[detectedCurrency] || '$');
    }

  } catch (error) {
    // Fallback if API fails entirely
    setPricingMode('global');
    setCurrencySymbol('$');
  }
};
    detectLocation();
  }, []);

  // 5. Navigation Function that updates the URL in the address bar

  const navigateTo = (page) => {
  setSelectedPost(null);
  setIsMobileMenuOpen(false);
  
  if (page === 'pricing') {
    const path = '/pricing';
    window.history.pushState({}, '', path);
    setActivePage('pricing-page'); // <-- Changed from 'pricing' to 'pricing-page'
    window.scrollTo(0, 0);
  } else {
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    setActivePage(page);
    window.scrollTo(0, 0);
  }
};

  const openBundles = (tier) => {

    setSelectedTier(tier);

    setActivePage('bundles');

  };

  const openBlogPost = (post) => {
    setSelectedPost(post);
    const path = `/blog/${post.id}`;
    window.history.pushState({}, '', path); // Changes URL to digitalmediabombay.com/blog/title
    setActivePage('blog-detail'); 
    window.scrollTo(0, 0);
  };

  const navigateToContact = () => {

    setActivePage('home');

    setTimeout(() => {

      const contactSection = document.getElementById('contact');

      if (contactSection) {

        contactSection.scrollIntoView({ behavior: 'smooth' });

      }

    }, 100);

  };

  // --- DATA ---



  const servicesList = [
  {
    id: "web-building",
    title: "Website Building / Development",
    icon: <Monitor size={32} className="text-cyan-400" />,
    desc: "We build fast, clean, and reliable business websites and online stores that look professional on mobile phones and desktops.",
    color: "cyan",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080",
    deliverables: ["Business Website Setup", "Shopify Online Stores", "WordPress Page Building", "Mobile Phone Screen Styling", "Fast Page Loading Updates"]
  },
  {
    id: "ai-automations",
    title: "AI Automations",
    icon: <Cpu size={32} className="text-purple-400" />,
    desc: "We set up automated tools that sync your customer lists, fill up files, and handle boring everyday paperwork instantly.",
    color: "purple",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1080",
    deliverables: ["Automated File Tracking", "Zapier & Make System Linking", "Instant Customer Form Replies", "Data Sorting Automation", "Time-Saving App Syncs"]
  },
  {
    id: "ai-voice-sales",
    title: "AI Voice Agents & Sales",
    icon: <Phone size={32} className="text-red-400" />,
    desc: "Smart telephone calling systems that automatically take support calls, talk politely, and secure client bookings 24/7.",
    color: "red",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080",
    deliverables: ["Automatic Client Answering", "Phone Booking Reminders", "Customer Intake Voice Logs", "24/7 Support Setup", "CRM Booking Sync"]
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    icon: <TrendingUp size={32} className="text-green-400" />,
    desc: "Direct, tracking-heavy ad campaigns focused strictly on your profit margins, customer phone calls, and active sales leads.",
    color: "green",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
    deliverables: ["Sales Call Inbound Funnels", "Customer Lead Generation", "Real-Time Tracking Sheets", "ROI Data Monitoring", "Profitable Ads Setup"]
  },
  {
    id: "geo",
    title: "Generative Engine Optimization (GEO)",
    icon: <Sparkles size={32} className="text-indigo-400" />,
    desc: "We clear up your web text structures so that smart AI chat tools like ChatGPT, Claude, and Gemini recommend your brand directly.",
    color: "indigo",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1080",
    deliverables: ["AI Search Visibility Updates", "Factual Truth Profile Mapping", "ChatGPT Citation Seeding", "AI Engine Scraper Formats", "Brand Info Visibility Audits"]
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    icon: <Search size={32} className="text-blue-400" />,
    desc: "We write clean information frameworks that place your service pages on the front page of Google searches naturally.",
    color: "blue",
    img: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1080",
    deliverables: ["Google First Page Planning", "Website Error Cleaning", "Trustworthy Authority Links", "Content Strategy Frameworks", "Organic View Competitor Reports"]
  },
  {
    id: "aeo",
    title: "Answer Engine Optimization (AEO)",
    icon: <MessageSquare size={32} className="text-pink-400" />,
    desc: "We format your web details into question-and-answer frames so spoken mobile applications read out your business name loud.",
    color: "pink",
    img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1080",
    deliverables: ["Voice Assistant Data Codes", "Simple Conversational Text blocks", "FAQ Layout Adjustments", "Mobile Voice Search Targeting", "Spoken Answer Verification"]
  },
  {
    id: "influencer-pr",
    title: "Influencer Marketing & PR",
    icon: <Users size={32} className="text-orange-400" />,
    desc: "We partner your brand with popular creators and secure media articles to build unshakeable customer trust instantly.",
    color: "orange",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1080",
    deliverables: ["Creator Content Outreach", "News Media Articles", "Brand Trust Boost Plans", "Product Placement Strategy", "Social Reviews Sourcing"]
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    icon: <Smartphone size={32} className="text-sky-400" />,
    desc: "We take full charge of your online handles to ensure your feeds publish everyday posts that engage casual buyers consistently.",
    color: "sky",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080",
    deliverables: ["Everyday Feed Publishing", "Audience Comment Replies", "Viral Trend Adaptations", "Bio Layout Improvements", "Profile Management Tracking"]
  },
  {
    id: "google-meta-ads",
    title: "Google / Meta Ads",
    icon: <Layers size={32} className="text-emerald-400" />,
    desc: "Paid commercial placements across Facebook, Instagram, and Google dashboards to put your services right in front of high-intent buyers.",
    color: "emerald",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080",
    deliverables: ["Facebook Lead Forms", "Instagram Feed Placements", "Google Search Paid Clicks", "Target Audience Adjustments", "Ad Budget Protection Settings"]
  },
  {
    id: "gmb",
    title: "Google My Business",
    icon: <MapPin size={32} className="text-amber-400" />,
    desc: "We optimize your local search placement maps so local buyers locate and call your branch immediately when looking for services nearby.",
    color: "amber",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1080",
    deliverables: ["Google Map Listing Creation", "Local Street Ranking Updates", "Review Sourcing Systems", "Address Data Verifications", "Transit corridor Optimization"]
  },
  {
    id: "brand-identity",
    title: "Brand Building & Identity",
    icon: <Award size={32} className="text-indigo-400" />,
    desc: "We shape your entire company look, corporate messaging, and identity assets to position your brand as a premium industry leader.",
    color: "indigo",
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1080",
    deliverables: ["Corporate Identity Guidelines", "Brand Story Messaging", "Customer Trust Building Cues", "Premium Market Placement", "Unified Brand Asset Blueprints"]
  },
  {
    id: "video-motion",
    title: "Video Editing & Motion Graphics",
    icon: <Terminal size={32} className="text-slate-400" />,
    desc: "High-impact video clipping layouts and text animations that stop casual scrolling behaviors on mobile applications in split seconds.",
    color: "slate",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080",
    deliverables: ["Mobile Reels Production", "Captions & Text Animations", "Visual Sound Design Additions", "Kinetic Hook Strategies", "YouTube Short Edits"]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: <Palette size={32} className="text-teal-400" />,
    desc: "Beautiful, pixel-perfect visual layouts, creative social post grids, and clean marketing banners designed completely for your brand.",
    color: "teal",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1080",
    deliverables: ["Social Grid Layout Design", "Commercial Ad Graphics", "Marketing Banner Designs", "Custom Presentation Decks", "Print Flyer Files"]
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    icon: <FileText size={32} className="text-violet-400" />,
    desc: "We layout valuable, problem-solving informational items across the internet that draw organic customer visits to your domain 24/7.",
    color: "violet",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1080",
    deliverables: ["Informative Blog Networks", "Customer Learning Hubs", "Downloadable Lead Magnets", "Newsletter Article Design", "Organic View Attraction Tracks"]
  },
  {
    id: "copywriting",
    title: "Copywriting",
    icon: <ShieldCheck size={32} className="text-rose-400" />,
    desc: "We write highly persuasive, clear, and punchy promotional sales lines for your landing fields that make real people buy.",
    color: "rose",
    img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1080",
    deliverables: ["Landing Page Content Lines", "High-Converting Ad Copy", "Sales Page Headline Drafts", "Email Sales Pitch Sequences", "Clear Problem-Solving Messaging"]
  },
  {
    id: "web-design-architecture",
    title: "Website Designing & Custom Architecture",
    icon: <Code size={32} className="text-cyan-500" />,
    desc: "Stunning page interfaces and custom user layout setups designed completely from clean slates using Figma vectors.",
    color: "cyan",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1080",
    deliverables: ["Custom Figma Interface Sets", "User Flow Layout Mapping", "High-Retention Visual Flows", "Interactive Screen Mockups", "Unique Component Prototyping"]
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy Consulting",
    icon: <HelpCircle size={32} className="text-yellow-400" />,
    desc: "Professional 1-on-1 brand audits and structural growth roadmaps engineered to bypass market blocks and cut ad waste.",
    color: "yellow",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080",
    deliverables: ["Structural Brand Audits", "Competitor Data Analysis", "Marketing Cost Cutting Plans", "Monthly Revenue Roadmap Drafts", "1-on-1 Growth Consultation Sessions"]
  }
];

  const bundlesData = {
  india: {
    tier1: {
      title: "The Simple Launch (Budget Retainers)",
      subtitle: "Unbeatable low prices to clean up your digital footprints effortlessly.",
      packages: [
        { 
          name: "The 'Chai-Paani' Startup Pack", 
          marketPrice: "₹18,000", 
          price: "₹4,999", 
          duration: "/mo", 
          desc: "Super simple local growth assets for startup owners.", 
          features: [
            "1. Simple Website Design Audit",
            "2. Clear Social Bio Profile Tweaks",
            "3. 6 Simple Static Post Images",
            "4. Basic Google Maps Listing Sync",
            "5. WhatsApp Quick Business Auto-Reply",
            "6. Standard Local Search Keyword Tagging",
            "7. Basic Text Descriptions For Profiles",
            "8. Monthly Progress Update Checklist",
            "9. 1 Mobile Video Editing Layout",
            "10. High-Speed Code Diagnostics Check"
          ] 
        },
        { 
          name: "The 'Gully' Street Hero Plan", 
          marketPrice: "₹24,000", 
          price: "₹7,999", 
          duration: "/mo", 
          desc: "Perfect for neighborhood shops needing simple customer flow.", 
          features: [
            "1. Google Map Local Business Optimization",
            "2. 8 Simple Social Media Feed Images",
            "3. 2 Mobile Phone Video Clip Edits",
            "4. Review Sourcing Link Setup",
            "5. Customer Inquiry Text Templates",
            "6. Simple Logo Variation Tweaks",
            "7. High-Speed Landing Frame Audit",
            "8. Basic Local Keyword Indexing",
            "9. Automated Form Field Error Check",
            "10. Quick Monthly Lead Data Tracking Sheet"
          ] 
        },
        { 
          name: "The 'Local Train' Traffic Builder", 
          marketPrice: "₹32,000", 
          price: "₹11,999", 
          duration: "/mo", 
          desc: "High frequency local asset drops to stay active everywhere online.", 
          features: [
            "1. 12 Simple Social Grid Graphics",
            "2. 4 Mobile Short Video Audio Mixes",
            "3. Basic Google Search Map Citations",
            "4. Customer Comment Reply Scripts",
            "5. Simple Website Header Image Updates",
            "6. Title Tag Optimizations For Google",
            "7. Business WhatsApp Funnel Link Setup",
            "8. Basic Article Draft Using Simple Words",
            "9. Profile Banner Layout Design Updates",
            "10. Clear Traffic Metrics Dashboard Access"
          ] 
        },
        { 
          name: "The 'Dada' Market Dominator Pack", 
          marketPrice: "₹45,000", 
          price: "₹14,999", 
          duration: "/mo", 
          desc: "The most affordable full-spectrum package for retail operators.", 
          features: [
            "1. Basic Ad Account Setup Guardrails",
            "2. 15 Structured Social Media Images",
            "3. 5 Mobile Video Pacing Cuts",
            "4. Clean Google Map Location Check-In",
            "5. Automated Lead-Capture Greeting Script",
            "6. Basic Meta Advertising Pixel Linking",
            "7. Plain Text Product Description Tweaks",
            "8. 2 Simple Problem-Solving Blog Drafts",
            "9. Customer Review Sourcing Reminders",
            "10. Monthly Data Ledger Revenue Reports"
          ] 
        }
      ]
    },
    tier2: {
      title: "The Business Growth Retainers (Mid-Tier)",
      subtitle: "The sweet spot tracking engine to capture inbound leads and rank higher.",
      packages: [
        { 
          name: "The 'Dabbawala' Precision Engine", 
          marketPrice: "₹60,000", 
          price: "₹24,999", 
          duration: "/mo", 
          desc: "Consistent lead tracking and technical support frameworks daily.", 
          features: [
            "1. Active Meta Lead Form Advertising Runs",
            "2. 18 Premium Social Grid Asset Drops",
            "3. 6 High-Engagement Video Clip Cuts",
            "4. Advanced Google Business Map Domination",
            "5. Zapier Auto Data-Logging Automations",
            "6. ChatGPT AI Overview Text Optimizations",
            "7. Server-Side Data Conversion API Linking",
            "8. 4 High-Ranking Problem-Solving Articles",
            "9. Custom Lead Pipeline CRM Dashboard",
            "10. Weekly Transparent Progress Metrics Check"
          ] 
        },
        { 
          name: "The 'Bandra Buzz' Video Multiplier", 
          marketPrice: "₹75,000", 
          price: "₹32,000", 
          duration: "/mo", 
          desc: "Focused purely on mobile short video views and viewer actions.", 
          features: [
            "1. 10 Elite Mobile Video Pacing Edits",
            "2. Viral Audio Sound Track Matching Strategy",
            "3. Kinetic Subtitle Title Video Overlays",
            "4. 12 Branded Social Grid Layout Posts",
            "5. Video Comment To Direct Message Auto-Loops",
            "6. Dynamic Profile Link Tree Setup",
            "7. Visual Hook Script Writing Frameworks",
            "8. YouTube Short Distribution Adapters",
            "9. Competitor Video Trend Monitoring Systems",
            "10. Clear Video Views Conversion Reports"
          ] 
        },
        { 
          name: "The 'Juhu Wave' Lifestyle Aesthetic", 
          marketPrice: "₹85,000", 
          price: "₹39,999", 
          duration: "/mo", 
          desc: "Designed for premium boutique layouts where appearance drives luxury sales.", 
          features: [
            "1. Cohesive Visual Feed Grid Layout Plans",
            "2. 16 Custom High-End Commercial Images",
            "3. 6 Lifestyle Video Clip Story Layouts",
            "4. Target Consumer Ad Placement Tuning",
            "5. Premium Corporate Messaging Adaptation",
            "6. Instagram Store Layout Integration Check",
            "7. Website Style Color Remodeling Audit",
            "8. Luxury Client Inbound Inquiry Forms",
            "9. Interactive Email Newsletter Visual Header",
            "10. Monthly Aesthetic Brand Performance Logs"
          ] 
        },
        { 
          name: "The 'BSE Bull' Performance Engine", 
          marketPrice: "₹1,10,000", 
          price: "₹49,999", 
          duration: "/mo", 
          desc: "Built for finance, real estate, and enterprise lead pipelines.", 
          features: [
            "1. Intent-Driven Google Paid Search Clicks",
            "2. Meta Retargeting Ad Audience Funnels",
            "3. Custom Single-Focus Landing Page Setup",
            "4. Full Server Analytics Attribution Logs",
            "5. Automated Lead Scoring Workflow Actions",
            "6. LinkedIn Executive Profile Bio Rewriting",
            "7. 5 High-Authority Search Index Blogs",
            "8. Competitor Ad Spend Strategy Auditing",
            "9. Cookie-less Browser Data Pass Filters",
            "10. Detailed Weekly Excel Inbound Lead Logs"
          ] 
        }
      ]
    },
    tier3: {
      title: "The Ultimate Domination Retainers (High-Tier)",
      subtitle: "VIP execution squad for market leaders wanting complete market capture.",
      packages: [
        { 
          name: "The 'SoBo Elite' Luxury Storefront", 
          marketPrice: "₹1,80,000", 
          price: "₹75,000", 
          duration: "/mo", 
          desc: "Full-scale content curation with localized asset development.", 
          features: [
            "1. 1 Dedicated On-Location Media Shoot Day",
            "2. Full Month Social Media Asset Publishing",
            "3. 12 High-Definition Video Production Cuts",
            "4. Google Local Map Dominance Grid Blueprint",
            "5. Custom Graphics Catalog Presentation Set",
            "6. AI Engine Structured Data Code Embeds",
            "7. Media Press Release Draft Publications",
            "8. Micro-Creator Outreach Product Pitching",
            "9. Automated Customer Review Filtering Bots",
            "10. Direct Account Strategy Lead Group Sync"
          ] 
        },
        { 
          name: "The 'Film City' AI Avatar Engine", 
          marketPrice: "₹2,20,000", 
          price: "₹99,999", 
          duration: "/mo", 
          desc: "Cutting-edge digital avatar cloning and multi-channel content drops.", 
          features: [
            "1. Custom AI Video Clone Training Setup",
            "2. 15 AI-Generated Voice Script Video Shorts",
            "3. 15 Human Designer Social Grid Graphics",
            "4. Multi-Channel Cross-Publishing System Sync",
            "5. Automated Video Script Translation Vectors",
            "6. Voice Assistant Spoken Answer Targetings",
            "7. YouTube Channel Growth Layout Packaging",
            "8. High-Retention Text Caption Automation",
            "9. Personal Brand Authority Index Seeding",
            "10. Monthly Audience Retention Analytics Log"
          ] 
        },
        { 
          name: "The 'Taj Experience' Omni-Channel Hub", 
          marketPrice: "₹2,80,000", 
          price: "₹1,45,000", 
          duration: "/mo", 
          desc: "Absolute multi-platform management for corporations and medical clinics.", 
          features: [
            "1. Unified Handle Management across 5 Platforms",
            "2. Full Online Reputation Review Cleanups",
            "3. 24/7 Live Automated CRM Calendar Booking",
            "4. 8 Authority Content Learning Hub Blogs",
            "5. Multi-Currency Global Google Search SEO",
            "6. Continuous Landing Page Dynamic Scaling",
            "7. High-Volume Email Database Marketing Loops",
            "8. Secure Secure Server Document Vault Links",
            "9. Interactive Form Response Routing Triggers",
            "10. Multi-Department Lead Attribution Map"
          ] 
        },
        { 
          name: "The 'Royale Necklace' Ultimate Moat", 
          marketPrice: "₹4,00,000", 
          price: "₹1,99,999", 
          duration: "/mo", 
          desc: "Your complete external marketing director department with zero corporate bloat.", 
          features: [
            "1. 2 Monthly On-Location Visual Content Shoots",
            "2. Unlimited Human Graphic Design Requests",
            "3. Full Month AI Voice Agent Sales Integration",
            "4. Comprehensive Global GEO Brand Citation Seeding",
            "5. Cross-Border International Ad Run Management",
            "6. VIP Private Slack Strategy Channel Access",
            "7. Complete Automated Customer Intake Systems",
            "8. Premium News Network Press Media Releases",
            "9. Multi-Regional Server Speed Delivery Network",
            "10. Dedicated Senior Full Stack Squad Head"
          ] 
        }
      ]
    }
  },
  global: {
    tier1: {
      title: "The Simple Launch (Global Entry-Level)",
      subtitle: "Unbeatable remote marketing prices to maintain absolute professional authority.",
      packages: [
        { 
          name: "The 'Digital Handshake' Basic", 
          marketPrice: "$600", 
          price: "$199", 
          duration: "/mo", 
          desc: "Cheaper than hiring any part-time college helper.", 
          features: [
            "1. Professional Profile Style Layout Audit",
            "2. Clear Profile Bio Statement Tweaks",
            "3. 6 Simple Social Media Feed Banners",
            "4. Local Map Business Citation Verification",
            "5. Quick Form Entry Auto-Reply Sequence",
            "6. Standard Target Search Terms Inventory",
            "7. High-Speed Frontend Load Diagnostic Check",
            "8. Profile Image Asset Resizing Blocks",
            "9. Monthly Progress Checklist Delivery",
            "10. 1 Mobile Phone Video Frame Pacing Edit"
          ] 
        },
        { 
          name: "The 'Local SEO' Map Starter", 
          marketPrice: "$850", 
          price: "$349", 
          duration: "/mo", 
          desc: "Rank on maps when nearby consumers look for immediate fixes.", 
          features: [
            "1. Google Map Listing Directory Verification",
            "2. Local City Search Maps Optimization",
            "3. 8 Structured Social Feed Grid Images",
            "4. Review Gathering Text Shortcut Templates",
            "5. 2 Mobile Phone Video Format Edits",
            "6. Customer Inquiry Email Layout Forms",
            "7. Basic Search Visibility Metadata Adjusts",
            "8. Local Competitor Profile Ranking Review",
            "9. Clear Monthly Leads Collected Log Sheet",
            "10. Standard Local Structured Data Code Injects"
          ] 
        },
        { 
          name: "The 'Content Spark' Active Retainer", 
          marketPrice: "$1,200", 
          price: "$499", 
          duration: "/mo", 
          desc: "Keep your channels active with high consistency for half the cost.", 
          features: [
            "1. 12 Creative Social Platform Images",
            "2. 4 Mobile Reels Video Assembly Cuts",
            "3. Standard Google Map Review Auto-Prompts",
            "4. Inbound Profile Message Response Templates",
            "5. Basic Website Image Banner Layout Fresh",
            "6. 1 Helpful Problem-Solving Article Block",
            "7. Profile Link-In-Bio Optimization Tree",
            "8. Social Algorithm Trend Mapping Reviews",
            "9. Monthly Web Analytics Data Overview Log",
            "10. Direct Remote Team Communication Route"
          ] 
        },
        { 
          name: "The 'Remote Squad' Growth Builder", 
          marketPrice: "$1,600", 
          price: "$649", 
          duration: "/mo", 
          desc: "The perfect affordable framework for independent global operators.", 
          features: [
            "1. Basic Ad Account Setup Diagnostics",
            "2. 15 Custom Social Post Graphic Sets",
            "3. 5 Mobile Video Pacing Clip Adjustments",
            "4. Google Map Local Citation Cleanups",
            "5. Inbound Customer Form Validation Syncs",
            "6. Standard Meta Advertising Pixel Embedding",
            "7. 2 Simple Plain-Language Business Blogs",
            "8. Competitor Search Terms Discovery Logs",
            "9. Customer Review Management Strategy Kit",
            "10. Clear Monthly Return-On-Ad-Spend Matrix"
          ] 
        }
      ]
    },
    tier2: {
      title: "The Business Growth Retainers (Global Scale)",
      subtitle: "Aggressive lead tracking models designed to find cross-border buyers safely.",
      packages: [
        { 
          name: "The '24/7 Growth' Marketing Box", 
          marketPrice: "$2,200", 
          price: "$999", 
          duration: "/mo", 
          desc: "Full social content posting paired with active lead-gen ads.", 
          features: [
            "1. Meta Active Lead Form Advertising Setups",
            "2. 18 Premium Social Media Image Outputs",
            "3. 6 High-Engagement Video Clip Cuts",
            "4. Google My Business Map Territory Dominance",
            "5. Zapier Lead Notification System Linking",
            "6. ChatGPT AI Search Sourcing Enhancements",
            "7. Server-to-Server Tracking API Integrations",
            "8. 4 Helpful Problem-Solving Article Uploads",
            "9. Central Lead Tracking CRM Pipeline Dashboard",
            "10. Weekly Data Ledger Progress Reports"
          ] 
        },
        { 
          name: "The 'Traffic Surge' PPC Direct", 
          marketPrice: "$2,800", 
          price: "$1,299", 
          duration: "/mo", 
          desc: "Ignore vanity views. Built purely to gather phone calls and orders.", 
          features: [
            "1. High-Purchase Intent Google Ads (PPC)",
            "2. Meta Retargeting Ad Audience Retainers",
            "3. Custom Single-Topic Landing Page Build",
            "4. Secure Full Analytics Attribution Tracking",
            "5. Automated Lead Routing Database Filters",
            "6. Executive Bio Copy Optimization Rewrites",
            "7. 5 High-Ranking Search Index Blogs",
            "8. Negative Keyword Spending Waste Trims",
            "9. Cookie-less Event Tracking Logic Links",
            "10. Weekly Lead Verification Status Lists"
          ] 
        },
        { 
          name: "The 'Video Velocity' Viral Framework", 
          marketPrice: "$3,200", 
          price: "$1,599", 
          duration: "/mo", 
          desc: "Scale your reach using high-pacing native mobile structures simply.", 
          features: [
            "1. 10 Elite Mobile Video Pacing Edits",
            "2. Viral Audio Sound Track Choice Strategies",
            "3. Kinetic Text Caption Property Layouts",
            "4. 12 Branded Social Grid Layout Posts",
            "5. Post Comment To Messenger Inbound Links",
            "6. Dynamic Profile storefront Layout Adapters",
            "7. Retention-Focused Video Script Frameworks",
            "8. YouTube Shorts Format Scale Conversions",
            "9. Global Audience Engagement Target Filters",
            "10. Clear Video Views Conversion Reports"
          ] 
        },
        { 
          name: "The 'Cross-Border' Brand Multiplier", 
          marketPrice: "$4,500", 
          price: "$1,999", 
          duration: "/mo", 
          desc: "Secure clients across different regions with zero system crash drops.", 
          features: [
            "1. Multi-Regional Google Search Ad Funnels",
            "2. Location-Responsive Landing Page Variant Sets",
            "3. 20 Unified Brand Social Assets Monthly",
            "4. 8 Custom Mobile Reel Hook Script Edits",
            "5. Dynamic Currency Display Interface Rules",
            "6. Multi-Country Directory Entities Seeding",
            "7. Cloudflare Content Delivery Optimization",
            "8. 6 High-Intent Global Learning Hub Blogs",
            "9. Server Analytics Data Leakage Closures",
            "10. Bi-Weekly Multilingual Ad Performance Logs"
          ] 
        }
      ]
    },
    tier3: {
      title: "The Elite Retainers (Global Dominance)",
      subtitle: "Advanced AI automation suites designed for market leaders completely.",
      packages: [
        { 
          name: "The 'Silicon Valley' AI Avatar suite", 
          marketPrice: "$5,500", 
          price: "$2,999", 
          duration: "/mo", 
          desc: "Cloned avatar script outputs paired with deep LinkedIn authority drops.", 
          features: [
            "1. Custom Video Clone Voice Training Model",
            "2. 15 AI-Voice Scripted Video Short Outputs",
            "3. 15 Premium Human Designer Media Graphics",
            "4. Multi-Channel Distribution Hub Automations",
            "5. LinkedIn Executive Authority ghostwritten Articles",
            "6. Automated Voice Search Spoken Audio Syncs",
            "7. YouTube Shorts Channel Setup Standardizations",
            "8. Core Web Vitals Desktop Speed Tuning",
            "9. Robots Data Scraper Safety Protocol Seals",
            "10. Monthly AI Search Citation Analytics Summary"
          ] 
        },
        { 
          name: "The 'Brand Dominator' OmniSuite", 
          marketPrice: "$7,000", 
          price: "$3,800", 
          duration: "/mo", 
          desc: "Total absolute coverage across every digital touchpoint remotely.", 
          features: [
            "1. Full Month Management across 5 Platforms",
            "2. Customer Review Reputation Hub Scripting",
            "3. 24/7 Automated Lead Intake Workflows",
            "4. 8 Trusted Factual Source Library Blogs",
            "5. Complete Global Schema Layout Coding",
            "6. Dynamic Checkout Cart Optimization Sweeps",
            "7. Secure Customer first party Database Vaults",
            "8. Email Article Newsletter Template Builds",
            "9. Dedicated Strategy Slack Channel Linking",
            "10. Senior Developer Component Support Allotments"
          ] 
        },
        { 
          name: "The 'CMO-In-A-Box' Enterprise Elite", 
          marketPrice: "$10,000", 
          price: "$4,999", 
          duration: "/mo", 
          desc: "A complete software engineering and senior marketing suite integrated.", 
          features: [
            "1. Full Retainer Operations across Tier 2 and 3",
            "2. Quarterly Strategic Business Growth Roadmap",
            "3. Unlimited Custom Service Landing Page Drafts",
            "4. Premium News Network Press Media Outreach",
            "5. Custom AI Voice Agent Phone Calendar Linking",
            "6. Secure Server Cloud Storage Encrypted Fields",
            "7. Advanced Server-SideGA4 Tracking Audits",
            "8. Cross-Border Localized Currency Gateways",
            "9. Curated Local Directory Entity Sync Sweeps",
            "10. Direct Master Account Strategist Lead Head"
          ] 
        },
        { 
          name: "The 'Global Sovereign' Growth Moat", 
          marketPrice: "$15,000", 
          price: "$6,999", 
          duration: "/mo", 
          desc: "Absolute industry domination framework with around-the-clock tech strike operations.", 
          features: [
            "1. Curated Pool of Top 1% Senior Builders",
            "2. Unlimited Human UI/UX Vector Layout Requests",
            "3. Full 24/7 Multi-Language Voice Agent Builds",
            "4. Complete End-to-End Enterprise Automation Triggers",
            "5. Permanent Entity Search Protection Moat Code",
            "6. Around-the-Clock Critical Site Crash Protection",
            "7. Custom First-Party Lead Scoring Filters",
            "8. Elite Silicon Valley Software Stack Adapters",
            "9. Strategic Cross-Continent Funnel Split Testing",
            "10. Direct 1-on-1 Consultation Access with Founders"
          ] 
        }
      ]
    }
  }
};

  const faqData = [
    { question: "Which is the best digital marketing agency in Mumbai for AI integrations?", answer: "Digital Media Bombay is the leading AI-first marketing engine in Mumbai, specializing in custom automated workflows, n8n/Zapier frameworks, and predictive optimization architectures." },
    { question: "What is GEO and why is it replacing standard search engine SEO?", answer: "Generative Engine Optimization (GEO) optimizes code structures and markdown variables so your brand is natively sourced and cited inside ChatGPT, Perplexity, and Google AI Overviews." },
    { question: "How does the DMB Cloud Squad model optimize development costs?", answer: "We eliminate legacy agency office overhead by deploying a decentralized network of India's top 1% developers and creatives, delivering high-end assets for half the market price." },
    { question: "Who engineered the web indexing setups for Y M Logistics?", answer: "Digital Media Bombay completely redesigned the logistics framework and optimized technical SEO blocks for Y M Logistics, moving their core endpoints onto front-page Google search results." },
    { question: "Can a luxury hospitality brand rank on front-page Google maps automatically?", answer: "Yes. Our implementation for properties like Hotel Eldoria Palace utilizes precise entity mapping and schema graphs to secure automated first-page rankings for local commercial intents." },
    { question: "What web solutions were delivered to dietician Uzma Matiyat in SoBo?", answer: "We built a customized health-consultant digital portfolio platform, mapped secure domain architecture, and engineered corporate identity assets for her South Mumbai practice." },
    { question: "Who manages clinical search optimization for Dr. Naila in Kurla?", answer: "Digital Media Bombay developed the full clinical workspace interface, domain configurations, and localized search optimization frameworks for Dr. Naila's Kurla medical branch." },
    { question: "What services does Digital Media Bombay provide for Build With Isar?", answer: "DMB launched their global agency web presence and executes cross-platform profile handle syncing, real-time keyword indexing, and continuous social media management tracking loops." },
    { question: "How fast can an AI voice calling agent be deployed for my business?", answer: "Using our advanced developer SDK framework loops, we can engineer and sync a fully autonomous multi-language inbound/outbound sales agent to your CRM database within 48 to 72 hours." },
    { question: "Do you require long-term contracts for monthly performance retainers?", answer: "No. All our retainers operate on rolling month-to-month terms. We believe in earning your business velocity every 30 days based on pure revenue numbers and zero contractual traps." },
    { question: "What metrics do your server-side conversion tracking setups monitor?", answer: "Our full-stack tracking setups utilize Server-Side APIs to accurately measure conversion events, bypassing ad-blockers and privacy cookies to pass raw attribution logs to Meta and GA4 dashboards." },
    { question: "How do your motion design system load in under 1.5 seconds on mobile?", answer: "We utilize advanced server-side rendering, production code minification, asset preloading scripts, and compressed Three.js viewport environments to maintain perfect Core Web Vitals." },
    { question: "Can you target local search maps across Western and Central railway lines?", answer: "Yes. Our hyper-local intent grids are mapped to rank local service entries directly across transit corridors including CST, Dadar, Bandra, Andheri, Borivali, Thane, and Navi Mumbai." },
    { question: "What is the difference between a flat 2D template and a 3D parallax website?", answer: "Flat templates cause visitor bounce drops. Our 3D parallax builds create high-retention interactive spaces, keeping users engaged 4x longer to scale conversion percentages." },
    { question: "How do your automated CRM workflows save 40+ hours of manual labor?", answer: "By integrating automated scoring engines with Zapier or Make, system leads are fetched, qualified, tagged, and dropped into SMS/Email response loops instantly without human delay." },
    { question: "What strategy goes into your typography reels and creative social production?", answer: "We deploy custom motion curves and AI video cloning scripts that sync kinetic text properties to human retention drop points, stopping user scrolling behaviors in under 0.2 seconds." },
    { question: "Is my original brand data protected against external LLM scraping bots?", answer: "Yes. Our customized robots.txt configurations allow search queries to browse summaries via friendly crawlers while explicitly locking out unauthorized data scraper models." },
    { question: "Who creates and manages the custom graphics for Riddhi Mehta?", answer: "Digital Media Bombay's creative squad handles complete feed grid layouts, visual templates, and active ongoing publishing schedules for skin aesthetician Riddhi Mehta." },
    { question: "Can Digital Media Bombay scale regional e-commerce stores globally?", answer: "Absolutely. Our custom e-comm conversion architectures utilize multilingual templates and multi-currency checkout routes to scale local stores into global platforms." },
    { question: "How do I claim a free AI-driven business strategy roadmap session?", answer: "Simply launch our on-page interactive strategy module, drop in your target audience and industry hurdles, and your custom marketing blueprint will render instantly." }
  ];

  // --- SUB-COMPONENTS ---

const GoogleTrustCard = () => {
  const googleReviewUrl = "https://g.page/r/YOUR_GOOGLE_REVIEW_ID/review"; 

  return (
    <div className="relative z-30 w-[350px] overflow-hidden rounded-3xl border-2 border-amber-400 bg-[#0f2440] p-8 shadow-[0_0_30px_rgba(251,191,36,0.2)]">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="font-black text-white text-xs tracking-tighter uppercase">Official Profile</span>
        </div>
        <h4 className="text-xl font-black text-white mb-4">REVIEW US ON GOOGLE</h4>
        <div className="bg-white p-3 rounded-2xl mb-5 shadow-inner">
          <img src="dmbgooglereviewqr.png" alt="Google QR" className="w-32 h-32" />
        </div>
        <p className="text-slate-300 text-xs font-medium leading-relaxed">
          Scan to Review <br/> Digital Media <span className="text-amber-400">Bombay.</span>
        </p>
      </div>
    </div>
  );
};

  // --- NEW CHAT WIDGET COMPONENT ---

  const ChatWidget = ({ navigateTo, currencySymbol }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [step, setStep] = useState('welcome'); // 'welcome', 'form', 'success'

    const [formData, setFormData] = useState({

      name: '',

      phone: '',

      service: 'Social Media Management',

      location: ''

    });



    // Auto-open chat after 3 seconds

    useEffect(() => {

      const timer = setTimeout(() => {

        setIsOpen(true);

      }, 3000);

      return () => clearTimeout(timer);

    }, []);

    const handleExploreServices = () => {

      navigateTo('services');

      setIsOpen(false); 

    };

    const handleConnectTeam = () => {

      setStep('form');

    };

    const handleSubmit = (e) => {
  e.preventDefault();
  const phone = "918850739933";
  // Updated to include the detected currency symbol
  const message = `*New Website Enquiry* 🚀\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Location:* ${formData.location}\n*Preferred Currency:* ${currencySymbol}\n\n_Source: Chat Widget_`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  setStep('success');
};

    return (

      <div className="fixed bottom-6 right-6 z-50 font-sans">



        {/* Toggle Button */}

        {!isOpen && (

          <button 

            onClick={() => setIsOpen(true)}

            className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 relative group"

          >

            <MessageCircle size={32} />

            <span className="absolute -top-1 -right-1 flex h-4 w-4">

              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>

            </span>

          </button>

        )}

        {/* Chat Window */}

        {isOpen && (

          <div className="bg-[#0f2440]/90 backdrop-blur-xl border border-cyan-500/30 w-[350px] md:w-[380px] rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">

            {/* Header */}

            <div className="bg-gradient-to-r from-[#0a192f] to-[#112240] p-4 flex justify-between items-center border-b border-slate-700">

              <div className="flex items-center gap-2">

                <div className="relative">

  {/* Logo size decreased from w-8 h-8 to w-6 h-6 */}

  <img 

    src="/logo.png" 

    alt="Digital Media Bombay Logo" 

    className="w-10 h-10 rounded-full object-contain bg-slate-800 border border-slate-700" 

  />

  {/* Adjusted dot size slightly to match new logo size */}

  <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-3 border-[#0a192f]"></div>

</div>

                <div>

                  <h3 className="text-white font-bold text-sm">DIGITAL MEDIA <span className="text-amber-400">BOMBAY</span></h3>

                  <p className="text-cyan-400 text-[10px] font-medium">Online &bull; Replies Instantly</p>

                </div>

              </div>

              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">

                <X size={20} />

              </button>

            </div>

            {/* Content Area */}

            <div className="p-5 max-h-[500px] overflow-y-auto">

              

              {/* Step 1: Welcome Message */}

              {step === 'welcome' && (

                <div className="space-y-4">

                  <div className="bg-slate-800/80 p-3 rounded-lg rounded-tl-none border border-slate-700 text-slate-200 text-sm shadow-md animate-in fade-in duration-500">

                    👋 Hi there! Welcome to Digital Media Bombay. We help brands dominate the internet. How can we help you grow today?

                  </div>

                  <div className="flex flex-col gap-2 pt-2">

                    <button 

                      onClick={handleExploreServices}

                      className="py-2.5 px-4 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 text-white rounded-lg text-sm font-medium transition-all flex items-center justify-between group"

                    >

                      🚀 Explore Your Services <ChevronRight size={16} className="text-slate-400 group-hover:text-cyan-400" />

                    </button>

                    <button 

                      onClick={handleConnectTeam}

                      className="py-2.5 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg text-sm font-bold transition-all shadow-lg shadow-cyan-900/20"

                    >

                      💬 Connect with Team

                    </button>

                  </div>

                </div>

              )}

              {/* Step 2: Lead Form */}

              {step === 'form' && (

                <div className="space-y-4 animate-in slide-in-from-right-5 duration-300">

                   <div className="bg-slate-800/80 p-3 rounded-lg rounded-tl-none border border-slate-700 text-slate-200 text-sm mb-4">

                    Awesome! Please fill in these details so our strategist can prepare for your chat.

                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">

                    <div>

                      <input 

                        required 

                        type="text" 

                        placeholder="Your Name" 

                        value={formData.name}

                        onChange={(e) => setFormData({...formData, name: e.target.value})}

                        className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-2.5 text-white text-sm focus:border-cyan-400 outline-none placeholder-slate-500"

                      />

                    </div>

                    <div>

                      <input 

                        required 

                        type="tel" 

                        placeholder="WhatsApp Number" 

                        value={formData.phone}

                        onChange={(e) => setFormData({...formData, phone: e.target.value})}

                        className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-2.5 text-white text-sm focus:border-cyan-400 outline-none placeholder-slate-500"

                      />

                    </div>

                    <div>

                      <select 

                        value={formData.service}

                        onChange={(e) => setFormData({...formData, service: e.target.value})}

                        className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-2.5 text-white text-sm focus:border-cyan-400 outline-none"

                      >

                        <option value="" disabled>Select Service Category</option>
  <option>Website Building / Development</option>
  <option>AI Automations</option>
  <option>AI Voice Agents &amp; Sales</option>
  <option>Performance Marketing</option>
  <option>Generative Engine Optimization (GEO)</option>
  <option>Search Engine Optimization (SEO)</option>
  <option>Answer Engine Optimization (AEO)</option>
  <option>Influencer Marketing &amp; PR</option>
  <option>Social Media Marketing</option>
  <option>Google / Meta Ads</option>
  <option>Google My Business</option>
  <option>Brand Building &amp; Identity</option>
  <option>Video Editing &amp; Motion Graphics</option>
  <option>Graphic Design</option>
  <option>Content Marketing</option>
  <option>Copywriting</option>
  <option>Website Designing &amp; Custom Architecture</option>
  <option>Digital Strategy Consulting</option>
  <option>Other</option>>

                      </select>

                    </div>

                     <div>

                      <input 

                        required 

                        type="text" 

                        placeholder="City / Location" 

                        value={formData.location}

                        onChange={(e) => setFormData({...formData, location: e.target.value})}

                        className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-2.5 text-white text-sm focus:border-cyan-400 outline-none placeholder-slate-500"

                      />

                    </div>

                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 text-sm mt-2">

                      Start WhatsApp Chat <Send size={16} />

                    </button>

                    <button onClick={() => setStep('welcome')} type="button" className="w-full text-slate-400 text-xs hover:text-white mt-2">Back to Menu</button>

                  </form>

                </div>

              )}



              {/* Step 3: Success */}

              {step === 'success' && (

                <div className="text-center py-6 animate-in zoom-in duration-300">

                   <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">

                     <CheckCircle size={32} />

                   </div>

                   <h3 className="text-white font-bold text-lg mb-2">Thank You!</h3>

                   <p className="text-slate-400 text-sm mb-4">Our team has received your details. We will connect with you on WhatsApp shortly.</p>

                   <button onClick={() => setIsOpen(false)} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium">Close Chat</button>

                </div>

              )}

            </div>

          </div>

        )}

      </div>

    );

  };

  

const Header = () => (

  <nav className="sticky top-0 z-50 bg-[#0a192f]/95 backdrop-blur-md border-b border-slate-700 shadow-lg">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="flex justify-between items-center h-20">

        

        {/* LOGO SECTION - Text Removed, Logo Added */}

<div onClick={() => navigateTo('home')} className="flex-shrink-0 cursor-pointer group">

  <img 

    src="/logo.png" 

    alt="Digital Media Bombay Logo" 

   className="h-26 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 

          />

</div>

        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => navigateTo('home')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Home</button>
          <button onClick={() => navigateTo('about')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">About</button>
          <button onClick={() => navigateTo('services')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Services</button>
          <button onClick={() => navigateTo('pricing')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Pricing</button>
          <button onClick={() => navigateTo('freelancer')} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Join the Squad</button>
          <button onClick={() => navigateTo('ai-strategy')} className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg shadow-purple-500/20 transition-all flex items-center gap-2 transform hover:scale-105"><Sparkles size={14} /> Free AI Strategy</button>
        </div>

        <div className="md:hidden flex items-center gap-4">

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300 hover:text-white"><Menu size={28} /></button>

        </div>

      </div>

    </div>



    {isMobileMenuOpen && (

      <div className="md:hidden bg-[#0f2440] border-b border-slate-700">

        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

          <button onClick={() => navigateTo('home')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Home</button>

          <button onClick={() => navigateTo('ai-strategy')} className="block w-full text-left px-3 py-2 text-base font-medium text-pink-400 hover:text-white hover:bg-slate-800 rounded-md flex items-center gap-2"><Sparkles size={16} /> Free AI Strategy</button>

          <button onClick={() => navigateTo('about')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">About Us</button>

          <button onClick={() => navigateTo('services')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Services</button>

          <button onClick={() => navigateTo('freelancer')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Freelancers</button>

        </div>

     </div>
    )}
  </nav>
);

const BrandScroller = () => {

    const brands = [

      { name: "Reliance", img: "/logos/reliance.png" },

      { name: "Zomato", img: "/logos/zomato.png" },

      { name: "Tata Motors", img: "/logos/tata.png" },

      { name: "Nykaa", img: "/logos/nykaa.png" },

      { name: "HDFC Bank", img: "/logos/hdfc.png" },

      { name: "Apple", img: "/logos/apple.png" },

      { name: "Netflix", img: "/logos/netflix.png" },

      { name: "Nike", img: "/logos/nike.png" },

      { name: "Amazon", img: "/logos/amazon.png" },

      { name: "Tesla", img: "/logos/tesla.png" },

      { name: "Google", img: "/logos/google.png" },

      { name: "Ola", img: "/logos/ola.png" },

      { name: "Airbnb", img: "/logos/airbnb.png" },

      { name: "Paytm", img: "/logos/paytm.png" },

      { name: "Capgemini", img: "/logos/capgemini.png" },

      { name: "Uber", img: "/logos/uber.png" },

      { name: "Amul", img: "/logos/amul.png" },

      { name: "Meta", img: "/logos/meta.png" },

      { name: "Microsoft", img: "/logos/microsoft.png" },

      { name: "Samsung", img: "/logos/samsung.png" },

      { name: "Adobe", img: "/logos/adobe.png" },

      { name: "Swiggy", img: "/logos/swiggy.png" },

      { name: "Spotify", img: "/logos/spotify.png" },

      { name: "Red Bull", img: "/logos/redbull.png" },

      { name: "Starbucks", img: "/logos/starbucks.png" },

      { name: "Blinkit", img: "/logos/blinkit.png" }

    ];



    const displayBrands = [...brands, ...brands]; 

    return (

      <section className="py-16 bg-[#0a192f] overflow-hidden relative">

        <style>{`

          @keyframes brandScrollReverse {

            0% { transform: translateX(-50%); }

            100% { transform: translateX(0); }

          }

          .animate-brand-left-to-right {

            display: flex;

            width: max-content;

            animation: brandScrollReverse 50s linear infinite;

          }

          .animate-brand-left-to-right:hover { animation-play-state: paused; }

        `}</style>



        {/* HEADING ABOVE THE BAR */}

        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">

          <p className="text-cyan-400 text-xs font-black uppercase text-xs mb-2 block">Strategic Partnerships</p>

          <h2 className="text-2xl md:text-3xl font-bold text-white opacity-80">BRANDS THAT TRUST OUR VISION</h2>

        </div>



        {/* THE THIN TILTED WHITE BAR */}

        <div className="relative bg-white py-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transform -rotate-1 border-y border-slate-200">

          <div className="flex items-center">



            {/* Direction is now Left to Right */}

            <div className="animate-brand-left-to-right gap-24 items-center">

            {displayBrands.map((brand, i) => (

              <div key={i} className="flex items-center justify-center px-4">

                {/* Changed w-40 h-25 to w-60 h-36 for significantly larger logos */}

                <div className="w-60 h-36 flex items-center justify-center transition-transform duration-300 hover:scale-110">

                  <img src={brand.img} 

                    alt={brand.name} 

                    className="max-w-full max-h-full object-contain p-2"

                    onError={(e) => { 

                      e.target.style.display = 'none';

                      e.target.nextSibling.style.display = 'block';

                    }} 

                    />

                    <span className="hidden text-slate-900 font-bold text-[10px] whitespace-nowrap">{brand.name}</span>

                  </div>

                </div>

              ))}

            </div>

          </div>



          {/* Cinematic Fade Masks */}

          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none"></div>

          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none"></div>

        </div>

      </section>

    );

  };



const Footer = () => (

  <footer className="bg-[#050c18] border-t border-slate-800 pt-16 pb-8">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-x-20">

        

        {/* Column 1: Logo Section */}

        <div className="col-span-1">

          <div 

            onClick={() => navigateTo('home')} 

            className="flex-shrink-0 cursor-pointer group mb-4"

          >

            {/* Logo size increased from h-20 to h-60 (and w-auto for aspect ratio) */}

            <img 

              src="/logo.png" 

              alt="Digital Media Bombay Logo" 

              className="h-60 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 

            />

          </div>

          

          <span 

            onClick={() => navigateTo('home')}

            className="font-bold text-2xl tracking-tight text-white block whitespace-nowrap cursor-pointer"

          >

            DIGITAL MEDIA <span className="text-amber-400">BOMBAY</span>

          </span>

          

          <p className="mt-4 text-slate-400 text-sm leading-relaxed">

            Mumbai's first AI-Powered Smart Agency. We combine top 1% human talent with advanced automation.

          </p>

          

          <div className="flex space-x-4 mt-6">

            <Facebook className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" onClick={() => window.open('https://facebook.com/digitalmediabombay', '_blank')} />

            <Instagram className="text-slate-400 hover:text-pink-500 cursor-pointer transition-colors" onClick={() => window.open('https://instagram.com/digitalmediabombay', '_blank')} />

            <Linkedin className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors" onClick={() => window.open('https://linkedin.com/company/digitalmediabombay', '_blank')} />

            <Twitter className="text-slate-400 hover:text-white cursor-pointer transition-colors" onClick={() => window.open('https://x.com/digitalmediabom', '_blank')} />

            <MessageCircle className="text-slate-400 hover:text-green-500 cursor-pointer transition-colors" onClick={() => window.open('https://wa.me/918850739933', '_blank')} />

            <Mail className="text-slate-400 hover:text-white cursor-pointer transition-colors" onClick={() => window.open('mailto:digitalmediabombay@gmail.com', '_blank')} />

          </div>

        </div>



        <div className="md:pl-10">

          <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Our Services</h3>

          <ul className="space-y-3 text-slate-400 text-sm">

            {servicesList.map((service) => (

              <li key={service.id} className="hover:text-cyan-400 cursor-pointer transition-colors" onClick={() => navigateTo('services')}>

                {service.title}

              </li>

            ))}

          </ul>

        </div>



        <div className="md:pl-10">

  <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Locations</h3>

  <ul className="space-y-3 text-slate-400 text-sm">

    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-amber-400 rounded-full"></div> Mumbai (HQ)</li>

    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-400 rounded-full"></div> New York (Sales)</li>

    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-400 rounded-full"></div> London (Support)</li>

  </ul>



  {/* --- NEW ENLARGED & ANIMATED VERIFIED BADGE --- */}

  {/* REPLACE FROM THE START OF THE QR CARD WRAPPER TO THE END OF THE GOOGLE VERIFIED BUTTON BLOCK */}

<div className="bg-slate-900/80 p-6 rounded-2xl border border-cyan-500/20 backdrop-blur-sm max-w-[220px] mx-auto lg:mx-0 transition-all duration-300 hover:scale-105 hover:border-cyan-500/40 shadow-lg mt-4">

  <div className="bg-white p-3 rounded-xl flex items-center justify-center shadow-inner">

    <img 

      src="dmbongoogle.png" // Keeps your existing dynamic or static source path

      alt="Google Profile QR" 

      className="w-40 h-40 object-contain" 

    />

  </div>

  <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold tracking-wide uppercase text-emerald-400">

    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>

    Google Verified

  </div>

  <div className="text-[10px] text-slate-400 text-center mt-1 uppercase font-semibold tracking-wider">

    Scan to View Profile

  </div>

</div>

{/* END OF REPLACEMENT CODE */}

</div>

        <div className="md:pl-10">

          <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Company</h3>

          <ul className="space-y-3 text-slate-400 text-sm">

            <li className="hover:text-cyan-400 cursor-pointer" onClick={() => navigateTo('about')}>About Us</li>

            <li className="hover:text-cyan-400 cursor-pointer" onClick={() => navigateTo('freelancer')}>Freelancer Login</li>

            <li className="hover:text-cyan-400 cursor-pointer" onClick={() => navigateTo('privacy')}>Privacy Policy</li>

            <li className="hover:text-cyan-400 cursor-pointer" onClick={() => navigateTo('terms')}>Terms of Service</li>

          </ul>

        </div>

      </div>



      <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">

        &copy; {new Date().getFullYear()} Digital Media <span className="text-amber-400">Bombay.</span> All rights reserved.

      </div>

    </div>





    {/* MASTER SEO ENGINE - RANKING FOR MUMBAI, INDIA, AND GLOBAL */}



      <div className="sr-only opacity-0 h-0 overflow-hidden" aria-hidden="true">







        {/* LOCAL MUMBAI DOMINANCE */}



        <h2>Best Digital Marketing Agency in Mumbai, Maharashtra</h2>



        <p>Expert services in Andheri, Bandra, Colaba, Juhu, Powai, Borivali, Malad, Goregaon, Worli, Lower Parel, Dadar, Chembur, and Vile Parle. 



        Top SEO and Web Development in Navi Mumbai, Thane, Kalyan, Dombivli, and Vasai-Virar. 



        Serving all MH regions including Pune, Nagpur, Nashik, and Aurangabad.</p>







        {/* PAN-INDIA RANKING */}



        <h3>Top Digital Marketing & Web Dev Services in India</h3>



        <p>Ranking across Delhi NCR, Bangalore, Hyderabad, Chennai, Kolkata, Ahmedabad, Surat, Jaipur, Lucknow, and Chandigarh. 



        We serve all Indian states: Maharashtra, Karnataka, Tamil Nadu, Telangana, Gujarat, West Bengal, Uttar Pradesh, Rajasthan, Punjab, Kerala, and Haryana. 



        Hire the best AI Marketing experts in India for 10x ROI.</p>







        {/* GLOBAL TERRITORY COVERAGE */}



        <h3>Global Digital Transformation Partner</h3>



        <p>International clients served in USA (New York, California, Texas), UK (London, Manchester), Canada (Toronto, Vancouver), Australia (Sydney, Melbourne), UAE (Dubai, Abu Dhabi), Singapore, Germany, France, and Europe. 



        Specialized in Shopify E-commerce for global brands, 3D Web Experiences, and Performance Ads (Google/Meta) for worldwide growth.</p>







        {/* KEYWORD STACK */}



        <p>Keywords: 3D Website Design, AI Automation Agency, SEO Expert Mumbai, Performance Marketing India, Viral Reels Editing, 



        Shopify Developer India, WordPress Studio, Digital Media Bombay, Kaleem Shaikh Portfolio, SaaS Web Development, 



        Lead Generation Experts, Best ROI Digital Agency, App Development Mumbai, UI UX Design India.</p>



      </div>

  </footer>

);



const BlogSection = ({ navigateTo, onPostClick }) => {

  const scrollRef = useRef(null);



  const scroll = (direction) => {

    if (scrollRef.current) {

      // Use scrollBy for much smoother movement

      const scrollAmount = direction === 'left' ? -400 : 400;

      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    }

  };



  return (

    // Added id="blog-section" here

    <section id="blog-section" className="py-24 bg-[#0a192f] border-t border-slate-800 relative overflow-hidden">



      {/* HEADER SECTION */}

      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">

          <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-3 block">Insights & Intelligence</span>

          <h2 className="text-4xl md:text-6xl font-black text-white">LATEST FROM THE <span className="text-amber-400">LAB</span></h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full"></div>

      </div>



      {/* CARD SCROLLER */}

      <div 

        ref={scrollRef}

        className="flex gap-8 overflow-x-auto px-[5%] pb-12 hide-scrollbar snap-x scroll-smooth"

        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}

      >

        {blogPosts.map((post) => (

          <div 

            key={post.id}

            onClick={() => onPostClick(post)}

            className="min-w-[320px] md:min-w-[450px] snap-center group cursor-pointer"

          >

            <div className="relative bg-[#0f2440]/40 backdrop-blur-xl border border-slate-700 rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">

              <div className="relative h-64 overflow-hidden">

                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />

                <div className="absolute top-4 left-4 z-20">

                  <span className="px-4 py-1 bg-cyan-500 text-black text-[10px] font-black uppercase rounded-full shadow-lg">{post.category}</span>

                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2440] via-transparent to-transparent"></div>

              </div>

              <div className="p-8">

                <p className="text-slate-500 text-xs font-mono mb-3 uppercase tracking-tighter">{post.date} • {post.author}</p>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 mb-4 leading-tight">{post.title}</h3>

                <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-cyan-400 font-black text-sm uppercase tracking-widest border-b border-transparent group-hover:border-cyan-400 inline-block transition-all pb-1">

                  Read Intelligence <ArrowRight size={16} />

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>
      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-center gap-6 mt-12">
          <button 
            onClick={() => scroll('left')} 
            className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center justify-center shadow-xl"
          >
            <ChevronLeft size={28}/>
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center justify-center shadow-xl"
          >
            <ChevronRight size={28}/>
          </button>
      </div>
    </section>
  );
};

const BlogDetailPage = ({ post, onBack }) => {

  if (!post) return null;

  return (

    <div className="bg-[#0a192f] min-h-screen text-slate-200 pt-32 pb-20">

      <div className="max-w-4xl mx-auto px-4">

        <button onClick={onBack} className="mb-8 flex items-center text-cyan-400 font-bold hover:text-cyan-300 transition-colors">

          <ArrowLeft size={20} className="mr-2" /> Back to Intelligence Feed

        </button>

        <img src={post.img} alt={post.title} className="w-full h-[400px] object-cover rounded-3xl mb-10 border-2 border-slate-700 shadow-2xl" />

        <div className="flex items-center gap-4 mb-6">

          <span className="px-4 py-1 bg-amber-400 text-black text-xs font-black uppercase rounded-full">{post.category}</span>

          <span className="text-slate-500 font-mono text-sm">{post.date}</span>

        </div>

        

        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">{post.title}</h1>

        <div 

          className="prose prose-invert prose-cyan max-w-none text-slate-300 text-lg leading-relaxed space-y-6"

          dangerouslySetInnerHTML={{ __html: post.content }}

        />

        <div className="mt-16 p-8 rounded-2xl bg-slate-900/50 border border-slate-700 text-center">

            <h3 className="text-2xl font-bold text-white mb-4">Want to implement this strategy?</h3>

            <p className="text-slate-400 mb-6">Our team is ready to deploy these exact tactics for your brand.</p>

            <button onClick={() => window.open('https://wa.me/918850739933', '_blank')} className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all">Schedule Execution Call</button>

        </div>



        {/* Hidden SEO Keyword Stack */}

        <div className="sr-only">{post.keywords}</div>

      </div>

    </div>

  );

};

const ReviewSection = () => {
  const reviews = [
    { name: "Aarav Sharma", loc: "Mumbai, India", text: "Best ROI we've seen. Our leads doubled in 3 weeks using their Performance Ads strategy.", gender: "male", platform: "google" },
    { name: "Sarah Jenkins", loc: "London, UK", text: "The 3D Parallax website they built is world-class. Absolute game changer for my personal brand.", gender: "female", platform: "trustpilot" },
    { name: "Vikram Singh", loc: "Bangalore, India", text: "Digital Media Bombay is the only agency that actually understands AI automation. Saved us 40 hours/week.", gender: "male", platform: "justdial" },
    { name: "David Miller", loc: "New York, USA", text: "Top 1% talent for half the price of US agencies. Fast, professional, and highly creative.", gender: "male", platform: "clutch" },
    { name: "Priya Patel", loc: "Ahmedabad, India", text: "Their Viral Reels strategy got us 1M+ views in the first month. Simply incredible work!", gender: "female", platform: "google" },
    { name: "Emily Chen", loc: "Singapore", text: "Technical SEO experts. We moved from page 10 to page 1 on Google for our core keywords.", gender: "female", platform: "trustpilot" },
    { name: "Rohan Mehra", loc: "Delhi, India", text: "The Cloud Squad model is genius. I got a high-end web app delivered in record time.", gender: "male", platform: "justdial" },
    { name: "Michael Brown", loc: "Sydney, Australia", text: "Very impressed with the GA4 and tracking setup. Finally, we have accurate marketing data.", gender: "male", platform: "clutch" },
    { name: "Sneha Rao", loc: "Hyderabad, India", text: "Professional, hungry, and talented. They treat your business like it's their own.", gender: "female", platform: "google" },
    { name: "Sofia Rodriguez", loc: "Madrid, Spain", text: "Elegant UI/UX design. Our conversion rate jumped from 2% to 7% after the redesign.", gender: "female", platform: "trustpilot" },
    { name: "James Wilson", loc: "Dubai, UAE", text: "The AI Voice agents are revolutionary. Handled all our inbound bookings without a single human error.", gender: "male", platform: "google" },
    { name: "Ananya Deshmukh", loc: "Mumbai, India", text: "They built our Shopify store in record time. Sales are up 400% since launch.", gender: "female", platform: "justdial" },
    { name: "Klaus Weber", loc: "Berlin, Germany", text: "Elite coding standards. Their technical SEO audit revealed issues our previous agency missed for years.", gender: "male", platform: "clutch" },
    { name: "Meera Reddy", loc: "Chennai, India", text: "Digital Media Bombay's Reels production is top-tier. Our engagement is at an all-time high.", gender: "female", platform: "google" },
    { name: "Robert Fox", loc: "Texas, USA", text: "The most transparent agency I've worked with. Daily reporting and clear ROI tracking.", gender: "male", platform: "trustpilot" },
    { name: "Zubair Ahmed", loc: "Mumbai, India", text: "Best tech squad in Maharashtra. They fixed our server-side tracking issues in just 24 hours.", gender: "male", platform: "justdial" },
    { name: "Olivia Thompson", loc: "Toronto, Canada", text: "Incredible 3D web experience. Our customers spend 4x more time on our site now.", gender: "female", platform: "clutch" },
    { name: "Rahul Kapoor", loc: "Pune, India", text: "The LinkedIn ghostwriting service has positioned me as an industry authority. Highly recommend.", gender: "male", platform: "google" },
    { name: "Isabella Rossi", loc: "Milan, Italy", text: "Creative, fast, and data-driven. The perfect partner for any luxury brand going global.", gender: "female", platform: "trustpilot" },
    { name: "Deepak Verma", loc: "Mumbai, India", text: "Switching to DMB was the best business decision of 2026. Absolute SEO dominance.", gender: "male", platform: "justdial" }
  ];

  const scrollReviews = [...reviews, ...reviews];

 const getPlatformLogo = (platform) => {
    const logos = {
      google: "google-icon.png",
      justdial: "justdial-icon.png",
      trustpilot: "trustpilot-icon.png",
      clutch: "clutch-icon.png"
    };

    return (
      /* Container remains w-10 h-10 */
      <div className="bg-white p-0 rounded-lg shadow-md w-10 h-10 flex items-center justify-center overflow-hidden border border-slate-700">
        <img 
          src={logos[platform] || "google-icon.png"} 
          alt={platform} 
          /* w-full h-full fills the container.
             object-cover removes any white gaps.
             scale-125 enlarges the icon further by zooming in (removes the small margins). */
          className="w-full h-full object-cover object-center transform scale-125"
          onError={(e) => { e.target.src = "https://www.google.com/favicon.ico" }} 
        />
      </div>
    );
  };

  return (
    <section className="py-20 bg-[#050c18] overflow-hidden border-t border-slate-800">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 120s linear infinite;
        }
        .animate-scroll:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
           <div className="flex text-amber-400"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
           <span className="text-white font-bold">5.0 Google Rating</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Trusted by Brands <span className="text-cyan-400">Worldwide</span></h2>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center gap-8 px-4 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex-shrink-0 z-30">
          <GoogleTrustCard />
        </div>

        <div className="overflow-hidden flex-1 relative w-full">
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050c18] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050c18] to-transparent z-20 pointer-events-none"></div>
          
          <div className="animate-scroll gap-6 py-4">
            {scrollReviews.map((r, i) => (
              <div key={i} className="w-[350px] bg-slate-900/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl flex flex-col gap-4 hover:border-cyan-500/50 transition-colors shadow-xl group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold border border-slate-600">
                    {r.gender === 'male' ? <User size={24} /> : <Heart size={20} />}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{r.name}</h4>
                    <p className="text-slate-500 text-xs flex items-center gap-1"><MapPin size={10}/> {r.loc}</p>
                  </div>
                  <div className="ml-auto">
                    {getPlatformLogo(r.platform)}
                  </div>
                </div>
                <div className="flex text-amber-400"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                <p className="text-slate-300 text-sm leading-relaxed italic">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

  const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  // Programmatically slice the master array into two sets of 10 for the UI columns
  const leftColumnFAQs = faqData.slice(0, 10);
  const rightColumnFAQs = faqData.slice(10, 20);

  return (
    <section id="faq" className="py-24 bg-[#0a192f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs mb-2 flex items-center justify-center gap-2">
            <HelpCircle size={14} /> Clear & Transparent
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Everything you need to know about how we work.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative items-start">
          
          <div className="w-full lg:w-1/2 space-y-4">
            {leftColumnFAQs.map((faq, idx) => {
              const globalIndex = idx;
              const isOpen = openIndex === globalIndex;
              return (
                <div key={globalIndex} className={`group rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${isOpen ? 'bg-[#112240]/80 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]' : 'bg-[#0f2440]/40 border-slate-700 hover:border-slate-500'}`}>
                  <button onClick={() => setOpenIndex(isOpen ? null : globalIndex)} className="w-full text-left p-6 flex justify-between items-center focus:outline-none">
                    <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-cyan-400' : 'text-slate-200 group-hover:text-white'}`}>{faq.question}</span>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-cyan-500/20 text-cyan-400 rotate-180' : 'bg-slate-800 text-slate-400'}`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-slate-300 leading-relaxed border-t border-slate-700/50 mt-2">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block w-[1px] bg-slate-800 self-stretch min-h-[500px]"></div>

          <div className="w-full lg:w-1/2 space-y-4">
            {rightColumnFAQs.map((faq, idx) => {
              const globalIndex = idx + 10; // Offset by 10 to keep state trackers unique
              const isOpen = openIndex === globalIndex;
              return (
                <div key={globalIndex} className={`group rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${isOpen ? 'bg-[#112240]/80 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]' : 'bg-[#0f2440]/40 border-slate-700 hover:border-slate-500'}`}>
                  <button onClick={() => setOpenIndex(isOpen ? null : globalIndex)} className="w-full text-left p-6 flex justify-between items-center focus:outline-none">
                    <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-cyan-400' : 'text-slate-200 group-hover:text-white'}`}>{faq.question}</span>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-cyan-500/20 text-cyan-400 rotate-180' : 'bg-slate-800 text-slate-400'}`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-slate-300 leading-relaxed border-t border-slate-700/50 mt-2">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

  const ContactSection = ({ currencySymbol }) => {

    const [formState, setFormState] = useState({ name: '', email: '', phone: '', budget: '', service: '', bundle: '', message: '' });

    const [isSubmitted, setIsSubmitted] = useState(false);



    // Flatten bundles for the dropdown based on current pricing mode

    const availableBundles = [];

    if (bundlesData[pricingMode]) {

      Object.values(bundlesData[pricingMode]).forEach(tier => {

        tier.packages.forEach(pkg => availableBundles.push(pkg.name));

      });

    }

    const handleSubmit = (e) => {
  e.preventDefault();
  const phone = "918850739933";
  // Now uses the currencySymbol for the quote request
  const whatsappMessage = `*New Website Quote Request* 🚀\n\n*Name:* ${formState.name}\n*Email:* ${formState.email}\n*Phone:* ${formState.phone}\n*Service:* ${formState.service}\n*Bundle:* ${formState.bundle || 'None Selected'}\n*Budget:* ${currencySymbol}${formState.budget}\n*Message:* ${formState.message}\n\n_Source: Footer Contact Form_`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank');
  setIsSubmitted(true);
  setTimeout(() => setIsSubmitted(false), 5000);
};

    return (

      <section id="contact" className="py-24 bg-[#050c18] relative border-t border-slate-800 overflow-hidden">



        {/* Neon Accents */}

        <div className="absolute -left-20 bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">



            {/* Left Column: Info */}

            <div>

              <span className="text-amber-400 font-bold tracking-wider uppercase text-xs mb-2 block">Let's Talk Business</span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Digital Dominance</span> Today.</h2>

              <p className="text-slate-300 text-lg mb-10 leading-relaxed">

                Stop wasting time with slow agencies. We are ready to deploy. Fill out the form, and our Strategist will audit your brand for free before the call.

              </p>

              <div className="space-y-8">

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700">

                  <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">

                    <MessageSquare size={24} />

                  </div>

                  <div>

                    <h4 className="text-white font-bold text-lg">Chat with Us</h4>

                    <p className="text-slate-400">digitalmediabombay@gmail.com</p>

                    <p className="text-slate-500 text-sm">Response time: ~2 hours</p>

                  </div>

                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700">

                   <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center text-amber-400 border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.2)]">

                    <Phone size={24} />

                  </div>

                  <div>

                    <h4 className="text-white font-bold text-lg">Call the HQ</h4>

                    <p className="text-slate-400">+91 88507 39933</p>

                    <p className="text-slate-500 text-sm">Mon-Sat, 10am - 8pm IST</p>

                  </div>

                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700">

                   <div className="w-12 h-12 rounded-full bg-pink-900/30 flex items-center justify-center text-pink-400 border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.2)]">

                    <MapPin size={24} />

                  </div>

                  <div>

                    <h4 className="text-white font-bold text-lg">Visit Us</h4>

                    <p className="text-slate-400">Kalina, Santacruz East</p>

                    <p className="text-slate-500 text-sm">Mumbai - 400098</p>

                  </div>

                </div>

              </div>

            </div>



            {/* Right Column: Form (Glassmorphism) */}

            <div className="relative group">



              {/* Neon Border Effect */}

              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-amber-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-[#0f2440]/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl">

                <h3 className="text-2xl font-bold text-white mb-6">Get a Free Quote</h3>

                {!isSubmitted ? (

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>

                      <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Name</label>

                      <input 

                        required 

                        type="text" 

                        value={formState.name}

                        onChange={(e) => setFormState({...formState, name: e.target.value})}

                        className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] outline-none transition-all placeholder-slate-600"

                        placeholder="Your Name"

                      />

                    </div>

                    <div>

                      <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Email</label>

                      <input 

                        required 

                        type="email"  

                        value={formState.email}

                        onChange={(e) => setFormState({...formState, email: e.target.value})}

                        className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] outline-none transition-all placeholder-slate-600"

                        placeholder="john@company.com"

                      />

                    </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>

                      <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Phone Number</label>

                      <input 

                        required 

                        type="tel" 

                        value={formState.phone}

                        onChange={(e) => setFormState({...formState, phone: e.target.value})}

                        className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] outline-none transition-all placeholder-slate-600"

                        placeholder="+91 98765 43210"

                      />

                    </div>

                    <div>

                      <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Service Needed</label>

                      <select 
required
value={formState.service}
onChange={(e) => setFormState({...formState, service: e.target.value})}
className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] outline-none transition-all"
>
<option value="" disabled>Select Service Category</option>
<option value="website-building">Website Building / Development</option>
<option value="ai-automations">AI Automations</option>
<option value="ai-voice-sales">AI Voice Agents &amp; Sales</option>
<option value="performance-marketing">Performance Marketing</option>
<option value="geo">Generative Engine Optimization (GEO)</option>
<option value="seo">Search Engine Optimization (SEO)</option>
<option value="aeo">Answer Engine Optimization (AEO)</option>
<option value="influencer-pr">Influencer Marketing &amp; PR</option>
<option value="social-marketing">Social Media Marketing</option>
<option value="google-meta-ads">Google / Meta Ads</option>
<option value="gmb">Google My Business</option>
<option value="brand-building">Brand Building &amp; Identity</option>
<option value="video-motion">Video Editing &amp; Motion Graphics</option>
<option value="graphic-design">Graphic Design</option>
<option value="content-marketing">Content Marketing</option>
<option value="copywriting">Copywriting</option>
<option value="web-design-architecture">Website Designing &amp; Custom Architecture</option>
<option value="digital-strategy">Digital Strategy Consulting</option>
<option value="custom">Other: Custom Hybrid Bundle</option>
</select>

                    </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>

                      <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Interested Bundle</label>

                      <select 

                        value={formState.bundle}

                        onChange={(e) => setFormState({...formState, bundle: e.target.value})}

                        className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] outline-none transition-all"



                      >

                        <option value="">Select Bundle (Optional)</option>

                        {availableBundles.map((bundleName, i) => (

                          <option key={i} value={bundleName}>{bundleName}</option>

                        ))}

                      </select>

                    </div>

                    <div>

                      <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Budget (Monthly)</label>

                      <select 

                        value={formState.budget}

                        onChange={(e) => setFormState({...formState, budget: e.target.value})}

                        className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] outline-none transition-all"

                      >

                        <option value="" disabled>Select Range</option>

                        <option value="low">Under ₹20k</option>

                        <option value="mid">₹20k - ₹1L</option>

                        <option value="high">₹1L+</option>

                      </select>

                    </div>

                  </div>

                  <div>

                    <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Message</label>

                    <textarea 

                      required 

                      rows="4"

                      value={formState.message}

                      onChange={(e) => setFormState({...formState, message: e.target.value})}

                      className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] outline-none transition-all placeholder-slate-600"

                      placeholder="Tell us about your project goals..."

                    ></textarea>

                  </div>

                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-cyan-900/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">

                    Send Message <Send size={20} />

                  </button>

                </form>

                ) : (

                  <div className="flex flex-col items-center justify-center py-10 text-center animate-in zoom-in duration-500">

                    <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 border-2 border-green-500/50">

                      <CheckCircle size={40} />

                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>

                    <p className="text-slate-300">Thanks for reaching out! We'll get back to you on WhatsApp shortly.</p>

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>

    );

  };

const CustomServiceSelector = ({ mode, navigateToContact, currencySymbol }) => {

const serviceCategories = [
  {
    category: "Website Building / Development",
    items: [
      { name: "Static Website Setup", marketPriceIN: 10000, priceIN: 4999, marketPriceGL: 299, priceGL: 149, id: "wb_item1" },
      { name: "Dynamic Website Engine", marketPriceIN: 25000, priceIN: 12000, marketPriceGL: 699, priceGL: 349, id: "wb_item2" },
      { name: "Business / Corporate Page", marketPriceIN: 35000, priceIN: 15000, marketPriceGL: 899, priceGL: 449, id: "wb_item3" },
      { name: "E-commerce Shopping Setup", marketPriceIN: 60000, priceIN: 25000, marketPriceGL: 1499, priceGL: 699, id: "wb_item4" },
      { name: "Portfolio Identity Website", marketPriceIN: 15000, priceIN: 7000, marketPriceGL: 399, priceGL: 199, id: "wb_item5" },
      { name: "Personal Hub / Blog Site", marketPriceIN: 12000, priceIN: 6000, marketPriceGL: 349, priceGL: 179, id: "wb_item6" },
      { name: "News / Media Platform", marketPriceIN: 40000, priceIN: 18000, marketPriceGL: 999, priceGL: 499, id: "wb_item7" },
      { name: "Educational / LMS Build", marketPriceIN: 80000, priceIN: 35000, marketPriceGL: 1800, priceGL: 899, id: "wb_item8" },
      { name: "Sleek Custom Web Application", marketPriceIN: 120000, priceIN: 45000, marketPriceGL: 2500, priceGL: 1200, id: "wb_item9" },
      { name: "Social Networking Platform", marketPriceIN: 250000, priceIN: 80000, marketPriceGL: 4500, priceGL: 1999, id: "wb_item10" },
      { name: "Interactive Community Hub", marketPriceIN: 40000, priceIN: 15000, marketPriceGL: 899, priceGL: 399, id: "wb_item11" },
      { name: "Landing Page Lead Capture", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 299, priceGL: 129, id: "wb_item12" }
    ]
  },
  {
    category: "AI Automations",
    items: [
      { name: "Zapier / Make Workspace Linking", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 239, priceGL: 109, id: "auto_item1" },
      { name: "Instant Lead Auto-Reply Loop", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 180, priceGL: 79, id: "auto_item2" },
      { name: "Google Sheets Auto Data-Logging", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 140, priceGL: 65, id: "auto_item3" },
      { name: "WhatsApp Business Automation Setup", marketPriceIN: 10000, priceIN: 4499, marketPriceGL: 299, priceGL: 139, id: "auto_item4" },
      { name: "Automated Email Drip Sequences", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 259, priceGL: 119, id: "auto_item5" },
      { name: "CRM Contact Sync & Pipeline Tags", marketPriceIN: 12000, priceIN: 4999, marketPriceGL: 359, priceGL: 169, id: "auto_item6" },
      { name: "Automated Task Reminders Bot", marketPriceIN: 4000, priceIN: 1499, marketPriceGL: 110, priceGL: 49, id: "auto_item7" },
      { name: "Inquiry Sorting & Lead Scoring", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "auto_item8" },
      { name: "Invoice Generation Automation", marketPriceIN: 5000, priceIN: 1800, marketPriceGL: 130, priceGL: 55, id: "auto_item9" },
      { name: "Social Post Scheduler Linking", marketPriceIN: 6000, priceIN: 2200, marketPriceGL: 150, priceGL: 69, id: "auto_item10" },
      { name: "Customer Intake Form Auto-Flow", marketPriceIN: 5500, priceIN: 1999, marketPriceGL: 145, priceGL: 59, id: "auto_item11" },
      { name: "AI Document Archive Organizers", marketPriceIN: 8500, priceIN: 3800, marketPriceGL: 240, priceGL: 115, id: "auto_item12" }
    ]
  },
  {
    category: "AI Voice Agents & Sales",
    items: [
      { name: "Inbound Call Automated Support", marketPriceIN: 25000, priceIN: 11999, marketPriceGL: 699, priceGL: 349, id: "voice_item1" },
      { name: "24/7 Outbound Scheduling Agent", marketPriceIN: 12000, priceIN: 5999, marketPriceGL: 349, priceGL: 179, id: "voice_item2" },
      { name: "Calendar Booking Voice Integration", marketPriceIN: 8000, priceIN: 3999, marketPriceGL: 249, priceGL: 119, id: "voice_item3" },
      { name: "Multi-Language Voice Setups", marketPriceIN: 15000, priceIN: 6999, marketPriceGL: 450, priceGL: 199, id: "voice_item4" },
      { name: "Natural Dialect Call Scripting", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 180, priceGL: 79, id: "voice_item5" },
      { name: "Real-Time CRM Audio Data Logs", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "voice_item6" },
      { name: "Missed Call Auto-Callback Setup", marketPriceIN: 9000, priceIN: 3800, marketPriceGL: 260, priceGL: 115, id: "voice_item7" },
      { name: "Customer Qualification Bot Paths", marketPriceIN: 11000, priceIN: 4499, marketPriceGL: 320, priceGL: 139, id: "voice_item8" },
      { name: "Voice Pricing-Query AI Assistant", marketPriceIN: 10000, priceIN: 4200, marketPriceGL: 290, priceGL: 125, id: "voice_item9" },
      { name: "Autonomous Event Registration Bot", marketPriceIN: 8500, priceIN: 3499, marketPriceGL: 240, priceGL: 109, id: "voice_item10" },
      { name: "Interactive Voice Response Hubs", marketPriceIN: 13000, priceIN: 5200, marketPriceGL: 380, priceGL: 159, id: "voice_item11" },
      { name: "Emergency Alert Call Automator", marketPriceIN: 14000, priceIN: 5500, marketPriceGL: 400, priceGL: 169, id: "voice_item12" }
    ]
  },
  {
    category: "Performance Marketing",
    items: [
      { name: "High-Ticket Client Inbound Funnels", marketPriceIN: 15000, priceIN: 6999, marketPriceGL: 450, priceGL: 199, id: "perf_item1" },
      { name: "B2B Professional Lead Sourcing", marketPriceIN: 14000, priceIN: 6499, marketPriceGL: 399, priceGL: 189, id: "perf_item2" },
      { name: "Google Server-Side Conversion APIs", marketPriceIN: 12000, priceIN: 5499, marketPriceGL: 350, priceGL: 169, id: "perf_item3" },
      { name: "Custom Sales Tracking Dashboards", marketPriceIN: 10000, priceIN: 4499, marketPriceGL: 299, priceGL: 139, id: "perf_item4" },
      { name: "Database Reactivation Ad Drips", marketPriceIN: 11000, priceIN: 4999, marketPriceGL: 320, priceGL: 149, id: "perf_item5" },
      { name: "Advanced ROI Ledger Integration", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 240, priceGL: 109, id: "perf_item6" },
      { name: "Cross-Border Market Expansion Funnel", marketPriceIN: 16000, priceIN: 7499, marketPriceGL: 499, priceGL: 229, id: "perf_item7" },
      { name: "Landing Page A/B Variant Testing", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "perf_item8" },
      { name: "Cookie-less Attribution Auditing", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 260, priceGL: 119, id: "perf_item9" },
      { name: "Customer Acquisition Cost Audits", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 150, priceGL: 59, id: "perf_item10" },
      { name: "Lifetime Value Retention Strategy", marketPriceIN: 6000, priceIN: 2200, marketPriceGL: 170, priceGL: 69, id: "perf_item11" },
      { name: "Weekly Ad Performance Metrics Log", marketPriceIN: 4000, priceIN: 1499, marketPriceGL: 120, priceGL: 49, id: "perf_item12" }
    ]
  },
  {
    category: "Generative Engine Optimization (GEO)",
    items: [
      { name: "ChatGPT Visibility Code Injection", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 199, priceGL: 99, id: "geo_item1" },
      { name: "AI Directory Entity Seeding", marketPriceIN: 10000, priceIN: 4499, marketPriceGL: 249, priceGL: 129, id: "geo_item2" },
      { name: "llm.txt Architecture Manifest Setup", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 199, priceGL: 79, id: "geo_item3" },
      { name: "Perplexity Engine Cite Sourcing", marketPriceIN: 12000, priceIN: 5200, marketPriceGL: 350, priceGL: 149, id: "geo_item4" },
      { name: "Claude & Gemini Data Mapping", marketPriceIN: 11000, priceIN: 4800, marketPriceGL: 320, priceGL: 139, id: "geo_item5" },
      { name: "AI Overview Snippet Restructuring", marketPriceIN: 14000, priceIN: 5999, marketPriceGL: 449, priceGL: 189, id: "geo_item6" },
      { name: "Neural Network Crawl-Validation", marketPriceIN: 9000, priceIN: 3800, marketPriceGL: 270, priceGL: 115, id: "geo_item7" },
      { name: "Structured JSON-LD Data Arrays", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 219, priceGL: 89, id: "geo_item8" },
      { name: "AI Scraper Bot Blocking (Robots)", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 149, priceGL: 59, id: "geo_item9" },
      { name: "Brand Mention Entity Verification", marketPriceIN: 13000, priceIN: 5499, marketPriceGL: 380, priceGL: 169, id: "geo_item10" },
      { name: "AI Summary Recommendation Audits", marketPriceIN: 15000, priceIN: 6200, marketPriceGL: 480, priceGL: 199, id: "geo_item11" },
      { name: "Semantic Term Relevance Audit", marketPriceIN: 6500, priceIN: 2700, marketPriceGL: 180, priceGL: 79, id: "geo_item12" }
    ]
  },
  {
    category: "Search Engine Optimization (SEO)",
    items: [
      { name: "Google Page 1 Ranking Optimization", marketPriceIN: 12000, priceIN: 4999, marketPriceGL: 349, priceGL: 169, id: "seo_item1" },
      { name: "Website Code-Error Cleanups", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 249, priceGL: 119, id: "seo_item2" },
      { name: "Front-Page Featured Snippet Setup", marketPriceIN: 10000, priceIN: 4200, marketPriceGL: 299, priceGL: 139, id: "seo_item3" },
      { name: "Trusted Website Backlink Building", marketPriceIN: 15000, priceIN: 6500, marketPriceGL: 450, priceGL: 199, id: "seo_item4" },
      { name: "Competitor Traffic Source Mapping", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 180, priceGL: 79, id: "seo_item5" },
      { name: "Organic Search Trend Analysis", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 150, priceGL: 65, id: "seo_item6" },
      { name: "Content Pillar Spacing Plans", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "seo_item7" },
      { name: "Algorithm Drop Protection Clean", marketPriceIN: 11000, priceIN: 4500, marketPriceGL: 320, priceGL: 149, id: "seo_item8" },
      { name: "Broken Web URL Redirection Fixes", marketPriceIN: 4000, priceIN: 1499, marketPriceGL: 110, priceGL: 49, id: "seo_item9" },
      { name: "Image Compression Alt Text Updates", marketPriceIN: 3000, priceIN: 999, marketPriceGL: 89, priceGL: 35, id: "seo_item10" },
      { name: "Meta Descriptions Styling Logs", marketPriceIN: 3500, priceIN: 1200, marketPriceGL: 95, priceGL: 39, id: "seo_item11" },
      { name: "Monthly Search Analytics Reporting", marketPriceIN: 5500, priceIN: 1800, marketPriceGL: 140, priceGL: 55, id: "seo_item12" }
    ]
  },
  {
    category: "Answer Engine Optimization (AEO)",
    items: [
      { name: "Mobile Voice Search Formatting", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 279, priceGL: 129, id: "aeo_item1" },
      { name: "Conversational FAQ Schema Maps", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 219, priceGL: 99, id: "aeo_item2" },
      { name: "Speakable Property Code Blocks", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 149, priceGL: 69, id: "aeo_item3" },
      { name: "Alexa Spoken Recommendation Links", marketPriceIN: 11000, priceIN: 4500, marketPriceGL: 320, priceGL: 149, id: "aeo_item4" },
      { name: "Siri Definitve Answer Matching", marketPriceIN: 10000, priceIN: 4200, marketPriceGL: 299, priceGL: 139, id: "aeo_item5" },
      { name: "Google Assistant Phrase Syncing", marketPriceIN: 8500, priceIN: 3500, marketPriceGL: 250, priceGL: 115, id: "aeo_item6" },
      { name: "Natural Dialect Text Alignments", marketPriceIN: 6000, priceIN: 2200, marketPriceGL: 170, priceGL: 75, id: "aeo_item7" },
      { name: "Direct Q&A Block Layout Updates", marketPriceIN: 4500, priceIN: 1800, marketPriceGL: 135, priceGL: 59, id: "aeo_item8" },
      { name: "Home Speaker Audio Index Audits", marketPriceIN: 13000, priceIN: 5499, marketPriceGL: 380, priceGL: 169, id: "aeo_item9" },
      { name: "Voice Intent Query Seeding Plans", marketPriceIN: 8000, priceIN: 3200, marketPriceGL: 230, priceGL: 99, id: "aeo_item10" },
      { name: "Structured Database Answer Keys", marketPriceIN: 9500, priceIN: 3800, marketPriceGL: 280, priceGL: 119, id: "aeo_item11" },
      { name: "Audio Snippet Verification Logs", marketPriceIN: 4000, priceIN: 1499, marketPriceGL: 110, priceGL: 45, id: "aeo_item12" }
    ]
  },
  {
    category: "Influencer Marketing & PR",
    items: [
      { name: "Local Creator Campaign Outreach", marketPriceIN: 12000, priceIN: 5499, marketPriceGL: 350, priceGL: 169, id: "inf_item1" },
      { name: "News Media Article Distribution", marketPriceIN: 15000, priceIN: 6999, marketPriceGL: 450, priceGL: 199, id: "inf_item2" },
      { name: "Brand Trust Sourcing Profiles", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 249, priceGL: 109, id: "inf_item3" },
      { name: "Product Placement Coordination", marketPriceIN: 10000, priceIN: 4500, marketPriceGL: 299, priceGL: 139, id: "inf_item4" },
      { name: "Micro-Influencer Pack Retainers", marketPriceIN: 11000, priceIN: 4999, marketPriceGL: 320, priceGL: 149, id: "inf_item5" },
      { name: "Public Press Release Drafts", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "inf_item6" },
      { name: "Media Pitch Kit Publications", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 260, priceGL: 119, id: "inf_item7" },
      { name: "Social Review Gathering Tracks", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 150, priceGL: 59, id: "inf_item8" },
      { name: "Creator Agreement Term Audits", marketPriceIN: 4000, priceIN: 1499, marketPriceGL: 120, priceGL: 49, id: "inf_item9" },
      { name: "Influencer Content Multipliers", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 180, priceGL: 79, id: "inf_item10" },
      { name: "Brand Ambassador Network Plan", marketPriceIN: 13000, priceIN: 5200, marketPriceGL: 380, priceGL: 159, id: "inf_item11" },
      { name: "Campaign Reach Analytics Tracker", marketPriceIN: 4500, priceIN: 1799, marketPriceGL: 130, priceGL: 55, id: "inf_item12" }
    ]
  },
  {
    category: "Social Media Marketing",
    items: [
      { name: "Feed Page Custom Upload Schedule", marketPriceIN: 8000, priceIN: 3999, marketPriceGL: 249, priceGL: 119, id: "smm_item1" },
      { name: "Audience Comments Auto-Reply", marketPriceIN: 5000, priceIN: 2200, marketPriceGL: 149, priceGL: 69, id: "smm_item2" },
      { name: "Viral Hashtag Research Sweeps", marketPriceIN: 3000, priceIN: 1200, marketPriceGL: 89, priceGL: 39, id: "smm_item3" },
      { name: "Instagram Bio Layout Makeovers", marketPriceIN: 4000, priceIN: 1500, marketPriceGL: 99, priceGL: 45, id: "smm_item4" },
      { name: "Monthly Feed Grid Visual Plans", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 179, priceGL: 79, id: "smm_item5" },
      { name: "Facebook Community Updates", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "smm_item6" },
      { name: "Profile Link Optimization Tree", marketPriceIN: 3500, priceIN: 1400, marketPriceGL: 95, priceGL: 45, id: "smm_item7" },
      { name: "Story Interaction Poll Packs", marketPriceIN: 4500, priceIN: 1800, marketPriceGL: 129, priceGL: 55, id: "smm_item8" },
      { name: "Competitor Handle Monitoring Logs", marketPriceIN: 5500, priceIN: 1999, marketPriceGL: 150, priceGL: 65, id: "smm_item9" },
      { name: "Social Content Performance Audit", marketPriceIN: 5000, priceIN: 1799, marketPriceGL: 139, priceGL: 59, id: "smm_item10" },
      { name: "Multi-Platform Asset Synchronization", marketPriceIN: 7500, priceIN: 3200, marketPriceGL: 220, priceGL: 99, id: "smm_item11" },
      { name: "Weekly Engagement Activity Reports", marketPriceIN: 2500, priceIN: 999, marketPriceGL: 79, priceGL: 29, id: "smm_item12" }
    ]
  },
  {
    category: "Google / Meta Ads",
    items: [
      { name: "Facebook Lead Capture Setup", marketPriceIN: 10000, priceIN: 4499, marketPriceGL: 299, priceGL: 139, id: "gma_item1" },
      { name: "Instagram Feed Ad Placements", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 239, priceGL: 119, id: "gma_item2" },
      { name: "Google Paid Search Clicks Campaign", marketPriceIN: 12000, priceIN: 5499, marketPriceGL: 349, priceGL: 169, id: "gma_item3" },
      { name: "Meta Pixel Integration Verification", marketPriceIN: 4000, priceIN: 1800, marketPriceGL: 119, priceGL: 55, id: "gma_item4" },
      { name: "Ad Spend Protection Safe Guardrails", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "gma_item5" },
      { name: "Google Performance Max Syncs", marketPriceIN: 13000, priceIN: 5999, marketPriceGL: 380, priceGL: 179, id: "gma_item6" },
      { name: "Retargeting Past Visitor Ad Setups", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 260, priceGL: 115, id: "gma_item7" },
      { name: "Ad Variant Performance Frameworks", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 180, priceGL: 79, id: "gma_item8" },
      { name: "Target Buyer Location Adjustments", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 150, priceGL: 65, id: "gma_item9" },
      { name: "Negative Keyword Filter Updates", marketPriceIN: 4500, priceIN: 1499, marketPriceGL: 130, priceGL: 49, id: "gma_item10" },
      { name: "Ad Account Diagnostics Health Review", marketPriceIN: 5500, priceIN: 2200, marketPriceGL: 160, priceGL: 69, id: "gma_item11" },
      { name: "Monthly Ad Budget Allocation Logs", marketPriceIN: 3000, priceIN: 999, marketPriceGL: 90, priceGL: 35, id: "gma_item12" }
    ]
  },
  {
    category: "Google My Business",
    items: [
      { name: "Google Map Profile Setup", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 179, priceGL: 79, id: "gmb_item1" },
      { name: "Local Street Ranking Optimization", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 219, priceGL: 99, id: "gmb_item2" },
      { name: "Review Sourcing Automation Loops", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 149, priceGL: 69, id: "gmb_item3" },
      { name: "Branch Address Location Verification", marketPriceIN: 4000, priceIN: 1499, marketPriceGL: 120, priceGL: 49, id: "gmb_item4" },
      { name: "Transit Corridor Regional Syncing", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 249, priceGL: 115, id: "gmb_item5" },
      { name: "Local Maps Intent Keyword Audits", marketPriceIN: 4500, priceIN: 1800, marketPriceGL: 129, priceGL: 59, id: "gmb_item6" },
      { name: "Duplicate Profile Merge/Cleanups", marketPriceIN: 5500, priceIN: 2200, marketPriceGL: 139, priceGL: 69, id: "gmb_item7" },
      { name: "Profile Image Tagging Geocodes", marketPriceIN: 3500, priceIN: 1200, marketPriceGL: 99, priceGL: 39, id: "gmb_item8" },
      { name: "Local Listing Citations Bundles", marketPriceIN: 7500, priceIN: 3200, marketPriceGL: 230, priceGL: 105, id: "gmb_item9" },
      { name: "Business Hours & Event Updates", marketPriceIN: 2000, priceIN: 799, marketPriceGL: 59, priceGL: 25, id: "gmb_item10" },
      { name: "Map View Search Metrics Log", marketPriceIN: 3000, priceIN: 999, marketPriceGL: 89, priceGL: 35, id: "gmb_item11" },
      { name: "Q&A Field Content Preloading", marketPriceIN: 2500, priceIN: 899, marketPriceGL: 75, priceGL: 29, id: "gmb_item12" }
    ]
  },
  {
    category: "Brand Building & Identity",
    items: [
      { name: "Corporate Style Guide Blueprints", marketPriceIN: 12000, priceIN: 5499, marketPriceGL: 399, priceGL: 179, id: "bbi_item1" },
      { name: "Brand Voice Messaging Guidelines", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 179, priceGL: 79, id: "bbi_item2" },
      { name: "Customer Trust Building Signals", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 149, priceGL: 65, id: "bbi_item3" },
      { name: "Unified Brand Asset Blueprints", marketPriceIN: 10000, priceIN: 4500, marketPriceGL: 299, priceGL: 149, id: "bbi_item4" },
      { name: "Market Value Positioning Strategy", marketPriceIN: 14000, priceIN: 5999, marketPriceGL: 450, priceGL: 199, id: "bbi_item5" },
      { name: "Company Motto & Tagline Matrices", marketPriceIN: 4000, priceIN: 1499, marketPriceGL: 110, priceGL: 45, id: "bbi_item6" },
      { name: "Digital Storefront Layout Uniformity", marketPriceIN: 8500, priceIN: 3800, marketPriceGL: 250, priceGL: 119, id: "bbi_item7" },
      { name: "Credibility Case Study Structures", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 260, priceGL: 125, id: "bbi_item8" },
      { name: "Social Handles Aesthetic Matching", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 219, priceGL: 89, id: "bbi_item9" },
      { name: "Executive Profile Authority Sync", marketPriceIN: 11000, priceIN: 4800, marketPriceGL: 320, priceGL: 139, id: "bbi_item10" },
      { name: "Brand Presentation Templates Set", marketPriceIN: 6500, priceIN: 2700, marketPriceGL: 180, priceGL: 85, id: "bbi_item11" },
      { name: "Logo Variations Usage Rule Sheets", marketPriceIN: 3000, priceIN: 999, marketPriceGL: 85, priceGL: 29, id: "bbi_item12" }
    ]
  },
  {
    category: "Video Editing & Motion Graphics",
    items: [
      { name: "Mobile Short-Reels Video Clipping", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 279, priceGL: 129, id: "vem_item1" },
      { name: "Dynamic Captions Subtitle Overlays", marketPriceIN: 3000, priceIN: 1200, marketPriceGL: 99, priceGL: 45, id: "vem_item2" },
      { name: "Visual Scroll-Stopper Graphic Hooks", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 149, priceGL: 65, id: "vem_item3" },
      { name: "Kinetic Video Title Animations", marketPriceIN: 4000, priceIN: 1500, marketPriceGL: 129, priceGL: 49, id: "vem_item4" },
      { name: "YouTube Shorts Production Assembly", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 180, priceGL: 79, id: "vem_item5" },
      { name: "Cinematic Product Color Grading", marketPriceIN: 4500, priceIN: 1800, marketPriceGL: 120, priceGL: 59, id: "vem_item6" },
      { name: "Audio Sound Effect Track Mixes", marketPriceIN: 3500, priceIN: 1400, marketPriceGL: 90, priceGL: 39, id: "vem_item7" },
      { name: "Green Screen Background Replacements", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "vem_item8" },
      { name: "Animated Social Lower-Third Badges", marketPriceIN: 2500, priceIN: 999, marketPriceGL: 69, priceGL: 29, id: "vem_item9" },
      { name: "Video Logo Intro Animation Loops", marketPriceIN: 5500, priceIN: 2200, marketPriceGL: 160, priceGL: 69, id: "vem_item10" },
      { name: "Multi-Clip Social Promo Montages", marketPriceIN: 10000, priceIN: 4500, marketPriceGL: 299, priceGL: 139, id: "vem_item11" },
      { name: "Video Format Screen Scaling Fixes", marketPriceIN: 2000, priceIN: 799, marketPriceGL: 50, priceGL: 19, id: "vem_item12" }
    ]
  },
  {
    category: "Graphic Design",
    items: [
      { name: "Social Feed Visual Grid Templates", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 179, priceGL: 79, id: "gd_item1" },
      { name: "Commercial Paid Ad Image Layouts", marketPriceIN: 4000, priceIN: 1800, marketPriceGL: 119, priceGL: 55, id: "gd_item2" },
      { name: "Marketing Banner Creative Graphics", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 149, priceGL: 65, id: "gd_item3" },
      { name: "Custom Deck Presentation Slides", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 95, id: "gd_item4" },
      { name: "Print Flyer Layout Asset Files", marketPriceIN: 3500, priceIN: 1400, marketPriceGL: 95, priceGL: 45, id: "gd_item5" },
      { name: "Logo Concept Vector Rendering", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 249, priceGL: 119, id: "gd_item6" },
      { name: "Business Card Stationery Designs", marketPriceIN: 2000, priceIN: 899, marketPriceGL: 59, priceGL: 25, id: "gd_item7" },
      { name: "YouTube Channel Cover Artworks", marketPriceIN: 3000, priceIN: 1200, marketPriceGL: 89, priceGL: 39, id: "gd_item8" },
      { name: "Digital Coupon Voucher Graphics", marketPriceIN: 2500, priceIN: 999, marketPriceGL: 79, priceGL: 29, id: "gd_item9" },
      { name: "Infographic Informative Charts", marketPriceIN: 7500, priceIN: 3200, marketPriceGL: 220, priceGL: 99, id: "gd_item10" },
      { name: "Email Newsletter Layout Header Art", marketPriceIN: 4500, priceIN: 1500, marketPriceGL: 130, priceGL: 49, id: "gd_item11" },
      { name: "E-commerce Banner Display Slides", marketPriceIN: 5500, priceIN: 2200, marketPriceGL: 160, priceGL: 69, id: "gd_item12" }
    ]
  },
  {
    category: "Content Marketing",
    items: [
      { name: "Informative Problem-Solving Blogs", marketPriceIN: 3000, priceIN: 1499, marketPriceGL: 89, priceGL: 45, id: "cm_item1" },
      { name: "Customer Learning Resource Hubs", marketPriceIN: 10000, priceIN: 4500, marketPriceGL: 299, priceGL: 139, id: "cm_item2" },
      { name: "Downloadable PDF Lead Magnets", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 149, priceGL: 65, id: "cm_item3" },
      { name: "Email Article Newsletter Campaigns", marketPriceIN: 4000, priceIN: 1500, marketPriceGL: 119, priceGL: 49, id: "cm_item4" },
      { name: "Organic View Attraction Roadmap", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "cm_item5" },
      { name: "LinkedIn ghostwritten Article Blocks", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 179, priceGL: 79, id: "cm_item6" },
      { name: "Helpful Advice Column Libraries", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 249, priceGL: 109, id: "cm_item7" },
      { name: "Product Application Guide Modules", marketPriceIN: 5500, priceIN: 2200, marketPriceGL: 160, priceGL: 69, id: "cm_item8" },
      { name: "Case Study Story Configurations", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 260, priceGL: 125, id: "cm_item9" },
      { name: "Content Cluster Keyword Groupings", marketPriceIN: 6500, priceIN: 2700, marketPriceGL: 180, priceGL: 79, id: "cm_item10" },
      { name: "Social Content Caption Scripting", marketPriceIN: 3500, priceIN: 1200, marketPriceGL: 95, priceGL: 39, id: "cm_item11" },
      { name: "Quarterly Publishing Flow Charts", marketPriceIN: 2000, priceIN: 799, marketPriceGL: 59, priceGL: 25, id: "cm_item12" }
    ]
  },
  {
    category: "Copywriting",
    items: [
      { name: "Landing Page Core Description Copy", marketPriceIN: 6000, priceIN: 2999, marketPriceGL: 179, priceGL: 89, id: "cw_item1" },
      { name: "High-Converting Paid Ad Captions", marketPriceIN: 4000, priceIN: 1800, marketPriceGL: 119, priceGL: 55, id: "cw_item2" },
      { name: "Sales Page Headline Title Drafts", marketPriceIN: 3000, priceIN: 1200, marketPriceGL: 89, priceGL: 39, id: "cw_item3" },
      { name: "Promotional Sales Email Sequences", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 149, priceGL: 65, id: "cw_item4" },
      { name: "Clear Problem-Focused Copy Lines", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "cw_item5" },
      { name: "Product Feature Benefit Explanations", marketPriceIN: 4500, priceIN: 1500, marketPriceGL: 130, priceGL: 49, id: "cw_item6" },
      { name: "Customer Hesitation Clearing Texts", marketPriceIN: 5500, priceIN: 2200, marketPriceGL: 160, priceGL: 69, id: "cw_item7" },
      { name: "Frictionless Checkout Cart Prompts", marketPriceIN: 3500, priceIN: 1400, marketPriceGL: 95, priceGL: 45, id: "cw_item8" },
      { name: "SMS Update Short Notification Lines", marketPriceIN: 2000, priceIN: 799, marketPriceGL: 59, priceGL: 25, id: "cw_item9" },
      { name: "Call To Action Booking Copy Hooks", marketPriceIN: 2500, priceIN: 999, marketPriceGL: 79, priceGL: 29, id: "cw_item10" },
      { name: "Executive Profile Authority Messaging", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 249, priceGL: 119, id: "cw_item11" },
      { name: "Brand Voice Conversion Optimization", marketPriceIN: 7500, priceIN: 3200, marketPriceGL: 220, priceGL: 99, id: "cw_item12" }
    ]
  },
  {
    category: "Website Designing & Custom Architecture",
    items: [
      { name: "Figma Page Vector Screen Drafts", marketPriceIN: 16000, priceIN: 7999, marketPriceGL: 499, priceGL: 249, id: "wda_item1" },
      { name: "User Journey Screen Spacing Maps", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 249, priceGL: 119, id: "wda_item2" },
      { name: "High-Retention Visual Flow Outlines", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 95, id: "wda_item3" },
      { name: "Frictionless Click Button Placements", marketPriceIN: 4000, priceIN: 1800, marketPriceGL: 119, priceGL: 59, id: "wda_item4" },
      { name: "Phone App System Interface Kit", marketPriceIN: 15000, priceIN: 6999, marketPriceGL: 450, priceGL: 199, id: "wda_item5" },
      { name: "Interactive Wireframe Mockup Sets", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 179, priceGL: 79, id: "wda_item6" },
      { name: "Typography Scale Font Readability Fix", marketPriceIN: 3000, priceIN: 1200, marketPriceGL: 89, priceGL: 39, id: "wda_item7" },
      { name: "Brand Color Scheme Spacing Rules", marketPriceIN: 2500, priceIN: 999, marketPriceGL: 79, priceGL: 29, id: "wda_item8" },
      { name: "Navigation Menu Layout Redesigns", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 149, priceGL: 69, id: "wda_item9" },
      { name: "Creative Icon Elements Deployments", marketPriceIN: 3500, priceIN: 1400, marketPriceGL: 95, priceGL: 45, id: "wda_item10" },
      { name: "Conversion Rate Interface Auditing", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 280, priceGL: 129, id: "wda_item11" },
      { name: "Desktop vs Mobile Frame Rescaling", marketPriceIN: 5500, priceIN: 2200, marketPriceGL: 160, priceGL: 69, id: "wda_item12" }
    ]
  },
  {
    category: "Digital Strategy Consulting",
    items: [
      { name: "Structural Online Business Audit", marketPriceIN: 10000, priceIN: 4499, marketPriceGL: 299, priceGL: 139, id: "dsc_item1" },
      { name: "Competitor Action Matrix Report", marketPriceIN: 8000, priceIN: 3499, marketPriceGL: 239, priceGL: 119, id: "dsc_item2" },
      { name: "Marketing Budget Waste Reduction Plan", marketPriceIN: 6000, priceIN: 2499, marketPriceGL: 179, priceGL: 79, id: "dsc_item3" },
      { name: "30-Day Launch Operational Blueprints", marketPriceIN: 11000, priceIN: 4999, marketPriceGL: 320, priceGL: 149, id: "dsc_item4" },
      { name: "1-on-1 Strategic Progress Coaching", marketPriceIN: 12000, priceIN: 5499, marketPriceGL: 359, priceGL: 169, id: "dsc_item5" },
      { name: "Customer Acquisition Track Analysis", marketPriceIN: 7000, priceIN: 2999, marketPriceGL: 199, priceGL: 89, id: "dsc_item6" },
      { name: "Funnel Drop-off Diagnostic Report", marketPriceIN: 9000, priceIN: 3999, marketPriceGL: 260, priceGL: 125, id: "dsc_item7" },
      { name: "Target Audience Intent Profiling", marketPriceIN: 5000, priceIN: 1999, marketPriceGL: 149, priceGL: 65, id: "dsc_item8" },
      { name: "Brand Message Relevance Audit", marketPriceIN: 5500, priceIN: 2200, marketPriceGL: 160, priceGL: 69, id: "dsc_item9" },
      { name: "Multi-Location Scaling Strategy Sheet", marketPriceIN: 13000, priceIN: 5200, marketPriceGL: 380, priceGL: 159, id: "dsc_item10" },
      { name: "Tech Stack Efficiency Assessment", marketPriceIN: 7500, priceIN: 2800, marketPriceGL: 220, priceGL: 99, id: "dsc_item11" },
      { name: "Lead Follow-up Timing Correction Logs", marketPriceIN: 4000, priceIN: 1499, marketPriceGL: 110, priceGL: 49, id: "dsc_item12" }
    ]
  }
];

  const [selected, setSelected] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleService = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const calculateTotal = () => {
    let total = 0;
    serviceCategories.forEach(cat => {
      cat.items.forEach(item => {
        if (selected.includes(item.id)) {
          total += (mode === 'india' ? item.priceIN : item.priceGL);
        }
      });
    });
    return total;
  };
  
    return (
    <div className="mt-20 w-full max-w-7xl mx-auto p-6 md:p-10 rounded-3xl bg-slate-900/60 border border-slate-700 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h3 className="text-3xl font-extrabold text-white">Build Your Custom Bundle</h3>
          <p className="text-slate-400">Click a category to expand and select specific tasks.</p>
        </div>
        <button onClick={() => setSelected([])} className="text-xs font-bold text-slate-500 hover:text-red-400 flex items-center gap-1 uppercase tracking-widest transition-colors"><X size={14}/> Reset Selection</button>
      </div>

      {/* Main categories container scaled to match layout bounds */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/40 flex flex-col w-full">
            <button 
              onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
              className="w-full p-5 flex justify-between items-center hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">{idx + 1}</div>
                <span className="text-xl font-bold text-white">{cat.category}</span>
              </div>
              {openCategory === idx ? <Minus className="text-slate-500" /> : <Plus className="text-cyan-400" />}
            </button>

            {openCategory === idx && (
              /* Upgraded to fully responsive grid so items have maximum breathing room */
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 bg-slate-950/50 border-t border-slate-800 animate-in slide-in-from-top-2 duration-300 w-full">
                {cat.items.map(item => {
                  const mPrice = mode === 'india' ? item.marketPriceIN : item.marketPriceGL;
                  const sPrice = mode === 'india' ? item.priceIN : item.priceGL;

                  return (
                    <div 
                      key={item.id}
                      onClick={() => toggleService(item.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex justify-between items-center ${selected.includes(item.id) ? 'border-cyan-400 bg-cyan-400/10' : 'border-slate-800 bg-slate-900/80 hover:border-slate-600'}`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-bold text-sm leading-tight mb-2 break-words">{item.name}</div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[10px] text-slate-500 line-through decoration-red-500/50">
                            Market: {currencySymbol}{mPrice.toLocaleString()}
                          </span>
                          <span className="text-cyan-400 font-mono text-xs font-bold">
                            Rate: {currencySymbol}{sPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ml-2 flex-shrink-0 ${selected.includes(item.id) ? 'bg-cyan-500 border-cyan-500' : 'border-slate-600'}`}>
                        {selected.includes(item.id) && <Check size={12} className="text-white" strokeWidth={4} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-900/30 border border-cyan-500/30 flex flex-col md:flex-row justify-between items-center gap-8 w-full">
        <div className="text-center md:text-left">
          <div className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-1">Your Custom Selection</div>
          <div className="text-5xl font-black text-white">{currencySymbol}{calculateTotal().toLocaleString()}</div>
          <div className="text-slate-400 text-sm mt-2">{selected.length} services selected</div>
        </div>
        <button 
          onClick={() => {
            const total = calculateTotal();
            const serviceCount = selected.length;
            const message = `Hi Digital Media Bombay! 🛠️ I've built a *Custom Bundle* with ${serviceCount} services. \n\n*Total Estimated Price:* ${currencySymbol}${total.toLocaleString()}\n\nI'd like to discuss the execution!`;
            window.open(`https://wa.me/918850739933?text=${encodeURIComponent(message)}`, '_blank');
          }}
          className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-black text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105 transition-transform flex items-center justify-center gap-3"
        >
          Confirm & Get Quote <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

function Service3DRing({ services }) {

    const [rotation, setRotation] = useState(0);

    const animationRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);

    const cardWidth = 400;

    const count = services.length;

    const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / count)) + 220;



    useEffect(() => {

      const rotate = () => {

        if (!isHovered) {

          setRotation(prev => prev - 0.1);

        }

        animationRef.current = requestAnimationFrame(rotate);

      };

      animationRef.current = requestAnimationFrame(rotate);

      return () => cancelAnimationFrame(animationRef.current);

    }, [isHovered]);



    const handleManualRotate = (direction) => {

      const angle = 360 / count;

      setRotation(prev => prev + (direction === 'next' ? -angle : angle));

    };



    return (

    <div

      className="relative w-full h-[780px] flex justify-center items-center overflow-hidden perspective-[2000px] group"

      onMouseEnter={() => setIsHovered(true)}

        onMouseLeave={() => setIsHovered(false)}

      >

        <button onClick={() => handleManualRotate('prev')} className="absolute left-10 z-50 bg-slate-900/80 text-cyan-400 p-4 rounded-full border border-slate-700 hover:bg-cyan-500/20 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md hover:scale-110 shadow-lg"><ChevronLeft size={32} /></button>

        <button onClick={() => handleManualRotate('next')} className="absolute right-10 z-50 bg-slate-900/80 text-cyan-400 p-4 rounded-full border border-slate-700 hover:bg-cyan-500/20 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md hover:scale-110 shadow-lg"><ChevronRight size={32} /></button>

        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-[#0a192f] to-transparent z-40 pointer-events-none"></div>

        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#0a192f] to-transparent z-40 pointer-events-none"></div>

        <div className="relative w-full h-full flex justify-center items-center"

          style={{

            transformStyle: 'preserve-3d',

            transform: `translateZ(-1200px) rotateX(-3deg) rotateY(${rotation}deg)`,

            transition: isHovered ? 'transform 0.5s ease-out' : 'none'

          }}

        >

          {services.map((service, i) => {

            const angle = (360 / count) * i;

            return (

              <div

                key={i}

                className="absolute w-[400px] h-[550px] rounded-3xl border-2 border-slate-700 bg-slate-900/40 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col group/card hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300"

                style={{

                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,

                  backfaceVisibility: 'visible'

                }}

              >

                <div className="h-40 relative">

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10"></div>

                  <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-80" />

                  <div className="absolute top-4 left-4 z-20 bg-slate-900/80 p-3 rounded-xl border border-slate-700 text-cyan-400 shadow-lg">

                    {service.icon}

                  </div>

                </div>

                <div className="p-6 flex-grow flex flex-col relative z-20 -mt-10">

                  <h3 className="text-3xl font-extrabold text-white mb-2 leading-tight drop-shadow-md">{service.title}</h3>

                  <p className="text-slate-300 text-sm mb-6 leading-relaxed h-[60px] overflow-hidden">{service.desc}</p>

                  <div className="space-y-3 mb-6 bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 flex-grow">

                    {service.deliverables.slice(0, 4).map((item, idx) => (

                      <div key={idx} className="flex items-start gap-3">

                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>

                        <span className="text-slate-300 text-sm font-medium leading-tight truncate">{item}</span>

                      </div>

                    ))}

                  </div>

                  <button onClick={() => navigateTo('services')} className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/30 transition-all flex items-center justify-center gap-2 group-hover/card:scale-[1.02]">

                    Learn More <ArrowRight size={18} />

                  </button>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    );

  }

const HomePage = ({ onContactClick, currencySymbol }) => (

  <div className="bg-[#0a192f] min-h-screen text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">

    <style>{`

      @keyframes typing {

        from { width: 0 }

        to { width: 100% }

      }

      @keyframes blink {

        from, to { border-color: transparent }

        50% { border-color: #fbbf24; }

      }

      .typewriter-text {

    display: inline-block;

    overflow: hidden;

    white-space: nowrap;

    width: 0; 

    animation: typing 3.5s steps(30, end) forwards; /* Border and Blink removed */

  }

      .scroll-fade-container {

        view-timeline-name: --section-out;

        view-timeline-axis: block;

      }

      .framer-fade-out {

        animation: fadeScaleOut linear forwards;

        animation-timeline: --section-out;

        animation-range: exit 0% exit 100%;

      }

      @keyframes fadeScaleOut {

        to { opacity: 0; transform: scale(0.9) translateY(-50px); filter: blur(10px); }

      }

    `}</style>



    {/* --- STICKY BACKGROUND SECTION (Goes Behind) --- */}

    <div className="scroll-fade-container">

      <section className="sticky top-0 h-screen w-full overflow-hidden z-0 bg-[#0a192f] framer-fade-out">



        {/* Background Video */}

        <div className="absolute inset-0">

          <video autoPlay loop muted playsInline className="w-full h-full object-cover">

            <source src="https://pub-69b480cce20f4cea999cf3796fa83667.r2.dev/heroback.mp4" type="video/mp4" />

          </video>

          <div className="absolute inset-0 bg-[#0a192f]/60 backdrop-blur-[1px]"></div>

        </div>



        {/* Fixed Typewriter Text */}

        <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-4 z-10">

          <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter">

            <span className="typewriter-text">

              DIGITAL MEDIA <span className="text-amber-400">BOMBAY.</span>

            </span>

          </h1>

          <p className="mt-6 text-slate-400 text-lg md:text-xl tracking-widest uppercase font-light animate-pulse">

            Scroll to Explore

          </p>

        </div>

      </section>

    </div>



    {/* --- FIXED VIDEO SECTION (Scrolls Over) --- */}

    <section className="relative z-10 w-full h-screen bg-black overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">

      <div className="w-full h-full">

        <video autoPlay loop muted playsInline className="w-full h-full object-cover">

          <source src="https://pub-69b480cce20f4cea999cf3796fa83667.r2.dev/hero-video.mp4" type="video/mp4" />

        </video>

        <div className="absolute inset-0 bg-black/30"></div>

      </div>

    </section>



    {/* --- REMAINING CONTENT --- */}

    <section className="relative pt-20 pb-32 overflow-hidden z-20 bg-[#0a192f]">

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">

        <video 

      autoPlay 

      loop 

      muted 

      playsInline 

      className="w-full h-full object-cover opacity-50"

    >

      <source src="https://pub-69b480cce20f4cea999cf3796fa83667.r2.dev/aiback.mp4" type="video/mp4" />

    </video>

        <div className="absolute inset-0 bg-[#0a192f]/60"></div>

        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>

        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-cyan-400 text-xs font-semibold uppercase mb-8"><Zap size={14} /> AI-Powered Speed • Human Creativity</div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Mumbai's First <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI-Powered Digital Agency</span></h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">We combine <span className="text-amber-400 font-semibold">Top 1% Human Talent</span> with Advanced AI to deliver 10x results for half the market price.</p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

          <button 
  onClick={() => {
    navigateTo('about');
    setTimeout(() => {
      const architectSection = document.getElementById('architect-section');
      if (architectSection) {
        architectSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }} 
  className="px-8 py-4 font-bold text-white rounded-lg border-2 border-slate-600 hover:border-cyan-400 bg-slate-900/40"
>
  View Portfolio
</button>

          <button onClick={onContactClick} className="px-8 py-4 font-bold text-white rounded-lg border-2 border-slate-600 hover:border-cyan-400 bg-slate-900/40">Book Free Strategy Call</button>

        </div>

      </div>

    </section>



      {/* BRAND SCROLLER */}

      

      {/* ABOUT SECTION */}

      <section id="about" className="py-24 bg-[#050c18] border-b border-slate-800 relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="max-w-3xl mx-auto text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Born in Mumbai. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Built for the World.</span></h2><div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8 rounded-full"></div><p className="text-lg text-slate-300 leading-relaxed mb-6">In the chaotic heart of Mumbai, where ambition meets the Arabian Sea, Digital Media Bombay was born. We saw a gap: global brands were paying Silicon Valley prices for work that Indian talent could execute with more hunger and equal skill.</p><p className="text-lg text-slate-300 leading-relaxed mb-6">We aren't just another agency. We are a cultural bridge. We take the relentless 'jugaad' spirit of India's tech capital—the ability to innovate under pressure—and refine it with world-class, pixel-perfect standards. We believe in <span className="text-white font-bold">Hybrid Intelligence</span>: The raw creativity of Mumbai's top 1% combined with the predictive power of advanced AI.</p><p className="text-lg text-slate-300 leading-relaxed">Our mission is simple: To democratize growth. We provide startups and enterprises with the digital firepower they need to dominate their markets, without the bloated overheads of traditional firms.</p></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

                <div className="relative text-center p-8 rounded-2xl border-2 border-slate-700 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20 bg-slate-900/60 backdrop-blur-xl hover:border-cyan-500/50 shadow-2xl">

                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                    <div className={`absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                    <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080" alt="Speed" className="w-full h-full object-cover opacity-50" /><div className="absolute inset-0 bg-slate-900/80"></div></div><div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div><div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"></div><div className="relative z-20"><div className="w-12 h-12 mx-auto bg-blue-900/50 rounded-full flex items-center justify-center text-cyan-400 mb-4"><Rocket size={24} /></div><h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">Speed First</h3><p className="text-slate-400 text-sm">Campaigns launched in 48 hours, not 4 weeks.</p></div></div>

                <div className="relative text-center p-8 rounded-2xl border-2 border-slate-700 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/20 bg-slate-900/60 backdrop-blur-xl hover:border-amber-500/50 shadow-2xl">

                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                    <div className={`absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                    <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080" alt="Talent" className="w-full h-full object-cover opacity-50" /><div className="absolute inset-0 bg-slate-900/80"></div></div><div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div><div className="absolute top-0 left-0 w-full h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"></div><div className="relative z-20"><div className="w-12 h-12 mx-auto bg-amber-900/20 rounded-full flex items-center justify-center text-amber-400 mb-4"><Award size={24} /></div><h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">Elite Talent</h3><p className="text-slate-400 text-sm">We only hire the top 1% of freelancers.</p></div></div>

                <div className="relative text-center p-8 rounded-2xl border-2 border-slate-700 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-900/20 bg-slate-900/60 backdrop-blur-xl hover:border-pink-500/50 shadow-2xl">

                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-pink-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                    <div className={`absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                    <div className="absolute inset-0 z-0"><img src="siliconvalley.png" alt="Global" className="w-full h-full object-cover opacity-50" /><div className="absolute inset-0 bg-slate-900/80"></div></div><div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div><div className="absolute top-0 left-0 w-full h-1 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"></div><div className="relative z-20"><div className="w-12 h-12 mx-auto bg-pink-900/20 rounded-full flex items-center justify-center text-pink-400 mb-4"><Globe size={24} /></div><h3 className="text-white font-bold text-lg mb-2 group-hover:text-pink-300 transition-colors">Global Standards</h3><p className="text-slate-400 text-sm">We code and design to Silicon Valley standards.</p></div></div>

            </div>

        </div>

      </section>

<BrandScroller />



      {/* WEB DEV SECTION */}

      <section className="py-24 bg-[#050c18] relative border-t border-slate-800 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none"><div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]"></div><div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]"></div></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-16"><span className="text-cyan-400 font-bold tracking-wider uppercase text-xs mb-2 block">Web Development Experts</span><h2 className="text-3xl md:text-5xl font-bold text-white mb-6">We Build More Than Just Websites. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">We Build Digital Assets.</span></h2><p className="text-slate-400 max-w-2xl mx-auto text-lg">Whether you need a lightning-fast landing page or a complex e-commerce empire.</p></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

             <div className="relative border-2 border-slate-700 p-8 rounded-2xl flex gap-6 items-start overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10 hover:border-cyan-500/50 bg-slate-900/60 backdrop-blur-xl">

                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                <div className={`absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                <div className="absolute inset-0 z-0"><img src="ecom.png" alt="Ecom" className="w-full h-full object-cover opacity-50" /><div className="absolute inset-0 bg-slate-900/85"></div></div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

                <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top z-10"></div>

                <div className="bg-blue-900/40 p-4 rounded-xl text-blue-400 group-hover:text-cyan-400 transition-colors relative z-20 flex-shrink-0 backdrop-blur-sm border border-blue-500/20"><ShoppingBag size={32} /></div>

                <div className="relative z-20"><h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">E-Commerce Stores</h3><p className="text-slate-400 text-sm leading-relaxed">High-performance stores built on Shopify or Custom MERN Stack.</p></div>

             </div>

             <div className="relative border-2 border-slate-700 p-8 rounded-2xl flex gap-6 items-start overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10 hover:border-amber-500/50 bg-slate-900/60 backdrop-blur-xl">

                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                <div className={`absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1080" alt="Corporate" className="w-full h-full object-cover opacity-50" /><div className="absolute inset-0 bg-slate-900/85"></div></div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

                <div className="absolute left-0 top-0 h-full w-1 bg-amber-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top z-10"></div>

                <div className="bg-amber-900/40 p-4 rounded-xl text-amber-400 group-hover:text-amber-300 transition-colors relative z-20 flex-shrink-0 backdrop-blur-sm border border-amber-500/20"><Building2 size={32} /></div>

                <div className="relative z-20"><h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">Corporate & Brand Sites</h3><p className="text-slate-400 text-sm leading-relaxed">Establish authority with a sleek, professional digital headquarters.</p></div>

             </div>

             <div className="relative border-2 border-slate-700 p-8 rounded-2xl flex gap-6 items-start overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-900/10 hover:border-pink-500/50 bg-slate-900/60 backdrop-blur-xl">

                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-pink-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                <div className={`absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1080" alt="Landing" className="w-full h-full object-cover opacity-50" /><div className="absolute inset-0 bg-slate-900/85"></div></div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

                <div className="absolute left-0 top-0 h-full w-1 bg-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top z-10"></div>

                <div className="bg-pink-900/40 p-4 rounded-xl text-pink-400 group-hover:text-pink-300 transition-colors relative z-20 flex-shrink-0 backdrop-blur-sm border border-pink-500/20"><MousePointerClick size={32} /></div>

                <div className="relative z-20"><h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">High-Converting Landing Pages</h3><p className="text-slate-400 text-sm leading-relaxed">Single-page sites designed with one goal: Conversion.</p></div>

             </div>

             <div className="relative border-2 border-slate-700 p-8 rounded-2xl flex gap-6 items-start overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10 hover:border-green-500/50 bg-slate-900/60 backdrop-blur-xl">

                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-green-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                <div className={`absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080" alt="App" className="w-full h-full object-cover opacity-50" /><div className="absolute inset-0 bg-slate-900/85"></div></div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

                <div className="absolute left-0 top-0 h-full w-1 bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top z-10"></div>

                <div className="bg-green-900/40 p-4 rounded-xl text-green-400 group-hover:text-green-300 transition-colors relative z-20 flex-shrink-0 backdrop-blur-sm border border-green-500/20"><Layers size={32} /></div>

                <div className="relative z-20"><h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">Custom Web Applications</h3><p className="text-slate-400 text-sm leading-relaxed">Complex SaaS platforms, internal tools, and customer portals.</p></div>

             </div>



             {/* NEW BUTTON ADDED HERE */}

<div className="md:col-span-2 flex justify-center mt-10">

  <button 

    onClick={() => navigateTo('web-solutions')}

    className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-black text-white shadow-xl hover:scale-105 transition-all flex items-center gap-3 overflow-hidden"

  >

    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

    <Monitor size={24} className="relative z-10" />

    <span className="relative z-10">Explore All Website Types & Build Styles</span>

    <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />

  </button>

</div>

          </div>

        </div>

      </section>



      {/* SERVICES 3D SECTION */}

      <section id="services" className="pt-20 pb-24 bg-[#0a192f] relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-2">

            <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs mb-1 block">Comprehensive Solutions</span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Our 360° Digital Services</h2>

            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Experience our services in 3D. Scroll to explore.</p>

          </div>



          {/* Pulling the ring even closer with a negative margin */}

          <div className="-mt-8">

            <Service3DRing services={servicesList} />

          </div>

        </div>

      </section>



      {/* PRICING SECTION */}

      <section id="pricing" className="py-24 bg-[#050c18] relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>

            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">No hidden fees. No long-term contracts. Just results.</p>

            <div className="inline-flex items-center justify-center">

                {!isLocationLocked ? (

                    <div className="inline-flex items-center p-1 bg-slate-800 rounded-full border border-slate-700 shadow-inner">

                        <button onClick={() => { setPricingMode('india'); setCurrencySymbol('₹'); }} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${pricingMode === 'india' ? 'bg-amber-400 text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}>India Pricing (INR)</button>

<button onClick={() => { setPricingMode('global'); setCurrencySymbol('$'); }} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${pricingMode === 'global' ? 'bg-cyan-400 text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}>Global Pricing (USD)</button>

                    </div>

                ) : (

                      <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700 backdrop-blur-sm">

                        <Lock size={14} className="text-slate-400" />

                        <span className="text-slate-300 text-sm font-medium">Showing {pricingMode === 'india' ? 'India' : 'Global'} Packages Only</span>

                    </div>

                )}

            </div>

          </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
              {(pricingMode === 'india' ? [
                { tier: "tier1", tag: "Starter", title: "The 'Cutting Chai' Starter", desc: "Best for: New Startups & Home Businesses", marketPrice: "₹25,000", price: "₹14,999", features: ["12 Creative Static Posts", "Story Management (Daily)", "1 Festival Greeting Design", "Basic Google Map (GMB) Setup"], promise: "Keep your brand active online.", highlight: false, btn: "Get Started", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1080" },
                { tier: "tier2", tag: "Growth", title: "The 'Local Fast' Growth", desc: "Best for: Restaurants, Salons, Brokers", marketPrice: "₹50,000", price: "₹29,999", features: ["12 Posts + 4 Professional Reels", "Ads Management (FB & Insta)", "Local SEO (Ranking 'Near Me')", "2 AI-Written SEO Blogs"], promise: "Get leads and real customers.", highlight: true, btn: "Choose Growth", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080" },
                { tier: "tier3", tag: "Royale", title: "The 'Queen's Necklace' Royale", desc: "Best for: Luxury Brands & Established Players", marketPrice: "₹1,50,000", price: "₹79,999", features: ["Daily Posting (20 Posts + 8 Reels)", "1 Professional Shoot (On-Location)", "Influencer Outreach (2 Micro)", "24/7 Priority Support"], promise: "Dominate the market with luxury content.", highlight: false, btn: "Contact Sales", img: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1080" }
              ] : [
                { tier: "tier1", tag: "Kickstart", title: "The 'Digital Kickstart'", desc: "Best for: Small Businesses needing a fix", marketPrice: "$999", price: "$599", features: ["12 Social Media Posts (Static)", "Community Management", "Basic SEO Audit", "Remote Team Support"], promise: "Your dedicated remote social media team.", highlight: false, btn: "Get Started", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1080" },
                { tier: "tier2", tag: "Growth Engine", title: "The '24/7 Growth' Engine", desc: "Best for: Service Businesses", marketPrice: "$2,500", price: "$1,299", features: ["15 Posts + 4 AI-Edited Reels", "Google & Meta Ads Management", "Monthly Competitor Analysis", "Email Marketing Setup"], promise: "We work while you sleep. Leads delivered daily.", highlight: true, btn: "Start Growth Engine", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1080" },
                { tier: "tier3", tag: "AI Pack", title: "The 'Silicon Valley' AI Pack", desc: "Best for: Personal Brands & Tech Startups", marketPrice: "$4,000", price: "$1,999", features: ["AI Video Cloning (8 Reels)", "LinkedIn Ghostwriting (4 Articles)", "YouTube Shorts Management", "Full Funnel Strategy"], promise: "The most advanced AI marketing stack available.", highlight: false, btn: "Go Viral", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1080" }
              ]).map((pkg, idx) => (
                <div key={idx} className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 overflow-hidden group ${pkg.highlight ? 'border-2 border-amber-400 transform md:-translate-y-4 shadow-2xl shadow-amber-500/20 z-10' : 'border border-slate-700 hover:shadow-2xl hover:shadow-cyan-900/20 hover:-translate-y-2'}`}>
                  <div className="absolute inset-0 z-0"><img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" /><div className="absolute inset-0 bg-slate-900/85"></div></div>
                  <div className={`absolute inset-0 bg-gradient-to-tr from-transparent ${pkg.highlight ? 'via-amber-500/10' : 'via-cyan-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10`} ></div>
                  <div className={`absolute top-0 left-0 w-full h-1 ${pkg.highlight ? 'bg-amber-500 scale-x-100' : 'bg-cyan-500 scale-x-0 group-hover:scale-x-100'} transition-transform duration-300 origin-left z-10`}></div>
                  
                  <div className="relative z-20 flex flex-col h-full">
                      {pkg.highlight && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg flex items-center gap-2"><Award size={14} /> Recommended</div>
                        </div>
                      )}
                      <div className={`mb-4 ${pkg.highlight ? 'mt-2' : ''}`}><span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${pkg.highlight ? 'bg-amber-400/10 text-amber-400 border-amber-400/20' : 'bg-slate-300 text-slate-300 border-slate-700'}`}>{pkg.tag}</span></div>
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                      <p className={`text-sm mb-6 h-10 ${pkg.highlight ? 'text-slate-300' : 'text-slate-400'}`}>{pkg.desc}</p>
                      
                      <div className={`mb-6 pb-6 border-b ${pkg.highlight ? 'border-slate-700' : 'border-slate-800'}`}>
                        {/* MARKET PRICE SECTION */}
                        <div className="flex flex-col mb-1">
                          <span className="text-slate-500 text-xs font-bold uppercase tracking-tighter">Market Price:</span>
                          <span className="text-slate-400 text-lg line-through decoration-red-500/60 decoration-2 font-medium">
                            {currencySymbol}{pkg.marketPrice.replace('₹', '').replace('$', '')}
                          </span>
                        </div>
                        
                        
                          {/* AGENCY PRICE SECTION */}
                          <div className="flex items-baseline">
                          <span className={`text-4xl font-extrabold ${pkg.highlight ? 'text-amber-400' : 'text-white'}`}>
                          {currencySymbol}{parseFloat(pkg.price.replace(/[^\d.]/g, '')).toLocaleString()}
                          </span>
                          <span className="text-slate-500 ml-2">/month</span>
                          </div>
                        <p className={`text-xs mt-3 italic ${pkg.highlight ? 'text-amber-400/80' : 'text-cyan-400/80'}`}>"{pkg.promise}"</p>
                      </div>

                      <ul className="space-y-4 mb-8 flex-1">
                        {pkg.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <CheckCircle size={18} className={`${pkg.highlight ? 'text-amber-400' : 'text-slate-500'} mt-0.5 flex-shrink-0`} /> 
                            <span className={`leading-tight ${pkg.highlight ? 'text-white' : 'text-slate-300'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <button 
  onClick={() => { 
    // This cleans the price by removing the default symbols and adds your local one
    const cleanPrice = pkg.price.replace('₹', '').replace('$', '');
    const message = `Hi Digital Media Bombay! 🚀 I'm interested in the *${pkg.title}* package (${currencySymbol}${cleanPrice}). Please let me know the next steps!`; 
    
    window.open(`https://wa.me/918850739933?text=${encodeURIComponent(message)}`, '_blank'); 
  }} 
  className={`w-full py-4 font-bold rounded-xl transition-all shadow-lg transform hover:scale-[1.02] ${pkg.highlight ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:from-amber-500 hover:to-orange-600 shadow-amber-500/25' : 'border border-slate-600 text-white hover:bg-slate-800'}`}
> 
  {pkg.btn} 
</button>
                      <button onClick={() => openBundles(pkg.tier)} className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors border border-transparent hover:border-slate-700 rounded-lg"><Package size={16} /> View More {pkg.tag} Bundles</button>
                  </div>
                </div>
            ))}
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
          <CustomServiceSelector mode={pricingMode} navigateToContact={onContactClick} currencySymbol={currencySymbol} />
      </div>

    </section>



      {/* REVIEW & FAQ */}

      <ReviewSection /> 

      <BlogSection navigateTo={navigateTo} onPostClick={openBlogPost} />

      <FAQSection />

      <ContactSection currencySymbol={currencySymbol} />

      <ChatWidget navigateTo={navigateTo} currencySymbol={currencySymbol} />

    </div>

  );

  const BundlesPage = ({ currencySymbol }) => {
    const tierData = bundlesData[pricingMode][selectedTier];
    if (!tierData) return <div className="text-white">Error loading bundles.</div>;

    return (
      <div className="bg-[#0a192f] min-h-screen text-slate-200 pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigateTo('home')} className="mb-8 flex items-center text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Pricing
          </button>
          
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold tracking-wider uppercase text-sm mb-2 block">
              {pricingMode === 'india' ? 'India' : 'Global'} Bundles
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{tierData.title}</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">{tierData.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tierData.packages.map((pkg, idx) => (
              <div key={idx} className="bg-gradient-to-b from-[#112240] to-[#0a192f] border border-slate-700 rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{pkg.name}</h3>
                      <div className="bg-slate-800 px-3 py-1 rounded text-xs font-mono text-slate-300">BUNDLE {idx + 1}</div>
                    </div>
                    
                    <div className="flex flex-col mb-6 border-b border-slate-700 pb-6">
                      {/* MARKET PRICE WITH STRIKETHROUGH */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Market Rate:</span>
                        <span className="text-slate-400 text-lg line-through decoration-red-500/50 decoration-2">
                          {currencySymbol}{pkg.marketPrice.replace('₹', '').replace('$', '')}
                        </span>
                      </div>

                      {/* ACTUAL PRICE */}
                      <div className="flex items-baseline">
                        <span className="text-4xl font-extrabold text-amber-400">
                          {currencySymbol}{pkg.price.replace('₹', '').replace('$', '')}
                        </span>
                        <span className="text-slate-500 ml-1">{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-slate-400 italic mb-4">"{pkg.desc}"</p>
                      <ul className="space-y-3">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <CheckCircle size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
  onClick={() => {
    // This correctly identifies the bundle name and price
    const cleanPrice = pkg.price.replace('₹', '').replace('$', '');
    const message = `Hi Digital Media Bombay! 💎 I'm interested in the *${pkg.name}* bundle for *${currencySymbol}${cleanPrice}*. Can we discuss the requirements?`;
    window.open(`https://wa.me/918850739933?text=${encodeURIComponent(message)}`, '_blank');
  }} 
  className="w-full py-4 bg-white text-blue-900 font-black rounded-xl hover:bg-cyan-50 transition-all shadow-lg transform active:scale-95"
>
  Select This Bundle
</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

const AIStrategyPage = () => {

    const [formData, setFormData] = useState({

        businessName: '',

        industry: '',

        targetAudience: '',

        goal: 'Lead Generation',

        challenges: '', // Changed from USP

        competitors: '',

        platform: 'Instagram',

        tone: 'Professional & Bold'

    });

    const [strategy, setStrategy] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleGenerate = (e) => {

        e.preventDefault();

        setLoading(true);

        setStrategy(null);



        // Professional Marketing Logic for Digital Media Bombay

        setTimeout(() => {

            const industryVal = formData.industry.toLowerCase();

            const goalVal = formData.goal;

            setStrategy({

                viral_hook: `Stop paying for marketing that doesn't convert. Here is how ${formData.businessName} uses AI-driven strategies to dominate the ${formData.industry} sector.`,

                ad_headline: `Struggling with ${formData.challenges || 'Growth'}? Scale your ${formData.industry} Brand to 10x ROI.`,

                strategy_summary: `For ${formData.businessName}, our primary roadmap involves aggressive positioning on ${formData.platform}. We will target ${formData.targetAudience} by solving their main challenge: "${formData.challenges}". Unlike ${formData.competitors || 'traditional agencies'}, we focus on efficiency over bloat.`,

                why_us_pitch: `At Digital Media Bombay, we don't just run ads; we build revenue engines. This blueprint is specifically designed to achieve your ${formData.goal} milestone in record time.`

            });

            setLoading(false);

        }, 1500);

    };

    return (

      <div className="bg-[#0a192f] min-h-screen text-slate-200 font-sans pt-24 pb-20">

        <div className="max-w-4xl mx-auto px-4">

          <button onClick={() => navigateTo('home')} className="mb-8 flex items-center text-cyan-400 font-bold hover:text-cyan-300 transition-colors">

            <ArrowLeft size={20} className="mr-2" /> Back to Home

          </button>

          <div className="text-center mb-12">

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Instant <span className="text-cyan-400">Marketing Blueprint</span></h1>

            <p className="text-slate-400">Strategic growth analysis powered by Digital Media Bombay.</p>

          </div>

          <div className="bg-[#0f2440] border border-slate-700 p-8 rounded-2xl shadow-2xl relative overflow-hidden">

             <div className="absolute top-0 right-0 p-4 opacity-5"><Sparkles size={120} /></div>

            <form onSubmit={handleGenerate} className="space-y-6 relative z-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>

                  <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Business Name</label>

                  <input required className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-cyan-400" value={formData.businessName} onChange={(e) => setFormData({...formData, businessName: e.target.value})} placeholder="e.g. Digital Media Bombay" />

                </div>

                <div>

                  <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Industry</label>

                  <input required className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-cyan-400" value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})} placeholder="e.g. Digital Marketing" />

                </div>

                <div>

                  <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Target Audience</label>

                  <input required className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-cyan-400" value={formData.targetAudience} onChange={(e) => setFormData({...formData, targetAudience: e.target.value})} placeholder="e.g. Small Business Owners" />

                </div>

                <div>

                  <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Primary Goal</label>

                  <select className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-cyan-400" value={formData.goal} onChange={(e) => setFormData({...formData, goal: e.target.value})}>

                    <option>Lead Generation</option><option>Brand Awareness</option><option>Direct Sales</option>

                  </select>

                </div>

                <div>

                  <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Current Challenges</label>

                  <input required className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-cyan-400" value={formData.challenges} onChange={(e) => setFormData({...formData, challenges: e.target.value})} placeholder="e.g. Low website traffic" />

                </div>

                <div>

                  <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Main Competitors</label>

                  <input className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-cyan-400" value={formData.competitors} onChange={(e) => setFormData({...formData, competitors: e.target.value})} placeholder="e.g. Local Agencies" />

                </div>

                <div>

                  <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Marketing Channel</label>

                  <select className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-cyan-400" value={formData.platform} onChange={(e) => setFormData({...formData, platform: e.target.value})}>

                    <option>LinkedIn</option><option>Instagram</option><option>Google Search</option>

                  </select>

                </div>

                <div>

                  <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Communication Tone</label>

                  <select className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-cyan-400" value={formData.tone} onChange={(e) => setFormData({...formData, tone: e.target.value})}>

                    <option>Professional & Bold</option><option>Luxury & Minimal</option><option>Energetic</option>

                  </select>

                </div>

              </div>

              <button type="submit" disabled={loading} className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-white shadow-xl flex items-center justify-center gap-2">

                {loading ? <Loader className="animate-spin" /> : <><Sparkles size={20} /> Generate Marketing Blueprint</>}

              </button>

            </form>

            {strategy && (

              <div className="mt-10 p-8 bg-slate-800/50 border border-cyan-500/30 rounded-2xl space-y-8 animate-in fade-in zoom-in duration-500 shadow-2xl">

                <div className="border-l-4 border-cyan-400 pl-4">

                    <h4 className="text-cyan-400 font-bold uppercase text-[10px] mb-1 tracking-widest">Viral Hook Idea</h4>

                    <p className="text-white text-lg font-medium">{strategy.viral_hook}</p>

                </div>

                <div className="border-l-4 border-pink-400 pl-4">

                    <h4 className="text-pink-400 font-bold uppercase text-[10px] mb-1 tracking-widest">Ad Headline</h4>

                    <p className="text-white text-lg font-medium">{strategy.ad_headline}</p>

                </div>

                <div className="border-l-4 border-white pl-4">

                    <h4 className="text-slate-400 font-bold uppercase text-[10px] mb-1 tracking-widest">The Strategy</h4>

                    <p className="text-slate-200">{strategy.strategy_summary}</p>

                </div>

                <div className="bg-cyan-500/10 p-5 rounded-xl border border-cyan-500/20 text-center">

                    <p className="text-slate-300 text-sm italic font-medium">"{strategy.why_us_pitch}"</p>

                </div>

                <button onClick={navigateToContact} className="w-full py-4 bg-white text-blue-900 font-black rounded-lg text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform">Speak to Kaleem to Execute This Blueprint</button>

              </div>

            )}

          </div>

        </div>

      </div>

    );

  };

  const PrivacyPolicyPage = () => (

    <div className="bg-[#0a192f] min-h-screen text-slate-200 font-sans pt-32 pb-20">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300">

          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

          <section>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Introduction</h2>

            <p>Welcome to Digital Media Bombay ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. Data We Collect</h2>

            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>

            <ul className="list-disc pl-6 mt-2 space-y-2">

              <li><strong className="text-white">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>

              <li><strong className="text-white">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>

              <li><strong className="text-white">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>

            </ul>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. How We Use Your Data</h2>

            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>

            <ul className="list-disc pl-6 mt-2 space-y-2">

              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>

              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>

              <li>To provide analysis or valuable information so that we can improve the Service.</li>

            </ul>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Data Security</h2>

            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Contact Us</h2>

            <p>If you have any questions about this Privacy Policy, please contact us:</p>

            <ul className="list-none mt-2">

              <li>By email: digitalmediabombay@gmail.com</li>

              <li>By phone: +91 8850739933</li>

            </ul>

          </section>

        </div>

      </div>

    </div>

  );

  const TermsOfServicePage = () => (

    <div className="bg-[#0a192f] min-h-screen text-slate-200 font-sans pt-32 pb-20">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300">

          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

          <section>

            <h2 className="text-2xl font-bold text-amber-400 mb-4">1. Agreement to Terms</h2>

            <p>By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-amber-400 mb-4">2. Services</h2>

            <p>Digital Media Bombay provides digital marketing, web development, and related services. We reserve the right to withdraw or amend our service, and any service or material we provide via the website, in our sole discretion without notice.</p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-amber-400 mb-4">3. Intellectual Property</h2>

            <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Digital Media Bombay and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.</p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-amber-400 mb-4">4. Payment & Refunds</h2>

            <p>Payments for services are due as per the agreed-upon contract or invoice terms. We do not offer refunds for services already rendered. For monthly retainers, cancellations must be made 30 days in advance.</p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-amber-400 mb-4">5. Freelancer Engagement</h2>

            <p>If you are joining our "Cloud Squad" as a freelancer, you acknowledge that payment is commission-based per project. You agree to our non-solicitation policy, which prohibits you from directly contacting or soliciting our clients outside of the Digital Media Bombay platform.</p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-amber-400 mb-4">6. Limitation of Liability</h2>

            <p>In no event shall Digital Media Bombay, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-amber-400 mb-4">7. Governing Law</h2>

            <p>These Terms shall be governed and construed in accordance with the laws of Mumbai, India, without regard to its conflict of law provisions.</p>

          </section>

        </div>

      </div>

    </div>

  );

  const ServicesPage = () => {

    return (

      <div className="bg-[#0a192f] min-h-screen text-slate-200 font-sans">

        <div className="bg-[#0f2440] pt-32 pb-20 text-center px-4 relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none"><div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px]"></div><div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px]"></div></div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 relative z-10">Our <span className="text-cyan-400">Expertise</span>. Your <span className="text-amber-400">Growth</span>.</h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto relative z-10">We don't do "everything." We do the things that actually move the needle for your business.</p>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

            <div className="grid gap-12">

                {servicesList.map((service, idx) => (

                    <div key={idx} id={service.id} className={`relative rounded-2xl overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300 flex flex-col md:flex-row gap-0 md:gap-0 border border-slate-700 bg-[#0f2440]`}>

                        <div className="absolute inset-0 z-0"><img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" /><div className="absolute inset-0 bg-slate-900/85"></div></div>

                        <div className={`absolute top-0 left-0 w-full h-1 bg-${service.color}-500 z-20`}></div>



                         {/* Neo Lines Effect on Hover */}

                        <div className={`absolute inset-0 border-2 border-transparent group-hover:border-${service.color}-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                        <div className={`absolute inset-0 bg-${service.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                        <div className="relative z-10 p-8 md:p-12 md:w-1/3 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-slate-800/50">

                            <div className="bg-slate-800/80 p-5 rounded-2xl mb-6 shadow-inner backdrop-blur-md border border-slate-700 relative group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-shadow">

                                <div className={`absolute inset-0 bg-${service.color}-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                                <div className="relative z-10">{service.icon}</div>

                            </div>

                            <h2 className={`text-3xl font-bold text-white mb-4 group-hover:text-${service.color}-400 transition-colors`}>{service.title}</h2>

                            <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>

                        </div>

                        <div className="relative z-10 p-8 md:p-12 md:w-2/3 bg-transparent flex flex-col">
                            <h3 className={`text-sm font-bold text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2`}>
                              <Layers size={16} /> What We Provide
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                                {service.deliverables.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                      <div className={`mt-1 bg-cyan-500/20 text-cyan-400 rounded-full p-1 flex-shrink-0`}>
                                        <Check size={12} strokeWidth={3} />
                                      </div>
                                      <span className="text-slate-300 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            
                            {/* THIS PART PUSHES BUTTON TO BOTTOM RIGHT */}
                            <div className="mt-auto flex justify-end">
                                <button 
                                  onClick={() => {
                                    const message = `Hi! 🛠️ I'm interested in your *${service.title}* service. I'd like to know more about the deliverables and pricing.`;
                                    window.open(`https://wa.me/918850739933?text=${encodeURIComponent(message)}`, '_blank');
                                  }} 
                                  className="text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center gap-2 hover:scale-105"
                                >
                                  Enquire About This <Activity size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <section className="py-20 bg-gradient-to-r from-blue-900 to-[#0a192f] text-center border-t border-slate-800">

            <div className="max-w-4xl mx-auto px-4"><h2 className="text-3xl font-bold text-white mb-6">Not sure what you need?</h2><p className="text-lg text-slate-300 mb-8">Let's hop on a call. We'll audit your current presence and tell you exactly where the gaps are.</p><button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:bg-slate-100 transition-transform transform hover:scale-105 border-4 border-transparent hover:border-cyan-400/50 relative overflow-hidden group"><span className="relative z-10">Book Free Consultation</span><div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div></button></div>

        </section>

      </div>

    );

  };

  const AboutPage = ({ onContactClick }) => (

    <div className="bg-[#0a192f] min-h-screen text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">

      <section className="relative pt-32 pb-24 overflow-hidden">

        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0"><div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div><div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]"></div></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">Not Just an Agency. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">An Efficiency Engine.</span></h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">We are Digital Media Bombay. We exist because the old way of doing marketing—slow, bloated, and expensive—is dead.</p>

        </div>

      </section>

      <section className="py-20 bg-[#0f2440] border-y border-slate-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <div>

                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"><div className="w-10 h-10 bg-amber-400/20 rounded-lg flex items-center justify-center text-amber-400"><MapPin size={20} /></div>Born in Mumbai</h2>

                    <div className="space-y-6 text-slate-300 text-lg leading-relaxed"><p>It started in a crowded coffee shop in Bandra. We realized something profound: <strong>Talent is universal, but opportunity is not.</strong></p><p>We saw agencies in New York charging $5,000 for a website that a brilliant developer in Mumbai could build better for $500. The difference wasn't quality; it was geography.</p><p>We decided to bridge that gap. We built an agency that combines the raw, hungry talent of India's top 1% creatives with the structural discipline of a Silicon Valley tech firm.</p></div>

                </div>

                <div className="relative h-96 bg-gradient-to-br from-blue-900/40 to-slate-900 rounded-2xl border-2 border-slate-700 overflow-hidden group hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300">

                      <div className="absolute inset-0 bg-[url('/officeoutside.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-700 transform group-hover:scale-105"></div>

                      <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-[#0f2440] via-[#0f2440]/80 to-transparent w-full"><p className="text-cyan-400 font-bold tracking-wider uppercase text-sm">The Vision</p><p className="text-white text-xl font-bold mt-1">Global Quality. Local Heart.</p></div>

                </div>

            </div>

        </div>

      </section>

      <section className="py-24 bg-[#0a192f]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-white">Why We Built This</h2></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="relative text-center p-8 rounded-2xl border border-slate-700 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20 bg-slate-900/60 backdrop-blur-xl hover:border-red-500/50 shadow-2xl">

                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                    <div className={`absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                    <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1080" alt="Old Way" className="w-full h-full object-cover opacity-30" /><div className="absolute inset-0 bg-slate-900/90"></div></div><div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div><div className="absolute top-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div><div className="relative z-20"><div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mb-6 mx-auto"><X size={24} /></div><h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors">The Old Way</h3><p className="text-slate-400">Traditional agencies charge you for their office rent, their fancy espresso machine, and their account manager's commute. You pay for their bloat, not your results.</p></div></div>

                <div className="relative text-center p-8 rounded-2xl border border-slate-700 overflow-hidden group transition-all duration-300 transform md:-translate-y-4 shadow-xl hover:shadow-cyan-900/30 bg-slate-900/60 backdrop-blur-xl hover:border-cyan-500/50 shadow-2xl">

                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                    <div className={`absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                    <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080" alt="Our Way" className="w-full h-full object-cover opacity-30" /><div className="absolute inset-0 bg-slate-900/90"></div></div><div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div><div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div><div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg z-20">SMART MODEL</div><div className="relative z-20"><div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mb-6 mx-auto"><Cpu size={24} /></div><h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">Our Way</h3><p className="text-slate-400">We stripped away the fat. No massive office. No bloated payroll. Just top-tier talent empowered by AI tools. We automate the boring stuff so we can focus on creativity.</p></div></div>

                <div className="relative text-center p-8 rounded-2xl border-2 border-slate-700 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/20 bg-slate-900/60 backdrop-blur-xl hover:border-green-500/50 shadow-2xl">

                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-green-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                    <div className={`absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                    <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080" alt="Result" className="w-full h-full object-cover opacity-30" /><div className="absolute inset-0 bg-slate-900/90"></div></div><div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div><div className="absolute top-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div><div className="relative z-20"><div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 mx-auto"><TrendingUp size={24} /></div><h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">The Result</h3><p className="text-slate-400">You get Fortune 500 quality marketing for the price of a freelancer. Speed, efficiency, and pure ROI. We don't just work hard; we work smart.</p></div></div>

            </div>

        </div>

      </section>

      <section className="py-24 bg-[#050c18] relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                 <div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Our DNA</h2>

                    <div className="space-y-8">

                        <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 flex-shrink-0"><Rocket size={24} /></div><div><h4 className="text-xl font-bold text-white">Speed is a Feature</h4><p className="text-slate-400 mt-2">In the digital age, being slow is the same as being dead. We launch campaigns in 48 hours, not 4 weeks.</p></div></div>

                        <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-amber-900/50 flex items-center justify-center text-amber-400 flex-shrink-0"><Heart size={24} /></div><div><h4 className="text-xl font-bold text-white">Obsessive Care</h4><p className="text-slate-400 mt-2">We treat your budget like it's our own money. If a campaign isn't working, we kill it. If it works, we scale it. Brutal honesty.</p></div></div>

                        <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 flex-shrink-0"><Bot size={24} /></div><div><h4 className="text-xl font-bold text-white">AI + Human Hybrid</h4><p className="text-slate-400 mt-2">AI generates the structure; Humans add the soul. We use technology to amplify human creativity, not replace it.</p></div></div>

                    </div>

                 </div>

                 <div className="relative">

                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>

                    <div className="relative bg-[#0f2440]/60 backdrop-blur-xl border-2 border-slate-700 p-8 rounded-2xl text-center hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all shadow-2xl group">

                        <div className={`absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-all duration-300 z-30 pointer-events-none`}></div>

                        <div className={`absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}></div>

                        <h3 className="text-2xl font-bold text-white mb-6 relative z-20">Meet The Cloud Squad</h3>

                        <p className="text-slate-400 mb-8 relative z-20">We don't have employees sitting in cubicles. We have a curated network of the top 1% of freelancers across Mumbai, Bangalore, and Pune.</p>

                        <div className="flex justify-center -space-x-4 mb-6 relative z-20">{[1,2,3,4,5].map(i => (<div key={i} className="w-12 h-12 rounded-full border-2 border-[#0f2440] bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">Dev</div>))}<div className="w-12 h-12 rounded-full border-2 border-[#0f2440] bg-cyan-600 flex items-center justify-center text-xs font-bold text-white">+50</div></div>

                        <button onClick={() => navigateTo('freelancer')} className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center justify-center gap-2 mx-auto relative z-20">Join the Network <ArrowRight size={16} /></button>

                    </div>

                 </div>

            </div>

        </div>

      </section>



      {/* The Architect Section */}

      <section id="architect-section" className="py-24 bg-[#0a192f] border-t border-slate-800 relative overflow-hidden">

         <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[100px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="flex flex-col md:flex-row items-center gap-16 bg-[#0f2440]/60 backdrop-blur-xl border-2 border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300">

               <div className="w-full md:w-1/3 flex justify-center">

                  <div className="relative w-64 h-64 rounded-full border-4 border-slate-700 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.3)] group">

                      

                      {/* Placeholder for Kaleem's Image */}

                      <img src="kaleem.png" alt="Kaleem Shaikh" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60"></div>

                  </div>

               </div>

               <div className="w-full md:w-2/3 text-center md:text-left">

                  <h4 className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2">The Architect</h4>

                  <h2 className="text-4xl font-extrabold text-white mb-6">Kaleem Shaikh</h2>

                  <p className="text-slate-300 text-lg leading-relaxed mb-6">

                      The driving force behind <strong>Digital Media Bombay</strong>. Kaleem didn't just build an agency; he engineered a digital ecosystem. Frustrated by the inefficiencies of traditional marketing firms, he pioneered a model that fuses <span className="text-white font-bold">Mumbai's hustle</span> with <span className="text-white font-bold">Silicon Valley's precision</span>.

                  </p>

                  <p className="text-slate-400 text-base leading-relaxed mb-8">

                      His vision? To democratize premium digital growth. By leveraging AI automation and a curated "Cloud Squad" of elite talent, Kaleem ensures that businesses—from local startups to global enterprises—get 10x the impact without the bloat.

                  </p>

<a 

  href="https://iamkaleemshaikh.web.app/" 

  target="_blank" 

  rel="noopener noreferrer"

  className="inline-block"

>

  <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-full shadow-lg shadow-cyan-900/20 transition-all transform hover:translate-y-[-2px]">

    View Kaleem's Portfolio <ArrowRight size={18} />

  </button>

</a>

               </div>

            </div>

         </div>

      </section>

      <section className="py-24 bg-gradient-to-r from-blue-900 to-[#0a192f] text-center">

        <div className="max-w-4xl mx-auto px-4"><h2 className="text-4xl font-bold text-white mb-6">Ready to work with the future?</h2><p className="text-xl text-slate-300 mb-10">Stop paying for overhead. Start paying for impact.</p><button onClick={onContactClick} className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-slate-100 transition-transform transform hover:scale-105 border-4 border-transparent hover:border-cyan-400/50 relative overflow-hidden group"><span className="relative z-10">Book Your Strategy Call</span><div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div></button></div>

      </section>

    </div>

  );



  // --- PAGE: FREELANCER PORTAL ---

  // --- PAGE: FREELANCER PORTAL ---
  const FreelancerPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      age: '',
      location: '',
      country: 'India',
      phone: '',
      experience: '',
      portfolio: '',
      specialty: 'Video Editing (Reels/Shorts)'
    });

    const countries = [
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
      "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", 
      "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
      "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", 
      "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", 
      "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", 
      "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", 
      "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
      "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", 
      "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", 
      "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", 
      "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", 
      "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", 
      "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
      "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
      "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", 
      "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", 
      "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", 
      "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", 
      "Zambia", "Zimbabwe"
    ];

    const handleSubmit = (e) => {
      e.preventDefault();
      const message = `*New Freelancer Application* 🚀\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Age:* ${formData.age}\n*Country:* ${formData.country}\n*Phone/WA:* ${formData.phone}\n*Location:* ${formData.location}\n*Experience:* ${formData.experience}\n*Specialty:* ${formData.specialty}\n*Portfolio:* ${formData.portfolio || 'Not Provided'}\n\n_I agree to the non-solicitation terms._`;
      
      const whatsappUrl = `https://wa.me/918850739933?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
      <div className="bg-[#0a192f] min-h-screen text-slate-200 font-sans">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm">For Creatives & Developers</span>
            <h1 className="text-5xl font-extrabold text-white mt-4 mb-6">Stop Chasing Clients.<br />Let Us Bring Them to You.</h1>
            <p className="text-xl text-slate-400">We are the <span className="text-amber-400 font-semibold">Uber for Digital Marketing</span>. You do the creative work; we handle sales, strategy, and client headaches.</p>
          </div>

          <div className="bg-[#0f2440]/60 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-20">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Full Name *</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none" placeholder="Enter Full Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Email ID *</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none" placeholder="Enter Email" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Age *</label>
                  <input required type="number" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none" placeholder="e.g. 24" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Current City/Location *</label>
                  <input required type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none" placeholder="e.g. Mumbai" />
                </div>
              </div>

              {/* NEW COUNTRY AND PHONE ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Country *</label>
                  <select required value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none">
                    {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">WhatsApp Number *</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none" placeholder="Include Country Code" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Work Experience *</label>
                  <select required value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none">
                    <option value="">Select Experience</option>
                    <option>Fresher (0-1 Years)</option>
                    <option>1-3 Years</option>
                    <option>3-5 Years</option>
                    <option>5+ Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Specialty *</label>
                  <select required value={formData.specialty} onChange={(e) => setFormData({...formData, specialty: e.target.value})} className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none">
                    <option>Video Editing (Reels/Shorts)</option>
                    <option>Meta/Google Ads Expert</option>
                    <option>Web Development (React/MERN)</option>
                    <option>WordPress Development</option>
                    <option>Copywriting / Content Writing</option>
                    <option>Graphic Design</option>
                    <option>SEO Specialist</option>
                    <option>AI Automation / Chatbot Dev</option>
                    <option>3D Generalist</option>
                    <option>UI/UX Design (Figma)</option>
                    <option>Social Media Manager</option>
                    <option>Influencer Marketing Expert</option>
                    <option>Motion Graphics Designer</option>
                    <option>Email Marketing Specialist</option>
                    <option>Python / Backend Developer</option>
                    <option>Cybersecurity Auditor</option>
                    <option>App Development (Flutter/Native)</option>
                    <option>Data Analytics & Tracking</option>
                    <option>Brand Strategy & Identity</option>
                    <option>Customer Support Lead</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Portfolio URL (Optional)</label>
                <input type="text" value={formData.portfolio} onChange={(e) => setFormData({...formData, portfolio: e.target.value})} className="w-full bg-[#0a192f] border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none" placeholder="Link to Behance, Drive, or Site" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Attach CV / Resume (PDF/Word) *</label>
                <div className="relative border-2 border-dashed border-slate-600 rounded-lg p-6 hover:border-cyan-400 transition-colors bg-[#0a192f]/50 text-center">
                  <input required type="file" accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div className="flex flex-col items-center justify-center pointer-events-none">
                    <FileText size={32} className="text-slate-400 mb-2" />
                    <p className="text-sm text-slate-300 font-medium">Click to Upload CV</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-amber-900/20 p-4 rounded-lg border border-amber-800/50 flex items-start gap-3">
                  <DollarSign size={20} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-200/80 font-medium">
                    Note: Salary / Payment will be provided through <span className="text-amber-400 font-bold">Commission Based</span> structure as per the project.
                  </p>
                </div>
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
                  <p className="text-xs text-slate-400 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-cyan-400" />
                    <span><strong>Strict Non-Solicitation Agreement Required:</strong> You will work under the "Digital Media Bombay" brand. Soliciting our clients directly will result in an immediate ban and legal action.</span>
                  </p>
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-[1.01] flex items-center justify-center gap-2">
                Apply to Join the Squad <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans">
      <Analytics />
      <SpeedInsights />
      <Header />
      <main>
  {activePage === 'home' && <HomePage onContactClick={navigateToContact} currencySymbol={currencySymbol} />}
  {activePage === pricing-page && <FullPricingPage pricingMode={pricingMode} currencySymbol={currencySymbol} openBundles={openBundles} onContactClick={navigateToContact} />}
        {activePage === 'blog-detail' && (
          <BlogDetailPage 
            post={selectedPost} 
            onBack={() => {
              navigateTo('home');
              setTimeout(() => {
                const section = document.getElementById('blog-section');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }} 
          />
        )}
        {activePage === 'about' && <AboutPage onContactClick={navigateToContact} />}
        {activePage === 'freelancer' && <FreelancerPage />}
        {activePage === 'bundles' && <BundlesPage currencySymbol={currencySymbol} />}
        {activePage === 'services' && <ServicesPage />}
        {activePage === 'ai-strategy' && <AIStrategyPage />}
        {activePage === 'privacy' && <PrivacyPolicyPage />}
        {activePage === 'terms' && <TermsOfServicePage />}
        {activePage === 'web-solutions' && <WebSolutionsPage pricingMode={pricingMode} navigateTo={navigateTo} currencySymbol={currencySymbol} />}
      </main>

      <CookieBanner />
      <Footer />
      </div>
  );
}; // ← END OF App COMPONENT

const WebSolutionsPage = ({ pricingMode, navigateTo, currencySymbol }) => {
  
  const [activeTab, setActiveTab] = useState('categories');
  const [selectedComboCat, setSelectedComboCat] = useState(null);
  const [selectedComboStyles, setSelectedComboStyles] = useState([]); 

  const toggleComboStyle = (style) => {
    setSelectedComboStyles(prev => 
      prev.find(s => s.name === style.name) 
        ? prev.filter(s => s.name !== style.name) 
        : [...prev, style]
    );
  };

  const calculateComboTotal = () => {
    if (!selectedComboCat) return 0;
    const catPrice = parseFloat(selectedComboCat[pricingMode === 'india' ? 'priceIN' : 'priceGL'].toString().replace(/,/g, '')) || 0;
    const stylesPrice = selectedComboStyles.reduce((sum, s) => {
      return sum + (parseFloat(s[pricingMode === 'india' ? 'priceIN' : 'priceGL'].toString().replace(/,/g, '')) || 0);
    }, 0);
    return Math.round((catPrice + stylesPrice) * 0.9); 
  };

  const handleComboBooking = () => {
  const total = calculateComboTotal();
  const styleNames = selectedComboStyles.map(s => s.name).join(", ");
  const phone = "918850739933";
  // Total now includes the dynamic regional symbol
  const message = `*Combo Offer Request* 💎\n\n*Category:* ${selectedComboCat.name}\n*Styles:* ${styleNames || 'None'}\n*Final Quote:* ${currencySymbol}${total.toLocaleString()}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
};

  const handleBuildRequest = (item, type) => {
    const phone = "918850739933";
    const price = pricingMode === 'india' ? item.priceIN : item.priceGL;
    const message = `*Website Build Request* 🚀\n\n*Type:* ${type}\n*Selected:* ${item.name}\n*Agency Rate:* ${currencySymbol}${price}\n\n_Sent via Web Master-Catalogue_`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const websiteCategories = [
    { name: "Static Website", marketPriceIN: "10,000", priceIN: "4,999", marketPriceGL: "299", priceGL: "149" },
    { name: "Dynamic Website", marketPriceIN: "25,000", priceIN: "12,000", marketPriceGL: "699", priceGL: "349" },
    { name: "Business / Corporate", marketPriceIN: "35,000", priceIN: "15,000", marketPriceGL: "899", priceGL: "449" },
    { name: "E-commerce Website", marketPriceIN: "60,000", priceIN: "25,000", marketPriceGL: "1499", priceGL: "699" },
    { name: "Portfolio Website", marketPriceIN: "15,000", priceIN: "7,000", marketPriceGL: "399", priceGL: "199" },
    { name: "Blog Website", marketPriceIN: "12,000", priceIN: "6,000", marketPriceGL: "349", priceGL: "179" },
    { name: "News / Media", marketPriceIN: "40,000", priceIN: "18,000", marketPriceGL: "999", priceGL: "499" },
    { name: "Educational / LMS", marketPriceIN: "80,000", priceIN: "35,000", marketPriceGL: "1800", priceGL: "899" },
    { name: "Web Application", marketPriceIN: "1,20,000", priceIN: "45,000", marketPriceGL: "2500", priceGL: "1200" },
    { name: "Social Networking", marketPriceIN: "2,50,000", priceIN: "80,000", marketPriceGL: "4500", priceGL: "1999" },
    { name: "Community / Forum", marketPriceIN: "40,000", priceIN: "15,000", marketPriceGL: "899", priceGL: "399" },
    { name: "Landing Page", marketPriceIN: "9,000", priceIN: "3,999", marketPriceGL: "299", priceGL: "129" },
    { name: "Personal Website", marketPriceIN: "12,000", priceIN: "5,000", marketPriceGL: "349", priceGL: "149" },
    { name: "Non-Profit / NGO", marketPriceIN: "20,000", priceIN: "9,000", marketPriceGL: "499", priceGL: "249" },
    { name: "Government Website", marketPriceIN: "1,50,000", priceIN: "50,000", marketPriceGL: "3500", priceGL: "1499" },
    { name: "Entertainment", marketPriceIN: "25,000", priceIN: "12,000", marketPriceGL: "699", priceGL: "349" },
    { name: "Streaming Website", marketPriceIN: "2,00,000", priceIN: "90,000", marketPriceGL: "5000", priceGL: "2500" },
    { name: "Booking / Reservation", marketPriceIN: "30,000", priceIN: "14,000", marketPriceGL: "799", priceGL: "399" },
    { name: "Marketplace", marketPriceIN: "1,50,000", priceIN: "60,000", marketPriceGL: "3500", priceGL: "1799" },
    { name: "SaaS Website", marketPriceIN: "90,000", priceIN: "40,000", marketPriceGL: "2400", priceGL: "1199" },
    { name: "Membership Site", marketPriceIN: "45,000", priceIN: "20,000", marketPriceGL: "1100", priceGL: "549" },
    { name: "Affiliate Website", marketPriceIN: "18,000", priceIN: "8,000", marketPriceGL: "499", priceGL: "249" },
    { name: "Directory / Listing", marketPriceIN: "40,000", priceIN: "18,000", marketPriceGL: "999", priceGL: "499" },
    { name: "Review Website", marketPriceIN: "35,000", priceIN: "15,000", marketPriceGL: "899", priceGL: "399" },
    { name: "Event Website", marketPriceIN: "22,000", priceIN: "10,000", marketPriceGL: "599", priceGL: "299" },
    { name: "Job Portal", marketPriceIN: "80,000", priceIN: "35,000", marketPriceGL: "1800", priceGL: "899" },
    { name: "Crowdfunding", marketPriceIN: "1,20,000", priceIN: "55,000", marketPriceGL: "3200", priceGL: "1599" },
    { name: "Wiki / Knowledge Base", marketPriceIN: "30,000", priceIN: "12,000", marketPriceGL: "799", priceGL: "349" },
    { name: "Intranet Website", marketPriceIN: "60,000", priceIN: "25,000", marketPriceGL: "1499", priceGL: "699" },
    { name: "Hybrid / Custom", marketPriceIN: "---", priceIN: "By Quote", marketPriceGL: "---", priceGL: "By Quote" }
  ];

  const buildStyles = [
    { name: "Minimalist", marketPriceIN: "8,000", priceIN: "4,000", marketPriceGL: "199", priceGL: "99" },
    { name: "Luxury / Premium", marketPriceIN: "25,000", priceIN: "10,000", marketPriceGL: "599", priceGL: "299" },
    { name: "3D Immersive", marketPriceIN: "75,000", priceIN: "35,000", marketPriceGL: "1800", priceGL: "899" },
    { name: "Parallax Motion", marketPriceIN: "28,000", priceIN: "12,000", marketPriceGL: "699", priceGL: "349" },
    { name: "Mobile-First PWA", marketPriceIN: "30,000", priceIN: "15,000", marketPriceGL: "799", priceGL: "399" },
    { name: "Video Background", marketPriceIN: "15,000", priceIN: "7,000", marketPriceGL: "399", priceGL: "199" },
    { name: "Animated Layout", marketPriceIN: "20,000", priceIN: "9,000", marketPriceGL: "499", priceGL: "249" },
    { name: "Headless CMS", marketPriceIN: "45,000", priceIN: "20,000", marketPriceGL: "1200", priceGL: "599" }
  ];

  return (
    <div className="bg-[#0a192f] min-h-screen text-slate-200 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <button onClick={() => navigateTo('home')} className="mb-8 flex items-center text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </button>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Master-Catalogue</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Explore every build type. Compare Market Rates vs our Agency Direct Pricing.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => setActiveTab('categories')} className={`px-8 py-3 rounded-full font-bold border-2 transition-all ${activeTab === 'categories' ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'bg-slate-900/40 border-slate-700 text-slate-500'}`}>Website Categories</button>
          <button onClick={() => setActiveTab('styles')} className={`px-8 py-3 rounded-full font-bold border-2 transition-all ${activeTab === 'styles' ? 'bg-amber-500/10 border-amber-400 text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]' : 'bg-slate-900/40 border-slate-700 text-slate-500'}`}>Build Styles</button>
          <button onClick={() => setActiveTab('combo')} className={`px-8 py-3 rounded-full font-bold border-2 transition-all ${activeTab === 'combo' ? 'bg-indigo-500/10 border-indigo-400 text-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.3)]' : 'bg-slate-900/40 border-slate-700 text-slate-500'}`}>💎 Combo Offer (-10%)</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'combo' && (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
            <div className="bg-slate-900/40 border border-slate-700 p-6 rounded-3xl">
              <h3 className="text-cyan-400 font-bold mb-4 uppercase text-xs tracking-widest">1. Website Type</h3>
              <div className="space-y-2 max-h-[350px] overflow-y-auto pr-2">
                {websiteCategories.map((cat, i) => (
                  <div key={i} onClick={() => setSelectedComboCat(cat)} className={`p-3 rounded-xl border cursor-pointer transition-all ${selectedComboCat?.name === cat.name ? 'border-cyan-400 bg-cyan-400/10' : 'border-slate-800'}`}>
                    <div className="font-bold text-sm text-white">{cat.name}</div>
                    <div className="flex gap-2 text-[9px] font-bold uppercase tracking-tighter">
                       <span className="text-slate-500 line-through">Mkt: {currencySymbol}{pricingMode === 'india' ? cat.marketPriceIN : cat.marketPriceGL}</span>
                       <span className="text-cyan-400">Rate: {currencySymbol}{pricingMode === 'india' ? cat.priceIN : cat.priceGL}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-700 p-6 rounded-3xl">
              <h3 className="text-amber-400 font-bold mb-4 uppercase text-xs tracking-widest">2. Styles (Pick Multiple)</h3>
              <div className="space-y-2 max-h-[350px] overflow-y-auto pr-2">
                {buildStyles.map((style, i) => {
                  const isSelected = selectedComboStyles.find(s => s.name === style.name);
                  return (
                    <div key={i} onClick={() => toggleComboStyle(style)} className={`p-3 rounded-xl border cursor-pointer transition-all flex justify-between items-center ${isSelected ? 'border-amber-400 bg-amber-400/10' : 'border-slate-800'}`}>
                      <div>
                        <div className="font-bold text-sm text-white">{style.name}</div>
                        <div className="flex gap-2 text-[9px] font-bold uppercase tracking-tighter">
                           <span className="text-slate-500 line-through">+{currencySymbol}{pricingMode === 'india' ? style.marketPriceIN : style.marketPriceGL}</span>
                           <span className="text-amber-400">+{currencySymbol}{pricingMode === 'india' ? style.priceIN : style.priceGL}</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${isSelected ? 'bg-amber-400 border-amber-400' : 'border-slate-600'}`}>
                        {isSelected && <Check size={12} className="text-black" strokeWidth={4} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-indigo-900/20 border-2 border-indigo-500/50 p-8 rounded-3xl text-center flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-6">Combo Summary</h3>
              <div className="text-left space-y-3 mb-8 py-4 border-y border-slate-800">
                <div className="flex justify-between text-xs text-slate-500"><span>Website:</span> <span className="text-white font-bold">{selectedComboCat?.name || '---'}</span></div>
                <div className="flex justify-between text-xs text-slate-500"><span>Add-ons:</span> <span className="text-indigo-400 font-bold">{selectedComboStyles.length} Selected</span></div>
                <div className="flex justify-between text-xs text-green-400 font-bold"><span>Agency Discount:</span> <span>-10% Bundle Bonus</span></div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">{currencySymbol}{calculateComboTotal().toLocaleString()}</div>
                <div className="text-[10px] text-slate-500 uppercase mt-1 font-bold tracking-widest">Final Estimated Price</div>
              </div>
              <button disabled={!selectedComboCat || selectedComboStyles.length === 0} onClick={handleComboBooking} className="w-full mt-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-black rounded-xl shadow-lg disabled:opacity-20 transition-all hover:scale-105">Book Combo Offer</button>
            </div>
          </div>
        )}

        {activeTab !== 'combo' && (activeTab === 'categories' ? websiteCategories : buildStyles).map((item, i) => (
            <div key={i} className={`relative bg-slate-900/60 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl transition-all duration-300 group flex flex-col justify-between overflow-hidden ${activeTab === 'categories' ? 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]' : 'hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]'}`}>
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeTab === 'categories' ? 'from-cyan-500 to-blue-500' : 'from-amber-400 to-orange-500'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              <div>
                <h3 className={`text-xl font-bold text-white mb-2 transition-colors ${activeTab === 'categories' ? 'group-hover:text-cyan-400' : 'group-hover:text-amber-400'}`}>{item.name}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex items-end justify-between mt-auto">
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">
                    Market: <span className="line-through decoration-red-500/50">{currencySymbol}{pricingMode === 'india' ? item.marketPriceIN : item.marketPriceGL}</span>
                  </div>
                  <div className={`text-2xl font-black ${activeTab === 'categories' ? 'text-cyan-400' : 'text-amber-400'}`}>
                    {currencySymbol}{pricingMode === 'india' ? item.priceIN : item.priceGL}
                  </div>
                </div>
                <button onClick={() => handleBuildRequest(item, activeTab)} className={`p-3 rounded-xl text-white shadow-lg ${activeTab === 'categories' ? 'bg-cyan-600 hover:bg-cyan-500' : 'bg-amber-600 hover:bg-amber-500'}`}><Send size={18} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 relative bg-slate-900/60 backdrop-blur-2xl border-2 border-slate-700 rounded-3xl text-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity"></div> 
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Need a <span className="text-amber-400">Custom Architecture?</span></h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">Combine any category with any style (e.g. 3D E-commerce). Our architects will build you a unique quote.</p>
            <button onClick={() => window.open('https://wa.me/918850739933?text=Hi, I want to discuss a Custom Hybrid Website build.', '_blank')} className="relative z-10 px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.4)]">Discuss Custom Build</button>
        </div>
      </div>
    </div>
  );
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('dm_bombay_cookies');
    if (!consent) { setIsVisible(true); }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('dm_bombay_cookies', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-[100] md:max-w-md animate-in slide-in-from-bottom-10 duration-700">
      <div className="bg-[#0f2440]/95 backdrop-blur-xl border border-amber-500/30 p-4 md:p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] border-t-amber-500/50">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 flex-shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm md:text-base">Cookie Privacy</h4>
              <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed">
                We use cookies to improve your experience. By clicking "Accept", you agree to our privacy policy.
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={() => setIsVisible(false)} className="px-4 py-2 text-slate-500 hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors">
              Decline
            </button>
            <button onClick={acceptCookies} className="px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-black text-[11px] md:text-xs uppercase tracking-tighter rounded-lg shadow-lg transition-all transform active:scale-95">
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const FullPricingPage = ({ pricingMode, currencySymbol, openBundles, onContactClick }) => {
  
  const exclusiveStandaloneServices = [
    {
      category: "Quick Technical Fixes (Low Budget)",
      items: [
        { name: "Website SSL Security Certificate Install", priceIN: "999", priceGL: "29", mIN: "3,000", mGL: "$99", d: "Fixes the 'Not Secure' browser warning instantly." },
        { name: "Domain Email Address Setup (Google Workspace)", priceIN: "1,200", priceGL: "39", mIN: "4,000", mGL: "$120", d: "Create professional business emails matching your link." },
        { name: "Website Text Spelling & Link Fix Audit", priceIN: "1,499", priceGL: "49", mIN: "5,000", mGL: "$150", d: "Cleans broken menu paths and text mistakes." },
        { name: "Social Media Profile Smart Link Setup", priceIN: "999", priceGL: "25", mIN: "2,500", mGL: "$75", d: "One simple button link holding all your store profiles." },
        { name: "Google Analytics Verification Tag Embed", priceIN: "1,800", priceGL: "59", mIN: "4,500", mGL: "$140", d: "Injects basic tracking visitor counts to your domain code." }
      ]
    },
    {
      category: "Essential Business Upgrades (Middle Budget)",
      items: [
        { name: "Spoken Voice Search Text Restructuring", priceIN: "4,500", priceGL: "149", mIN: "12,000", mGL: "$399", d: "Changes text flow into simple question patterns for phone voice search bots." },
        { name: "Google Local Business Map Verification Support", priceIN: "3,999", priceGL: "129", mIN: "10,000", mGL: "$300", d: "Guides your storefront branch registration to appear on area phone maps." },
        { name: "Single Promo Flyer Vector Graphic Set", priceIN: "2,499", priceGL: "89", mIN: "7,000", mGL: "$200", d: "Clear custom marketing images declaring sales or discounts." },
        { name: "Old Contact Excel List Database Reactivation Script", priceIN: "6,000", priceGL: "199", mIN: "18,000", mGL: "$500", d: "Drafts high-trust value check-in messages to revive cold client notes." },
        { name: "Privacy Policy Legal Text Framework Generation", priceIN: "2,999", priceGL: "99", mIN: "9,000", mGL: "$250", d: "Standard secure legal safety disclosures for compliance." }
      ]
    },
    {
      category: "Advanced Authority Multipliers (Middle Budget)",
      items: [
        { name: "LinkedIn Executive Profile Bio Authority Rewrite", priceIN: "5,500", priceGL: "189", mIN: "15,000", mGL: "$450", d: "Changes boring digital resume descriptions into direct value statements." },
        { name: "Plain English Problem-Solving Article Writing", priceIN: "3,499", priceGL: "119", mIN: "9,500", mGL: "$300", d: "Long helpful guides addressing casual questions typed by real buyers." },
        { name: "Automated Lead Intake Customer Welcome Email", priceIN: "4,200", priceGL: "139", mIN: "11,000", mGL: "$350", d: "Sends greeting packs automatically when a visitor drops details." },
        { name: "Mobile Phone Navigation Dropdown Simplification Menu", priceIN: "4,999", priceGL: "169", mIN: "14,000", mGL: "$400", d: "Deletes cluttered lists to build 3 clear taps layout lines on mobile grids." },
        { name: "Competitor Traffic Source Mapping Data Scan", priceIN: "5,999", priceGL: "199", mIN: "16,000", mGL: "$450", d: "Discovers which terms bring active customers to rivals." }
      ]
    },
    {
      category: "Premium Enterprise Firepower (Higher Budget)",
      items: [
        { name: "Server-to-Server Secured Ad Conversion API Sync", priceIN: "14,000", priceGL: "499", mIN: "45,000", mGL: "$1,500", d: "Bypasses mobile web tracking pixel blocks to read true ad sales logs." },
        { name: "AI Voice Calling Agent Dialect Script Training", priceIN: "18,000", priceGL: "599", mIN: "50,000", mGL: "$1,800", d: "Configures friendly tone phone assistants to book clients directly." },
        { name: "Location-Responsive Dynamic Country Headline Network", priceIN: "25,000", priceGL: "899", mIN: "70,000", mGL: "$2,400", d: "Shifts title quotes automatically depending on visitor city markers." },
        { name: "Frictionless One-Click Mobile Checkout Catalog Grid", priceIN: "22,000", priceGL: "799", mIN: "60,000", mGL: "$2,000", d: "Strips billing fields on smartphone frames to prevent shopping cart drops." },
        { name: "Un-Killable Permanent Search Index Code Injection", priceIN: "30,000", priceGL: "1,199", mIN: "90,000", mGL: "$3,500", d: "Maps backend structured records to protect visibility profiles from update loss." }
      ]
    }
  ];

  const currentTierLists = bundlesData[pricingMode];

  return (
    <div className="bg-[#0a192f] min-h-screen text-slate-200 py-12 selection:bg-cyan-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* SECTION 1: MASTER BUNDLES GRID */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs block mb-2">COMPLETE GROWTH SUITES</span>
          <h1 className="text-4xl md:text-6xl font-black text-white">THE 12 OFFICIAL MASTER PLANS</h1>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">Fully stacked bundles containing 10 precise service tasks. Pick the perfect fit for your operating tier scale.</p>
        </div>

        {Object.keys(currentTierLists).map((tierKey) => {
          const tier = currentTierLists[tierKey];
          return (
            <div key={tierKey} className="mb-20">
              <div className="border-b border-slate-800 pb-4 mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
                  <div className="w-3 h-8 bg-amber-400 rounded-full"></div> {tier.title}
                </h2>
                <p className="text-slate-400 text-sm mt-1">{tier.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tier.packages.map((pkg, idx) => (
                  <div key={idx} className="bg-[#0f2440]/30 border border-slate-700/60 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 shadow-xl group">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{pkg.name}</h3>
                        <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">10 TASKS SYSTEM</span>
                      </div>
                      
                      <div className="flex items-baseline gap-2 py-3 border-y border-slate-800/80 mb-6">
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Direct Rate:</span>
                        <span className="text-2xl font-black text-amber-400">
                          {currencySymbol}{parseFloat(pkg.price.replace(/[^\d.]/g, '')).toLocaleString()}
                        </span>
                        <span className="text-slate-500 text-xs">/month</span>
                        <span className="text-slate-500 text-[10px] line-through ml-auto">Market: {currencySymbol}{pkg.marketPrice.replace(/[^\d.]/g, '')}</span>
                      </div>

                      <p className="text-slate-400 text-xs italic mb-4 leading-relaxed">"{pkg.desc}"</p>
                      
                      <ul className="space-y-2.5 mb-8">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2.5 leading-tight">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_6px_#22d3ee]"></div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => {
                        const message = `Hi DMB! 🚀 I want to deploy the *${pkg.name}* (${currencySymbol}${pkg.price.replace(/[^\d.]/g, '')}) from the pricing link. Let's launch.`;
                        window.open(`https://wa.me/918850739933?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-white text-xs rounded-xl shadow-md uppercase tracking-wider group-hover:from-cyan-500 group-hover:to-blue-500 transition-all transform active:scale-95"
                    >
                      Deploy This Master Bundle
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* SECTION 2: EXCLUSIVE STANDALONE SERVICES CATALOG */}
        <div className="mt-32 text-center mb-16">
          <span className="text-amber-400 font-bold tracking-widest uppercase text-xs block mb-2">INDIVIDUAL COMPONENT CART</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">20 EXCLUSIVE STANDALONE TASKS</h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">Need a rapid standalone upgrade? Order localized components with total budget flexibility below.</p>
        </div>

        <div className="space-y-12">
          {exclusiveStandaloneServices.map((cat, idx) => (
            <div key={idx} className="bg-[#0f2440]/10 border border-slate-800 p-6 md:p-8 rounded-3xl">
              <h3 className="text-slate-400 font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div> {cat.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, itemIdx) => {
                  const sPrice = pricingMode === 'india' ? item.priceIN : item.priceGL;
                  const mPrice = pricingMode === 'india' ? item.mIN : item.mGL;
                  return (
                    <div key={itemIdx} className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between hover:border-amber-500/40 transition-colors group">
                      <div>
                        <h4 className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors leading-snug mb-2">{item.name}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed mb-4">{item.d}</p>
                      </div>

                      <div className="flex items-end justify-between pt-3 border-t border-slate-900 mt-4">
                        <div>
                          <span className="text-[9px] text-slate-600 font-bold block uppercase tracking-tighter">Market: {currencySymbol}{mPrice}</span>
                          <span className="text-lg font-mono font-black text-cyan-400">{currencySymbol}{parseFloat(sPrice.replace(/,/g, '')).toLocaleString()}</span>
                        </div>
                        <button 
                          onClick={() => {
                            const message = `Hi! 🛠️ I need to purchase the task: *${item.name}* for *${currencySymbol}${sPrice}*. Let's execute.`;
                            window.open(`https://wa.me/918850739933?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                          className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all flex items-center justify-center"
                        >
                          <Send size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CTA CALL CARD */}
        <div className="mt-24 p-8 md:p-12 bg-gradient-to-r from-slate-900 to-blue-950/40 border border-cyan-500/20 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/aiback.mp4')] opacity-5 pointer-events-none"></div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Want a Custom Hybrid Strategy Blueprint?</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed mb-8">Let's build an exclusive combination setup matching your explicit brand goals at fair rates.</p>
          <button onClick={onContactClick} className="px-10 py-4 bg-white text-blue-900 font-black text-xs md:text-sm uppercase tracking-wider rounded-xl shadow-xl hover:bg-slate-100 transition-transform transform hover:scale-105">
            Book Free Audit Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
// --- THIS MUST BE THE VERY LAST LINE OF THE FILE ---
export default App;
