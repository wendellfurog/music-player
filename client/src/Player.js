import React, { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null
  return (
    <div>
      <SpotifyPlayer 
        token={accessToken}
        showSavedIcon
        callback={state => {
          if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
      />
    </div>
  )
}
