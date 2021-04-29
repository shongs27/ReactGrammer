import React, { useState, memo, useCallback, useMemo } from 'react'
import Try from './Try'

// const React = require('react');
// const {useState} = React;
// const Try = require('./Try');


const getNumbers = () => {

    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    console.log(array);
    return array;
};


const BaseballHooks = () => {

    const [result, setResult] = React.useState('');
    const [value, setValue] = React.useState('');
    const [answer, setAnswer] = React.useState(getNumbers);
    const [trim, setTrim] = React.useState([]);




    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {

            setTrim((t) => ([
                ...t,
                {
                    try: value,
                    result: '홈런!',
                }
            ]));
            setResult('홈런!');
            alert('게임을 다시 실행합니다.');
            setValue('');
            setAnswer(getNumbers());
            setTrim([]);

        } else { //답 틀렸으면
            const answerArray = value.split('').map((v) => parseInt(v));

            let strike = 0;
            let ball = 0;

            if (trim.length >= 9) { //10번 이상 틀렸을때

                setResult(`10번 넘게 틀려서 실패 답은 ${answer.join(',')}였습니다`)
                alert('게임을 다시 시작합니다');
                setValue(''); //초기화 중
                setAnswer(getNumbers());
                setTrim([]);

            } else {

                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTrim(t => ([
                    ...t,
                    {
                        try: value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다.`,
                    }
                ]));

                setValue('');
            }
        }

    }

    const onChangeInput = (e) => {

        setValue(e.target.value)

    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput} />
                <button>입력!</button>
            </form>
            <div>시도 : {trim.length}</div>
            <ul>
                {trim.map((v, i) => (
                    <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} />
                ))}
            </ul>
        </>
    )

};



export default memo(BaseballHooks);
// module.exports = BaseballHooks;

