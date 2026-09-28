import { useEffect } from 'react'
import deviceDetect from '../behaviors/deviceDetect'
import androidFix from '../behaviors/androidFix'
import mobileMenuTypewriter from '../behaviors/mobileMenuTypewriter'
import scrollAnimations from '../behaviors/scrollAnimations'
import calendarObserver from '../behaviors/calendarObserver'
import todayDate from '../behaviors/todayDate'
import marquee from '../behaviors/marquee'
import membersModal from '../behaviors/membersModal'
import dropdowns from '../behaviors/dropdowns'
import heroResize from '../behaviors/heroResize'
import logosMarquee from '../behaviors/logosMarquee'
import housingPlacement from '../behaviors/housingPlacement'
import sliders from '../behaviors/sliders'
import deviceFlags from '../behaviors/deviceFlags'
import iosFooterFix from '../behaviors/iosFooterFix'

const behaviors = [deviceDetect, androidFix, mobileMenuTypewriter, scrollAnimations, calendarObserver, todayDate, marquee, membersModal, dropdowns, heroResize, logosMarquee, housingPlacement, sliders, deviceFlags, iosFooterFix]

// Runs the page's original interactive scripts once, after the components are on screen.
export default function useBehaviors() {
  useEffect(() => {
    behaviors.forEach((run) => {
      try { run() } catch (err) { console.error(run.name, err) }
    })
  }, [])
}
