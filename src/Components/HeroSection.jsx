import React from 'react'
import styled from "styled-components"
import {StyledContainer, StyledTextsH1} from '../DefaultSettings'
import logo from '../images/ciao-logo.png'

const StyledDiv = styled.div`
    width: 300px;
    height: 300px;
    /* border:solid white 2px; */
    margin-right: 2px;
    color:white;
    text-align: right;
    padding: 70px 0;

    @media (max-width: 780px){
     text-align:center;
     margin: 5px;
    }

`

const StyledDivWithLogo = styled.div`
    width: 600px;
    height: 300px;
    /* border:solid white 2px; */
    margin: 5px;
    background-image: url(${logo});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        @media (max-width: 780px){
            max-width:90vw ;
            height:30vh ;
        }
`




const HeroSection = () => {
    return (
            <StyledContainer>
                
                <StyledDiv>
                    
                    Somos apaixonados por boa comida e buscamos levar uma vida descomplicada e cheia de sabor. Fazemos um dos pratos mais queridos do mundo do jeito mais simples possível, o napolitano. Com as nossas pizzas queremos deixar você um pouco mais perto da Itália.
                    
                </StyledDiv>
                <StyledDivWithLogo/>

            </StyledContainer>

  
    )
}

export default HeroSection
