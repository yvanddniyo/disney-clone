import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
     <h4>Recommended for You</h4>
     <Content>
       <Wrap>
        <img src='https://tv-fanatic-res.cloudinary.com/iu/s--yRirZ84b--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1633213085/phone-scam-the-simpsons.jpg' alt='disney-image' />
       </Wrap>
       <Wrap>
        <img src='https://tv-fanatic-res.cloudinary.com/iu/s--yRirZ84b--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1633213085/phone-scam-the-simpsons.jpg' alt='disney-image' />
       </Wrap>
       <Wrap>
        <img src='https://tv-fanatic-res.cloudinary.com/iu/s--yRirZ84b--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1633213085/phone-scam-the-simpsons.jpg' alt='disney-image' />
       </Wrap>
       <Wrap>
        <img src='https://tv-fanatic-res.cloudinary.com/iu/s--yRirZ84b--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1633213085/phone-scam-the-simpsons.jpg' alt='disney-image' />
       </Wrap>
       <Wrap>
        <img src='https://tv-fanatic-res.cloudinary.com/iu/s--yRirZ84b--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1633213085/phone-scam-the-simpsons.jpg' alt='disney-image' />
       </Wrap>
       <Wrap>
        <img src='https://tv-fanatic-res.cloudinary.com/iu/s--yRirZ84b--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1633213085/phone-scam-the-simpsons.jpg' alt='disney-image' />
       </Wrap>
       <Wrap>
        <img src='https://tv-fanatic-res.cloudinary.com/iu/s--yRirZ84b--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1633213085/phone-scam-the-simpsons.jpg' alt='disney-image' />
       </Wrap>
       <Wrap>
        <img src='https://tv-fanatic-res.cloudinary.com/iu/s--yRirZ84b--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1633213085/phone-scam-the-simpsons.jpg' alt='disney-image' />
       </Wrap>
     </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
margin-bottom: 30px;
 
`
const Content = styled.div`
 display: grid;
 grid-gap: 25px;
 grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
  &:hover{
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 1);
   }
`