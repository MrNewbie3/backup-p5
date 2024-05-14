import React, { useEffect, useState } from "react";
import { menuById, updateCart } from "../service/api.service";
import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const MenuDetail = () => {
  const { user } = useAuth();
  const id = useLocation().pathname.split("/menu-detail/")[1];
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const getData = await menuById(id);
      setData(getData);
    })();
  }, []);
  const [order, setOrder] = useState({});
  const itemCount = Object.values(order).reduce((total, item) => total + item.qty, 0);
  const cartNotEmpty = Object.keys(order).length > 0 && itemCount > 0;

  const handleChangeOrder = async (name, id, action, price) => {
    setOrder((prevState) => {
      const updatedOrder = { ...prevState };
      const currentQty = updatedOrder[id] ? updatedOrder[id].qty : 0;

      if (action === "increment") {
        updatedOrder[id] = { name, qty: currentQty + 1, price };
      } else if (action === "decrement" && currentQty > 0) {
        updatedOrder[id] = { name, qty: currentQty - 1, price };

        if (currentQty - 1 === 0) {
          delete updatedOrder[id]; // Remove the item from the order if quantity becomes 0
        }
      }

      return updatedOrder;
    });
    await updateCart(order, user.data.user_id);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {data == null ? (
        <div className="w-full h-[50vh] flex justify-center items-center">loading...</div>
      ) : (
        <div className="w-[1440px] h-fit px-[100px] py-20 bg-white flex-col justify-start items-center gap-14 inline-flex">
          <div className="self-stretch h-fit bg-blue-800 rounded-xl flex-col justify-end items-center gap-[18.26px] flex">
            <div className="self-stretch p-10 justify-start items-end gap-[18.26px] inline-flex">
              <div className="text-white text-[64px] font-medium font-['Manrope'] leading-[76.80px]">Kantin: {data.canteen_number}</div>
            </div>
          </div>
          <div className="self-stretch h-fit flex-col justify-start items-center gap-8 flex">
            {data.Menu.map((data, idx) => (
              <div key={idx} className="self-stretch justify-center items-start gap-8 inline-flex">
                <div className="grow shrink basis-0 h-[387.93px] flex-row justify-start items-start gap-2 flex ">
                  <img className="w-[399px] h-[329px] rounded-xl" src={`https://source.unsplash.com/random/2000x2000?${data.slug}&sig=${idx}`} alt={`Food ${idx}`} />
                  <div className="self-stretch px-3 py-2 justify-center items-start flex flex-col">
                    <div className="text-neutral-700 text-2xl font-medium font-['Manrope'] leading-9">{data.name}</div>
                    <div className="text-neutral-700 text-2xl font-medium font-['Manrope'] leading-9">{data.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</div>
                    <div className="text-neutral-700 text-2xl font-medium font-['Manrope'] leading-9">Stock: {data.stock_amount}</div>
                    <div className="justify-start items-end gap-[5px] inline-flex">
                      <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <button onClick={() => handleChangeOrder(data.slug, data.menu_id, "decrement", data.price)} className="w-4 h-4 flex justify-center items-center">
                          -
                        </button>
                      </div>
                      <div className="w-5 h-5 p-2.5 bg-white rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-stone-950 text-sm font-semibold font-['Manrope'] leading-[21px]">{order[data.menu_id]?.qty || 0}</div>
                      </div>
                      <div className="w-5 h-5 p-2.5 bg-neutral-100 rounded border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <button onClick={() => handleChangeOrder(data.slug, data.menu_id, "increment", data.price)} className="w-4 h-4 flex justify-center items-center">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {cartNotEmpty && (
        <div className="fixed bottom-10 right-10 bg-white shadow-lg rounded-full w-12 h-12 flex justify-center items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="vuesax/linear/shopping-cart">
              <g id="shopping-cart">
                <path
                  id="Vector"
                  d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path id="Vector_4" d="M9 8H21" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </g>
          </svg>
          <div className="bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center absolute -top-1 -right-1">{itemCount}</div>
        </div>
      )}
    </div>
  );
};

export default MenuDetail;
