import React, { useState, useEffect } from 'react'
import Category from '../Components/Home/Category';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Join from '../Components/Join';
import MostViewed from '../Components/Home/MostViewed';
import SmallJoin from '../Components/SmallJoin';
import { getAllPost } from '../Service/api';

const Home = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const alldata = await getAllPost();
            setdata(alldata);
        }
        fetchData();
    }, [])

    // console.log(data.slice(0, 4))
    const topData = data.slice(0, 4);

    return (
        <div className='container'>
            <Header />
            <Category />
            <MostViewed head="Trending Apps" element={topData} />
            <SmallJoin />
            <MostViewed head="Latest Update" />
            <Join />
            <MostViewed head="Newly Added" />
            <SmallJoin />
            <Footer />
        </div>
    )
}

export default Home;