import React from 'react'

export default function ImageItem({image}) {
  return (
    <div>
        <img src={image.urls.small} alt="" />
    </div>
  )
}
