import cn from "clsx";

export type ClientServerProps = {
  clientActive?: boolean;
  serverActive?: boolean;
  className?: string;
};

export const ClientServer: React.FC<ClientServerProps> = ({
  clientActive = false,
  serverActive = false,
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 497 245.8"
      id="ClientServer2"
      className={cn(
        "mt-[7rem]",
        clientActive && "client-active",
        serverActive && "server-active",
        className
      )}
      {...props}
    >
      <defs>
        <linearGradient
          id="Unbenannter_Verlauf_47"
          x1="300.2"
          y1="121.3"
          x2="300.2"
          y2="102.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".3" stopColor="#435bf8" stopOpacity="0" />
          <stop offset="1" stopColor="#435bf8" stopOpacity=".2" />
        </linearGradient>
        <linearGradient
          id="Unbenannter_Verlauf_47-2"
          x1="324.6"
          y1="154.2"
          x2="324.6"
          y2="135.8"
          xlinkHref="#Unbenannter_Verlauf_47"
        />
        <linearGradient
          id="Unbenannter_Verlauf_47-3"
          x1="289.2"
          y1="114.3"
          x2="289.2"
          y2="95.9"
          xlinkHref="#Unbenannter_Verlauf_47"
        />
        <linearGradient
          id="Unbenannter_Verlauf_47-4"
          x1="394.3"
          y1="184.4"
          x2="394.3"
          y2="166"
          xlinkHref="#Unbenannter_Verlauf_47"
        />
        <linearGradient
          id="Unbenannter_Verlauf_47-5"
          x1="471.2"
          y1="135.8"
          x2="471.2"
          y2="117.4"
          xlinkHref="#Unbenannter_Verlauf_47"
        />
        <linearGradient
          id="Unbenannter_Verlauf_47-6"
          x1="476.3"
          y1="107"
          x2="476.3"
          y2="88.6"
          xlinkHref="#Unbenannter_Verlauf_47"
        />
        <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
          <feOffset dx="8" dy="16" />
          <feGaussianBlur result="blur" stdDeviation="1" />
          <feFlood floodColor="#000" floodOpacity=".05" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="drop-shadow-2" filterUnits="userSpaceOnUse">
          <feOffset dx="8" dy="16" />
          <feGaussianBlur result="blur-2" stdDeviation="1" />
          <feFlood floodColor="#000" floodOpacity="0" />
          <feComposite in2="blur-2" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="outer-glow-3" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur-3" stdDeviation="6" />
          <feFlood floodColor="#ffb921" floodOpacity="1" />
          <feComposite in2="blur-3" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="drop-shadow-4" filterUnits="userSpaceOnUse">
          <feOffset dx="8" dy="16" />
          <feGaussianBlur result="blur-4" stdDeviation="1" />
          <feFlood floodColor="#000" floodOpacity="0" />
          <feComposite in2="blur-4" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="outer-glow-5" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur-5" stdDeviation="6" />
          <feFlood floodColor="#7083fa" floodOpacity="1" />
          <feComposite in2="blur-5" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="outer-glow-6" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur-6" stdDeviation="6" />
          <feFlood floodColor="#7083fa" floodOpacity="1" />
          <feComposite in2="blur-6" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="Unbenannter_Verlauf_37"
          x1="146.9"
          y1="-1862.6"
          x2="191.8"
          y2="-1784.9"
          gradientTransform="translate(0 -1724.3) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffb921" stopOpacity="0" />
          <stop offset=".2" stopColor="#ffb921" stopOpacity="0" />
          <stop offset=".5" stopColor="#ffb921" />
          <stop offset=".8" stopColor="#ffb921" />
          <stop offset="1" stopColor="#ffb921" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="Unbenannter_Verlauf_5"
          x1="383.1"
          y1="-1852.6"
          x2="428"
          y2="-1774.9"
          gradientTransform="translate(0 -1724.3) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7083fa" stopOpacity="0" />
          <stop offset=".1" stopColor="#7083fa" stopOpacity="0" />
          <stop offset=".2" stopColor="#7083fa" />
          <stop offset=".3" stopColor="#6b7ef9" />
          <stop offset=".5" stopColor="#435bf8" />
          <stop offset=".7" stopColor="#6b7ef9" />
          <stop offset=".9" stopColor="#7083fa" />
          <stop offset="1" stopColor="#7083fa" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="Unbenannter_Verlauf_11"
          x1="380"
          y1="139.2"
          x2="448.9"
          y2="139.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#666771" />
          <stop offset="1" stopColor="#666771" stopOpacity=".6" />
        </linearGradient>
        <filter id="outer-glow-7" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur-7" stdDeviation="2" />
          <feFlood floodColor="#ff91c9" floodOpacity=".9" />
          <feComposite in2="blur-7" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="Unbenannter_Verlauf_11-2"
          y1="107.3"
          y2="107.3"
          xlinkHref="#Unbenannter_Verlauf_11"
        />
        <filter id="outer-glow-8" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur-8" stdDeviation="5" />
          <feFlood floodColor="#293dd2" floodOpacity=".9" />
          <feComposite in2="blur-8" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="outer-glow-9" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur-9" stdDeviation="2" />
          <feFlood floodColor="#e8b118" floodOpacity=".9" />
          <feComposite in2="blur-9" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="Unbenannter_Verlauf_11-3"
          y1="75.3"
          y2="75.3"
          xlinkHref="#Unbenannter_Verlauf_11"
        />
        <linearGradient
          id="Unbenannter_Verlauf_44"
          x1="36.1"
          y1="122.2"
          x2="188.9"
          y2="122.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#000" />
          <stop offset="1" stopColor="#000" stopOpacity=".8" />
        </linearGradient>
        <filter id="drop-shadow-10" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="1" />
          <feGaussianBlur result="blur-10" stdDeviation="0" />
          <feFlood floodColor="#bbc1cd" floodOpacity=".6" />
          <feComposite in2="blur-10" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Illustration">
        <g id="boardInactiveClient">
          <path
            d="m1.7,127.3v9.5c0,4,2.1,7.6,5.5,9.6l96.1,55.5c9.6,5.6,21.5,5.6,31.1,0l96.7-55.9c3-1.7,4.9-5,4.9-8.5v-10.3,1.2c-.4,4-2.5,7.7-5.9,10l-.9.6c-.1,0-.2.1-.3.2l-94.5,54.6c-9.6,5.6-21.5,5.6-31.1,0L8.6,139.3l-1.3-.9c-3.3-2.1-5.3-5.6-5.5-9.5v-1.6Z"
            opacity="0"
          />
          <g opacity="0.2">
            <path
              id="Vector"
              d="M117.312 197.4C112.113 197.4 106.914 196 102.414 193.4L7.22422 138.5C3.22465 136.2 0.724915 132 0.724915 127.3C0.724915 122.6 3.12466 118.5 7.12423 116.1L102.114 60.8999C106.614 58.2999 111.613 56.8999 116.813 56.8999C122.012 56.8999 127.011 58.2999 131.411 60.7999L227.101 116.1C231.2 118.4 233.6 122.7 233.6 127.4C233.6 132.1 231.2 136.3 227.101 138.6L132.111 193.4C127.611 196 122.412 197.4 117.212 197.4H117.312Z"
              fill="#1F1F21"
            />
            <path
              id="Vector_2"
              d="M116.913 57.6997C121.912 57.6997 126.811 58.9997 131.211 61.4997L226.901 116.8C230.7 119 233 123 233 127.4C233 131.8 230.7 135.8 226.901 138L132.011 192.8C127.611 195.3 122.612 196.7 117.512 196.7C112.413 196.7 107.414 195.4 103.014 192.8L7.62419 137.8C3.82459 135.6 1.52484 131.7 1.52484 127.3C1.52484 122.9 3.82459 119 7.62419 116.8L102.614 61.5997C106.914 59.0997 111.913 57.6997 116.913 57.6997ZM116.913 56.1997C111.713 56.1997 106.514 57.5997 101.814 60.2997L6.82427 115.5C-2.27476 120.8 -2.27476 133.9 6.82427 139.2L102.014 194.2C106.714 196.9 112.013 198.3 117.313 198.3C122.612 198.3 127.811 196.9 132.611 194.2L227.501 139.4C236.7 134.1 236.7 120.9 227.501 115.6L131.811 60.2997C127.211 57.5997 122.012 56.2997 116.813 56.2997L116.913 56.1997Z"
              fill="black"
            />
          </g>
        </g>
        <g
          id="boardActiveClient"
          className={cn("board", clientActive && "opacity-100")}
        >
          <path
            d="m.2,127.3v9.5c0,4,2.1,7.6,5.5,9.6l96.1,55.5c9.6,5.6,21.5,5.6,31.1,0l96.7-55.9c3-1.7,4.9-5,4.9-8.5v-10.3s0,1.2,0,1.2c-.3,4-2.4,7.7-5.8,10l-.9.6c-.1,0-.2.1-.3.2l-94.5,54.6c-9.6,5.6-21.5,5.6-31.1,0L7.1,139.3l-1.3-.9c-3.3-2.1-5.3-5.6-5.5-9.5v-1.6Z"
            fill="#ffb921"
            opacity=".2"
          />
          <path
            d="m117.3,197.5c-5.2,0-10.4-1.4-14.9-4L7.2,138.5c-4-2.3-6.5-6.5-6.5-11.2,0-4.7,2.4-8.8,6.4-11.2l95-55.2c4.5-2.6,9.5-4,14.7-4s10.2,1.4,14.6,3.9l95.7,55.3c4.1,2.3,6.5,6.6,6.5,11.3,0,4.7-2.4,8.9-6.5,11.2l-94.9,54.8c-4.5,2.6-9.7,4-14.9,4,0,0,0,0,0,0Z"
            fill="#ffb921"
          />
          <path
            d="m116.9,57.7c5,0,9.9,1.3,14.3,3.8l95.7,55.3c3.8,2.2,6.1,6.2,6.1,10.6s-2.3,8.4-6.1,10.6l-94.9,54.8c-4.4,2.5-9.4,3.9-14.5,3.9s-10.1-1.3-14.5-3.9L7.6,137.8c-3.8-2.2-6.1-6.1-6.1-10.5s2.3-8.3,6.1-10.5l95-55.2c4.3-2.5,9.3-3.9,14.3-3.9m0-1.5c-5.2,0-10.4,1.4-15.1,4.1L6.8,115.5c-9.1,5.3-9.1,18.4,0,23.7l95.2,55c4.7,2.7,10,4.1,15.3,4.1s10.5-1.4,15.3-4.1l94.9-54.8c9.2-5.3,9.2-18.5,0-23.8l-95.7-55.3c-4.6-2.7-9.8-4-15-4h0Z"
            fill="#e8ab27"
          />
        </g>
        <g id="boardInactiveServer">
          <path
            d="m262.7,127.3v9.5c0,4,2.1,7.6,5.5,9.6l96.1,55.5c9.6,5.6,21.5,5.6,31.1,0l96.7-55.9c3-1.7,4.9-5,4.9-8.5v-10.3,1.2c-.4,4-2.5,7.7-5.9,10l-.9.6c-.1,0-.2.1-.3.2l-94.5,54.6c-9.6,5.6-21.5,5.6-31.1,0l-94.7-54.7-1.3-.9c-3.3-2.1-5.3-5.6-5.5-9.5v-1.6Z"
            opacity="0"
          />
          <g opacity="0.2">
            <path
              id="Vector_6"
              d="M379.503 197.4C374.316 197.4 369.129 196 364.64 193.4L269.682 138.4C265.692 136.1 263.199 131.9 263.199 127.2C263.199 122.5 265.593 118.4 269.582 116L364.341 60.7998C368.83 58.1998 373.817 56.7998 379.004 56.7998C384.191 56.7998 389.178 58.1998 393.567 60.6998L489.024 116C493.114 118.3 495.507 122.6 495.507 127.3C495.507 132 493.114 136.2 489.024 138.5L394.265 193.3C389.777 195.9 384.59 197.3 379.403 197.3L379.503 197.4Z"
              fill="#1F1F21"
            />
            <path
              id="Vector_7"
              d="M379.104 57.6997C384.091 57.6997 388.979 58.9997 393.367 61.4997L488.824 116.8C492.615 119 494.909 123 494.909 127.4C494.909 131.8 492.615 135.8 488.824 138L394.165 192.8C389.777 195.3 384.789 196.7 379.702 196.7C374.615 196.7 369.628 195.4 365.239 192.8L270.281 137.8C266.49 135.6 264.196 131.7 264.196 127.3C264.196 122.9 266.49 119 270.281 116.8L365.039 61.5997C369.329 59.0997 374.316 57.6997 379.303 57.6997M379.303 56.1997C374.116 56.1997 368.93 57.5997 364.242 60.2997L269.483 115.5C260.406 120.8 260.406 133.9 269.483 139.2L364.441 194.2C369.129 196.9 374.416 198.3 379.702 198.3C384.989 198.3 390.175 196.9 394.963 194.2L489.622 139.4C498.799 134.1 498.799 120.9 489.622 115.6L394.165 60.2997C389.577 57.5997 384.39 56.2997 379.203 56.2997L379.303 56.1997Z"
              fill="black"
            />
          </g>
        </g>
        <g
          id="boardActiveServer"
          className={cn("board", serverActive && "opacity-100")}
        >
          <path
            d="m262.1,127.3v9.5c0,4,2.1,7.6,5.5,9.6l96.1,55.5c9.6,5.6,21.5,5.6,31.1,0l96.7-55.9c3-1.7,4.9-5,4.9-8.5v-10.3s0,1.2,0,1.2c-.3,4-2.4,7.7-5.8,10l-.9.6c-.1,0-.2.1-.3.2l-94.5,54.6c-9.6,5.6-21.5,5.6-31.1,0l-94.7-54.7-1.3-.9c-3.3-2.1-5.3-5.6-5.5-9.5v-1.6Z"
            fill="#7083fa"
            opacity=".2"
          />
          <path
            d="m379.2,197.5c-5.2,0-10.4-1.4-14.9-4l-95.2-55c-4-2.3-6.5-6.5-6.5-11.2,0-4.7,2.4-8.8,6.4-11.2l95-55.2c4.5-2.6,9.5-4,14.7-4s10.2,1.4,14.6,3.9l95.7,55.3c4.1,2.3,6.5,6.6,6.5,11.3s-2.4,8.9-6.5,11.2l-95,54.8c-4.5,2.6-9.7,4-14.9,4,0,0,0,0,0,0Z"
            fill="#7083fa"
          />
          <path
            d="m378.8,57.7c5,0,9.9,1.3,14.3,3.8l95.7,55.3c3.8,2.2,6.1,6.2,6.1,10.6,0,4.4-2.3,8.4-6.1,10.6l-94.9,54.8c-4.4,2.5-9.4,3.9-14.5,3.9s-10.1-1.3-14.5-3.9l-95.2-55c-3.8-2.2-6.1-6.1-6.1-10.5s2.3-8.3,6.1-10.5l95-55.2c4.3-2.5,9.3-3.9,14.3-3.9m0-1.5c-5.2,0-10.4,1.4-15.1,4.1l-95,55.2c-9.1,5.3-9.1,18.4,0,23.7l95.2,55c4.7,2.7,10,4.1,15.3,4.1s10.5-1.4,15.3-4.1l94.9-54.8c9.2-5.3,9.2-18.5,0-23.8l-95.7-55.3c-4.6-2.7-9.8-4-15-4h0Z"
            fill="#435bf8"
          />
        </g>
        <g id="particles">
          <line
            id="particle"
            x1="300.2"
            y1="119.8"
            x2="300.2"
            y2="104.4"
            fill="none"
            stroke="url(#Unbenannter_Verlauf_47)"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <line
            id="particle-2"
            x1="324.6"
            y1="152.7"
            x2="324.6"
            y2="137.3"
            fill="none"
            stroke="url(#Unbenannter_Verlauf_47-2)"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <line
            id="particle-3"
            x1="289.2"
            y1="112.8"
            x2="289.2"
            y2="97.4"
            fill="none"
            stroke="url(#Unbenannter_Verlauf_47-3)"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <line
            id="particle-4"
            x1="394.3"
            y1="182.9"
            x2="394.3"
            y2="167.5"
            fill="none"
            stroke="url(#Unbenannter_Verlauf_47-4)"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <line
            id="particle-5"
            x1="471.2"
            y1="134.3"
            x2="471.2"
            y2="118.9"
            fill="none"
            stroke="url(#Unbenannter_Verlauf_47-5)"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <line
            id="particle-6"
            x1="476.3"
            y1="105.5"
            x2="476.3"
            y2="90.1"
            fill="none"
            stroke="url(#Unbenannter_Verlauf_47-6)"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </g>
        <g id="connection">
          <path
            id="connection-line"
            d="m336.5,156.1l-29.4,16.9c-5.3,3.1-5.3,10.8,0,13.9l10.5,6c5.3,3.1,5.3,10.8,0,13.9l-28.2,16.3c-5,2.9-11.1,2.9-16,0l-109.2-63"
            fill="none"
            filter="url(#drop-shadow-4)"
            stroke="#435bf8"
            strokeLinejoin="round"
            strokeWidth="2"
            className="filter-connection"
          />
          <path
            id="data"
            d="m336.5,156.1l-29.4,16.9c-5.3,3.1-5.3,10.8,0,13.9l10.5,6c5.3,3.1,5.3,10.8,0,13.9l-28.2,16.3c-5,2.9-11.1,2.9-16,0l-109.2-63"
            fill="none"
            filter="url(#outer-glow-5)"
            stroke="#435bf8"
            strokeMiterlimit="10"
            className="data filter-connection"
          />
          <circle
            id="dotClient"
            cx="166.8"
            cy="161.5"
            r="3.5"
            fill="#435bf8"
            className="dot filter-connection"
          />
          <circle
            id="dotServer"
            cx="333.9"
            cy="157.6"
            r="3.5"
            fill="#435bf8"
            className="dot filter-connection"
          />
        </g>
        <g id="envelope">
          <g id="back">
            <polygon
              points="137.5 48.1 137.5 80 172 99.9 172 68 137.5 48.1"
              fill="#8a8b96"
            />
          </g>
          <g id="letterSealed">
            <polygon
              points="137.5 48.1 137.6 79.8 172.1 99.7 172.1 67.9 137.5 48.1"
              fill="#fff"
            />
            <line
              x1="144.3"
              y1="68"
              x2="165"
              y2="79.9"
              fill="#fdfdfd"
              stroke="#8a8b96"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              x1="144.3"
              y1="61"
              x2="165"
              y2="72.9"
              fill="#fdfdfd"
              stroke="#8a8b96"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              d="m153.6,82.4s-1.1.9-1.6.6c-.8-.4-.5-1.9-1.8-2.5-1.8-.8-2,1.8-3.6,1-2.5-1.2,1.3-7.3,3-6.5s-3.7,6.8-6.2,4.3.7-2.8.7-2.8"
              fill="none"
              stroke="#4f5057"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            />
            <line
              x1="145.4"
              y1="75.4"
              x2="144.6"
              y2="76.2"
              fill="none"
              stroke="#4f5057"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            />
            <path
              d="m162.5,82.4l.7.2c.7.2,1.3.8,1.3,1.4v.7c0,0,.1.2.2.3l.5.6c.5.6.4,1.3,0,1.7l-.5.4c0,0-.1.1-.1.2v.7c-.1.6-.7,1-1.4,1h-.7c-.1,0-.2,0-.3,0l-.6.3c-.5.3-1.3.2-1.9-.3l-.6-.5c0,0-.2-.1-.3-.2l-.7-.2c-.7-.2-1.3-.8-1.3-1.4v-.7c0,0-.1-.2-.2-.3l-.5-.6c-.5-.6-.4-1.3,0-1.7l.5-.4c0,0,.1-.1.1-.2v-.7c.1-.6.7-1,1.4-1h.7c.1,0,.2,0,.3,0l.6-.3c.5-.3,1.3-.2,1.9.3l.6.5c0,0,.2.1.3.2Z"
              fill="#eca20f"
            />
            <ellipse
              cx="160.7"
              cy="85.7"
              rx="2.1"
              ry="2.5"
              transform="translate(1.3 173.8) rotate(-57)"
              fill="#ffcc5c"
            />
          </g>
          <g id="letter">
            <polygon
              points="137.4 48.2 137.5 80 172 99.9 172 68 137.4 48.2"
              fill="#fff"
            />
            <line
              x1="144.2"
              y1="68.2"
              x2="164.9"
              y2="80.1"
              fill="#fdfdfd"
              stroke="#4f5057"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              x1="144.2"
              y1="61.2"
              x2="164.9"
              y2="73.1"
              fill="#fdfdfd"
              stroke="#4f5057"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </g>
          <polygon
            id="frontOpen"
            points="172 68 151.3 80 137.5 48.1 137.5 80 172 99.9 172 68"
            fill="#666771"
          />
          <polygon
            id="topFront"
            points="172 68 154.8 32.8 137.5 48.1 172 68"
            fill="#b4b4bd"
          />
        </g>
        <g id="ellipticalSolidClient">
          <path
            id="yAxis"
            d="m132.4,27.3c-.2-.3-.4-.4-.6-.3l-2.5,1.4c-.2,0-.2.4,0,.6.2.3.4.4.6.3l2.2-1.3,2.2,3.8c.2.3.4.4.6.3.2,0,.2-.4,0-.6l-2.5-4.3Zm-.7,0v1.5l.8.4v-1.5l-.8-.4Zm0,4.6v3l.8.5v-3l-.8-.4Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.5v-3l-.8-.4Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.4v-3l-.8-.5Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.4v-3l-.8-.5Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.4v-3l-.8-.5Zm0,6.1v3l.8.4v-3l-.8-.4Zm0,6.1v3l.8.5v-3l-.8-.4Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.4v-3l-.8-.4Zm0,6.1v3l.8.4v-3l-.8-.5Zm0,6.1v1.5l.8.4v-1.5l-.8-.5Z"
            fill="#b4b4bd"
          />
          <path
            id="xAxis"
            d="m187.4,107.7c.2,0,.2-.4,0-.6l-2.5-4.3c-.2-.3-.4-.4-.6-.3-.2,0-.2.4,0,.6l2.2,3.8-2.2,1.3c-.2,0-.2.4,0,.6.2.3.4.4.6.3l2.5-1.4Zm-.3-.9l-1.3-.8v.9l1.3.8v-.9Zm-3.9-2.3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-1.3-.8v.9l1.3.8v-.9Z"
            fill="#b4b4bd"
          />
          <path
            id="curve"
            d="m187,161.4c-12-32.2-22.8-55.8-28.3-60.8-4.7-5-9.7-3.9-17.4-7.7-5-3.2-9.1-9.6-9.1-17.3s5.4-9,9.1-6.8c7.2,4.4,10.9,11,17.4,12.3,6.3.9,16.7-9.5,28.3-27.5"
            fill="none"
            stroke="url(#Unbenannter_Verlauf_37)"
            strokeWidth="2"
          />
          <g id="stepP2">
            <line
              id="dashP2"
              x1="156.6"
              y1="81"
              x2="156.6"
              y2="96.2"
              fill="none"
              stroke="#ffe0a9"
            />
            <path
              id="lineP2"
              d="m129.6,59.5l79.1,63.2"
              fill="none"
              stroke="#ffc85a"
            />
          </g>
          <g id="stepP3">
            <path
              id="lineP3"
              d="m129.9,36.1l78.3,185.7"
              fill="none"
              stroke="#ffc85a"
            />
          </g>
          <g id="stepP4">
            <path
              id="lineP4"
              d="m208.2,18.3l-78.5,65.7"
              fill="none"
              stroke="#ffc85a"
            />
            <line
              id="dashP4"
              x1="133.3"
              y1="74.3"
              x2="133.3"
              y2="79.3"
              fill="none"
              stroke="#ffe0a9"
            />
          </g>
          <g id="stepP5">
            <path
              id="lineP5"
              d="m208,75.5l-87.1-5.4"
              fill="none"
              stroke="#ffc85a"
            />
            <line
              id="dashP5"
              x1="172.7"
              y1="74"
              x2="172.7"
              y2="122"
              fill="none"
              stroke="#ffe0a9"
            />
          </g>
          <g id="stepP6">
            <path
              id="lineP6"
              d="m207.9,193.3L129.7,42.5"
              fill="none"
              stroke="#ffc85a"
            />
            <line
              id="dashP6"
              x1="163.6"
              y1="82.8"
              x2="163.6"
              y2="105.8"
              fill="none"
              stroke="#ffe0a9"
            />
          </g>
          <g id="stepP7">
            <path
              id="lineP7"
              d="m208.6,102.3l-82.1-39.5"
              fill="none"
              stroke="#ffc85a"
            />
            <line
              id="dashP7"
              x1="138"
              y1="68.6"
              x2="138"
              y2="87.4"
              fill="none"
              stroke="#ffe0a9"
            />
          </g>
          <ellipse
            id="P"
            cx="144.6"
            cy="71"
            rx="1.9"
            ry="3.4"
            transform="translate(-16.1 81.8) rotate(-30)"
            fill="none"
            stroke="#e29c10"
          />
          <ellipse
            id="P2"
            cx="156.6"
            cy="99.2"
            rx="1.9"
            ry="3.4"
            transform="translate(-28.6 91.6) rotate(-30)"
            fill="none"
            stroke="#e29c10"
          />
          <ellipse
            id="P4"
            cx="132.6"
            cy="71.2"
            rx="1.9"
            ry="3.4"
            transform="translate(-17.8 75.8) rotate(-30)"
            fill="none"
            stroke="#e29c10"
          />
          <ellipse
            id="P5"
            cx="172.3"
            cy="124.8"
            rx="1.9"
            ry="3.4"
            transform="translate(-39.3 102.9) rotate(-30)"
            fill="none"
            stroke="#e29c10"
          />
          <ellipse
            id="P6"
            cx="163.3"
            cy="80.1"
            rx="1.9"
            ry="3.4"
            transform="translate(-18.2 92.4) rotate(-30)"
            fill="none"
            stroke="#e29c10"
          />
          <ellipse
            id="P7"
            cx="137.9"
            cy="90.1"
            rx="1.9"
            ry="3.4"
            transform="translate(-26.6 81) rotate(-30)"
            fill="none"
            stroke="#e29c10"
          />
        </g>
        <g id="ellipticalSolidServer">
          <path
            id="yAxis-2"
            d="m368.7,17.4c-.2-.3-.4-.4-.6-.3l-2.5,1.4c-.2,0-.2.4,0,.6.2.3.4.4.6.3l2.2-1.3,2.2,3.8c.2.3.4.4.6.3.2,0,.2-.4,0-.6l-2.5-4.3Zm-.7,0v1.5l.8.4v-1.5l-.8-.4Zm0,4.6v3l.8.5v-3l-.8-.4Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.5v-3l-.8-.4Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.4v-3l-.8-.5Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.4v-3l-.8-.5Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.4v-3l-.8-.5Zm0,6.1v3l.8.4v-3l-.8-.4Zm0,6.1v3l.8.5v-3l-.8-.4Zm0,6.1v3l.8.5v-3l-.8-.5Zm0,6.1v3l.8.4v-3l-.8-.4Zm0,6.1v3l.8.4v-3l-.8-.5Zm0,6.1v1.5l.8.4v-1.5l-.8-.5Z"
            fill="#b4b4bd"
          />
          <path
            id="xAxis-2"
            d="m423.7,97.8c.2,0,.2-.4,0-.6l-2.5-4.3c-.2-.3-.4-.4-.6-.3-.2,0-.2.4,0,.6l2.2,3.8-2.2,1.3c-.2,0-.2.4,0,.6.2.3.4.4.6.3l2.5-1.4Zm-.3-.9l-1.3-.8v.9l1.3.8v-.9Zm-3.9-2.3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-2.6-1.5v.9l2.6,1.5v-.9Zm-5.2-3l-1.3-.8v.9l1.3.8v-.9Z"
            fill="#b4b4bd"
          />
          <path
            id="curve-2"
            d="m423.2,151.4c-12-32.2-22.8-55.8-28.3-60.8-4.7-5-9.7-3.9-17.4-7.7-5-3.2-9.1-9.6-9.1-17.3s5.4-9,9.1-6.8c7.2,4.4,10.9,11,17.4,12.3,6.3.9,16.7-9.5,28.3-27.5"
            fill="none"
            stroke="url(#Unbenannter_Verlauf_5)"
            strokeWidth="2"
          />
          <g id="stepP2-2">
            <line
              id="dashP2-2"
              x1="392.9"
              y1="71.1"
              x2="392.9"
              y2="86.2"
              fill="none"
              stroke="#cdd3fc"
            />
            <path
              id="lineP2-2"
              d="m365.8,49.5l79.1,63.2"
              fill="none"
              stroke="#7083fa"
            />
          </g>
          <g id="stepP3-2">
            <path
              id="lineP3-2"
              d="m366.1,26.1l78.3,185.7"
              fill="none"
              stroke="#7083fa"
            />
          </g>
          <g id="stepP4-2">
            <path
              id="lineP4-2"
              d="m444.4,8.3l-78.5,65.7"
              fill="none"
              stroke="#7083fa"
            />
            <line
              id="dashP4-2"
              x1="369.5"
              y1="64.3"
              x2="369.5"
              y2="69.3"
              fill="none"
              stroke="#cdd3fc"
            />
          </g>
          <g id="stepP5-2">
            <path
              id="lineP5-2"
              d="m444.3,65.5l-87.1-5.4"
              fill="none"
              stroke="#7083fa"
            />
            <line
              id="dashP5-2"
              x1="408.9"
              y1="64.1"
              x2="408.9"
              y2="112.1"
              fill="none"
              stroke="#cdd3fc"
            />
          </g>
          <g id="stepP6-2">
            <path
              id="lineP6-2"
              d="m444.1,183.3l-78.2-150.8"
              fill="none"
              stroke="#7083fa"
            />
            <line
              id="dashP6-2"
              x1="399.8"
              y1="72.8"
              x2="399.8"
              y2="95.8"
              fill="none"
              stroke="#cdd3fc"
            />
          </g>
          <g id="stepP7-2">
            <path
              id="lineP7-2"
              d="m444.9,92.3l-82.1-39.5"
              fill="none"
              stroke="#7083fa"
            />
            <line
              id="dashP7-2"
              x1="374.3"
              y1="58.7"
              x2="374.3"
              y2="77.4"
              fill="none"
              stroke="#cdd3fc"
            />
          </g>
          <ellipse
            id="P-2"
            cx="380.8"
            cy="61"
            rx="1.9"
            ry="3.4"
            transform="translate(20.5 198.6) rotate(-30)"
            fill="none"
            stroke="#2b44e4"
          />
          <ellipse
            id="P2-2"
            cx="392.8"
            cy="89.2"
            rx="1.9"
            ry="3.4"
            transform="translate(8 208.4) rotate(-30)"
            fill="none"
            stroke="#2b44e4"
          />
          <ellipse
            id="P4-2"
            cx="368.9"
            cy="61.2"
            rx="1.9"
            ry="3.4"
            transform="translate(18.8 192.6) rotate(-30)"
            fill="none"
            stroke="#2b44e4"
          />
          <ellipse
            id="P5-2"
            cx="408.6"
            cy="114.9"
            rx="1.9"
            ry="3.4"
            transform="translate(-2.7 219.7) rotate(-30)"
            fill="none"
            stroke="#2b44e4"
          />
          <ellipse
            id="P6-2"
            cx="399.5"
            cy="70.2"
            rx="1.9"
            ry="3.4"
            transform="translate(18.5 209.2) rotate(-30)"
            fill="none"
            stroke="#2b44e4"
          />
          <ellipse
            id="P7-2"
            cx="374.1"
            cy="80.1"
            rx="1.9"
            ry="3.4"
            transform="translate(10.1 197.8) rotate(-30)"
            fill="none"
            stroke="#2b44e4"
          />
        </g>
        <g id="serverStack">
          <g id="serverBottom">
            <polygon
              id="side"
              points="311.1 131.2 380 171 380.1 147.1 311 107.3 311.1 131.2"
              fill="#1f1f21"
            />
            <polygon
              id="side-2"
              points="448.9 107.3 448.9 131.2 380 171 380 147.1 448.9 107.3"
              fill="url(#Unbenannter_Verlauf_11)"
            />
            <polygon
              id="top"
              points="380 67.5 311 107.3 380 147.1 449.1 107.3 380 67.5"
              fill="#4f5057"
            />
            <g id="serverBottomDetails">
              <path
                d="m387,154.9v1.7c0,.2.2.3.3.2l28.5-16.4c.2,0,.2-.3.2-.4v-1.7c0-.2-.2-.3-.3-.2l-28.5,16.4c-.2,0-.2.3-.2.4Z"
                fill="#1f1f21"
              />
              <g id="LightsServerBottom" className="lights">
                <g id="Lights-2" className="lights-top">
                  <ellipse
                    cx="440.4"
                    cy="121.2"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="429.8"
                    cy="127.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="436.8"
                    cy="123.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="433.4"
                    cy="125.2"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="426.2"
                    cy="129.4"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                </g>
                <g id="Lights-3" className="lights-bottom">
                  <ellipse
                    cx="440.4"
                    cy="127.2"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="429.8"
                    cy="133.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="436.8"
                    cy="129.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="433.4"
                    cy="131.2"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="426.2"
                    cy="135.4"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                </g>
              </g>
            </g>
            <polygon
              points="370.5 149.6 370.5 159.6 371.9 160.6 371.9 150.5 370.5 149.6"
              fill="#1f1f21"
            />
            <polygon
              points="369 148.8 369 158.8 370.5 159.7 370.5 149.6 369 148.8"
              fill="#dcdde5"
            />
            <polygon
              points="363.8 145.8 363.8 155.8 365.2 156.7 365.2 146.6 363.8 145.8"
              fill="#1f1f21"
            />
            <polygon
              points="362.4 144.9 362.4 154.9 363.8 155.9 363.8 145.8 362.4 144.9"
              fill="#ededf0"
            />
            <polygon
              points="356.8 141.7 356.8 151.7 358.2 152.7 358.2 142.5 356.8 141.7"
              fill="#1f1f21"
            />
            <polygon
              points="355.4 140.9 355.4 150.9 356.8 151.8 356.8 141.7 355.4 140.9"
              fill="#ededf0"
            />
            <polygon
              id="shadow"
              points="380 139 366 139.2 310.8 107.3 320.2 101.9 380 139"
            />
            <line
              id="shadow-2"
              x1="311.1"
              y1="130.8"
              x2="380"
              y2="170.6"
              fill="none"
              mix-blend-mode="multiply"
              opacity=".6"
              stroke="#1f1f21"
              strokeMiterlimit="10"
            />
            <line
              id="shadow-3"
              x1="448.8"
              y1="130.6"
              x2="379.9"
              y2="170.4"
              fill="none"
              mix-blend-mode="multiply"
              opacity=".2"
              stroke="#1f1f21"
              strokeMiterlimit="10"
            />
            <polygon
              points="311 107.3 380 147.1 380 151.2 311 109.1 311 107.3"
              fill="#666771"
            />
          </g>
          <g id="serverMiddle">
            <polygon
              points="311.1 99.3 380 139.1 380.1 115.2 311 75.4 311.1 99.3"
              fill="#1f1f21"
            />
            <polygon
              points="448.9 75.4 448.9 99.3 380 139.1 380 115.2 448.9 75.4"
              fill="url(#Unbenannter_Verlauf_11-2)"
            />
            <polygon
              points="380 35.6 311 75.4 380 115.2 449.1 75.4 380 35.6"
              fill="#4f5057"
            />
            <g id="serverMiddleDetails">
              <path
                d="m387,123v1.7c0,.2.2.3.3.2l28.5-16.4c.2,0,.2-.3.2-.4v-1.7c0-.2-.2-.3-.3-.2l-28.5,16.4c-.2,0-.2.3-.2.4Z"
                fill="#1f1f21"
              />
              <g id="LightsServerMiddle" className="lights">
                <g id="Lights-5" className="lights-top">
                  <ellipse
                    cx="440.4"
                    cy="89.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="429.8"
                    cy="95.4"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="436.8"
                    cy="91.4"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="433.4"
                    cy="93.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="426.2"
                    cy="97.5"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                </g>
                <g id="Lights-6">
                  <ellipse
                    cx="440.4"
                    cy="95.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="429.8"
                    cy="101.4"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="436.8"
                    cy="97.4"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="433.4"
                    cy="99.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="426.2"
                    cy="103.5"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                </g>
              </g>
            </g>
            <polygon
              points="370.5 117.7 370.5 127.7 371.9 128.7 371.9 118.6 370.5 117.7"
              fill="#1f1f21"
            />
            <polygon
              points="369 116.9 369 126.9 370.5 127.8 370.5 117.7 369 116.9"
              fill="#dcdde5"
            />
            <polygon
              points="363.8 113.9 363.8 123.9 365.2 124.8 365.2 114.7 363.8 113.9"
              fill="#1f1f21"
            />
            <polygon
              points="362.4 113 362.4 123 363.8 124 363.8 113.9 362.4 113"
              fill="#dcdde5"
            />
            <polygon
              points="356.8 109.8 356.8 119.8 358.2 120.7 358.2 110.6 356.8 109.8"
              fill="#1f1f21"
            />
            <polygon
              points="355.4 108.9 355.4 119 356.8 119.9 356.8 109.8 355.4 108.9"
              fill="#dcdde5"
            />
            <polygon points="380 107 366 107.2 310.8 75.4 320.2 70 380 107" />
          </g>
          <g id="serverTop">
            <polygon
              points="311.1 67.3 380 107.1 380.1 83.2 311 43.4 311.1 67.3"
              fill="#1f1f21"
            />
            <polygon
              points="448.9 43.4 448.9 67.3 380 107.1 380 83.2 448.9 43.4"
              fill="url(#Unbenannter_Verlauf_11-3)"
            />
            <polygon
              points="380 3.6 311 43.4 380 83.2 449.1 43.4 380 3.6"
              fill="#4f5057"
            />
            <g id="serverTopDetails">
              <path
                d="m387,91v1.7c0,.2.2.3.3.2l28.5-16.4c.2,0,.2-.3.2-.4v-1.7c0-.2-.2-.3-.3-.2l-28.5,16.4c-.2,0-.2.3-.2.4Z"
                fill="#1f1f21"
              />
              <g id="LightsServerTop">
                <g id="Lights-8">
                  <ellipse
                    cx="440.4"
                    cy="57.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="429.8"
                    cy="63.4"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="436.8"
                    cy="59.4"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="433.4"
                    cy="61.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="426.2"
                    cy="65.5"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                </g>
                <g id="Lights-9">
                  <ellipse
                    cx="440.4"
                    cy="63.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="429.8"
                    cy="69.4"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="436.8"
                    cy="65.4"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="433.4"
                    cy="67.3"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                  <ellipse
                    cx="426.2"
                    cy="71.5"
                    rx="1"
                    ry="1.1"
                    fill="#1f1f21"
                  />
                </g>
              </g>
            </g>
            <polygon
              points="370.5 85.7 370.5 95.8 371.9 96.7 371.9 86.6 370.5 85.7"
              fill="#1f1f21"
            />
            <polygon
              points="369 84.9 369 94.9 370.5 95.8 370.5 85.7 369 84.9"
              fill="#dcdde5"
            />
            <polygon
              points="363.8 81.9 363.8 91.9 365.2 92.8 365.2 82.7 363.8 81.9"
              fill="#1f1f21"
            />
            <polygon
              points="362.4 81 362.4 91 363.8 92 363.8 81.9 362.4 81"
              fill="#dcdde5"
            />
            <polygon
              points="356.8 77.8 356.8 87.8 358.2 88.8 358.2 78.7 356.8 77.8"
              fill="#1f1f21"
            />
            <polygon
              points="355.4 77 355.4 87 356.8 87.9 356.8 77.8 355.4 77"
              fill="#dcdde5"
            />
            <g id="ventilation">
              <circle cx="379.3" cy="28.6" r="1.5" fill="#1f1f21" />
              <circle cx="379.3" cy="34.9" r="1.5" fill="#1f1f21" />
              <circle cx="379.3" cy="42.4" r="1.5" fill="#1f1f21" />
              <circle cx="379.3" cy="49.5" r="1.5" fill="#1f1f21" />
              <circle cx="379.3" cy="57.3" r="1.5" fill="#1f1f21" />
              <circle cx="387.4" cy="32.3" r="1.5" fill="#1f1f21" />
              <circle cx="387.4" cy="38.5" r="1.5" fill="#1f1f21" />
              <circle cx="387.4" cy="46.1" r="1.5" fill="#1f1f21" />
              <circle cx="387.4" cy="53.2" r="1.5" fill="#1f1f21" />
              <circle cx="395.7" cy="36.1" r="1.5" fill="#1f1f21" />
              <circle cx="395.7" cy="42.1" r="1.5" fill="#1f1f21" />
              <circle cx="395.7" cy="49.3" r="1.5" fill="#1f1f21" />
              <circle cx="370.9" cy="32.3" r="1.5" fill="#1f1f21" />
              <circle cx="370.9" cy="38.5" r="1.5" fill="#1f1f21" />
              <circle cx="370.9" cy="46.1" r="1.5" fill="#1f1f21" />
              <circle cx="370.9" cy="53.2" r="1.5" fill="#1f1f21" />
              <circle cx="362.6" cy="34.6" r="1.5" fill="#1f1f21" />
              <circle cx="362.6" cy="42.2" r="1.5" fill="#1f1f21" />
              <circle cx="362.6" cy="49.3" r="1.5" fill="#1f1f21" />
            </g>
          </g>
        </g>
        <g id="client">
          <path
            id="top-2"
            d="m37.6,118.8l82.3,47.5c1.8,1.1,4.1,1.1,5.9,0l61.6-35.6c2-1.1,2-3.9,0-5.1l-82.3-47.5c-1.8-1.1-4.1-1.1-5.9,0l-61.6,35.5c-2,1.1-2,3.9,0,5.1Z"
            fill="url(#Unbenannter_Verlauf_44)"
          />
          <path
            id="side-3"
            d="m38.3,127.1c-1.3-.7-2.1-2.1-2.1-3.6v-7.2q0,0,0,0c.5,1.1,1.3,2.1,2.3,2.7l81.3,47.3c1.9,1.1,4.1,1.1,6,0l61.8-35.7c.7-.4,1.1-1,1.3-1.8v-.5c0,0,.3,7.3.3,7.3,0,1.4-.7,2.8-2,3.5l-61.4,35.2c-1.9,1.1-4.1,1.1-6,0l-81.5-47.1Z"
            fill="#4f5057"
            filter="url(#drop-shadow-10)"
          />
          <path
            id="trackpad"
            d="m69.4,127.5l36.2,20.9c1.2.7,2.8.7,4,0l13-7.6c1.4-.8,1.4-2.9,0-3.7l-36-20.9c-1.3-.7-2.9-.7-4.2,0l-13.1,7.6c-1.4.8-1.4,2.9,0,3.7Z"
            fill="#4f5057"
          />
          <g id="keyboard">
            <g id="keyRow1">
              <polygon
                points="101.8 88.1 97 91 101.8 93.7 106.6 90.9 101.8 88.1"
                fill="#666771"
              />
              <polygon
                points="159.7 121.4 154.9 124.2 165.8 130.5 170.6 127.7 159.7 121.4"
                fill="#4f5057"
              />
              <polygon
                points="108.2 91.8 103.4 94.6 108.2 97.4 113.1 94.6 108.2 91.8"
                fill="#4f5057"
              />
              <polygon
                points="114.6 95.3 109.8 98.1 114.6 100.9 119.5 98.1 114.6 95.3"
                fill="#4f5057"
              />
              <polygon
                points="121 98.9 116.2 101.8 121 104.5 125.9 101.7 121 98.9"
                fill="#4f5057"
              />
              <polygon
                points="127.5 102.9 122.6 105.7 127.5 108.5 132.3 105.7 127.5 102.9"
                fill="#4f5057"
              />
              <polygon
                points="133.9 106.5 129 109.4 133.9 112.1 138.7 109.3 133.9 106.5"
                fill="#4f5057"
              />
              <polygon
                points="140.3 110 135.4 112.8 140.3 115.6 145.1 112.8 140.3 110"
                fill="#666771"
              />
              <polygon
                points="146.7 113.6 141.8 116.5 146.7 119.2 151.5 116.4 146.7 113.6"
                fill="#666771"
              />
              <polygon
                points="153.2 117.4 148.3 120.2 153.2 123 158 120.2 153.2 117.4"
                fill="#4f5057"
              />
            </g>
            <g id="keyRow2">
              <polygon
                points="95.4 92.1 90.6 94.9 101.5 101.2 106.4 98.4 95.4 92.1"
                fill="#4f5057"
              />
              <polygon
                points="153.9 125.3 149 128.2 159.9 134.5 164.8 131.7 153.9 125.3"
                fill="#666771"
              />
              <polygon
                points="113.9 103.1 109.1 105.9 113.9 108.7 118.8 105.9 113.9 103.1"
                fill="#4f5057"
              />
              <polygon
                points="120.4 107 115.5 109.9 120.4 112.6 125.2 109.8 120.4 107"
                fill="#666771"
              />
              <polygon
                points="126.2 111 121.3 113.9 126.2 116.6 131 113.8 126.2 111"
                fill="#666771"
              />
              <polygon
                points="133.2 114.1 128.3 117 133.2 119.7 138 116.9 133.2 114.1"
                fill="#4f5057"
              />
              <polygon
                id="keyColor2"
                points="139.6 117.8 134.7 120.6 139.6 123.4 144.4 120.6 139.6 117.8"
                fill="#ffb921"
              />
              <polygon
                points="146.1 121.5 141.2 124.4 146.1 127.1 150.9 124.3 146.1 121.5"
                fill="#666771"
              />
              <polygon
                points="107.8 99.3 102.9 102.2 107.8 104.9 112.6 102.1 107.8 99.3"
                fill="#666771"
              />
            </g>
            <g id="keyRow3">
              <polygon
                points="88.8 96.4 83.9 99.2 94.9 105.5 99.7 102.7 88.8 96.4"
                fill="#4f5057"
              />
              <polygon
                points="147.2 129.7 142.4 132.5 153.3 138.8 158.1 136 147.2 129.7"
                fill="#4f5057"
              />
              <polygon
                points="107.3 107.4 102.4 110.2 107.3 113 112.1 110.2 107.3 107.4"
                fill="#4f5057"
              />
              <polygon
                points="113.7 111.3 108.9 114.2 113.7 116.9 118.6 114.1 113.7 111.3"
                fill="#4f5057"
              />
              <polygon
                points="120.1 115 115.3 117.8 120.1 120.6 125 117.8 120.1 115"
                fill="#4f5057"
              />
              <polygon
                points="126.5 118.5 121.7 121.3 126.5 124.1 131.4 121.3 126.5 118.5"
                fill="#666771"
              />
              <polygon
                points="132.9 122.1 128.1 125 132.9 127.7 137.8 124.9 132.9 122.1"
                fill="#4f5057"
              />
              <polygon
                points="139.4 125.9 134.6 128.7 139.4 131.5 144.3 128.7 139.4 125.9"
                fill="#4f5057"
              />
              <polygon
                points="101.2 103.7 96.3 106.5 101.2 109.3 106 106.5 101.2 103.7"
                fill="#4f5057"
              />
            </g>
            <g id="keyRow4">
              <polygon
                points="81.5 100.6 76.7 103.5 87.6 109.8 92.4 107 81.5 100.6"
                fill="#666771"
              />
              <polygon
                points="139.9 133.9 135.1 136.8 146 143.1 150.8 140.3 139.9 133.9"
                fill="#666771"
              />
              <polygon
                points="100 111.7 95.2 114.5 125.7 131.7 130.6 128.9 100 111.7"
                fill="#666771"
              />
              <polygon
                points="132.2 130.1 127.3 133 132.2 135.7 137 132.9 132.2 130.1"
                fill="#666771"
              />
              <polygon
                id="keyColor1"
                points="93.9 107.9 89 110.8 93.9 113.5 98.7 110.7 93.9 107.9"
                fill="#ff91c9"
              />
            </g>
          </g>
          <path
            id="sreenBack"
            d="m194,115.9v-62.8c0-3.6-1.9-6.9-5-8.7L113.6.8c-4.1-2.4-9.3.6-9.3,5.4v62.9c0,3.6,1.9,6.9,5,8.7l75.4,43.5c4.1,2.4,9.3-.6,9.3-5.4Z"
            fill="#666771"
          />
          <g id="screenContent">
            <g id="screen">
              <path d="m185.5,122.7c-.9,0-1.8-.2-2.6-.7l-75.4-43.5c-2.8-1.6-4.5-4.6-4.5-7.8V7.8c0-3.2,2.7-5.2,5.2-5.2s1.8.2,2.6.7l75.4,43.6c2.8,1.6,4.5,4.6,4.5,7.8v62.8c0,1.4-.6,2.8-1.6,3.7-1,.9-2.3,1.5-3.6,1.5h0Z" />
              <path
                d="m108.2,3.6c.7,0,1.4.2,2.1.6l75.4,43.6c2.5,1.4,4,4.1,4,6.9v62.8c0,2.6-2.2,4.2-4.2,4.2s-1.4-.2-2.1-.6l-75.4-43.5c-2.5-1.4-4-4.1-4-6.9V7.8c0-2.6,2.2-4.2,4.2-4.2m0-2c-3.2,0-6.2,2.6-6.2,6.2v62.9c0,3.6,1.9,6.9,5,8.7l75.4,43.5c1,.6,2.1.8,3.1.8,3.2,0,6.2-2.6,6.2-6.2v-62.8c0-3.6-1.9-6.9-5-8.7L111.3,2.4c-1-.6-2.1-.8-3.1-.8h0Z"
                fill="#1f1f21"
              />
            </g>
            <polygon
              id="button"
              points="120.9 63 120.9 71.5 135.1 79.9 135.1 71.2 120.9 63"
              fill="#7083fa"
            />
            <g id="password">
              <g id="asterisk">
                <path
                  d="m125.7,55.4l1.2-1.9-2.3.2v-1.6s2.3.1,2.3.1l-1.3-1.9,1.4-.8,1,2,1-2.1,1.4.8-1.2,1.9,2.3-.2v1.6s-2.3-.1-2.3-.1l1.3,1.9-1.4.8-1-2-1,2.1-1.4-.8Z"
                  fill="#fdfdfd"
                  className="asterisk"
                />
                <path
                  d="m133.9,60l1.2-1.9-2.3.2v-1.6s2.3.1,2.3.1l-1.3-1.9,1.4-.8,1,2,1-2.1,1.4.8-1.2,1.9,2.3-.2v1.6s-2.3-.1-2.3-.1l1.3,1.9-1.4.8-1-2-1,2.1-1.4-.8Z"
                  fill="#fdfdfd"
                  className="asterisk"
                />
                <path
                  d="m142.1,64.5l1.2-1.9-2.3.2v-1.6s2.3.1,2.3.1l-1.3-1.9,1.4-.8,1,2,1-2.1,1.4.8-1.2,1.9,2.3-.2v1.6s-2.3-.1-2.3-.1l1.3,1.9-1.4.8-1-2-1,2.1-1.4-.8Z"
                  fill="#fdfdfd"
                  className="asterisk"
                />
                <path
                  d="m150.2,69.1l1.2-1.9-2.3.2v-1.6s2.3.1,2.3.1l-1.3-1.9,1.4-.8,1,2,1-2.1,1.4.8-1.2,1.9,2.3-.2v1.6s-2.3-.1-2.3-.1l1.3,1.9-1.4.8-1-2-1,2.1-1.4-.8Z"
                  fill="#fdfdfd"
                  className="asterisk"
                />
                <path
                  d="m158.4,73.7l1.2-1.9-2.3.2v-1.6s2.3.1,2.3.1l-1.3-1.9,1.4-.8,1,2,1-2.1,1.4.8-1.2,1.9,2.3-.2v1.6s-2.3-.1-2.3-.1l1.3,1.9-1.4.8-1-2-1,2.1-1.4-.8Z"
                  fill="#fdfdfd"
                  className="asterisk"
                />
              </g>
              <polygon
                id="passwordOutline"
                points="121 39.6 120.9 56.4 167.5 83.6 167.3 66.2 121 39.6"
                fill="none"
                stroke="#fdfdfd"
                strokeMiterlimit="10"
              />
            </g>
          </g>
        </g>
        <g id="banana">
          <path
            d="m395.2,30.7c-1.2,11.3-11,19.9-22.4,19.4-8.1-.3-14.9-5.1-18.4-11.8-.6-1.1-1-2.2-1.4-3.4-.4-1.1,1-2,1.9-1.3.9.7,1.8,1.4,2.8,1.9,2.8,1.6,6,2.6,9.4,2.9,10.6.7,20-6.4,22.4-16.4.3-1.2.5-2.5.6-3.8h0c0-1.2,1.7-1.6,2.3-.6.7,1.2,1.2,2.4,1.7,3.7,1,2.9,1.4,6,1.1,9.3Z"
            fill="#ffb921"
          />
          <path
            d="m394.2,21.4c-.9.7-2,1-3.2.9s-.9-.1-1.3-.3c.3-1.2.5-2.5.6-3.8h0c0-1.2,1.7-1.6,2.3-.6.7,1.2,1.2,2.4,1.7,3.7Z"
            opacity=".6"
          />
          <path
            d="m357.8,35.6c-.6,1.4-1.9,2.4-3.3,2.7-.6-1.1-1-2.2-1.4-3.4-.4-1.1,1-2,1.9-1.3.9.7,1.8,1.4,2.8,1.9Z"
            opacity=".6"
          />
          <path
            d="m391.3,17.2s3.3,19.2-11.1,25.8c-14.4,6.6-26.5-9.1-26.5-9.1"
            fill="none"
            opacity=".6"
            stroke="#000"
            strokeMiterlimit="10"
          />
        </g>
      </g>
    </svg>
  );
};
