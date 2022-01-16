import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ContentTable from '../Components/Post/ContentTable'
import PostHeader from '../Components/Post/PostHeader';
import Summary from '../Components/Post/Summary';
import SmallJoin from '../Components/SmallJoin';
import MostViewed from '../Components/Home/MostViewed';
import Profit from '../Components/Profit';
import { getPost } from '../Service/api';
import { useParams } from 'react-router-dom';

const Post = () => {
    const [post, setpost] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const data = await getPost({ id }.id);
            setpost(data);
        }
        getData();
    }, []);

    // console.log(JSON.stringify(post));
    // console.log(JSON.parse(JSON.stringify(post)))


    return (
        <div className='container'>
            <Header />
            <PostHeader data={post} />
            <ContentTable content={post.content} table={post.tablecontent} />
            <SmallJoin />
            <Profit />
            <Summary content={post.summary} />
            <SmallJoin />
            <MostViewed head="Recommended for you" />
            <Footer />
        </div>
    )
}

export default Post
