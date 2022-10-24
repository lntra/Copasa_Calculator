import * as S from './styles'


const Table = () => {
    return (<S.div>
            <S.Tables>
                    <tr>
                        <S.th>Gasto</S.th>
                        <S.th>Fixo</S.th>
                        <S.th>Água</S.th>
                        <S.th>Esgoto</S.th>
                        <S.th>Total</S.th>
                    </tr>
                    <tr>
                        <S.td>20</S.td>
                        <S.td>15</S.td>
                        <S.td>80</S.td>
                        <S.td>100</S.td>
                        <S.td>215</S.td>
                    </tr>
            </S.Tables>
        </S.div>)
};

export default Table;