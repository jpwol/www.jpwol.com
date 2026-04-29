import hljs from "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js";

function injectHljsThemes() {
  const theme = document.documentElement.getAttribute("data-theme");

  const light = document.createElement("link");
  light.id = "hljs-light";
  light.rel = "stylesheet";
  light.href =
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css";
  light.disabled = theme === "dark";

  const dark = document.createElement("link");
  dark.id = "hljs-dark";
  dark.rel = "stylesheet";
  dark.href =
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css";
  dark.disabled = theme === "light";

  // const stylesheet = document.createElement("link");
  // stylesheet.rel = "stylesheet";
  // stylesheet.href = "/styles/style.css";

  document.head.appendChild(light);
  document.head.appendChild(dark);
  // document.head.appendChild(stylesheet);
}

function loadZigLanguage() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "/scripts/zig.min.js";
    script.onload = resolve;
    document.head.appendChild(script);
  });
}

window.hljs = hljs;

injectHljsThemes();
await loadZigLanguage();
hljs.highlightAll();
