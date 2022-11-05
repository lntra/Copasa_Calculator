import * as S from './styles'
import plus from '../../assets/plus-solid.svg'
import Header from '../../organisms/Header';
import Banner from '../../molecules/banner';
import Footer from '../../organisms/Footer';
import rows from "./rows.json"
import { useCallback, useState } from 'react';

function Frontend() {
      const [data,setData] = useState(rows);
      const [addFormData,setAddFormData] = useState({gasto: 0, fixo: "30.64", agua : "", esgoto : "", total : ""});

      const handleAddFormChange = (event : any) => {
        event.preventDefault();

        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData['gasto'] = fieldValue;
        setAddFormData(newFormData);  
      }

      const handleAddFormSubmit = (event : any) => {
        event.preventDefault();
        var num = addFormData.gasto;
        // valor tabelas
        var categorias = [0,5,10,15,20,40];
        var agua = [1.82,3.886,6.023,8.222,10.458,12.759]
        var esgoto = [1.35,2.876,4.457,6.084,7.739,9.441]
        //custos
        var precoFixoAgua = (17.61);
        var precoFixoEsgoto = (13.03);
        var precoEsgoto = 0;
        var precoAgua = 0;
        //for para pegar todos os alcances de gastos
        for(var categoriaAux = 1; num > categorias[categoriaAux];categoriaAux++){
            var dif = categorias[categoriaAux] - categorias[categoriaAux - 1];
            precoAgua += (dif * agua[categoriaAux - 1]);
            precoEsgoto += (dif * esgoto[categoriaAux - 1]);
        }
        //lidando com números caso sobre para um dos alcances
        if (num <= categorias[categoriaAux]){
                var operacao = num - (categorias[categoriaAux - 1])
            if( operacao > 0){
                precoAgua += (operacao * agua[categoriaAux - 1]);
                precoEsgoto += (operacao * esgoto[categoriaAux - 1])
            }    
        }
        // lidando com números acima das categorias, ou seja 40+
        else{
            var operacao = num - (categorias[5])
            precoAgua += (operacao * agua[5]);
            precoEsgoto += (operacao * esgoto[5])
        }

        precoAgua += precoFixoAgua;
        precoEsgoto += precoFixoEsgoto;

        var precoTotal = (precoEsgoto + precoAgua);

        const newContact = {
          gasto: addFormData.gasto,
          fixo: "30.64",
          agua: (Math.round(precoAgua*Math.pow(10,2))/Math.pow(10,2)).toFixed(2),
          esgoto: (Math.round(precoEsgoto*Math.pow(10,2))/Math.pow(10,2)).toFixed(2),
          total: (Math.round(precoTotal*Math.pow(10,2))/Math.pow(10,2)).toFixed(2),
        }

        const newContacts = [...data,newContact]
        setData(newContacts);
      }

    return (
      <div>
        <Header></Header>
        <Banner></Banner>
        <S.flex>
          <S.texto>Informe a quantidade de metros cúbicos deste mês</S.texto>
          <S.break_flex></S.break_flex>

          <S.form onSubmit={handleAddFormSubmit}>
                  <S.input 
                  type="text" 
                  name="gasto"
                  onChange={handleAddFormChange} 
                  />
                  <S.inputButton type="submit" value="Submit">
                    <S.img><img src={plus} alt="" /></S.img>
                  </S.inputButton>
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
                    {data.filter(v => v.gasto !== 0).map((event) => (
                        <tr>
                            <S.td>{event.gasto}m³</S.td>
                            <S.td>{event.fixo}</S.td>
                            <S.td>{event.agua}</S.td>
                            <S.td>{event.esgoto}</S.td>
                            <S.td>{event.total}</S.td>
                        </tr>
                    ))}
            </S.Tables>
        </S.div>
        <Footer></Footer>
      </div>
    )
}

export default Frontend;