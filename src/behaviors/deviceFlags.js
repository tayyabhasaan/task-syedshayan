const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function deviceFlags() {

(function () {
  const ua = navigator.userAgent || '';
  const root = document.documentElement;

  if (/iPhone|iPad|iPod/i.test(ua)) {
    root.classList.add('device-ios');
  } else if (/Android/i.test(ua)) {
    root.classList.add('device-android');
  }
})();

}
