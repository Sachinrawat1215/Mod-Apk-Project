import React from 'react'
import CategorySlice from './CategorySlice'

const Category = () => {
    return (
        <div className='category-container'>
            <h1>Categories</h1>
            <div className="categories">
                <CategorySlice name="Education" r="183" g="21" b="64" imgUrl="Images/category/study.png" />
                <CategorySlice name="Productivity" r="12" g="36" b="97" imgUrl="Images/category/productivity.png" />
                <CategorySlice name="Social" r="7" g="153" b="146" imgUrl="Images/category/social-media.png" />
                <CategorySlice name="Tools" r="229" g="142" b="38" imgUrl="Images/category/gear.png" />
                <CategorySlice name="Editing" r="235" g="47" b="6" imgUrl="Images/category/edit-video.png" />
                <CategorySlice name="Games" r="30" g="55" b="153" imgUrl="Images/category/joystick.png" />
            </div>
        </div>
    )
}

export default Category
