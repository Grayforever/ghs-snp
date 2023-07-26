import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function EqualityIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="107"
        height="107"
        viewBox="0 0 107 107"
      >
        <path
          id="equality"
          d="M90.1,8.917H57.958V0H49.042V8.917H16.9L0,57.2v2.987a20.063,20.063,0,0,0,40.125,0V57.2L26.344,17.833h22.7v80.25H17.833V107H89.167V98.083H57.958V17.833h22.7L66.875,57.2v2.987a20.062,20.062,0,0,0,40.125,0V57.2ZM20.063,71.333A11.157,11.157,0,0,1,9.144,62.417H30.981A11.16,11.16,0,0,1,20.063,71.333ZM29.385,53.5H10.74l9.322-26.63ZM86.938,26.87,96.26,53.5H77.62l9.322-26.63Zm0,44.463a11.157,11.157,0,0,1-10.918-8.917H97.86a11.16,11.16,0,0,1-10.918,8.917Z"
        />
      </svg>
    </SvgIcon>
  );
}
