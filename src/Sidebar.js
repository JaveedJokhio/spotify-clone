import React from 'react'
import './Sidebar.css'
import SideBarOptions from './SideBarOptions'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Sidebar() {
  return (
    <div className='sidebar'>
        <img 
        className='sidebar_logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='spotify-logo'/>
        <SideBarOptions title="Home" Icon={HomeIcon}/>
        <SideBarOptions title="Search"Icon={SearchIcon}/>
        <SideBarOptions title="Your ibrary" Icon={LibraryMusicIcon}/>
        <br/>
        <strong className='sidebar_title'>PLAYLIST</strong>
        <hr/>


      
    </div>
  )
}

export default Sidebar
