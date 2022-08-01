import Image from "next/image"
import React from "react"

function FoodCard({ title, price, src }) {
  return (
    <div>
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <div className="relative aspect-video">
          <Image src={src} layout={"fill"} />
        </div>
      </div>
      <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
      <p className="mt-1 text-lg font-medium text-white">{price}</p>
    </div>
  )
}

export default FoodCard
