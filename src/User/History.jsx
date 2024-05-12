import React from "react";

export default function History() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1440px] h-[1090px] px-[100px] py-20 bg-white flex-col justify-start items-start gap-14 inline-flex">
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="text-center text-stone-950 text-5xl font-medium font-['Manrope'] leading-[57.60px]">
            History Transaction
          </div>
        </div>
        <div className="self-stretch h-[816px] flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-64 flex-col justify-start items-start gap-6 flex">
            <div className="text-center text-stone-950 text-[40px] font-medium font-['Manrope'] leading-[48px]">
              Today
            </div>
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 h-[184px] justify-start items-center gap-6 flex">
                <img
                  className="basis-0 h-[184px] rounded-xl"
                  src="https://via.placeholder.com/173x184"
                />
                <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Kantin Bu Yun
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">
                        Nasi Pecel Madiun
                      </div>
                      <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Nasi + sayur + tempe
                      </div>
                    </div>
                    <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">
                      IDR 15.000
                    </div>
                  </div>
                  <div className="justify-start items-end gap-[5px] inline-flex">
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        1
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-neutral-100 rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="grow shrink basis-0 h-[184px] justify-start items-center gap-6 flex">
                <div className="grow shrink basis-0 h-[184px] bg-zinc-300 rounded-xl" />
                <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Kantin Bu Eka
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">
                        Es Jeruk Peras
                      </div>
                      <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Jeruk Peras + Air + Es
                      </div>
                    </div>
                    <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">
                      IDR 7.000
                    </div>
                  </div>
                  <div className="justify-start items-end gap-[5px] inline-flex">
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        2
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="grow shrink basis-0 h-[184px] justify-start items-center gap-6 flex">
                <div className="grow shrink basis-0 h-[184px] bg-zinc-300 rounded-xl" />
                <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Kantin Pak Munif
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">
                        Gorengan
                      </div>
                      <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Sayuran Goreng
                      </div>
                    </div>
                    <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">
                      IDR 3.000
                    </div>
                  </div>
                  <div className="justify-start items-end gap-[5px] inline-flex">
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        1
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="self-stretch h-64 flex-col justify-start items-start gap-6 flex">
            <div className="text-center text-zinc-600 text-[40px] font-medium font-['Manrope'] leading-[48px]">
              Yesterday
            </div>
            <div className="self-stretch opacity-60 justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 h-[184px] justify-start items-center gap-6 flex">
                <img
                  className="grow shrink basis-0 h-[184px] rounded-xl"
                  src="https://via.placeholder.com/173x184"
                />
                <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Kantin Bu Yun
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">
                        Nasi Pecel Madiun
                      </div>
                      <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Nasi + sayur + tempe
                      </div>
                    </div>
                    <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">
                      IDR 15.000
                    </div>
                  </div>
                  <div className="justify-start items-end gap-[5px] inline-flex">
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        1
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-neutral-100 rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[184px] justify-start items-center gap-6 flex">
                <div className="grow shrink basis-0 h-[184px] bg-zinc-300 rounded-xl" />
                <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Kantin Bu Eka
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">
                        Es Jeruk Peras
                      </div>
                      <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Jeruk Peras + Air + Es
                      </div>
                    </div>
                    <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">
                      IDR 7.000
                    </div>
                  </div>
                  <div className="justify-start items-end gap-[5px] inline-flex">
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        2
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[184px] justify-start items-center gap-6 flex">
                <div className="grow shrink basis-0 h-[184px] bg-zinc-300 rounded-xl" />
                <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Kantin Pak Munif
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">
                        Gorengan
                      </div>
                      <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Sayuran Goreng
                      </div>
                    </div>
                    <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">
                      IDR 3.000
                    </div>
                  </div>
                  <div className="justify-start items-end gap-[5px] inline-flex">
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        1
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-64 flex-col justify-start items-start gap-6 flex">
            <div className="text-center text-zinc-600 text-[40px] font-medium font-['Manrope'] leading-[48px]">
              12 June 2024
            </div>
            <div className="self-stretch opacity-60 justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 h-[184px] justify-start items-center gap-6 flex">
                <img
                  className="grow shrink basis-0 h-[184px] rounded-xl"
                  src="https://via.placeholder.com/173x184"
                />
                <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Kantin Bu Yun
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">
                        Nasi Pecel Madiun
                      </div>
                      <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Nasi + sayur + tempe
                      </div>
                    </div>
                    <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">
                      IDR 15.000
                    </div>
                  </div>
                  <div className="justify-start items-end gap-[5px] inline-flex">
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        1
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-neutral-100 rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[184px] justify-start items-center gap-6 flex">
                <div className="grow shrink basis-0 h-[184px] bg-zinc-300 rounded-xl" />
                <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Kantin Bu Eka
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">
                        Es Jeruk Peras
                      </div>
                      <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Jeruk Peras + Air + Es
                      </div>
                    </div>
                    <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">
                      IDR 7.000
                    </div>
                  </div>
                  <div className="justify-start items-end gap-[5px] inline-flex">
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        2
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[184px] justify-start items-center gap-6 flex">
                <div className="grow shrink basis-0 h-[184px] bg-zinc-300 rounded-xl" />
                <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Kantin Pak Munif
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">
                        Gorengan
                      </div>
                      <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">
                        Sayuran Goreng
                      </div>
                    </div>
                    <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">
                      IDR 3.000
                    </div>
                  </div>
                  <div className="justify-start items-end gap-[5px] inline-flex">
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        1
                      </div>
                    </div>
                    <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-4 h-4 justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
