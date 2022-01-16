import React from 'react';
import { Link } from 'react-router-dom';

const RelatedApp = (props) => {
    let Getcolor = `rgba(${props.red}, ${props.green}, ${props.blue}, ${props.alpha})`;
    let Shadowcolor = `0px 0px 5px 4px rgba(${props.red}, ${props.green}, ${props.blue}, 0.4)`;

    return (
        <div className='related-app' style={{ border: '2px solid', borderColor: Getcolor }}>
            <header style={{ backgroundColor: Getcolor }}>Download {props.name}</header>
            <img src={props.image} alt="netflix image" />
            <Link to={props.url}>
                <button style={{ backgroundColor: Getcolor, boxShadow: Shadowcolor }}>Download {props.name}</button>
            </Link>
        </div>
    )
}

export default RelatedApp;