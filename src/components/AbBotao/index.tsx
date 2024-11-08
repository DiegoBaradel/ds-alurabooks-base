import React from "react"
import styled from "styled-components"

const BotaoEstilizado = styled.button`
    background-color: #eb9b00;
    padding: 16px 32px;
    border: 2px solid #eb9b00;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #b87900;
        border: 2px solid #b87900;
    }
`

const AbBotao = () =>{
    return(
        <BotaoEstilizado>Clique aqui!!!</BotaoEstilizado>
    )
}

export default AbBotao