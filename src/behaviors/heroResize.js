const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function heroResize() {

    (function () {
      const DESIGN_WIDTH = 1600;
      const DESIGN_HEIGHT = 900;

      function resizeOnePakAdmin(hero) {
        if (!hero) return;

        const stage = hero.querySelector(".pak-admin-stage");
        if (!stage) return;

        const containerWidth = hero.getBoundingClientRect().width;

        if (!containerWidth || containerWidth <= 0) {
          return;
        }

        const scale = containerWidth / DESIGN_WIDTH;
        stage.style.transform = "scale(" + scale + ")";
        hero.style.height = (DESIGN_HEIGHT * scale) + "px";
      }

      function initPakAdminCards() {
        const heroes = document.querySelectorAll(".pak-admin-hero");

        heroes.forEach(function (hero) {
          resizeOnePakAdmin(hero);

          if (typeof ResizeObserver !== "undefined" && !hero._pakAdminObserved) {
            const observer = new ResizeObserver(function () {
              resizeOnePakAdmin(hero);
            });

            observer.observe(hero);
            hero._pakAdminObserved = true;
          }
        });
      }

      window.addEventListener("load", initPakAdminCards);
      window.addEventListener("resize", initPakAdminCards);
      window.addEventListener("orientationchange", function () {
        setTimeout(initPakAdminCards, 120);
      });
      window.addEventListener("pageshow", initPakAdminCards);
      initPakAdminCards();
    })();
  
}
