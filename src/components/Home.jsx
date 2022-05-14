import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movies/movieSlice';
export default function Home() {
  const dispatch = useDispatch();
  // fetch data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(setMovies(json)));
  }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  overflow: hidden;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    z-index: -1;
  }
`;
