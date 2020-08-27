import React from 'react';
import item from './Post.module.css'

const Post = (props) => {
    return <div className={item.post}>
        <div>

            {props.message}
            <img className={item.post}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF20wUjaDVmzlVr8ABH3nDBGmFM0tcOBPg5Q&usqp=CAU" alt=""/>

            <div><span>Likes: {props.likesCount}</span>
            </div>

        </div>
    </div>
}
export default Post;