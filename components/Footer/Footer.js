import React from "react"
import NavLink from "../Navbar/NavLink"

function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-br from-dark-gold to-light-gold sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h5 className="serif uppercase mx-auto text-3xl font-bold text-black sm:text-4xl xl:text-5xl font-pj">
            Saint Tropez
          </h5>
        </div>

        <hr className="mt-12 border-black md:mt-20" />

        <div className="mx-auto mt-10 flex flex-col lg:flex-row items-center justify-between md:mt-16">
          <ul className=" flex items-center space-x-6 sm:space-x-12">
            <NavLink title={"Home"} href={"/"} color={"text-black"} />
            <NavLink title={"Hosts"} href={"/"} color={"text-black"} />
            <NavLink title={"Menu"} href={"/"} color={"text-black"} />
            <NavLink title={"Gallery"} href={"/"} color={"text-black"} />
          </ul>

          <p className="mt-8 text-lg font-normal text-black lg:mt-0 font-pj">
            © Copyright 2021, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
