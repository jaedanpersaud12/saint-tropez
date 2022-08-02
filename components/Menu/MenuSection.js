import React from "react"
import MenuData from "../data/menu.json"
import MenuCard from "./MenuCard"

function MenuSection() {
  const DisplayData = MenuData.map(({ src, title, link, key }) => {
    //Destructure the objects returned from the json and get the employee information.
    return <MenuCard key={key} title={title} src={src} link={link} />
  })
  return (
    <div className="bg-plant ">
      <div className="py-10 lg:py-20 max-w-7xl px-10 mx-auto">
        <h1 className="pb-10 lg:pb-20 serif text-3xl lg:text-4xl font-bold text-white uppercase">
          Dinner Menu
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {DisplayData}
        </div>
      </div>
    </div>
  )
}

export default MenuSection
