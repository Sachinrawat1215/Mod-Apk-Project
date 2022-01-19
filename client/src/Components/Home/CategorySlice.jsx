import React from 'react';

const CategorySlice = (props) => {
    let Getcolor = `rgba(${props.r}, ${props.g}, ${props.b}, 1)`;
    let Shadowcolor = `0px 0px 5px 4px rgba(${props.r}, ${props.g}, ${props.b}, 0.4)`;

    return (
        <div className="single" style={{ backgroundColor: Getcolor, boxShadow: Shadowcolor }}>
            <a href={`/filter/?category=${props.name}`}>
                <img src={props.imgUrl} alt="" />
                <p>{props.name}</p>
            </a>
        </div>
    )
}

export default CategorySlice;