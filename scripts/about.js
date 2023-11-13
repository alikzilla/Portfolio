window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // Adjust the scroll position as needed
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});