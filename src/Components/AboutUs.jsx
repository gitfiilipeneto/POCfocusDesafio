import React from "react";
import styled from "styled-components";
import {StyledContainer, StyledTextsH1} from "../DefaultSettings";


const StyledDiv = styled.div`
    width: 320px;
    height: 300px;
    border-right:solid white 1px;
    margin: 5px;
    color:white;
    font-size: 13px;
    text-align: right;
    padding: 40px  ;
    /* & p{
        text-align:center;
    } */

    @media (max-width: 780px){
     text-align:center;
     margin: 5px;
     font-size: 12px;
    }
`

const StyledDiv2 = styled.div`
    width: 320px;
    height: 300px;
    /* border:solid white 1px; */
    margin: 5px;
    color:white;
    font-size: 13px;
    /* text-align: right; */
    padding: 40px ;
    /* & p{
        text-align:center;
    } */

    @media (max-width: 780px){
     text-align:center;
     margin: 5px;
     font-size: 12px;
     & h1{
         font-size: 30px;
     }
    }
`
const AboutUs = () => {
  return (
    <StyledContainer>
        <StyledDiv>
            <h1>FEITA COM O TEMPO</h1>
            <p>
            USAMOS NOSSA CRIATIVIDADE NA HORA DE IMAGINAR E CRIAR NOVOS SABORES, MAS QUANDO O ASSUNTO É MASSA, USAMOS UMA RECEITA QUE SURGIU E SE APRIMORA HÁ MAIS DE 300 ANOS EM NAPOLI. ISSO A GENTE NÃO VÊ MOTIVO NENHUM PRA MUDAR.
            </p>
        </StyledDiv>
        <StyledDiv2>
            <h1>
            LONGA FERMENTAÇÃO
            </h1>
            <p>
            NOSSA MASSA FERMENTA POR PELO MENOS 24 HORAS PRA FICAR LEVE E SABOROSA, COMO DEVE SER. ELA TAMBÉM NÃO LEVA NADA ALÉM DE ÁGUA, SAL, UM BLEND ESPECIAL DE FARINHAS ITALIANAS E UM POUQUINHO DE FERMENTO. É POR ISSO QUE, QUANDO ACABA, ACABA MESMO. FINITO.
            </p>
        </StyledDiv2>
        {/* <StyledDiv>
            <h1>
            SÓ O QUE A GENTE ACHA BOM
            </h1>
            <p>
            NAS PIZZAS COLOCAMOS APENAS O QUE SERVIMOS NA NOSSA PRÓPRIA MESA. FARINHA, TOMATES E AZEITE VÊM DA ITÁLIA. SÓ MOZZARELLA DE BÚFALA FRESCA. OS OUTROS INGREDIENTES SÃO DE PARCEIROS QUE TRATAM SEUS PRODUTOS COMO NÓS TRATAMOS NOSSAS PIZZAS. ASSIM GARANTIMOS INSUMOS SEMPRE FRESCOS E DE QUALIDADE.
            </p>
        </StyledDiv> */}
    </StyledContainer>
  )
};
export default AboutUs;
