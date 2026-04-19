const fillTail = () => {
  const tail = document.querySelector(".hero-tail");
  const charWidth = 14;
  tail.textContent = "┃".repeat(Math.ceil(tail.offsetWidth / charWidth));
};

window.addEventListener("resize", fillTail);

Promise.all([
  fetch("/components/nav.html").then((res) => res.text()),
  fetch("/components/footer.html").then((res) => res.text()),
]).then(([nav, footer]) => {
  document.getElementById("nav-placeholder").innerHTML = nav;
  document.getElementById("footer-placeholder").innerHTML = footer;
  fillTail();
});
