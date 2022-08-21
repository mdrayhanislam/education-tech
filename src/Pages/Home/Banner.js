import React from 'react';
import Banner1 from '../../Images/banner.png'
const Banner = () => {
    const myStyle={
        backgroundImage: 
        `url(${Banner1})`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
       <div style={myStyle}>
        
       </div>
    );
};

export default Banner;