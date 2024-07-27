// Add scroll event listener to change header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Add code to handle form submission
    alert('Thank you for your message! I will get back to you soon.');
});
