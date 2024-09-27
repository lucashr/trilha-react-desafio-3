import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`



export const Title = styled.h2`
    width: 388px;
    height: 308px;
    top: 141px;
    left: 65px;
    gap: 0px;
    opacity: 0px;
    font-family: Open Sans;
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    text-align: left;
    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    width: 368px;
    height: 44px;
    top: 153px;
    left: 750px;
    gap: 0px;
    opacity: 0px;
    font-family: Open Sans;
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    text-align: left;
`

export const SubtitleLogin = styled.p`
    width: 296px;
    height: 25px;
    top: 205px;
    left: 748px;
    gap: 0px;
    opacity: 0px;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: left;
`

export const PoliticasDePrivacidade = styled.p`
    width: 372px;
    height: 75px;
    top: 498px;
    left: 750px;
    gap: 0px;
    opacity: 0px;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: left;
`

export const JaTenhoConta = styled.p`
    width: 185px;
    height: 19px;
    top: 584px;
    left: 750px;
    gap: 0px;
    opacity: 0px;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;  
`

export const FazerLogin = styled.a`
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;
    color: green;
    
    &:hover {
        color: #2980b9;
        text-decoration: underline;
    }

    span {
        color: #e74c3c; /* Different color for the span */
        font-style: italic; /* Different style for the span */
    }

`
