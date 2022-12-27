import { useRef, useLayoutEffect } from 'react';
import { styled } from '@linaria/react';
import { gsap, ScrollTrigger } from 'gsap/dist/all';
import DialogBox from '@components/DialogBox';
import QuestionBackground from '@assets/question-background.png'
import Woman from '@assets/woman.png';
import {
  breakpointUp,
  useIsDesktop,
} from '@utils/breakpoints';

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: #021B3B;
  padding: 20px 0;
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
    bottom: 0%;
    height: 280px;
  }
`

const AnchorWrapper = styled.div`
  margin: 40px 0;

  @media ${breakpointUp('sm')} {
    margin: 0;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    opacity: 0;
  }
`

const QuestionSection = () => {
  const gsapContextRef = useRef(null)
  const wrapperRef = useRef(null)
  const isDesktop = useIsDesktop();

  useLayoutEffect(() => {
    if (isDesktop) {
      gsapContextRef.current = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            pin: true,
            start: "top 0%",
            end: "top -95%",
            scrub: true,
          },
        })
  
        const backgroundImgAnimate = (element, index) => {
          const offsetArray = [
            "translateX(6%)",
            "translateX(-10%)",
            "translateX(15%)",
            "translateX(-10%)",
          ]
          timeline.to(element, {
            transform: offsetArray[index],
            xPercent: '-50',
            opacity: 1,
            duration: 5,
          }, "backgroundGroup")
        }
  
        gsap.utils.toArray('.question-background').forEach((element, index) => {
          backgroundImgAnimate(element, index)
        })
  
        // NOTE: dialog animation
        timeline.to('.third-dialog', {
          opacity: 1,
          ease: 'back',
          duration: 1,
        }).to('.third-dialog', {
          transform: 'translateX(150px)',
          xPercent: '-80',
          duration: 10,
        })
        
        timeline.to('.second-dialog', {
          opacity: 1,
          ease: 'SlowMo',
          duration: 1,
        }).to('.second-dialog', {
          transform: 'translateX(15px)',
          xPercent: '-30',
          duration: 1,
          delay: 2,
        })
  
        timeline.to('.first-dialog', {
          opacity: 1,
          ease: 'SlowMo',
          duration: 1,
        }).to('.first-dialog', {
          transform: 'translateX(120px)',
          xPercent: '-30',
          duration: 8,
          delay: 2,
        })
      }, wrapperRef.current)
  
      return () => gsapContextRef.current.revert();
    }
  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <QuestionBackgroundImg
        className="question-background"
        data-position="right"
        style={{
          transform: 'translateX(-100%)',
          opacity: 0,
        }}
        src={QuestionBackground}
      />
      <QuestionBackgroundImg
        className="question-background"
        data-position="left"
        style={{
          transform: 'translateX(100%)',
          opacity: 0,
        }}
        src={QuestionBackground}
      />
      <QuestionBackgroundImg
        className="question-background"
        data-position="right"
        style={{
          transform: 'translateX(-100%)',
          opacity: 0,
        }}
        src={QuestionBackground}
      />
      <QuestionBackgroundImg
        className="question-background"
        data-position="left"
        style={{
          transform: 'translateX(100%)',
          opacity: 0,
        }}
        src={QuestionBackground}
      />
      <WomanImg className="woman-picture" src={Woman} />
      <div style={{ textAlign: 'center' }}>
        <AnchorWrapper className="first-dialog" top="100px" left="55%">
          <DialogBox>
            <QuestionText>動畫技能樹太雜無從下手?</QuestionText>
          </DialogBox>
        </AnchorWrapper>
        <AnchorWrapper className="second-dialog" top="220px" left="300px">
          <DialogBox>
            <QuestionText>滿足不了同事的許願?</QuestionText>
          </DialogBox>
        </AnchorWrapper>
        <AnchorWrapper className="third-dialog" top="315px" left="500px">
          <DialogBox>
            <QuestionText>羨慕別人的酷酷網頁動畫?</QuestionText>
          </DialogBox>
        </AnchorWrapper>
      </div>
    </Wrapper>
  )
}

export default QuestionSection
