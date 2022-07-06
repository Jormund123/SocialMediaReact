import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { format } from "timeago.js";

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length); //it contains the length of the likes array from the database
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; //we use the assets folder as env in the components
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`/users?userId=${post.userId}`);
                setUser(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchUser();
    }, [post.userId]);

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked); //if true then false and vice versa
    };

    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        {/* if the user has profile picture which is stored in the database, we load that or else we load the image from the assets in the client side */}
                        <Link to={`profile/${user.username}`}>
                            <img src={user.profilePicture || PF + "person/noAvatar.png"} className='postProfileImg' alt='' />
                        </Link>
                        {/* //finding the username with respect to their id */}
                        <span className='postUsername'>{user.username}</span>
                        <span className='postDate'>{format(post.createdAt)}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src={PF + post.img} alt='' /> {/* Here, we are adding assets ahead of the photo */}
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img className='likeIcon' src={`${PF}like.png`} onClick={handleLike} alt='' />
                        <img className='likeIcon' src={`${PF}heart.png`} onClick={handleLike} alt='' />
                        <span className='postLikeCounter'>{like} people liked it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
