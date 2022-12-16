import { styled } from '@linaria/react';
import Header from './Header';
import OverviewSection from './OverviewSection';
import QuestionSection from './QuestionSection';
import CooperateSection from './CooperateSection';

const Wrapper = styled.div`
  height: 100%;
`

const App = () => {
  return (
    <Wrapper>
      <Header />
      <OverviewSection />
      <QuestionSection />
      <CooperateSection />
    </Wrapper>
  )
}

export default App;