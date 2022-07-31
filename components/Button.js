import React from "react"

function Button() {
  return (
    <div>
      <button class="transition bg-blue-500  hover:bg-indigo-500 duration-200 relative inline-flex items-center justify-center font-bold p-0.5 overflow-hidden text-sm uppercase text-light-gold rounded-lg group bg-gradient-to-br from-light-gold via-yellow-200 to-dark-gold group-hover:from-dark-gold group-hover:via-yellow-200 group-hover:to-dark-gold dark:text-black dark:hover:text-gray-900">
        <span class="sans-serif font-bold relative px-5 py-2.5 transition duration-200 text-dark-gold hover:text-black bg-black dark:bg-dark-gold rounded-md group-hover:bg-opacity-0">
          <a href="https://islandetickets.com/event/Sainttropez">Buy Tickets</a>
        </span>
      </button>
    </div>
  )
}

export default Button
