import { styled } from "@linaria/react";
import Cooperate from '@assets/cooperate.png';
import { breakpointUp } from "@utils/breakpoints";

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  background-color: #021B3B;
  padding-top: 50px;

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    background: #00E7ED 0% 0% no-repeat padding-box;
    border-radius: 50px 0px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media ${breakpointUp('sm')} {
    padding-top: 150px;

    &::after {
      border-radius: 500px 0px;
    }
  }
`

const Title = styled.h2`
  position: relative;
  z-index: 2;
  color: #021B38;
  font-size: 40px;
  margin: 0;

  @media ${breakpointUp('sm')} {
    font-size: 60px;
  }
`

const Description = styled.p`
  font-size: 20px;
  color: #021B38B3;
  position: relative;
  z-index: 2;

  @media ${breakpointUp('sm')} {
    font-size: 32px;
  }
`

const CooperatePic = styled.img`
  transform: translate(0, 16%);
  width: 100%;
  position: relative;
  z-index: 2;

  @media ${breakpointUp('sm')} {
    height: 100%;
  }
`

const CooperateSection = () => {
  return (
    <Wrapper>
      <Title>互動式網頁設計</Title>
      <Description>UI設計師與前端工程師共同攜手合作。</Description>
      <CooperatePic src={Cooperate} />
    </Wrapper>
  )
}

export default CooperateSection
