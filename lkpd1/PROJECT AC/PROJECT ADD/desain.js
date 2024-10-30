// Enable scrolling on button click
document.querySelector('.button a').addEventListener('click', function(e) {
    e.preventDefault();
    // Remove the overflow hidden from the body to enable scrolling
    document.body.style.overflow = 'auto';
    // Smoothly scroll to the profiles section
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });

    // Add fade-in animation for profile containers
    setTimeout(function() {
        document.querySelectorAll('.profile-container').forEach(function(container) {
            container.classList.add('show');
        });
    }, 500);
});