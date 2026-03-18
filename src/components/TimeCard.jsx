import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    }
  }, []);

  const year = ('' + date.getFullYear()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const week = days[date.getDay()];

  return (
    <StyledWrapper>
      <div className="card-time-cloud">
        <div className="card-time-cloud-front" />
        <div className="card-time-cloud-back">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="" d="M39.1,-11.5C46.9,11.5,47,38.1,34.9,46.6C22.8,55.1,-1.6,45.4,-16.5,32.3C-31.3,19.2,-36.8,2.8,-32.4,-15.3C-28.1,-33.4,-14.1,-53,0.8,-53.3C15.6,-53.5,31.2,-34.4,39.1,-11.5Z" transform="translate(100 100)" />
          </svg>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="" d="M39.1,-11.5C46.9,11.5,47,38.1,34.9,46.6C22.8,55.1,-1.6,45.4,-16.5,32.3C-31.3,19.2,-36.8,2.8,-32.4,-15.3C-28.1,-33.4,-14.1,-53,0.8,-53.3C15.6,-53.5,31.2,-34.4,39.1,-11.5Z" transform="translate(100 100)" />
          </svg>
        </div>
        <p className="card-time-cloud-day">{ week }</p>
        <p className="card-time-cloud-day-number">{ year }/{ month }/{ day }</p>
        <p className="card-time-cloud-hour">{ hours }:{ minutes }</p>
        <div className="card-time-cloud-icon">
          {parseInt(hours) < 18 && parseInt(hours) >= 5? 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#666666" d="M12 6a6 6 0 0 1 5.88 7.2a1 1 0 0 1-1.96-.399a4 4 0 1 0-7.84 0a1 1 0 1 1-1.96.398A6 6 0 0 1 12 6m9 5a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm15.071-6.07a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-12.728 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707A1 1 0 1 1 6.343 4.93M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M4 15a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm3 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"/></g></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#666666" d="M13.44 2.13a1 1 0 0 0-1.055 1.465a5 5 0 0 1-6.79 6.79A1 1 0 0 0 4.13 11.44a8 8 0 0 0 .641 1.989a1 1 0 0 0 1.896-.556a7 7 0 0 0 8.22-8.134a6 6 0 0 1 2.537 7.832a1 1 0 1 0 1.807.858a8.002 8.002 0 0 0-5.79-11.3ZM3 16a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m3 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"/></g></svg>
          }    
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card-time-cloud {
    position: relative;
    border-radius: 1em;
    width: 17.5em;
    height: 8em;
    z-index: 2;
    border: solid 0.15em var(--color1);
    transition: 0.5s all ease-in-out;
    box-shadow: 0em 0em rgb(0, 0, 0, 0.25);
    overflow: hidden;
    --color1: rgb(255, 255, 255);

    --skycolor: #ffffff;
  }

  .card-time-cloud-front {
    width: 20em;
    height: 12.5em;
    background: rgb(228, 228, 228);
    border-radius: 1em;
    position: absolute;
    z-index: 2;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s all ease-in-out;
  }

  .card-time-cloud-back {
    width: 20em;
    height: 17.5em;
    background: var(--skycolor);
    border-radius: 1em;
    position: absolute;
    z-index: 1;
    top: 57.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s all ease-in-out;
  }

  .card-time-cloud:hover {
    margin-bottom: 1em;
    box-shadow: 0em 1em rgb(228, 228, 228, 0.5);
  }

  .card-time-cloud:hover .card-time-cloud-front {
    top: 105%;
  }

  .card-time-cloud-back svg {
    position: absolute;
    z-index: 1;
    top: -16.45em;
    left: -7.5em;
    width: 25em;
    height: auto;
    opacity: 100%;
    animation: rotate-cloud 15s linear infinite;
  }

  .card-time-cloud-back svg:nth-child(2) {
    animation: rotate-cloud 15s linear infinite 1s;
    opacity: 50%;
  }

  @keyframes rotate-cloud {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .card-time-cloud-day {
    color: rgb(0, 0, 0);
    position: absolute;
    z-index: 3;
    top: 1.25em;
    left: 0.5em;
    font-size: 1.5em;
    font-weight: bold;
    transition: 0.5s all ease-in-out;
  }

  .card-time-cloud-day-number {
    color: rgb(0, 0, 0);
    position: absolute;
    z-index: 3;
    top: 3em;
    left: 0.65em;
    font-size: 1.25em;
    transition: 0.5s all ease-in-out;
    font-weight: 500;
  }

  .card-time-cloud-hour {
    color: rgb(0, 0, 0);
    position: absolute;
    z-index: 3;
    top: 1.25em;
    right: 0.5em;
    font-size: 1.5em;
    font-weight: bold;
    transition: 0.5s all ease-in-out;
  }

  .card-time-cloud:hover {
    height: 15em;
  }

  .card-time-cloud:hover .card-time-cloud-day {
    top: 2.25em;
  }

  .card-time-cloud:hover .card-time-cloud-day-number {
    top: 4em;
  }

  .card-time-cloud:hover .card-time-cloud-hour {
    top: 1em;
    font-size: 3em;
  }

  .card-time-cloud-icon svg {
    position: absolute;
    z-index: 4;
    top: 5em;
    right: 0.6em;
    transform: rotate(0deg);
    width: 1.5em;
    height: auto;
    transition: 0.5s all ease-in-out;
  }

  .card-time-cloud:hover .card-time-cloud-icon svg {
    top: 7.25em;
    right: -1.75em;
    width: 7.5em;
    height: auto;
    transform: rotate(-35deg);
  }
  .card-time-cloud:active {
    transition: 0.25s all ease-in-out;
    transform: scale(0.95);
  }

  .card-time-cloud:active .card-time-cloud-front {
    transition: 0.25s all ease-in-out;
    top: 120%;
    background-color: var(--color1);
  }

  .card-time-cloud:active .card-time-cloud-icon svg {
    transition: 0.25s all ease-in-out;
    top: 8em;
    transform: rotate(-25deg);
    stroke: #4a4b55;
  }`;

export default Card;