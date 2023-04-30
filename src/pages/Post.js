import React from 'react';
import Avatar from '../assets/avatar.jpg'
import Like from '../assets/thumb_up_FILL0_wght400_GRAD0_opsz48.png'
const Post = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', background:"#C1E1FF", borderRadius:"15px" }}>
      <h2 style={{ margin: '0 0 1rem 0' }}>New Post</h2>
      <img style={{ width: '100%'}} src="https://www.artchitectours.com/wp-content/uploads/2018/04/illinois-institute-of-technology-01-800x533.jpg" alt="Post Image" />
      <p style={{ marginBottom: '1rem', textAlign:"start" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: '2rem', marginRight: '0.5rem', borderRadius: "100px", border:"1px solid" }} src={Avatar} alt="User Avatar" />
          <h3 style={{ margin: '0', fontSize:"16px" }}>Bharath Bandaru</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: '1.5rem', marginRight: '0.5rem' }} src={Like} alt="Likes" />
          <p style={{ margin: '0' }}>100 Likes</p>
        </div>
      </div>
    </div>
  );
};

export default Post;