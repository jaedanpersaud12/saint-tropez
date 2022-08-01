import Link from "next/link"
import React from "react"

function MenuCard({ src, title, link }) {
  return (
    <div>
      <div className="group relative">
        <Link href={link}>
          <a>
            <div className="relative w-full h-80 bg-white transition duration-200 cursor-pointer rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img
                src={src}
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                className="w-full h-full object-center object-cover"
              />
            </div>

            <h3 className="text-center mt-6 text-xl font-bold text-white">
              {title}
            </h3>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MenuCard
