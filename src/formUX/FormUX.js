import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { DivForm,FormStyle,Cajita,Titulo,RadioStyle,ButtonStyle,Imagen} from './UxQuestion'
import {questionGeek} from './QuestionarioUX'
import imagen1 from '../images/persona1.png'
import imagen2 from '../images/persona2.png'
import imagen3 from '../images/persona3.png'
import imagen4 from '../images/persona4.png'
export default class QuestionUX extends Component {
  constructor() {
      super();
      this.state = {
          numberQuestion: 0,
          question: {
              question: "",
              a: "",
              b: "",
              c: "",
              d: "",
              correct: ""
          },
          score: 0,
          answerSelect: ""
      }
  }

  componentDidMount() {
      const currentQuizData = questionGeek[this.state.numberQuestion]

      this.setState({
          question: {
              question: currentQuizData.question,
              a: currentQuizData.a,
              b: currentQuizData.b,
              c: currentQuizData.c,
              d: currentQuizData.d,
              correct: currentQuizData.corrrect
          }
      })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      e.target.reset()
      if (this.state.answerSelect === this.state.question.correct) {
          this.setState({
              score: this.state.score + 1,
          })
      }
      if (this.state.numberQuestion < questionGeek.length) {
          this.componentDidMount()
      } 
      if (this.state.score === questionGeek.length) {
        this.setState({
          score: questionGeek.length
        })
    } else {
          console.log(this.state.score);
      }
  }

  onChanged = (e) => {
      this.setState({
          answerSelect: e.currentTarget.value
      })
  }

  render() {
      return (
          <DivForm>
              <FormStyle onSubmit={this.handleSubmit}>
                  <Form.Group className="mb-3" controlId="control-radio" style={{ padding: "4rem" }}>
                      <Cajita>
                      <Imagen src={imagen3} alt=''/>
                      <Titulo>{this.state.question.question}</Titulo>
                      </Cajita>
                      
                      <RadioStyle
                          type="radio"
                          label={this.state.question.a}
                          value={this.state.question.a}
                          name={'respuestas'}
                          id={`respuesta1`}
                          onChange={this.onChanged}
                      />
                      
                      <RadioStyle
                          type="radio"
                          label={this.state.question.b}
                          value={this.state.question.b}
                          name={'respuestas'}
                          id={`respuesta2`}
                          onChange={this.onChanged}
                      />
                      <RadioStyle
                          type="radio"
                          label={this.state.question.c}
                          value={this.state.question.c}
                          name={'respuestas'}
                          id={`respuesta3`}
                          onChange={this.onChanged}
                      />
                      <RadioStyle
                          type="radio"
                          label={this.state.question.d}
                          value={this.state.question.d}
                          name={'respuestas'}
                          id={`respuesta4`}
                          onChange={this.onChanged}
                      />
                  </Form.Group>
                  <ButtonStyle variant="primary" type="submit" onClick={() => { this.setState({ numberQuestion: this.state.numberQuestion + 1 }) }}>
                      Enviar
                  </ButtonStyle>
                  <h2 style={{ textAlign: "center" }}>{this.state.score}/{questionGeek.length} </h2>
              </FormStyle>
          </DivForm>
      )
  }
}