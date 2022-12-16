import { styled } from '@linaria/react';
import Logo from '@assets/logo.png';
import { breakpointUp } from '@utils/breakpoints';

const Wrapper = styled.div`
  display: flex;
  background-color: #021B3B;
  justify-content: center;
  align-items: center;
  padding: 24px 30px;

  @media ${breakpointUp('sm')} {
    flex-direction: row;
    justify-content: space-between;
    padding: 24px 200px;
  }
`

const LogoImg = styled.img`
  height: 30px;

  @media ${breakpointUp('sm')} {
    height: 40px;
  }
`

const RegisterButton = styled.a`
  display: none;

  @media ${breakpointUp('sm')} {
    display: block;
  }

  padding: 12px 24px;
  color: #00E7ED;
  border: 1px solid #00E7ED;
  border-radius: 200px 0px;
  text-decoration: none;
  cursor: pointer;
`

export default () => {
  return (
    <Wrapper>
      <LogoImg src={Logo} alt="logo" />
      <RegisterButton>立刻報名</RegisterButton>
    </Wrapper>
  )
}
