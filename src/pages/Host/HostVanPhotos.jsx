import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
  const { imageUrl } = useOutletContext()
  return <img src={imageUrl} className="host-van-detail-image" />
}

export default HostVanPhotos
