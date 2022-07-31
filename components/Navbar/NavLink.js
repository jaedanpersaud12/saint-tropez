import Link from "next/link"
import React from "react"

function NavLink({ title, color, href }) {
  return (
    <div>
      <li
        className={`${color} ${
          color == "text-black"
            ? "hover:opacity-70"
            : "hover:text-transparent transition-colors duration-200 hover:bg-clip-text hover:bg-gradient-to-r hover:from-dark-gold hover:to-light-gold"
        }  sans-serif font-bold tracking-wide  uppercase `}
      >
        <Link href={href}>
          <a>{title}</a>
        </Link>
      </li>
    </div>
  )
}

export default NavLink
