import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';


function getWinNumbers() {
    console.log('getWinNumbers');
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
    const lottoNumbers = useMemo(() => getWinNumbers(), []); //useMemo로 반복 호출하던 함수를 제한함
    const [winNumbers, setwinNumbers] = useState(lottoNumbers);
    const [winBalls, setwinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    
    useEffect(() => {
        console.log('useEffect');
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
    
    // useEffect(() => {
    //     console.log('로또 숫자를 생성합니다');
    // }, [winNumbers]);
    

    const onClickRedo = () => {
        console.log('클릭 Redo');
        setwinNumbers(getWinNumbers());
        setwinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    };

    
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

// //componentDidMount만 하는 법
// useEffect(()=> {
//     //ajax
// }, []);

// //componentDidUpdate만 하는 법
// const mounted = useRef(false);
// useEffet(() => {
//     if(!mounted.current){
//         mounted.current = true
//     } else {
//         //ajax
//     }
// },[바뀔부분])
