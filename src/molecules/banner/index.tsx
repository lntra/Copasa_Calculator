import * as S from './styles'
import Banner_img from '../../atoms/background';

const Banner = () => {
    return <div>
    <Banner_img></Banner_img>
        <S.img>
            <S.texto><S.titulo>Calculadora Copasa</S.titulo></S.texto>
            <S.texto>Descubra agora o quanto você deverá pagar no mês</S.texto>
        </S.img>
    </div>
}

export default Banner;