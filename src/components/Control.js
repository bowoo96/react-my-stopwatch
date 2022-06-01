import React, { useState, useEffect } from 'react'

const Control = (props) => {
    const [startFlag, setStartFlag] = useState(false);
    const [miliSecond, setMiliSecond] = useState(0);
    // const [second, setSecond] = useState(0);
    // const [minute, setMinute] = useState(0);

    const startHandler = () => {
        setStartFlag(true);
    };

    const stopHandler = () => {
        setStartFlag(false);
    };

    // 효율적
    useEffect(() => {
        props.test(miliSecond);
    }, [miliSecond]);

    useEffect(() => {
        if (!startFlag) return;

        const timer = setInterval(() => {
            setMiliSecond((prevSecond) => prevSecond + 1);
        }, 10) // 실행할 코드

        return () => {
            clearInterval(timer);
        }
    }, [startFlag]);


    return (
        <div>
            {miliSecond}
            <button id="button-start" onClick={startHandler}>Start</button>
            <button id="button-stop" onClick={stopHandler}>Stop</button>
            <button id="button-reset">Reset</button>
            <button id="button-lab">lab</button>
        </div>
    )
}

export default Control