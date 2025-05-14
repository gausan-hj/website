
document.getElementById('languageSwitcher').addEventListener('change', function() {
    const selected = this.value;
    localStorage.setItem('lang', selected);
    applyLanguage(selected);
});

function applyLanguage(lang) {
    fetch('lang/' + lang + '.json')
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (data[key]) el.innerText = data[key];
            });
        });
}

window.onload = function() {
    const storedLang = localStorage.getItem('lang') || 'zh-Hant';
    document.getElementById('languageSwitcher').value = storedLang;
    applyLanguage(storedLang);

    const now = new Date().toLocaleString("en-MY", { timeZone: "Asia/Kuala_Lumpur" });
    document.getElementById('localTime').innerText = now;

    document.getElementById('ratingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const stars = document.getElementById('stars').value;
        document.getElementById('ratingResult').innerText = "謝謝您的評分：" + stars + " 星！";
    });
};
