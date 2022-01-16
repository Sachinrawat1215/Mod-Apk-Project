import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Profit from '../Components/Profit';
import SmallJoin from '../Components/SmallJoin';
import Thanks from '../Components/Thanks';

const Download = () => {
    return (
        <div className="container">
            <Header />
            <Thanks />
            <Profit />
            <SmallJoin />
            <Footer />
        </div>
    )
}

export default Download;