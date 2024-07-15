import styled from "styled-components";

const FiguraEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;

    @media (max-width: 768px) {
        min-height: 250px;
        border-radius: 15px;
    }

    @media (max-width: 480px) {
        width: 410px;
        min-height: 200px;
        border-radius: 10px;
    }
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;

    @media (max-width: 768px) {
        font-size: 32px;
        line-height: 40px;
        padding: 0 48px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
        line-height: 34px;
        padding: 0 32px;
    }
`

const Banner = ({ texto, backgroundImage }) => {
    return (
        <FiguraEstilizada $backgroundImage={backgroundImage}> 
            <TituloEstilizado>{texto}</TituloEstilizado>
        </FiguraEstilizada>
    )
}

export default Banner;