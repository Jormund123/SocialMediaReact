import React from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img src='/assets/person/1.jpeg' className='postProfileImg' alt='' />
                        <span className='postUsername'>Anand Karna</span>
                        <span className='postDate'>2 mins ago</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert />
                    </div>
                </div>
                <div className='postCenter'></div>
                <div className='postBottom'></div>
            </div>
        </div>
    );
}
