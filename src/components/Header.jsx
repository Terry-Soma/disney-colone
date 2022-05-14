import React, { useEffect } from 'react';
import styled from 'styled-components';
import { selectUserName, selectUserPhoto } from '../features/user/userSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {}, []);

  // const signIn = () => {};
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <Link to="/">
              <img src="/images/home-icon.svg" alt="home icon" />
              <span>HOME</span>
            </Link>
            <Link to="/">
              <img src="/images/search-icon.svg" alt="home icon" />
              <span>SEARCH</span>
            </Link>
            <Link to="/">
              <img src="/images/watchlist-icon.svg" alt="home icon" />
              <span>WATCHLIST</span>
            </Link>
            <Link to="/">
              <img src="/images/original-icon.svg" alt="home icon" />
              <span>ORIGINALS</span>
            </Link>
            <Link to="/">
              <img src="/images/movie-icon.svg" alt="home icon" />
              <span>MOVIES</span>
            </Link>
            <Link to="/">
              <img src="/images/series-icon.svg" alt="home icon" />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <UserImg src={userPhoto} />
        </>
      )}
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

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
