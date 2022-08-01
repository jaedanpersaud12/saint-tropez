import Link from "next/link"
import React from "react"
import TapasData from "../data/tapas.json"
import BackLink from "./BackLink"
import FoodCard from "./FoodCard"

function TapasSection({}) {
  const DisplayData = TapasData.map(({ title, src, price }) => {
    //Destructure the objects returned from the json and get the employee information.
    return <FoodCard key={title} title={title} price={price} src={src} />
  })
  return (
    <div className="bg-plant ">
      <div className="max-w-7xl px-10 py-10 lg:py-20   mx-auto">
        <div className="">
          <h1 className="text-white pb-10 text-3xl lg:text-4xl serif font-bold uppercase">
            Tapas
          </h1>
          <div className="pb-10">
            <BackLink />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10">
          {DisplayData}
        </div>
      </div>
    </div>
  )
}

export default TapasSection
