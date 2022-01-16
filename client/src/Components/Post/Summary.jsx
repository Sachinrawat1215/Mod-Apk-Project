import React from 'react';
import { Link } from 'react-router-dom';
import JsxParser from 'react-jsx-parser';

const Summary = (props) => {

    return (
        <div className='summary-container'>
            <h1>Final Words</h1>

            <p>So this is our guide about Netflix Mod Apk and by following this guide and steps you can access the file on your device and watch all the movies and tv shows for free. This is a 100% working method and if you find anything hard then simply leave a comment below.</p>

            <p>You can share this post with your friends on all your social media accounts so they can also get benefit from this. It will help them and you can communicate in a better way with your friends. You all will have a good topic to discuss on and you can also suggest tv shows and movies to them and get their suggestions as well. So share it with them.</p>

            <h1 id='downloadBtn'>Summary</h1>

            <div className="content">
                <div className="left">
                    <JsxParser jsx={props.content} />
                </div>

                <div className="right">
                    <p className='rating'>4.8</p>
                    <p>Out of 5</p>
                    <div className="length">
                        <div className="point"></div>
                    </div>
                </div>
            </div>
            <button style={{boxShadow: "0px 0px 5px 4px rgba(20, 37, 92, 0.3)"}}>
                <Link to="/download">Download &nbsp;<i className="fas fa-download"></i>&nbsp;&nbsp; ( 15 MB )</Link>
            </button>
        </div>
    )
}

export default Summary;