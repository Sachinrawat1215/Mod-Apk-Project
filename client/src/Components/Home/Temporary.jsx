import React from 'react';
import { Link } from 'react-router-dom';

const Temporary = (props) => {
    console.log(props.element);
    let title = props.element.title;
    let finalTitle = title.slice(0, 40);
    // console.log(finalTitle);

    return (
        <Link to="/post">
            <div className="single">
                <div className="left">
                    <img src={props.element.image} alt="" />
                </div>
                <div className="right">
                    <p className="name">{finalTitle}...</p>
                    <div className='down'>
                        <div className="version">
                            <img src="Images/up-arrow.png" alt="" />
                            <p>v{props.element.version}</p>
                        </div>
                        <div className="category">
                            <p>{props.element.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Temporary;
