import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

export default function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; //we use the assets folder as env in the components

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked); //if true then false and vice versa
    };

    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img
                            src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
                            className='postProfileImg'
                            alt=''
                        />
                        {/* //finding the username with respect to their id */}
                        <span className='postUsername'>{Users.filter((u) => u.id === post.userId)[0].username}</span>{" "}
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src={PF + post.photo} alt='' /> {/* Here, we are adding assets ahead of the photo */}
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
