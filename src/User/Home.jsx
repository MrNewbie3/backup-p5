import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <nav className="w-full">
        <div className="w-[1440px] h-[106px] px-[100px] py-6 bg-white justify-between items-center inline-flex ">
          <div className="h-[58px] py-2.5 justify-start items-center gap-2 flex">
            <div className="w-9 h-9 p-[3px] flex-col justify-center items-center gap-[3px] inline-flex" />
            <div className="text-center text-stone-950 text-[32px] font-semibold font-['Manrope'] leading-[38.40px]">
              Cantogo
            </div>
          </div>
          <div className="h-[52px] justify-center items-center gap-6 flex">
            <div className="h-[52px] px-5 py-2 rounded-[50px] justify-center items-center gap-2.5 flex">
              <div className="text-center text-stone-950 text-2xl font-medium font-['Manrope'] leading-9">
                <Link to='/'>Home</Link>
              </div>
            </div>
            <div className="h-[52px] px-5 py-2 rounded-[50px] justify-center items-center gap-2.5 flex">

              <div className="text-center text-stone-950 text-2xl font-medium font-['Manrope'] leading-9">
                <Link to='/menu'>Menu</Link>
              </div>
            </div>
          </div>
          <div className="h-12 justify-end items-center gap-3 flex">
            <div className="p-3 justify-start items-start gap-2.5 flex">
              <div className="w-12 h-12 p-3 justify-start items-start gap-2.5 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <Link to='/cart-payment'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                        <path
                          id="Vector_4"
                          d="M9 8H21"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                  </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3 justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <Link to='/history'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="solar:history-2-bold">
                      <path
                        id="Vector"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.25 2C11.25 1.80109 11.329 1.61032 11.4697 1.46967C11.6103 1.32902 11.8011 1.25 12 1.25C17.937 1.25 22.75 6.063 22.75 12C22.75 17.937 17.937 22.75 12 22.75C6.063 22.75 1.25 17.937 1.25 12C1.25 11.8011 1.32902 11.6103 1.46967 11.4697C1.61032 11.329 1.80109 11.25 2 11.25C2.19891 11.25 2.38968 11.329 2.53033 11.4697C2.67098 11.6103 2.75 11.8011 2.75 12C2.75 13.8295 3.2925 15.6179 4.30891 17.139C5.32531 18.6602 6.76996 19.8458 8.46018 20.5459C10.1504 21.246 12.0103 21.4292 13.8046 21.0723C15.5989 20.7154 17.2471 19.8344 18.5407 18.5407C19.8344 17.2471 20.7154 15.5989 21.0723 13.8046C21.4292 12.0103 21.246 10.1504 20.5459 8.46018C19.8458 6.76996 18.6602 5.32531 17.139 4.30891C15.6179 3.2925 13.8295 2.75 12 2.75C11.8011 2.75 11.6103 2.67098 11.4697 2.53033C11.329 2.38968 11.25 2.19891 11.25 2ZM12 8.25C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9V12.25H16C16.1989 12.25 16.3897 12.329 16.5303 12.4697C16.671 12.6103 16.75 12.8011 16.75 13C16.75 13.1989 16.671 13.3897 16.5303 13.5303C16.3897 13.671 16.1989 13.75 16 13.75H12C11.8011 13.75 11.6103 13.671 11.4697 13.5303C11.329 13.3897 11.25 13.1989 11.25 13V9C11.25 8.80109 11.329 8.61032 11.4697 8.46967C11.6103 8.32902 11.8011 8.25 12 8.25ZM9.1 2.398C9.13549 2.48992 9.15252 2.58794 9.15012 2.68644C9.14772 2.78495 9.12593 2.88202 9.08599 2.9721C9.04606 3.06218 8.98877 3.14351 8.91739 3.21144C8.84601 3.27937 8.76195 3.33257 8.67 3.368C8.5286 3.4222 8.38855 3.47988 8.25 3.541C8.15939 3.58553 8.06073 3.6113 7.95992 3.61678C7.85911 3.62226 7.75823 3.60733 7.66333 3.57289C7.56843 3.53844 7.48146 3.48519 7.40763 3.41633C7.3338 3.34746 7.27464 3.2644 7.23369 3.17212C7.19273 3.07984 7.17083 2.98024 7.1693 2.8793C7.16776 2.77835 7.18662 2.67813 7.22475 2.58465C7.26288 2.49117 7.31949 2.40634 7.39118 2.33527C7.46288 2.26419 7.54819 2.20832 7.642 2.171C7.802 2.099 7.965 2.031 8.13 1.968C8.22192 1.93251 8.31994 1.91548 8.41844 1.91788C8.51695 1.92028 8.61402 1.94207 8.7041 1.98201C8.79418 2.02194 8.87551 2.07923 8.94344 2.15061C9.01137 2.22199 9.06457 2.30605 9.1 2.398ZM5.648 4.24C5.78506 4.38404 5.85931 4.57661 5.85443 4.77538C5.84956 4.97415 5.76595 5.16285 5.622 5.3C5.51239 5.4047 5.40536 5.51207 5.301 5.622C5.16375 5.76615 4.97486 5.84986 4.77588 5.85474C4.57691 5.85962 4.38415 5.78525 4.24 5.648C4.09585 5.51075 4.01214 5.32186 4.00726 5.12288C4.00238 4.92391 4.07675 4.73115 4.214 4.587C4.336 4.46 4.46 4.336 4.587 4.214C4.73104 4.07694 4.92361 4.00269 5.12238 4.00757C5.32115 4.01244 5.51085 4.09605 5.648 4.24ZM3.16 7.261C3.25003 7.30098 3.3313 7.3583 3.39917 7.42969C3.46705 7.50108 3.52019 7.58515 3.55557 7.67708C3.59095 7.76901 3.60787 7.86701 3.60537 7.96549C3.60287 8.06396 3.581 8.16098 3.541 8.251C3.48 8.389 3.421 8.529 3.367 8.67C3.29225 8.85109 3.14961 8.99575 2.96958 9.07303C2.78955 9.15031 2.58643 9.15408 2.40366 9.08353C2.22089 9.01299 2.07298 8.87372 1.99156 8.69553C1.91015 8.51733 1.90169 8.31435 1.968 8.13C2.031 7.965 2.098 7.803 2.17 7.642C2.20998 7.55197 2.2673 7.4707 2.33869 7.40283C2.41008 7.33495 2.49415 7.28181 2.58608 7.24643C2.67801 7.21105 2.77601 7.19413 2.87449 7.19663C2.97296 7.19913 3.06998 7.221 3.16 7.261Z"
                        fill="#101010"
                      />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-3 justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.16021 14.56C4.74021 16.18 4.74021 18.82 7.16021 20.43C9.91021 22.27 14.4202 22.27 17.1702 20.43C19.5902 18.81 19.5902 16.17 17.1702 14.56C14.4302 12.73 9.92021 12.73 7.16021 14.56Z"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
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
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7.30px] inline-flex">
                <div className="self-stretch h-[328.63px] bg-blue-800 rounded-xl flex-col justify-center items-center gap-[18.26px] flex">
                  <div className="opacity-10 w-[94px] h-[150px] relative">
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
                            <div className="left-[1.60px] top-[-0px] absolute text-white text-[4.67px] font-bold font-['Quicksand']">
                              we are
                            </div>
                            <div className="left-0 top-[4.09px] absolute text-white text-[7.59px] font-bold font-['Quicksand']">
                              Open
                            </div>
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
                  <div className="text-neutral-700 text-2xl font-medium font-['Manrope'] leading-9">
                    Kantin Bu Yun
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7.30px] inline-flex">
                <div className="self-stretch h-[328.63px] bg-blue-800 rounded-xl flex-col justify-center items-center gap-[18.26px] flex">
                  <div className="opacity-10 w-[94px] h-[150px] relative">
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
                            <div className="left-[1.60px] top-[-0px] absolute text-white text-[4.67px] font-bold font-['Quicksand']">
                              we are
                            </div>
                            <div className="left-0 top-[4.09px] absolute text-white text-[7.59px] font-bold font-['Quicksand']">
                              Open
                            </div>
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
                  <div className="text-neutral-700 text-2xl font-medium font-['Manrope'] leading-9">
                    Kantin YYK
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7.30px] inline-flex">
                <div className="self-stretch h-[328.63px] bg-blue-800 rounded-xl flex-col justify-center items-center gap-[18.26px] flex">
                  <div className="opacity-10 w-[94px] h-[150px] relative">
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
                            <div className="left-[1.60px] top-[-0px] absolute text-white text-[4.67px] font-bold font-['Quicksand']">
                              we are
                            </div>
                            <div className="left-0 top-[4.09px] absolute text-white text-[7.59px] font-bold font-['Quicksand']">
                              Open
                            </div>
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
                  <div className="text-zinc-600 text-2xl font-medium font-['Manrope'] leading-9">
                    Kantin Bu Marni
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7.30px] inline-flex">
                <div className="self-stretch h-[328.63px] bg-blue-800 rounded-xl flex-col justify-center items-center gap-[18.26px] flex">
                  <div className="opacity-10 w-[94px] h-[150px] relative">
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
                            <div className="left-[1.60px] top-[-0px] absolute text-white text-[4.67px] font-bold font-['Quicksand']">
                              we are
                            </div>
                            <div className="left-0 top-[4.09px] absolute text-white text-[7.59px] font-bold font-['Quicksand']">
                              Open
                            </div>
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
                  <div className="text-zinc-600 text-2xl font-medium font-['Manrope'] leading-9">
                    Kantin Mba RR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-stone-950 text-[32px] font-semibold font-['Manrope'] leading-[38.40px]">
              See all
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[651.93px] px-[100px] py-20 bg-white flex-col justify-center items-start gap-14 inline-flex">
        <div className="text-center text-black text-[40px] font-medium font-['Manrope'] leading-[48px]">
          Best Seller
        </div>
        <div className="w-[1240px] h-[387.93px] justify-start items-start gap-[21.91px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7.30px] inline-flex">
            <div className="self-stretch h-[328.63px] rounded-xl flex-col justify-end items-center gap-[18.26px] flex">
              <div className="w-[88.33px] h-[87.82px] relative">
                <div className="w-[45.68px] h-[13.30px] left-[21.32px] top-[8.28px] absolute"></div>
                <div className="w-[45.83px] h-[12.79px] left-[21.27px] top-[66.90px] absolute"></div>
                <div className="w-[64.48px] h-[17.98px] left-[12.45px] top-[27.27px] absolute"></div>
                <div className="w-[63.65px] h-[11.82px] left-[12.82px] top-[49.21px] absolute"></div>
              </div>
            </div>
            <div className="flex flex-col self-stretch px-3 py-2 justify-between items-center">
              <div className="w-6 h-6 p-[2.50px] justify-center items-center flex">
                <div className="w-[19px] h-[19px] relative">
                  <img
                    className="w-[9.50px] h-[19px] left-0 top-0 absolute"
                    src="https://s3-alpha-sig.figma.com/img/ccbf/6ed1/0c1e190eb7a08abedbe65df678b3edc1?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G38ioiwX~USncVtQimcLGHpnFP~L~jLkQE9dioM3fkV~A~gq4ODc2jfB97RLNCOR3P~AzSKhNZqzHI~cflVc8aS-r1a33dUxZT1~qi-iHCVmf0tC4znJGsZp5blD810anG85W4v-B-t73QcY5mwzpFvqOgA79H0sqQrGUkoyT6tFiOnchlmoU-QcpGetVk8uq5lpDxl4uS7FpJQn-KZd5Y6XHt43bGjBJXnYTCtjjnIo5K6sI~M19sBFi7gi752e-2tG~h7cI73WDsqUTlE~J1W-Q0mp-1Y5zrIHnPo~ZMLOyetoqwO9xC8ftVeIMFCIguctDEDdKUfBCqOYupWcJA__"
                  />
                </div>
              </div>
              <div className="text-neutral-700 text-2xl font-medium font-['Manrope'] leading-9">
                Nasi Pecel
              </div>
              <div className="justify-start items-start gap-1 flex">
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7.30px] inline-flex">
            <div className="self-stretch h-[328.63px] rounded-xl flex-col justify-end items-center gap-[18.26px] flex">
              <div className="w-[88.33px] h-[87.82px] relative">
                <div className="w-[45.68px] h-[13.30px] left-[21.32px] top-[8.28px] absolute"></div>
                <div className="w-[45.83px] h-[12.79px] left-[21.27px] top-[66.90px] absolute"></div>
                <div className="w-[64.48px] h-[17.98px] left-[12.45px] top-[27.27px] absolute"></div>
                <div className="w-[63.65px] h-[11.82px] left-[12.82px] top-[49.21px] absolute"></div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2 justify-between items-center inline-flex">
              <div className="text-neutral-700 text-2xl font-medium font-['Manrope'] leading-9">
                Es Mojito
              </div>
              <div className="justify-start items-start gap-1 flex">
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 p-[2.50px] justify-center items-center flex">
                  <div className="w-[19px] h-[19px] relative">
                    <img
                      className="w-[9.50px] h-[19px] left-0 top-0 absolute"
                      src="https://via.placeholder.com/10x19"
                    />
                    <img
                      className="w-[9.50px] h-[19px] left-[19px] top-0 absolute origin-top-left rotate-180 opacity-40"
                      src="https://via.placeholder.com/10x19"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7.30px] inline-flex">
            <div className="self-stretch h-[328.63px] rounded-xl flex-col justify-end items-center gap-[18.26px] flex">
              <div className="w-[88.33px] h-[87.82px] relative">
                <div className="w-[45.68px] h-[13.30px] left-[21.32px] top-[8.28px] absolute"></div>
                <div className="w-[45.83px] h-[12.79px] left-[21.27px] top-[66.90px] absolute"></div>
                <div className="w-[64.48px] h-[17.98px] left-[12.45px] top-[27.27px] absolute"></div>
                <div className="w-[63.65px] h-[11.82px] left-[12.82px] top-[49.21px] absolute"></div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2 justify-between items-center inline-flex">
              <div className="text-neutral-700 text-2xl font-medium font-['Manrope'] leading-9">
                Nasi Ayam Katsu
              </div>
              <div className="justify-start items-start gap-1 flex">
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 p-[2.50px] justify-center items-center flex">
                  <div className="w-[19px] h-[19px] relative">
                    <img
                      className="w-[9.50px] h-[19px] left-0 top-0 absolute"
                      src="https://via.placeholder.com/10x19"
                    />
                    <img
                      className="w-[9.50px] h-[19px] left-[19px] top-0 absolute origin-top-left rotate-180 opacity-40"
                      src="https://via.placeholder.com/10x19"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[358px] px-[100px] py-14 bg-neutral-50 flex-col justify-center items-center gap-8 inline-flex">
        <div className="flex-col justify-center items-center gap-6 flex">
          <div className="w-[190px] py-2.5 justify-center items-center gap-2 inline-flex">
            <div className="w-9 h-9 p-[3px] flex-col justify-center items-center gap-[3px] inline-flex" />
            <div className="text-center text-stone-950 text-[32px] font-semibold font-['Manrope'] leading-[38.40px]">
              Cantogo
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-3 flex">
            <div className="justify-start items-start gap-3 inline-flex">
              <div className="px-5 py-2 rounded-[50px] justify-center items-center gap-2.5 flex">
                <div className="text-center text-zinc-600 text-lg font-medium font-['Manrope'] leading-[27px]">
                  Home
                </div>
              </div>
              <div className="px-3 py-2 justify-center items-center gap-2.5 flex">
                <div className="text-center text-zinc-600 text-lg font-medium font-['Manrope'] leading-[27px]">
                  Recomendation
                </div>
              </div>
              <div className="px-5 py-2 justify-center items-center gap-2.5 flex">
                <div className="text-center text-zinc-600 text-lg font-medium font-['Manrope'] leading-[27px]">
                  Help
                </div>
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
        <div className="text-center text-zinc-600 text-sm font-medium font-['Manrope'] leading-[21px]">
          {" "}
          © Copyright 2024, All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Home;