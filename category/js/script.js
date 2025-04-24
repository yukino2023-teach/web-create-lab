document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const items = document.querySelectorAll(".item");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      items.forEach((item) => {
        item.classList.remove("show");
        item.style.display = "none";
      });
      setTimeout(() => {
        items.forEach((item) => {
          if (
            category === "all" ||
            item.getAttribute("data-category") === category
          ) {
            item.style.display = "block";
            setTimeout(() => {
              item.classList.add("show");
            }, 10);
          }
        });
      }, 10);
    });
  });

  // 👇 初期表示で "all" カテゴリーのアイテムを表示する
  items.forEach((item) => {
    item.style.display = "block";
    setTimeout(() => {
      item.classList.add("show");
    }, 10);
  });
});
