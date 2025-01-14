import styled from "styled-components";

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));  /* Altere aqui para garantir que os itens não fiquem grudados */
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
    padding: 0 160px; 
`;