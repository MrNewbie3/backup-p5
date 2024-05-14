import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { canteen } from "../service/api.service";

function Menu() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const getData = await canteen();
      setData(getData);
    })();
  }, []);

  return (
    <div className="w-full h-fit flex flex-col items-center">
      {data == null ? (
        <div className="h-[70vh] w-full flex justify-center items-center">loading...</div>
      ) : (
        <div className="w-[1440px] h-fit px-[100px] py-20 bg-white flex-col justify-start items-center gap-14 inline-flex">
          <div className="self-stretch h-[222px] px-2.5 py-10 rounded-xl flex-col justify-center items-center gap-2.5 flex">
            <div className="flex-col justify-center items-center gap-3 flex">
              <div className="text-center text-stone-950 text-5xl font-medium font-['Manrope'] leading-[57.60px]">Mau Makan di Kantin Mana?</div>
              <div className="w-[774px] text-center text-zinc-600 text-2xl font-medium font-['Manrope'] leading-9">Pesanan dianter langsung ke meja kamu, dijamin fresh, sehat, dan bikin semangat belajar balik naik lagi.</div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="w-[1200px] h-fit items-start gap-6 flex flex-wrap justify-center">
              {data.map((data, idx) => (
                <Link to={`../menu-detail/${data.canteen_id}`} key={idx} className="min-w-[14vw] shrink basis-0 flex-col justify-start items-start gap-[7.30px] inline-flex">
                  <div className="self-stretch h-[328.63px] bg-black rounded-xl flex-col justify-center items-center gap-[18.26px] flex">
                    <div className="opacity-100 w-full h-full relative">
                      <img className="absolute opacity-70 w-full rounded-xl h-full object-cover" src={"https://source.unsplash.com/random/2000x2000?cafetaria&sig=" + idx} alt="" />
                      <div className="w-[42.01px] h-[8.45px] left-[26px] top-[19.15px] absolute"></div>
                      <div className="w-[62px] h-[7.56px] left-[16px] top-[15.72px] absolute"></div>
                      <div className="w-[94px] h-[23.35px] left-0 top-[27.60px] absolute">
                        <div className="w-[94px] h-[18.74px] left-0 top-0 absolute"></div>
                        <div className="w-[94px] h-[4.61px] left-0 top-[18.74px] absolute"></div>
                      </div>
                      <div className="w-[47px] h-[89.11px] left-[23.50px] top-[60.89px] absolute">
                        <div className="w-[32.46px] h-[22.41px] left-[7.27px] top-[2.23px] absolute">
                          <div className="w-[24.89px] h-[22.41px] left-[3.79px] top-0 absolute">
                            <div className="w-5 h-[13.09px] left-[1.83px] top-[8.37px] absolute">
                              <div className=" top-10 absolute text-white text-sm font-bold font-['Quicksand']">we are</div>
                              <div className="top-20 absolute uppercase  text-white text-lg tracking-[10px] font-bold font-['Quicksand']">Open</div>
                            </div>
                          </div>
                          <div className="w-[32.46px] h-[7.75px] left-0 top-[10.53px] absolute">
                            <div className="w-[2.94px] h-[7.75px] left-[29.52px] top-0 absolute"></div>
                            <div className="w-[2.94px] h-[7.75px] left-0 top-0 absolute"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[76.15px] h-[80.48px] left-[10.11px] top-[63.51px] absolute"></div>
                    </div>
                  </div>
                  <div className="self-stretch px-[10.95px] py-[7.30px] justify-start items-center gap-[18.26px] inline-flex">
                    <div className="text-neutral-700 text-2xl font-medium font-['Manrope'] leading-9">Kantin: {data.canteen_number}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
