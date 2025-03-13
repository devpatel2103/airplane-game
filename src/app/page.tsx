import React from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-container">
      <main className="home-content">
        <h1 className="home-title">Airplane Game</h1>
        <p className="home-description">
          Experience the thrill of flying in this exciting airplane simulation game
        </p>
        
        <div className="feature-section">
          <div className="airplane-icon-container">
            {/* Placeholder for airplane icon/image */}
            <svg xmlns="http://www.w3.org/2000/svg" className="airplane-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          
          <div>
            <button className="play-button">
              Play Now
            </button>
          </div>
        </div>
        
        <div className="nav-buttons">
          <Link 
            href="/about"
            className="secondary-button"
          >
            About
          </Link>
        </div>
      </main>
      
      <footer className="home-footer">
        <p>© 2024 Airplane Game. All rights reserved.</p>
      </footer>
    </div>
  );
}
