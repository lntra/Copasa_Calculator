import Header from '../../organisms/Header';
import Banner from '../../molecules/banner';
import Box from '../../molecules/box';
import * as S from './styles'

type FrontendProps = {
  children: React.ReactNode;  
};

const Frontend = ({children}: FrontendProps) => {
    return (
    <div>
      <S.Container>
        <Header></Header>
      </S.Container>
      <Banner></Banner>
      <Box></Box>
    </div>
    )
};

export default Frontend;