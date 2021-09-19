import * as React from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";

export const GifGrid = (({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInDownBig">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {/*Cuando no se ponen {} y se pone () es un return implicito!!*/}
                {images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                    /*<li key={id}> {title} </li>*/
                ))}
            </div>


        </>

    );
});