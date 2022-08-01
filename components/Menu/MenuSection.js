import React from "react"
import MenuData from "../data/menu.json"
import MenuCard from "./MenuCard"

function MenuSection() {
  const DisplayData = MenuData.map(({ src, title, link }) => {
    //Destructure the objects returned from the json and get the employee information.
    return <MenuCard key={title} title={title} src={src} link={link} />
  })
  return (
    <div className="bg-plant ">
      <h1 className="text-center  pt-20 serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-gold to-light-gold uppercase">
        Dinner Menu
      </h1>
      <div className="max-w-7xl px-10 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20">
        {DisplayData}
      </div>
    </div>
  )
}

export default MenuSection
