import React, {useState} from 'react';
import RelatedApp from '../../Components/Post/RelatedApp';
import Join from '../Join';
import JsxParser from 'react-jsx-parser';


const ContentTable = (props) => {

    return (
        <div className='content-table'>
            <h2>Table of Content</h2>

            <ul id='list'>
                <JsxParser jsx={props.table} />
            </ul>

            <div className="rating-box">
                <p>Rating: <span className="red">4.6</span>/5 (55 votes)</p>
            </div>
            <JsxParser components={{RelatedApp, Join}} jsx={props.content} />
        </div>
    )
};

export default ContentTable;