document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("banner");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  const modal = () => {
    banner.style.display = "flex";
  };

  setTimeout(modal, 2500);

  acceptButton.addEventListener("click", () => {
    if (banner.style.display != "none") {
      banner.style.display = "none";
    }
  });

  declineButton.addEventListener("click", () => {
    if (banner.style.display != "none") {
      banner.style.display = "none";
    }
  });
});
