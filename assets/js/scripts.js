// Aguarda o carregamento da página para iniciar as animações
window.onload = () => {
    // Detecta o idioma do navegador
    const userLang = navigator.language || navigator.userLanguage;

    // Verifica se o usuário já escolheu um idioma
    const savedLang = localStorage.getItem("preferredLang");

    // Determina a URL completa atual
    const currentURL = window.location.href;

    // Lógica de redirecionamento
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

    //Event List
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('nav-links').classList.toggle('active');
    });


};

