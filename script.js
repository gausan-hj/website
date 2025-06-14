
const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文（简体）' },
  { code: 'zh-TW', name: '中文（繁體）' },
  { code: 'la', name: 'ພາສາລາວ' },
  { code: 'ja', name: '日本語' },
  { code: 'ms', name: 'Bahasa Melayu' }
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
