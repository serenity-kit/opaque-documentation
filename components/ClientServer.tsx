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
      viewBox="0 0 541.4 246.19"
      id="ClientServer"
      className={cn(
        "-ml-[2.9rem] mt-[7rem]",
        clientActive && "client-active",
        serverActive && "server-active",
        className
      )}
      {...props}
    >
      <defs>
        <linearGradient
          id="Unbenannter_Verlauf_11"
          data-name="Unbenannter Verlauf 11"
          x1="421.67"
          y1="140.17"
          x2="490.58"
          y2="140.17"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#666771" />
          <stop offset="1" stopColor="#666771" stopOpacity=".6" />
        </linearGradient>
        <linearGradient
          id="Unbenannter_Verlauf_11-2"
          data-name="Unbenannter Verlauf 11"
          y1="108.26"
          y2="108.26"
          xlinkHref="#Unbenannter_Verlauf_11"
        />
        <filter id="outer-glow-1" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur" stdDeviation="5" />
          <feFlood floodColor="#293dd3" floodOpacity=".9" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="outer-glow-2" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur-2" stdDeviation="2" />
          <feFlood floodColor="#e9b218" floodOpacity=".9" />
          <feComposite in2="blur-2" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="Unbenannter_Verlauf_11-3"
          data-name="Unbenannter Verlauf 11"
          y1="76.27"
          y2="76.27"
          xlinkHref="#Unbenannter_Verlauf_11"
        />
        <filter id="drop-shadow-3" filterUnits="userSpaceOnUse">
          <feOffset dx="8" dy="16" />
          <feGaussianBlur result="blur-3" stdDeviation="1" />
          <feFlood floodColor="#000" floodOpacity=".05" />
          <feComposite in2="blur-3" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="outer-glow-4" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur-4" stdDeviation="6" />
          <feFlood floodColor="#ffb921" floodOpacity="1" />
          <feComposite in2="blur-4" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="Unbenannter_Verlauf_44"
          data-name="Unbenannter Verlauf 44"
          x1="80.08"
          y1="122.23"
          x2="232.67"
          y2="122.23"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#000" />
          <stop offset="1" stopColor="#000" stopOpacity=".8" />
        </linearGradient>
        <filter id="drop-shadow-5" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="1" />
          <feGaussianBlur result="blur-5" stdDeviation="0" />
          <feFlood floodColor="#bcc2ce" floodOpacity=".6" />
          <feComposite in2="blur-5" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g className="cls-27">
        <g id="Ebene_2" data-name="Ebene 2">
          <g id="illustration">
            <g id="Illustration">
              <path
                id="boardServer"
                className={`cls-2 board ${serverActive ? "active" : undefined}`}
                d="m534.95,135.28l-97.55,55.3c-10.31,5.85-22.93,5.85-33.25,0l-97.71-55.31c-7.64-4.33-7.6-15.35.08-19.61l97.8-54.25c10.18-5.65,22.55-5.65,32.72,0l97.81,54.26c7.68,4.26,7.73,15.28.09,19.61Z"
              />
              <path
                id="boardClient"
                className={`cls-2 board ${clientActive ? "active" : undefined}`}
                d="m276.88,135.28l-97.55,55.3c-10.31,5.85-22.93,5.85-33.25,0l-97.71-55.31c-7.64-4.33-7.6-15.35.08-19.61l97.8-54.25c10.18-5.65,22.55-5.65,32.72,0l97.81,54.26c7.68,4.26,7.73,15.28.09,19.61Z"
              />
              {/* <path
                id="boardInactive-2"
                data-name="boardInactive"
                className="cls-5"
                d="m276.88,135.28l-97.55,55.3c-10.31,5.85-22.93,5.85-33.25,0l-97.71-55.31c-7.64-4.33-7.6-15.35.08-19.61l97.8-54.25c10.18-5.65,22.55-5.65,32.72,0l97.81,54.26c7.68,4.26,7.73,15.28.09,19.61Z"
              /> */}
              <g id="banana">
                <path
                  className="cls-15"
                  d="m55.76,83.19c-1.52,14.93-14.59,26.23-29.58,25.61-10.71-.44-19.74-6.69-24.27-15.53-.73-1.42-1.35-2.91-1.83-4.46-.48-1.51,1.31-2.7,2.54-1.7,1.16.94,2.39,1.79,3.69,2.55,3.68,2.14,7.9,3.49,12.43,3.79,14.03.93,26.36-8.43,29.61-21.61.4-1.61.67-3.29.78-5.01v-.06c.1-1.59,2.2-2.1,2.99-.71.89,1.55,1.64,3.19,2.23,4.9,1.31,3.8,1.84,7.95,1.4,12.23Z"
                />
                <path
                  className="cls-9"
                  d="m54.37,70.95c-1.17.88-2.65,1.35-4.22,1.25-.62-.04-1.22-.17-1.78-.38.4-1.61.67-3.29.78-5.01v-.06c.1-1.59,2.2-2.1,2.99-.71.89,1.55,1.64,3.19,2.23,4.9Z"
                />
                <path
                  className="cls-9"
                  d="m6.31,89.65c-.81,1.82-2.45,3.17-4.4,3.62-.73-1.42-1.35-2.91-1.83-4.46-.48-1.51,1.31-2.7,2.54-1.7,1.16.94,2.39,1.79,3.69,2.55Z"
                />
                <path
                  className="cls-1"
                  d="m50.53,65.42s4.35,25.39-14.7,34.05C16.77,108.12.79,87.41.79,87.41"
                />
              </g>
              <g id="serverStack">
                <g id="serverBottom">
                  <polygon
                    id="side"
                    className="cls-21"
                    points="352.75 132.2 421.71 172.01 421.76 148.07 352.65 108.32 352.75 132.2"
                  />
                  <polygon
                    id="side-2"
                    data-name="side"
                    className="cls-25"
                    points="490.58 108.32 490.55 132.16 421.71 172.01 421.67 148.12 490.58 108.32"
                  />
                  <polygon
                    id="top"
                    className="cls-23"
                    points="421.67 68.48 352.65 108.32 421.67 148.12 490.77 108.32 421.67 68.48"
                  />
                  <g id="serverDetails">
                    <path
                      className="cls-21"
                      d="m428.69,155.88v1.65c0,.15.17.25.3.17l28.5-16.37c.15-.09.25-.25.25-.43v-1.65c0-.15-.17-.25-.3-.17l-28.5,16.37c-.15.09-.25.25-.25.43Z"
                    />
                    <g id="Lights">
                      <g id="Lights-2" data-name="Lights">
                        <ellipse
                          className="cls-21"
                          cx="482.04"
                          cy="122.24"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="471.45"
                          cy="128.31"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="478.48"
                          cy="124.32"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="475.09"
                          cy="126.22"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="467.89"
                          cy="130.37"
                          rx="1"
                          ry="1.07"
                        />
                      </g>
                      <g id="Lights-3" data-name="Lights">
                        <ellipse
                          className="cls-21"
                          cx="482.04"
                          cy="128.23"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="471.45"
                          cy="134.3"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="478.48"
                          cy="130.31"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="475.09"
                          cy="132.21"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="467.89"
                          cy="136.36"
                          rx="1"
                          ry="1.07"
                        />
                      </g>
                    </g>
                  </g>
                  <g>
                    <polygon
                      className="cls-21"
                      points="412.13 150.64 412.13 160.65 413.54 161.59 413.54 151.48 412.13 150.64"
                    />
                    <polygon
                      className="cls-20"
                      points="410.71 149.79 410.71 159.8 412.13 160.74 412.13 150.64 410.71 149.79"
                    />
                  </g>
                  <g>
                    <polygon
                      className="cls-21"
                      points="405.44 146.78 405.44 156.79 406.86 157.73 406.86 147.63 405.44 146.78"
                    />
                    <polygon
                      className="cls-16"
                      points="404.03 145.93 404.03 155.94 405.44 156.88 405.44 146.78 404.03 145.93"
                    />
                  </g>
                  <g>
                    <polygon
                      className="cls-21"
                      points="398.5 142.7 398.5 152.71 399.91 153.65 399.91 143.55 398.5 142.7"
                    />
                    <polygon
                      className="cls-16"
                      points="397.09 141.85 397.09 151.87 398.5 152.81 398.5 142.7 397.09 141.85"
                    />
                  </g>
                  <polygon
                    id="shadow"
                    points="421.71 139.95 407.67 140.15 352.44 108.32 361.91 102.91 421.71 139.95"
                  />
                  <line
                    id="shadow-2"
                    data-name="shadow"
                    className="cls-3"
                    x1="352.75"
                    y1="131.8"
                    x2="421.71"
                    y2="171.61"
                  />
                  <line
                    id="shadow-3"
                    data-name="shadow"
                    className="cls-6"
                    x1="490.51"
                    y1="131.57"
                    x2="421.55"
                    y2="171.39"
                  />
                  <polygon
                    className="cls-19"
                    points="352.65 108.32 421.67 148.12 421.63 152.19 352.69 110.07 352.65 108.32"
                  />
                </g>
                <g id="serverMiddle">
                  <polygon
                    className="cls-21"
                    points="352.75 100.29 421.71 140.11 421.76 116.17 352.65 76.42 352.75 100.29"
                  />
                  <polygon
                    className="cls-11"
                    points="490.58 76.42 490.55 100.25 421.71 140.11 421.67 116.22 490.58 76.42"
                  />
                  <polygon
                    className="cls-23"
                    points="421.67 36.58 352.65 76.42 421.67 116.22 490.77 76.42 421.67 36.58"
                  />
                  <g id="serverDetails-2" data-name="serverDetails">
                    <path
                      className="cls-21"
                      d="m428.69,123.98v1.65c0,.15.17.25.3.17l28.5-16.37c.15-.09.25-.25.25-.43v-1.65c0-.15-.17-.25-.3-.17l-28.5,16.37c-.15.09-.25.25-.25.43Z"
                    />
                    <g id="Lights-4" data-name="Lights">
                      <g id="Lights-5" data-name="Lights">
                        <ellipse
                          className="cls-21"
                          cx="482.04"
                          cy="90.33"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="471.45"
                          cy="96.41"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="478.48"
                          cy="92.42"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-12"
                          cx="475.09"
                          cy="94.31"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="467.89"
                          cy="98.46"
                          rx="1"
                          ry="1.07"
                        />
                      </g>
                      <g id="Lights-6" data-name="Lights">
                        <ellipse
                          className="cls-21"
                          cx="482.04"
                          cy="96.32"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-14"
                          cx="471.45"
                          cy="102.39"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="478.48"
                          cy="98.41"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="475.09"
                          cy="100.3"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="467.89"
                          cy="104.45"
                          rx="1"
                          ry="1.07"
                        />
                      </g>
                    </g>
                  </g>
                  <g>
                    <polygon
                      className="cls-21"
                      points="412.13 118.73 412.13 128.74 413.54 129.68 413.54 119.58 412.13 118.73"
                    />
                    <polygon
                      className="cls-20"
                      points="410.71 117.88 410.71 127.89 412.13 128.84 412.13 118.73 410.71 117.88"
                    />
                  </g>
                  <g>
                    <polygon
                      className="cls-21"
                      points="405.44 114.87 405.44 124.88 406.86 125.82 406.86 115.72 405.44 114.87"
                    />
                    <polygon
                      className="cls-20"
                      points="404.03 114.03 404.03 124.04 405.44 124.98 405.44 114.87 404.03 114.03"
                    />
                  </g>
                  <g>
                    <polygon
                      className="cls-21"
                      points="398.5 110.8 398.5 120.81 399.91 121.75 399.91 111.64 398.5 110.8"
                    />
                    <polygon
                      className="cls-20"
                      points="397.09 109.95 397.09 119.96 398.5 120.9 398.5 110.8 397.09 109.95"
                    />
                  </g>
                  <polygon points="421.71 108.04 407.67 108.25 352.44 76.42 361.91 71 421.71 108.04" />
                </g>
                <g id="serverTop">
                  <polygon
                    className="cls-21"
                    points="352.75 68.3 421.71 108.12 421.76 84.17 352.65 44.42 352.75 68.3"
                  />
                  <polygon
                    className="cls-10"
                    points="490.58 44.42 490.55 68.26 421.71 108.12 421.67 84.23 490.58 44.42"
                  />
                  <polygon
                    className="cls-23"
                    points="421.67 4.58 352.65 44.42 421.67 84.23 490.77 44.42 421.67 4.58"
                  />
                  <g id="serverDetails-3" data-name="serverDetails">
                    <path
                      className="cls-21"
                      d="m428.69,91.99v1.65c0,.15.17.25.3.17l28.5-16.37c.15-.09.25-.25.25-.43v-1.65c0-.15-.17-.25-.3-.17l-28.5,16.37c-.15.09-.25.25-.25.43Z"
                    />
                    <g id="Lights-7" data-name="Lights">
                      <g id="Lights-8" data-name="Lights">
                        <ellipse
                          className="cls-21"
                          cx="482.04"
                          cy="58.34"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="471.45"
                          cy="64.41"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="478.48"
                          cy="60.43"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="475.09"
                          cy="62.32"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="467.89"
                          cy="66.47"
                          rx="1"
                          ry="1.07"
                        />
                      </g>
                      <g id="Lights-9" data-name="Lights">
                        <ellipse
                          className="cls-21"
                          cx="482.04"
                          cy="64.33"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="471.45"
                          cy="70.4"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="478.48"
                          cy="66.41"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="475.09"
                          cy="68.31"
                          rx="1"
                          ry="1.07"
                        />
                        <ellipse
                          className="cls-21"
                          cx="467.89"
                          cy="72.46"
                          rx="1"
                          ry="1.07"
                        />
                      </g>
                    </g>
                  </g>
                  <g>
                    <polygon
                      className="cls-21"
                      points="412.13 86.74 412.13 96.75 413.54 97.69 413.54 87.59 412.13 86.74"
                    />
                    <polygon
                      className="cls-20"
                      points="410.71 85.89 410.71 95.9 412.13 96.85 412.13 86.74 410.71 85.89"
                    />
                  </g>
                  <g>
                    <polygon
                      className="cls-21"
                      points="405.44 82.88 405.44 92.89 406.86 93.83 406.86 83.73 405.44 82.88"
                    />
                    <polygon
                      className="cls-20"
                      points="404.03 82.03 404.03 92.05 405.44 92.99 405.44 82.88 404.03 82.03"
                    />
                  </g>
                  <g>
                    <polygon
                      className="cls-21"
                      points="398.5 78.81 398.5 88.82 399.91 89.76 399.91 79.65 398.5 78.81"
                    />
                    <polygon
                      className="cls-20"
                      points="397.09 77.96 397.09 87.97 398.5 88.91 398.5 78.81 397.09 77.96"
                    />
                  </g>
                  <g id="ventilation">
                    <circle className="cls-21" cx="420.98" cy="29.59" r="1.5" />
                    <circle className="cls-21" cx="420.98" cy="35.85" r="1.5" />
                    <circle className="cls-21" cx="420.98" cy="43.38" r="1.5" />
                    <circle className="cls-21" cx="420.98" cy="50.51" r="1.5" />
                    <circle className="cls-21" cx="420.98" cy="58.26" r="1.5" />
                    <circle className="cls-21" cx="429.06" cy="33.25" r="1.5" />
                    <circle className="cls-21" cx="429.06" cy="39.52" r="1.5" />
                    <circle className="cls-21" cx="429.06" cy="47.05" r="1.5" />
                    <circle className="cls-21" cx="429.06" cy="54.17" r="1.5" />
                    <circle className="cls-21" cx="437.34" cy="37.1" r="1.5" />
                    <circle className="cls-21" cx="437.34" cy="43.13" r="1.5" />
                    <circle className="cls-21" cx="437.34" cy="50.26" r="1.5" />
                    <circle className="cls-21" cx="412.55" cy="33.27" r="1.5" />
                    <circle className="cls-21" cx="412.55" cy="39.54" r="1.5" />
                    <circle className="cls-21" cx="412.55" cy="47.07" r="1.5" />
                    <circle className="cls-21" cx="412.55" cy="54.19" r="1.5" />
                    <circle className="cls-21" cx="404.27" cy="35.62" r="1.5" />
                    <circle className="cls-21" cx="404.27" cy="43.15" r="1.5" />
                    <circle className="cls-21" cx="404.27" cy="50.28" r="1.5" />
                  </g>
                </g>
              </g>
              <g id="connection">
                <path
                  id="connection-line"
                  className="cls-7 line"
                  d="m380.32,156.07l-29.35,16.95c-5.33,3.08-5.33,10.78,0,13.86l10.46,6.04c5.33,3.08,5.33,10.78,0,13.86l-28.24,16.31c-4.95,2.86-11.05,2.86-16,0l-109.15-63.03"
                />
                <g id="dot">
                  <g>
                    <path
                      className="cls-8 data"
                      d="m377.84,157.5l-26.88,15.52c-5.33,3.08-5.33,10.78,0,13.86l10.46,6.04c5.33,3.08,5.33,10.78,0,13.86l-28.24,16.31c-4.95,2.86-11.05,2.86-16,0l-106.68-61.6"
                    />
                    <path
                      id="dotServer"
                      className="cls-15 dot"
                      d="m376.21,154.97c1.44-.83,3.28-.34,4.11,1.1.83,1.44.34,3.28-1.1,4.11-1.44.83-3.28.34-4.11-1.1-.83-1.44-.34-3.28,1.1-4.11Z"
                    />
                    <path
                      id="dotClient"
                      className="cls-15 dot"
                      d="m212.14,158.95c-1.44-.83-3.28-.34-4.11,1.1-.83,1.44-.34,3.28,1.1,4.11,1.44.83,3.28.34,4.11-1.1s.34-3.28-1.1-4.11Z"
                    />
                  </g>
                </g>
                <ellipse
                  id="staticDot"
                  className="cls-13"
                  cx="246.5"
                  cy="182.54"
                  rx="3.66"
                  ry="4.7"
                  transform="translate(-40.69 290.28) rotate(-57.09)"
                />
              </g>
              <g id="client">
                <path
                  id="top-2"
                  data-name="top"
                  className="cls-26"
                  d="m81.58,118.84l82.17,47.45c1.86,1.07,4.14,1.07,6,0l61.43-35.47c2-1.15,2-4.04,0-5.2l-82.18-47.44c-1.86-1.07-4.14-1.07-6,0l-61.42,35.46c-2,1.15-2,4.04,0,5.2Z"
                />
                <path
                  id="side-3"
                  data-name="side"
                  className="cls-24"
                  d="m80.08,125.92l-.09-8,83.59,48.39c1.86,1.07,4.14,1.07,6,0l62.92-36.21v6.23c-.01,1.07-.59,2.06-1.52,2.59l-61.4,35.33c-1.86,1.07-4.14,1.07-6,0l-83.5-48.33Z"
                />
                <path
                  id="trackpad"
                  className="cls-23"
                  d="m113.29,127.54l36.23,20.85c1.24.72,2.77.71,4.01-.01l13.01-7.59c1.43-.83,1.43-2.9,0-3.73l-35.99-20.88c-1.29-.75-2.89-.75-4.18,0l-13.1,7.63c-1.43.83-1.43,2.9,0,3.73Z"
                />
                <g id="keyboard">
                  <g id="keyRow1">
                    <polygon
                      className="cls-19"
                      points="145.67 88.15 140.82 91 145.67 93.74 150.51 90.94 145.67 88.15"
                    />
                    <polygon
                      className="cls-23"
                      points="203.6 121.36 198.74 124.22 209.66 130.53 214.5 127.73 203.6 121.36"
                    />
                    <polygon
                      className="cls-23"
                      points="152.08 91.79 147.22 94.65 152.08 97.38 156.92 94.59 152.08 91.79"
                    />
                    <polygon
                      className="cls-23"
                      points="158.49 95.27 153.64 98.13 158.49 100.86 163.33 98.07 158.49 95.27"
                    />
                    <polygon
                      className="cls-23"
                      points="164.9 98.92 160.04 101.77 164.9 104.51 169.74 101.71 164.9 98.92"
                    />
                    <polygon
                      className="cls-23"
                      points="171.32 102.86 166.46 105.72 171.32 108.45 176.16 105.66 171.32 102.86"
                    />
                    <polygon
                      className="cls-23"
                      points="177.72 106.51 172.87 109.37 177.72 112.1 182.56 109.3 177.72 106.51"
                    />
                    <polygon
                      className="cls-19"
                      points="184.14 109.99 179.28 112.85 184.14 115.58 188.98 112.78 184.14 109.99"
                    />
                    <polygon
                      className="cls-19"
                      points="190.54 113.63 185.69 116.49 190.54 119.22 195.38 116.43 190.54 113.63"
                    />
                    <polygon
                      className="cls-23"
                      points="197.03 117.39 192.17 120.25 197.03 122.98 201.87 120.18 197.03 117.39"
                    />
                  </g>
                  <g id="keyRow2">
                    <polygon
                      className="cls-23"
                      points="139.31 92.05 134.46 94.91 145.38 101.22 150.22 98.42 139.31 92.05"
                    />
                    <polygon
                      className="cls-19"
                      points="197.72 125.33 192.87 128.19 203.79 134.5 208.63 131.7 197.72 125.33"
                    />
                    <polygon
                      className="cls-23"
                      points="157.81 103.06 152.95 105.92 157.81 108.65 162.65 105.86 157.81 103.06"
                    />
                    <polygon
                      className="cls-19"
                      points="164.23 107.01 159.37 109.87 164.23 112.6 169.07 109.81 164.23 107.01"
                    />
                    <polygon
                      className="cls-19"
                      points="170.07 111.03 165.21 113.89 170.07 116.62 174.91 113.83 170.07 111.03"
                    />
                    <polygon
                      className="cls-23"
                      points="177.05 114.14 172.19 116.99 177.05 119.72 181.89 116.93 177.05 114.14"
                    />
                    <polygon
                      id="color2"
                      className="cls-15"
                      points="183.45 117.78 178.6 120.64 183.45 123.37 188.29 120.57 183.45 117.78"
                    />
                    <polygon
                      className="cls-19"
                      points="189.94 121.54 185.08 124.39 189.94 127.12 194.78 124.33 189.94 121.54"
                    />
                    <polygon
                      className="cls-19"
                      points="151.66 99.34 146.8 102.19 151.66 104.93 156.5 102.13 151.66 99.34"
                    />
                  </g>
                  <g id="keyRow3">
                    <polygon
                      className="cls-23"
                      points="132.67 96.38 127.81 99.24 138.74 105.54 143.58 102.75 132.67 96.38"
                    />
                    <polygon
                      className="cls-23"
                      points="191.08 129.66 186.22 132.52 197.15 138.83 201.99 136.03 191.08 129.66"
                    />
                    <polygon
                      className="cls-23"
                      points="151.17 107.39 146.31 110.25 151.17 112.98 156.01 110.19 151.17 107.39"
                    />
                    <polygon
                      className="cls-23"
                      points="157.59 111.34 152.73 114.19 157.59 116.93 162.42 114.13 157.59 111.34"
                    />
                    <polygon
                      className="cls-23"
                      points="163.99 114.98 159.13 117.84 163.99 120.57 168.83 117.78 163.99 114.98"
                    />
                    <polygon
                      className="cls-19"
                      points="170.41 118.46 165.55 121.32 170.41 124.05 175.25 121.26 170.41 118.46"
                    />
                    <polygon
                      className="cls-23"
                      points="176.81 122.11 171.95 124.96 176.81 127.7 181.65 124.9 176.81 122.11"
                    />
                    <polygon
                      className="cls-23"
                      points="183.3 125.86 178.44 128.72 183.3 131.45 188.14 128.66 183.3 125.86"
                    />
                    <polygon
                      className="cls-23"
                      points="145.02 103.66 140.16 106.52 145.02 109.25 149.86 106.46 145.02 103.66"
                    />
                  </g>
                  <g id="keyRow4">
                    <polygon
                      className="cls-19"
                      points="125.4 100.65 120.54 103.51 131.47 109.81 136.3 107.02 125.4 100.65"
                    />
                    <polygon
                      className="cls-19"
                      points="183.81 133.93 178.95 136.79 189.87 143.1 194.71 140.3 183.81 133.93"
                    />
                    <polygon
                      className="cls-19"
                      points="143.9 111.66 139.04 114.52 169.59 131.73 174.43 128.93 143.9 111.66"
                    />
                    <polygon
                      className="cls-19"
                      points="176.03 130.13 171.17 132.99 176.03 135.72 180.87 132.93 176.03 130.13"
                    />
                    <polygon
                      id="color1"
                      className="cls-18"
                      points="137.75 107.93 132.89 110.79 137.75 113.52 142.58 110.73 137.75 107.93"
                    />
                  </g>
                </g>
                <path
                  id="sreenBack"
                  className="cls-19"
                  d="m237.89,115.92v-62.85c0-3.57-1.9-6.87-5-8.66L157.49.84c-4.12-2.38-9.28.59-9.28,5.35v62.9c0,3.57,1.91,6.87,5,8.66l75.41,43.53c4.12,2.38,9.27-.6,9.27-5.35Z"
                />
                <g id="screenContent">
                  <g id="screen">
                    <path d="m229.4,122.7c-.91,0-1.77-.24-2.58-.7l-75.41-43.53c-2.78-1.6-4.5-4.59-4.5-7.79V7.78c0-3.21,2.7-5.19,5.19-5.19.91,0,1.77.24,2.58.71l75.41,43.58c2.77,1.6,4.5,4.59,4.5,7.79v62.85c0,1.43-.56,2.75-1.58,3.73-.97.93-2.29,1.46-3.61,1.46h0Z" />
                    <path
                      className="cls-21"
                      d="m152.11,3.59c.73,0,1.43.19,2.08.57l75.41,43.58c2.47,1.42,4,4.08,4,6.93v62.85c0,2.59-2.18,4.19-4.19,4.19-.73,0-1.43-.19-2.08-.57l-75.41-43.53c-2.47-1.42-4-4.08-4-6.93V7.78c0-2.59,2.18-4.19,4.19-4.19m0-2c-3.23,0-6.19,2.58-6.19,6.19v62.9c0,3.57,1.91,6.87,5,8.66l75.41,43.53c1,.57,2.05.84,3.08.84,3.23,0,6.19-2.58,6.19-6.19v-62.85c0-3.57-1.9-6.87-5-8.66L155.19,2.42c-1-.58-2.05-.84-3.08-.84h0Z"
                    />
                  </g>
                  <polygon
                    id="button"
                    className="cls-22"
                    points="164.8 63.04 164.72 71.47 179 79.91 178.92 71.16 164.8 63.04"
                  />
                  <g id="password">
                    <g id="asterisk">
                      <path
                        className="cls-17"
                        d="m169.59,55.41l1.24-1.92-2.29.19v-1.6s2.27.13,2.27.13l-1.31-1.88,1.37-.83,1.04,2.05.98-2.06,1.38.77-1.24,1.91,2.29-.19v1.6s-2.27-.13-2.27-.13l1.3,1.87-1.37.83-1.04-2.05-.98,2.06-1.38-.77Z"
                      />
                      <path
                        className="cls-17"
                        d="m177.76,59.98l1.24-1.92-2.29.19v-1.6s2.27.13,2.27.13l-1.31-1.88,1.37-.83,1.04,2.05.98-2.06,1.38.77-1.24,1.91,2.29-.19v1.6s-2.27-.13-2.27-.13l1.3,1.87-1.37.83-1.04-2.05-.98,2.06-1.38-.77Z"
                      />
                      <path
                        className="cls-17"
                        d="m185.93,64.54l1.24-1.92-2.29.19v-1.6s2.27.13,2.27.13l-1.31-1.88,1.37-.83,1.04,2.05.98-2.06,1.38.77-1.24,1.91,2.29-.19v1.6s-2.27-.13-2.27-.13l1.3,1.87-1.37.83-1.04-2.05-.98,2.06-1.38-.77Z"
                      />
                      <path
                        className="cls-17"
                        d="m194.11,69.11l1.24-1.92-2.29.19v-1.6s2.27.13,2.27.13l-1.31-1.88,1.37-.83,1.04,2.05.98-2.06,1.38.77-1.24,1.91,2.29-.19v1.6s-2.27-.13-2.27-.13l1.3,1.87-1.37.83-1.04-2.05-.98,2.06-1.38-.77Z"
                      />
                      <path
                        className="cls-17"
                        d="m202.28,73.67l1.24-1.92-2.29.19v-1.6s2.27.13,2.27.13l-1.31-1.88,1.37-.83,1.04,2.05.98-2.06,1.38.77-1.24,1.91,2.29-.19v1.6s-2.27-.13-2.27-.13l1.3,1.87-1.37.83-1.04-2.05-.98,2.06-1.38-.77Z"
                      />
                    </g>
                    <polygon
                      id="oulineBox"
                      className="cls-4"
                      points="164.9 39.63 164.75 56.42 211.34 83.59 211.18 66.18 164.9 39.63"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
