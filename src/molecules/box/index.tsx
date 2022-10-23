import * as S from './styles'
import Box_Search from '../../atoms/box_search'

const Box = () => {
    return <S.flex>
        <S.texto>Informe a quantidade de metros cúbicos deste mês</S.texto>
        <S.break_flex></S.break_flex>
        <Box_Search></Box_Search>
    </S.flex>
}

export default Box;