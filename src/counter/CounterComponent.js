
import React, { useState } from 'react';
import './counter.css'
function CounterComponent() {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInitialValue] = useState(1)
    let maxValue = 1010;

    const addToCounter = () => {
        let max = maxValue ? maxValue : 1000;
        let maxVal = parseInt(inputValue) + counter

        if (maxVal <= max) {
            setCounter(parseInt(inputValue) + counter)
        }

    }

    const substructFromCounter = () => {
        setCounter(counter - inputValue)
    }

    return (
        <div className="counterApp">
            <h1 data-testid="header">Counter App</h1>
            <h3 data-testid="counter">{counter}</h3>

            <div className="counter-block">
                <button
                    data-testid="btn-substruct"
                    onClick={substructFromCounter}
                    className="btn btn-substruct"
                >-</button>
                <input
                    type="text"
                    data-testid="input"
                    value={inputValue ? inputValue : 1}
                    className="text-center"
                    onChange={(e) => {
                        setInitialValue(e.target.value)
                    }
                    }
                />
                <button
                    data-testid="btn-add"
                    onClick={addToCounter}
                    className="btn btn-add"
                >+</button>
            </div>
        </div>
    )

}
export default CounterComponent;