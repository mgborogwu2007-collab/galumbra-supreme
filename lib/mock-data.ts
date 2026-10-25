export const creatorCards = [
  {
    name: "Nyra Vale",
    handle: "@nyravale",
    niche: "AI Strategist",
    followers: "1.4M",
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    name: "Keon Arlo",
    handle: "@keonarlo",
    niche: "Founder Storytelling",
    followers: "820K",
    accent: "from-cyan-500 via-sky-500 to-indigo-500",
  },
  {
    name: "Selene Moss",
    handle: "@selenemoss",
    niche: "Culture & Media",
    followers: "2.1M",
    accent: "from-amber-400 via-orange-500 to-rose-500",
  },
];

export const stats = [
  { label: "Active creators", value: "2.9M" },
  { label: "Conversations", value: "89M" },
  { label: "Growth velocity", value: "4.8x" },
  { label: "Creator revenue", value: "$12M" },
];

export const trendTopics = [
  { topic: "#AIRevolution", posts: "182K" },
  { topic: "#CreatorEconomy", posts: "94K" },
  { topic: "#GenZCulture", posts: "63K" },
  { topic: "#ProductVision", posts: "41K" },
  { topic: "#DesignSystems", posts: "28K" },
];

export type Post = {
  id: number;
  author: string;
  handle: string;
  role: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    author: "Maya Keene",
    handle: "@mayakeene",
    role: "Product Visionary",
    avatar: "MK",
    time: "2h ago",
    content:
      "The best brands aren't built by chasing attention. They're built by creating a signal people instantly recognize and trust. Culture is a compounding asset.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    likes: 18240,
    comments: 3412,
    shares: 968,
    tags: ["#BrandPower", "#Culture", "#Vision"],
  },
  {
    id: 2,
    author: "Darius Stone",
    handle: "@dariusstone",
    role: "Founder / Builder",
    avatar: "DS",
    time: "5h ago",
    content:
      "Product-market fit is not the end goal. It's the beginning of a system that compounds trust, speed, and narrative. Build before you broadcast.",
    likes: 24010,
    comments: 1840,
    shares: 1320,
    tags: ["#BuildInPublic", "#Startup", "#Narrative"],
  },
  {
    id: 3,
    author: "Lena Frost",
    handle: "@lenafrost",
    role: "Culture Lead",
    avatar: "LF",
    time: "8h ago",
    content:
      "Great communities don't just react. They accelerate each other. When people feel seen, they bring energy, ideas, and momentum to the whole room.",
    likes: 16320,
    comments: 2198,
    shares: 778,
    tags: ["#Community", "#Growth", "#CreatorPower"],
  },
];

export const communities = [
  { name: "Signal Founders", members: "170K", focus: "Startups & scale" },
  { name: "Vision Lab", members: "92K", focus: "Design + strategy" },
  { name: "Creative Flow", members: "64K", focus: "Creators + media" },
  { name: "The Studio Circle", members: "41K", focus: "Product + brand" },
];

export const messages = [
  { name: "Nyra Vale", preview: "Let's ship the next creator cohort this week.", time: "1m" },
  { name: "Keon Arlo", preview: "The new launch narrative is landing really well.", time: "8m" },
  { name: "Selene Moss", preview: "We need a stronger community pulse for the drop.", time: "20m" },
];

export const profileHighlights = [
  { label: "Followers", value: "14.2K" },
  { label: "Following", value: "396" },
  { label: "Posts", value: "2.8K" },
  { label: "Engagement", value: "9.7%" },
];

export const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/communities", label: "Communities" },
  { href: "/messages", label: "Messages" },
  { href: "/profile", label: "Profile" },
  { href: "/premium", label: "Premium" },
];
