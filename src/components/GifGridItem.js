import * as React from 'react';
//props
export const GifGridItem = (({id, title, url}) => {
    //props
    console.log({id, title, url});

    return (
        <div className="card animate__animated animate__fadeInDownBig">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
});