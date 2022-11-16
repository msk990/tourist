import * as React from "react"

const Star = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 16"
    style={{
      enableBackground: "new 0 0 17 16",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: "#fcdb54",
      }}
      d="m13.64 16-5.17-2.61-5.19 2.57.88-5.74L.11 6.07l5.72-.94L8.53 0l2.66 5.16 5.7.98-4.08 4.12z"
    />
  </svg>
)

export default Star
