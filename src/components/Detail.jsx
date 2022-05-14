import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
export default function Detail() {
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <Background>
        <img src="/images/disney.jpg" alt="jpg" />
      </Background>
      <ImageTitle>
        <img src="/images/logo.svg" alt="lgog" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="play" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="group" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati
        autem mollitia deserunt vero nam ut ad delectus blanditiis minima dicta
        at sequi, amet libero minus, ratione quisquam iste, soluta recusandae.
      </SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia
        tenetur ipsa provident excepturi, numquam cum sapiente, illo id vitae
        suscipit natus fugit? Neque optio, quasi minima impedit mollitia
        voluptatibus?
      </Description>
    </Container>
  );
}
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  max-width: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  padding: 0 24px;
  margin-right: 24px;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.6;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 42px;
  height: 42px;
  dipslay: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 2px solid #fff;

  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 32px;
    color: #fff;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  margin-top: 28px;
  max-width: 680px;

  color: rgb(249, 249, 249);
  min-height: 24px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 24px;
  margin-top: 16px;
  max-width: 760px;
`;
