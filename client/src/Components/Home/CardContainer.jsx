import React, {useState, useEffect} from 'react'
import Temporary from './Temporary';
import { getAllPost } from '../../Service/api';

const CardContainer = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const alldata = await getAllPost();
            setdata(alldata);
        }
        fetchData();
    }, [])

    // console.log(data);

    return (
        data.map((element, index) => {
            return <Temporary element={element} key={index} />
        })
        // <h1>hello sir</h1>
    )
}

export default CardContainer;