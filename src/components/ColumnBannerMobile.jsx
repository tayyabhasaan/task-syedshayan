import '../styles/ColumnBannerMobile.css'

export default function ColumnBannerMobile() {
  return (
    <div className="block lg:hidden max-w-8xl mx-auto mt-[10px] px-4">
      <div className="flex flex-col gap-2">
        <a href="https://syedshayan.com/real-estate-blogs.php" className="my-[14px] block w-full transition-all duration-300">
          <section className="mobile-zameeni-card relative mx-auto h-[170px] w-full max-w-[340px] overflow-hidden rounded-[22px] bg-white shadow-[0_5px_14px_rgba(0,0,0,0.10)]">
            <div className="absolute inset-x-0 top-0 h-[92px] bg-white"></div>
            {" "}
            {" "}
            <div className="absolute bottom-[8px] left-[12px] right-[12px] h-[72px] bg-[#022846] shadow-[0_2px_5px_rgba(0,0,0,0.12)]"></div>
            {" "}
            {" "}
            <div className="mobile-zameeni-person absolute left-[14px] top-[18px] z-30 h-[140px] w-[94px] overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.18)]">
              <img src="/Images/sir-shayan.jpeg" alt="Syed Shayan Founder of SyedShayan.com Think Tank" className="h-full w-full object-cover object-[center_35%]" />
            </div>
            {" "}
            {" "}
            <div className="mobile-zameeni-logo absolute right-[18px] top-[18px] z-20">
              <img src="/Images/zameen-haqaiq.png" alt="Zameeni Haqaiq" className="h-[66px] w-[190px] object-contain object-right" />
            </div>
            {" "}
            {" "}
            <div className="mobile-zameeni-copy absolute bottom-[20px] left-[120px] right-[28px] z-30 text-left font-['Poppins']">
              <p className="m-0 text-[12px] font-medium leading-[1.15] text-[#d8ae49]">
                {" Zameeni Haqaiq "}
              </p>
              {" "}
              <div className="mt-[3px] flex items-center justify-between">
                <p className="m-0 whitespace-nowrap text-[12px] font-medium leading-none text-white">
                  {" A Column by Syed Shayan "}
                </p>
                {" "}
                <span className="ml-2 shrink-0 text-[20px] font-light leading-none text-[#dfbf72]">
                  {" → "}
                </span>
              </div>
            </div>
          </section>
        </a>
      </div>
    </div>
  )
}
