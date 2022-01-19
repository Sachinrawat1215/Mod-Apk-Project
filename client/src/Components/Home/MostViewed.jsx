import React from 'react'
import CardContainer from './CardContainer';
// import Temporary from './Temporary';

const MostViewed = (props) => {
    // const [post, setpost] = useState();1
    // let data = props.element;
    // console.log(props.element || 'Loading...');

    return (
        <div className='mostviewed'>
            <h1>{props.head}</h1>
            {/* <center><p>Loading...</p></center> */}

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
                <CardContainer data={props.element} length={10} />
            </div>
        </div>
    )
}

export default MostViewed;