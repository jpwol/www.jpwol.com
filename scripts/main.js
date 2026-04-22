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
  fetch("/components/back_arrow.html").then((res) => res.text()),
]).then(([nav, footer, divider, back]) => {
  injectHTML(nav, "nav-placeholder");
  injectHTML(footer, "footer-placeholder");
  injectHTML(back, "back-placeholder");
  injectAll(divider, "divider-placeholder");
  fillTail();
});

const copyCode = (div) => {
  const code = div.querySelector("code").innerText;
  navigator.clipboard.writeText(code).then(() => {
    div.classList.add("copied");
    setTimeout(() => div.classList.remove("copied"), 300);
  });
};
