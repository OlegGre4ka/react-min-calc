import styled from 'styled-components';
import {IoBackspaceOutline} from 'react-icons/io5';

const CalculatorWrapper = styled.div`
  width: 380px;
  height: 620px;
  background-color: lightblue;
  border: 1px solid black;
  margin: 0 auto;
`
const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: #fff;
  border: 1px solid black;
  margin: 20px;
`
const ButtonsWrapper = styled.div`
  margin-top: 20px;
`
const BackSpaceIcon = styled(IoBackspaceOutline)`
  color: grey;
`

export {CalculatorWrapper, Display, ButtonsWrapper, BackSpaceIcon}