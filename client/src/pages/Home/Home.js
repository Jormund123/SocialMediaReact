import React from "react";
import Navbar from "../../Navbar/Navbar";

import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./home.css";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className='homeContainer'>
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    );
}
