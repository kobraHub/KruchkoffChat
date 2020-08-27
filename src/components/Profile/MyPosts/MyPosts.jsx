import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {id: 1, message: 'First Post'},
        {id: 2, message: 'First Post?'},
        {id: 3, message: 'FirFirst Post'},
        {id: 4, message: 'First Post?'},
        {id: 5, message: 'First Post?'},
    ]

    let postsElement = posts.map(p => <Post message={p.message} id={p.id}/>);




    return (
        <div className={s.MyPosts}>

            <div>{postsElement}</div>

            {/*<div className={s.posts}>*/}
            {/*    <Post message={posts[0].message} id={posts[0].id}/>*/}
            {/*    <Post message={posts[1].message} id={posts[1].id}/>*/}
            {/*    <Post message={posts[2].message} id={posts[2].id}/>*/}
            {/*    <Post message={posts[3].message} id={posts[3].id}/>*/}
            {/*    <Post message={posts[4].message} id={posts[4].id}/>*/}
            {/*</div>*/}


            {/*// return <div className={item.posts}>*/}
            {/*//     <h2>My posts</h2>*/}
            {/*//     <Post message='First Post' likesCount=' 1'/>*/}
            {/*//     <Post message='Second Post' likesCount=' 4'/>*/}
            <div>

                <div>
                    <textarea></textarea>
                </div>
                <button>Add Post</button>
            </div>
        </div>
    )
}
export default MyPosts;