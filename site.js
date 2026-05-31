const LANGUAGE_STORAGE_KEY = "sagemind-language";

const translations = {
  zh: {
    "meta.title": "SageMind - 本机 AI 聊天与技能助手",
    "meta.description":
      "SageMind 是一款离线优先的本机 AI 助手，支持聊天、每日单词、心灵鸡汤、数独、心情记录、多语言和主题切换。",
    "meta.ogDescription": "本机 AI 聊天与技能助手。",
    "privacy.meta.title": "SageMind 隐私政策",
    "privacy.meta.description":
      "SageMind 隐私政策：说明本机 AI、模型下载、个人技能、本地缓存和权限使用。",
    "privacy.meta.ogDescription": "SageMind 隐私政策。",
    "language.label": "语言",
    "language.auto": "跟随系统",
    "nav.skills": "技能",
    "nav.screens": "截图",
    "nav.support": "支持",
    "nav.privacy": "隐私",
    "hero.eyebrow": "离线优先 · 本机模型 · Sage Skills",
    "hero.titleLine1": "把轻量 AI 助手",
    "hero.titleLine2": "放进口袋里。",
    "hero.lede":
      "SageMind 将自然聊天、每日单词、心灵鸡汤、数独和心情记录放在一个简洁空间里。首次下载模型后，常用聊天和内置技能可在离线优先的环境中继续使用。",
    "hero.primary": "查看界面",
    "hero.note": "支持简体中文、繁体中文和 English。",
    "intro.aria": "SageMind 简介",
    "intro.body":
      "SageMind 面向想要轻量 AI 助手、英语学习卡片、情绪记录、数独练习和本机技能工具的用户。它不把入口做复杂，把常见的小任务整理成可以反复使用的卡片。",
    "skills.title": "聊天之外，也能直接完成小任务。",
    "skills.chat.title": "本机聊天",
    "skills.chat.body":
      "加载轻量模型后，即可在手机上进行自然对话，适合随手提问和整理想法。",
    "skills.word.icon": "词",
    "skills.word.title": "每日单词",
    "skills.word.body":
      "生成英文单词卡片，包含音标、释义、例句和收藏，适合碎片时间学习。",
    "skills.sudoku.icon": "数",
    "skills.sudoku.title": "数独小游戏",
    "skills.sudoku.body":
      "支持简单、中等、困难、地狱四种难度，生成宫格并在 WebView 中交互解题。",
    "skills.mood.icon": "心",
    "skills.mood.title": "心情记录",
    "skills.mood.body":
      "用一句话记录当天状态，让情绪变化更容易被看见和回顾。",
    "screens.title": "干净、直接、可快速扫描。",
    "screens.chat.alt": "SageMind 聊天首页截图",
    "screens.chat.caption": "聊天首页",
    "screens.sudoku.alt": "SageMind 数独技能截图",
    "screens.sudoku.caption": "数独技能",
    "screens.word.alt": "SageMind 每日单词截图",
    "screens.word.caption": "每日单词",
    "details.title": "先下载模型，后续更少依赖网络。",
    "details.item1": "首次加载模型时需要联网下载，下载完成后会缓存在本机。",
    "details.item2": "支持浅色、深色和跟随系统主题。",
    "details.item3": "支持添加个人技能目录，将更多本地工具整合进自己的工作流。",
    "support.title": "需要帮助或反馈？",
    "support.body":
      "可以在 GitHub 上提交问题、建议或截图反馈。SageMind 会继续围绕本机 AI、Sage Skills 和移动端体验迭代。",
    "support.button": "提交反馈",
    "footer.home": "首页",
    "footer.privacy": "隐私政策",
  },
  en: {
    "meta.title": "SageMind - On-device AI chat & skills",
    "meta.description":
      "SageMind is an offline-first on-device AI assistant for chat, daily words, inspirational quotes, Sudoku, mood tracking, multilingual use, and theme selection.",
    "meta.ogDescription": "On-device AI chat and skill cards.",
    "privacy.meta.title": "SageMind Privacy Policy",
    "privacy.meta.description":
      "SageMind Privacy Policy: on-device AI, model downloads, personal skills, local cache, and permission use.",
    "privacy.meta.ogDescription": "SageMind Privacy Policy.",
    "language.label": "Language",
    "language.auto": "System",
    "nav.skills": "Skills",
    "nav.screens": "Screens",
    "nav.support": "Support",
    "nav.privacy": "Privacy",
    "hero.eyebrow": "Offline-first · On-device model · Sage Skills",
    "hero.titleLine1": "Local AI",
    "hero.titleLine2": "in your pocket.",
    "hero.lede":
      "SageMind brings natural chat, daily words, inspirational quotes, Sudoku, and mood notes into one clean workspace. After the first model download, common chat and built-in skills can keep running in an offline-first experience.",
    "hero.primary": "View Screens",
    "hero.note": "Supports Simplified Chinese, Traditional Chinese, and English.",
    "intro.aria": "SageMind introduction",
    "intro.body":
      "SageMind is made for people who want a lightweight AI assistant, English learning cards, mood notes, Sudoku practice, and practical on-device tools. It keeps the entry simple and turns everyday tasks into reusable cards.",
    "skills.title": "Beyond chat, finish small tasks directly.",
    "skills.chat.title": "On-device Chat",
    "skills.chat.body":
      "Load a lightweight model and talk naturally on your phone, whether you are asking quick questions or shaping an idea.",
    "skills.word.icon": "W",
    "skills.word.title": "Daily Word",
    "skills.word.body":
      "Create English word cards with phonetics, definitions, examples, and favorites for quick study sessions.",
    "skills.sudoku.icon": "9",
    "skills.sudoku.title": "Sudoku Game",
    "skills.sudoku.body":
      "Choose easy, medium, hard, or expert puzzles, then solve an interactive grid rendered in WebView.",
    "skills.mood.icon": "M",
    "skills.mood.title": "Mood Notes",
    "skills.mood.body":
      "Record the day in one sentence so changes in your mood are easier to notice and revisit.",
    "screens.title": "Clean, direct, and easy to scan.",
    "screens.chat.alt": "SageMind chat home screenshot",
    "screens.chat.caption": "Chat home",
    "screens.sudoku.alt": "SageMind Sudoku skill screenshot",
    "screens.sudoku.caption": "Sudoku skill",
    "screens.word.alt": "SageMind daily word screenshot",
    "screens.word.caption": "Daily word",
    "details.title": "Download once, depend on the network less often.",
    "details.item1":
      "The first model load requires an internet connection; downloaded model files are cached on device.",
    "details.item2": "Light mode, dark mode, and system theme are supported.",
    "details.item3":
      "Add personal skill directories to bring more local tools into your own workflow.",
    "support.title": "Need help or want to share feedback?",
    "support.body":
      "Open an issue on GitHub with questions, suggestions, or screenshots. SageMind will continue improving around on-device AI, Sage Skills, and the mobile experience.",
    "support.button": "Send Feedback",
    "footer.home": "Home",
    "footer.privacy": "Privacy Policy",
  },
};

