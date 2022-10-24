import Header from '../../organisms/Header';
import Banner from '../../molecules/banner';
import Box from '../../molecules/box';
import Footer from '../../organisms/Footer';
import Table from '../../organisms/Table';

type FrontendProps = {
  children: React.ReactNode;  
};

const Frontend = ({children}: FrontendProps) => {
    return <>
    <div>
      <Header></Header>
      <Banner></Banner>
      <Box></Box>
      <Table></Table>
      <Footer></Footer>
    </div>
    </>
};

export default Frontend;