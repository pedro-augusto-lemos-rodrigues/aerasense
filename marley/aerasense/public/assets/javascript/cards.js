/**
 * Arquivo de interatividade dos cards de benefícios
 *
 * O método setTimeout(), recebe dois parâmetros aqui, onde ele espera uma
 * ação e o tempo necessário para aguardar para executar tal ação.
 *
 * Não foi usado um forEach por não ser permitido ainda...
 *
 * @author Marley de S. Santos (MarleyS439) <marleysantos439@gmail.com>
 */

document.addEventListener("DOMContentLoaded", () => {
  // Obtém o título e o card
  const card1 = document.getElementById("card1");
  const title1 = document.getElementById("title1");

  // Obtém o título e o card
  const card2 = document.getElementById("card2");
  const title2 = document.getElementById("title2");

  // Obtém o título e o card
  const card3 = document.getElementById("card3");
  const title3 = document.getElementById("title3");

  // Obtém o título e o card
  const card4 = document.getElementById("card4");
  const title4 = document.getElementById("title4");

  // Tamanho Padrão
  let wide = "500px";

  // Tamanho reduzido
  let short = "250px";

  // Define uma velocidade de aparição do título
  let velocity = 250;

  card1.addEventListener("click", () => {
    if (card1.style.width === short) {
      card1.style.width = wide;

      setTimeout(() => {
        title1.style.display = "block";
      }, velocity);

      card2.style.width = short;
      title2.style.display = "none";

      card3.style.width = short;
      title3.style.display = "none";

      card4.style.width = short;
      title4.style.display = "none";
    } else {
      card1.style.width = short;
      title1.style.display = "none";
    }
  });

  card2.addEventListener("click", () => {
    if (card2.style.width === short) {
      card1.style.width = short;
      title1.style.display = "none";

      card2.style.width = wide;

      setTimeout(() => {
        title2.style.display = "block";
      }, velocity);

      card3.style.width = short;
      title3.style.display = "none";

      card4.style.width = short;
      title4.style.display = "none";
    } else {
      card2.style.width = short;
    }
  });

  card3.addEventListener("click", () => {
    if (card3.style.width === short) {
      card1.style.width = short;
      title1.style.display = "none";

      card2.style.width = short;
      title2.style.display = "none";

      card3.style.width = wide;

      setTimeout(() => {
        title3.style.display = "block";
      }, velocity);

      card4.style.width = short;
      title4.style.display = "none";
    } else {
      card3.style.width = short;
      title3.style.display = "none";
    }
  });

  card4.addEventListener("click", () => {
    if (card4.style.width === short) {
      card2.style.width = short;
      title1.style.display = "none";

      card1.style.width = short;
      title2.style.display = "none";

      card3.style.width = short;
      title3.style.display = "none";

      card4.style.width = wide;
      setTimeout(() => {
        title4.style.display = "block";
      }, velocity);
    } else {
      card4.style.width = short;
      title4.style.display = "none";
    }
  });
});
