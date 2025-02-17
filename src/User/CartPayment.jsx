import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { getCartUser } from "../service/api.service";

export default function CartPayment() {
  const { user } = useAuth();
  const [cartItem, setCartItem] = useState(null);
  useEffect(() => {
    (async () => {
      const getData = await getCartUser(user.data.user_id);
      setCartItem(getData);
      console.log(getData);
    })();
  }, []);
  let subtotalSum;
  if (cartItem != null) {
    subtotalSum = cartItem.cart_items.reduce((total, item) => total + item.subtotal, 0);
  }

  return (
    <div className="flex flex-col items-center">
      {cartItem == null ? (
        <div className="flex justify-center items-center h-[50vh]">loading...</div>
      ) : (
        <div className="w-[1440px] h-[1232px] px-[100px] py-20 bg-white justify-center items-start gap-14 inline-flex">
          <div className="w-[600px] p-10 bg-white rounded-xl shadow border border-gray-200 flex-col justify-center items-center gap-14 inline-flex">
            <div className="flex-col justify-center items-center gap-3 flex">
              <div className="text-center text-stone-950 text-[40px] font-medium font-['Manrope'] leading-[48px]">Shopping Cart</div>
              <div className="text-center text-zinc-600 text-2xl font-medium font-['Manrope'] leading-9">A total 4 pieces</div>
            </div>
            <div className="self-stretch h-[600px] flex-col justify-start items-start gap-6 flex">
              {cartItem.cart_items.map((data, idx) => (
                <div className="self-stretch justify-start items-center gap-6 inline-flex">
                  <img className="grow shrink basis-0 h-[184px] rounded-xl" src={`https://source.unsplash.com/random/2000x2000?${data.menu.slug}&sig=${idx}`} />
                  <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="px-2 py-1 bg-violet-100 rounded-[20px] border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                        <div className="text-center text-blue-950 text-xs font-normal font-['Manrope'] leading-[18px]">Kantin {data.menu?.canteen?.canteen_number}</div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1 flex">
                        <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">{data.menu?.name}</div>
                        {/* <div className="text-center text-zinc-600 text-xs font-normal font-['Manrope'] leading-[18px]">Nasi + sayur + tempe</div> */}
                      </div>
                      <div className="text-center text-black text-sm font-medium font-['Manrope'] leading-[21px]">{data.price_per_item.toLocaleString("id-ID", { style: "currency", currency: "IDR" })} / item</div>
                    </div>
                    <div className="justify-start items-end gap-[5px] inline-flex">
                      <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="w-4 h-4 justify-center items-center inline-flex">
                          <div className="w-4 h-4 relative"></div>
                        </div>
                      </div>
                      <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">{data.quantity}</div>
                      </div>
                      <div className="w-5 h-5 p-2.5 bg-neutral-100 rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="w-4 h-4 justify-center items-center inline-flex">
                          <div className="w-4 h-4 relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="self-stretch px-8 py-4 bg-neutral-50 rounded-xl border border-gray-200 justify-between items-center inline-flex">
              <div className="text-center text-zinc-600 text-2xl font-medium font-['Manrope'] leading-9">Total Payment</div>
              <div className="justify-start items-start gap-3 flex">
                <div className="text-center text-stone-950 text-lg font-medium font-['Manrope'] leading-[27px]">{subtotalSum.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</div>
              </div>
            </div>
            <div className="self-stretch px-[74px] py-3 bg-blue-800 rounded-[40px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-2xl font-medium font-['Manrope'] leading-9">Pay Now</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
