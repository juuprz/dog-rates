import React from 'react';

// rate removed from navbar pending deletion with ratings being performed on the trending list

const NavHeader = ({ changeCurrentView }) => {
  return (
    <div id='nav-container'>
      <div id='nav-bar-outer'>
        <div id='nav-bar-inner'>
          <div id='nav-brand'>Dog Rates</div>
          <div className='nav-items'>
              <div id='Submit' className='nav-item' onClick={(e) => changeCurrentView(e.target.id)}>Upload</div>
              {/* <div id='Rate' className='nav-item' onClick={(e) => changeCurrentView(e.target.id)}>Rate</div> */}
              <div id='Trending' className='nav-item' onClick={(e) => changeCurrentView(e.target.id)}>Trending</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NavHeader;