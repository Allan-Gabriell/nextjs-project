import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    background: #ffffff;
    backdrop-filter: blur(10px);

    border-radius: 0px 0px 4px 4px;

    width: 256px;

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
    }
    
    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
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
            width: 100%;
        }
    }

`
