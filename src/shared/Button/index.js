import styled from 'styled-components';

const Button = styled.button`
  width: ${props=> props.width ? props.width : '70px'};
  height: 70px;
  background-color: ${props=> props.backgroundColor ? props.backgroundColor : '#fff'};
  font-size: 20px;
  border-color: ${props=>props.borderColor && props.borderColor };
  cursor: pointer;
  margin: 10px;

  &:active, &:focus {
      outline: none;
  }
`
export default Button