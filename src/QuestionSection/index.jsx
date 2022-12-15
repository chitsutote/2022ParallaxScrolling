import { styled } from '@linaria/react';
import DialogBox from '@components/DialogBox';
import QuestionBackground from '@assets/question-background.png'
import Woman from '@assets/woman.png';
import {
  breakpointUp,
  useIsMobile,
} from '@utils/breakpoints';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  background-color: #021B3B;
  padding: 20px 0;

  @media ${breakpointUp('sm')} {
    height: auto;
  }
`

const QuestionBackgroundImg = styled.img`
  display: none;

  @media ${breakpointUp('sm')} {
    display: block;
    margin: 20px 0;
    height: 120px;
  }
`

const QuestionText = styled.p`
  padding: 32px;
  margin: 0;
  font-size: 20px;
  color: #00E7ED;

  @media ${breakpointUp('sm')} {
    padding: 24px 48px;
    font-size: 32px;
  }
`

const WomanImg = styled.img`
  display: none;

  @media ${breakpointUp('sm')} {
    display: block;
    position: absolute;
    left: 40%;
    bottom: 0;
    height: 280px;
  }
`

const QuestionSection = () => {

  return (
    <Wrapper>
      <QuestionBackgroundImg
        style={{
          position: 'relative',
          left: '-60px',
        }}
        src={QuestionBackground}
      />
      <QuestionBackgroundImg
        style={{
          position: 'relative',
          left: '40px',
        }}
        src={QuestionBackground}
      />
      <QuestionBackgroundImg
        style={{
          position: 'relative',
          left: '80px',
        }}
        src={QuestionBackground}
      />
      <QuestionBackgroundImg
        style={{
          position: 'relative',
          left: '-100px',
        }}
        src={QuestionBackground}
      />
      <WomanImg src={Woman} />
      <div style={{ textAlign: 'center' }}>
        <div style={isMobile ? {} : { position: 'absolute', top: '110px', left: '800px'}}>
          <DialogBox>
            <QuestionText>動畫技能樹太雜無從下手?</QuestionText>
          </DialogBox>
        </div>
        <div style={isMobile ? {} : { position: 'absolute', top: '220px', left: '300px'}}>
          <DialogBox>
            <QuestionText>滿足不了同事的許願?</QuestionText>
          </DialogBox>
        </div>
        <div style={isMobile ? {} : { position: 'absolute', top: '315px', left: '500px'}}>
          <DialogBox>
            <QuestionText>羨慕別人的酷酷網頁動畫?</QuestionText>
          </DialogBox>
        </div>
      </div>
    </Wrapper>
  )
}

export default QuestionSection
