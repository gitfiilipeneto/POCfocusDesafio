import React from 'react'
import styled from "styled-components"
import StyledContainer from '../DefaultSettings'
import logo from '../images/ciao-logo.png'

const StyledDiv = styled.div`
    width: 300px;
    height: 300px;
    border:solid white 2px;
    margin: 5px;
    @media (max-width: 780px){
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        max-width:100vw ;
            height:30vh ;
    }

`

const StyledDivWithLogo = styled.div`
    width: 600px;
    height: 300px;
    border:solid white 2px;
    margin: 5px;
    background-image: url(${logo});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        @media (max-width: 780px){
            max-width:0 ;
            height:0 ;
        }
`




const HeroSection = () => {
    return (
            <StyledContainer>
                
                <StyledDiv/>
                <StyledDivWithLogo/>

            </StyledContainer>

  
    )
}

export default HeroSection
