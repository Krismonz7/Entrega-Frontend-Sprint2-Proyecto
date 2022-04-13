import { Button } from 'bootstrap'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
    /*Estilos de los componentes*/
    const DivForm = styled.div`
    background-image: linear-gradient(315deg,#b8c6db 0%,#f5f7fa 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    `

    const FormStyle = styled(Form)`
    background-color: #2c2c2c;
    border-radius: 10px;
    width: 600px;
    box-shadow: 0 6px 6px rgba(0,0,0,0.2);
    color: white;
    `

    const Titulo =  styled.h2`
    padding: 1rem;
    text-align: center;
    margin: 0;
    width: 50%;
    margin: auto;
    `
    const Cajita =  styled.div`
      display: flex;
      flex-direction: row;
    `

    const Imagen=styled.img`
    width: 25%;
    height: 40%;
    margin: auto;
    border: 2px solid cyan ;
    `

    const RadioStyle=styled(Form.Check)`
    padding: 0;
    font-size: 1.2rem;
    margin:1rem 0;
    `

    const ButtonStyle =  styled.button`
    background-color: #8400ff;
    border:none;
    width: 100%;
    font-size: 1.1rem;
    padding: 1.1rem;
    color: white;
    &:hover{
      background: #00ffd0;
    }
    &:focus{
      outline: none;
      background-color: #00ffae;
    }

    `

    export {ButtonStyle,DivForm,RadioStyle,Titulo,FormStyle,Imagen,Cajita}