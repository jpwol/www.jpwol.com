let posts = [];

fetch("/data/posts.json")
  .then((res) => res.json())
  .then((data) => {
    posts = data;
    fillPosts(posts);
  });

const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  return `${month}/${day}/${year}`;
};

const fillPosts = (data) => {
  const main = document.querySelector("main");
  main.innerHTML = data
    .map(
      (post) => `
        <a class="post-listing" href="${post.url}">
          <img class="post-thumb" src="${post.thumb}" alt="" />
          <span class="post-date">${formatDate(post.date)}</span>
          <div class="post-name">
            <span>${post.name}</span>
            <img src="${post.icon}" alt="" />
          </div>
        </a>
        `,
    )
    .join("");
};

const sorts = {
  nameAZ: (a, b) => a.name.localeCompare(b.name),
  nameZA: (a, b) => b.name.localeCompare(a.name),
  newest: (a, b) => new Date(b.date) - new Date(a.date),
  oldest: (a, b) => new Date(a.date) - new Date(b.date),
};

const sortBy = (key) => {
  const sorted = [...posts].sort(sorts[key]);
  fillPosts(sorted);
};

document.querySelector(".sort-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".sort-menu").classList.toggle("hidden");
});

document.addEventListener("click", () => {
  document.querySelector(".sort-menu").classList.add("hidden");
});
