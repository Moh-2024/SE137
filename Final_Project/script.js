document.addEventListener('DOMContentLoaded', function () {
    var projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 200); // Staggered fade-in effect
    });
});