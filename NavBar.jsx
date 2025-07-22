// src/components/NavBar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        {['/', '/card', '/table'].map((path, index) => (
          <li key={index} style={liStyle}>
            <NavLink 
              to={path} 
              onMouseEnter={() => setHovered(index)} 
              onMouseLeave={() => setHovered(null)} 
              style={({ isActive }) => ({
                ...linkStyle,
                background: hovered === index ? '#dcdcdc' : 'linear-gradient(90deg, #4b6cb7, #182848)', // Gradient background for buttons
                border: isActive ? '2px solid #4b6cb7' : 'none', // Optional border for active link
              })}
            >
              {path === '/' ? "Home" : path === '/card' ? "Card View" : "Table View"}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};


const navStyle = {
  background: 'linear-gradient(90deg, #dcdcdc, #333333)', // Gradient from light gray to dark gray
  padding: '10px',
};

const ulStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: '0 15px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px 20px',
  borderRadius: '25px', 
  transition: 'background-color 0.3s, transform 0.3s', 
};

export default NavBar;