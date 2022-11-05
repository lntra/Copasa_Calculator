import * as S from './styles'
import plus from '../../assets/plus-solid.svg'
import { useState } from 'react'
import rows from "./rows.json"



const Box = () => {
    
    const [data,setData] = useState(rows);

    const [addFormData, setFormdata] = useState({
        gasto: 0, fixo: 0, agua: 0, esgoto: 0, total: 0
    })

    const handleAddFormChange = (event : any) => {
        event.preventDefault();

        const fieldValue = event.target.value;

        const newFormData = {...addFormData };
        newFormData['gasto'] = fieldValue;

        setFormdata(newFormData);
    }

    const handleAddFormSubmit = (event : any) => {
        event.preventDefault();
        
        const newRow = {
            gasto: addFormData.gasto,
            fixo: addFormData.fixo,
            agua: addFormData.agua,
            esgoto: addFormData.esgoto,
            total: addFormData.total,
        }

        const newRows = [...data,newRow];
        setData(newRows);
    }

    return <>
    <S.flex>
        <S.texto>Informe a quantidade de metros cúbicos deste mês</S.texto>
        <S.break_flex></S.break_flex>

        <S.form onSubmit={handleAddFormSubmit}>
            <S.input type="text" name="gasto" onChange={handleAddFormChange}/>
            <S.transition>
                <S.inputButton type="submit" value="Submit">
                    <S.img><img src={plus} alt="" /></S.img>
                </S.inputButton>
            </S.transition>
        </S.form>
    </S.flex>
    <S.div>
            <S.Tables>
                    <tr>
                        <S.th>Gasto</S.th>
                        <S.th>Fixo</S.th>
                        <S.th>Água</S.th>
                        <S.th>Esgoto</S.th>
                        <S.th>Total</S.th>
                    </tr>
                    {data.filter(v => v.total != null).map((event)  => (
                        <tr>
                            <S.td>{event.gasto}m³</S.td>
                            <S.td>R${event.fixo}</S.td>
                            <S.td>R${event.agua}</S.td>
                            <S.td>R${event.esgoto}</S.td>
                            <S.td>R${event.total}</S.td>
                        </tr>
                    ))}
            </S.Tables>
        </S.div>
    </>
}

export default Box;