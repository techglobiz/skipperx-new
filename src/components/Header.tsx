'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';
import logo from '/public/assets/skipper-logo.png';


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <Link href="/">
            <Image src={logo} alt="Skipper Logo" className="logo-img" />
          </Link>
          
          <div className={`nav-linkss ${open ? 'show' : ''}`}>
                        <div className="nav-item dropdown">
              <span className="navbar-learn">Learn </span><span className="arrow">▾</span>
              <div className="dropdown-menu">
                <Link href="/courses" className="dropdown-item">Courses</Link>
                <Link href="/projects" className="dropdown-item">Projects</Link>
                <Link href="/live-classes" className="dropdown-item">Live Classes</Link>
              </div>
            </div>

            {/* Become a Member with Dropdown */}
            <div className="nav-item dropdown">
              <span className="navbar-member">Become a <span className="highlight">member</span> <span className="arrow">▾</span></span>
              <div className="dropdown-menu">
                <Link href="/membership-plans" className="dropdown-item">Membership Plans</Link>
                <Link href="/benefits" className="dropdown-item">Benefits</Link>
                <Link href="/faqs" className="dropdown-item">FAQs</Link>
              </div>
            </div>

            <Link href="/about" className="nav-item">
              <span className="navbar-member">About</span>
            </Link>
          </div>
        </div>

        <div className={`nav-buttons ${open ? 'show' : ''}`}>
          <button className="btn black">Login</button>
          <button className="btn white">Contact Us</button>
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
      </nav>
    </>
  );
};

export default Header;
