import React from "react";
import "./profile.css";
import Navbar from "../../Navbar/Navbar";

import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Navbar />
            <div className='profile'>
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img className='profileCoverImg' src={`${PF}post/3.jpeg`} alt='' />
                            <img className='profileUserImg' src={`${PF}person/7.jpeg`} alt='' />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>Anand Karna</h4>
                            <span className='profileInfoDesc'>Hello</span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <Rightbar profile />
                        {/* Here profile indicates whether the right bar is in profile page or the home page */}
                    </div>
                </div>
            </div>
        </>
    );
}
