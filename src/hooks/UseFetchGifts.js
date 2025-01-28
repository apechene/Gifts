import React, { useEffect, useState } from 'react'
import { getGif } from '../components/GifGrid';

export default function UseFetchGifts( category) {

   const [gifs, setGifs] = useState([]);
   const [loading, setLoading] = useState(true);
  
  
  
  
    useEffect(() => {
     getGif(category).then(setGifs);
       
     setLoading(false)}, [category]) // Si la categoria cambia, se vuelve a ejecutar el useEffect;
      

  return {
  
    gifs,
    loading

  }

  
}
