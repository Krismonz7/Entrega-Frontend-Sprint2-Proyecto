import { Button } from 'bootstrap'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
    /*Estilos de los componentes*/
    const DivForm = styled.div`
    background-image: linear-gradient(315deg,#505050 0%,#333333 100%);
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
    display: flex;
    flex-direction: column;
    margin:10vh auto;
    `

    const Titulo =  styled.h2`
    padding: 1rem;
    text-align: center;
    margin: 0;
    width: 60%;
    min-width: 100px;
    margin: auto;
    `
    const Cajita =  styled.div`
      display: flex;
      flex-direction: row;
    `

    const Imagen=styled.img`
    width:25%;
    min-width:100px;
    height:40%;
    min-height:200px;
    margin: auto;
    `

    const RadioStyle=styled(Form.Check)`
    padding: 0;
    font-size: 1.2rem;
    margin:1rem auto;
    border: 2px solid  #ffffff;
    width: 100%;
    &:hover{
      border: 2px solid  #60ff7b;
      font-size:1.5rem ;
    }
    `

    const ButtonStyle =  styled.button`
    background-color: #8400ff;
    border:none;
    width: 80%;
    margin: auto;
    font-size: 1.1rem;
    padding: 1.1rem;
    color: white;
    border-radius: 10px;
    &:hover{
      background: #6200ff;
    }
    &:focus{
      outline: none;
      background-color: #350085;
    }
    `

    export {ButtonStyle,DivForm,RadioStyle,Titulo,FormStyle,Imagen,Cajita}
    