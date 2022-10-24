import * as S from './styles'
import Github from '../../assets/github.svg'


const Footer = () => {
    return <>
            <S.Footer>
                <S.texto>
                    Projeto calculadora conta de água de
                    <span> </span>  
                    <a 
                    href='https://github.com/lntra' 
                    target="_blank" 
                    style={{
                        color:"#42a5f5",
                        textDecoration: "underline",
                    }}
                    >Intra</a>
                </S.texto> 
                    <S.img><img src={Github}  alt="" /></S.img>
            </S.Footer>
    </>
};

export default Footer;