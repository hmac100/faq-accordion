const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    accordion.classList.toggle("active");
    let img = accordion.querySelector("img");
    if (img.getAttribute("src") === "./assets/images/icon-plus.svg") {
      img.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      img.setAttribute("src", "./assets/images/icon-plus.svg");
    }
  });
});
