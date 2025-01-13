import styled from "styled-components";

export const StyleHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 160px;
    border-bottom: 1px solid;
    border-color: var(--color-bg-secundary);
    color: var(--color-font);
    font-weight: 800;
    font-size: 20px;
    line-height: 150%;

    div {
        display: flex;
        align-items: center;
        gap: 20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
    }
`