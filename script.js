const languageMap = {'en': {'home': 'Home', 'projects': 'Projects', 'about': 'About', 'contact': 'Contact', 'search_placeholder': 'Search Language...'}, 'zh': {'home': '主页', 'projects': '作品', 'about': '关于我们', 'contact': '联系我们', 'search_placeholder': '搜索语言'}, 'zht': {'home': '主頁', 'projects': '作品', 'about': '關於我們', 'contact': '聯絡我們', 'search_placeholder': '搜尋語言'}, 'lo': {'home': 'ໜ້າຫຼັກ', 'projects': 'ໂຄງການ', 'about': 'ກ່ຽວກັບ', 'contact': 'ຕິດຕໍ່', 'search_placeholder': 'ຄົ້ນຫາພາສາ'}, 'ja': {'home': 'ホーム', 'projects': 'プロジェクト', 'about': '会社情報', 'contact': 'お問い合わせ', 'search_placeholder': '言語を検索'}, 'ms': {'home': 'Laman Utama', 'projects': 'Projek', 'about': 'Tentang Kami', 'contact': 'Hubungi Kami', 'search_placeholder': 'Cari Bahasa'}};

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文（简体）' },
  { code: 'zh-TW', name: '中文（繁體）' },
  { code: 'la', name: 'ພາສາລາວ' },
  { code: 'ja', name: '日本語' },
  { code: 'ms', name: 'Bahasa Melayu' },
  { code: 'ko', name: '한국인' },
];

const langList = document.getElementById('langList');
const langInput = document.querySelector('.lang-input');

function toggleList() {
  langList.style.display = langList.style.display === 'block' ? 'none' : 'block';
  renderLangList('');
}

function renderLangList(filter) {
  langList.innerHTML = '';
  languages
    .filter(l => l.name.toLowerCase().includes(filter.toLowerCase()) || l.code.includes(filter.toLowerCase()))
    .forEach(lang => {
      const item = document.createElement('div');
      item.className = 'lang-item';
      item.textContent = lang.name;
      item.onclick = () => selectLanguage(lang.code);
      langList.appendChild(item);
    });
}

function filterLanguages() {
  const input = langInput.value;
  renderLangList(input);
}

function selectLanguage(code) {
  localStorage.setItem('siteLang', code);
  updateLanguage(code);
  langList.style.display = 'none';
}

function updateLanguage(code) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.remove('active');
    if (el.getAttribute('data-lang') === code) {
      el.classList.add('active');
    }
  });
}

// 初始化语言
const currentLang = localStorage.getItem('siteLang') || 'en';
window.onload = () => {
  updateLanguage(currentLang);
  langInput.value = '';
  renderLangList('');
};
