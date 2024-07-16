import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
        gap: 12px;
    }

    @media (max-width: 480px) {
        width: 400px;
        flex-direction: row;
        overflow-y: auto;
        gap: 8px;
    }
`;

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;

    @media (max-width: 768px) {
        max-width: 180px;
    }

    @media (max-width: 480px) {
        max-width: 150px;
    }
`;

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;

    @media (max-width: 768px) {
        padding: 10px 16px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        width: 400px;
        padding: 8px 12px;
        font-size: 16px;
    }
`;

const Populares = () => {
    return (
        <section>
            <Titulo $alinhamento="center">Populares</Titulo>
            <ColunaFotos>
                {fotos.map(foto => <Imagem key={foto.id} src={foto.path} alt={foto.alt} />)}
            </ColunaFotos>
            <Botao>ver mais</Botao>
        </section>
    )
}

export default Populares;