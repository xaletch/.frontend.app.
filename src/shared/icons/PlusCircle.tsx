import type { SVGProps } from "react";
const SvgPlusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F5C71A"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
      opacity={0.2}
    />
    <path
      stroke="#F5C71A"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      stroke="#F5C71A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.25 12h7.5M12 8.25v7.5"
    />
  </svg>
);
export default SvgPlusCircle;
