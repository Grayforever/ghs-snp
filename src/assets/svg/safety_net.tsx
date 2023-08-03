import SvgIcon from "@mui/material/SvgIcon";

export default function SafetyNet() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={815}
        height={316}
        viewBox="0 0 815 316"
      >
        <defs>
          <filter
            id="a"
            x={586}
            y={22}
            width={229}
            height={294}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dx={3} dy={3} />
            <feGaussianBlur result="blur" />
            <feFlood floodColor="#d4f7e8" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g data-name="Group 11152">
          <g data-name="Group 10916">
            <text
              data-name="Safegurading the future of Adolescents"
              transform="translate(-203 -1166) translate(0 -5) translate(308 1475)"
              fill="#4f9a0a"
              fontSize={35}
              fontFamily="Lexend"
              fontWeight={300}
            >
              <tspan x={0} y={0}>
                {"Safegurading The Future Of Adolescents"}
              </tspan>
            </text>
            <g data-name="Group 10915">
              <text
                transform="translate(-203 -1166) translate(0 -5) translate(0 -36) translate(203 1379)"
                fontSize={229}
                fontFamily="JamesStroker, James Stroker"
              >
                <tspan x={0} y={0}>
                  {"Safety"}
                </tspan>
              </text>
              <g
                transform="translate(-203 -1166) translate(0 -5) translate(0 -36) translate(203 1207)"
                filter="url(#a)"
              >
                <text
                  data-name="Net"
                  transform="translate(586 231)"
                  fill="#4f9a0a"
                  fontSize={152}
                  fontFamily="MidnightSignature, Midnight Signature"
                >
                  <tspan x={0} y={0}>
                    {"Net"}
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
}
