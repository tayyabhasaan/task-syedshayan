import Header from './components/Header'
import Hero from './components/Hero'
import ColumnBanner from './components/ColumnBanner'
import ResearchPolicy from './components/ResearchPolicy'
import ColumnBannerMobile from './components/ColumnBannerMobile'
import ResearchPolicyMobile from './components/ResearchPolicyMobile'
import PublicOpinion from './components/PublicOpinion'
import HousingSpacer from './components/HousingSpacer'
import HousingSocietiesMobile from './components/HousingSocietiesMobile'
import MobileLinks from './components/MobileLinks'
import Newsroom from './components/Newsroom'
import NewsroomMobile from './components/NewsroomMobile'
import NetworkSection from './components/NetworkSection'
import FooterSpacer from './components/FooterSpacer'
import Footer from './components/Footer'
import useBehaviors from './hooks/useBehaviors'

export default function App() {
  useBehaviors()
  return (
    <>
      <Header />
      <Hero />
      <ColumnBanner />
      <ResearchPolicy />
      <ColumnBannerMobile />
      <ResearchPolicyMobile />
      <PublicOpinion />
      <HousingSpacer />
      <HousingSocietiesMobile />
      <MobileLinks />
      <Newsroom />
      <NewsroomMobile />
      <NetworkSection />
      <FooterSpacer />
      <Footer />
    </>
  )
}
