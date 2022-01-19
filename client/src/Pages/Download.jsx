import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Profit from '../Components/Profit';
import SmallJoin from '../Components/SmallJoin';
import Thanks from '../Components/Thanks';
import { getDownloadLink } from '../Service/api';

const Download = () => {
    const [post, setpost] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const data = await getDownloadLink({ id }.id);
            setpost(data);
        }
        getData();
    }, []);

    return (
        <div className="container">
            <Header />
            <Thanks data={post} />
            <Profit />
            <SmallJoin />
            <Footer />
        </div>
    )
}

export default Download;