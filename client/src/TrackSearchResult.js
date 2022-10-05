/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function TrackSearchResult({ track }) {
  return (
    <div className='d-flex m-2 align-items-center'>
      <img src={track.albumUrl} stlye={{ height: '64px', width: '64px' }} />
    </div>
  )
}
