import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import Text from '../../atoms/text';
import Description from '../../molecules/description';

type InfoProps = {
    children: React.ReactNode;  
  };
  
  const Info = ({children}: InfoProps) => {
      return <>
        <Header></Header>
        <Text></Text>
        <Description></Description>
        <Footer></Footer>
      </>
  };
  
  export default Info;