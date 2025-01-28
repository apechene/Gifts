import React, { useState, useEffect } from 'react';
import UseFetchGifts from '../hooks/UseFetchGifts';
import { GifItem } from './GifItem';

export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=noGbpKU5eryztFwk2iPMozfIUwGcmowS`;
    const resp = await fetch(url);
    const { data } = await resp.json();



    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));

    return gifs;
}

export const Gifgrid = ({ category }) => {

    const {gifs, setLoading} = UseFetchGifts(category);

    //const [gifs, setGifs] = useState([]);
   // const [loading, setLoading] = useState(true);




   // useEffect(() => {
   //     getGif(category).then(setGifs);
     
   // }, [category]) // Si la categoria cambia, se vuelve a ejecutar el useEffect;
    

    return (
        <>
            <h3>{category}</h3>

            {setLoading && <p>Loading...</p>}
            


            <div className="card-grid">
                {gifs.map(( gifs ) => (
                    < GifItem key={ gifs.id } {...gifs} />
                ))}
            </div>
        </>
    );
}