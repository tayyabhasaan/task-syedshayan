const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function deviceDetect() {

    (function () {
      var ua = navigator.userAgent || '';
      var platform = (navigator.userAgentData && navigator.userAgentData.platform) || '';

      if (/Android/i.test(ua) || /Android/i.test(platform)) {
        document.documentElement.classList.add('android-device');
      }
    })();
  
}
