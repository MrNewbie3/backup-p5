import React from "react";

export default function HistoryAdm() {
  return (
    <div>
      <div className="w-[1196px] h-[1145px] flex-col justify-start items-center gap-[52px] inline-flex">
        <div className="w-[1196px] px-10 py-6 bg-white border-b border-gray-200 justify-start items-center inline-flex">
          <div className="text-neutral-950 text-2xl font-medium font-['Manrope'] leading-9">
            History
          </div>
        </div>
        <div className="h-[1009px] p-5 bg-white rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
              <div className="text-black text-2xl font-medium font-['Manrope'] leading-9">
                History Transaction
              </div>
              <div className="text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">
                Insightful Performance Summary Overview
              </div>
            </div>
            <div className="w-[283px] self-stretch justify-start items-center gap-2.5 flex" />
            <div className="w-[213px] self-stretch justify-start items-center gap-2.5 flex">
              <div className="px-3 py-2.5 bg-white rounded-xl border border-gray-200 justify-start items-center gap-1 flex">
                <div className="justify-start items-start gap-2 flex">
                  <div className="px-1.5 py-1 bg-neutral-50 rounded border border-blue-200 justify-center items-center gap-1 flex">
                    <div className="text-sky-800 text-xs font-medium font-['Manrope'] leading-[18px]">
                      Sort by
                    </div>
                    <div className="w-3 h-3 justify-center items-center flex">
                      <div className="w-3 h-3 justify-center items-center inline-flex">
                        <div className="w-3 h-3 relative"></div>
                      </div>
                    </div>
                  </div>
                  <div className="px-1.5 py-1 rounded border border-gray-200 justify-center items-center gap-1 flex">
                    <div className="text-zinc-600 text-xs font-medium font-['Manrope'] leading-[18px]">
                      30 Days
                    </div>
                  </div>
                  <div className="px-1.5 py-1 bg-white rounded border border-gray-200 justify-center items-center gap-1 flex">
                    <div className="text-zinc-600 text-xs font-medium font-['Manrope'] leading-[18px]">
                      7 Days
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[885px] bg-white rounded-md border border-gray-200 flex-col justify-start items-start flex">
            <div className="self-stretch bg-neutral-50 rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">
                  Name
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">
                  Date
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">
                  Category
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">
                  Total Transaksi
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">
                  Status
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-md justify-end items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Erigo end year sales
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Berat
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    Complete
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-50 rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Berat
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    Complete
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Promo 12.12 80%
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Berat
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    Pending
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-50 rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Berat
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    Complete
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Ringan
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    Complete
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-50 rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Ringan
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    Complete
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Ringan
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    Complete
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-50 rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Minuman
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    Complete
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Minuman
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    Complete
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-50 rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Minuman
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    On Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Minuman
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    On Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-50 rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Minuman
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    On Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Minuman
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    On Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-50 rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Berat
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    On Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Berat
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    On Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-50 rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Berat
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    On Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-50 rounded-md justify-start items-start inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Raju - Soft opening{" "}
                </div>
              </div>
              <div className="w-[120px] self-stretch px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  31/02/23
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Makanan Berat
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  145.000
                </div>
              </div>
              <div className="w-[250px] self-stretch px-4 py-3.5 flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                    On Progress
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
