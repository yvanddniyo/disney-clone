import React from 'react'
import styled from 'styled-components' 

function Detail() {
  return (
    <Container>
      <Background>
        <img src='https://4kwallpapers.com/images/wallpapers/stitch-disney-2880x1800-10901.png' alt="images" />
      </Background>
      <ImageTitle>
        <img src='/images/detail-bg.svg' alt='logo-detail' />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>
        <TrailButton>
        <img src='/images/play-icon-white.png' />
        <span>Trailer</span>
        </TrailButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='images/group-icon.png' alt='group' />
        </GroupWatchButton>
      </Controls>
      <Subtitle>
        2018 . 7m . Family, Fantasy, Kids, Animation 
      </Subtitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves grown son leaves home gets another at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute small forever.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
 min-height: calc(100vh - 70px);
 padding: 0 calc(3.5vw + 5px);
 position: relative;
 z-index: -1;
 opacity: 0.8;
`
const Background = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 z-index: -1;

 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
 }
`
 const ImageTitle = styled.div`
 height: 30vh;
 min-height: 170px;
 width: 35vw;
 min-width: 200px;

 img {
  width: 100%;
  height: 100%;
  object-fit: contain;
 }
 `
 const Controls = styled.div`
  display: flex;
  align-items: center;
 `

 const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  height: 56px;
  align-items: center;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  span {
    color: black;
  }

  &:hover {
   background: rgb(198, 198, 198);
  }
 `
 const TrailButton = styled(PlayButton)`
  background:  rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
 `
const AddButton =  styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 1);
cursor: pointer;

span{
  font-size: 30px;
}
`
const GroupWatchButton = styled(AddButton)`
 background: rgb(0, 0, 0);  
`
const Subtitle = styled.div`
margin-top: 26px;
color: rgb(249, 249, 249);
font-size: 13px;
min-heigth: 20px;
`

const Description = styled.div`
 line-height: 1.4;
 max-width: 50vw;
 font-size: 18px;
 margin-top: 16px;
 color: rgb(249, 249, 249);
`