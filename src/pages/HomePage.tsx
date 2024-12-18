import React from 'react';
import { Link } from 'react-router-dom';
import TeachLALogo from '../assets/teach-la-logo.svg';
import '../assets/WestwoodSans-Regular.ttf';

const HomePage: React.FC = () => {
  const renderButtons = () => {
    const names = ["Alex", "Nina", "Tiffany", "Person4", "Jeffrey", "Person6", "Person7", "Person8", "Person9", "Person10", "Person11"];
    return names.map((name, index) => (
      <Link to={`/${name}Page`} key={index} style={{ textDecoration: 'none' }}>
        <button style={{ backgroundColor: '#7EC053', margin: '5px', padding: '30px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '18px' }}>
          {name}'s Page
        </button>
      </Link>
    ));
  };

  return (
    <div id="app-wrapper">
      <header id="header">
        <h1>Welcome to the Winter 2024 React Team page!</h1>
      </header>
      <div style={{ backgroundColor: '#cef3b7', minHeight: 'calc(100vh - 16vh)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          {renderButtons()}
        </div>
      </div>
      <footer id="footer">
        <h3>
          made with ❤️ by{' '}
          <a
            href="https://teachla.uclaacm.com"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-link"
          >
            {' '}
            <img id="tla-logo" src={TeachLALogo} alt="teach la logo!" style={{ height: '20px' }} /> {/* Adjust the height here */}
            acm.teachLA
          </a>
        </h3>
      </footer>
    </div>
  );
}

export default HomePage;
