document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  const navbar = document.getElementById("navbar");

  // Ids de Links
  const linksIds = [
    "inicio",
    "produtos",
    "quem-somos",
    "trabalhe-conosco",
    "contato",
  ];

  // Seletor de idioma
  const languageSelector = document.getElementById("select_language");

  // Logo SVG
  const logoFill = document.getElementById("path");

  // Evento e função de scroll
  window.addEventListener("scroll", () => {
    // Captura a posição da janela no eixo Y
    let position = window.scrollY;

    if (position > 20) {
      navbar.style.width = "90%";
      navbar.style.borderRadius = "16px";
      navbar.style.marginTop = "16px";
      navbar.style.backgroundColor = "var(--color-white)";
      languageSelector.style.backgroundColor = "var(--color-white)";
      languageSelector.style.color = "var(--color-very-dark-blue)";
      // Passa um atributo de tipo fill do SVG e valor
      logoFill.setAttribute("fill", "var(--color-very-dark-blue)");
      // Para cada link do array linksIds, muda a cor
      for (let i = 0; i < linksIds.length; i++) {
        const link = document.getElementById(linksIds[i]);
        if (link) {
          link.style.color = "var(--color-very-dark-blue)";
        }
      }
    } else {
      // Retorna todos os valores originais
      navbar.style.width = "100%";
      navbar.style.borderRadius = "0px";
      navbar.style.marginTop = "0px";
      navbar.style.backgroundColor = "var(--color-very-dark-blue)";
      languageSelector.style.backgroundColor = "var(--color-very-dark-blue)";
      languageSelector.style.color = "var(--color-white)";
      logoFill.setAttribute("fill", "var(--color-white)");
      for (let i = 0; i < linksIds.length; i++) {
        const link = document.getElementById(linksIds[i]);
        if (link) {
          link.style.color = "var(--color-white)";
        }
      }
    }
  });
});
