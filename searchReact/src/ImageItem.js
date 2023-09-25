import React from 'react'

export default function ImageItem({image}) {
  return (
    <div>
        <img src={image.urls.small} alt="" />
    </div>
  )
}

/* 
Bu bileşen, verilen bir "image" nesnesini kullanarak bir resmi görüntüler.
"image.urls.small" prop, resmin küçük bir sürümünün URL'sini içerir.
*/
