import React from "react"

function Button() {
  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer")
  }
  return (
    <div>
      <button
        onClick={() => {
          openInNewTab("https://islandetickets.com/event/Sainttropez")
        }}
        className="transition bg-blue-500  hover:bg-indigo-500 duration-200 relative inline-flex items-center justify-center font-bold p-0.5 overflow-hidden text-sm uppercase text-light-gold rounded-lg group bg-gradient-to-br from-light-gold via-yellow-200 to-dark-gold group-hover:from-dark-gold group-hover:via-yellow-200 group-hover:to-dark-gold dark:text-black dark:hover:text-gray-900"
      >
        <span className="sans-serif hover:text-black font-bold relative transition duration-200 text-dark-gold  bg-black dark:bg-dark-gold rounded-md group-hover:bg-opacity-0">
          <div className="uppercase px-5 py-2.5 text-transparent bg-clip-text bg-gradient-to-r from-dark-gold to-light-gold hover:text-black">
            Buy Tickets
          </div>
        </span>
      </button>
    </div>
  )
}

export default Button
