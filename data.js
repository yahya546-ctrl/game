/* ============================================================
   ملف المحتوى — عدّل النصوص والروابط هنا فقط
   كل ما هو "Placeholder" نص تجريبي استبدله بمعلوماتك.
   ============================================================ */

const SITE = {
  name: "Helal Studio",                       // اسمك
  logo: "HS",                              // حروف الشعار
  tagline: "Indie Game Developer",
  hero: "I build small worlds that are big on fun.",
  about: "Placeholder: I'm an independent game developer who loves crafting tight gameplay, bold art and memorable worlds. I design, code and ship games solo and with small teams.",
  skills: ["Unity", "C#", "Godot", "Game Design", "Pixel Art", "Sound Design"],
  stats: [["5+", "Games released"], ["3", "Game jams won"], ["20k", "Total plays"]],
  email: "hello@example.com",
  socials: [
    { label: "itch.io", url: "https://itch.io" },
    { label: "GitHub", url: "https://github.com" },
    { label: "YouTube", url: "https://youtube.com" },
    { label: "X / Twitter", url: "https://x.com" },
    { label: "Steam", url: "https://store.steampowered.com" }
  ],
  developer: { name: "Your Name", role: "Solo indie developer", location: "Your City, Country" }
};

const PROJECTS = [
  { title: "Placeholder Game Engine Tools", text: "Small tools and plugins I built to speed up level design.", link: "#" },
  { title: "Game Jam Prototype", text: "A 48-hour prototype that turned into a full game.", link: "#" },
  { title: "Open Source Library", text: "A reusable C# library for save systems and inventories.", link: "#" }
];

/* أضف لعبة جديدة بنسخ كتلة كاملة { ... } ثم تغيير id والنصوص.
   cover / screenshots: ضع مسار صورة مثل "img/cover.png"، أو اتركها فارغة لصورة تلقائية.
   video: رابط تضمين يوتيوب مثل "https://www.youtube.com/embed/XXXXXXXX" أو اتركه فارغًا. */
const GAMES = [
  {
    id: "summer-games",
    title: "Summer Games",
    genre: "Arcade / Runner",
    short: "Sprint through a glowing cyber city and dodge everything.",
    description: "Placeholder: Neon Runner is a fast, rhythmic endless runner set in a glowing cyber city. Read the patterns, chain perfect dodges and beat your best score.",
    features: ["Fast one-touch controls", "Procedural levels", "Synthwave soundtrack", "Global leaderboard"],
    platform: "PC, Web, Android",
    release: "2025",
    status: "Released",
    playUrl: "games/my-game/html", playLabel: "Play Now",
    cover: "", screenshots: ["", "", ""], video: "",
    accent: "#7c5cff"
  },
  {
    id: "dungeon-echo",
    title: "Dungeon Echo",
    genre: "Roguelike / Action",
    short: "Explore shifting dungeons where every sound is a clue.",
    description: "Placeholder: A top-down roguelike where sound reveals the map. Listen carefully, fight smart and unlock new abilities on every run.",
    features: ["Randomized dungeons", "30+ unique items", "Boss fights", "Controller support"],
    platform: "PC (Windows / Linux)",
    release: "2025",
    status: "Early Access",
    playUrl: "#", playLabel: "Download",
    cover: "", screenshots: ["", "", ""], video: "",
    accent: "#ff4d6d"
  },
  {
    id: "star-harvest",
    title: "Star Harvest",
    genre: "Cozy / Simulation",
    short: "Grow a tiny farm on a tiny planet among the stars.",
    description: "Placeholder: A relaxing farming sim on a small floating planet. Plant, craft, decorate and meet quirky space neighbours.",
    features: ["Relaxing gameplay", "Farm customization", "Day / night cycle", "Cute characters"],
    platform: "Web, Android",
    release: "Coming 2026",
    status: "In Development",
    playUrl: "#", playLabel: "Wishlist",
    cover: "", screenshots: ["", "", ""], video: "",
    accent: "#19c7a0"
  }
];
