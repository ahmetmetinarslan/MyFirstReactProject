import React from 'react'
import ImageItem from './ImageItem'

export default function ImageList({imagePlaceholders}) {
  return (
    <div className='ImageList'>
        {imagePlaceholders.map((image, index)=> {
            return <ImageItem image={image} key={index}/>
        })}
    </div>
  )
}
