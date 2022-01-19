import React, {useState, useEffect} from 'react'
import Temporary from './Temporary';
import { getAllPost } from '../../Service/api';

const CardContainer = (props) => {
    const [post, setpost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let alldata = await getAllPost();
            alldata = alldata.slice(0, props.length);
            setpost(alldata);
            // setpost(props.data);
        }
        fetchData();
    }, [])

    // console.log(`props ${props.data}`);
    // console.log(`post ${post}`);
    const result = () => {
        if(window.location.pathname === '/'){
            return post;
        }else if(window.location.pathname === '/filter/'){
            return props.data;
        }else{
            return post;
        }
    }

    let finalResult = result();
    // console.log(finalResult);
    // console.log(window.location.pathname);

    return (
        finalResult.map((element, index) => {
            return <Temporary element={element} key={index} />
        })
        // <h1>hello sir</h1>

    )
}

export default CardContainer;