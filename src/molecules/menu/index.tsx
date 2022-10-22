import house from '../../assets/house-solid.svg'
import info from '../../assets/circle-info-solid.svg'
import * as S from './styles'

const Menu = () => {
    return <S.flex>
            <S.img>
                <img src={house} alt="casa" />
            </S.img>
        <S.texto>Home</S.texto>
            <S.img>
                <img src={info} alt="info" />
            </S.img>
        <S.texto>Sobre</S.texto>
    </S.flex>
}

export default Menu;