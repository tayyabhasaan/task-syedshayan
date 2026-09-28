export default function ColumnBanner() {
  return (
    <section className="hidden lg:block w-full py-6 sm:py-6 md:py-7">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-9">
            <div className="w-full md:w-[600px] md:ml-auto overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat shadow-[0_8px_25px_rgba(15,23,42,0.14)]">
              <a href="#" className="group relative mx-auto block w-full overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1">
                <div className="relative min-h-[120px] bg-white pl-[40%]">
                  <div className="absolute left-4 top-3 z-20 h-[190px] w-[35%] overflow-hidden rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.18)]">
                    <img src="/Images/sir-shayan.jpeg" alt="Syed Shayan" className="h-full w-full object-cover object-[center_40%] transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  {" "}
                  {" "}
                  <div dir="rtl" className="flex min-h-[120px] flex-col items-center justify-center px-3 pb-3 pt-3 text-center">
                    <p className="text-[13px] font-semibold text-[#043E6B] sm:text-[17px]" style={{ fontFamily: "'Noto Nastaliq Urdu',serif" }}>
                      {" سید شایان کا کالم "}
                    </p>
                    {" "}
                    <h2 className="mt-1 text-[21px] font-bold leading-tight text-[#a9852d] sm:text-[28px]" style={{ fontFamily: "'Noto Nastaliq Urdu',serif" }}>
                      {" زمینی حقائق "}
                    </h2>
                    {" "}
                    <p className="mt-1 text-[11px] leading-relaxed text-gray-700 sm:text-[11px]" style={{ fontFamily: "'Noto Nastaliq Urdu',serif" }}>
                      {" روزمرہ زندگی کے واقعات پر تحقیق، تبصرہ اور تجزیہ "}
                    </p>
                  </div>
                </div>
                {" "}
                {" "}
                {" "}
                {" "}
                <div className="grid min-h-[110px] grid-cols-[40%_60%] bg-[#022846] text-white">
                  <div></div>
                  {" "}
                  {" "}
                  <div className="grid grid-cols-[30%_70%]">
                    <div className="flex flex-col justify-center border-r border-white/20 px-2 sm:px-4">
                      <p className="text-[11px] font-semibold leading-[1.25] text-[#e4bf4a] sm:text-[14px]">
                        {" Zameeni Haqaiq "}
                      </p>
                      {" "}
                      <p className="mt-1 text-[11px] font-semibold leading-[1.25] text-white sm:text-[14px]">
                        {" A Column "}
                      </p>
                      {" "}
                      <p className="mt-1 text-[11px] font-semibold text-white sm:text-[11px]">
                        {" By Syed Shayan "}
                      </p>
                    </div>
                    {" "}
                    {" "}
                    <div className="flex flex-col justify-center px-2 py-2 sm:px-4">
                      <p className="text-[11px] leading-none text-white/80 sm:text-[11px]">
                        {" Published in "}
                      </p>
                      {" "}
                      <p className="mt-1 text-[11px] font-semibold text-[#e4bf4a] sm:text-[13px]">
                        {" 6 Languages "}
                      </p>
                      {" "}
                      {" "}
                      <div className="mt-2 grid grid-cols-3 gap-1">
                        <span className="rounded-full bg-white px-1 py-[2px] text-center text-[11px] font-medium text-[#022846] sm:text-[11px]">
                          {" العربية "}
                        </span>
                        {" "}
                        <span className="rounded-full bg-white px-1 py-[2px] text-center text-[11px] font-medium text-[#022846] sm:text-[11px]">
                          {" English "}
                        </span>
                        {" "}
                        <span className="rounded-full bg-white px-1 py-[2px] text-center text-[11px] font-medium text-[#022846] sm:text-[11px]">
                          {" اردو "}
                        </span>
                        {" "}
                        <span className="rounded-full bg-white px-1 py-[2px] text-center text-[11px] font-medium text-[#022846] sm:text-[11px]">
                          {" سندھی "}
                        </span>
                        {" "}
                        <span className="rounded-full bg-white px-1 py-[2px] text-center text-[11px] font-medium text-[#022846] sm:text-[11px]">
                          {" پشتو "}
                        </span>
                        {" "}
                        <span className="rounded-full bg-white px-1 py-[2px] text-center text-[11px] font-medium text-[#022846] sm:text-[11px]">
                          {" پنجابی "}
                        </span>
                      </div>
                      {" "}
                      <p className="mt-2 text-center text-[11px] tracking-wide text-white/80 sm:text-[11px]">
                        {" Connecting Readers Worldwide "}
                      </p>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                {" "}
                {" "}
                <div className="grid h-[58px] grid-cols-6 divide-x divide-gray-200 bg-white">
                  <div className="flex flex-col items-center justify-center gap-1 text-[#043E6B] transition-colors duration-300 group-hover:text-[#0b6c9f]">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 21h18M5 21V10m14 11V10M4 10h16L12 3 4 10Zm4 2v6m4-6v6m4-6v6"></path>
                    </svg>
                    {" "}
                    <span className="text-[11px] font-medium sm:text-[11px]">
                      {" ریاست "}
                    </span>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex flex-col items-center justify-center gap-1 text-[#043E6B] transition-colors duration-300 group-hover:text-[#0b6c9f]">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87m-2-11.96a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    {" "}
                    <span className="text-[11px] font-medium sm:text-[11px]">
                      {" سماج "}
                    </span>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex flex-col items-center justify-center gap-1 text-[#043E6B] transition-colors duration-300 group-hover:text-[#0b6c9f]">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 20V10m5 10V4m6 16v-7m5 7V7M2 20h20"></path>
                    </svg>
                    {" "}
                    <span className="text-[11px] font-medium sm:text-[11px]">
                      {" معیشت "}
                    </span>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex flex-col items-center justify-center gap-1 text-[#043E6B] transition-colors duration-300 group-hover:text-[#0b6c9f]">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="7" strokeWidth="1.8"></circle>
                      {" "}
                      <path strokeLinecap="round" strokeWidth="1.8" d="m20 20-4-4"></path>
                    </svg>
                    {" "}
                    <span className="text-[11px] font-medium sm:text-[11px]">
                      {" تحقیق "}
                    </span>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex flex-col items-center justify-center gap-1 text-[#043E6B] transition-colors duration-300 group-hover:text-[#0b6c9f]">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="9" y="2" width="6" height="11" rx="3" strokeWidth="1.8"></rect>
                      {" "}
                      <path strokeLinecap="round" strokeWidth="1.8" d="M5 10a7 7 0 0 0 14 0M12 17v4m-4 0h8"></path>
                    </svg>
                    {" "}
                    <span className="text-[11px] font-medium sm:text-[11px]">
                      {" میڈیا "}
                    </span>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex flex-col items-center justify-center gap-1 text-[#043E6B] transition-colors duration-300 group-hover:text-[#0b6c9f]">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth="1.8"></circle>
                      {" "}
                      <path strokeLinecap="round" strokeWidth="1.8" d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z"></path>
                    </svg>
                    {" "}
                    <span className="text-[11px] font-medium sm:text-[11px]">
                      {" عوام "}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {" "}
          <div className="relative z-20 h-full lg:col-span-3"></div>
        </div>
      </div>
    </section>
  )
}
