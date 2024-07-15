import styled from "styled-components";

const Titulo = styled.h2`
    color: #7B78E6;
    font-size: 32px;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left' };

    @media (max-width: 768px) {
        font-size: 28px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        text-align: center;
    }
`

export default Titulo;