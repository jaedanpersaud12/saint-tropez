import { useState } from "react"
import Button from "../Button"
import NavLink from "./NavLink"

export default function NavBar() {
  const [navbar, setNavbar] = useState(false)

  return (
    <nav className="w-full bg-black shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h1 class="serif text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-gold to-light-gold uppercase">
                <a href="#"> Saint Tropez </a>
              </h1>
            </a>
            <div className="md:hidden flex align-center">
              <div className="mr-4">
                <Button />
              </div>
              <button
                className="p-2 text-gray-100 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <NavLink title={"Home"} href={""} />
              <NavLink title={"Hosts"} href={""} />
              <NavLink title={"Menu"} href={""} />
              <NavLink title={"Gallery"} href={""} />
              <div className={`${navbar ? "hidden" : "block"} pl-4`}>
                <Button />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
