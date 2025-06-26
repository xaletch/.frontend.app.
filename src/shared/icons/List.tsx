import type { SVGProps } from "react";
const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F5C71A"
      d="M7.125 20.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75M7.125 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75M16.875 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75M16.875 20.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75"
      opacity={0.2}
    />
    <path
      stroke="#F5C71A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.125 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75M16.875 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75M16.875 20.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75M7.125 20.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75"
    />
  </svg>
);
export default SvgList;
