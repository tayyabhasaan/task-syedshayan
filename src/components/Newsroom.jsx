export default function Newsroom() {
  return (
    <section className="hidden w-full bg-white py-10 sm:block sm:py-12">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 className="text-2xl font-semibold text-[#052945]">
            {" Media & Research Hub "}
          </h2>
          {" "}
          <div className="mt-2 h-[3px] w-12 rounded-full bg-[#c59420]"></div>
        </div>
        {" "}
        {" "}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_1.95fr]">
          <a href="#" className="group relative min-h-[360px] overflow-hidden rounded-[20px] shadow-[0_14px_40px_rgba(5,41,69,0.20)] sm:min-h-[440px]">
            <img src="/Images/news.png" alt="Newsroom" className="absolute inset-0 block h-full w-full object-cover transition duration-700 group-hover:scale-105 lg:hidden" />
            {" "}
            {" "}
            <img src="/Images/news-desktop.png" alt="Newsroom" className="absolute inset-0 hidden h-full w-full object-cover transition duration-700 group-hover:scale-105 lg:block" />
            {" "}
            <div className="absolute inset-0 bg-gradient-to-t from-[#031d30] via-[#052945]/45 to-transparent"></div>
            {" "}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <h3 className="text-[24px] font-bold leading-tight text-white sm:text-[30px]">
                {" Newsroom "}
              </h3>
              {" "}
              <p className="mt-2 max-w-[420px] text-[12px] leading-5 text-white/80 sm:text-[14px] sm:leading-6">
                {" Digital real estate news, verified updates, and continuous market coverage. "}
              </p>
              {" "}
              <span className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#043E6B] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                {" Explore "}
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </div>
          </a>
          {" "}
          {" "}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <a href="#" className="group flex min-h-[260px] flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.09)] transition duration-300 hover:-translate-y-1 hover:border-[#c59420]/60 hover:shadow-[0_14px_32px_rgba(15,23,42,0.14)]">
              <div className="h-[145px] overflow-hidden">
                <img src="/Images/reports1.png" alt="Research Reports" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              {" "}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-[17px] font-bold text-[#052945]">
                  {" Research Reports "}
                </h3>
                {" "}
                <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-500 sm:text-[12px]">
                  {" Evidence based studies, surveys, and analytical market research. "}
                </p>
                {" "}
                <div className="mt-auto flex justify-end pt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#043E6B] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {" Explore "}
                    <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
            {" "}
            {" "}
            <a href="#" className="group flex min-h-[260px] flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.09)] transition duration-300 hover:-translate-y-1 hover:border-[#c59420]/60 hover:shadow-[0_14px_32px_rgba(15,23,42,0.14)]">
              <div className="h-[145px] overflow-hidden">
                <img src="/Images/tv1.png" alt="TV and Documentaries" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              {" "}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-[17px] font-bold text-[#052945]">
                  {" TV & Documentaries "}
                </h3>
                {" "}
                <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-500 sm:text-[12px]">
                  {" Original programmes, visual analysis, and documentary features. "}
                </p>
                {" "}
                <div className="mt-auto flex justify-end pt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#043E6B] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {" Explore "}
                    <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
            {" "}
            {" "}
            <a href="#" className="group flex min-h-[260px] flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.09)] transition duration-300 hover:-translate-y-1 hover:border-[#c59420]/60 hover:shadow-[0_14px_32px_rgba(15,23,42,0.14)]">
              <div className="h-[145px] overflow-hidden">
                <img src="/Images/podcast1.png" alt="Podcast" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              {" "}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-[17px] font-bold text-[#052945]">
                  {" Podcast "}
                </h3>
                {" "}
                <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-500 sm:text-[12px]">
                  {" Expert led discussions, interviews, and policy oriented conversations. "}
                </p>
                {" "}
                <div className="mt-auto flex justify-end pt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#043E6B] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {" Explore "}
                    <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
            {" "}
            {" "}
            <a href="#" className="group flex min-h-[260px] flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.09)] transition duration-300 hover:-translate-y-1 hover:border-[#c59420]/60 hover:shadow-[0_14px_32px_rgba(15,23,42,0.14)]">
              <div className="h-[145px] overflow-hidden">
                <img src="/Images/real_estate.jpeg" alt="Real Estate Education Series" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              {" "}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-[16px] font-bold leading-tight text-[#052945]">
                  {" Research Educational Series "}
                </h3>
                {" "}
                <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-500 sm:text-[12px]">
                  {" Structured learning on real estate fundamentals, strategy, and professional practice. "}
                </p>
                {" "}
                <div className="mt-auto flex justify-end pt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#043E6B] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {" Explore "}
                    <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
