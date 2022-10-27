import * as S from './styles'


const TableFonte = () => {
    return (<S.div>
            <S.Tables>
                    <tr>
                        <S.th>Faixas</S.th>
                        <S.th>Água</S.th>
                        <S.th>Esgoto</S.th>
                        <S.th>Unidade</S.th>
                    </tr>
                    <tr>
                        <S.td>Fixa</S.td>
                        <S.td>17,61</S.td>
                        <S.td>13,03</S.td>
                        <S.td>R$/mês</S.td>
                    </tr>
                    <tr>
                        <S.td>0 a 5m³</S.td>
                        <S.td>1,82</S.td>
                        <S.td>1,35</S.td>
                        <S.td>R$/m³</S.td>
                    </tr>
                    <tr>
                        <S.td>{'>'}5 a 10m³</S.td>
                        <S.td>3,886</S.td>
                        <S.td>2,876</S.td>
                        <S.td>R$/m³</S.td>
                    </tr>
                    <tr>
                        <S.td>{'>'}10 a 15m³</S.td>
                        <S.td>6,023</S.td>
                        <S.td>4,457</S.td>
                        <S.td>R$/m³</S.td>
                    </tr>
                    <tr>
                        <S.td>{'>'}15 a 20m³</S.td>
                        <S.td>8,222</S.td>
                        <S.td>6,084</S.td>
                        <S.td>R$/m³</S.td>
                    </tr>
                    <tr>
                        <S.td>{'>'}20 a 40m³</S.td>
                        <S.td>10,458</S.td>
                        <S.td>7,739</S.td>
                        <S.td>R$/m³</S.td>
                    </tr>
                    <tr>
                        <S.td>{'>'}40m³</S.td>
                        <S.td>12,759</S.td>
                        <S.td>9,441</S.td>
                        <S.td>R$/m³</S.td>
                    </tr>
            </S.Tables>
        </S.div>)
};

export default TableFonte;