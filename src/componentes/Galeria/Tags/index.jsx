import styled from 'styled-components';
import tags from './tags.json';

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
        &:hover {
        border-color: #C98CF1;
        }

    @media (max-width: 768px) {
        font-size: 18px;
        padding: 10px;
    }
`;

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;

    @media (max-width: 768px) {
        justify-content: flex-start;
    }

    @media (max-width: 480px) {
        width: 400px;
        overflow-y: auto;
    }
`

const Tags = ({ setTag }) => {
    return (
        <TagsContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            <Div>
                {tags.map(tag => 
                    <Tag key={tag.id} onClick={() => setTag(tag.tag)}>  
                        {tag.titulo}
                    </Tag>)
                }
            </Div>
        </TagsContainer>
    )
}

export default Tags;