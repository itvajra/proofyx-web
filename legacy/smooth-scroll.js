/**
 * Smooth scroll behavior for anchor links
 * Proofyx Homepage
 */

document.addEventListener('DOMContentLoaded', () => {
    // Handle smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or empty
            if (!href || href === '#') return;

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL hash without jumping
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
            }
        });
    });
});
