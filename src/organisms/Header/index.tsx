import * as S from './styles'
import Logo from '../../molecules/logo';
import Menu from '../../molecules/menu';


const Header = () => {
    return (<S.Cabecalho>
        <Logo></Logo>
        <Menu></Menu>
    </S.Cabecalho>)
};

export default Header;