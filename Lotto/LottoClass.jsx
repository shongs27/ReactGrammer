import React, { Component } from 'react';
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


class Lotto extends Component {
    state = {
        winNumbers: getWinNumbers(), // 당첨 숫자들
        winBalls: [],
        bonus : null, //보너스 공
        redo: false, //재시작 버튼 값
    };

    timeouts = [];

   
    runTimeouts = () => { 
        for (let i =0; i< this.state.winNumbers.length -1; i++){
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState)=>{
                    //push말고 [...prevState,] 로 해야!
                    return {winBalls: [...prevState.winBalls, this.state.winNumbers[i]]}
                });
            }, (i+1) * 1000) // 각 공이 차이있게 나타남
        }

        this.timeouts[6] = setTimeout(() => {
            this.setState({
                bonus: this.state.winNumbers[6],
                redo : true,
            })
        }, 7000) //보너스 공과 redo버튼 등장
    }

    componentDidMount(){
        console.log('DidMount')
       this.runTimeouts();
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate1')
        if(this.state.winBalls.length === 0){
            console.log('DidUpdate 조건')
            this.runTimeouts();
        }
        if (prevState.winNumbers !== this.state.winNumbers) {
            console.log('로또 숫자를 생성합니다.');
          }
    }

    // componentWillUnmount(){
        
    //     this.timeouts.forEach((v) => {
    //         clearTimeout(v);
    //     })
    // } 
    //Unmount는 실행이 안되는데?

    onClickRedo = () => {
        console.log('클릭 Redo');
        this.setState({
            winNumbers: getWinNumbers(), 
            winBalls: [],
            bonus : null, 
            redo: false,
        }),
        this.timeouts = [];
    }

    render() {
        const { winBalls, bonus, redo } = this.state;
        return (
            <>
                <div>당첨숫자</div>
                <div id="결과창">
                    {winBalls.map((v) => <Ball key={v} number={v} />)}
                </div>
                <div>보너스</div>
                {bonus && <Ball number={bonus} />}
                {redo && <button onClick={this.onClickRedo}>한번 더!</button>}
            </>

        )
    }

}

export default Lotto;

