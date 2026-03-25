import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="brutalist-container">
        <div className="slab-bg slab-1" />
        <div className="slab-bg slab-2" />
        <div className="concrete-block">
          <div className="concrete-texture" />
          <div className="paper-texture" />
          <div className="main-content">
            <div className="title-text">ENT</div>
            <div className="social-grid">

              <Link to='/pastime/game'>
              <div className="social-cell">
                <svg xmlns="http://www.w3.org/2000/svg" className='social-icon' viewBox="0 0 512 512"><path stroke="#666666" stroke-miterlimit="10" stroke-width="32" d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99 99 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88c26 9 49.25-9.61 71.27-37c25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16c41.02-14.01 40.44-79.13 21.43-165.04Z"/><circle cx="292" cy="224" r="20" fill="#666666"/><path fill="#666666" d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288"/><circle cx="336" cy="180" r="20" fill="#666666"/><circle cx="380" cy="224" r="20" fill="#666666"/><path fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 176v96m48-48h-96"/></svg>
              </div>
              </Link>

              <div className="social-cell">
                <svg xmlns="http://www.w3.org/2000/svg" className='social-icon' viewBox="0 0 512 512"><path d="M185.418 36.882s-24.67 5.747-35.756 15.557c-38.586 34.149-51.256 67.652-53.746 105.53l-43.97 47.023c96.221-17.906 207.672-21.92 340.581-20.912c-21.002-14.144-41.37-25.753-59.322-36.814c-14.473-35.496-33.701-76.597-65.934-95.373c-14.145-8.24-29.144-14.024-43.962-16.83c-10.736-20.307-35.4-11.819-37.89 1.82zM104.977 214.8c20.328 40.62 56.635 79.575 89.761 103.012c18.256 12.63 36.742 21.653 51.035 24.144c11.946 2.242 23.46-1.416 28.825-10.672l.002-.004v-.002c8.103-14.299 14.714-28.724 20.359-43.197c15.776 1.737 33.408 2.541 38.04-1.178c7.31-5.871-8.751-56.088-16.056-69.443C320 211.24 320 204.665 320 199.88c-39.436-2.194-150.638 6.423-215.023 14.92m342.142 6.07c-13.335.302-24.897 9.857-33.428 22.668c-9.413 14.137-16.138 33.34-18.798 55.055s-.771 41.971 4.95 57.963c4.29 11.99 11.133 22.318 20.655 27.515l-10.77 108.676l17.913 1.775l10.615-107.13c12.015-1.592 22.443-10.62 30.299-22.418c9.413-14.137 16.136-33.339 18.797-55.053c2.66-21.714.77-41.974-4.952-57.965s-15.983-29.026-31.087-30.877a29 29 0 0 0-4.194-.209m2.004 18.076c5.494.673 11.846 6.541 16.33 19.075c4.485 12.533 6.397 30.421 4.033 49.71s-8.538 36.186-15.916 47.266c-7.377 11.08-14.955 15.242-20.449 14.568c-5.494-.673-11.844-6.54-16.328-19.074c-4.485-12.533-6.396-30.42-4.033-49.709s8.536-36.187 15.914-47.267c5.011-6.164 12.69-15.168 20.449-14.569M99.172 242.53c-6.243 8.543-13.975 17.27-23.111 25.744c-12.11 11.231-26.664 21.827-43.198 30.211c37.101 7.524 77.514 23.385 115.21 42.594c42.326 21.57 80.776 47.18 106.775 71.145l2.314-24.686c-11.388-12.634-23.526-23.83-35.869-34.252c-12.152-5.001-24.557-12.203-36.797-20.672c-36.371-25.164-70.878-60.916-85.324-90.084m344.582 11.276c.036 21.503 3.015 45.534 9.771 64.632c6.729-19.745 7.02-55.246-9.771-64.632m-137.598 54.43a353 353 0 0 1-7.74 16.574c7.33 5.423 11.536 10.592 13.904 15.505c3.119 6.47 3.49 13.077 2.176 21.295c-2.24 14.002-10.213 31.472-14.32 52.23c-9.049 12.67-1.565 56.042 18.265 60.938c44.677 11.03 69.71-35.7 59.614-46.716c-9.817-10.713-37.598-19.736-57.92-19.952c4.048-14.733 9.79-28.985 12.136-43.656c1.666-10.412 1.325-21.456-3.736-31.955c-4.255-8.827-11.576-16.856-22.379-24.264zm-272.875 8.81C28.53 324.342 23.344 332.53 18 341.459V494h255.152c-2.921-14.12-5.609-28.7-8.763-42.629c-.65-5.674-5.269-9.093-9.059-13.314c-21.957-24.459-66.328-55.92-115.432-80.942c-35.16-17.917-72.94-32.625-106.617-40.07z"/></svg>
              </div>
              <div className="social-cell">

              </div>
              <div className="social-cell">

              </div>
            </div>
          </div>
          <div className="scan-effect" />
          <div className="rivet" />
          <div className="rivet" />
          <div className="rivet" />
          <div className="rivet" />
        </div>
        <div className="type-accent"></div>
        <div className="corner-bracket bracket-tl" />
        <div className="corner-bracket bracket-tr" />
        <div className="corner-bracket bracket-bl" />
        <div className="corner-bracket bracket-br" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .brutalist-container {
    position: relative;
    width: 300px;
    height: 110px;
    cursor: pointer;
  }

  .concrete-block {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    border: 8px solid #000;
    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    overflow: hidden;
  }

  .brutalist-container:hover .concrete-block {
    transform: translate(-12px, -12px) rotate(-2deg);
    box-shadow:
      12px 12px 0 #333,
      24px 24px 0 #666,
      36px 36px 0 #999;
  }

  .concrete-texture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        45deg,
        #000 0px,
        #000 2px,
        #111 2px,
        #111 4px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent 0px,
        transparent 8px,
        rgba(255, 255, 255, 0.05) 8px,
        rgba(255, 255, 255, 0.05) 10px
      );
    opacity: 0.3;
  }

  .main-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .title-text {
    color: #fff;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 6px;
    text-transform: uppercase;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    text-shadow:
      2px 2px 0 #333,
      4px 4px 0 #666;
  }

  .brutalist-container:hover .title-text {
    opacity: 0;
    transform: translateY(-40px) rotateX(90deg) scale(0.3);
    filter: blur(8px);
  }

  .social-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3px;
    padding: 14px;
    opacity: 0;
    transform: translateY(40px) rotateX(-90deg) scale(1.3);
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .brutalist-container:hover .social-grid {
    opacity: 1;
    transform: translateY(0) rotateX(0deg) scale(1);
  }

  .social-cell {
    position: relative;
    background: #fff;
    border: 4px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    overflow: hidden;
  }

  .social-cell:nth-child(1) {
    transition-delay: 0.1s;
  }
  .social-cell:nth-child(2) {
    transition-delay: 0.1s;
  }
  .social-cell:nth-child(3) {
    transition-delay: 0.1s;
  }
  .social-cell:nth-child(4) {
    transition-delay: 0.1s;
  }

  .social-cell:hover {
    background: #000;
    transform: scale(1.1) rotate(5deg);
    border-color: #fff;
    z-index: 10;
    box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.3);
  }

  .social-cell:hover .social-icon {
    fill: #fff;
    transform: scale(1.2) rotate(-5deg);
  }

  .social-icon {
    width: 24px;
    height: 24px;
    fill: #000;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  /* Concrete slab backgrounds */
  .slab-bg {
    position: absolute;
    background: #ddd;
    border: 4px solid #000;
    z-index: -1;
    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .slab-1 {
    top: 18px;
    left: 18px;
    width: 264px;
    height: 74px;
  }

  .slab-2 {
    top: 36px;
    left: 36px;
    width: 228px;
    height: 38px;
  }

  .brutalist-container:hover .slab-1 {
    transform: translate(20px, 20px) rotate(1deg);
  }

  .brutalist-container:hover .slab-2 {
    transform: translate(-10px, 30px) rotate(-1deg);
  }

  /* Industrial corner brackets */
  .corner-bracket {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 4px solid #000;
    background: #fff;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .bracket-tl {
    top: -10px;
    left: -10px;
    border-right: none;
    border-bottom: none;
  }

  .bracket-tr {
    top: -10px;
    right: -10px;
    border-left: none;
    border-bottom: none;
  }

  .bracket-bl {
    bottom: -10px;
    left: -10px;
    border-right: none;
    border-top: none;
  }

  .bracket-br {
    bottom: -10px;
    right: -10px;
    border-left: none;
    border-top: none;
  }

  .brutalist-container:hover .corner-bracket {
    transform: scale(1.5);
    background: #000;
    border-color: #fff;
  }

  /* Typography accent */
  .type-accent {
    position: absolute;
    top: -30px;
    left: 0;
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #000;
    transition: all 0.4s ease;
    opacity: 0;
  }

  .brutalist-container:hover .type-accent {
    opacity: 1;
    transform: translateY(5px);
  }

  /* Industrial rivets */
  .rivet {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    border: 2px solid #333;
    transition: all 0.3s ease;
  }

  .rivet:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  .rivet:nth-child(2) {
    top: 10px;
    right: 10px;
  }
  .rivet:nth-child(3) {
    bottom: 10px;
    left: 10px;
  }
  .rivet:nth-child(4) {
    bottom: 10px;
    right: 10px;
  }

  .brutalist-container:hover .rivet {
    background: #fff;
    transform: scale(1.5);
  }

  /* Scan line effect */
  .scan-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #fff, transparent);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0.8;
  }

  .brutalist-container:hover .scan-effect {
    left: 100%;
  }

  /* Paper texture overlay */
  .paper-texture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 20% 50%,
        transparent 20%,
        rgba(255, 255, 255, 0.3) 21%,
        rgba(255, 255, 255, 0.3) 34%,
        transparent 35%,
        transparent
      ),
      linear-gradient(
        0deg,
        transparent 24%,
        rgba(255, 255, 255, 0.05) 25%,
        rgba(255, 255, 255, 0.05) 26%,
        transparent 27%,
        transparent 74%,
        rgba(255, 255, 255, 0.05) 75%,
        rgba(255, 255, 255, 0.05) 76%,
        transparent 77%,
        transparent
      );
    pointer-events: none;
  }`;

export default Card;
