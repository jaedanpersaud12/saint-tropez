import React from "react"
import HostData from "../data/hosts.json"
import HostCard from "./HostCard"

function HostsSection() {
  const DisplayData = HostData.map(({ name, bio, src }) => {
    //Destructure the objects returned from the json and get the employee information.
    return <HostCard key={name} hostName={name} src={src} bio={bio} />
  })
  return (
    <div className="bg-plant">
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-7xl gap-x-12 gap-y-12 px-10 py-20">
        {DisplayData}
      </div>
    </div>
  )
}

export default HostsSection
