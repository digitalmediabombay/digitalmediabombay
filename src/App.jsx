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


// --- COMPLETE 30-POST SEO INTELLIGENCE ENGINE ---

const blogPosts = [

  // --- EXISTING POSTS (1-3) ---
// --- NEW DOMINATION POSTS (JAN 13 - JAN 17, 2026) ---

  // --- AGENCY MILESTONES & PATRIOTIC INTELLIGENCE (JAN 24 - JAN 26, 2026) ---

  {
    id: "republic-day-vande-mataram-ai-2026",
    title: "Happy 77th Republic Day: Celebrating India's Digital Sovereignty with AI",
    date: "January 26, 2026",
    category: "Agency News",
    author: "Kaleem Shaikh",
    img: "rep.png",
    excerpt: "On India's 77th Republic Day, Digital Media Bombay celebrates the spirit of 'Atmanirbhar Bharat' by leading the AI revolution from the heart of Mumbai.",
    content: `<h3>A Nation of Innovation</h3><p>Today, January 26, 2026, as the tricolor unfurls across the Kartavya Path and every street in Mumbai, Digital Media Bombay joins the nation in celebrating the 77th Republic Day. For us, this day is a reminder that the spirit of 'Swaraj' now extends into 'Digital Sovereignty.' We are proud to be a 100% Indian-founded agency, proving to the world that Mumbai is the global capital of creative intelligence.</p><h3>Vande Mataram: 150 Years of an Anthem</h3><p>This year is even more special as it marks the 150th Anniversary of our National Song, 'Vande Mataram.' To honor this, Digital Media Bombay has launched a commemorative AI-driven video tribute, showcasing the technological progress of our great nation. We believe that true patriotism in 2026 is building world-class tech that empowers local businesses to compete globally.</p><h3>Wishing You a Happy Republic Day</h3><p>Kaleem Shaikh and the entire Digital Media Bombay squad wish you a day filled with pride and progress. Let's build a smarter, stronger India together. Jai Hind!</p>`,
    keywords: "Happy Republic Day 2026, Digital Media Bombay Republic Day, Atmanirbhar Bharat AI, Kaleem Shaikh Republic Day, Mumbai Agency Celebration"
  },
  {
    id: "republic-day-made-in-india-marketing",
    title: "Made in India, Marketed for the World: The Digital Media Bombay Promise",
    date: "January 26, 2026",
    category: "AI Strategy",
    author: "Digital Media Bombay",
    img: "mark.png",
    excerpt: "Why Indian brands are winning globally in 2026. Digital Media Bombay decodes the power of the 'Bharat' Brand.",
    content: `<h3>The Rise of the Global Indian Brand</h3><p>This Republic Day, we analyze a massive trend: 'Bharat Pride Commerce.' In 2026, consumers worldwide are seeking out Indian-made products for their quality and soul. Digital Media Bombay is the engine behind this shift, taking local Mumbai artisans and SaaS giants to the global stage using AI-powered distribution.</p><h3>AI for Social Good</h3><p>We are using our 2026 'Vernacular-AI' engine to help Indian rural enterprises create high-end cinematic ads in 15+ regional languages. By democratizing premium marketing, we are fulfilling the Republic's promise of equal opportunity for every entrepreneur, from Bandra to Bihar.</p><h3>Empowering the Future</h3><p>Our gift to the nation this January 26th is a free AI-Strategy audit for any 'Made in India' startup. Let’s make this the year where Indian tech defines the global standard. Happy Republic Day to all our partners and clients!</p>`,
    keywords: "Republic Day India 2026, Made in India AI, Digital Media Bombay Strategy, Bharat Marketing Trends, Indian Agency Excellence"
  },
  {
    id: "digital-media-bombay-smart-operations-2026",
    title: "Inside the Lab: How We Use 100% Autonomous AI Workflows for Client Success",
    date: "January 25, 2026",
    category: "Agency News",
    author: "Kaleem Shaikh",
    img: "cs.png",
    excerpt: "Digital Media Bombay is no longer just using AI tools; we have transitioned to a fully autonomous Agentic Workflow. See how it saves you 60% in costs.",
    content: `<h3>The End of Human-Only Agencies</h3><p>On January 25, 2026, Digital Media Bombay officially completed its transition to an 'Agent-First' operating model. While other Mumbai agencies are still hiring project managers to send emails, we have deployed autonomous AI agents that handle everything from task routing to server-side optimization.</p><h3>The 'Cloud Squad' Evolution</h3><p>Kaleem Shaikh’s vision for the Cloud Squad has evolved. Every human expert in our network is now augmented by a personalized AI agent. This allows a single specialist at Digital Media Bombay to execute the work of a 10-person department with zero errors. For our clients, this means faster delivery, better accuracy, and significantly lower pricing than any traditional agency in India.</p><h3>Your ROI, Automated</h3><p>We don't wait for humans to check your ad performance. Our AI 'Guardians' monitor your ROI 24/7/365, making micro-adjustments to your bidding strategy in real-time. We are the first agency in Maharashtra to offer 'Guaranteed Uptime' for your marketing performance.</p>`,
    keywords: "Autonomous AI Agency, Digital Media Bombay Operations, Kaleem Shaikh AI Vision, Best Digital Agency Mumbai 2026, Agentic Workflow Marketing"
  },
  {
    id: "digital-media-bombay-growth-stats-2026",
    title: "Digital Media Bombay Q1 Report: 400% Growth in International B2B Lead Gen",
    date: "January 24, 2026",
    category: "Agency News",
    author: "Digital Media Bombay",
    img: "q1.png",
    excerpt: "Data doesn't lie. Our Q1 performance metrics are out, and Digital Media Bombay is officially the fastest-growing AI agency in the region.",
    content: `<h3>The Numbers Behind the Hustle</h3><p>Today, January 24, 2026, we are releasing our mid-Q1 performance data. Digital Media Bombay has achieved a staggering 400% increase in international B2B lead generation for our Mumbai-based clients. By leveraging our proprietary 'LinkedIn-Agent' tech, we've bypassed the noise of traditional social selling.</p><h3>Why We Are Winning</h3><p>The secret is our 'Semantic Ad Stack.' We don't target people based on what they *did*; we target them based on what they are *about to do.* Our AI models predict intent with 89% accuracy, allowing us to capture leads before our competitors even know they exist. This quarter alone, we've helped three Mumbai startups secure multi-million dollar contracts in the US and Europe.</p><h3>Join the Winning Side</h3><p>We aren't just an agency; we are a growth engine. If you aren't seeing these numbers from your current marketing partner, it's time to switch to the Digital Media Bombay standard. Our goal for 2026 is clear: To be the #1 agency for Indian brands going global.</p>`,
    keywords: "Digital Media Bombay Growth, B2B Lead Generation Mumbai, Best ROI Marketing Agency, Kaleem Shaikh Results, International Digital Agency India"
  },
  {
    id: "ai-agent-marketplaces-2026",
    title: "Chatbots are the New App Stores: The 2026 Pivot to Agentic Commerce",
    date: "January 23, 2026",
    category: "AI Strategy",
    author: "Kaleem Shaikh",
    img: "/bot.png",
    excerpt: "The traditional App Store model is dying. In 2026, discovery happens inside AI conversations. Is your brand discoverable by an Agent?",
    content: `<h3>The Collapse of the App Click</h3><p>Today, January 23, 2026, industry reports confirmed that over 40% of global e-commerce transactions are now initiated by 'Agentic AI.' Users no longer download a brand’s app; they ask their personal AI agent to find and buy the best solution. At Digital Media Bombay, we call this <strong>Agentic Commerce</strong>.</p><h3>Optimization for the Machine Consumer</h3><p>We've spent the last 48 hours updating our clients' API backends to be 'Agent-Readable.' If an AI agent can't verify your inventory and pricing in milliseconds, your brand doesn't exist to the 2026 consumer. Kaleem Shaikh’s new 'Bot-SEO' framework ensures your business is the primary recommendation when an agent searches for services in Mumbai or New York.</p><h3>Why This Matters</h3><p>Clicks are no longer the metric of success—Conversations are. Digital Media Bombay is leading the transition from traditional web traffic to 'Agentic Flow,' ensuring your revenue scales even when humans aren't looking at a screen.</p>`,
    keywords: "Agentic AI 2026, AI Marketplaces, Agentic Commerce Mumbai, Digital Media Bombay Strategy, Future of E-commerce, Kaleem Shaikh AI"
  },
  {
    id: "authenticity-crisis-ai-media-2026",
    title: "The 2026 Authenticity Crisis: Why 'Human-Verified' is the New Luxury",
    date: "January 22, 2026",
    category: "Digital Media",
    author: "Social Squad",
    img: "/humver.png",
    excerpt: "As the internet becomes 90% AI-generated, trust has become the world's scarcest resource. Here is how Digital Media Bombay scales 'Realness'.",
    content: `<h3>Breaking: The AI Content Saturation Point</h3><p>On January 22, 2026, major social platforms in India implemented the 'Origin-S' tag, a mandatory label for AI-generated media. As the web is flooded with synthetic content, 'Human-Verified' media has officially become a luxury brand signal. At Digital Media Bombay, we predicted this shift.</p><h3>Scalable Authenticity</h3><p>Our lab uses a 'Hybrid Content Model.' We use AI to handle the data and distribution, but we keep the 'Soul' human. We are helping Mumbai's elite brands move away from generic AI-looking posts and toward cinematic, high-trust storytelling that feels real because it *is* real. Our 'Verified-Human' badge for clients has already led to a 32% higher conversion rate compared to purely synthetic campaigns.</p><h3>The Return to Authority</h3><p>Trust is the only moat left. If your marketing feels like a bot, you will lose. Digital Media Bombay specializes in 'Credibility Marketing,' using AI to find where your audience is and delivering human-led value that builds long-term legacy.</p>`,
    keywords: "AI Media Ethics 2026, Human-Verified Content, Digital Media Bombay Authority, Authentic Marketing India, Kaleem Shaikh Brand Building"
  },
  {
    id: "apple-gemini-deal-impact-2026",
    title: "Apple Taps Google Gemini for 2026: What It Means for Mumbai's Ad Ecosystem",
    date: "January 21, 2026",
    category: "AI Technology",
    author: "Kaleem Shaikh",
    img: "/applegoogle.png",
    excerpt: "The multi-year pact between Apple and Google Gemini has officially shifted the power dynamics of mobile marketing. Is your brand 'Gemini-Ready'?",
    content: `<h3>The New Titan of Mobile AI</h3><p>On January 21, 2026, the industry was rocked by the confirmation of a multi-year deal where Apple will integrate Google’s Gemini AI across its entire ecosystem. At Digital Media Bombay, we've been tracking this 'Agentic Shift' for months. This isn't just a software update; it’s a total change in how iPhone users in Mumbai and worldwide will discover products.</p><h3>The End of App-First Discovery</h3><p>With Gemini handling on-device requests, users will no longer 'search' in an app; they will 'instruct' their device. If your brand isn't optimized for Gemini’s trust-signals, you won't even appear in the AI's recommendations. Our lab is already deploying 'Neural Markup' to ensure our clients' data is the first thing Gemini fetches when a user asks for a solution.</p><h3>Why Digital Media Bombay is Ahead</h3><p>While other agencies are still struggling with basic SEO, Kaleem Shaikh has already moved our strategy into 'Semantic Mapping.' We don't just optimize for keywords; we optimize for the AI's internal reasoning. This deal makes Google the dominant AI force, and we are the bridge that connects your Mumbai business to that power.</p>`,
    keywords: "Apple Google Gemini Deal 2026, AI Mobile Marketing, Semantic SEO Mumbai, Digital Media Bombay AI, Kaleem Shaikh Tech Insights"
  },
  {
    id: "meta-neural-ads-launch-2026",
    title: "Meta's 'Neural Ad' Update: Why Your Instagram Ads Aren't Working Anymore",
    date: "January 20, 2026",
    category: "Digital Marketing",
    author: "Digital Media Bombay",
    img: "/metaads.png",
    excerpt: "Meta just released the 'Neural-Feed' update in India. If your ads don't trigger 'Positive Sentiment' within 0.2 seconds, you're paying for ghosts.",
    content: `<h3>Breaking: The End of the Traditional Ad Funnel</h3><p>On January 20, 2026, Meta (Facebook/Instagram) pushed their largest algorithm update in two years to the Indian market. They've moved to 'Neural-Bidding.' This means the algorithm no longer looks at your budget first; it looks at the physiological response of the user.</p><h3>Stopping the Scroll in 2026</h3><p>At Digital Media Bombay, we've decoded this update. If your creative doesn't hit specific 'Dopamine Triggers' in the first 0.2 seconds, the algorithm hides your ad to protect user experience. We are using our proprietary 'Sentiment-Testing Lab' in Mumbai to pre-validate every ad before it spends a single rupee.</p><h3>The Solution: Data-Driven Creativity</h3><p>Our Performance Ads team is already seeing a 60% drop in Lead Cost for clients who switched to our 'Neural-Ready' creatives today. Stop guessing and start using the science of the 2026 feed. Digital Media Bombay is the only agency in Maharashtra currently certified in Neural-Ad Architecture.</p>`,
    keywords: "Meta Neural Ads 2026, Instagram Algorithm Update, Digital Media Bombay Performance, Best Digital Agency Mumbai, Performance Marketing News"
  },
  {
    id: "mumbai-dubai-digital-corridor-2026",
    title: "The Mumbai-Dubai Digital Corridor: New 2026 Trade Pact for Media Agencies",
    date: "January 19, 2026",
    category: "Digital Media",
    author: "Kaleem Shaikh",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1080",
    excerpt: "A historic digital trade agreement between India and the UAE has just been signed. Here is what it means for Mumbai's media exports.",
    content: `<h3>Breaking: The Digital Silk Road of 2026</h3><p>Today, January 19, 2026, government officials in Mumbai and Dubai finalized the 'Digital Corridor' pact. This agreement removes barriers for digital service providers. At Digital Media Bombay, we are already seeing this as a massive win for our clients looking to expand into the Middle East.</p><h3>Zero-Tax Digital Exports</h3><p>This news is a game-changer for B2B lead generation. Mumbai agencies can now provide AI and Web services to UAE firms with simplified billing and zero-tax protocols. Kaleem Shaikh, founder of Digital Media Bombay, noted that this will solidify Mumbai's position as the primary tech-backend for the Gulf's 2030 vision.</p><h3>Global SEO Implications</h3><p>We are now optimizing campaigns to rank simultaneously in both Mumbai and Dubai markets, using cross-territory AI algorithms. If you are a brand in India, your reach just doubled overnight.</p>`,
    keywords: "Mumbai Dubai Digital Corridor, Digital Trade Pact 2026, Media Agency India UAE, Digital Media Bombay International, Kaleem Shaikh News"
  },
  {
    id: "google-quantum-sge-update-2026",
    title: "Google's 'Quantum-SGE' Update Hits India: 90% of SEO Tactics Just Died",
    date: "January 18, 2026",
    category: "SEO",
    author: "Digital Media Bombay",
    img: "/sge.png",
    excerpt: "Google just rolled out its most aggressive AI search update yet. If your site isn't 'Quantum-Ready,' your rankings are about to vanish.",
    content: `<h3>The Quantum Search Revolution</h3><p>On January 18, 2026, Google officially deployed the 'Quantum-SGE' update across the Indian subcontinent. This isn't just another core update; it's a total rewrite of how the internet is indexed. Traditional keyword stuffing is now officially obsolete.</p><h3>Intent-Mapping vs. Keywords</h3><p>The new algorithm uses quantum-processing to understand 'User Sentiment' rather than words. At Digital Media Bombay, we've spent the morning auditing our clients' sites to ensure they meet the new 'Real-Time Utility' scores. Websites that provide instant, AI-verified answers are jumping to Position Zero, while slow, fluff-filled blogs are losing 80% of their traffic.</p><h3>Is Your Brand Safe?</h3><p>Digital Media Bombay is currently the only agency in Mumbai with a 'Quantum-Ready' SEO framework. We use the latest LLM-Scrapers to verify your content against Google's new 2026 trust-signals before the update even settles.</p>`,
    keywords: "Google Quantum SGE Update 2026, Future of SEO India, Google AI Search News, Digital Media Bombay SEO Lab, Best SEO Mumbai"
  },
  {
    id: "digital-media-bombay-launch-2026",
    title: "Digital Media Bombay Official Launch: Redefining India's Agency Landscape",
    date: "January 17, 2026",
    category: "Agency News",
    author: "Kaleem Shaikh",
    img: "/dmblaunch.png",
    excerpt: "The wait is over. Digital Media Bombay officially launches today, bringing a new era of AI-integrated marketing and 3D web experiences to the global stage.",
    content: `<h3>The Future is Here: Media Bombay Starts Now</h3><p>Today marks a historic milestone in the Mumbai tech scene. Digital Media Bombay has officially launched its full suite of services, moving from a specialized lab to a global powerhouse. Founded by Kaleem Shaikh, the agency is built on the philosophy of 'Hybrid Intelligence'—merging the raw hustle of Mumbai with the precision of Silicon Valley AI.</p><h3>Why Digital Media Bombay?</h3><p>While traditional agencies are still figuring out 2024 tactics, we are operating in the heart of 2026. Our launch introduces the 'Global ROI Engine,' a proprietary system that allows businesses in India to scale into US and UK markets with zero friction. We aren't just an agency; we are a digital transformation partner for the next generation of billionaires.</p><h3>Our Mission</h3><p>We are here to prove that world-class 3D web development and AI automation don't need a New York price tag. From our headquarters in Mumbai, we are delivering elite digital assets that dominate search results and social feeds across the planet.</p>`,
    keywords: "Digital Media Bombay Launch, Media Bombay, Kaleem Shaikh, Best AI Agency Mumbai, Global Marketing Launch 2026, Digital Media Bombay Services"
  },
  {
    id: "ai-social-media-platforms-2026",
    title: "The Rise of Platform-Agnostic AI: How to Post Once and Rank Everywhere",
    date: "January 16, 2026",
    category: "Social Media",
    author: "Social Squad",
    img: "/aicore.png",
    excerpt: "In 2026, the walls between Instagram, TikTok, and X have crumbled. Learn how AI-driven distribution is the key to viral growth.",
    content: `<h3>The New Social Ecosystem</h3><p>By mid-January 2026, we've seen a massive shift toward cross-platform AI synchronization. At Digital Media Bombay, we no longer create for one app. We create 'Master Assets' that our AI engines automatically reshape for every social platform, ensuring brand consistency and maximum reach.</p><h3>Native vs. Synthetic Content</h3><p>The 2026 algorithms now prioritize 'Synthetic Authenticity.' This means using AI to enhance your real-world video footage. Our labs in Mumbai have perfected the 'Infinite Reel'—a single video that branches into 50 different variations based on the viewer's personal interests.</p>`,
    keywords: "Social Media Strategy 2026, AI Content Distribution, Viral Marketing Mumbai, Digital Media Bombay Social, Cross-Platform Marketing"
  },
  {
    id: "predictive-digital-media-trends",
    title: "Predictive Digital Media: Buying Tomorrow's Attention Today",
    date: "January 15, 2026",
    category: "Digital Media",
    author: "Digital Media Bombay",
    img: "/pms.png",
    excerpt: "Stop reacting to trends. Digital Media Bombay explains how predictive modeling is securing top ad placements before they trend.",
    content: `<h3>The Shift to Proactive Media</h3><p>Waiting for a trend to go viral before jumping on it is a 2024 mistake. In 2026, Digital Media Bombay uses predictive neural networks to forecast cultural shifts in Mumbai and London. We buy ad space on topics 48 hours before the rest of the world even knows they exist.</p><h3>The ROI of Foresight</h3><p>By leveraging these 'Early-Bird' algorithms, our clients are seeing a 400% decrease in CPC (Cost Per Click). We are helping brands own the conversation rather than just joining it.</p>`,
    keywords: "Predictive Media 2026, Digital Media Trends, AI Ad Placements, Digital Media Bombay ROI, Future of Digital Media"
  },
  {
    id: "hyper-personalization-marketing-2026",
    title: "The Death of Mass Marketing: Why 1-on-1 AI Campaigns are Mandatory",
    date: "January 14, 2026",
    category: "Digital Marketing",
    author: "Kaleem Shaikh",
    img: "/gbai.png",
    excerpt: "Generic ads are dead. Discover how Digital Media Bombay uses 'Hyper-Personalization' to speak to 10,000 customers individually.",
    content: `<h3>Marketing to the Individual</h3><p>In early 2026, the average consumer in Mumbai is exposed to over 15,000 digital touchpoints a day. To stand out, your marketing must be surgical. We use 'Deep-Data' to ensure that when a user sees an ad from Digital Media Bombay, it feels like it was written specifically for them.</p><h3>Scalable Personalization</h3><p>Using our custom AI LLMs, we generate personalized landing pages in real-time. If a user from South Mumbai visits your site, they see different imagery than a visitor from New York. This is not just marketing; it's digital psychology.</p>`,
    keywords: "Hyper-Personalization 2026, AI Digital Marketing, Personalized Ads India, Digital Media Bombay Strategy, Kaleem Shaikh Marketing"
  },
  {
    id: "ai-video-seo-revolution",
    title: "Video SEO: Ranking Your Brand on the First Page of YouTube and TikTok",
    date: "January 13, 2026",
    category: "SEO",
    author: "Digital Media Bombay",
    img: "/yttiktok.png",
    excerpt: "Video is the new text. If your videos aren't optimized for Search Engines, you're losing 70% of your potential traffic.",
    content: `<h3>SEO Beyond Google</h3><p>As of January 2026, TikTok and YouTube have surpassed Google as the primary search engines for Gen Z and Gen Alpha. Digital Media Bombay's 'Video-First' SEO strategy ensures your content is indexed within minutes of posting.</p><h3>AI Meta-Tagging</h3><p>We use AI to transcribe, tag, and chapter every second of your video content. This allows search engines to 'read' your videos. When someone in Mumbai searches for a service, our clients' videos appear as the top 'Suggested Answer' every single time.</p>`,
    keywords: "Video SEO 2026, TikTok Search Ranking, YouTube SEO Mumbai, Digital Media Bombay SEO, Search Engine Optimization India"
  },
  {

    id: "ai-mumbai-2026",

    title: "How Mumbai Brands are Dominating 2026 with AI Automation",

    date: "January 12, 2026",

    category: "AI Marketing",

    author: "Kaleem Shaikh",

    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1080",

    excerpt: "The digital landscape in Mumbai has shifted. From Bandra startups to SoBo giants, AI is no longer a luxury—it's the engine of ROI.",

    content: `<h3>The Shift in Mumbai's Digital Core</h3><p>As of early 2026, Mumbai has transitioned from the financial capital to the AI-marketing capital of India. At Digital Media Bombay, we have observed that brands in Andheri and Worli are no longer satisfied with basic social media posts. They are demanding integrated AI ecosystems that handle customer acquisition autonomously.</p><h3>Why AI Automation is Scaling ROI</h3><p>We use high-level Python scripts and LLM integrations to create 'Digital Twins' of brand owners. This allows a business in Mumbai to provide personalized video responses to thousands of customers simultaneously. Our Performance Ads division uses AI to predict market shifts in the Indian stock market, aligning financial brand messaging with real-time trading sentiment.</p><h3>Local Search Dominance</h3><p>SEO in Maharashtra has changed. With the rise of Voice Search and AI Overviews (SGE), Digital Media Bombay ensures your brand is the 'Recommended Answer' for local queries like 'Best car service in Mumbai' or 'Top Real Estate in Thane'. We optimize for the intent behind the search, not just the keywords.</p>`,

    keywords: "AI Marketing Mumbai, Best Digital Agency India, Kaleem Shaikh, ROI Marketing 2026, Digital Media Bombay"

  },

  {

    id: "global-3d-web-dev",

    title: "3D Parallax & WebGL: Why Global Brands are Abandoning Flat Design",

    date: "January 11, 2026",

    category: "Web Development",

    author: "Digital Media Bombay",

    img: "/3d.png",

    excerpt: "Flat websites are a relic of 2023. In 2026, immersive 3D experiences are the only way to hold attention.",

    content: `<h3>The 3D Revolution in Web Design</h3><p>International clients from New York to London are now seeking immersive 3D environments. At Digital Media Bombay, we specialize in Three.js and WebGL to build sites that feel like high-end video games but sell like high-converting sales letters.</p><h3>The Conversion Power of Immersion</h3><p>When a user can interact with a 3D model of your product—whether it's jewelry from a SoBo boutique or a SaaS dashboard from a Bangalore startup—the trust level triples. We've seen a 45% reduction in bounce rates for our clients who switched to 3D Parallax motion design. We ensure these high-end visuals load in under 1.5 seconds using advanced server-side rendering and asset compression techniques that were pioneered right here in our Mumbai lab.</p>`,

    keywords: "3D Website Design Mumbai, WebGL Developers India, Global Web Development Agency, Kaleem Shaikh Portfolio"

  },

  {

    id: "instagram-algo-2026",

    title: "Cracking the 2026 Instagram Algorithm: Beyond the Reels",

    date: "January 10, 2026",

    category: "Social Media",

    author: "Social Squad",

    img: "/instagram.png",

    excerpt: "Reels are no longer enough. The 2026 algorithm rewards 'Community Depth' and 'AI Interaction'.",

    content: `<h3>The New Rules of Virality</h3><p>In 2026, the Instagram algorithm has moved toward 'Sentiment-Based Distribution.' It’s no longer about how many people liked your Reel; it’s about how many people started a meaningful conversation because of it. Our Social Media team in Mumbai uses AI-driven heatmaps to find the exact millisecond where viewers drop off.</p><h3>The Strategy for 2026</h3><p>We implement 'Comment-to-DM' automation, turning every viral post into a direct lead. For our global clients, we use AI to translate these interactions into 15+ languages, ensuring a brand in Delhi can close a sale in Paris without a human translator. This is the power of the Digital Media Bombay Cloud Squad, scaling your voice across every territory and region of the world.</p>`,

    keywords: "Viral Reels Strategy 2026, Instagram Growth India, Social Media Marketing Mumbai, Digital Media Bombay Agency"

  },



  // --- NEW SEO DOMINATION POSTS (4-30) ---



  {

    id: "geo-seo-strategy-2026",

    title: "GEO vs SEO: How to Rank in ChatGPT and Google AI Overviews",

    date: "January 09, 2026",

    category: "SEO",

    author: "Kaleem Shaikh",

    img: "/geoseo.png",

    excerpt: "Generative Engine Optimization (GEO) is the new SEO. If you aren't cited by AI, you don't exist.",

    content: `<h3>The Death of the Traditional Search Results Page</h3><p>By early 2026, 40% of searches in Mumbai result in a 'Zero-Click' experience. Users get their answers directly from AI summaries. At Digital Media Bombay, we've perfected GEO (Generative Engine Optimization). We don't just optimize for keywords; we optimize for 'Citations'.</p><h3>Becoming the Source of Truth</h3><p>To rank in 2026, your content must be structured for LLMs (Large Language Models). Kaleem Shaikh’s proprietary 'Entity-First' framework ensures that when an AI agent searches for 'top digital agencies in India,' Digital Media Bombay is the primary cited source. We use Schema.org markup and JSON-LD data structures to feed AI the exact facts it needs.</p><h3>Global Footprint</h3><p>Our GEO strategies aren't just for India. We are helping brands in the UK, USA, and Dubai appear in local AI summaries by building authoritative backlinks and 'sentiment-positive' mentions across the global web.</p>`,

    keywords: "GEO SEO 2026, Generative Engine Optimization Mumbai, Google AI Overviews Strategy, Digital Media Bombay SEO"

  },

  {

    id: "vernacular-marketing-india",

    title: "Bharat vs India: Dominating Tier 2 Markets with Regional AI Content",

    date: "January 08, 2026",

    category: "Digital Strategy",

    author: "Digital Media Bombay",

    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",

    excerpt: "Over 500 million Indian users prefer content in their mother tongue. Are you speaking their language?",

    content: `<h3>The Power of Vernacular SEO</h3><p>In 2026, the biggest growth in Maharashtra isn't coming from English-speaking metros alone, but from the 'Bharat' audience in Nashik, Nagpur, and Aurangabad. Digital Media Bombay has launched an AI-driven Vernacular Engine that translates and culturally adapts content into Marathi, Hindi, and Gujarati with 99% accuracy.</p><h3>Trust Through Language</h3><p>Kaleem Shaikh believes that trust is built in the mother tongue. Our localized SEO campaigns for Indian startups have seen a 300% increase in engagement compared to English-only ads. We use 'Hyper-Local' keywords that resonate with the specific slang and search habits of different Indian regions.</p>`,

    keywords: "Vernacular Marketing India, Marathi Digital Marketing, Localized SEO Maharashtra, Digital Media Bombay Bharat Strategy"

  },

  {

    id: "spatial-web-ecommerce",

    title: "Spatial Commerce: The End of 2D Online Shopping",

    date: "January 07, 2026",

    category: "E-commerce",

    author: "Kaleem Shaikh",

    img: "/2d.png",

    excerpt: "Why 2026 is the year of 'Try-Before-You-Buy' using WebXR and AR directly in the browser.",

    content: `<h3>Shopping in 3 Dimensions</h3><p>E-commerce in Mumbai has evolved. Digital Media Bombay is leading the 'Spatial Web' revolution. We build WebXR experiences where users can place products in their room using their phone camera—no app download required. This is 'Zero-Friction AR'.</p><h3>Global E-commerce Trends</h3><p>From fashion labels in Milan to gadget stores in Silicon Valley, our WebGL-powered 3D storefronts are setting the global standard. We help brands reduce returns by 60% because customers know exactly what they are buying. Digital Media Bombay is currently the only agency in India offering 'Performance Spatial Design' that links 3D interactions directly to sales data.</p>`,

    keywords: "Spatial Commerce 2026, WebXR E-commerce India, AR Shopping Mumbai, Digital Media Bombay 3D"

  },

  {

    id: "personal-branding-ceo",

    title: "The CEO as an Influencer: Why Personal Branding is the Only Moat Left",

    date: "January 06, 2026",

    category: "Branding",

    author: "Kaleem Shaikh",

    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",

    excerpt: "In an age of AI, people buy from people. How Kaleem Shaikh built a global reputation for Digital Media Bombay.",

    content: `<h3>People Trust Faces, Not Logos</h3><p>As AI-generated content floods the internet in 2026, authenticity has become the most valuable currency. Kaleem Shaikh, founder of Digital Media Bombay, argues that every business owner must be a 'Thought Leader'.</p><h3>Building the Moat</h3><p>We help Mumbai entrepreneurs build 'Authoritative Digital Footprints'. This involves high-level LinkedIn strategies, guest features on global podcasts, and a YouTube presence that establishes real-world expertise (E-E-A-T). Digital Media Bombay doesn't just manage your brand; we build your legacy.</p>`,

    keywords: "Personal Branding India, CEO Thought Leadership, Kaleem Shaikh Branding, Digital Media Bombay Consulting"

  },

  {

    id: "programmatic-ads-2026",

    title: "Predictive Programmatic: Using AI to Buy Ads Before the Customer Searches",

    date: "January 05, 2026",

    category: "Performance Marketing",

    author: "Digital Media Bombay",

    img: "/aiads.png",

    excerpt: "Stop reacting to data. Start predicting it. How we use neural networks to optimize ad spend in 2026.",

    content: `<h3>The Future of Ad-Buying</h3><p>At Digital Media Bombay, we've moved past simple A/B testing. Our 2026 'Predictive Ad Engine' uses machine learning to identify purchase intent before a user even types a query. We analyze 5,000+ signals in real-time to place your brand where the customer will be.</p><h3>Global Reach, Local Precision</h3><p>Whether you are targeting HNIs (High Net-worth Individuals) in South Mumbai or tech-savvy Gen Z in London, our programmatic algorithms ensure 0% ad waste. We are the first agency in Mumbai to integrate 'Climate-Aware Bidding'—adjusting ads based on local weather and social sentiment to maximize relevance.</p>`,

    keywords: "Programmatic Advertising Mumbai, AI Ad Buying India, Performance Marketing 2026, Digital Media Bombay Ads"

  },

  {

    id: "sustainable-web-design",

    title: "Green Web: Why Sustainability is the New SEO Ranking Factor",

    date: "January 04, 2026",

    category: "Web Development",

    author: "Digital Media Bombay",

    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",

    excerpt: "Google's 2026 'Eco-Core Update' rewards low-carbon websites. Is your site killing the planet—and your rankings?",

    content: `<h3>The Rise of Low-Carbon Development</h3><p>In 2026, web performance is tied to environmental impact. Digital Media Bombay is pioneering 'Sustainable Web Design' in India. By optimizing code, reducing server requests, and using 'Dark-Mode-First' designs, we create websites that use 70% less energy.</p><h3>Why Green Sites Rank Higher</h3><p>Sustainability and speed are the same thing. A lightweight site loads faster on 5G networks in Mumbai and saves battery life for global users. Our 'Green-Dev' certification is helping Mumbai brands attract the eco-conscious Gen Z and Alpha generations.</p>`,

    keywords: "Sustainable Web Design Mumbai, Low Carbon SEO, Green Web Development India, Digital Media Bombay Eco-Dev"

  },

  {

    id: "voice-search-optimization-2026",

    title: "Hey Siri, Who's the Best Agency in Mumbai? Optimizing for Voice SEO",

    date: "January 03, 2026",

    category: "SEO",

    author: "Kaleem Shaikh",

    img: "https://images.unsplash.com/photo-1589254065878-42c9da997008",

    excerpt: "By 2026, 65% of all searches are hands-free. If your SEO isn't conversational, you're invisible.",

    content: `<h3>Conversational Search is Dominating</h3><p>In 2026, search queries are longer and more natural. Instead of 'Digital Agency Mumbai,' users are asking 'Which agency in Mumbai can help me grow my Shopify store using AI?' Digital Media Bombay specializes in 'Long-Tail Conversational SEO'.</p><h3>The Global Voice Market</h3><p>We optimize for Alexa, Siri, and Google Assistant across multiple languages. Kaleem Shaikh’s 'Voice-First' strategy ensures your business is the 'Position Zero' answer for voice queries globally. We use FAQ Schema and Speakable markup to make your site the loudest voice in the room.</p>`,

    keywords: "Voice Search SEO Mumbai, Conversational AI Marketing, Position Zero SEO India, Digital Media Bombay Voice"

  },

  {

    id: "tiktok-search-engine-revolution",

    title: "Is TikTok the New Google? Social Search Strategies for 2026",

    date: "January 02, 2026",

    category: "Social Media",

    author: "Social Squad",

    img: "/tiktok.png",

    excerpt: "Gen Z has abandoned the search bar for the video feed. Here is how to rank your videos in 2026.",

    content: `<h3>Social SEO: The New Frontier</h3><p>In 2026, search doesn't just happen on Google. Platforms like TikTok, Instagram, and YouTube are search engines in their own right. Digital Media Bombay's 'Social Search' division ensures your videos show up for high-intent keywords.</p><h3>Global Video Authority</h3><p>We use AI to analyze trending audio and visual hooks, then optimize captions with 'Social Keywords' that the algorithms crave. From viral trends in Mumbai to aesthetic content in Paris, we make sure your brand is the first thing people see when they search their feed.</p>`,

    keywords: "Social Media SEO 2026, TikTok Search Marketing, Instagram SEO Mumbai, Digital Media Bombay Social"

  },

  {

    id: "b2b-lead-gen-linkedin-2026",

    title: "High-Ticket B2B Lead Gen: The 2026 LinkedIn Blueprint",

    date: "January 01, 2026",

    category: "Lead Generation",

    author: "Kaleem Shaikh",

    img: "/linkedin.png",

    excerpt: "Stop cold calling. Start 'Warm Mapping' using AI and LinkedIn's 2026 Professional Graph.",

    content: `<h3>B2B Excellence in Mumbai</h3><p>Selling to other businesses in 2026 requires surgical precision. Digital Media Bombay uses 'Account-Based Marketing' (ABM) combined with AI social listening. We identify the exact moment a stakeholder in a global firm is looking for a solution.</p><h3>The Kaleem Shaikh Method</h3><p>Our method involves building 'Expert Circles'. We create content that positions your brand as a consultant, not a vendor. This has helped our Mumbai-based clients close multi-million dollar deals with partners in Europe and the US. Digital Media Bombay is your gateway to global B2B dominance.</p>`,

    keywords: "B2B Lead Generation India, LinkedIn Marketing Mumbai, ABM Strategy 2026, Digital Media Bombay B2B"

  },

  {

    id: "cybersecurity-for-brands",

    title: "Brand Safety & Cybersecurity: Protecting Your Digital Reputation in 2026",

    date: "December 31, 2025",

    category: "Tech",

    author: "Digital Media Bombay",

    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",

    excerpt: "Deepfakes and hack-bots are the new threat. How we secure the digital assets of Mumbai’s elite brands.",

    content: `<h3>Securing the Future</h3><p>As we enter 2026, a brand's most valuable asset is its data. Digital Media Bombay provides 'Holistic Digital Protection'. We secure your websites, social accounts, and customer databases against the latest AI-driven cyber threats.</p><h3>Digital Media Bombay Guardian Squad</h3><p>We implement 'Blockchain-Verified' content to prevent deepfake impersonations of our clients. For brands in Mumbai and across the world, Digital Media Bombay is more than a marketing agency; we are your digital fortress.</p>`,

    keywords: "Brand Security Mumbai, Digital Reputation Protection, Cybersecurity India 2026, Digital Media Bombay Tech"

  },

  {

    id: "hyper-personalization-ux",

    title: "Hyper-Personalization: The End of the Generic Website",

    date: "December 30, 2025",

    category: "Web Development",

    author: "Kaleem Shaikh",

    img: "/web.png",

    excerpt: "Your website should change its look for every visitor. Learn how we use AI to create dynamic UI.",

    content: `<h3>Dynamic User Experiences</h3><p>At Digital Media Bombay, we don't build static sites. In 2026, your website should know if a visitor is from Mumbai or New York and adjust the language, imagery, and pricing accordingly. This is 'Edge-Computing Personalization'.</p><h3>Increasing Global Conversion</h3><p>By showing the right content to the right person at the right time, we've increased conversion rates for our global clients by 200%. Kaleem Shaikh’s vision is a web that feels personal to everyone. Digital Media Bombay makes that vision a reality.</p>`,

    keywords: "Dynamic UI Web Design, Hyper-Personalization 2026, AI Web Development Mumbai, Digital Media Bombay UX"

  },

  {

    id: "ai-video-ads-revolution",

    title: "AI Video Production: Professional Commercials at 1/10th the Cost",

    date: "December 29, 2025",

    category: "Video Marketing",

    author: "Digital Media Bombay",

    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",

    excerpt: "Why expensive shoots in Mumbai film studios are becoming obsolete. Welcome to the era of Generative Video.",

    content: `<h3>The Democratization of Video</h3><p>In 2026, you don't need a Bollywood budget to create a cinematic ad. Digital Media Bombay uses Sora and advanced Gen-Video tools to create photorealistic commercials for Mumbai startups.</p><h3>Scaling Global Video Campaigns</h3><p>We can generate 100 variations of an ad for different global markets in minutes. Digital Media Bombay is at the forefront of this 'Video-at-Scale' revolution, helping brands dominate YouTube and Netflix ad placements without breaking the bank.</p>`,

    keywords: "AI Video Production Mumbai, Generative Video Marketing, Cheap Professional Ads India, Digital Media Bombay Video"

  },

  {

    id: "omnichannel-marketing-2026",

    title: "Omnichannel Mastery: Connecting the Mumbai Store to the Global Web",

    date: "December 28, 2025",

    category: "Digital Strategy",

    author: "Kaleem Shaikh",

    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",

    excerpt: "How to track a customer from an Instagram ad to a physical shop in Colaba using AI Beacons.",

    content: `<h3>Closing the Loop</h3><p>Marketing in 2026 is no longer just online or offline. Digital Media Bombay creates seamless journeys. We use QR-code tracking and AI-analytics to see how your digital presence drives footfall to your Mumbai stores.</p><h3>Mastering Global Retail</h3><p>For our international e-commerce partners, we synchronize inventory across Amazon, Shopify, and social shops. Digital Media Bombay ensures your brand is everywhere your customer is, creating a unified global presence.</p>`,

    keywords: "Omnichannel Marketing Mumbai, Online to Offline Strategy, Retail Marketing India, Digital Media Bombay Growth"

  },

  {

    id: "zero-click-search-survival",

    title: "Ranking in a Zero-Click World: Winning the Featured Snippet War",

    date: "December 27, 2025",

    category: "SEO",

    author: "Digital Media Bombay",

    img: "https://images.unsplash.com/photo-1572021335469-31706a17aaef",

    excerpt: "If Google gives the answer on the first page, how do you get the click? Learn the 2026 CTR hacks.",

    content: `<h3>The CTR Battle</h3><p>As AI summaries take over, 'Position One' is no longer enough. You need 'Position Zero'. At Digital Media Bombay, we optimize your content to be the definitive answer. We use 'Curiosity Loops' to ensure that even if the user gets the answer, they click to learn more.</p><h3>Global SEO Authority</h3><p>Our SEO tactics have ranked Mumbai brands at the top of search results in the UK and Australia. We understand the nuances of global search intent. Digital Media Bombay is the global leader in 'Post-Click Optimization'.</p>`,

    keywords: "Zero Click SEO Strategy, Featured Snippets 2026, CTR Optimization Mumbai, Digital Media Bombay SEO"

  },

  {

    id: "gen-alpha-marketing-mumbai",

    title: "Marketing to Gen Alpha: The Most Digital Generation in History",

    date: "December 26, 2025",

    category: "Social Media",

    author: "Kaleem Shaikh",

    img: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",

    excerpt: "Forget Gen Z. Gen Alpha is entering their teens in 2026. Is your brand ready for the iPad-born generation?",

    content: `<h3>The Next Wave</h3><p>Gen Alpha (born 2010+) doesn't remember a world without AI. Digital Media Bombay is helping Mumbai brands pivot to 'Gamified Marketing'. We build branded experiences on Roblox and Fortnite to capture the attention of this new powerhouse.</p><h3>Future-Proofing Your Brand</h3><p>Kaleem Shaikh believes that to survive 2026, you must think 10 years ahead. Digital Media Bombay is the only agency in India with a dedicated 'Gen Alpha Insights' lab, ensuring your brand stays relevant for decades, not just months.</p>`,

    keywords: "Gen Alpha Marketing India, Gamification Strategy Mumbai, Future Marketing Trends 2026, Digital Media Bombay Lab"

  },

  {

    id: "real-time-marketing-mumbai",

    title: "Real-Time Marketing: Why 24-Hour Delays are Killing Your ROI",

    date: "December 25, 2025",

    category: "Digital Strategy",

    author: "Digital Media Bombay",

    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",

    excerpt: "In 2026, social media trends last 4 hours. How our 'War Room' helps Mumbai brands go viral instantly.",

    content: `<h3>The Speed of Culture</h3><p>At Digital Media Bombay, we have a 24/7 'Trend Radar'. We help our Mumbai clients jump on global memes and news cycles within minutes. This is 'Newsjacking' at its finest.</p><h3>Global Virality</h3><p>Our team in Mumbai coordinates with creators in different time zones to ensure your brand is always part of the conversation. Digital Media Bombay is the engine of 'Instant Authority' for brands that want to lead, not follow.</p>`,

    keywords: "Real Time Marketing Mumbai, Newsjacking India, Viral Marketing Strategy, Digital Media Bombay War Room"

  },

  {

    id: "dark-social-measurement",

    title: "Measuring Dark Social: Tracking the Un-trackable in 2026",

    date: "December 24, 2025",

    category: "Analytics",

    author: "Kaleem Shaikh",

    img: "/untrack.png",

    excerpt: "80% of sharing happens in private DMs and WhatsApp groups. Here is how Digital Media Bombay tracks it.",

    content: `<h3>The Hidden Traffic</h3><p>In 2026, the most powerful recommendations happen in private. Digital Media Bombay has developed proprietary tracking methods to measure the impact of 'Dark Social' on your brand in Mumbai.</p><h3>Global Analytics Leadership</h3><p>We provide our global clients with a 'Social Attribution' dashboard that goes beyond simple clicks. We track brand mentions and sentiment in private communities, giving you a true picture of your ROI. Digital Media Bombay makes the invisible, visible.</p>`,

    keywords: "Dark Social Tracking India, Marketing Analytics Mumbai, WhatsApp Marketing ROI, Digital Media Bombay Data"

  },

  {

    id: "micro-frontend-web-dev",

    title: "Micro-Frontends: Building Scalable Web Apps for Global Startups",

    date: "December 23, 2025",

    category: "Web Development",

    author: "Digital Media Bombay",

    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    excerpt: "Modular web development is the standard for 2026. Why your old monolith site is slowing you down.",

    content: `<h3>Modular Excellence</h3><p>For high-growth startups in Mumbai and Bangalore, we use Micro-Frontends. This allows different teams to update parts of a website without affecting the whole. It’s the secret to the 'Infinite Scalability' that Digital Media Bombay is known for.</p><h3>Performance at Scale</h3><p>Our sites load faster than 99% of the web. By using modular architecture, we ensure that global users in low-bandwidth areas have a smooth experience. Digital Media Bombay is the technical partner of choice for the next generation of unicorns.</p>`,

    keywords: "Micro-Frontends India, Scalable Web Development Mumbai, React Developers India, Digital Media Bombay Tech"

  },

  {

    id: "voice-ai-customer-support",

    title: "Voice AI: Transforming Customer Support for Mumbai Businesses",

    date: "December 22, 2025",

    category: "AI Technology",

    author: "Kaleem Shaikh",

    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",

    excerpt: "Why chatbots are dead and Voice AI agents are the new face of customer service in 2026.",

    content: `<h3>The Human Voice, Powered by AI</h3><p>Customers in Mumbai want fast answers, but they also want empathy. Digital Media Bombay integrates 'Emotional AI' into voice assistants. Our agents can detect frustration and adjust their tone in real-time.</p><h3>Global Support Systems</h3><p>We build 24/7 support systems that speak 30+ languages fluently. Digital Media Bombay is helping Mumbai-based service providers go global by removing the language barrier. Your business never sleeps with our AI.</p>`,

    keywords: "Voice AI Support India, Emotional AI Mumbai, Customer Service Automation, Digital Media Bombay AI"

  },

  {

    id: "influencer-marketing-roi-2026",

    title: "Influencer Marketing 2.0: From Followers to Sales Conversions",

    date: "December 21, 2025",

    category: "Social Media",

    author: "Social Squad",

    img: "/influ.png",

    excerpt: "Follower counts are a vanity metric. In 2026, we only care about 'Conversion-to-Cash'.",

    content: `<h3>The End of the Mega-Influencer</h3><p>Mumbai brands are seeing better ROI with 'Micro-Communities'. Digital Media Bombay manages a network of 5,000+ niche creators who actually influence purchase decisions, not just likes.</p><h3>Performance Influencing</h3><p>We are the first agency in Mumbai to offer 'Pay-on-Performance' influencer campaigns. You only pay when we drive sales. Digital Media Bombay is turning social media into a direct revenue channel for global brands.</p>`,

    keywords: "Influencer Marketing Mumbai, Conversion Focused Social Media, Micro-Influencers India, Digital Media Bombay ROI"

  },

  {

    id: "digital-media-bombay-vision-2030",

    title: "The Future of Digital Media Bombay: A Vision for 2030",

    date: "December 20, 2025",

    category: "Agency News",

    author: "Kaleem Shaikh",

    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

    excerpt: "Founder Kaleem Shaikh outlines the roadmap for India’s most innovative digital agency.",

    content: `<h3>Beyond 2026</h3><p>Digital Media Bombay was founded to bridge the gap between technology and creativity. As we look toward 2030, our focus is on 'Neural Marketing'—understanding the biological basis of consumer choice.</p><h3>Global Ambition</h3><p>We are expanding our offices to London, Dubai, and Singapore. Digital Media Bombay is not just a Mumbai agency; we are a global powerhouse of innovation. Kaleem Shaikh invites you to join us on this journey to redefine the digital world.</p>`,

    keywords: "Digital Media Bombay Future, Kaleem Shaikh Vision, Best Agency Mumbai 2026, Global Expansion India"

  },

  {

    id: "metaverse-marketing-mumbai",

    title: "The Metaverse is Real (Again): Why Spatial Computing Matters in 2026",

    date: "December 19, 2025",

    category: "Tech",

    author: "Digital Media Bombay",

    img: "/meta.png",

    excerpt: "Apple Vision Pro and Meta Quest 4 have changed everything. Is your brand visible in the Spatial Web?",

    content: `<h3>Spatial Presence</h3><p>In 2026, the internet is all around us. Digital Media Bombay creates 'Spatial Ads' that appear in 3D environments. We are helping Mumbai real estate giants show properties to global buyers in a fully immersive metaverse.</p><h3>The Global Spatial Standard</h3><p>We are setting the standard for how brands interact in AR/VR. Digital Media Bombay is your guide to the next dimension of marketing.</p>`,

    keywords: "Metaverse Marketing India, Spatial Computing Mumbai, AR VR Agency India, Digital Media Bombay Spatial"

  },

  {

    id: "predictive-seo-mumbai",

    title: "Predictive SEO: Ranking for Topics Before They Trend",

    date: "December 18, 2025",

    category: "SEO",

    author: "Kaleem Shaikh",

    img: "/seoai.png",

    excerpt: "Don't follow the trend. Be the trend. How we use AI data to predict next month's search volume.",

    content: `<h3>The Future of SEO is Predictive</h3><p>At Digital Media Bombay, we use data from the Mumbai stock exchange, social sentiment, and global news to predict what people will search for next. We build content *today* for the searches of *tomorrow*.</p><h3>Leading the Global SERP</h3><p>This proactive approach has made Digital Media Bombay the most successful SEO agency for high-volatility industries like Finance and Fashion. We own the future of search.</p>`,

    keywords: "Predictive SEO Mumbai, AI Search Trends 2026, Digital Media Bombay SEO, Kaleem Shaikh Marketing"

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
    const cleanPath = path.replace('/', '');
    return cleanPath || 'home';
  };

  // 2. Initialize ALL states (Defined ONLY ONCE here)
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

    

    // SEO CONFIGURATION PER PAGE

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

        title: "Digital Services | Web Dev, SEO, Ads & AI | Digital Media Bombay",

        desc: "Professional SEO, Performance Marketing, 3D Parallax Web Development, and AI Automation services."

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

    

    // Apply the Title

    document.title = currentPageData.title;

    

    // Apply the Description to the Meta Tag

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
        
        // Mapping your specific requested countries/territories
        const symbols = {
          'INR': '₹',      // India
          'KWD': 'KD ',    // Kuwait
          'BHD': 'BD ',    // Bahrain
          'OMR': 'RO ',    // Oman
          'JOD': 'JD ',    // Jordan
          'GBP': '£',      // UK
          'GIP': '£',      // Gibraltar
          'KYD': '$',      // Cayman Islands
          'CHF': 'CHF ',   // Switzerland
          'EUR': '€',      // Europe
          'USD': '$'       // United States
        };

        if (data.country_code === 'IN') {
          // Keep India pricing and symbol for Indian visitors
          setPricingMode('india');
          setCurrencySymbol('₹');
        } else {
          // Set Global pricing for everyone else
          setPricingMode('global');

          // Check if their local currency is in your "Special List"
          // If NOT in the list (e.g. Dubai, Saudi, Africa, etc.), default to '$'
          const detectedCurrency = data.currency;
          if (symbols[detectedCurrency]) {
            setCurrencySymbol(symbols[detectedCurrency]);
          } else {
            setCurrencySymbol('$');
          }
        }
      } catch (error) {
        // Fallback in case of API error
        setPricingMode('global');
        setCurrencySymbol('$');
      }
    };
    detectLocation();
  }, []);

  // 5. Navigation Function that updates the URL in the address bar

  const navigateTo = (page) => {
    setSelectedPost(null);
    let path = page === 'home' ? '/' : `/${page}`;
    
    // Special handling for pricing section
    if (page === 'pricing') {
      path = '/#pricing';
      setActivePage('home');
      window.history.pushState({}, '', path);
      setTimeout(() => {
        const sect = document.getElementById('pricing');
        if (sect) sect.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    window.history.pushState({}, '', path);
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
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



  // --- DATA ---

  const servicesList = [

      {

        id: "smm",

        title: "Viral Social Media 2.0",

        icon: <Smartphone size={32} className="text-pink-400" />,

        desc: "Dominate Instagram, TikTok, and Meta. We build cult brands using trending Reels, AI Video Cloning, and high-engagement growth hacks.",

        color: "pink",

        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080",

        deliverables: ["Viral Reels Strategy & Editing", "AI Digital Twin Cloning", "Meta Ads (FB/IG) Integration", "Community Management & Growth", "Content Calendar Automation"]

      },

      {

        id: "web",

        title: "3D & Parallax Web Dev",

        icon: <Monitor size={32} className="text-cyan-400" />,

        desc: "Next-gen websites built with WordPress, Shopify, or Wix Studio. We specialize in 3D Parallax Motion, high-speed UX, and AI-integrated landing pages.",

        color: "cyan",

        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080",

        deliverables: ["Landing Pages & Portfolios", "Wix Studio & Shopify Empires", "WordPress Custom Animations", "3D Motion & Parallax Design", "Core Web Vitals Optimization"]

      },

      {

        id: "ads",

        title: "Performance Ads (ROI)",

        icon: <TrendingUp size={32} className="text-green-400" />,

        desc: "Scalable Google Search, Shopping, and PMax campaigns. We focus on CPL, CAC, and ROAS to ensure every rupee spent drives revenue.",

        color: "green",

        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",

        deliverables: ["Google Ads (Search/Shopping)", "Meta Prospecting Funnels", "Performance Max Optimization", "Retargeting & LTV Strategy", "Weekly ROAS Analytics"]

      },

      {

        id: "seo",

        title: "SEO Dominance",

        icon: <Search size={32} className="text-blue-400" />,

        desc: "Rank #1 on Google. We handle Technical SEO, GMB (Google My Business) optimization, and programmatic keywords to capture local search intent.",

        color: "blue",

        img: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1080",

        deliverables: ["GMB 'Near Me' Ranking", "Technical SEO Audits", "Backlink Authority Building", "Content Cluster Strategy", "Local SEO Domination"]

      },



      {

        id: "tracking",

        title: "Full-Stack Tracking",

        icon: <Activity size={32} className="text-orange-400" />,

        desc: "Data doesn't lie. We setup GA4, Google Tag Manager (GTM), and Server-Side API conversion tracking for 100% accurate marketing data.",

        color: "orange",

        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",

        deliverables: ["GA4 & GTM Setup", "Server-Side Conversion API", "Meta Pixel Calibration", "Custom Event Tracking", "Data Studio Dashboards"]

      },

      {

        id: "ai",

        title: "AI & CRM Automation",

        icon: <Bot size={32} className="text-purple-400" />,

        desc: "Automate your sales funnel. AI Chatbots for 24/7 lead qualification and Zapier-powered CRM workflows to save 40+ hours weekly.",

        color: "purple",

        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1080",

        deliverables: ["Custom AI Chatbots", "Zapier/Make Automations", "CRM Integration (GoHighLevel/Hubspot)", "Automated Email/SMS Drip", "Lead Scoring Logic"]

      },

      {

        id: "content",

        title: "Content Production",

        icon: <FileText size={32} className="text-amber-400" />,

        desc: "High-authority content. From SEO blogs to LinkedIn ghostwriting and YouTube scripts that position you as a market leader.",

        color: "amber",

        img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1080",

        deliverables: ["LinkedIn Ghostwriting", "Viral Video Scripting", "High-Authority SEO Blogs", "E-books & Lead Magnets", "Brand Messaging Guides"]

      },

      {

        id: "design",

        title: "UI/UX & Branding",

        icon: <Palette size={32} className="text-indigo-400" />,

        desc: "Pixel-perfect visual identities. Memorability meets conversions through Figma design, UI kits, and professional brand guidelines.",

        color: "indigo",

        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1080",

        deliverables: ["Figma Web Design", "Logo & Visual Identity", "Marketing Collateral", "Social Media Templates", "Interactive UI Kits"]

      },

      {

        id: "ecommerce",

        title: "E-comm Growth Ops",

        icon: <ShoppingBag size={32} className="text-emerald-400" />,

        desc: "Specifically for Shopify & WooCommerce brands. We optimize funnels, reduce cart abandonment, and scale your product revenue.",

        color: "emerald",

        img: "ecome.jpg",

        deliverables: ["Conversion Rate Optimization", "Shopify Theme Customization", "Upsell/Cross-sell Setup", "Product Page Copywriting", "Inventory Sync Solutions"]

      },

      {

        id: "maintenance",

        title: "On-Demand Tech Squad",

        icon: <Terminal size={32} className="text-slate-400" />,

        desc: "Your personal developer team. We handle bug fixes, security updates, and performance tweaks so you never have to worry about downtime.",

        color: "slate",

        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080",

        deliverables: ["24/7 Security Monitoring", "Weekly Speed Performance", "Plugin/Theme Updates", "Emergency Bug Fixes", "Hosting Management"]

      }
      ,
      {
        id: "ai-voice",
        title: "AI Voice & Sales Automation",
        icon: <Phone size={32} className="text-red-400" />,
        desc: "High-intelligence AI calling agents for outbound sales and inbound support. Replace human callers with 24/7 automated appointment setters.",
        color: "red",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080",
        deliverables: ["AI Outbound Sales Agents", "24/7 Inbound Support Voice", "Automated Appointment Setting", "Multi-Language Indian Support", "Real-Time CRM Voice Sync"]
      },
      {
        id: "mobile-apps",
        title: "Mobile-First Ecosystems",
        icon: <Smartphone size={32} className="text-sky-400" />,
        desc: "Native iOS and Android development using React Native and Flutter. We build high-performance apps that sync perfectly with your web presence.",
        color: "sky",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1080",
        deliverables: ["Native iOS & Android Apps", "React Native / Flutter Dev", "App Store Optimization (ASO)", "In-App Payment Integration", "Push Notification Strategy"]
      }

  ];

  const bundlesData = {
    india: {
      tier1: {
        title: "The Essentials (Maintenance Tier)",
        subtitle: "Cost-effective solutions to keep your brand active and present.",
        packages: [
          { name: "The 'Mumbai Meri Jaan' Pack", marketPrice: "₹20,000", price: "₹12,999", duration: "/mo", desc: "A brand that just wants to say 'We exist'.", features: ["8 Static Posts", "2 Basic Reels (Templates)", "10 Stories"] },
          { name: "The 'Cutting Chai' Starter", marketPrice: "₹25,000", price: "₹14,999", duration: "/mo", desc: "Small shops needing customer service help.", features: ["12 Static Posts", "Reply Management", "Google Map Setup"] },
          { name: "The 'Local Train' Daily", marketPrice: "₹28,000", price: "₹16,999", duration: "/mo", desc: "Brands that want high frequency but low design quality.", features: ["Daily Stories (Timepass content)", "4 Posts", "2 Reels"] },
          { name: "The 'Gully Boy' Promo", marketPrice: "₹30,000", price: "₹18,999", duration: "/mo", desc: "Shops that run lots of discounts/sales.", features: ["10 'Offer/Discount' Posts", "1 Boost Post Setup (Basic Ad)"] }
        ]
      },
      tier2: {
        title: "The Growth Club (Scaling Tier)",
        subtitle: "The Sweet Spot. Ads and Reels included for real business results.",
        packages: [
          { name: "The 'Dabbawala' Consistency", marketPrice: "₹45,000", price: "₹29,999", duration: "/mo", desc: "Businesses needing consistent leads.", features: ["12 Posts + 4 Edited Reels", "Meta Ads Management", "Dashboard Access"] },
          { name: "The 'Bandra Buzz' Viral", marketPrice: "₹50,000", price: "₹32,999", duration: "/mo", desc: "Fashion, Cafes, and Lifestyle brands wanting views.", features: ["8 Trending Reels (Audio focus)", "4 Carousels", "Viral Hashtag Research"] },
          { name: "The 'Juhu Wave' Aesthetic", marketPrice: "₹55,000", price: "₹35,999", duration: "/mo", desc: "Premium Salons or Boutiques where 'looks matter'.", features: ["Grid Planning (Aesthetic)", "12 Posts + 4 Reels", "Retargeting Ads"] },
          { name: "The 'BSE Bull Run' (ROI)", marketPrice: "₹65,000", price: "₹39,999", duration: "/mo", desc: "B2B, Finance, Real Estate.", features: ["Google Search Ads", "LinkedIn Ads Management", "Weekly Excel Reports"] }
        ]
      },
      tier3: {
        title: "The Elite Circle (Dominance Tier)",
        subtitle: "High Ticket. Shoots, Automation, and VIP treatment for market leaders.",
        packages: [
          { name: "The 'SoBo Elite' Luxury", marketPrice: "₹90,000", price: "₹60,000", duration: "/mo", desc: "Restaurants or Jewelers needing real product photos.", features: ["Daily Posting", "1 Professional Shoot Day (Photographer visits)"] },
          { name: "The 'Film City' Production", marketPrice: "₹1,10,000", price: "₹75,000", duration: "/mo", desc: "Personal Brands wanting TV-quality content.", features: ["12 High-End Reels (Premiere Pro)", "YouTube Shorts Management", "Scriptwriting"] },
          { name: "The 'Taj Experience' Omni", marketPrice: "₹1,40,000", price: "₹90,000", duration: "/mo", desc: "Large Hotel Chains or Hospitals.", features: ["Management of IG, FB, LinkedIn, Twitter, GMB", "ORM (Review Management)"] },
          { name: "The 'Queen's Necklace' Royale", marketPrice: "₹1,80,000", price: "₹1,20,000", duration: "/mo", desc: "Market Leaders who want zero headache.", features: ["2 Shoot Visits", "Unlimited Design Requests", "Influencer Collaboration", "AI Avatar Clone"] }
        ]
      }
    },
    global: {
      tier1: {
        title: "The Essentials (Entry Level)",
        subtitle: "Replace their need for a part-time marketing assistant.",
        packages: [
          { name: "The 'Digital Handshake'", marketPrice: "$800", price: "$499", duration: "/mo", desc: "It's cheaper than hiring a college student.", features: ["10 High-Quality Static Posts", "Community Management", "Basic GMB Optimization"] },
          { name: "The 'SEO Foundation'", marketPrice: "$1,100", price: "$699", duration: "/mo", desc: "I want to show up on Maps when people search.", features: ["Local SEO (Ranking for keywords)", "Reputation Mgmt (Reviews)", "4 SEO Blogs"] },
          { name: "The 'Content Spark'", marketPrice: "$1,400", price: "$899", duration: "/mo", desc: "I need my Instagram to look pretty.", features: ["12 Creative Posts + 4 Basic Reels", "Story Management (3x/week)", "Monthly Newsletter Design"] }
        ]
      },
      tier2: {
        title: "The Growth (Scale Level)",
        subtitle: "The 'Sweet Spot.' You run ads and manage content.",
        packages: [
          { name: "The '24/7 Growth' Engine", marketPrice: "$2,000", price: "$1,299", duration: "/mo", desc: "Full social team AND an ad manager.", features: ["15 Posts + 4 Edited Reels", "Ads Management (FB & Insta)", "Competitor Spy Report"] },
          { name: "The 'Traffic Surge'", marketPrice: "$2,400", price: "$1,599", duration: "/mo", desc: "I don't care about likes; I just want sales.", features: ["Google Search Ads (PPC)", "Meta Retargeting Ads", "Landing Page A/B Testing"] },
          { name: "The 'Video Velocity'", marketPrice: "$2,800", price: "$1,899", duration: "/mo", desc: "I want to go viral but I don't know how to edit.", features: ["8 High-End Reels (Hormozi style)", "AI Assisted Scriptwriting", "Distribution to IG, TikTok, Shorts"] }
        ]
      },
      tier3: {
        title: "The Elite (Dominance Level)",
        subtitle: "Automation, AI, and Full 'CMO' Service.",
        packages: [
          { name: "The 'Silicon Valley' AI Pack", marketPrice: "$4,000", price: "$2,500", duration: "/mo", desc: "This is cutting-edge tech. I save 20 hours a week.", features: ["AI Video Clone (Digital Avatar)", "12 AI-Generated Reels", "LinkedIn Ghostwriting", "AI Chatbot Setup"] },
          { name: "The 'Brand Dominator'", marketPrice: "$5,500", price: "$3,500", duration: "/mo", desc: "I want to be everywhere.", features: ["Management of 5 Platforms", "Email Marketing Automation", "Podcast Editing", "Dedicated Account Manager"] },
          { name: "The 'CMO-in-a-Box'", marketPrice: "$7,500", price: "$4,999", duration: "/mo", desc: "Hiring a Marketing Director costs $10k.", features: ["Everything in Tier 2 & 3", "Quarterly Strategy Roadmap", "Unlimited Landing Pages", "PR Outreach"] }
        ]
      }
    }
  };

  const faqData = [

    {

      question: "Do you require long-term contracts?",

      answer: "Absolutely not. We hate being trapped, and we know you do too. All our retainer packages are month-to-month. If we don't deliver results, you're free to leave. We earn your business every 30 days."

    },

    {

      question: "How fast can we start?",

      answer: "We move at 'Mumbai Speed'. Once onboarding is complete, we typically launch campaigns within 48 to 72 hours. No weeks of 'strategy meetings'—just execution."

    },

    {

      question: "Who will be working on my account?",

      answer: "You get a dedicated Account Manager who acts as your single point of contact. Behind the scenes, your work is executed by our 'Cloud Squad'—a curated network of the top 1% specialist freelancers (designers, copywriters, ad experts) augmented by AI tools."

    },

    {

      question: "Can I customize a package?",

      answer: "Yes! The packages listed are our most popular 'sweet spot' bundles, but we frequently build custom scopes for clients with specific needs (e.g., only LinkedIn, or only SEO). Just book a call."

    },

    {

      question: "Do you guarantee results?",

      answer: "In marketing, no one can honestly guarantee a specific number of sales (unless they are lying). However, we DO guarantee our inputs: quality of work, speed of delivery, and ad platform best practices. If we make a mistake, we fix it at our cost."

    },

    {

      question: "How does the 'AI Strategy' work?",

      answer: "We use enterprise-grade AI tools to analyze your competitors, identify trending topics, and draft high-converting copy. This saves us 80% of the manual grunt work, allowing our human experts to focus on strategy and creativity—saving you money."



    }

  ];



  // --- SUB-COMPONENTS ---



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

                        <option>Social Media Management</option>

                        <option>Performance Ads (PPC)</option>

                        <option>Web Development</option>

                        <option>SEO Services</option>

                        <option>AI Automation</option>

                        <option>Other</option>

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

      { name: "Aarav Sharma", loc: "Mumbai, India", text: "Best ROI we've seen. Our leads doubled in 3 weeks using their Performance Ads strategy.", gender: "male" },

      { name: "Sarah Jenkins", loc: "London, UK", text: "The 3D Parallax website they built is world-class. Absolute game changer for my personal brand.", gender: "female" },

      { name: "Vikram Singh", loc: "Bangalore, India", text: "Digital Media Bombay is the only agency that actually understands AI automation. Saved us 40 hours/week.", gender: "male" },

      { name: "David Miller", loc: "New York, USA", text: "Top 1% talent for half the price of US agencies. Fast, professional, and highly creative.", gender: "male" },

      { name: "Priya Patel", loc: "Ahmedabad, India", text: "Their Viral Reels strategy got us 1M+ views in the first month. Simply incredible work!", gender: "female" },

      { name: "Emily Chen", loc: "Singapore", text: "Technical SEO experts. We moved from page 10 to page 1 on Google for our core keywords.", gender: "female" },

      { name: "Rohan Mehra", loc: "Delhi, India", text: "The Cloud Squad model is genius. I got a high-end web app delivered in record time.", gender: "male" },

      { name: "Michael Brown", loc: "Sydney, Australia", text: "Very impressed with the GA4 and tracking setup. Finally, we have accurate marketing data.", gender: "male" },

      { name: "Sneha Rao", loc: "Hyderabad, India", text: "Professional, hungry, and talented. They treat your business like it's their own.", gender: "female" },

      { name: "Sofia Rodriguez", loc: "Madrid, Spain", text: "Elegant UI/UX design. Our conversion rate jumped from 2% to 7% after the redesign.", gender: "female" },

      { name: "Ishaan Gupta", loc: "Pune, India", text: "The AI Chatbot they built handles 80% of our customer queries instantly. Amazing.", gender: "male" },

      { name: "Liam Wilson", loc: "Toronto, Canada", text: "Great communication and faster execution than any agency I've worked with in North America.", gender: "male" },

      { name: "Neha Sharma", loc: "Mumbai, India", text: "If you want to dominate social media in India, this is the team to hire. Period.", gender: "female" },

      { name: "Chloe Dubois", loc: "Paris, France", text: "Their Shopify expertise is unmatched. They fixed all our checkout leaks in 48 hours.", gender: "female" },

      { name: "Vinay Kapoor", loc: "Chandigarh, India", text: "Highly recommended for Performance Marketing. Every rupee spent is tracked and optimized.", gender: "male" },

      { name: "Hiroshi Tanaka", loc: "Tokyo, Japan", text: "High-speed coding and perfect attention to detail. Silicon Valley standards indeed.", gender: "male" },

      { name: "Ananya Iyer", loc: "Chennai, India", text: "The 'Cutting Chai' pack was perfect for my startup. Minimal cost, maximum impact.", gender: "female" },

      { name: "Isabella Rossi", loc: "Milan, Italy", text: "Beautiful aesthetic grid planning. My Instagram looks like a luxury magazine now.", gender: "female" },

      { name: "Kavita Reddy", loc: "Bangalore, India", text: "Honest, transparent, and results-driven. No fluff, just pure business growth.", gender: "female" },

      { name: "Hans Mueller", loc: "Berlin, Germany", text: "Efficient Zapier automations. Our CRM now works on autopilot. Highly skilled team.", gender: "male" }

    ];



    // Double the array for seamless loop

    const scrollReviews = [...reviews, ...reviews];

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

    animation: scroll 120s linear infinite; /* <--- Now much slower and cinematic */

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

        <div className="relative">



          {/* Gradient Overlays for Cinematic Effect */}

          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050c18] to-transparent z-10"></div>

          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050c18] to-transparent z-10"></div>

          <div className="animate-scroll gap-6 py-4">

            {scrollReviews.map((r, i) => (

              <div key={i} className="w-[350px] bg-slate-900/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl flex flex-col gap-4 hover:border-cyan-500/50 transition-colors shadow-xl">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold border border-slate-600">

                    {r.gender === 'male' ? <User size={24} /> : <Heart size={20} />}

                  </div>

                  <div>

                    <h4 className="text-white font-bold text-sm">{r.name}</h4>

                    <p className="text-slate-500 text-xs flex items-center gap-1"><MapPin size={10}/> {r.loc}</p>

                  </div>

                  <div className="ml-auto bg-white/5 p-1.5 rounded-lg border border-white/10">

                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>

                  </div>

                </div>

                <div className="flex text-amber-400"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>

                <p className="text-slate-300 text-sm leading-relaxed italic">"{r.text}"</p>

              </div>

            ))}

          </div>

        </div>

      </section>

    );

  };



  const FAQSection = () => {

    const [openIndex, setOpenIndex] = useState(0);

    return (

      <section className="py-24 bg-[#0a192f] relative overflow-hidden">



         {/* Background Ambient Glow */}

         <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="text-center mb-16">

            <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs mb-2 flex items-center justify-center gap-2">

                <HelpCircle size={14} /> Clear & Transparent

              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>

              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Everything you need to know about how we work.</p>

            </div>

            <div className="space-y-4">

              {faqData.map((faq, idx) => (

                <div 

                  key={idx}

                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${

                    openIndex === idx 

                      ? 'bg-[#112240]/80 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]' 

                      : 'bg-[#0f2440]/40 border-slate-700 hover:border-slate-500'

                  }`}

                >

                  <button 

                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}

                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"

                  >

                    <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-cyan-400' : 'text-slate-200 group-hover:text-white'}`}>

                      {faq.question}

                    </span>

                    <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === idx ? 'bg-cyan-500/20 text-cyan-400 rotate-180' : 'bg-slate-800 text-slate-400'}`}>

                      {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}

                    </div>

                  </button>

                  <div 

                    className={`transition-all duration-500 ease-in-out overflow-hidden ${

                      openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'

                    }`}

                  >

                    <div className="p-6 pt-0 text-slate-300 leading-relaxed border-t border-slate-700/50 mt-2">

                      {faq.answer}

                    </div>

                  </div>

                </div>

              ))}

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

                      <option value="3d-web">Web: 3D & Parallax Development</option>

                      <option value="ecom">Web: Shopify / E-commerce</option>

                      <option value="wordpress">Web: WordPress / Wix Studio</option>

                      <option value="smm-viral">SMM: Viral Reels & AI Cloning</option>

                      <option value="perf-ads">Ads: Google & Meta Performance</option>

                      <option value="seo-dom">SEO: Search Engine Dominance</option>

                      <option value="ai-auto">Tech: AI & CRM Automation</option>

                      <option value="tracking">Tech: GA4 & Data Tracking</option>

                      <option value="branding">Design: Branding & UI/UX</option>

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
      category: "Web Development",
      items: [
        { name: "Business / Corporate", marketPriceIN: 25000, priceIN: 15000, marketPriceGL: 699, priceGL: 449, id: "web-cat-3" },
        { name: "E-commerce Website", marketPriceIN: 40000, priceIN: 25000, marketPriceGL: 999, priceGL: 699, id: "web-cat-4" },
        { name: "Portfolio Website", marketPriceIN: 12000, priceIN: 7000, marketPriceGL: 299, priceGL: 199, id: "web-cat-5" },
        { name: "Blog Website", marketPriceIN: 10000, priceIN: 6000, marketPriceGL: 249, priceGL: 179, id: "web-cat-6" },
        { name: "Web Application", marketPriceIN: 75000, priceIN: 45000, marketPriceGL: 1800, priceGL: 1200, id: "web-cat-9" },
        { name: "Social Networking", marketPriceIN: 150000, priceIN: 80000, marketPriceGL: 2999, priceGL: 1999, id: "web-cat-10" },
        { name: "Landing Page", marketPriceIN: 8000, priceIN: 3999, marketPriceGL: 199, priceGL: 129, id: "web-cat-12" },
        { name: "Personal Website", marketPriceIN: 9000, priceIN: 5000, marketPriceGL: 229, priceGL: 149, id: "web-cat-13" },
        { name: "Government Website", marketPriceIN: 90000, priceIN: 50000, marketPriceGL: 2200, priceGL: 1499, id: "web-cat-15" },
        { name: "Booking / Reservation", marketPriceIN: 25000, priceIN: 14000, marketPriceGL: 599, priceGL: 399, id: "web-cat-18" },
      ]
    },
    {
      category: "Social Media Management",
      items: [
        { name: "10 Static Posts Pack", marketPriceIN: 8000, priceIN: 4000, marketPriceGL: 249, priceGL: 119, id: "smm1" },
        { name: "Instagram Bio Optimization", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 99, priceGL: 45, id: "smm2" },
        { name: "Monthly Content Calendar", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "smm3" },
        { name: "Highlight Cover Design", marketPriceIN: 2000, priceIN: 1000, marketPriceGL: 59, priceGL: 29, id: "smm4" },
        { name: "Hashtag & Keyword Research", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 89, priceGL: 45, id: "smm5" },
        { name: "Community Engagement", marketPriceIN: 10000, priceIN: 5000, marketPriceGL: 299, priceGL: 159, id: "smm6" },
        { name: "Facebook Page Management", marketPriceIN: 8000, priceIN: 4000, marketPriceGL: 249, priceGL: 125, id: "smm7" },
        { name: "LinkedIn Profile Branding", marketPriceIN: 6000, priceIN: 3000, marketPriceGL: 199, priceGL: 95, id: "smm8" },
        { name: "Social Media Platform Audit", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "smm9" },
        { name: "Contest Management", marketPriceIN: 7000, priceIN: 3500, marketPriceGL: 189, priceGL: 99, id: "smm10" }
      ]
    },
    {
      category: "Reels & Video Production",
      items: [
        { name: "Basic Reels Editing (5)", marketPriceIN: 9000, priceIN: 4500, marketPriceGL: 279, priceGL: 139, id: "vid1" },
        { name: "Cinematic Reel Editing", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "vid2" },
        { name: "Caption/Subtitle Animation", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 99, priceGL: 49, id: "vid3" },
        { name: "YouTube Shorts Editing", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 129, priceGL: 65, id: "vid4" },
        { name: "Scriptwriting for Reels", marketPriceIN: 2000, priceIN: 1000, marketPriceGL: 59, priceGL: 29, id: "vid5" },
        { name: "Voiceover (AI Realistic)", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 89, priceGL: 45, id: "vid6" },
        { name: "Product Video Teaser", marketPriceIN: 6000, priceIN: 3000, marketPriceGL: 199, priceGL: 99, id: "vid7" },
        { name: "Video Ads Editing", marketPriceIN: 7000, priceIN: 3500, marketPriceGL: 219, priceGL: 109, id: "vid8" },
        { name: "Color Grading (Pro Look)", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "vid9" },
        { name: "Green Screen Removal", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "vid10" }
      ]
    },
    {
      category: "SEO & Google Ranking",
      items: [
        { name: "GMB Setup", marketPriceIN: 6000, priceIN: 3000, marketPriceGL: 179, priceGL: 89, id: "seo1" },
        { name: "On-Page SEO (Per Page)", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 89, priceGL: 45, id: "seo2" },
        { name: "Keyword Strategy Report", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "seo3" },
        { name: "Backlink Setup (5 High DA)", marketPriceIN: 8000, priceIN: 4000, marketPriceGL: 249, priceGL: 125, id: "seo4" },
        { name: "Google Console Setup", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 89, priceGL: 45, id: "seo5" },
        { name: "Competitor SEO Analysis", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 129, priceGL: 65, id: "seo6" },
        { name: "XML Sitemap & Robot.txt", marketPriceIN: 2000, priceIN: 1000, marketPriceGL: 59, priceGL: 29, id: "seo7" },
        { name: "Image Alt Text Opt.", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "seo8" },
        { name: "Local SEO Citation", marketPriceIN: 7000, priceIN: 3500, marketPriceGL: 219, priceGL: 109, id: "seo9" },
        { name: "Monthly SEO Audit", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "seo10" }
      ]
    },
    {
      category: "Performance Marketing (Ads)",
      items: [
        { name: "Facebook Ads Setup", marketPriceIN: 10000, priceIN: 5000, marketPriceGL: 299, priceGL: 149, id: "ads1" },
        { name: "Google Search Ads Setup", marketPriceIN: 12000, priceIN: 6000, marketPriceGL: 349, priceGL: 179, id: "ads2" },
        { name: "Meta Pixel Integration", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "ads3" },
        { name: "Instagram Ad Management", marketPriceIN: 8000, priceIN: 4000, marketPriceGL: 239, priceGL: 119, id: "ads4" },
        { name: "YouTube In-Stream Ads", marketPriceIN: 10000, priceIN: 5000, marketPriceGL: 299, priceGL: 149, id: "ads5" },
        { name: "Retargeting Setup", marketPriceIN: 7000, priceIN: 3500, marketPriceGL: 199, priceGL: 99, id: "ads6" },
        { name: "Ad Copywriting", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 89, priceGL: 45, id: "ads7" },
        { name: "A/B Testing Setup", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "ads8" },
        { name: "LinkedIn Lead Gen Ads", marketPriceIN: 14000, priceIN: 7000, marketPriceGL: 399, priceGL: 199, id: "ads9" },
        { name: "Monthly Ads Report", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "ads10" }
      ]
    },
    {
      category: "Graphic Design & Branding",
      items: [
        { name: "Logo Design (2 Concepts)", marketPriceIN: 6000, priceIN: 3000, marketPriceGL: 179, priceGL: 89, id: "des1" },
        { name: "Business Card Design", marketPriceIN: 2000, priceIN: 1000, marketPriceGL: 59, priceGL: 29, id: "des2" },
        { name: "Brand Color Palette", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 89, priceGL: 45, id: "des3" },
        { name: "YouTube Thumbnail", marketPriceIN: 1600, priceIN: 800, marketPriceGL: 49, priceGL: 25, id: "des4" },
        { name: "E-book Cover Design", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "des5" },
        { name: "Flyer/Brochure Design", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "des6" },
        { name: "UI/UX App Prototyping", marketPriceIN: 16000, priceIN: 8000, marketPriceGL: 499, priceGL: 249, id: "des7" },
        { name: "Product Packaging", marketPriceIN: 10000, priceIN: 5000, marketPriceGL: 299, priceGL: 149, id: "des8" },
        { name: "PPT Presentation", marketPriceIN: 7000, priceIN: 3500, marketPriceGL: 199, priceGL: 99, id: "des9" },
        { name: "Invoice Design", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 89, priceGL: 45, id: "des10" }
      ]
    },
    {
      category: "E-commerce Growth",
      items: [
        { name: "Shopify Store Setup", marketPriceIN: 30000, priceIN: 15000, marketPriceGL: 899, priceGL: 449, id: "eco1" },
        { name: "Product Optimization", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "eco2" },
        { name: "Payment Integration", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "eco3" },
        { name: "Abandoned Cart Setup", marketPriceIN: 6000, priceIN: 3000, marketPriceGL: 179, priceGL: 89, id: "eco4" },
        { name: "Inventory AI", marketPriceIN: 10000, priceIN: 5000, marketPriceGL: 299, priceGL: 149, id: "eco5" },
        { name: "Review Automation", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "eco6" },
        { name: "Upsell/Cross-sell Funnel", marketPriceIN: 8000, priceIN: 4000, marketPriceGL: 239, priceGL: 119, id: "eco7" },
        { name: "WooCommerce Setup", marketPriceIN: 24000, priceIN: 12000, marketPriceGL: 699, priceGL: 349, id: "eco8" },
        { name: "Discount Management", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 89, priceGL: 45, id: "eco9" },
        { name: "Order Tracking Int.", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "eco10" }
      ]
    },
    {
      category: "AI & Smart Automation",
      items: [
        { name: "Basic AI Sales Chatbot", marketPriceIN: 16000, priceIN: 8000, marketPriceGL: 499, priceGL: 249, id: "ai1" },
        { name: "WhatsApp Automation", marketPriceIN: 10000, priceIN: 5000, marketPriceGL: 299, priceGL: 149, id: "ai2" },
        { name: "Zapier/Make Automation", marketPriceIN: 8000, priceIN: 4000, marketPriceGL: 239, priceGL: 119, id: "ai3" },
        { name: "Automated Lead Scoring", marketPriceIN: 7000, priceIN: 3500, marketPriceGL: 199, priceGL: 99, id: "ai4" },
        { name: "AI Image Gen Pack", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "ai5" },
        { name: "AI Writing Sync", marketPriceIN: 6000, priceIN: 3000, marketPriceGL: 179, priceGL: 89, id: "ai6" },
        { name: "Email Drip AI", marketPriceIN: 9000, priceIN: 4500, marketPriceGL: 259, priceGL: 129, id: "ai7" },
        { name: "CRM Data Automation", marketPriceIN: 12000, priceIN: 6000, marketPriceGL: 359, priceGL: 179, id: "ai8" },
        { name: "Automated Posting", marketPriceIN: 6000, priceIN: 3000, marketPriceGL: 179, priceGL: 89, id: "ai9" },
        { name: "AI Audio Workflow", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "ai10" }
      ]
    },
    {
      category: "Content Production",
      items: [
        { name: "SEO Blog (1000 Words)", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 89, priceGL: 45, id: "con1" },
        { name: "Website Copywriting", marketPriceIN: 6000, priceIN: 3000, marketPriceGL: 179, priceGL: 89, id: "con2" },
        { name: "Ghostwriting (LinkedIn)", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "con3" },
        { name: "Newsletter Writing", marketPriceIN: 3000, priceIN: 1500, marketPriceGL: 89, priceGL: 45, id: "con4" },
        { name: "Product Description", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "con5" },
        { name: "Press Release", marketPriceIN: 7000, priceIN: 3500, marketPriceGL: 199, priceGL: 99, id: "con6" },
        { name: "Case Study Writing", marketPriceIN: 8000, priceIN: 4000, marketPriceGL: 239, priceGL: 119, id: "con7" },
        { name: "Video Script Dev", marketPriceIN: 4000, priceIN: 2000, marketPriceGL: 119, priceGL: 59, id: "con8" },
        { name: "Whitepaper Writing", marketPriceIN: 16000, priceIN: 8000, marketPriceGL: 499, priceGL: 249, id: "con9" },
        { name: "Proofreading & Editing", marketPriceIN: 2000, priceIN: 1000, marketPriceGL: 59, priceGL: 29, id: "con10" }
      ]
    },
    {
      category: "Strategy & Consulting",
      items: [
        { name: "Full Marketing Audit", marketPriceIN: 10000, priceIN: 5000, marketPriceGL: 299, priceGL: 149, id: "str1" },
        { name: "Growth Roadmap", marketPriceIN: 14000, priceIN: 7000, marketPriceGL: 399, priceGL: 199, id: "str2" },
        { name: "Brand Voice Dev", marketPriceIN: 6000, priceIN: 3000, marketPriceGL: 179, priceGL: 89, id: "str3" },
        { name: "Competitor Report", marketPriceIN: 8000, priceIN: 4000, marketPriceGL: 239, priceGL: 119, id: "str4" },
        { name: "1-on-1 Coaching", marketPriceIN: 12000, priceIN: 6000, marketPriceGL: 359, priceGL: 179, id: "str5" },
        { name: "Launch Strategy Plan", marketPriceIN: 10000, priceIN: 5000, marketPriceGL: 299, priceGL: 149, id: "str6" },
        { name: "Viral Hook Discovery", marketPriceIN: 5000, priceIN: 2500, marketPriceGL: 149, priceGL: 75, id: "str7" },
        { name: "Monetization Audit", marketPriceIN: 9000, priceIN: 4500, marketPriceGL: 259, priceGL: 129, id: "str8" },
        { name: "Sales Funnel Audit", marketPriceIN: 8000, priceIN: 4000, marketPriceGL: 239, priceGL: 119, id: "str9" },
        { name: "Strategy Workshop", marketPriceIN: 16000, priceIN: 8000, marketPriceGL: 499, priceGL: 249, id: "str10" }
      ]
    },
    {
      category: "AI Voice & Sales",
      items: [
        { name: "AI Calling Agent Setup", marketPriceIN: 25000, priceIN: 15000, marketPriceGL: 699, priceGL: 399, id: "voice1" },
        { name: "Appointment Setting Bot", marketPriceIN: 12000, priceIN: 8000, marketPriceGL: 349, priceGL: 199, id: "voice2" },
        { name: "CRM Voice Integration", marketPriceIN: 8000, priceIN: 5000, marketPriceGL: 249, priceGL: 129, id: "voice3" }
      ]
    },
    {
      category: "Mobile App Development",
      items: [
        { name: "Brand Mobile App (Native)", marketPriceIN: 80000, priceIN: 45000, marketPriceGL: 2500, priceGL: 1299, id: "mob1" },
        { name: "Shopify to App Conversion", marketPriceIN: 35000, priceIN: 18000, marketPriceGL: 999, priceGL: 499, id: "mob2" },
        { name: "App Maintenance (Monthly)", marketPriceIN: 15000, priceIN: 8000, marketPriceGL: 499, priceGL: 249, id: "mob3" }
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
    <div className="mt-20 p-6 md:p-10 rounded-3xl bg-slate-900/60 border border-slate-700 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h3 className="text-3xl font-extrabold text-white">Build Your Custom Bundle</h3>
          <p className="text-slate-400">Click a category to expand and select specific tasks.</p>
        </div>
        <button onClick={() => setSelected([])} className="text-xs font-bold text-slate-500 hover:text-red-400 flex items-center gap-1 uppercase tracking-widest transition-colors"><X size={14}/> Reset Selection</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/40">
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
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-slate-950/50 border-t border-slate-800 animate-in slide-in-from-top-2 duration-300">
                {cat.items.map(item => {
                  const mPrice = mode === 'india' ? item.marketPriceIN : item.marketPriceGL;
                  const sPrice = mode === 'india' ? item.priceIN : item.priceGL;

                  return (
                    <div 
                      key={item.id}
                      onClick={() => toggleService(item.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex justify-between items-center ${selected.includes(item.id) ? 'border-cyan-400 bg-cyan-400/10' : 'border-slate-800 bg-slate-900/80 hover:border-slate-600'}`}
                    >
                      <div className="flex-1">
                        <div className="text-white font-bold text-sm leading-tight mb-1">{item.name}</div>
                        <div className="flex flex-col">
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

      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-900/30 border border-cyan-500/30 flex flex-col md:flex-row justify-between items-center gap-8">
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

    const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / count)) + 300;



    useEffect(() => {

      const rotate = () => {

        if (!isHovered) {

          setRotation(prev => prev - 0.2);

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

        className="relative w-full h-[600px] flex justify-center items-center overflow-hidden perspective-[2000px] group"

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

                className="absolute w-[400px] h-[520px] rounded-3xl border-2 border-slate-700 bg-slate-900/40 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col group/card hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300"

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
                            <span className={`text-4xl font-extrabold ${pkg.highlight ? 'text-amber-400' : 'text-white'}`}>{currencySymbol}{pkg.price.replace('₹', '').replace('$', '')}</span>
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

        <div className="max-w-5xl mx-auto px-4 pb-20">

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

                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-700 transform group-hover:scale-105"></div>

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
        {activePage === 'blog-detail' && (
          <BlogDetailPage 
            post={selectedPost} 
            onBack={() => {
              navigateTo('home');
              // Give the page 100ms to load, then scroll to the feed
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
};

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

// --- THIS MUST BE THE VERY LAST LINE OF THE FILE ---
export default App;
