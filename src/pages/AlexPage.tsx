import React from 'react';
import { Link } from 'react-router-dom';
import SCPhoto from '../assets/images/scphoto.jpg';

const Pageddijit = () => {
  return (
    <div style={pageStyle}>
      <h1>Alex's Page!</h1>
      <div style={containerStyle}>
        <img src={SCPhoto} alt="Alex" style={imageStyle} />
        <div style={contentStyle}>
          <h2>Facts About Alex</h2>
          <p><strong>Home Town:</strong> Bay Area</p>
          <p><strong>Major:</strong> Pre Applied Mathematics</p>
          <p><strong>Fun Fact:</strong> I can draw all countries of the world from memory!!!</p>
          <Link to="/" style={buttonStyle}>Back to home page</Link>
        </div>
      </div>
    </div>
  );
}

export default Pageddijit;

const pageStyle = {
  padding: '50px',
  backgroundColor: '#219EBC', // https://coolors.co/palettes/trending
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle = {
  backgroundColor: '#fffe20',
  padding: '50px',
  borderRadius: '30px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
};

const imageStyle = {
  width: '200px',
  height: 'auto',
};

const contentStyle = {
  color: '#333',
  marginTop: '20px',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  textDecoration: 'none',
};
