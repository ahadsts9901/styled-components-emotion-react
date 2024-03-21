import styled from '@emotion/styled';


const Emotion = ({ children }) => {

  const EmotionButton = styled.button`
  width:250px;
  padding: 1em;
  background-color: red;
  color:white;
  &:hover{
    box-shadow: 0px 0px 10px #000;
  }
  `

  return (
    <>
      <EmotionButton>{children}</EmotionButton>
    </>
  )
}

export default Emotion