import React from "react";
import "./rightbar.css";
import Online from "../Online/Online";
import { Users } from "../../dummyData";

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
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
