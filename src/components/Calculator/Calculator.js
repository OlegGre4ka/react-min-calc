import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { CalculatorWrapper, Display, ButtonsWrapper, BackSpaceIcon } from './Styled';
import Button from './../../shared/Button';
import Input from './../../shared/Input';


const Calculator = () => {
    const [inputValue, setInputValue] = useState('');
    const [resultValue, setResultValue] = useState('');
    const [result, setResult] = useState([])

    const buttonsData = [
        { value: 'AC', backgroundColor: 'lightgrey' },
        { id: 2, value: <BackSpaceIcon /> },
        { value: '%' },
        { value: '/', borderColor: 'orange' },
        { value: '7' },
        { value: '8' },
        { value: '9' },
        { value: '*', borderColor: 'orange' },
        { value: '4' },
        { value: '5' },
        { value: '6' },
        { value: '-', borderColor: 'orange' },
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '+', borderColor: 'orange' },
        { value: '.' },
        { value: '0' },
        { value: '=', backgroundColor: 'orange', borderColor: 'black', width: '160px' },
    ];

    const inputValueChangeHandler = (id, val) => {
        let newInputValue = inputValue + val;
        if (val !== '=') {

            setInputValue(newInputValue);
            switch (true) {
                case /\+/.test(newInputValue):
                    let sum = newInputValue.split('+').reduce((a, b) => (+a) + (+b), 0).toString();
                    setResultValue(sum);
                    let charNaN = '';
                    if (sum === 'NaN') {
                        charNaN = newInputValue.charAt(newInputValue.length - 1);
                        console.log(newInputValue,sum, charNaN,newInputValue.substring(1, newInputValue.length - 1), 'charNan')
                        sum = newInputValue.substring(0, newInputValue.length - 1).split('+').reduce((a, b) => (+a) + (+b), 0).toString();
                        setInputValue(sum + charNaN);
                        setResultValue(sum);
                    }
                    break;
                case /\-/.test(newInputValue):
                    setResultValue(_.reduce(newInputValue.split('-'), (a, b) => a - b));
                    break;
                case /\*/.test(newInputValue):
                    setResultValue(newInputValue.split('*').reduce((a, b) => a * b, 1));
                    break;
                case /\//.test(newInputValue):
                    setResultValue(_.reduce(newInputValue.split('/'), (a, b) => a / b));
                    break;
            }
        }
        else {
            if (inputValue.length !== 0 && resultValue.length === 0) {
                setInputValue(inputValue);
                setResultValue('');
            } else {
                setInputValue(resultValue);
                setResultValue('');
                // dispatch(saveResult(resultValue));
                setResult([].push(resultValue))
            }
        }
        if (val === 'AC') {
            setInputValue('');
            setResultValue('');
        }
        if (id === 2) {
            setInputValue(inputValue.toString().substring(0, inputValue.toString().length - 1));
            // setResultValue('');
        }
    }

    return (
        <>
            <h1>Calculator</h1>
            <CalculatorWrapper>
                <Display>
                    <div>
                        <Input height='40px' fontSize="25px" value={inputValue} />
                        <Input height='30px' fontSize="18px" color="grey" value={resultValue === 'NaN' ? '' : resultValue} />
                    </div>
                </Display>
                <ButtonsWrapper>
                    {buttonsData.map(item => <Button key={item.value}
                        onClick={() => inputValueChangeHandler(item.id, item.value)}
                        width={item.width}
                        backgroundColor={item.backgroundColor}
                        borderColor={item.borderColor}>{item.value}</Button>)}
                </ButtonsWrapper>
            </CalculatorWrapper>
        </>
    )
}

export default Calculator