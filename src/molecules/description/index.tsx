import * as S from './styles'
import Descriptive from '../../atoms/descriptive';
import Table from '../../organisms/Table';

const Description = () => {
    return  (
        <S.Grid>
            <Descriptive></Descriptive>
            <Table></Table>
        </S.Grid>
    )
}

export default Description;
