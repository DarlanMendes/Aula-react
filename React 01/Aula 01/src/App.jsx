import { createElement } from "react"
import Exemplo from "./components/Exemplo"
import React from "react"

//const element = createElement(type, props, ...children)
// Referência : https://react.dev/reference/react/createElement

const Element = function(){
  return React.createElement(
    "div",
    {className:"elemento React"},
    "Olá! Esse é o elemento criado pelo método createElement do React"
    )
  
}
const Element2 = function(){
  return React.createElement(
    "div",
    {className:"elemento React"},
     createElement("h1",
     null,
     "Esse é o conteúdo do h1"
     )
    )
  
}

function App() {
  

  return (
    <>
    {/* <Element/>
    <Element2/> */}
    <Exemplo/>
      {/* Aqui você vai inserir o seu componente Header */}
      {/* Aqui você vai inserir o seu componente Card */}
    </>
  )
}

export default App
