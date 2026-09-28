const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function androidFix() {

onReady( function () {
    if (/Android/i.test(navigator.userAgent)) {
        document.documentElement.classList.add('android-device');
    }
});

}
