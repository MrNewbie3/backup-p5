import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="w-full h-[358px] px-[100px] py-14 bg-neutral-50 flex-col justify-center items-center gap-8 inline-flex">
        <div className="flex-col justify-center items-center gap-6 flex">
          <Link to={`/`}>
            <div className="w-[190px] py-2.5 justify-center items-center gap-2 inline-flex">
              <svg
                width="31"
                height="24"
                viewBox="0 0 31 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.98368 0.806641L0.480469 8.30985L8.00975 15.8391L15.5129 23.3424L30.5192 8.33598L23.0161 0.832792L15.513 8.33592L7.98368 0.806641Z"
                  fill="#101010"
                />
              </svg>
              <div className="text-center text-stone-950 text-[32px] font-semibold font-['Manrope'] leading-[38.40px]">
                Cantogo
              </div>
            </div>
          </Link>
          <div className="flex-col justify-center items-center gap-3 flex">
            <div className="justify-start items-start gap-3 inline-flex">
              <div className="px-5 py-2 rounded-[50px] justify-center items-center gap-2.5 flex">
                <Link to={`/`}>
                  <div className="text-center text-zinc-600 text-lg font-medium font-['Manrope'] leading-[27px]">
                    Home
                  </div>
                </Link>

              </div>
              <div className="px-3 py-2 justify-center items-center gap-2.5 flex">
                <div className="text-center text-zinc-600 text-lg font-medium font-['Manrope'] leading-[27px]">Recomendation</div>
              </div>
              <div className="px-5 py-2 justify-center items-center gap-2.5 flex">
                <div className="text-center text-zinc-600 text-lg font-medium font-['Manrope'] leading-[27px]">Help</div>
              </div>
            </div>
            <div className="justify-start items-start gap-6 inline-flex">
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative">
                <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[304px] h-[0px] origin-top-center -rotate-180 border border-gray-200"></div>
        <div className="text-center text-zinc-600 text-sm font-medium font-['Manrope'] leading-[21px]"> © Copyright 2024, All Rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
