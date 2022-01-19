import React, { useState } from 'react';
import { submitDetail } from '../Service/api';

const Create = () => {
    const [title, settitle] = useState('');
    const [image, setimage] = useState('');
    const [version, setversion] = useState('');
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [publisher, setpublisher] = useState('');
    const [size, setsize] = useState('');
    const [updatedate, setupdatedate] = useState('');
    const [tablecontent, settablecontent] = useState('');
    const [content, setcontent] = useState('');
    // const [related1, setrelated1] = useState('&#x3C;RelatedApp name=&#x22;Netflix Apk&#x22; image=&#x22;Images/netflix.png&#x22; red=&#x22;210&#x22; green=&#x22;0&#x22; blue=&#x22;20&#x22; alpha=&#x22;1&#x22; url=&#x22;/&#x22; /&#x3E;');
    // const [related2, setrelated2] = useState('&#x3C;RelatedApp name=&#x22;Netflix Apk&#x22; image=&#x22;Images/netflix.png&#x22; red=&#x22;210&#x22; green=&#x22;0&#x22; blue=&#x22;20&#x22; alpha=&#x22;1&#x22; url=&#x22;/&#x22; /&#x3E;');
    // const [related3, setrelated3] = useState('&#x3C;RelatedApp name=&#x22;Netflix Apk&#x22; image=&#x22;Images/netflix.png&#x22; red=&#x22;210&#x22; green=&#x22;0&#x22; blue=&#x22;20&#x22; alpha=&#x22;1&#x22; url=&#x22;/&#x22; /&#x3E;');
    const [summary, setsummary] = useState('');
    const [downloadlink, setdownloadlink] = useState('');

    const dataObj = {
        title: title,
        image: image,
        version: version,
        name: name,
        category: category,
        publisher: publisher,
        size: size,
        updateddate: updatedate,
        tablecontent: tablecontent,
        content: content,
        // relatedapp1: related1,
        // relatedapp2: related2,
        // relatedapp3: related3,
        summary: summary,
        downloadlink: downloadlink
    }

    const publishApp = async (event) => {
        event.preventDefault();
        await submitDetail(dataObj);
    }

    // console.log(category);

    return (
        <div className="create-container">
            <form action="Post" onSubmit={publishApp}>
                <label htmlFor="title">Title</label>
                <input type="text" onChange={(e) => { settitle(e.target.value) }} value={title} name='title' id='title' />
                <label htmlFor="image">Image URL</label>
                <input type="text" onChange={(e) => { setimage(e.target.value) }} value={image} name="image" id='image' />
                <label htmlFor="version">Version</label>
                <input type="text" onChange={(e) => { setversion(e.target.value) }} value={version} name="version" id='version' />
                <label htmlFor="category">Category</label>
                {/* <input type="text" onChange={(e) => { setcategory(e.target.value) }} id='category' value={category} name="category" /> */}
                <select name="category" id="category" onChange={(e) => setcategory(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="Education">Education</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Tools">Tools</option>
                    <option value="Editing">Editing</option>
                    <option value="Games">Games</option>
                </select>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={(e) => { setname(e.target.value) }} value={name} name='name' id='name' />
                <label htmlFor="publisher">Publisher</label>
                <input type="text" onChange={(e) => { setpublisher(e.target.value) }} value={publisher} name='publisher' id='publisher' />
                <label htmlFor="size">Size</label>
                <input type="text" onChange={(e) => { setsize(e.target.value) }} value={size} name='size' id='size' />
                <label htmlFor="updateddate">Updated Date</label>
                <input type="text" onChange={(e) => { setupdatedate(e.target.value) }} value={updatedate} name='updateddate' id='updateddate' />
                <label htmlFor="tablecontent">Table Content</label>
                <textarea type="text" onChange={(e) => { settablecontent(e.target.value) }} value={tablecontent} name='tablecontent' id='tablecontent'></textarea>
                <label htmlFor="content">Content</label>
                <textarea type="text" onChange={(e) => { setcontent(e.target.value) }} value={content} name='content' id='content' ></textarea>
                {/* <label htmlFor="relatedapp">Related App</label>
                <textarea type="text" onChange={(e) => { setrelated1(e.target.value) }} value={related1} name='relatedapp' id='relatedapp' placeholder='Related App 1'></textarea>
                <textarea type="text" onChange={(e) => { setrelated2(e.target.value) }} value={related2} name='relatedapp' id='relatedapp' placeholder='Related App 2'></textarea>
                <textarea type="text" onChange={(e) => { setrelated3(e.target.value) }} value={related3} name='relatedapp' id='relatedapp' placeholder='Related App 3'></textarea> */}
                <label htmlFor="summary">Summary</label>
                <textarea type="text" onChange={(e) => { setsummary(e.target.value) }} value={summary} name='summary' id='summary' ></textarea>
                <label htmlFor="downloadlink">Download Link</label>
                <input type="text" onChange={(e) => { setdownloadlink(e.target.value) }} value={downloadlink} name='downloadlink' id='downloadlink' />
                <input type="submit" value="Publish" />
            </form>
        </div>
    )
}

export default Create;