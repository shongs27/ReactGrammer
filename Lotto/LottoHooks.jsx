import React, { useRef, useMemo, useEffect, useState } from 'react';
import Ball from './Ball';


function getWinNumbers() {
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  }


const Lotto = () => {
    const [winNumbers, setwinNumbers] = useState(getWinNumbers());
    const [winBalls, setwinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    
    useEffect(() => {
        for (let i =0; i< winNumbers.length -1; i++){
            timeouts.current[i] = setTimeout(() => {
                setwinBalls((prev) => [...prev, winNumbers[i]] )
               
            }, (i+1) * 1000) // 각 공이 차이있게 나타남
        }

        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000) //보너스 공과 redo버튼 등장
        
        return () => {
            timeouts.current.forEach((v) => {
                 clearTimeout(v);
             })
         }}, [timeouts.current])
        
    

    const onClickRedo = () => {
        console.log('클릭 Redo');
        setwinNumbers(getWinNumbers());
        setwinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }

    
    return (
        <>
            <div>당첨숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한번 더!</button>}
        </>

    )
}

export default Lotto;

