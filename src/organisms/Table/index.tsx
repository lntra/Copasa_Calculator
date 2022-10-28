import * as S from './styles'
import rows from "./rows.json"
import { useState } from 'react';

const Table = () => {

    const [data,setData] = useState(rows);

    return (<S.div>
            <S.Tables>
                    <tr>
                        <S.th>Gasto</S.th>
                        <S.th>Fixo</S.th>
                        <S.th>Água</S.th>
                        <S.th>Esgoto</S.th>
                        <S.th>Total</S.th>
                    </tr>
                    {data.map((event) => (
                        <tr>
                            <S.td>{event.gasto}</S.td>
                            <S.td>{event.fixo}</S.td>
                            <S.td>{event.agua}</S.td>
                            <S.td>{event.esgoto}</S.td>
                            <S.td>{event.total}</S.td>
                        </tr>
                    ))}
                   
            </S.Tables>
        </S.div>)
};

export default Table;