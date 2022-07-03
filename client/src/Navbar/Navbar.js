import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Navbar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <span className='logo'>Echoes</span>
                </Link>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <Search className='searchIcon' />
                    <input placeholder='Search something...' className='searchInput' />
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <Person />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <Chat />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <Notifications />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <img src='/assets/person/1.jpeg' alt='' className='topbarImg' />
            </div>
        </div>
    );
}
