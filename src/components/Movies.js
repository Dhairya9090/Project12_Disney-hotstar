import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
    <Container>  
        <h4>Movies for You</h4>
        <Content>

            <Wrap>
              <a href ="http://localhost:3000/Detailed">
            <img src="/images/Ag.jpg" alt="" />
            </a>
            </Wrap>
            <Wrap>
              <a href ="http://localhost:3000/Iron">
            <img src="/images/Iron.jpg" alt="" />
            </a>
            </Wrap>
            <Wrap>
              <a href ="http://localhost:3000/Inc">
            <img src="/images/IN.jpg" alt="" />
            </a>
            </Wrap>
            <Wrap>
              <a href ="http://localhost:3000/detail">
            <img src="/images/Kick.jpg" alt="" />
            </a>
            </Wrap>

            <Wrap>
              <a href ="http://localhost:3000/Detailed">
            <img src="/images/Ag.jpg" alt="" />
            </a>
            </Wrap>
            <Wrap>
              <a href ="http://localhost:3000/Iron">
            <img src="/images/Iron.jpg" alt="" />
            </a>
            </Wrap>
            <Wrap>
              <a href ="http://localhost:3000/Inc">
            <img src="/images/IN.jpg" alt="" />
            </a>
            </Wrap>
            <Wrap>
              <a href ="http://localhost:3000/detail">
            <img src="/images/Kick.jpg" alt="" />
            </a>
            </Wrap>
        </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`

`

const Content= styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`

border-radius: 10px;
overflow: hidden;
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
&:hover {
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transform: scale(1.05);
  border-color: rgba(249, 249, 249, 0.8);
}
`


