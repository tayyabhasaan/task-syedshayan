const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function sliders() {

onReady( function () {
  const sliders = Array.from(document.querySelectorAll('.rp-paged-slider'));

  sliders.forEach(function (slider) {
    const track = slider.querySelector('.rp-pages');
    const originalPages = Array.from(slider.querySelectorAll('.rp-page'));
    const dots = Array.from(slider.querySelectorAll('.rp-dots button'));
    const prevButton = slider.querySelector('.rp-prev');
    const nextButton = slider.querySelector('.rp-next');

    if (!track || originalPages.length === 0) return;

    const total = originalPages.length;
    const infiniteMobile = slider.classList.contains('rp-mobile') && total > 1;
    let active = 0;
    let scrollTimer = null;
    let navLocked = false;

    function normalise(index) {
      return ((index % total) + total) % total;
    }

    function setDot(index) {
      active = infiniteMobile
        ? normalise(index)
        : Math.max(0, Math.min(index, total - 1));

      dots.forEach(function (dot, i) {
        const isActive = i === active;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-current', isActive ? 'true' : 'false');
      });

      if (prevButton) prevButton.disabled = infiniteMobile ? false : active === 0;
      if (nextButton) nextButton.disabled = infiniteMobile ? false : active === total - 1;
    }

    function pageLeft(page) {
      return page.offsetLeft - track.offsetLeft;
    }

    function smoothTo(page) {
      if (!page) return;
      track.style.removeProperty('scroll-behavior');
      track.scrollTo({
        left: pageLeft(page),
        behavior: 'smooth'
      });
    }

    function instantTo(page) {
      if (!page) return;

      /* CSS has scroll-behavior:smooth !important, so temporarily
         override it to make the loop reset completely invisible. */
      track.style.setProperty('scroll-behavior', 'auto', 'important');
      track.scrollLeft = pageLeft(page);

      requestAnimationFrame(function () {
        track.style.removeProperty('scroll-behavior');
      });
    }

    /* =========================================================
       MOBILE INFINITE LOOP
       Visible order remains:
       1,2 -> 2,3 -> 3,4 -> 4,5 -> 5,1 -> 1,2 -> ...
       The first two cards are cloned after Card 5 and Card 5 is
       cloned before Card 1. The reset happens on identical content,
       so there is no visible backward jump.
       ========================================================= */
    if (infiniteMobile) {
      function prepareClone(node, position) {
        const clone = node.cloneNode(true);
        clone.setAttribute('data-rp-clone', position);
        clone.setAttribute('aria-hidden', 'true');

        clone.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach(function (el) {
          el.setAttribute('tabindex', '-1');
        });

        return clone;
      }

      const beforeClone = prepareClone(originalPages[total - 1], 'before');
      const firstClone = prepareClone(originalPages[0], 'after-first');
      const secondClone = prepareClone(originalPages[1], 'after-second');

      track.insertBefore(beforeClone, originalPages[0]);
      track.appendChild(firstClone);
      track.appendChild(secondClone);

      const physicalPages = Array.from(track.children).filter(function (el) {
        return el.classList && el.classList.contains('rp-page');
      });

      /* Physical positions after cloning:
         0 = clone Card 5
         1..total = original Cards 1..5
         total+1 = clone Card 1
         total+2 = clone Card 2
      */
      let physicalActive = 1;

      function logicalFromPhysical(index) {
        if (index === 0) return total - 1;
        if (index >= 1 && index <= total) return index - 1;
        if (index === total + 1) return 0;
        if (index === total + 2) return 1;
        return 0;
      }

      function goToPhysical(index, smooth) {
        const maxPhysical = total + 2;
        index = Math.max(0, Math.min(index, maxPhysical));
        const page = physicalPages[index];
        if (!page) return;

        physicalActive = index;
        setDot(logicalFromPhysical(index));

        if (smooth === false) {
          instantTo(page);
        } else {
          smoothTo(page);
        }
      }

      function goToLogical(index, smooth) {
        const logical = normalise(index);
        goToPhysical(logical + 1, smooth);
      }

      dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
          if (navLocked) return;
          navLocked = true;
          goToLogical(index, true);
        });
      });

      if (prevButton) {
        prevButton.addEventListener('click', function () {
          if (navLocked) return;
          navLocked = true;
          goToPhysical(physicalActive - 1, true);
        });
      }

      if (nextButton) {
        nextButton.addEventListener('click', function () {
          if (navLocked) return;
          navLocked = true;
          goToPhysical(physicalActive + 1, true);
        });
      }

      track.addEventListener('scroll', function () {
        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(function () {
          let nearest = 0;
          let best = Infinity;

          physicalPages.forEach(function (page, i) {
            const distance = Math.abs(pageLeft(page) - track.scrollLeft);
            if (distance < best) {
              best = distance;
              nearest = i;
            }
          });

          /* Card 5 clone before Card 1 -> silently move to the real
             Card 5, where the visible pair is still exactly 5 + 1. */
          if (nearest === 0) {
            physicalActive = total;
            setDot(total - 1);
            instantTo(physicalPages[total]);
            navLocked = false;
            return;
          }

          /* Clone Card 1 after Card 5 -> silently return to real Card 1.
             Both positions display exactly Card 1 + Card 2. */
          if (nearest === total + 1) {
            physicalActive = 1;
            setDot(0);
            instantTo(physicalPages[1]);
            navLocked = false;
            return;
          }

          /* Safety for a very fast iPhone swipe reaching the second clone. */
          if (nearest === total + 2) {
            physicalActive = 2;
            setDot(1);
            instantTo(physicalPages[2]);
            navLocked = false;
            return;
          }

          physicalActive = nearest;
          setDot(logicalFromPhysical(nearest));
          navLocked = false;
        }, 90);
      }, { passive: true });

      setDot(0);
      requestAnimationFrame(function () {
        goToPhysical(1, false);
      });

      return;
    }

    /* Desktop keeps the existing finite slider behaviour unchanged. */
    function goTo(index, smooth) {
      index = Math.max(0, Math.min(index, total - 1));
      const page = originalPages[index];
      if (!page) return;

      if (smooth === false) {
        instantTo(page);
      } else {
        smoothTo(page);
      }
      setDot(index);
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        goTo(index, true);
      });
    });

    if (prevButton) {
      prevButton.addEventListener('click', function () {
        goTo(active - 1, true);
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function () {
        goTo(active + 1, true);
      });
    }

    track.addEventListener('scroll', function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        let nearest = 0;
        let best = Infinity;

        originalPages.forEach(function (page, i) {
          const distance = Math.abs(pageLeft(page) - track.scrollLeft);
          if (distance < best) {
            best = distance;
            nearest = i;
          }
        });

        setDot(nearest);
      }, 70);
    }, { passive: true });

    setDot(0);
    requestAnimationFrame(function () {
      goTo(0, false);
    });
  });
});

}
