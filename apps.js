let mybutton = document.querySelector(".myBtn");

mybutton = addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
