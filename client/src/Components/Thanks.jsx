import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Thanks = (props) => {
    const [btnDisplay, setbtnDisplay] = useState("none");
    const [textDisplay, settextDisplay] = useState("display");
    const [num, setnum] = useState(10);

    setInterval(() => {
        setnum(num - 1);
    }, 1000);

    setTimeout(() => {
        settextDisplay('none');
        setbtnDisplay('block')
    }, 10000);

    const redirect = () => {
        window.open(props.data.downloadlink);
    }

    return (
        <div className='thanks-container' id='thanks'>
            <p>Thank you for downloading {props.data.name} from our site. Just press the button button and the file will be automatically downloaded</p>

            <h2>{props.data.title}</h2>

            <div className="app-name">
                <p>{props.data.name} {props.data.version}</p>
                <p>File Size: 20MB</p>
            </div>

            <button onClick={redirect} style={{ boxShadow: "0px 0px 5px 4px rgba(20, 37, 92, 0.3)", display: btnDisplay }}>Download</button>

            <p className='red' style={{ display: textDisplay }}>Please wait {num} Seconds</p>

        </div>
    )
}

export default Thanks;