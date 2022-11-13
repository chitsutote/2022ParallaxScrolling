import { styled } from '@linaria/react';
import { breakpointUp } from '@utils/breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }
`

const Number = styled.p`
  margin: 0;
  color: #83FF18;
  font-size: 60px;
  font-weight: 500;
`

const Name = styled.p`
  font-size: 16px;
  color: #FFFFFFB3;
  align-self: center;

  @media ${breakpointUp('sm')} {
    align-self: start;
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