window.addEventListener('scroll', function () {
    document.body.classList[
        window.scrollY > 160 ? 'add': 'remove'
        ]('scrolled');
});