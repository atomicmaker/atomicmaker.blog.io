import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Card = ({ date }) => {
  return (
    <StyledWrapper>
      <div className="diary-enter">
        <div className="diary-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A4BF58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{ date }</span>
        </div>
        <div className="diary-body">
          <p className="diary-hint">记录这一天的点滴</p>
          <Link to={`/pastime/:${date}`}>
            <button className="diary-button">Enter</button>
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .diary-enter {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    padding: 1.5rem;
    gap: 1.2rem;
  }

  .diary-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #CDDC84;
    font-size: 1.1rem;
    font-weight: 700;
    color: #555;
    width: 100%;
    justify-content: center;
  }

  .diary-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .diary-hint {
    font-size: 0.85rem;
    color: #aaa;
    margin: 0;
  }

  .diary-button {
    background: linear-gradient(135deg, #CDDC84, #A4BF58);
    color: #F9F8F7;
    border: none;
    border-radius: 2rem;
    padding: 0.6rem 2.5rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
  }

  .diary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(164, 191, 88, 0.45);
  }

  .diary-button:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export default Card;
