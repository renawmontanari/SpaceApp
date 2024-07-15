import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    
    img {
        max-width: 212px;
    }

    @media (max-width: 768px) {
        padding: 40px 0;
        img {
            max-width: 150px;
        }
    }

    @media (max-width: 480px) {
        flex-direction: column;
        padding: 20px 0;
        img {
            max-width: 100px;
        }
    }
`;

const Cabecalho = ({ setFiltro }) => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="" />
            <CampoTexto setFiltro={setFiltro} />
        </HeaderEstilizado>
    )
}

export default Cabecalho;