const screenshotDirectories = {
  zh: "assets/screenshots/zh-Hans",
  en: "assets/screenshots/en-US",
};

const screenshotFilenames = {
  chat: "chat.jpg",
  skills: "skills.jpg",
  sudoku: "sudoku.jpg",
  word: "word.jpg",
  settings: "settings.jpg",
};

function readLanguagePreference() {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  if (urlLanguage === "zh" || urlLanguage === "en") {
    return urlLanguage;
  }

  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored === "zh" || stored === "en" ? stored : "auto";
  } catch {
    return "auto";
  }
}

function saveLanguagePreference(preference) {
  try {
    if (preference === "auto") {
      localStorage.removeItem(LANGUAGE_STORAGE_KEY);
    } else {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, preference);
    }
  } catch {
    // If storage is unavailable, the page can still switch for this session.
  }
}

function getSystemLanguage() {
  const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    "en";
  return language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function resolveLanguage(preference) {
  return preference === "zh" || preference === "en"
    ? preference
    : getSystemLanguage();
}

function setMeta(name, content) {
  const element = document.querySelector(`meta[name="${name}"]`);
  if (element) {
    element.setAttribute("content", content);
  }
}

function setPropertyMeta(property, content) {
  const element = document.querySelector(`meta[property="${property}"]`);
  if (element) {
    element.setAttribute("content", content);
  }
}

function applyScreenshots(language) {
  document.querySelectorAll("[data-screenshot]").forEach((element) => {
    const key = element.dataset.screenshot;
    const filename = screenshotFilenames[key];
    const directory = screenshotDirectories[language];
    if (!filename || !directory) {
      return;
    }

    const nextSource = `${directory}/${filename}`;
    if (element.getAttribute("src") === nextSource) {
      element.classList.remove("localized-screenshot-loading");
      return;
    }

    element.classList.add("localized-screenshot-loading");
    element.addEventListener(
      "load",
      () => element.classList.remove("localized-screenshot-loading"),
      { once: true },
    );
    element.addEventListener(
      "error",
      () => element.classList.remove("localized-screenshot-loading"),
      { once: true },
    );
    element.setAttribute("src", nextSource);
  });
}

function applyLanguage(preference) {
  const language = resolveLanguage(preference);
  const dictionary = translations[language];
  const page = document.body.dataset.page;
  const metaPrefix = page ? `${page}.` : "";
  const metaTitle = dictionary[`${metaPrefix}meta.title`] || dictionary["meta.title"];
  const metaDescription =
    dictionary[`${metaPrefix}meta.description`] || dictionary["meta.description"];
  const metaOgDescription =
    dictionary[`${metaPrefix}meta.ogDescription`] ||
    dictionary["meta.ogDescription"];

  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  document.documentElement.dataset.language = language;
  document.title = metaTitle;
  setMeta("description", metaDescription);
  setPropertyMeta("og:description", metaOgDescription);
  applyScreenshots(language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key]) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-language-panel]").forEach((element) => {
    element.hidden = element.dataset.languagePanel !== language;
  });

  const selector = document.querySelector("[data-language-select]");
  if (selector) {
    selector.value = preference;
    selector.setAttribute("aria-label", dictionary["language.label"]);
    selector.setAttribute("title", dictionary["language.label"]);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.querySelector("[data-language-select]");
  const preference = readLanguagePreference();
  applyLanguage(preference);

  if (selector) {
    selector.addEventListener("change", (event) => {
      const nextPreference = event.target.value;
      saveLanguagePreference(nextPreference);
      applyLanguage(nextPreference);
    });
  }
});
