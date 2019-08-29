import React from 'react';
import './styles.css';

const NavHeader = ({ changeCurrentView }) => {
  return (
    <div id='nav-container'>
      <div id='nav-bar'>
        <div id='nav-brand'>Dog Rates</div>
        <div className='nav-items'>
            <div id='Submit' className='nav-item' onClick={(e) => changeCurrentView(e.target.id)}>Upload</div>
            <div id='Rate' className='nav-item' onClick={(e) => changeCurrentView(e.target.id)}>Rate</div>
            <div id='Trending' className='nav-item' onClick={(e) => changeCurrentView(e.target.id)}>Trending</div>
        </div>
      </div>
    </div>
  )
}
export default NavHeader;