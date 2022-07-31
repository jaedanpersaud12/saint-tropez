import React from "react"

function Details() {
  return (
    <div>
      <div class="bg-black">
        <div class="max-w-7xl py-20 mx-auto sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 md:gap-5">
          <div className="px-10 md:px-0">
            <iframe
              className=""
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=The%20Anchorage,%20Hart's%20Cut+(My%20Business%20Name)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div class="text-center py-14 md:py-20 px-6 flex flex-col justify-center items-center">
            <h1 class="serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-gold to-light-gold uppercase">
              Details
            </h1>
            <p class="text-white pt-6 text-xl">
              <span class="font-bold">Date</span> - August 20th 2022
            </p>
            <p class="text-white pt-6 text-xl">
              <span class="font-bold">Dinner</span> - 6pm-10pm
            </p>
            <p class="text-white pt-6 text-xl">
              <span class="font-bold">Party</span> - 10pm-2am
            </p>
            <p class="text-white pt-6 text-xl">
              <span class="font-bold">Venue</span> - Anchorage on the Water
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
