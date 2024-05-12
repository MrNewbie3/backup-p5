import React from "react";

export default function History() {
  const data = [1, 2, 3, 4, 54, 6, 7, 8, 9, 9, 76, 5, 3];
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1440px] h-[1090px] px-[100px] py-20 bg-white flex-col justify-start items-start gap-14 inline-flex">
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="text-center text-stone-950 text-5xl font-medium font-['Manrope'] leading-[57.60px]">History Transaction</div>
        </div>
        <div className="self-stretch h-[816px] flex-col justify-start items-start gap-6 flex">
          <div className="text-center text-stone-950 text-[40px] font-medium font-['Manrope'] leading-[48px]">Today</div>
          <div className="self-stretch h-64 flex-wrap justify-start items-start gap-6 flex">
            {data.map((data, idx) => (
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 max-w-lg h-[184px] justify-start items-center gap-6 flex">
                  <img className="basis-0 h-[184px] rounded-xl" src="https://via.placeholder.com/173x184" />
                  <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                        <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">Kantin Bu Yun</div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1 flex">
                        <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">Nasi Pecel Madiun</div>
                        <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">Nasi + sayur + tempe</div>
                      </div>
                      <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">IDR 15.000</div>
                    </div>
                    <div className="justify-start items-end gap-[5px] inline-flex">
                      <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="w-4 h-4 justify-center items-center inline-flex">
                          <div className="w-4 h-4 relative"></div>
                        </div>
                      </div>
                      <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">1</div>
                      </div>
                      <div className="w-5 h-5 p-2.5 bg-neutral-100 rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="w-4 h-4 justify-center items-center inline-flex">
                          <div className="w-4 h-4 relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
