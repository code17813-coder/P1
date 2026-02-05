document.addEventListener('DOMContentLoaded', () => {
    // 1. Simulate fetching data from OnlyDust API
    const stats = {
        rewards: 1250.50,
        prs: 14
    };

    // Update DOM
    document.getElementById('rewards-value').innerText = `$${stats.rewards.toLocaleString()}`;
    document.getElementById('pr-count').innerText = stats.prs;

    // 2. Language & RTL Toggle Logic
    const langBtn = document.getElementById('lang-toggle');
    const htmlTag = document.documentElement;

    langBtn.addEventListener('click', () => {
        if (htmlTag.getAttribute('dir') === 'ltr') {
            htmlTag.setAttribute('dir', 'rtl');
            htmlTag.setAttribute('lang', 'ar');
            langBtn.innerText = 'Switch to English (LTR)';
        } else {
            htmlTag.setAttribute('dir', 'ltr');
            htmlTag.setAttribute('lang', 'en');
            langBtn.innerText = 'Switch to Arabic (RTL)';
        }
    });

    console.log("Elite Quantum Dashboard initialized for OnlyDust/Gitcoin.");
});