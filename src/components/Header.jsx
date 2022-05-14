import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function Header() {
  useEffect(() => {}, []);
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="">
          <img src="/images/home-icon.svg" alt="home icon" />
          <span>HOME</span>
        </a>
        <a href="">
          <img src="/images/search-icon.svg" alt="home icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="home icon" />
          <span>WATCHLIST</span>
        </a>
        <a href="">
          <img src="/images/original-icon.svg" alt="home icon" />
          <span>ORIGINALS</span>
        </a>
        <a href="">
          <img src="/images/movie-icon.svg" alt="home icon" />
          <span>MOVIES</span>
        </a>
        <a href="">
          <img src="/images/series-icon.svg" alt="home icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/viewers-disney.png" />
    </Nav>
  );
}

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 24px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 12px;
      letter-spacing: 1.44px;
      position: relative;
      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
