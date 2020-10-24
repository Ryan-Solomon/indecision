import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <ul className='nav-links'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
    );
  }
}

export default Header;
