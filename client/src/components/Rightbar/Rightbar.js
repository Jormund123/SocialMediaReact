import React from "react";
import "./rightbar.css";

export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <div className='birthdayContainer'>
                    <img src='assets/gift.png' className='birthdayImg' alt='' />
                    <span className='birthdayText'>
                        <b> Arjun </b> and <b> 3 other Friends </b> have birthdays today.
                    </span>
                </div>
                <img className='rightbarAd' src='assets/ad.jpg' alt='' />
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className='rightbarFriendList'>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img src='assets/person/3.jpeg' className='rightbarProfileImg' alt='' />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>John Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
