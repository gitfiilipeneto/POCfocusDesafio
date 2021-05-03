import styled from 'styled-components'

const StyledContainer = styled.div`
    
    height: 100vh;
    max-height: 100%;    
    width: 100vw;
    max-width: 100%;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    background-color:black;
    @media (max-width: 780px){
        flex-direction:column;
    }
        

`
export default StyledContainer