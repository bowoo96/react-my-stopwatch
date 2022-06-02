import React,{useState} from 'react'

const TimeContent = (props) => {

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>Vanilla JavaScript Stopwatch</h2>
            <p>
                <span id="minute">{props.enteredTime[2]}</span>:
                <span id="second">{props.enteredTime[1]}</span>.
                <span id="mili_second">{props.enteredTime[0]}</span>
            </p>
        </div>
    )
}

export default TimeContent