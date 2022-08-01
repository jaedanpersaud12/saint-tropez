import React from "react"
import Link from "next/link"
function BackLink() {
  return (
    <div>
      <Link href="/menu">
        <a className="hover:opacity-70 transition duration-200">
          <div className="flex items-center">
            <img className="h-4 " src="/back.png" alt="" />
            <h1 className="text-white pl-3 font-bold text-base">
              Back to Menu
            </h1>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default BackLink
