import house from '../../assets/house-solid.svg'
import info from '../../assets/circle-info-solid.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'

const Menu = () => {
    return <S.flex>
            <S.img>
            <Link to={"/"}><img src={house} alt="casa" ></img></Link>
                
            </S.img>
        <S.texto>Home</S.texto>
            <S.img>
            <Link to={"/info"}><img src={info} alt="info"></img></Link>
            </S.img>
        <S.texto>Sobre</S.texto>
    </S.flex>
}

export default Menu;