import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./feed.css";
// import { Posts } from "../../dummyData";
import axios from "axios";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);

    //here we fetch the data from the user stored in the backend server
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = username
                    ? await axios.get("/posts/profile/" + username) //we retrieve the username from the api and then show the users posts on the feed
                    : await axios.get("posts/timeline/62a95f7c231a69bd20513d44");
                setPosts(res.data);
            } catch (error) {
                console.log(error);
                console.log(error.message);
            }
        };
        fetchPosts();
    }, [username]);
    return (
        <>
            <div className='feed'>
                <div className='feedWrapper'>
                    <Share />
                    {posts.map((p) => {
                        return <Post key={p._id} post={p} />;
                    })}
                </div>
            </div>
        </>
    );
}
