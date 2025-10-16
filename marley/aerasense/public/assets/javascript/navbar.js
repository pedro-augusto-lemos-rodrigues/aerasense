/**
 * Arquivo de interatividade da barra de navegação
 *
 * DOM - Document Object Model - É o objeto da Página HTML
 * O método addEventListener é uma meneira de pôr escutadores de eventos
 * O addEventListener aqui recebe parâmetros, sendo o evento DOMContentLoaded e () => {}
 *
 * O DOMContentLoaded é um evento de aguardar a página carregar
 * O () => {} é uma arrow function, nada mais sendo do que uma meneira moderna de representar uma função
 *
 * No caso o document.addEventListener(a, b()), recebe um evento e o que será executado ao ele ler esse evento
 *
 * @author Marley de S. Santos (MarleyS439) <marleysantos439@gmail.com>
 */
document.addEventListener("DOMContentLoaded", () => {
  // Define o elemento navbar da página, identificado por um id="navbar"
  const navbar = document.getElementById("navbar");

  // Chama o objeto window, o global da DOM, que representa a grosso modo a tela
  // Aqui ele adiciona outro escutador de evento para scroll
  window.addEventListener("scroll", () => {
    // Captura a posição da tela no eixo Y
    let position = window.scrollY;

    // Se a posição do elemento da janela for scrollado maior que 20px
    if (position > 20) {
      // Aplica uma séria de estilos
      navbar.style.width = "90%";
      navbar.style.top = "20px";
      navbar.style.borderRadius = "16px";
    } else {
      navbar.style.width = "100%";
      navbar.style.top = "0px";
      navbar.style.borderRadius = "0px";
    }
  });
});
