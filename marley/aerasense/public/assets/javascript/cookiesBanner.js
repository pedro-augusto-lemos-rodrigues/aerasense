document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("banner");
  const acceptButton = document.getElementById("accept");
  const declineButton = document.getElementById("decline");

  const modal = () => {
    banner.style.display = "flex";
  };

  setTimeout(modal, 2000);

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
