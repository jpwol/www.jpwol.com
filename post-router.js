const fillPosts = () => {
  fetch("/data/posts.json")
    .then((res) => res.json())
    .then((posts) => {
      const main = document.querySelector("main");
      main.innerHTML = posts
        .map(
          (post) => `
        <a class="post-listing" href="${post.url}">
          <img class="post-thumb" src="${post.thumb}">
          <span class="post-date">${post.date}</span>
          <div class="post-name">
            <span>${post.name}</span>
            <img src="${post.icon}" />
          </div>
        </a>
        `,
        )
        .join("");
    });
};

fillPosts();
