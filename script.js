
const translations = {
  en: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    headline: "Telling stories through architecture, shaping the future",
    intro: "Architecture is a language. We specialize in unique architectural design.",
    viewProjects: "View Projects",
    projectsTitle: "Our Projects",
    projectsDescription: "We’ve led architecture across Perak, Genting, Kuantan, and more—ranging from luxury villas to Pullman Hotel.",
    aboutTitle: "About YCLEE Architect",
    aboutText: "Each architectural design is tailor-made. We combine innovation with market needs for lasting impact.",
    contactTitle: "Contact Us",
    contactText: "Reach out to discuss your future project or collaboration opportunity."
  },
  "zh-Hant": {
    home: "首頁",
    projects: "作品集",
    about: "關於我們",
    contact: "聯絡我們",
    headline: "用建築講述故事，塑造未來",
    intro: "建築是一種語言，我們專精於獨特設計",
    viewProjects: "查看作品",
    projectsTitle: "我們的作品",
    projectsDescription: "我們領導了霹靂、雲頂、關丹等地的建築項目，涵蓋豪華別墅與鉑爾曼酒店。",
    aboutTitle: "關於 YCLEE Architect",
    aboutText: "每一份設計皆為量身打造，結合創意與市場需求，創造持久影響。",
    contactTitle: "聯絡我們",
    contactText: "歡迎與我們聯繫，洽談項目合作事宜。"
  },
  "zh-Hans": {
    home: "首页",
    projects: "项目集",
    about: "关于我们",
    contact: "联系我们",
    headline: "用建筑讲述故事，塑造未来",
    intro: "建筑是一种语言，我们专精于独特设计",
    viewProjects: "查看项目",
    projectsTitle: "我们的项目",
    projectsDescription: "我们主导了霹雳、云顶、关丹等地的建筑项目，涵盖豪华别墅与铂尔曼酒店。",
    aboutTitle: "关于 YCLEE Architect",
    aboutText: "每个设计皆为量身定制，结合创新与市场需求，创造长期价值。",
    contactTitle: "联系我们",
    contactText: "欢迎与我们联系，讨论项目或合作机会。"
  },
  ms: {
    home: "Laman Utama",
    projects: "Projek",
    about: "Tentang Kami",
    contact: "Hubungi",
    headline: "Menceritakan kisah melalui seni bina, membentuk masa depan",
    intro: "Seni bina adalah bahasa. Kami pakar dalam reka bentuk seni bina unik.",
    viewProjects: "Lihat Projek",
    projectsTitle: "Projek Kami",
    projectsDescription: "Kami telah memimpin seni bina di Perak, Genting, Kuantan dan lebih banyak lagi—termasuk vila mewah dan Hotel Pullman.",
    aboutTitle: "Tentang YCLEE Architect",
    aboutText: "Setiap reka bentuk adalah tersuai sepenuhnya. Kami gabungkan inovasi dengan kehendak pasaran untuk kesan berkekalan.",
    contactTitle: "Hubungi Kami",
    contactText: "Hubungi kami untuk berbincang projek masa depan atau peluang kerjasama."
  }
  jp: {
    home: "ホーム",
    projects: "プロジェクト",
    about: "会社概要",
    contact: "お問い合わせ",
    headline: "建築を通して物語を語り、未来を形作る",
    intro: "建築は言語です。私たちはユニークな建築デザインを専門としています。",
    viewProjects: "プロジェクトを見る",
    projectsTitle: "プロジェクト",
    projectsDescription: "ペラ州、ゲンティン、クアンタンなど、様々な地域で建築を手がけてきました。高級ヴィラからプルマンホテルまで、幅広い分野を手がけています。",
    aboutTitle: "YCLEE Architectについて",
    aboutText: "それぞれの建築デザインはオーダーメイドです。私たちは革新性と市場のニーズを融合させ、永続的な影響を与えます。",
    contactTitle: "お問い合わせ",
    contactText: "今後のプロジェクトやコラボレーションの機会について、お気軽にご相談ください。"
  }
};

const switcher = document.getElementById("languageSwitcher");
const elements = document.querySelectorAll("[data-key]");

switcher.addEventListener("change", () => {
  const lang = switcher.value;
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
});
