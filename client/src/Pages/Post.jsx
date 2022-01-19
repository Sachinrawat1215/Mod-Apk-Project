import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ContentTable from '../Components/Post/ContentTable'
import PostHeader from '../Components/Post/PostHeader';
import Summary from '../Components/Post/Summary';
import SmallJoin from '../Components/SmallJoin';
import MostViewed from '../Components/Home/MostViewed';
import Profit from '../Components/Profit';
import { getPost, getAllPost } from '../Service/api';
import { useParams } from 'react-router-dom';

const Post = () => {
    const [post, setpost] = useState({});
    const [alldata, setalldata] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const data = await getPost({ id }.id);
            const postdata = await getAllPost();
            setpost(data);
            let finaldata = postdata.slice(0, 10);
            setalldata(finaldata);
        }
        getData();
    }, []);

    // console.log(alldata);
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
            <MostViewed head="Recommended for you" element={alldata} />
            <Footer />
        </div>
    )
}

export default Post
