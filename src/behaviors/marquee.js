const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function marquee() {

    /* PART OF SYEDSHAYAN.COM — restore the previous smooth continuous animation */
    onReady( function () {
      const track = document.getElementById('syedNetworkTrack');
      if (!track || track.dataset.marqueeReady === 'true') return;

      const originalItems = Array.from(track.children).filter(function (item) {
        return item.classList.contains('syed-network-item');
      });

      if (!originalItems.length) return;

      /* Duplicate twice so the loop remains seamless on desktop, tablet and mobile. */
      for (let set = 0; set < 2; set++) {
        originalItems.forEach(function (item) {
          const clone = item.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          clone.setAttribute('tabindex', '-1');
          track.appendChild(clone);
        });
      }

      let loopDistance = 0;
      let offset = 0;
      let lastTime = 0;
      let rafId = null;
      let paused = false;

      function getSpeed() {
        if (window.innerWidth <= 480) return 28;
        if (window.innerWidth <= 760) return 32;
        return 38;
      }

      function measure() {
        const items = track.querySelectorAll('.syed-network-item');
        if (items.length <= originalItems.length) return;

        const firstOriginal = items[0];
        const firstClone = items[originalItems.length];
        loopDistance = firstClone.offsetLeft - firstOriginal.offsetLeft;

        if (loopDistance > 0) {
          offset = offset % loopDistance;
          track.style.transform = 'translate3d(' + (-offset) + 'px,0,0)';
        }
      }

      function frame(now) {
        if (!lastTime) lastTime = now;

        const delta = Math.min((now - lastTime) / 1000, 0.05);
        lastTime = now;

        if (!paused && loopDistance > 0) {
          offset += getSpeed() * delta;

          if (offset >= loopDistance) {
            offset -= loopDistance;
          }

          track.style.transform = 'translate3d(' + (-offset) + 'px,0,0)';
        }

        rafId = requestAnimationFrame(frame);
      }

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          measure();
          track.dataset.marqueeReady = 'true';

          if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            rafId = requestAnimationFrame(frame);
          }
        });
      });

      const viewport = track.closest('.syed-network-marquee');
      if (viewport) {
        viewport.addEventListener('mouseenter', function () {
          paused = true;
        });

        viewport.addEventListener('mouseleave', function () {
          paused = false;
          lastTime = performance.now();
        });
      }

      let resizeTimer;
      window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          measure();
          lastTime = performance.now();
        }, 80);
      });

      window.addEventListener('orientationchange', function () {
        setTimeout(function () {
          measure();
          lastTime = performance.now();
        }, 180);
      });

      document.addEventListener('visibilitychange', function () {
        if (!document.hidden) lastTime = performance.now();
      });
    });
  
}
