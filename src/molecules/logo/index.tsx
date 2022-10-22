import Logo_svg from '../../assets/Vector.svg';
import * as S from './styles'

const Logo = () => {
    return  (
    <S.flex>
        <S.img>
            <img src={Logo_svg} alt="Logo Projeto"></img>
        </S.img>
        <S.texto>Pingos</S.texto>
    </S.flex>
    )
}

export default Logo;