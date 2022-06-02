import React, { useState, useEffect } from 'react'

const Control = (props) => {
    const [startFlag, setStartFlag] = useState(false);
    const [miliSecond, setMiliSecond] = useState(0);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [timer, setTimer] = useState();

    const startHandler = () => {
        setStartFlag(true);
    };

    const stopHandler = () => {
        setStartFlag(false);
    };

    // miliSecond를 실시간으로 부모 컴포넌트에 전송.
    useEffect(() => {
        props.enteredTimer([miliSecond,second,minute]);
        if (miliSecond === 99) {
            setMiliSecond(0);
            setSecond((prevSecond) => prevSecond + 1)
            if(second === 59){
                setSecond(0);
                setMinute((prevSecond) => prevSecond + 1)
                if(minute === 60){
                    setMiliSecond(0);
                    setSecond(0);
                    setMinute(0);
                    clearInterval(test);
                }
            }
        }

    }, [miliSecond]);

    // 시간 증가 기능
    useEffect(() => {
        if (!startFlag) return;

        // 실행할 코드
        const test = setInterval(() => {
            setMiliSecond((prevMiliSecond) => prevMiliSecond + 1);
        }, 10);

        setTimer(test);

        return () => {
            console.log(timer);
            clearInterval(test);
        }
    }, [startFlag]);


    return (
        <div>
            <button id="button-start" onClick={startHandler}>Start</button>
            <button id="button-stop" onClick={stopHandler}>Stop</button>
            <button id="button-reset">Reset</button>
            <button id="button-lab">lab</button>
        </div>
    )
}

export default Control