import "./App.css"
import React, { useState } from 'react';
import Emotion from "./components/emotion";
import Styled from "./components/styled";

const App = () => {

  const [isStyled, setIsStyled] = useState(false)

  return (
    <>
      <div className="cont">
        <button onClick={() => setIsStyled(true)}>Styled Components</button>
        <button onClick={() => setIsStyled(false)}>Emotion Components</button>
      </div>
      <div className="buttonsCont">
        {
          isStyled ? <Styled>Styled Components Button</Styled> : <Emotion>Emotion React Button</Emotion>
        }
      </div>
    </>
  )
}

export default App