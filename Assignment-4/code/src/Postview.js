import React, { useEffect } from 'react';
import './Postview.css';
import blankPic from './images/blankPic.jpeg';
import instaLogo from './images/instaLogo.png';
import threeDots from './images/threeDots.png';
import camera from './images/camera.png';
import likeHeart from './images/likeHeart.png';
import shareIcon from './images/shareIcon.png';



const Postview=()=> {

  const [allusers, setAllusers]=React.useState([]);

  useEffect(()=>{
    fetch("http://localhost:3004/user")
      .then((res) => res.json())
      .then((res) => setAllusers(res))
  },[]);

  return (
    
    <div className="site-container">
      <div className='nav-bar'>
        <label><img className='insta-logo' src={instaLogo} alt="insta_logo"/></label>
        <label className='logo_name'>Instaclone</label>
        <label ><img className='camera' src={camera} alt="camera"/> </label>

      </div>


      {   
          allusers.map((user,index)=>(
            <div key={index} className="users">
              
              <div className='user-details'>
                <div className='name-loc'>
                  <h1>{user.name}</h1>
                  <p>{user.location}</p>
                </div>
                <img className='threedots' src={threeDots} alt="options"/>
              </div>

              <img className='prof-image' src={blankPic} alt="profile_image"/>
              
              <div className='actions'>

                <img className='like-image' src={likeHeart} alt="like_image"/>
                <img className='share-image' src={shareIcon} alt="share_image"/>

                <div className='date'>
                  <p>{user.date}</p>
                </div>

              </div>
              
              <p className='likes'>
                {user.likes + " Likes"}
              </p>
              
              <p className='desc'>
                {user.description}
              </p>
            
            </div>
          ))
      
      }

    </div>
  );
}

export default Postview;