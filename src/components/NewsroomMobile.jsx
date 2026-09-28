export default function NewsroomMobile() {
  return (
    <section className="figma-media-mobile block sm:hidden mx-4 md:w-[60%] sm:mx-auto">
      <h2 className="text-2xl font-semibold text-[#052945] mb-1 ml-1">
        {" Media & Research Hub "}
      </h2>
      {" "}
      <div className="space-y-4">
        <a href="#" className="flex items-start bg-[#fafafa] shadow-md rounded-sm border border-gray-100 overflow-hidden p-2 hover:bg-gray-50 transition cursor-pointer block">
          <img src="/Images/news-room.png" className="w-28 sm:w-32 h-[80px] sm:h-20 object-cover shrink-0 rounded-sm" alt="Newsroom" />
          {" "}
          <div className="flex flex-col px-4 py-1 flex-1">
            <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
              Newsroom
            </h3>
            {" "}
            <p className="text-gray-500 text-[11px] sm:text-xs mt-1">
              Digital real estate news, verified updates, and continuous market coverage.
            </p>
            {" "}
            <div className="mt-2 sm:mt-auto flex justify-end">
              <span className="bg-[#043E6B] text-white px-4 py-1 text-[11px] uppercase tracking-wider rounded-sm hover:bg-[#032d4d] transition">
                Explore
              </span>
            </div>
          </div>
        </a>
        {" "}
        <a href="#" className="flex items-start bg-[#fafafa] shadow-md rounded-sm border border-gray-100 overflow-hidden p-2 hover:bg-gray-50 transition cursor-pointer block">
          <img src="/Images/research-report.png" className="w-28 sm:w-32 h-[80px] sm:h-20 object-cover shrink-0 rounded-sm" alt="Research Reports" />
          {" "}
          <div className="flex flex-col px-4 py-1 flex-1">
            <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
              Research Reports
            </h3>
            {" "}
            <p className="text-gray-500 text-[11px] sm:text-xs mt-1">
              {" Evidence based studies, surveys, and analytical market research. research."}
            </p>
            {" "}
            <div className="mt-2 sm:mt-auto flex justify-end">
              <span className="bg-[#043E6B] text-white px-4 py-1 text-[11px] uppercase tracking-wider rounded-sm hover:bg-[#032d4d] transition">
                Explore
              </span>
            </div>
          </div>
        </a>
        {" "}
        <a href="#" className="flex items-start bg-[#fafafa] shadow-md rounded-sm border border-gray-100 overflow-hidden p-2 hover:bg-gray-50 transition cursor-pointer block">
          <img src="/Images/remort.png" className="w-28 sm:w-32 h-[80px] sm:h-20 object-cover shrink-0 rounded-sm" alt="TV" />
          {" "}
          <div className="flex flex-col px-4 py-1 flex-1">
            <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
              {"TV & Documentaries"}
            </h3>
            {" "}
            <p className="text-gray-500 text-[11px] sm:text-xs mt-1">
              Original programmes, visual analysis, and documentary features.
            </p>
            {" "}
            <div className="mt-2 sm:mt-auto flex justify-end">
              <span className="bg-[#043E6B] text-white px-4 py-1 text-[11px] uppercase tracking-wider rounded-sm hover:bg-[#032d4d] transition">
                Explore
              </span>
            </div>
          </div>
        </a>
        {" "}
        <a href="#" className="flex items-start bg-[#fafafa] shadow-md rounded-sm border border-gray-100 overflow-hidden p-2 hover:bg-gray-50 transition cursor-pointer block">
          <img src="/Images/laptop.png" className="w-28 sm:w-32 h-[80px] sm:h-20 object-cover shrink-0 rounded-sm" alt="Podcast" />
          {" "}
          <div className="flex flex-col px-4 py-1 flex-1">
            <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
              Podcast
            </h3>
            {" "}
            <p className="text-gray-500 text-[11px] sm:text-xs mt-1">
              Expert led discussions, interviews, and policy oriented conversations.
            </p>
            {" "}
            <div className="mt-2 sm:mt-auto flex justify-end">
              <span className="bg-[#043E6B] text-white px-4 py-1 text-[11px] uppercase tracking-wider rounded-sm hover:bg-[#032d4d] transition">
                Explore
              </span>
            </div>
          </div>
        </a>
        {" "}
        <a href="#" className="flex items-start bg-[#fafafa] shadow-md rounded-sm border border-gray-100 overflow-hidden p-2 hover:bg-gray-50 transition cursor-pointer block">
          <img src="/Images/real_estate.jpeg" className="w-28 sm:w-32 h-[80px] sm:h-20 object-cover shrink-0 rounded-sm" alt="Education" />
          {" "}
          <div className="flex flex-col px-4 py-1 flex-1">
            <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
              Research Educational Series
            </h3>
            {" "}
            <p className="text-gray-500 text-[11px] sm:text-xs mt-1 leading-tight">
              Structured learning on real estate fundamentals, strategy, and professional practice.
            </p>
            {" "}
            <div className="mt-2 sm:mt-auto flex justify-end">
              <span className="bg-[#043E6B] text-white px-4 py-1 text-[11px] uppercase tracking-wider rounded-sm hover:bg-[#032d4d] transition">
                Explore
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
