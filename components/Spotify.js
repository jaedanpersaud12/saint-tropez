import React from "react"

function Spotify() {
  return (
    <div>
      <div className="bg-plant mx-auto flex justify-center py-10">
        <iframe
          src="https://open.spotify.com/embed/playlist/6FMAuQCAwBL2Z7U9h9nq8e?utm_source=generator&theme=0"
          width="55%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  )
}

export default Spotify
