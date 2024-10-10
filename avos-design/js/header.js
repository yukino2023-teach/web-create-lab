document.addEventListener("DOMContentLoaded", function () {
  function createHeader() {
    var headerHTML = `
            <header id="header" class="header">
            <div class="wrapper">
                <div class="heading__h1 logo">
                    <a href="${resolvePath("index.html")}">
                        <img src="${resolvePath(
                          "images/logo.svg"
                        )}" alt="AVOS_DESIGN">
                    </a>
                </div>
                <nav class="header-nav">
                    <ul class="header-nav__list">
                        ${createNavItems([
                          { href: "news.html", text: "NEWS" },
                          { href: "about.html", text: "ABOUT" },
                          { href: "service.html", text: "SERVICE" },
                          { href: "recruit.html", text: "RECRUIT" },
                          { href: "contact.html", text: "CONTACT" },
                        ])}
                    </ul>
                </nav>
            </div>
            </header>
        `;
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  function createNavItems(links) {
    return links
      .map(
        (link) => `
            <li class="header-nav__item">
                <a href="${resolvePath(link.href)}">
                    <span class="header-nav__text--green">${link.text.charAt(
                      0
                    )}</span>${link.text.slice(1)}
                </a>
            </li>
        `
      )
      .join("");
  }

  function resolvePath(relativePath) {
    var currentPath = window.location.pathname;

    if (currentPath.includes("/child-pages/")) {
      // Adjust the path handling logic according to the actual folder structure
      let depth = (currentPath.match(/\//g) || []).length;
      return "../".repeat(depth - 1) + relativePath;

      // Or a simpler check could be added for multiple levels.
      // e.g., if currentPath is nested deep, add more "../"
      // if (currentPath.split('/').length > 2) {
      // return '../' + relativePath;
      // }
    } else {
      return relativePath;
    }
  }

  createHeader();
});
