import * as S from './styles'
import Descriptive from '../../atoms/descriptive';
import TableFonte from '../../organisms/TableData';

const Description = () => {
    return  (
        <S.Grid>
                <Descriptive></Descriptive>
                <TableFonte></TableFonte>
        </S.Grid>
    )
}

export default Description;
