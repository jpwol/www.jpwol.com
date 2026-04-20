const fillTail = () => {
  const tail = document.querySelector(".hero-tail");
  const charWidth = 14;
  tail.textContent = "┃".repeat(Math.ceil(tail.offsetWidth / charWidth));
};

const injectHTML = (res, str) => {
  let html = document.getElementById(str);
  if (html != null) html.innerHTML = res;
};

const injectAll = (res, className) => {
  document
    .querySelectorAll(`.${className}`)
    .forEach((el) => (el.innerHTML = res));
};

window.addEventListener("resize", fillTail);

Promise.all([
  fetch("/components/nav.html").then((res) => res.text()),
  fetch("/components/footer.html").then((res) => res.text()),
  fetch("/components/section-divider.html").then((res) => res.text()),
]).then(([nav, footer, divider]) => {
  injectHTML(nav, "nav-placeholder");
  injectHTML(footer, "footer-placeholder");
  injectAll(divider, "divider-placeholder");
  fillTail();
});
