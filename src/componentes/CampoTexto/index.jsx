import styled from 'styled-components';
import search from './search.png';

const ContainerEstilizando = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

    @media (max-width: 768px) {
        width: 755px;

    }

    @media (max-width: 480px) {
        width: 400px;
    }
`;

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;

    @media (max-width: 768px) {
        right: 22px;
    }

    @media (max-width: 480px) {
        top: 9px;
        right: 9px;
        width: 32px;
        height: 32px;
    }
`;

const CampoTexto = ({ setFiltro }) => {
    return (
        <ContainerEstilizando>
            <CampoTextoEstilizado 
                type="text" 
                onChange={(evento) => { setFiltro(evento.target.value)}}  
                placeholder="O que você procura?" 
            />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizando>
    )
}

export default CampoTexto;