document.addEventListener('DOMContentLoaded', function() {
    function createFooter() {
        var footerHTML = `
            <footer id="footer" class="footer">
                <div class="footer__inner wrapper">
                    <div class="footer__contents">
                        <nav class="footer__nav">
                            <div class="footer__nav-col">
                                <ul class="footer__nav-list">
                                    ${createNavItems([
                                        { href: '', text: '個人情報の取り扱い' },
                                        { href: '', text: 'サイトポリシー' },
                                        { href: '', text: 'クッキーポリシー' },
                                        { href: '', text: '取引企業向けサイト' }
                                    ])}
                                </ul>
                            </div>
                            <div class="footer__nav-col">
                                <ul class="footer__nav-list">
                                    ${createNavItems([
                                        { href: 'news.html', text: 'お知らせ' },
                                        { href: 'child-pages/faq.html', text: 'よくあるご質問（FAQ）' },
                                        { href: 'contact.html', text: 'お問い合わせ' },
                                        { href: 'child-pages/site-map.html', text: 'サイトマップ' }
                                    ])}
                                </ul>
                                <div class="sns__contents">
                                    <a href="">AVOS_DESIGNのSNSについて</a>
                                    <ul class="sns__list">
                                        ${createSNSItems([
                                            { href: '', src: 'images/logo_instagram_white.svg', alt: 'Instagram' },
                                            { href: '', src: 'images/logo_twitter_white.svg', alt: 'Twitter' },
                                            { href: '', src: 'images/logo_youtube_white.svg', alt: 'YouTube' },
                                            { href: '', src: 'images/logo_facebook_white.svg', alt: 'Facebook' }
                                        ])}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <p class="copyright">Copyright &copy; 2008-2024 AVOS_DESIGN COMPANY</p>
                </div>
            </footer>
        `;

        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    function createNavItems(links) {
        return links.map(link => `
            <li class="footer__nav-item">
                <a href="${resolvePath(link.href)}">${link.text}</a>
            </li>
        `).join('');
    }

    function createSNSItems(icons) {
        return icons.map(icon => `
            <li class="sns__item">
                <a href="${icon.href}">
                    <img src="${resolvePath(icon.src)}" alt="${icon.alt}">
                </a>
            </li>
        `).join('');
    }

    function resolvePath(relativePath) {
        var currentPath = window.location.pathname;
        if (currentPath.includes('/child-pages/')) {
            return '../' + relativePath;
        } else {
            return relativePath;
        }
    }

    createFooter();
});
