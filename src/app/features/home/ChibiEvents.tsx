import * as React from "react"

const ChibiEvents = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    style={{
      enableBackground: "new 0 0 100 100",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        ".st1,.st2{stroke-miterlimit:10}.st1{fill:#fff;stroke:#fff;stroke-width:6}.st2{stroke:#020202;stroke-width:.5}"
      }
    </style>
    <g id="Layer_1">
      <path
        d="M83.6 21.7c-2.9-2.2-7-1.2-9.9 0-.1 0-.2.1-.4.2-.7-2.7-1.9-5.3-2.8-7 .2-.5.4-1 .7-1.7.5-1.4.3-3.1-.6-4.3-.9-1.3-2.3-2.1-3.8-2.1-2.3-.1-5.2-.3-6.8-.4C55 1.6 45 .5 42.9.3h-.4c-7.4 0-16.8 7-18.6 8.5-10.3 5.6-10.2 20.6-9.9 25.1.1 1 .4 1.9.9 2.9.7 1.3 1.2 5.6 1.2 8.9 0 4.3 2 8 3.7 10.4 1 1.4 2.7 2.2 4.4 1.9.5-.1 1-.2 1.5-.5.7.7 1.5 1.5 2.5 2.4 1.5 1.5 3.7 1.9 5.6 1.3l-7.9 9.4-.2.3c-2.3 3.4-1 7.3 1.3 9.7l.2.2.2.2c2.5 1.9 6.5 2.2 11.8.9-2.6 14.1-1.6 15.4-.7 16.4.6.8 1.6 1.2 2.5 1.2h14c15.9 0 17.1-1.3 18-2.3.6-.7.9-1.6.9-2.5-.1-.7-.2-2.1-3.8-7.1-.1-.1-.1-.2-.1-.3V76.1c0-.1 0-.1.1-.2 1.3-1.3 1.9-3 1.7-4.8l-1.7-15.5L82 37.2c3.6-2 3.9-7 4-8.2.5-4.2-1.1-6.3-2.4-7.3z"
        style={{
          fill: "#fff",
        }}
      />
      <path
        className="st2"
        d="M51.4 92.2c.2.3.4.5.6.8.7 1.3.1 2.5-1.3 2.7-.5.1-1 0-1.4 0-1.2-.2-2.3-.2-3.5.3-.3.1-.6.2-.9.1-.2 0-.6-.4-.5-.5.1-.8-.2-1.7.6-2.3v.1c-.3-.6-.6-1-.7-1.4-.4-1.6-.1-3.3.2-4.9.6-3.6 1.3-7.1 2-10.7.1-.5.2-.9.3-1.5h-.5c-.6.1-.8-.2-.8-.7.1-.8.2-1.5.3-2.3.4-2.3.9-4.6 1.3-7 .1-.6-.3-1.1-.9-1.1-.2 0-.4.2-.6.4L40.5 72c-.3.5-.6 1.1-.9 1.7.8.4 1.4 1.1 1.5 2 .2 1.1-.2 1.5-1.3 1.3-.2 0-.5 0-.8.2-1 .5-1 .6-1.9-.2-.3.3-.7.6-1 1-.8.8-1.2.7-1.8-.2-.3 0-.7.1-1 .1-.9 0-1.2-.5-.8-1.2.2-.3.3-.6.5-.9 2.5-3.6 5.1-7.1 7.7-10.7.5-.7 1-1.5 1.5-2.2.2-.3.6-.6 1-.3s.2.6-.1 1c-1.5 2.1-3.1 4.2-4.6 6.3L34 76.5c.5.1 1 .3 1.5.4 1.6-1.2 1.7-1.3 2.7-.5.3-.1.5-.3.8-.4.3-.1.6-.1 1-.2l-.8-.8c-.8-.6-1-1-.5-1.9 1.2-2.1 2.4-4.2 3.7-6.2.7-1.2 1.6-2.3 2.5-3.6-.6-.4-1.2-.7-1.8-1.1-1.2-.8-1.3-1.2-.5-2.4 1.9-2.8 3.8-5.6 5.8-8.4.1-.1.2-.3.3-.5-2.8 0-5.2-1.2-7.7-1.8-.9-.2-1.8 0-2.7-.1-1.3 0-2.6 0-3.9-.2-1.4-.2-2.6-.8-3.4-2-.8-1.2-1.2-2.5-1-3.9.2-1.3 1.5-2.2 3-2 .9.1 1.8.4 2.7.6.2 0 .4 0 .7.1-.2-.3-.4-.6-.5-.8 0-.3.1-.6.2-.9.3.1.6.1.8.3.9 1.1 1.5 1.7 2.6 2.1l.1-.1c-.5-1.3.1-2.2 1.2-3 .3-.2.6-.5.9-.7 3.4-2.4 5.4-5.8 6.5-9.7.1-.5.2-1.1.3-1.6.1-.4.2-.8.6-.7.2.1.5.5.5.7-.2 1.3-.5 2.5-.9 3.7-.1.5-.4.9-.6 1.5.5-.1.8-.2 1.2-.2 1.5-.2 3.1-.3 4.6-.5.2 0 .5 0 .7.1.3.1.6.4.7.6 0 .5-.4.5-.8.5-1.3.1-2.5.1-3.8.2-1 .1-1.9.3-2.9.4-.1 0-.3.2-.4.3-1.3 2.6-3.4 4.4-5.6 6.1-1.3 1-1.2 1-.7 2.5.1.3.2.9 0 1.1-.2.2-.7.2-1.1.1-.4-.1-.8-.3-1.2-.5-.4-.2-.7-.4-1.1-.7-.5.6-1 .5-1.7.3-1.1-.4-2-.7-3-.9-1.4-.2-2.2.5-2.1 1.9.1 1.9 1.4 3.4 3.5 3.7 1.2.2 2.4.3 3.6.2 1.9-.1 3.7 0 5.4.8 3.3 1.4 6.7 1.3 10.1.4.2-.1.4-.1.7-.1 1.1-.2 1.6.2 1.3 1.4-.1.4-.2.7-.4 1.2h2.4c0-.2 0-.4.1-.5.1-.9.3-1.7 1.2-2.3 1.3-1 2.4-2.2 3.5-3.4.8-.8 1.6-1.8 2.2-2.7 1.1-1.5.8-3.6-.6-4.9-.5-.4-.7-.9-.8-1.5-.1-1-.2-2.1-.3-3.1 0-.6-.3-.8-.8-.8h-1c-.4 0-.9.1-1-.5.1-.6.6-.6 1-.6h1.4c.3-.8-1-1.5.3-2.2-.8-.6-1.5-1.2-2.2-1.7-.1 1.2-.2 2.3-.3 3.3 0 .3-.1.6-.3.9-.5 1-1.2 1.2-2 .4-.4-.4-.6-.5-1 0-.7 1-1.5.9-2-.2-.5-1.3-1.3-2.5-2.3-3.5-1.2-1.2-2.6-1.9-4.3-1.9-.2 0-.5.1-.7 0-.2-.1-.4-.4-.6-.6.2-.2.4-.5.6-.5 1.9-.1 3.7.3 5.1 1.6.7.6 1.3 1.3 1.9 2 .5.7.9 1.6 1.3 2.3.5-.2.9-.7 1.4-.7.5 0 1 .4 1.6.6.5-1.6.6-3.2-.3-4.8-.1-.1-.2-.2-.2-.3 0-.3 0-.5.1-.8.3 0 .6 0 .7.1 2 1.4 4.2 2.4 5.4 4.8.9-1.1 1.5-2.2 1.7-3.5.6-3.8-.8-6.9-3.3-9.6-.8-.8-.8-1.2.1-1.8.4-.3.8-.5 1.1-.9-2-.2-4-.3-6-.5-.3 0-.6-.1-.9-.2-1.4-.7-2.8-1.3-4.1-2.2-4.6-3.2-9.5-3.6-14.8-2.3-3.6.9-6.6 2.9-9.3 5.2-.2.2-.4.5-.6.7-.2.1-.5.2-.8.2 0-.3-.1-.6 0-.9.1-.3.4-.6.6-.8C33.2 8.6 39 6.4 45.7 6.9c2.9.2 5.5 1.3 7.9 2.9.6.4 1.3.9 2 1.2 1.2.7 2.4 1.2 3.9 1.2 1.9 0 3.9.3 5.8.5.3 0 .8.3.9.6.1.2-.1.7-.3.9-.6.6-1.3 1-1.8 1.4.8 1.2 1.7 2.3 2.3 3.6 1.9 3.7 2 7.4-.5 10.9-.2.3-.3.7-.5 1.1-.1.2-.3.4-.4.5-.2 0-.5-.1-.6-.3-.2-.3-.3-.6-.4-.9l-.1.1c.2 1.6.3 3.2.6 4.9.1.4.3.9.6 1.2 1.2 1.4 1.7 3 1.3 4.9 0 .1-.1.2-.1.3h.1c.4.3.8.7 1.2 1.1.5.6.9 1.3 1.3 1.9.5.7.5 1.4 0 2.1-.6.9-1.2 1.8-1.7 2.7-1.1 2-2.3 3.9-3.4 5.9-.2.3-.2.7-.2 1l.9 9.3c.1 1.8.1 3.6.2 5.4 0 .2.1.5.2.7.3.4.2.6-.1.9-.5.6-1.1.4-1.7.5-1.2.2-2.4.5-3.7.7-3.2.6-6.4.8-9.6.7-.5 0-1 .1-1.7.1-.3 1.7-.6 3.4-.9 5.2-.4 2.1-.8 4.1-1.2 6.2-.2 1.3-.3 2.6-.5 4 0 .4 0 .7.1 1.1.2.9.3.9 1 .5 1.5-.9 3.1-.8 4.8.3 0-.1 0-.1 0 0zm-4.7-18.5c5.5.5 10.8-.1 16.1-1.3.2 0 .4-.4.5-.6.1-1.4.2-2.8.1-4.3-.3-3.4-.7-6.7-1-10.1-.1-1.1.1-2.1.7-3 1.6-2.6 3.1-5.2 4.6-7.7.2-.3.4-.7.3-.9-.6-1.1-1-2.3-2.3-2.9-1.6 2.3-3.7 4.3-5.7 6.2-.8.7-1.2 1.5-1.1 2.6 0 .2-.3.5-.5.6-1.8.4-3.5.2-5.2-.2-.2 0-.4-.4-.4-.6 0-.2.3-.4.6-.4.3-.1.6 0 .9.1.1-.4.2-.8.3-1.3-1.4.3-2.7.5-4 .8-.2 0-.3.2-.4.3-2.2 3.1-4.4 6.3-6.6 9.4-.1.1-.1.2-.2.4 1.1.6 2.3 1.3 3.4 1.8 1.3.7 1.8 1.5 1.5 2.9-.3 2-.7 4-1.1 6-.3.7-.4 1.4-.5 2.2zM45.2 95c1.6-.7 3.2-.6 4.7-.3.3 0 .5 0 .8-.1.5-.1.6-.5.4-.9-.4-.8-1.1-1.1-2-1.2-1.6-.2-3 .7-3.9 2.5z"
      />
      <path
        className="st2"
        d="M30.5 54.5c.1-.6.3-1.3.5-1.9.1-.2.3-.6.5-.6s.6.1.7.3c.7 1.3 2 1.9 3.2 2.5.2.1.4.1.5.3.2.2.2.5.4.8-.3.1-.6.3-.8.2-.7-.2-1.3-.6-1.9-.9L31.8 54c-.1.5-.2.9-.3 1.4-.2.9-.8 1.1-1.5.5-1.4-1.4-2.4-3-3.2-4.9-.3-.6-.3-1.4-.4-2.2-.6.5-1.3 1.1-1.9 1.6-.4.3-.8.9-1.4.7-.7-.3-.4-.9-.5-1.5-.2-2.4-.4-4.8-.7-7.1-.2-1.1-.5-2.2-1-3.2-1.5-3.1-1.8-6.3-1.1-9.6.7-3.5 1.6-6.9 3.4-10 .9-1.4 2-2.6 3.4-3.5.1-.1.3-.2.5-.2s.6.1.7.2c.1.2 0 .5-.2.7-.3.3-.7.5-1 .7-1.7 1.4-2.9 3.1-3.6 5.1-1.1 3-2 6-2.3 9.1-.2 2.1 0 4.2.9 6.1 1.3 2.6 1.6 5.5 1.9 8.3.1 1 .2 2.1.3 3.2.9-.7 1.8-1.3 2.7-2 .2-.1.4-.2.5-.3.4-.1.7.1.8.5v.6c-.5 2.6 1.1 4.4 2.5 6.3 0 0 .1-.1.2 0zM62.7 90.7c-.1-.3-.1-.7-.2-1.1-.3-.8-.2-1.7-.1-2.5.2-.9.3-1.9.2-2.8-.1-2.9-.4-5.8-.5-8.7 0-.3-.1-.7 0-1 .1-.3.4-.5.6-.7.2.2.5.4.5.7.1.7.1 1.5.1 2.3.2 2.7.4 5.3.5 8 0 .7 0 1.4-.2 2.1-.2.9-.3 1.7.1 2.6.3.7.3 1.5-.2 2.3l1.8.6c.4.2.8.4 1.1.8.5.6.2 1.5-.5 1.9-.1.1-.2.1-.4.2-1.8.3-3.6.7-5.4.9-1.8.2-2.4-.5-2.3-2.4v-.3c-1-.2-1.2-.3-1.1-1.4 0-2.8 0-5.6-.6-8.4-.2-1.1-.5-2.1-.7-3.2-.1-.4-.4-1 .3-1.1.6-.2.7.4.8.9 1 3.4 1.4 6.8 1.3 10.3v1.5c1.6-.7 3.2-1.1 4.9-1.5zm-3.9 2.1c.1.6.1 1 .1 1.3 0 .5.2.7.7.8h1.1c1.4-.2 2.7-.5 4.1-.7.2 0 .4-.2.8-.3-.3-.2-.5-.3-.7-.4-.9-.5-1.9-.9-2.8-1.4-.1 0-.2-.1-.3 0-1.1.2-2.1.5-3 .7zM63.8 41.1c-.1.4-.2 1-.5 1.5-1.1 1.9-2.7 3.2-4.9 3.8-1.5.4-2.9 0-3.9-1.1-1.1-1.1-2.1-2.3-3.1-3.6-.8-1.1-.6-2.5.1-3.7 1.5-2.7 4.1-3.5 6.8-4.3 2-.5 3.7.6 4.4 2.5.4 1 .6 2.1.9 3.1 0 .5.1 1.1.2 1.8zm-10.5-4c-.4.7-.7 1.4-1.1 2.1-.4.9-.2 1.6.4 2.3.8.9 1.6 1.9 2.5 2.8.8.9 1.9 1.3 3.1.9 1.7-.5 3-1.6 4-3 .2-.2.3-.5.3-.8.1-1.5-.3-2.9-.8-4.4-3.5 2.5-6.4 1.8-8.4.1zm7.8-1.2c-.4-.7-.9-1.2-1.8-1.2-1.9 0-3.4 1-5 1.7 1.9 1.6 4.9 1.4 6.8-.5zM79.3 31.4c-.2-.1-.4-.2-.5-.4-.3-.3-.2-.8.2-.9.8-.1.7-.7.7-1.2 0-.3-.2-.7-.4-.9-.6-.8-1.2-.8-1.7 0s-.8 1.7-1.3 2.4c-.2.3-.5.4-.8.6-.2.1-.4.2-.5.4-2.2 2.9-4.3 5.9-6.5 8.8-.2.3-.3.6-.5 1s-.4.6-.8.4c-.2-.1-.4-.6-.3-.8.3-.7.6-1.3 1.1-1.9 2.2-2.9 4.4-5.8 6.6-8.8.1-.1.2-.3.3-.3.8-.2 1-.9 1.3-1.5.2-.4.5-.9.7-1.2.7-.9 1.8-1 2.7-.4.2.1.4.3.5.5 1.3 1.7 1.2 5.1-1.2 6.2-.2.1-.4.2-.5.2-.8-.3-1.1.3-1.5.7l-7.2 9.3c-.1.1-.1.3-.2.3-.3.1-.6.2-.8.2 0-.3-.1-.6-.1-.9 0-.1.1-.1.1-.2 2.7-3.4 5.3-6.8 8-10.2.4-.5.8-.9 1.6-.6.4.2.8-.3 1-.8z"
      />
      <path
        className="st2"
        d="M51.4 92.2c0-.1 0-.1 0 0 0-.5-.2-.9-.1-1.3.7-2.8 1-5.7 1.2-8.6.1-1.8.6-3.5 2.4-4.4.5-.2 1-.3 1.6-.4.2 0 .4.3.6.5-.2.2-.3.4-.5.6-.1.1-.3 0-.4.1-1.1.3-1.9.8-2.2 1.9-.2.6-.4 1.2-.4 1.8-.1 3.1-.6 6.2-1.3 9.3-.1.5-.4.7-.9.5zM40.2 52.7c.4.1.6.1.8.2 1 .4 2.1.9 3.1 1.4.2.1.5.6.4.8-.1.5-.6.4-.9.2-.9-.4-1.8-.8-2.6-1.2-.5-.2-.8-.1-1.2.2-.5.6-1 1.1-1.6 1.6-.2.2-.5.4-.8.5-.2.1-.5-.1-.7-.2-.1-.1 0-.5.1-.6.8-.8 1.6-1.6 2.4-2.3.3-.3.7-.5 1-.6z"
      />
    </g>
  </svg>
)

export default ChibiEvents