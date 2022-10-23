import * as S from './styles'
import plus from '../../assets/plus-solid.svg'
import { hover } from '@testing-library/user-event/dist/hover'

const Box_Search = () => {
return <>
<input type="text" style={{ 
    width: "377px",
    height: "56px",
    border: "1px solid #000000",
    borderRadius: "24px",
    textAlign: "center",
    fontSize: "24px",
    fontFamily: "Josefin Sans', sans-serif",
    marginRight: "20px",
}}
></input>
<S.transition>
    <button  style={{
        width: "113px",
        height: "56px",
        border: "1px solid #000000",
        borderRadius: "24px",
        textAlign: "center",
        background: "#FFFFFF",
        cursor:"pointer",
        transition: "all 0.20s ease-out",
    }}>
    <S.img><img src={plus} alt="" /></S.img>

    </button>
</S.transition>
</>
}

export default Box_Search;