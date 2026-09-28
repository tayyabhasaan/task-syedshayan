export default function Hero() {
  return (
    <section className="relative w-full bg-white font-sans -mt-2">
      <div className="relative flow-root w-full bg-[url('/Images/home-bg-17.jpg')] sm:bg-[url('/Images/home-bg-desktop-4.jpeg')] bg-cover bg-no-repeat bg-[position:right_center] min-h-[250px] md:min-h-[315px] xl:min-h-[380px] before:hidden sm:before:block before:absolute before:inset-0 before:z-10 before:pointer-events-none" style={{ zIndex: "99" }}>
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="max-w-2xl mb-12 pt-3 md:pt-2 md:-mt-2">
            <h1 className="figma-hero-title font-medium leading-[26px] text-[#043E6B] tracking-tight" ref={(el) => el && el.setAttribute("style", "font-family: 'Lora', serif; font-size: clamp(18px, 5.5vw, 19px) !important;")}>
              {" Shaping Policy,"}
              <br className="sm:hidden" />
              {" Resources, Governance "}
              <br />
              {" and National Direction "}
            </h1>
            {" "}
            {" "}
            <div className="w-[180px] h-[2px] bg-gradient-to-l from-transparent via-[#c8a562] to-[#c8a562] opacity-70 mt-2"></div>
            {" "}
            <div className="mt-2 items-center">
              <p className="text-sm md:text-[14px] text-[#032d4d] font-normal leading-[16px]">
                {" Independent research for better communities, responsible resource management "}
                <br />
                {" and fairer consumer policy. "}
              </p>
              {" "}
              <div className="border-l-2 border-[#c59420] pl-2">
                <p className="figma-hero-tagline text-[#c59420] italic font-normal text-[13px] mt-2 uppercase tracking-widest">
                  {" From research to policy outcomes, "}
                  <br />
                  {" defining Pakistan’s national priorities. "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <div className="w-full">
        <div className="home-entry-spacer sm:mx-[80px]" style={{ height: "150px" }}></div>
      </div>
      {" "}
      <div className="home-entry-position relative z-[99] px-4 md:px-10 pb-4 -mt-24">
        <div className="home-entry-wrapper xl:-mt-[355px] lg:-mt-[285px] md:-mt-[280px] -mt-[210px] max-w-[1115px] mx-auto animate-fade-up-onload mbs1">
          <div id="home-entry-cards" className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            <a href="#" className="block cursor-pointer">
              <div className="bg-[#fafafa] rounded-2xl px-2 sm:px-4 pb-3 pt-2 flex flex-col h-full border border-gray-50 transition-all duration-300 hover:-translate-y-1 group" style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-[#fafafa] rounded-full flex items-center justify-center shadow-md shadow-gray-400">
                      <img src="/Images/web2.png" alt="Web Portal" className="w-8 h-8" />
                    </div>
                    {" "}
                    <h3 className="font-semibold text-black ml-3 font-semibold" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
                      {" Web Portal "}
                    </h3>
                  </div>
                  {" "}
                  <p className="text-gray-700 font-normal text-[11px] md:text-[12px] leading-snug">
                    {" An open public research portal providing access to knowledge, archives and analysis, where people can share views, submit articles and contribute ideas on public issues. "}
                  </p>
                </div>
                {" "}
                <div className="mt-4 w-full text-center bg-[#043E6B] text-white py-2 rounded-full text-[11px] font-medium uppercase tracking-widest group-hover:bg-[#032d4d] relative z-10">
                  {" Enter the Portal "}
                </div>
              </div>
            </a>
            {" "}
            {" "}
            <a href="#" className="block cursor-pointer">
              <div className="bg-[#fafafa] rounded-2xl px-2 sm:px-4 pb-3 pt-2 flex flex-col h-full border border-gray-50 transition-all duration-300 hover:-translate-y-1 group" style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-[#fafafa] rounded-full flex items-center justify-center shadow-md shadow-gray-400">
                      <img src="/Images/think2.png" alt="Think Tank" className="w-7 h-8" />
                    </div>
                    {" "}
                    <h3 className="font-semibold text-black ml-3" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
                      {" Think Tank "}
                    </h3>
                  </div>
                  {" "}
                  <p className="text-gray-700 font-normal text-[11px] md:text-[12px] leading-snug">
                    {" An independent think tank working across seven domains: human settlements, natural resources, overseas Pakistanis, civil and military land, real estate technology, property laws and federal restructuring. "}
                  </p>
                </div>
                {" "}
                <div className="mt-4 w-full text-center bg-[#043E6B] text-white py-2 rounded-full font-medium uppercase group-hover:bg-[#032d4d] relative z-10" ref={(el) => el && el.setAttribute("style", "\n                              font-size: 9.5px !important;\n                              letter-spacing: 0.02em !important;\n                              padding-left: 4px !important;\n                              padding-right: 4px !important;\n                              white-space: nowrap !important;\n                              -webkit-text-size-adjust: none !important;\n                              text-size-adjust: none !important;\n                            ")}>
                  {" Explore The Think Tank "}
                </div>
              </div>
            </a>
            {" "}
            {" "}
            <a href="#" className="block cursor-pointer">
              <div className="bg-[#fafafa] rounded-2xl px-2 sm:px-4 pb-3 pt-2 flex flex-col h-full border border-gray-50 transition-all duration-300 hover:-translate-y-1 group" style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <div className="w-11 h-11 bg-[#fafafa] rounded-full flex items-center justify-center flex-shrink-0 shadow-md shadow-gray-400">
                      <img src="/Images/search2.png" alt="Research" className="w-8 h-8" />
                    </div>
                    {" "}
                    <h3 className="font-semibold text-black ml-3 leading-tight" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
                      {" Institute for Human Settlements "}
                    </h3>
                  </div>
                  {" "}
                  <p className="text-gray-700 font-normal text-[11px] md:text-[12px] leading-snug">
                    {" A research institute examining where people live and what that way of living requires: land, resources, services, laws and the institutions that hold them together. "}
                  </p>
                </div>
                {" "}
                <div className="mt-4 w-full text-center bg-[#043E6B] text-white py-2 rounded-full text-[11px] font-medium uppercase tracking-widest group-hover:bg-[#032d4d] relative z-10">
                  {" Visit Institute "}
                </div>
              </div>
            </a>
            {" "}
            {" "}
            <a href="#" className="block cursor-pointer">
              <div className="bg-[#fafafa] rounded-2xl px-2 sm:px-4 pb-3 pt-2 flex flex-col h-full border border-gray-100 transition-all duration-300 hover:-translate-y-1 group" style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-[#fafafa] rounded-full flex items-center justify-center flex-shrink-0 shadow-md shadow-gray-400">
                      <img src="/Images/refinancing2.png" alt="Transactions" className="w-8 h-8" />
                    </div>
                    {" "}
                    <h3 className="font-semibold text-black ml-3 leading-tight" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
                      {" Policy & Governance Hub "}
                    </h3>
                  </div>
                  {" "}
                  <p className="text-gray-700 font-normal text-[11px] md:text-[12px] leading-snug">
                    {" A hub examining the laws, regulators and public institutions that determine how land is held, resources are allocated, settlements are governed and citizens are protected. "}
                  </p>
                </div>
                {" "}
                <div className="mt-4 w-full text-center bg-[#043E6B] text-white py-2 rounded-full text-[11px] font-medium uppercase tracking-widest group-hover:bg-[#032d4d] relative z-10">
                  {" Start the Search "}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
