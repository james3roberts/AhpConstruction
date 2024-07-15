// Ensure DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Change link color on click
            this.style.color = '#236192'; // Aves blue

            // Revert back to original color after 5 seconds
            setTimeout(() => {
                this.style.color = ''; // Reset to original color defined in CSS
            }, 5000); // 5000 milliseconds = 5 seconds
        });
    });
});
