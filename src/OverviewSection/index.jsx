import { styled } from '@linaria/react';
import { breakpointUp } from '@utils/breakpoints';
import Banner from '@assets/banner.png';
import MobileBanner from '@assets/mobile-banner.png';
import Stats from './Stats';

const Wrapper = styled.div`
  position: relative;
  background-color: #021B3B;
`

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpointUp('sm')} {
    position: absolute;
    bottom: 15%;
    left: 10%;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
  }
`

const OverviewSection = () => {

  return (
    <Wrapper>
      <picture>
        <source srcSet={Banner} media="(min-width: 576px)" /> 
        <img src={MobileBanner} alt="" style={{ width: '100%' }}/>
      </picture>
      <StatsWrapper>
        <Stats
          name="總報名人數"
          number={1192}
        />
        <Stats
          name="總報名人數"
          number={1192}
        />
        <Stats
          name="團體組數"
          number={41}
        />
      </StatsWrapper>
    </Wrapper>
  )
}

export default OverviewSection