// script.js
function updateTotal(id, price) {
  const quantity = document.getElementById(id).value;
  const total = quantity * price;
  document.getElementById(`${id}Total`).innerText = `¥${total.toLocaleString()}`;
}

function calculateTotal() {
  const items = [
      'lpCoding', 'topPage', 'subPage', 'animation', 'blogList',
      'privacyPolicy', 'replicatedPage', 'contactForm', 'header',
      'footer', 'moduleAnimation', 'customAnimation', 'other',
      'wpExtension', 'topPage2', 'fixedPageTemplate', 'fixedPage',
      'header2', 'footer2', 'articleDetail', 'articleList',
      'page404', 'categoryList', 'customPostDetail', 'customPostList',
      'customPostCategoryList', 'contactFormFixedPage', 'customField',
      'blockPattern', 'breadcrumb', 'textImageChange'
  ];

  let total = 0;

  items.forEach(item => {
      const itemTotal = parseInt(document.getElementById(`${item}Total`).innerText.replace(/¥|,/g, '')) || 0;
      total += itemTotal;
  });

  document.getElementById('total').innerText = `合計金額(税込): ¥${total.toLocaleString()}`;
}
