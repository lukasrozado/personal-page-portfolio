window.onload = () => {
    // Redirecionamento de idioma
    const userLang = navigator.language || navigator.userLanguage;
    const savedLang = localStorage.getItem("preferredLang");
    const currentURL = window.location.href;

    if (!savedLang) {
        if (userLang.startsWith("en")) {
            localStorage.setItem("preferredLang", "en");
            if (!currentURL.includes("index-en.html")) {
                window.location.href = "index-en.html";
            }
        } else {
            localStorage.setItem("preferredLang", "pt");
            if (!currentURL.includes("index.html")) {
                window.location.href = "index.html";
            }
        }
    } else {
        if (savedLang === "en" && !currentURL.includes("index-en.html")) {
            window.location.href = "index-en.html";
        } else if (savedLang === "pt" && !currentURL.includes("index.html")) {
            window.location.href = "index.html";
        }
    }

    // Menu Hamburguer
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('header nav ul');
    const mainContent = document.querySelector('main');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        mainContent.classList.toggle('navbar-active');
    });

    // Fechar menu ao clicar em links
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            mainContent.classList.remove('navbar-active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        const navbar = document.getElementById('navbar');
        if (!navbar.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            mainContent.classList.remove('navbar-active');
        }
    });
};