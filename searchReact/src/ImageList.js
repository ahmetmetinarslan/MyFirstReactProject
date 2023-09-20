import React from 'react'
import ImageItem from './ImageItem'

// ImageList componentini tanımlar ve imagePlaceholders adında bir prop alır.
export default function ImageList({ imagePlaceholders }) {
  return (
    // Bir div elementi oluşturulur ve CSS sınıfı "ImageList" ile ilişkilendirilir.
    <div className='ImageList'>
      {imagePlaceholders.map((image, index) => {
        // Her bir öğe için ImageItem bileşeni oluşturulur ve "image" prop'u ile iletilir.
        return <ImageItem image={image} key={index} />;
      })}
    </div>
  );
}

