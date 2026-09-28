import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className="ios-footer-wrap">
      <footer>
        <center className="bg-[#fafafa]">
          <img src="/Images/logo-9.png" alt="SyedShayan.com - Think Tank and Research-Based Web Portal" style={{ position: "relative", right: "20px", width: "205px" }} />
          {" "}
          <section className="text-black">
            <div className="max-w-xl mx-auto px-4">
              <p className="text-[12px] px-[45px]">
                {" Development is not measured by what we build. It is measured by how we improve lives, protect resources and shape better policies. "}
              </p>
              {" "}
              {" "}
              <div className="flex items-center justify-center mb-3 space-x-2">
                <span className="inline-block h-px mt-4 w-10 bg-gradient-to-r from-transparent via-[#a8967c] to-[#a8967c] opacity-80"></span>
                {" "}
                <span className="text-[14px] mt-4 font-semibold text-center whitespace-nowrap">
                  {" Our Vision "}
                </span>
                {" "}
                <span className="inline-block h-px mt-4 w-10 bg-gradient-to-l from-transparent via-[#a8967c] to-[#a8967c] opacity-80"></span>
              </div>
              {" "}
              {" "}
              <p className="text-center text-[11px] text-[black]">
                {" To be an independent centre of knowledge advancing better urban and regional development, responsible natural resource management and evidence based consumer policy through credible research and public dialogue. "}
              </p>
              {" "}
              <center>
                <div className="flex items-center justify-center mb-3 space-x-2">
                  <span className="inline-block h-px mt-4 w-10 bg-gradient-to-r from-transparent via-[#a8967c] to-[#a8967c] opacity-80"></span>
                  {" "}
                  <span className="text-[14px] mt-4 font-semibold text-center whitespace-nowrap">
                    {" Our Mission "}
                  </span>
                  {" "}
                  <span className="inline-block h-px mt-4 w-10 bg-gradient-to-l from-transparent via-[#a8967c] to-[#a8967c] opacity-80"></span>
                </div>
                {" "}
                <p className="text-center text-[11px] text-[black] mb-[11px]">
                  To produce independent research, informed policy analysis and practical recommendations that strengthen governance, improve communities and support sustainable national development.
                </p>
                {" "}
                <div className="bg-[#fafafa] py-2 mb-8 px-2">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-4 gap-2 md:gap-6 text-center">
                      <div className="flex flex-col">
                        <img src="/Images/urban_regional_development.png" className="w-full h-[35px] md:h-[60px] object-contain rounded mb-3" alt="Urban and Regional Development" />
                        {" "}
                        <h4 className="text-[11px] md:text-[12px] font-semibold mb-1 min-h-[50px] flex items-center justify-center">
                          {" Urban and Regional Development "}
                        </h4>
                        {" "}
                        <p className="text-[11px] md:text-[11px] text-gray-600 leading-snug">
                          {" Research and policy solutions for sustainable cities, resilient communities and inclusive regional growth. "}
                        </p>
                      </div>
                      {" "}
                      <div className="flex flex-col">
                        <img src="/Images/natural_resources.png" className="w-full h-[35px] md:h-[50px] object-contain rounded mb-3" alt="Natural Resources" />
                        {" "}
                        <h4 className="text-[11px] md:text-[12px] font-semibold mb-1 min-h-[50px] flex items-center justify-center">
                          {" Natural Resources "}
                        </h4>
                        {" "}
                        <p className="text-[11px] md:text-[11px] text-gray-600 leading-snug">
                          {" Evidence based insights on water, land, energy, minerals and environment for responsible resource management. "}
                        </p>
                      </div>
                      {" "}
                      <div className="flex flex-col">
                        <img src="/Images/consumer_policy.png" className="w-full h-[35px] md:h-[50px] object-contain rounded mb-3" alt="Consumer Policy" />
                        {" "}
                        <h4 className="text-[11px] md:text-[12px] font-semibold mb-1 min-h-[50px] flex items-center justify-center">
                          {" Consumer Policy "}
                        </h4>
                        {" "}
                        <p className="text-[11px] md:text-[11px] text-gray-600 leading-snug">
                          {" Strengthening consumer rights, market fairness, quality standards and effective regulatory frameworks. "}
                        </p>
                      </div>
                      {" "}
                      <div className="flex flex-col">
                        <img src="/Images/governance_&_public_policy.png" className="w-full h-[35px] md:h-[45px] object-contain rounded mb-3" alt="Governance and Public Policy" />
                        {" "}
                        <h4 className="text-[11px] md:text-[12px] font-semibold mb-1 min-h-[50px] flex items-center justify-center">
                          {" Governance and Public Policy "}
                        </h4>
                        {" "}
                        <p className="text-[11px] md:text-[11px] text-gray-600 leading-snug">
                          {" Improving laws, institutions and public systems for accountability, transparency and better public service delivery. "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </center>
              {" "}
              {" "}
              <div className="footerLinks flex flex-wrap justify-center gap-4 mb-3 text-center mx-2 mt-4">
                <a className="text-[11px] text-gray-700 underline hover:text-[#043F6C] transition" aria-disabled="true">
                  {" Profile "}
                </a>
                {" "}
                <a href="#" className="text-[11px] underline text-gray-700 hover:text-[#043F6C] transition">
                  About Us
                </a>
                {" "}
                <a href="#" className="text-[11px] underline text-gray-700 hover:text-[#043F6C] transition">
                  Our Mission
                </a>
                {" "}
                <a href="#" className="text-[11px] underline text-gray-700 hover:text-[#043F6C] transition">
                  Site Map
                </a>
                {" "}
                <a href="#" className="text-[11px] underline text-gray-700 hover:text-[#043F6C] transition">
                  {"Terms & Conditions"}
                </a>
                {" "}
                <a href="#" className="text-[11px] text-gray-700 underline hover:text-[#043F6C] transition">
                  FAQs
                </a>
                {" "}
                <a href="#" className="text-[11px] text-gray-700 underline hover:text-[#043F6C] transition">
                  Privacy Policy
                </a>
                {" "}
                <a href="#" className="text-[11px] text-gray-700 underline hover:text-[#043F6C] transition">
                  Contact Us
                </a>
              </div>
              {" "}
              {" "}
              <div className="flex items-center justify-center mb-2 space-x-2">
                <span className="inline-block h-px mt-4 w-10 bg-gradient-to-r from-transparent via-[#a8967c] to-[#a8967c] opacity-80"></span>
                {" "}
                {" "}
                <a className="px-[6px] py-[2px] mt-4 rounded-md text-[11px] font-medium border border-[#B29974] text-[black] shadow-[0_4px_6px_-3px_rgba(0,0,0,0.35)]" aria-disabled="true" style={{ background: "linear-gradient(90deg,rgba(221, 192, 150, 1) 0%, rgba(245, 220, 179, 1) 100%)" }}>
                  {" Membership Access "}
                </a>
                {" "}
                {" "}
                <span className="inline-block h-px mt-4 w-10 bg-gradient-to-l from-transparent via-[#a8967c] to-[#a8967c] opacity-80"></span>
              </div>
              {" "}
              {" "}
              <p style={{ fontSize: "11px" }} className="text-center text-base text-gray-700 mb-2">
                {" Members are provided with a profile, access to "}
                <br />
                {" community initiatives, early research reports, and "}
                <br />
                {" participation in think tank surveys. "}
              </p>
            </div>
          </section>
          {" "}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#a8967c] to-[#a8967c] opacity-70"></div>
            {" "}
            {" "}
            <div className="w-2 h-2 rotate-45 bg-[#a8967c]"></div>
            {" "}
            {" "}
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#a8967c] to-[#a8967c] opacity-70"></div>
          </div>
          {" "}
          {" "}
          <div className="appStores" style={{ gap: "1px" }}></div>
          {" "}
          {" "}
          <div className="footerView z-0 bg-[#fafafa]">
            <p className="mb-2 text-gray-400" style={{ textAlign: "center" }}>
              {" © SyedShayan.com "}
            </p>
            {" "}
            <div className="footer-end-city" style={{ width: "100%", height: "100px", backgroundImage: "url('/Images/footer-end-img-2.png')", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", display: "block" }}></div>
            {" "}
          </div>
        </center>
      </footer>
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      <div id="membersModalHost"></div>
    </div>
  )
}
