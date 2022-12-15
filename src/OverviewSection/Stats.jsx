import { styled } from '@linaria/react';
import { breakpointUp } from '@utils/breakpoints';

const Wrapper = styled.div`
  p {
    margin: 0;
  }
`

const Number = styled.p`
  margin: 0;
  color: #83FF18;
  font-size: 48px;
  font-weight: 500;

  @media ${breakpointUp('lg')} {
    font-size: 60px;
  }
`

const Name = styled.p`
  font-size: 16px;
  color: #FFFFFFB3;
  text-align: center;

  @media ${breakpointUp('sm')} {
    text-align: left;
  }
`

const Stats = ({
  name,
  number,
})  => {
  return (
    <Wrapper>
      <Number>{number}</Number>
      <Name>{name}</Name>
    </Wrapper>
  )
}

export default Stats