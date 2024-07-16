import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed; 
    top: 0; 
    right: 0;
    bottom: 0;
    left: 0;
`;

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;

    @media (max-width: 1156px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        top: 50%;
        transform: translateY(-50%);
        width: 80%;
    }

    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;

            @media (max-width: 768px) {
                top: 10px;
                right: 20px;
            }

            @media (max-width: 480px) {
                top: 5px;
                right: 10px;
            }
        }
    }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto}>
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito} />
                    <form method="dialog">
                        <BotaoIcone>
                            <img 
                                src="/icones/fechar.png" 
                                alt="Icone de fechar" 
                                onClick={() => aoFechar(foto)}  
                            />
                        </BotaoIcone>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom;