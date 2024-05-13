import React from 'react'

export default function Sidebar() {
  return (
    <div className="">
      <div className="w-[244px] h-[1024px] bg-white border-r border-gray-200 flex-col justify-start items-center inline-flex">
        <div className="self-stretch py-6 justify-between items-center inline-flex">
          <div className="h-[46px] py-[5px] justify-start items-center gap-2 flex">
            <div className="w-9 h-9 p-[3px] flex-col justify-center items-center gap-[3px] inline-flex" />
            <div className="text-center text-stone-950 text-2xl font-medium font-['Manrope'] leading-9">
              Cantogo
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 px-5 flex-col justify-between items-center flex">
          <div className="self-stretch h-[220px] px-px pt-[52px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-[168px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch p-3 rounded justify-start items-center gap-3 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Menu
                </div>
              </div>
              <div className="self-stretch p-3 rounded justify-start items-center gap-3 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="text-zinc-500 text-sm font-medium font-['Manrope'] leading-[21px]">
                  History
                </div>
              </div>
              <div className="self-stretch p-3 rounded justify-start items-center gap-3 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative"></div>
                </div>
                <div className="text-zinc-500 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Payment
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-48 pb-8 flex-col justify-start items-start gap-[50px] flex">
            <div className="w-[204px] h-px relative opacity-30">
              <div className="w-[204px] h-px left-0 top-0 absolute bg-gray-200" />
            </div>
            <div className="self-stretch h-[109px] flex-col justify-start items-start gap-[5px] flex">
              <div className="self-stretch p-3 justify-start items-start gap-3 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 justify-center items-center inline-flex">
                    <div className="w-6 h-6 relative"></div>
                  </div>
                </div>
                <div className="text-zinc-600 text-sm font-medium font-['Manrope'] leading-[21px]">
                  Settings
                </div>
              </div>
              <div className="px-2 py-3 justify-start items-center gap-2.5 inline-flex">
                <div className="w-8 h-8 p-3 bg-stone-950 rounded-[35px]" />
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-stone-950 text-xs font-medium font-['Switzer']">
                    Kantin Bu Yun
                  </div>
                  <div className="text-zinc-600 text-[10px] font-normal font-['Switzer']">
                    KantinBuYun.Mts6@gmail.id
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
