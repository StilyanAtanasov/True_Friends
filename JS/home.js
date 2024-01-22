document.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.classList.add("solid");
    header.classList.remove("transparent");
  } else {
    header.classList.add("transparent");
    header.classList.remove("solid");
  }
});
