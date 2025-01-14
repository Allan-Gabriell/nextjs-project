import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 256px;

    h3 {
        font-size: 20px;
        line-height: 150%;
    }

    p {
        font-size: 16px;
    }

    div{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0px;

        > div {
            width: 228px;
            height: 1px;
            margin: 8px 0px;
            padding: 0px;
        }
    }

`