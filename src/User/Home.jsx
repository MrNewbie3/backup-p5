import { Link } from "react-router-dom";
import "flowbite";

function Home() {
  const kantin = [1, 2, 3];
  return (
    <div className="Home">
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="h-[58px] py-2.5 justify-start items-center gap-2 flex">
           
            <svg
              className="w-9 h-9 p-[3px] flex-col justify-center items-center gap-[3px] inline-flex"
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.48368 0.732117L0.980469 8.23533L8.50975 15.7646L16.0129 23.2678L31.0192 8.26146L23.5161 0.758268L16.013 8.2614L8.48368 0.732117Z"
                fill="#101010"
                alt="Cantogo Logo"
              />
            </svg>

            <div className="text-center text-stone-950 text-[32px] font-semibold font-['Manrope'] leading-[38.40px]">
              Cantogo
            </div>
          </div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
            
            {/* Dropdown menu */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  className="text-center text-zinc-500 hover:text-stone-950 active:text-stone-950 current text-2xl font-medium font-['Manrope'] leading-9"
                  aria-current="page"
                >
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-center text-zinc-500 hover:text-stone-950 active:text-stone-950 text-2xl font-medium font-['Manrope'] leading-9"
                >
                  <Link to="/menu">Menu</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="w-full h-auto px-4 pt-16 pb-8 md:px-8 lg:px-12 xl:px-16 bg-white flex flex-col justify-center items-center gap-8 sm:gap-14">
        <div className="h-[222px] px-2.5 py-10 rounded-xl flex flex-col justify-center items-center gap-2.5">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="text-center">
              <span className="text-stone-950 text-5xl font-medium font-['Manrope'] leading-[57.60px]">
                Hai{" "}
              </span>
              <span className="text-stone-950 text-5xl font-medium font-['Manrope'] underline leading-[57.60px]">
                Adit
              </span>
              <span className="text-stone-950 text-5xl font-medium font-['Manrope'] leading-[57.60px]">
                , Mau Makan Apa Hari Ini?{" "}
              </span>
            </div>
            <div className="w-[774px] text-center text-zinc-600 text-2xl font-medium font-['Manrope'] leading-9">
              Males antri makan? Pesanan dianter langsung ke meja kamu, dijamin
              fresh, sehat, dan bikin semangat kerja balik naik lagi.
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-8 md:gap-[30px]">
          <img
            className="w-[414px] h-[425px] rounded-3xl border border-gray-200 object-cover"
            src="https://s3-alpha-sig.figma.com/img/00f2/d8d9/904a4eecb300726499ef70ef0481a4bf?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Om3A5S-LqxH3BiHjn8OrSaiftgKyy3Ex~bI1-nYUCcuSgAHJxKQ5T2BXjkDhRmcVgKCKaIoJaH86iezOk8N~f4b~bN4VRO4aEvigElyc-PACQ49dvTh9~QpE0UtjYhUyvfkif8OQ3suhGZnQ0ZM4RW9z4tWX~YM76Tie2hPTdDD2NCNiAS4Lrap9CawT5ToN0ZonbKCOfdqCdwd7htr55O-d0H~LZgNymBv7U517l2X3Z8oW1gCD2XyOFqPxaV0-YCas6fInTXQOUw~8-0WsADqdMm-CetL6Ja4mUwemiEEDKFQ1EE7v-PNqvLykWT0YIxHJtWkitguMgqjs3BW13A__"
            alt="Placeholder Image"
          />
          <img
            className="w-[527px] h-[425px] rounded-3xl border border-gray-200 object-cover"
            src="https://s3-alpha-sig.figma.com/img/bf92/c689/e29d06ca6cea909f333522649962394d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmJ8LZAHx9dtUOXEQrlLOk1J2bSBeHpH1MFAkeCmzavABOBgBc6yzQZqCEPo8B43h0QMMfb78gd6E9y73HcWSYHxIs6jCgJWvbGqT6fhL1AGPIdDmDaHhZAQbw5FJwZp0xrVj8fDJRpa79aavIvfGVc8LZOQwBFpmPat2Rg9wX9wrpwmTm2IIrqY8EYgHaWJg9X9oqIQK9-Nk4C9O~LH2dNoeVgAVmg0Cb3QWIwldv1J76dEnD0brnih7UWE3Ucl~B2xOMGWL1jjZtvYQHkZzMOPDSE61fOOrPn6VgDj~wooZwFMaBSv1OLewbREcJbnwMII7RTXMdTeXbvaWFrFWg__"
            alt="Placeholder Image"
          />
          <div className="w-[221px] h-[425px] flex flex-col justify-start items-start gap-8">
            <img
              className="w-full h-[239px] rounded-3xl border border-gray-200 object-cover"
              src="https://s3-alpha-sig.figma.com/img/eec8/a4eb/ce17d56ee44383acfcb856e192b76273?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XbT229u1eENAgaSw2Xh~HZPnQTXIJPXfSBXXc5Z4LHXaV6JH6aWPJzBv6~Xp3gnjy8-0fxUh6E0cYHnvfguO1g-Mm6uZyfte9iqHgwCebEk62-Ik0BtMe-6wxEQgSRU6dttFSAfYjTtku83lgzjgl3xyTToBxYtmoiosZB37X8bZLi52OiH4d6m91TggcKitySVODsbSTPogGnLJJeB~pO298QaZoGfwNhDWtytveIQshfLVgd0bTKC2yLlIjD5I3I2CSU8THJCoUxyT-0fak33PoWw0af2zgHvIBbFvAuFD-~ZMOVZWtiRLdTDtVGzelQiojcso5rXWMLl~xbZoBA__"
              alt="Placeholder Image"
            />
            <img
              className="w-full h-[156px] rounded-3xl border border-gray-200 object-cover bg-red-700"
              src="https://s3-alpha-sig.figma.com/img/c737/db43/ef0a8751b3000999572619d8fa4f9fa3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N6oNSjXyJSgJYscynG8OpvzEY8SIq0-rz3AxUnjeDmqjV7U0UprDJMnxfslJbmbE56Y7MLWIfv4D5atrLnCzD2-vwdvFMRzvPhSDnuSZgdvq3Hzo2gCiilIAQVB8SFMRH78WdKTzOzWpYuP276ufm6VvXsc23RE8pBgnXllKu2omcn~vMUuZJOhVHvKbEDCt2-QdHZhx6r1XKFnc~nhRbJ8EBro4k3ZL2YP4aBZGxyIq7CE2l2LzOmn5YAQDqW4KmXEXX67pqdVFU~k9CMkliYGtTNrfQNQ~IkDgAFXTW7vgY3B1jHO2xJzpStG6UvqUsFY-he3uMAdLHYT-VL3idg__"
              alt="Placeholder Image"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12 bg-white flex flex-col items-center gap-6 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
        <div className="text-center text-black text-[40px] font-medium font-['Manrope'] leading-[48px]">
          Categories
        </div>
        <div className="flex flex-wrap justify-center gap-12 pt-5 sm:justify-start">
          <div className="w-36 sm:w-44 md:w-48 flex flex-col items-center gap-5">
            <img
              className="w-[139px] h-[139px] rounded-full object-cover object-right"
              src="https://s3-alpha-sig.figma.com/img/93fc/44f4/cc20b85ac153e04f020a3c7d0244104f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoOKG07n5MOMU--cX2BCIO-9mtZpohbFWjX5ftjeoSnU9za8qbejI0wIspzgq8IT4ev~jK3zGotpc8-4rbZOMmYSNmmtEXVt0JKXOEx8LDMF6iLJB9JTfmj4vNs3-jzb4aA25p4KG9~Ka~GYpDA41KS2hv~Tvpczjoa-Z1AcX8pHl8qrY~KDSbFi~RqMd6~ANGStK8ZtlaHz0cBnFjHk0Nxv-N-27qC2wccXcSB2vdCxgQ~ztcTSJFqVhpBobeeY~CRHODgl1aOfQfMYMiEpCz63zv~e7HHQnGi6A~iux8Yk2Qeh4yVLL97EIKU5Hw6f6shWkbpiO2LFp2imQfxpYg__"
            />
            <div className="text-stone-950 text-2xl font-medium font-['Manrope'] leading-9">
              Makanan Berat
            </div>
          </div>
          <div className="w-36 sm:w-44 md:w-48 flex flex-col items-center gap-5">
            <img
              className="w-[139px] h-[139px] rounded-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/cb6d/23e8/536beee37df622d727d0b3fbca5cb619?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J3XsbC4u6cB1wzLFnsVm2cXZjKz1ViEX6o9RRzmVSLQPpXsYoPVPoz-tH5A6ACeaZHD0H4C~ivEiylSGw3n5yCVLLgLvziEnVIoVSeVXGMzcUNQxrCp-oQr~YpmVHnbtfVHkD23rAltmkVvzwgXsrApiyX~X2vU508tdfplU-uymkSzqbMwegwKUeJI-grKYMyTNiHfuxwDg9WpIelWNPTm4dx6AbOB82MCmP2pO7zLZooP7xJsZ7m1EXH6ylH~ugwLZLH0t35UtFWemf9aOyXThPqt6DUXaHkBBaNQdhJJJQVLZAmItIcJdTov1j65EJ1B5KymKFRD6c5HI1KDY2w__"
            />
            <div className="text-stone-950 text-2xl font-medium font-['Manrope'] leading-9">
              Makanan Ringan
            </div>
          </div>
          <div className="w-36 sm:w-44 md:w-48 flex flex-col items-center gap-5">
            <img
              className="w-[139px] h-[139px] rounded-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/b020/7d9a/b7902c25d2c0c86d9dc2930f89271cdb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dSQOzznN9vlYXImZhs2JWSIGUYPy5NVn~2ujq9Zmbq97THW9bFgEFemQfhwm3o31HA8E2dBW-Pf8LDdIkosuq1cvrJJYx3B3f8ZhnahQBRfMdrl30gw1-04dq11yV8p5wkYXR3AuKOp6YVhweDltcFCOlmQzUQpyVWbvi5-CP9rgCWGxzPSyN2cfP5~G-3epfwwoWjKxRyZb~rtb43M1n~voTGDIXk9SxCON7yXCz3lqhCWJetLjsTShPljBoQarKSe3TgKxjiRGIhQbBfq8fKmypZNn1rOFJyYQiG6rntA0ux1Xz7yeG2sxWbsnZ3gp~WAIeFaru~76giIKUIO8Eg__"
            />
            <div className="text-stone-950 text-2xl font-medium font-['Manrope'] leading-9">
              Minuman
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[776.54px] px-[100px] py-20 bg-white flex-col justify-start items-center gap-14 inline-flex">
        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-black text-[40px] font-medium font-['Manrope'] leading-[48px]">
            Food Tenant
          </div>
        </div>
        <div className="self-stretch h-[512.54px] flex-col justify-start items-center gap-12 flex">
          <div className="w-[1240px] p-5 bg-neutral-100 rounded-xl justify-start items-start gap-10 inline-flex">
            <div className="grow shrink basis-0 h-[386.54px] justify-start items-start gap-[21.91px] flex">
              {kantin.map((data, idx) => (
                <div
                  key={idx}
                  className="grow shrink basis-0 flex-col justify-start items-start gap-[7.30px] inline-flex"
                >
                  <div className="self-stretch h-[328.63px] bg-blue-800 rounded-xl flex-col justify-center items-center gap-[18.26px] flex">
                    <img
                      className="w-[94px] h-[150.50px] opacity-10"
                      src="https://s3-alpha-sig.figma.com/img/93f8/fad8/1de6f4484f352436af44842500c93d50?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W~CdZtZBwSzqZ8wmcpGcogz1Bbkq6JQh5AaKTxuSpwN~wBDvbJ16J3KruERsQgxaZVC0oygZiD7UHOmdWCbsWw~~nANYLya1tslfLG6rFd~pxoHW2BwlBb0ibL~n3jSx37l1lyLxEt5jCfLWIlLrEcXDMQCK4sQRzQAogDr8z8UcnStc-5LP3RkyPr-s3tlqKmPteYoRIirFRamHbqH~PZ3XPrPeCF6taKXViOeIPCy4soHCZoPlXs-c6cvxZZsTiViMX~wJvs7DQHR7ID8ceoxyqbFhM-vUWl5lfaIzpubDdQljgVZOT0DPvjlh-RRlmamGc8mN6jwPWJXF4ZsBgA__"
                    />
                  </div>
                  <div className="self-stretch px-[10.95px] py-[7.30px] justify-start items-center gap-[18.26px] inline-flex">
                    <div className="text-neutral-700 text-2xl font-medium font-['Manrope'] leading-9">
                      Kantin Bu Yun
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-stone-950 text-[32px] font-semibold font-['Manrope'] leading-[38.40px]">
              <Link to="/menu">See all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
