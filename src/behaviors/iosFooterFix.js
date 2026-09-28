const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function iosFooterFix() {

/* iPhone Safari sometimes keeps bottom spacing from nested footer wrappers.
   Trim only the final visible branch of footer.php; other footer spacing stays intact. */
(function () {
  function isAppleTouchDevice() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  function visibleElementChildren(el) {
    return Array.from(el.children).filter(function (child) {
      if (['SCRIPT', 'STYLE', 'LINK', 'NOSCRIPT'].includes(child.tagName)) return false;
      var cs = window.getComputedStyle(child);
      if (cs.display === 'none' || cs.visibility === 'hidden') return false;
      return child.getClientRects().length > 0;
    });
  }

  function trimLastBranch(el, depth) {
    if (!el || depth > 12) return;

    el.style.setProperty('margin-bottom', '0px', 'important');
    el.style.setProperty('padding-bottom', '0px', 'important');
    el.style.setProperty('min-height', '0px', 'important');

    var kids = visibleElementChildren(el);
    if (!kids.length) return;

    trimLastBranch(kids[kids.length - 1], depth + 1);
  }

  function fixIphoneFooterBottom() {
    if (!isAppleTouchDevice() || window.innerWidth > 767) return;

    var wrap = document.querySelector('.ios-footer-wrap');
    if (!wrap) return;

    trimLastBranch(wrap, 0);

    document.documentElement.style.setProperty('padding-bottom', '0px', 'important');
    document.body.style.setProperty('padding-bottom', '0px', 'important');
    document.body.style.setProperty('margin-bottom', '0px', 'important');
  }

  window.addEventListener('load', function () {
    fixIphoneFooterBottom();
    setTimeout(fixIphoneFooterBottom, 250);
    setTimeout(fixIphoneFooterBottom, 900);
  });

  window.addEventListener('pageshow', fixIphoneFooterBottom);
  window.addEventListener('orientationchange', function () {
    setTimeout(fixIphoneFooterBottom, 250);
  });
})();

}
