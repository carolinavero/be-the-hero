import styled from 'styled-components';

export const LogoContainer = styled.div `
    width: 100%;
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 600px) {
        max-width: 100%;
        padding: 15px;
        
    }

    .form {
        width: 100%;
        max-width: 350px;
        margin-right: 30px;

        form {
            margin-top: 100px;
            h1{
                font-size: 32px;
                margin-bottom: 32px;
            }
        }
    }

`;

export const Col6 = styled.div `

    @media(max-width: 600px) {
        width: 100%;
        margin-bottom: 2rem;

    }
`;