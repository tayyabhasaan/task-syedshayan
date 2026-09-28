import '../styles/Header.css'

export default function Header() {
  return (
    <header dir="ltr" style={{ zIndex: "9999" }} className="only-header-mobile-h text-white px-1 py-2 pb-0 sm:py-0 bg-no-repeat bg-cover transition-all duration-500 min-h-[110px] sm:min-h-[115px] md:min-h-[100px] sticky top-0 z-50">
      <div className="container mx-auto px-2">
        <div className="flex min-h-[80px] items-center justify-between md:min-h-[100px]">
          <div className="flex shrink-0 items-center space-x-3">
            <a href="https://syedshayan.com/" className="flex items-center mt-3 no-underline">
              <img src="/Images/blue-logo.jpg" alt="SyedShayan.com – Think Tank for Urban and Regional Development, Natural Resources and Consumer Policy" className="w-[65px] border border-gray-200 mt-1" />
              {" "}
              <div className="ml-2 leading-tight">
                <div className="text-lg font-semibold text-white mt-1">
                  SyedShayan.com
                </div>
                {" "}
                <span id="typewriter" className="typewriter-text text-white relative top-[4px]" aria-live="polite">
                  <span id="typeLine1" className="typewriter-line" style={{ display: "block" }}>
                    Think Tank for Urban and Regional Development, Natural Resources
                  </span>
                  {" "}
                  <span id="typeLine2" className="typewriter-line is-typing" style={{ display: "block" }}>
                    and Consumer Policy
                  </span>
                  {" "}
                  <span id="typeLine3" className="typewriter-line" style={{ display: "none" }}></span>
                </span>
              </div>
            </a>
          </div>
          {" "}
          <nav dir="ltr" className="hidden md:flex md:min-w-0 md:flex-1 md:items-center md:justify-end md:gap-1 md:ml-3 lg:gap-3 xl:gap-6">
            <a href="#" className="nav-link flex shrink-0 items-center justify-center py-2 text-center text-[11px] font-semibold leading-3 text-white hover:text-white lg:text-xs xl:text-sm">
              {" Home "}
            </a>
            {" "}
            <a href="#" className="nav-link flex shrink-0 items-center justify-center py-2 text-center text-[11px] font-semibold leading-3 text-white hover:text-white lg:text-xs xl:text-sm">
              {" About "}
            </a>
            {" "}
            <a href="#" className="nav-link flex w-[54px] shrink-0 items-center justify-center py-2 text-center text-[11px] font-semibold leading-3 text-white hover:text-white lg:w-auto lg:text-xs xl:text-sm">
              {" Our Mission "}
            </a>
            {" "}
            <a href="#" className="nav-link flex shrink-0 items-center justify-center py-2 text-center text-[11px] font-semibold leading-3 text-white hover:text-white lg:text-xs xl:text-sm">
              {" FAQs "}
            </a>
            {" "}
            <a href="#" className="nav-link flex w-[72px] shrink-0 items-center justify-center py-2 text-center text-[11px] font-semibold leading-3 text-white hover:text-white lg:w-auto lg:text-xs xl:text-sm">
              {" Board of Governors "}
            </a>
            {" "}
            <a href="#" className="nav-link flex w-[100px] shrink-0 items-center justify-center py-2 text-center text-[11px] font-semibold leading-3 text-white hover:text-white lg:w-auto lg:text-xs xl:text-sm">
              {" Join us as a Thought Leader "}
            </a>
            {" "}
            <a href="#" className="nav-link flex w-[50px] shrink-0 items-center justify-center py-2 text-center text-[11px] font-semibold leading-3 text-white hover:text-white lg:w-auto lg:text-xs xl:text-sm">
              {" Contact Us "}
            </a>
          </nav>
          {" "}
          <div id="mobileMenuButton" role="button" tabIndex="0" aria-label="Open navigation menu" className="md:hidden cursor-pointer mb-8 z-50 text-xl text-[#043F6C]">
            <i id="hamburgerIcon" className="fas fa-bars"></i>
            {" "}
            <i id="closeIcon" className="fas fa-times hidden"></i>
          </div>
        </div>
      </div>
      {" "}
      <div id="mobileMenu" className="md:hidden hidden fixed inset-0 bg-white z-[9998]">
        <div className="absolute top-4 right-4 z-[10000]">
          <button id="mobileMenuCloseBtn" type="button" aria-label="Close navigation menu" className="text-2xl font-bold text-[#D7A93A] focus:outline-none">
            ×
          </button>
        </div>
        {" "}
        <div className="px-0 py-4 space-y-2 h-full overflow-y-auto bg-white">
          <div className="mx-2 border rounded-lg shadow-sm" style={{ backgroundColor: "#FBF6F0", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <p className="px-3 pt-2 text-[15px] font-bold text-[#052945]">
              About This Website
            </p>
            {" "}
            <p className="px-3 pb-3 text-[11px] leading-relaxed text-[#373737]">
              {" SyedShayan.com is a Think Tank and Research-Based Web Portal focused on urban and regional development, natural resources, consumer policy, governance, and public-interest research."}
              <br />
              <br />
              {" The website is organised into "}
              <span className="text-[#043F6C]">
                <b>
                  {" institutional and research sections "}
                </b>
              </span>
              {" covering research, policy analysis, public-interest information, and knowledge content. "}
            </p>
          </div>
          {" "}
          <p className="flex items-center gap-2 px-3 py-2 bg-[#FBF6F0] text-[18px] font-semibold text-[#052945] rounded-sm">
            <i className="fa-solid fa-house"></i>
            {" "}
            <span>
              CENTRAL
            </span>
            {" "}
            <span className="text-[#D7A93A] font-light mb-1">
              |
            </span>
            {" "}
            <span className="text-[14px] font-medium opacity-90 -ml-1">
              12 SECTIONS
            </span>
          </p>
          {" "}
          <div className="mobile-links-wrapper">
            <a href="#" className="flex items-center px-3 border-b py-[11px] text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Home
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 border-b py-[11px] text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              About
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Our Mission
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] text-[13px] border-b font-medium text-slate-900 hover:bg-slate-100">
              Site Map
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] text-[13px] border-b font-medium text-slate-900 hover:bg-slate-100">
              FAQs
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Board of Governors
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Join us as a Thought Leader
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Contact Us
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Profile
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              {"Terms & Conditions"}
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Privacy Policy
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Membership Access
            </a>
          </div>
          {" "}
          <p className="flex items-center gap-2 px-3 py-2 bg-[#FBF6F0] text-[18px] font-semibold text-[#052945] rounded-sm mt-4">
            <img src="/Images/3a98515c43ee07dd391938d6953825f97806f224.png" className="w-[20px]" alt="Segments" />
            {" "}
            <span>
              SEGMENTS
            </span>
            {" "}
            <span className="text-[#D7A93A] font-light mb-1">
              |
            </span>
            {" "}
            <span className="text-[14px] -ml-1 font-medium opacity-90">
              13 SECTIONS
            </span>
          </p>
          {" "}
          <div className="mobile-links-wrapper">
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Web Portal
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Think Tank
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              {"Research & Policy Portal"}
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Policy Governance Hub
            </a>
            {" "}
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Inquiry Series
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Pakistan's New Provinces Proposal
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              A Blog By Syed Shayan
            </a>
            {" "}
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Model Town Lahore
            </a>
            {" "}
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Research Report
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              {"TV & Documentaries"}
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Podcast
            </a>
            {" "}
            <a href="#" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              Research Educational Series
            </a>
          </div>
          {" "}
          <p className="flex items-center gap-2 px-3 py-2 bg-[#FBF6F0] text-[18px] font-semibold text-[#052945] rounded-sm mt-4">
            <i className="fa-regular fa-handshake"></i>
            {" "}
            <span>
              Part Of SyedShayan.com
            </span>
            {" "}
            <span className="text-[#D7A93A] font-light mb-1">
              |
            </span>
            {" "}
            <span className="text-[14px] font-medium opacity-90 -ml-1">
              3
            </span>
          </p>
          {" "}
          <div className="mobile-links-wrapper pb-10">
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              {" On This Date "}
            </a>
            {" "}
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              {" Shehrbeen "}
            </a>
            {" "}
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-[11px] border-b text-[13px] font-medium text-slate-900 hover:bg-slate-100">
              {" Free Media News "}
            </a>
          </div>
        </div>
      </div>
      {" "}
      <div className="flex items-end justify-end md:hidden">
        <a href="#" className="mr-2 -mt-4 text-[#043F6C] underline only-header-mobile-home">
          {" Home "}
        </a>
      </div>
    </header>
  )
}
