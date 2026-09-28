const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function calendarObserver() {

            const calendarObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                const elements = entry.target.querySelectorAll('.calendar-anim-element');
                if (entry.isIntersecting) {
                  elements.forEach(el => el.classList.add('run-calendar-anim'));
                } else {
                  elements.forEach(el => el.classList.remove('run-calendar-anim'));
                }
              });
            }, { threshold: 0.2 });
            calendarObserver.observe(document.getElementById('history-card'));
          
}
