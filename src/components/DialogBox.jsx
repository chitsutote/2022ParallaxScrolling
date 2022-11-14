import { styled } from '@linaria/react';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  background: #FFFFFF1A 0% 0% no-repeat padding-box;
  border: 1px solid #00E7ED;
  opacity: 1;
`

const CornerBox = styled.div`
  height: 16px;
  width: 16px;
  border: 1px solid #00E7ED;
`

const DialogBox = ({ children }) => {
  return (
    <Wrapper>
      <CornerBox style={{ position: 'absolute', top: '-12px', left: '-12px' }}/>
      <CornerBox style={{ position: 'absolute', top: '-12px', right: '-12px' }}/>
      <CornerBox style={{ position: 'absolute', bottom: '-12px', left: '-12px' }}/>
      <CornerBox style={{ position: 'absolute', bottom: '-12px', right: '-12px' }}/>
      {children}
    </Wrapper>
  )
}

export default DialogBox