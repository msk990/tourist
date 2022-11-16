import * as React from "react"

const Sharable = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    style={{
      enableBackground: "new 0 0 32 32",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M14.3 13.7c0-.1 0-.2-.1-.3L7.3 6.3c-.1-.1-.2-.1-.3-.1s-.2 0-.3.1c-2 2-3.1 4.6-3.1 7.4 0 2.1.7 4.2 1.9 6 .1.1.2.2.3.2.1 0 .2 0 .2-.1l8.1-5.7c.1-.1.2-.2.2-.4z"
      style={{
        fill: "none",
        stroke: "#111",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M17.8 4.9h-.5v10.6L9 21.3c1.9 2.8 5.1 4.6 8.7 4.6 5.8 0 10.5-4.7 10.5-10.5S23.5 4.9 17.8 4.9z"
      style={{
        fill: "none",
        stroke: "#111",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
    />
  </svg>
)

export default Sharable
