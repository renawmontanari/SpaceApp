import styled from "styled-components";

const ItemListaEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;

    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 20px;
        gap: 18px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 15px;
        gap: 15px;
    }
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao; 