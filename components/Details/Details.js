import React from "react"
import DetailsData from "../data/details.json"

function Details() {
  const DisplayData = DetailsData.map(({ date, dinner, party }) => {
    //Destructure the objects returned from the json and get the employee information.

    return (
      <div>
        <p className="text-white pt-6 text-xl">
          <span className="font-bold">Date</span> - {date}
        </p>
        <p className="text-white pt-6 text-xl">
          <span className="font-bold">Dinner</span> - {dinner}
        </p>
        <p className="text-white pt-6 text-xl">
          <span className="font-bold">Party</span> - {party}
        </p>
        <p className="text-white pt-6 text-xl">
          <span className="font-bold">Venue</span> - Anchorage on the Water
        </p>
      </div>
    )
  })
  return (
    <div>
      <div className="bg-black">
        <div className="max-w-7xl py-20 mx-auto sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 md:gap-5">
          <div className="px-10 md:px-0">
            <iframe
              className=""
              width="100%"
              height="400"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=The%20Anchorage,%20Hart's%20Cut+(My%20Business%20Name)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className="text-center py-14 md:py-20 px-6 flex flex-col justify-center items-center">
            <h1 className="serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-gold to-light-gold uppercase">
              Details
            </h1>
            {DisplayData}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
