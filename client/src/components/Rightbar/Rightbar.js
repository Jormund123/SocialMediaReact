import React from "react";
import "./rightbar.css";
import Online from "../Online/Online";
import { Users } from "../../dummyData";

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    //creating inner components
    const HomeRightBar = () => {
        return (
            <>
                <div className='birthdayContainer'>
                    <img src={`${PF}gift.png`} className='birthdayImg' alt='' />
                    <span className='birthdayText'>
                        <b> Arjun </b> and <b> 3 other Friends </b> have birthdays today.
                    </span>
                </div>
                <img className='rightbarAd' src={`${PF}ad.jpg`} alt='' />
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className='rightbarFriendList'>
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className='rightbarInfo'>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>City:</span>
                        <span className='rightbarInfoValue'>{user.city}</span>
                    </div>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>From:</span>
                        <span className='rightbarInfoValue'>{user.from}</span>
                    </div>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>Relationship:</span>
                        <span className='rightbarInfoValue'>{user.relationship}</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User Friends</h4>
                <div className='rightbarFollowings'>
                    <div className='rightbarFollowing'>
                        <img src={`${PF}person/1.jpeg`} className='rightbarFollowingImg' alt='' />
                        <span className='rightbarFollowingName'>John Carter</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img src={`${PF}person/2.jpeg`} className='rightbarFollowingImg' alt='' />
                        <span className='rightbarFollowingName'>John Carter</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img src={`${PF}person/3.jpeg`} className='rightbarFollowingImg' alt='' />
                        <span className='rightbarFollowingName'>John Carter</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img src={`${PF}person/4.jpeg`} className='rightbarFollowingImg' alt='' />
                        <span className='rightbarFollowingName'>John Carter</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img src={`${PF}person/5.jpeg`} className='rightbarFollowingImg' alt='' />
                        <span className='rightbarFollowingName'>John Carter</span>
                    </div>
                    <div className='rightbarFollowing'>
                        <img src={`${PF}person/5.jpeg`} className='rightbarFollowingImg' alt='' />
                        <span className='rightbarFollowingName'>John Carter</span>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>{user ? <ProfileRightBar /> : <HomeRightBar />}</div>
        </div>
    );
}
