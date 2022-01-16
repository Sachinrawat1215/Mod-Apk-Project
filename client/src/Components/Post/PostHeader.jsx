import React from 'react'

const PostHeader = (props) => {
    // console.log(props.data);
    return (
        <header className='postheader'>
            <h2>{props.data.title}</h2>
            <div className='detail-box'>
                <div className="left">
                    <img src={props.data.image} alt="" />
                </div>
                <div className="right">
                    <div className="slice">
                        <div className="head">Name</div>
                        <div className="detail">{props.data.name}</div>
                    </div>
                    <div className="slice">
                        <div className="head">Publisher</div>
                        <div className="detail">{props.data.publisher}</div>
                    </div>
                    <div className="slice">
                        <div className="head">Genre</div>
                        <div className="detail">{props.data.category}</div>
                    </div>
                    <div className="slice">
                        <div className="head">Size</div>
                        <div className="detail">{props.data.size}</div>
                    </div>
                    <div className="slice">
                        <div className="head">Version</div>
                        <div className="detail">{props.data.version}</div>
                    </div>
                    <div className="slice">
                        <div className="head">Update</div>
                        <div className="detail">{props.data.updateddate}</div>
                    </div>
                    <div className="slice">
                        <div className="head">Get it on</div>
                        <a href="/">
                            <div className="detail">
                                <img src="Images/google-play.png" alt="" />
                                <p>Google Play</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <button style={{ boxShadow: "0px 0px 5px 4px rgba(20, 37, 92, 0.3)" }}>
                <a href="#downloadBtn">Download <i className="fas fa-download"></i></a>
            </button>

        </header>
    )
}

export default PostHeader;
