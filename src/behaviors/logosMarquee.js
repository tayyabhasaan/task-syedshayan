const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function logosMarquee() {

    onReady( function () {

      const track = document.getElementById('logos-track');

      if (!track) {
        return;
      }

      /* Prevent running twice */
      if (track.dataset.marqueeReady === 'true') {
        return;
      }


      /* ==========================================
         GET ORIGINAL 3 LOGOS
      ========================================== */

      const originalItems = Array.from(track.children);

      if (!originalItems.length) {
        return;
      }


      /* ==========================================
         CREATE FIRST COMPLETE GROUP
      ========================================== */

      const firstGroup = document.createElement('div');

      firstGroup.className = 'logos-group';


      originalItems.forEach(function (item) {

        firstGroup.appendChild(item);

      });


      /* ==========================================
         CREATE EXACT COPY
      ========================================== */

      const secondGroup = firstGroup.cloneNode(true);

      secondGroup.classList.add('clone-logos-group');

      secondGroup.setAttribute(
        'aria-hidden',
        'true'
      );


      secondGroup
        .querySelectorAll('a')
        .forEach(function (link) {

          link.setAttribute(
            'tabindex',
            '-1'
          );

        });


      /* ==========================================
         ADD BOTH GROUPS TO TRACK
      ========================================== */

      track.innerHTML = '';

      track.appendChild(firstGroup);

      track.appendChild(secondGroup);


      /* ==========================================
         EXACT SCROLL DISTANCE
      ========================================== */

      function setExactMarqueeDistance() {

        /*
         * Exact width of first complete group.
         * We move precisely this distance.
         */

        const groupWidth =
          firstGroup.getBoundingClientRect().width;


        /*
         * Store NEGATIVE value directly.
         * Example: -504px
         */

        track.style.setProperty(
          '--marquee-distance',
          '-' + groupWidth + 'px'
        );

      }


      /* Measure after browser layout */
      requestAnimationFrame(function () {

        requestAnimationFrame(function () {

          setExactMarqueeDistance();

          track.classList.add(
            'marquee-ready'
          );

        });

      });


      /* Recalculate when screen changes */
      window.addEventListener(
        'resize',
        setExactMarqueeDistance
      );


      window.addEventListener(
        'orientationchange',
        function () {

          setTimeout(
            setExactMarqueeDistance,
            150
          );

        }
      );


      track.dataset.marqueeReady = 'true';

    });
  
}
