import React from "react"

function NavLink({ title }) {
  return (
    <div>
      <li className="sans-serif font-bold tracking-wide text-gray-100 hover:text-transparent hover:bg-clip-text uppercase hover:bg-gradient-to-r hover:from-dark-gold hover:to-light-gold">
        <a href="javascript:void(0)">{title}</a>
      </li>
    </div>
  )
}

export default NavLink
