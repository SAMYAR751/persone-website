// سیستم تغییر تم روشن/شب (Light/Dark Mode)
(function() {
    // ایجاد دکمه تغییر تم
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(themeToggle);
    
    // چک کردن تم ذخیره شده در localStorage
    const savedTheme = localStorage.getItem('boxzero-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // تعیین تم پیش‌فرض
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateIcon('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        updateIcon('light');
    }
    
    // آپدیت آیکون دکمه
    function updateIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'light') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
    
    // رویداد کلیک برای تغییر تم
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('boxzero-theme', newTheme);
        updateIcon(newTheme);
        
        // افکت انیمیشن هنگام تغییر
        themeToggle.style.transform = 'scale(1.2) rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
})();