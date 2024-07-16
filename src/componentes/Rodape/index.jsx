import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 50px;
    }

    @media (max-width: 480px) {
        width: 410px;
        align-items: center;
        gap: 10px;
        padding: 16px;
    }
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;

        @media (max-width: 480px) {
            margin-right: 16px;
        }
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const Rodape = () => {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/facebook.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/twitter.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/instagram.svg" alt="" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Renan W. Montanari</RodapeTexto>
        </RodapeEstilizado>
    )
}

export default Rodape;