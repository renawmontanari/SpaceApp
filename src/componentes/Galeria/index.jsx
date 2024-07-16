import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }

`

const SecaoFluida = styled.section`
    flex-grow: 1;

    @media (max-width: 768px) {
        flex-grow: unset;
    }
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: 768px) {
        gap: 16px;
    }

    @media (max-width: 480px) {
        width: 410px;
        height: 325px;
        flex-wrap: nowrap;
        flex-direction: row;
        overflow-y: auto;
        gap: 12px;
    }
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, setTag }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;