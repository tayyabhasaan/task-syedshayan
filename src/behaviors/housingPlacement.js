const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function housingPlacement() {

    // Keep the Housing Societies section directly below Digital Library on desktop.
    onReady( function () {
      const digitalLibrary = document.getElementById('digital-library-pdfmatch');
      const desktopHousing = document.getElementById('housing-societies-desktop');

      if (digitalLibrary && desktopHousing) {
        digitalLibrary.insertAdjacentElement('afterend', desktopHousing);
      }
    });
  
}
