import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="w-full flex flex-col items-center">
    <div className="w-[1440px] flex flex-wrap h-[106px] px-[100px] py-6 bg-white justify-between items-center ">
      <div className="h-[58px] py-2.5 justify-start items-center gap-2 flex">
        {/* <div className="w-9 h-9 p-[3px] flex-col justify-center items-center gap-[3px] inline-flex" /> */}
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
      <div className="h-[52px] justify-center items-center gap-6 flex">
        <div className="h-[52px] px-5 py-2 rounded-[50px] justify-center items-center gap-2.5 flex">
          <div className="text-center text-stone-950 text-2xl font-medium font-['Manrope'] leading-9">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="h-[52px] px-5 py-2 rounded-[50px] justify-center items-center gap-2.5 flex">
          <div className="text-center text-stone-950 text-2xl font-medium font-['Manrope'] leading-9">
            <Link to="/menu">Menu</Link>
          </div>
        </div>
      </div>
      <div className="h-12 justify-end items-center gap-3 flex">
        <div className="p-3 justify-start items-start gap-2.5 flex">
          <div className="w-12 h-12 p-3 justify-start items-start gap-2.5 inline-flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <Link to="/cart-payment">
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
            <Link to="/history">
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
  );
}

export default Navbar;
