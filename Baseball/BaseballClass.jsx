const React = require('react');
const Try = require('./Try');
const {Component} = React;


function getNumbers(){ // 외부함수로 작성함으로써 Class -> Hooks로 바꿨을때도 변화줄게 없다
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i =0; i < 4 ;  i+=1){
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class BaseballClass extends Component {

    state = {
        result : '',
        value: '',
        answer: getNumbers(), // [1,3,5,7]
        tries: [],
    }

    
    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')){
            this.setState({
                result: "홈런",
                tries : [...this.state.tries, {try: this.state.value, result:"홈런!" }]
            });
            alert('게임을 다시 시작합니다');
            this.setState({ //초기화 중..
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else { //답 틀렸으면
            const answerArray = this.state.value.split('').map((v)=> parseInt(v));
            let strike =0;
            let ball = 0;
            if (this.state.tries.length >=9){ //10번 이상 틀렸을때
                this.setState({
                    result : `10번 넘게 틀려서 실패 답은 ${answer.join(',')}였습니다`
                });
                alert('게임을 다시 시작합니다');
                this.setState({ //초기화 중..
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                })
            } else {
                for(let i=0; i<4 ; i +=1){
                    if (answerArray[i] === this.state.answer[i]){
                        strike += 1;
                    }else if (this.state.answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, {try: this.state.value, result : `${strike} 스트라이크, ${ball} 볼입니다`}]
                })
                this.setState({value: ''})
            }
        }
        
    }

    onChangeInput = (e) => {
        this.setState({
            value : e.target.value
        })
    }


    render() {
        const {result, value, answer, tries} = this.state
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit = {this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput}/>
                    <button>입력!</button>
                </form>
                <div>시도 : {tries.length}</div>
                <ul>
                {tries.map((v,i) => {
                    return (
                        <Try key = {`${i+1}차 시도: ${v.try}`} tryInfo = {v} />

                    )
                })}
                </ul>
            </>
        )
    }
}

module.exports = BaseballClass;