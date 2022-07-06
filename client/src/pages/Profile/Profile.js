import React, { useEffect, useState } from "react";
import "./profile.css";
import Navbar from "../../Navbar/Navbar";
import axios from "axios";

import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`/users?username=${username}`);
                setUser(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchUser();
    }, []);
    return (
        <>
            <Navbar />
            <div className='profile'>
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img className='profileCoverImg' src={user.coverPicture || PF + "person/noCover.png"} alt='' />
                            <img className='profileUserImg' src={user.profilePicture || PF + "person/noAvatar.png"} alt='' />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>{user.username}</h4>
                            <span className='profileInfoDesc'>{user.desc}</span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed username={username} />
                        <Rightbar user={user} />
                        {/* Here profile indicates whether the right bar is in profile page or the home page */}
                    </div>
                </div>
            </div>
        </>
    );
}
