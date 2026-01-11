// 1. Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Please fill in all fields!");
        e.preventDefault();
    } else {
        alert("Thank you, " + name + "! Your message has been sent.");
    }
});

// 2. Scroll to Top Button Animation
const scrollBtn = document.getElementById("scrollToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});