import React, {useState, useEffect} from 'react';
import { getAllPost } from '../../Service/api';
import Category from '../Home/Category';
import MostViewed from '../Home/MostViewed';

function useQueryParams() {
    const params = new URLSearchParams(
      window ? window.location.search : {}
    );

    return new Proxy(params, {
        get(target, prop) {
            return target.get(prop)
        },
    });
}

const Content = () => {
    const [post, setpost] = useState([]);
    const {category} = useQueryParams();

    useEffect(() => {
        const getPosts = async () => {
            const data = await getAllPost();
            setpost(data);
        }
        getPosts();
    }, [])

    // console.log(category);


    const filterFunction = () => {
        if(category === 'All'){
            // console.log('this is if')
            return post;
        }else{
            // console.log('this is else')
            return post.filter((element) => {
                return element.category === category
            })
        }
    }

    const filterData = filterFunction();
    // console.log(filterData);

    return (
        <div className='filter-content'>
            <Category />
            {/* <h1>{category} Apk</h1> */}
            <MostViewed head={`${category} Apk`} element={filterData} />
        </div>
    )
}

export default Content;