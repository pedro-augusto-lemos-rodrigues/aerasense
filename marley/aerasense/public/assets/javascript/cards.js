document.addEventListener("DOMContentLoaded", () => {
  const card1 = document.getElementById("benefit1");
  const title1 = document.getElementById("title1");

  const card2 = document.getElementById("benefit2");
  const title2 = document.getElementById("title2");

  const card3 = document.getElementById("benefit3");
  const title3 = document.getElementById("title3");

  const card4 = document.getElementById("benefit4");
  const title4 = document.getElementById("title4");

  let velocity = 50;

  card1.addEventListener("click", () => {
    if (card1.style.width === "400px") {
      card1.style.width = "1000px";

      setTimeout(() => {
        title1.style.display = "block";
      }, velocity);

      card2.style.width = "400px";
      title2.style.display = "none";

      card3.style.width = "400px";
      title3.style.display = "none";

      card4.style.width = "400px";
      title4.style.display = "none";
    } else {
      card1.style.width = "400px";
      title1.style.display = "none";
    }
  });

  card2.addEventListener("click", () => {
    if (card2.style.width === "400px") {
      card1.style.width = "400px";
      title1.style.display = "none";

      card2.style.width = "1000px";

      setTimeout(() => {
        title2.style.display = "block";
      }, velocity);

      card3.style.width = "400px";
      title3.style.display = "none";

      card4.style.width = "400px";
      title4.style.display = "none";
    } else {
      card2.style.width = "400px";
    }
  });

  card3.addEventListener("click", () => {
    if (card3.style.width === "400px") {
      card1.style.width = "400px";
      title1.style.display = "none";

      card2.style.width = "400px";
      title2.style.display = "none";

      card3.style.width = "1000px";

      setTimeout(() => {
        title3.style.display = "block";
      }, velocity);

      card4.style.width = "400px";
      title4.style.display = "none";
    } else {
      card3.style.width = "400px";
      title3.style.display = "none";
    }
  });

  card4.addEventListener("click", () => {
    if (card4.style.width === "400px") {
      card2.style.width = "400px";
      title1.style.display = "none";

      card1.style.width = "400px";
      title2.style.display = "none";

      card3.style.width = "400px";
      title3.style.display = "none";

      card4.style.width = "1000px";
      setTimeout(() => {
        title4.style.display = "block";
      }, velocity);
    } else {
      card4.style.width = "400px";
      title4.style.display = "none";
    }
  });
});
