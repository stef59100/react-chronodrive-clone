import React from 'react';

import './banners.scss';

export default function Banner(props) {

    return (

        <div className={`banner banner__${props.banners.id}`}><a href={props.banners.url} title={props.banners.title} >
            <img src={props.banners.src} alt={props.banners.title} className="img-fluid" />
        </a>
        </div>
    )
}