import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ContentTable from '../Components/Post/ContentTable'
import PostHeader from '../Components/Post/PostHeader';
import Summary from '../Components/Post/Summary';
import SmallJoin from '../Components/SmallJoin';
import MostViewed from '../Components/Home/MostViewed';
import Profit from '../Components/Profit';

const Post = () => {
    return (
        <div className='container'>
            <Header />
            <PostHeader />
            <ContentTable />
            <SmallJoin />
            <Profit />
            <Summary />
            <SmallJoin />
            <MostViewed head="Recommended for you" />
            <Footer />
        </div>
    )
}

export default Post
