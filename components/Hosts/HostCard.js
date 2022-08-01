import Image from "next/image"
import React from "react"

function HostCard({ src, hostName, bio }) {
  return (
    <div>
      <div className="max-w-[400px] mx-auto p-10 bg-opacity-69">
        <div className="w-52 h-52 relative mx-auto">
          <Image src={src} layout={"fill"} />
        </div>
        <h1 className="serif text-center py-5 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-gold to-light-gold uppercase">
          {hostName}
        </h1>
        <p className="text-white text-base text-center mx-auto">{bio}</p>
      </div>
    </div>
  )
}

export default HostCard
