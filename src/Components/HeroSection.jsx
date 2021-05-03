import React from 'react'
import styled from "styled-components"
import {StyledContainer} from '../DefaultSettings'
import logo from '../images/ciao-logo.png'

const StyledDiv = styled.div`
    width: 300px;
    height: 300px;
    /* border:solid white 2px; */
    margin-right: 2px;
    color:white;
    font-size: 13px;
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
            <StyledContainer reverse>
                
                <StyledDiv>
                    
                SOMOS APAIXONADOS POR BOA COMIDA E BUSCAMOS LEVAR UMA VIDA DESCOMPLICADA E CHEIA DE SABOR. FAZEMOS UM DOS PRATOS MAIS QUERIDOS DO MUNDO DO JEITO MAIS SIMPLES O NAPOLITANO. COM AS NOSSAS PIZZAS QUEREMOS DEIXAR VOCÊ UM POUCO MAIS PERTO DA ITÁLIA.
                    
                </StyledDiv>
                <StyledDivWithLogo/>

            </StyledContainer>

  
    )
}

export default HeroSection
