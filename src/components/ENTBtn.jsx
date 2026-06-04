import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="hobby-grid">
        <Link to='/pastime/game' className="hobby-cell game-cell">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="11" x2="10" y2="11" />
            <line x1="8" y1="9" x2="8" y2="13" />
            <line x1="15" y1="12" x2="15.01" y2="12" />
            <line x1="18" y1="10" x2="18.01" y2="10" />
            <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
          </svg>
          <span className="hobby-label">Game</span>
        </Link>

        <Link to='/pastime/anime' className="hobby-cell anime-cell">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.158 14.174c.742-3.32.959-6.878 4.269-9.042c2.54.688 3.96 2.007 5.456 3.283c3.858-1.485 6.407-.624 8.664.758c2.041-2.032 4.433-3.78 7.88-4.673c3.413 4.391 2.591 9.012 2.476 11.442l1.263 7.427m-30.008-9.195c-1.625 2.165-2.815 4.57-2.5 7.805m1.565 3.309c-1.414 4.485-4.24 9.1.556 13.009c-.486-1.6-.909-3.15-.732-4.219c1.265 2.68 3.59 4.074 5.759 5.658c-3.064-5.026-3.346-10.335-2.45-15.764m26.951 2.68c1.15 7.9 1.966 15.607-8.487 16.848c1.399-1.33 2.122-3.026 2.652-4.824c-1.405 1.474-3.218 2.133-5.228 2.4c2.214-1.913 3.802-3.944 3.208-6.391c-2.405 2.749-4.733 2.84-7.073 3.334c7.848-4.05 3.372-11.632 3.561-14.09"/>
            <path d="M39.307 26.652c-9.978-2.132-19.414-7.041-30.968-1.111L6.773 22.54c12.499-7.03 23.03.475 34.454 1.389zM36.428 4.5c-1.986 2.877-3.443 6.038-4.017 9.674c2.42 1.153 4.667 1.685 6.549.89M14.427 5.132c1.324 2.013 2.54 4.025 2.804 6.036c.537-.868 1.184-1.752 2.652-2.753m1.748 8.643l-1.162-4.334l-1.661 4.186m.555-1.414l1.864.098m.627-2.798l-.223 4.262l2.13.111m-8.395 10.296c-.73-2.002-.762 3.43.152 1.385m9.032-1.718c-1.135-1.763-.852 3.666.1 1.39"/>
          </svg>
          <span className="hobby-label">Anime</span>
        </Link>

        <Link to='/pastime/reading' className="hobby-cell reading-cell">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="8" y1="7" x2="16" y2="7" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          <span className="hobby-label">Reading</span>
        </Link>

        <Link to='/pastime/movie' className="hobby-cell movie-cell">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/>
            <path d="M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-9-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm18 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"/>
            <path d="M24 44h20"/>
          </svg>
          <span className="hobby-label">Movie</span>
        </Link>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .hobby-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    width: 280px;
    height: 280px;
  }

  .hobby-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    border-radius: 1.5rem;
    background-color: #F9F8F7;
    text-decoration: none;
    color: #888;
    transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    z-index: 1;
  }

  .hobby-label {
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  /* Color + border per cell */
  .game-cell {
    border: 0.5rem solid #F8C8C8;
    background: linear-gradient(135deg, #F8C8C8 0%, #F9F8F7 35%);
  }

  .anime-cell {
    border: 0.5rem solid #EEEEAE;
    background: linear-gradient(135deg, #EEEEAE 0%, #F9F8F7 35%);
  }

  .reading-cell {
    border: 0.5rem solid #CDDC84;
    background: linear-gradient(135deg, #CDDC84 0%, #F9F8F7 35%);
  }

  .movie-cell {
    border: 0.5rem solid #A4BF58;
    background: linear-gradient(135deg, #A4BF58 0%, #F9F8F7 35%);
  }

  /* Hover: active cell pops */
  .hobby-cell:hover {
    transform: scale(1.12);
    z-index: 10;
    color: #555;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  }

  .game-cell:hover {
    background: linear-gradient(135deg, #F8C8C8 0%, #F9F8F7 55%);
  }

  .anime-cell:hover {
    background: linear-gradient(135deg, #EEEEAE 0%, #F9F8F7 55%);
  }

  .reading-cell:hover {
    background: linear-gradient(135deg, #CDDC84 0%, #F9F8F7 55%);
  }

  .movie-cell:hover {
    background: linear-gradient(135deg, #A4BF58 0%, #F9F8F7 55%);
  }

  /* Blur non-hovered siblings (SideBar pattern) */
  .hobby-grid:hover > .hobby-cell:not(:hover) {
    filter: blur(2.5px);
    transform: scale(0.94);
  }
`;

export default Card;
