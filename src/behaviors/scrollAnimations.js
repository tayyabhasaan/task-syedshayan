const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function scrollAnimations() {

        // Intersection Observer to trigger animations on scroll
        onReady( function () {
          const section = document.getElementById('trigger-section');

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // Add class to start animation
                entry.target.classList.add('animate-now');
              } else {
                // Optional: Remove class if you want animation to repeat when scrolling back down
                entry.target.classList.remove('animate-now');
              }
            });
          }, { threshold: 0.2 }); // Trigger when 20% of section is visible

          observer.observe(section);
        });
      
}
