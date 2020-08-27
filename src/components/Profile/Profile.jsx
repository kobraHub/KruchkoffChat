import React from 'react';
import item from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import profileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return <div>
        <profileInfo/>
        <MyPosts/>
    </div>


}
export default Profile;