import styled from 'styled-components';


const Styled = ({ children }) => {

  const StyledButton = styled.button`
  width:250px;
  padding: 1em;
  background-color: yellow;
  color:black;
  &:hover{
    box-shadow: 0px 0px 10px #000;
  }
  `

  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  )
}

export default Styled