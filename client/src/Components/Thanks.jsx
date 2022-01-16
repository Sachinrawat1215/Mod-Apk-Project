import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => {
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
        window.open('https://mega.nz/file/Rh8SgC5R#YZJnQ0qPXUfhr-rwuCmPXrBb92zYS50Sk9H9Y_AsCW4');
    }

    return (
        <div className='thanks-container' id='thanks'>
            <p>Thank you for downloading Netflix from our site. Just press the button button and the file will be automatically downloaded</p>

            <h2>Netflix MOD APK Download v8.11.3 January 2022 Updated [100% Premium Working]</h2>

            <div className="app-name">
                <p>Netflix v8.0.0</p>
                <p>File Size: 20MB</p>
            </div>

            <button onClick={redirect} style={{ boxShadow: "0px 0px 5px 4px rgba(20, 37, 92, 0.3)", display: btnDisplay }}>Download</button>

            <p className='red' style={{ display: textDisplay }}>Please wait {num} Seconds</p>

        </div>
    )
}

export default Thanks;