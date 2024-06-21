// JavaScript for animations
document.addEventListener("DOMContentLoaded", function() {
    // Animate elements when they come into view
    const aboutSection = document.querySelector(".about-us");
    const teamMembers = document.querySelectorAll(".team-member");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateIfInView() {
        if (isInViewport(aboutSection)) {
            aboutSection.classList.add("animation-active");
        }

        teamMembers.forEach(member => {
            if (isInViewport(member)) {
                member.classList.add("animation-active");
            }
        });
    }

    // Initial check when page loads
    animateIfInView();

    // Check again on scroll
    window.addEventListener("scroll", animateIfInView);
});
