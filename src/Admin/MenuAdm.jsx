import React from "react";

export default function Menu() {
  const data = [1, 2, 3, 4, 54, 6, 7, 8, 9, 9, 76, 5, 3];
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[1196px] h-[1138px] flex-col justify-start items-center gap-11 inline-flex">
        <div className="w-[1196px] px-10 py-6 bg-white border-b border-gray-200 justify-between items-center inline-flex">
          <div className="text-neutral-950 text-2xl font-medium font-['Manrope'] leading-9">Menu</div>
          <div />
        </div>
        <div className="w-[1116px] h-[1002px] p-5 bg-white rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
              <div className="text-black text-2xl font-medium font-['Manrope'] leading-9">Menu List</div>
              <div className="text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">Insightful Performance Summary Overview</div>
            </div>
            <div className="justify-center items-center gap-3 flex">
              <div className="w-[321px] self-stretch px-[18px] py-2.5 bg-neutral-100 rounded-[50px] border border-gray-200 justify-end items-center gap-2.5 flex">
                <div className="w-4 h-4 justify-center items-center flex">
                  <div className="w-4 h-4 relative"></div>
                </div>
              </div>
              <div className="px-[18px] py-2.5 bg-neutral-100 rounded-[50px] border border-gray-200 justify-end items-center gap-2.5 flex">
                <button className="text-black text-xs font-medium font-['Manrope'] leading-[18px]">Add Menu</button>
                <div className="w-4 h-4 justify-center items-center flex">
                  <div className="w-4 h-4 relative"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[878px] rounded-xl border border-gray-200 flex-col justify-start items-start flex">
            <div className="self-stretch bg-neutral-100 rounded-tl-xl rounded-tr-xl justify-between items-center inline-flex">
              <div className="p-4 justify-center items-center gap-2.5 flex">
                <div className="rounded-md justify-start items-start gap-2 flex">
                  <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 left-0 top-0 absolute bg-white rounded-md border border-stone-300" />
                    <div className="w-2.5 h-2.5 left-[5px] top-[5px] absolute bg-sky-800 rounded-sm" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[52px] px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">Nama Menu</div>
              </div>
              <div className="grow shrink basis-0 h-[52px] px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">Gambar</div>
              </div>
              <div className="grow shrink basis-0 h-[52px] px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">Deskripsi</div>
              </div>
              <div className="grow shrink basis-0 h-[52px] px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">Kategori</div>
              </div>
              <div className="grow shrink basis-0 h-[52px] px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">Harga</div>
              </div>
              <div className="h-[52px] px-4 py-3.5 justify-start items-center gap-2.5 flex">
                <div className="text-zinc-600 text-base font-medium font-['Manrope'] leading-normal">Action</div>
              </div>
            </div>
            {data.map((data, idx) => (
              <div key={idx} className="self-stretch bg-white justify-between items-center inline-flex">
                <div className="p-4 justify-center items-center gap-2.5 flex">
                  <div className="rounded-md justify-start items-start gap-2 flex">
                    <div className="w-5 h-5 relative">
                      <div className="w-5 h-5 left-0 top-0 absolute bg-white rounded-md border border-stone-300" />
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[49px] px-4 py-3.5 justify-start items-center gap-2.5 flex">
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">Nama Menu</div>
                </div>
                <div className="grow shrink basis-0 h-[118px] px-4 py-3.5 justify-start items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 self-stretch bg-zinc-300 rounded" />
                </div>
                <div className="grow shrink basis-0 h-[118px] px-4 py-3.5 justify-start items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 h-[49px] py-3.5 justify-start items-center gap-2.5 flex">
                    <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">Ini Deskripsi</div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[49px] px-4 py-3.5 justify-between items-center flex">
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">Makanan Berat</div>
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative"></div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[49px] px-4 py-3.5 justify-start items-center gap-2.5 flex">
                  <div className="text-stone-950 text-sm font-medium font-['Manrope'] leading-[21px]">Harga</div>
                </div>
                <div className="px-4 py-3.5 justify-center items-center gap-2.5 flex">
                  <div className="justify-center  items-center  gap-3 flex text-white">
                    <div className="p-2 bg-red-600 rounded">
                      <div className="w-4 h-4 text-center ">-</div>
                    </div>
                    <div className="p-2 bg-blue-800 rounded">
                      <div className="w-4 h-4 text-center">+</div>
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
