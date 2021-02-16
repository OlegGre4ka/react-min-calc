import React, { useState } from 'react';
import _ from 'lodash';
import { CalculatorWrapper, Display, ButtonsWrapper, BackSpaceIcon } from './Styled';
import Button from './../../shared/Button';
import Input from './../../shared/Input';


const Calculator = () => {
    const [inputValue, setInputValue] = useState('');
    const [resultValue, setResultValue] = useState('');

    const buttonsData = [
        { value: 'AC', code: 46, backgroundColor: 'lightgrey' },
        { value: <BackSpaceIcon />, code: 8, },
        { value: '%', code: 48 },
        { value: '/', code: 111, borderColor: 'orange' },
        { value: '7', code: 103 },
        { value: '8', code: 104 },
        { value: '9', code: 105 },
        { value: '*', code: 106, borderColor: 'orange' },
        { value: '4', code: 100 },
        { value: '5', code: 101 },
        { value: '6', code: 102 },
        { value: '-', code: 109, borderColor: 'orange' },
        { value: '1', code: 97 },
        { value: '2', code: 98 },
        { value: '3', code: 99 },
        { value: '+', code: 107, borderColor: 'orange' },
        { value: '.', code: 110 },
        { value: '0', code: 96 },
        { value: '=', code: 187, backgroundColor: 'orange', borderColor: 'black', width: '160px' },
    ];

    const inputValueChangeHandler = (code, val) => {
        let charNaN = '';

        let newInputValue = inputValue + val;

        if (/\+\+/.test(newInputValue)
            || /\-\-/.test(newInputValue)
            || /\*\*/.test(newInputValue)
            || /\/\//.test(newInputValue)
            || /\%\%/.test(newInputValue)
            || /\.\./.test(newInputValue)
            || newInputValue.slice(0, 2) === '00') {
            newInputValue = newInputValue.substring(0, inputValue.toString().length);
        }

        if (val !== '=' && code !== 8) {

            setInputValue(newInputValue);

            switch (true) {
                case /\+/.test(newInputValue.substring(0, newInputValue.length - 1)):
                    let sum = newInputValue.split('+').reduce((a, b) => (+a) + (+b), 0);
                    if (/\./.test(sum)) {
                        setResultValue(sum.toFixed(2));
                    } else {
                        setResultValue(sum);
                    }
                    if (Number.isNaN(sum)) {
                        charNaN = newInputValue.charAt(newInputValue.length - 1);
                        sum = newInputValue.substring(0, newInputValue.length - 1).split('+').reduce((a, b) => (+a) + (+b), 0);
                        if (/\./.test(sum)) {
                            setInputValue(sum.toFixed(2) + charNaN);
                            setResultValue(sum.toFixed(2));
                        } else {
                            setInputValue(sum + charNaN);
                            setResultValue(sum);
                        }
                    }
                    break;
                case /\-/.test(newInputValue.substring(0, newInputValue.length - 1)):
                    let sub = _.reduce(newInputValue.split('-'), (a, b) => a - b);
                    if (/\./.test(sub)) {
                        setResultValue(sub.toFixed(2));
                    } else {
                        setResultValue(sub);
                    }
                    if (Number.isNaN(sub)) {
                        charNaN = newInputValue.charAt(newInputValue.length - 1);
                        sub = _.reduce(newInputValue.substring(0, newInputValue.length - 1).split('-'), (a, b) => a - b);
                        if (/\./.test(sub)) {
                            setInputValue(sub.toFixed(2) + charNaN);
                            setResultValue(sub.toFixed(2));
                        } else {
                            setInputValue(sub + charNaN);
                            setResultValue(sub);
                        }
                    }
                    break;
                case /\*/.test(newInputValue.substring(0, newInputValue.length - 1)):
                    let multiple = newInputValue.split('*').filter(x => x.length !== 0).reduce((a, b) => a * b, 1);
                    if (/\./.test(multiple)) {
                        setResultValue(multiple.toFixed(2));
                    } else {
                        setResultValue(multiple);
                    }
                    if (Number.isNaN(multiple)) {
                        charNaN = newInputValue.charAt(newInputValue.length - 1);
                        multiple = newInputValue.substring(0, newInputValue.length - 1).split('*').reduce((a, b) => a * b, 1);
                        if (/\./.test(multiple)) {
                            setInputValue(multiple.toFixed(2) + charNaN);
                            setResultValue(multiple.toFixed(2));
                        } else {
                            setInputValue(multiple + charNaN);
                            setResultValue(multiple);
                        }
                    }
                    break;
                case /\//.test(newInputValue.substring(0, newInputValue.length - 1)):
                    let divide = _.reduce(newInputValue.split('/').filter(x => x.length !== 0), (a, b) => a / b);
                    if (/\./.test(divide)) {
                        setResultValue(divide.toFixed(2));
                    } else {
                        setResultValue(divide);
                    }
                    if (Number.isNaN(divide)) {
                        charNaN = newInputValue.charAt(newInputValue.length - 1);
                        divide = _.reduce(newInputValue.substring(0, newInputValue.length - 1).split('/'), (a, b) => a / b);
                        if (/\./.test(divide)) {
                            setInputValue(divide.toFixed(2) + charNaN);
                            setResultValue(divide.toFixed(2));
                        } else {
                            setInputValue(divide + charNaN);
                            setResultValue(divide);
                        }
                    }
                    break;
                case /\%/.test(newInputValue.substring(0, newInputValue.length - 1)):
                    let percent = _.reduce(newInputValue.split('%'), (a, b) => a * (b / 100));
                    if (/\./.test(percent)) {
                        setResultValue(percent.toFixed(2));
                    } else {
                        setResultValue(percent);
                    }
                    if (Number.isNaN(percent)) {
                        charNaN = newInputValue.charAt(newInputValue.length - 1);
                        percent = _.reduce(newInputValue.substring(0, newInputValue.length - 1).split('%'), (a, b) => a * (b / 100));
                        if (/\./.test(percent)) {
                            setInputValue(percent.toFixed(2) + charNaN);
                            setResultValue(percent.toFixed(2));
                        } else {
                            setInputValue(percent + charNaN);
                            setResultValue(percent);
                        }
                    }
                    break
            }
        }
        else {
            if (inputValue.length !== 0 && resultValue.length === 0) {
                setInputValue(inputValue);
                setResultValue('');
            } else {
                setInputValue(resultValue);
                setResultValue('');
            }
        }
        if (val === 'AC') {
            setInputValue('');
            setResultValue('');
        }
        if (code === 8) {
            setInputValue(inputValue.toString().substring(0, inputValue.toString().length - 1));
            let newInputValue = inputValue.toString().substring(0, inputValue.toString().length - 1);
            setResultValue(newInputValue);

            switch (true) {
                case /\+/.test(newInputValue):
                    let sum = newInputValue.split('+').reduce((a, b) => (+a) + (+b), 0);
                    if (/\./.test(sum)) {
                        setResultValue(sum.toFixed(2));
                    } else {
                        setResultValue(sum);
                        console.log(newInputValue, 'newInputValue-after-1')
                    }
                    break;
                case /\-/.test(newInputValue):
                    let sub = _.reduce(newInputValue.split('-'), (a, b) => a - b);
                    if (/\./.test(sub)) {
                        setResultValue(sub.toFixed(2));
                    } else {
                        setResultValue(sub);
                    }
                    break;
                case /\*/.test(newInputValue):
                    let multiple = newInputValue.split('*').filter(x => x.length !== 0).reduce((a, b) => a * b, 1);
                    if (/\./.test(multiple)) {
                        setResultValue(multiple.toFixed(2));
                    } else {
                        setResultValue(multiple);
                    }
                    break;
                case /\//.test(newInputValue):
                    let divide = _.reduce(newInputValue.split('/').filter(x => x.length !== 0), (a, b) => a / b);
                    if (/\./.test(divide)) {
                        setResultValue(divide.toFixed(2));
                    } else {
                        setResultValue(divide);
                    }
                    break;
                case /\%/.test(newInputValue):
                    let percent = _.reduce(newInputValue.split('%'), (a, b) => a * (b / 100));
                    if (/\./.test(percent)) {
                        setResultValue(percent.toFixed(2));
                    } else {
                        setResultValue(percent);
                    }
                    break
            }
        }
    }

    const keyDownHandler = e => {
        // console.log(e.keyCode, 'code')
        buttonsData.forEach(button => {
            if (e.keyCode === button.code) {
                inputValueChangeHandler(button.code, button.value)
            }
        })
    }
    // console.log(inputValue, resultValue, 'before render')
    return (
        <>
            <h1>Calculator</h1>
            <CalculatorWrapper>
                <Display>
                    <div>
                        <Input height='40px' fontSize="25px" value={inputValue} />
                        <Input height='30px' fontSize="18px" color="grey" value={resultValue} />
                    </div>
                </Display>
                <ButtonsWrapper>
                    {buttonsData.map(item => <Button key={item.code}
                        onClick={() => inputValueChangeHandler(item.code, item.value)}
                        onKeyDown={keyDownHandler}
                        width={item.width}
                        backgroundColor={item.backgroundColor}
                        borderColor={item.borderColor}>{item.value}</Button>)}
                </ButtonsWrapper>
            </CalculatorWrapper>
        </>
    )
}

export default Calculator