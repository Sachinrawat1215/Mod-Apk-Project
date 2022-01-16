import React from 'react'
import CardContainer from './CardContainer';
// import Temporary from './Temporary';

const MostViewed = (props) => {
    // const [post, setpost] = useState()
    let data = props.element;
// console.log(data);

    return (
        <div className='mostviewed'>
            <h1>{props.head}</h1>
            <div className="container">
                {/* <Temporary />
                <Temporary />
                <Temporary />
                <Temporary />
                <Temporary />
                <Temporary />
                <Temporary />
                <Temporary />
                <Temporary />
                <Temporary /> */}
                <CardContainer data={data} />
            </div>
        </div>
    )
}

export default MostViewed;