const React = require('react');
const { useReducer } = React;


const iniState = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    result: "",
    value: "",
}

function reducer(state, action) {
    switch (action.type) {
        case 'success':
            return {
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: "",
                result: "성공"
            }
        case 'failure':
            return {
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: "",
                result: "실패"
            }
        case 'target':

            return {
                ...state,
                value: action.value
            }

        default:
            throw new Error();

    }
}

const Gugudan = () => {

    const [state, dispatch] = useReducer(reducer, iniState)
    const { first, second, result, value } = state;
    // const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    // const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    // const [result, setResult] = React.useState('');
    // const [value, setValue] = React.useState('');
    const focu = React.useRef(null);

    const mit = (e) => {
        e.preventDefault();
        if (first * second === parseInt(value)) {
            dispatch({ type: 'success' })
            // setFirst(Math.ceil(Math.random() * 9));
            // setSecond(Math.ceil(Math.random() * 9));
            // setValue('');
            // setResult('성공');
            focu.current.focus();
        } else {
            dispatch({ type: 'failure' })
            // setValue('');
            // setResult('실패');
            focu.current.focus();
        }

    }

    const input = (e) => { dispatch({ type: 'target', value: e.target.value }); }

    return (

        <div>
            <div> {first} 곱하기 {second} 는?</div>
            <form onSubmit={mit}>
                <input type="number" ref={focu} value={value} onInput={input} />
                <button>눌러</button>
                <div>{result}</div>
            </form>
        </div>

    )


}

module.exports = Gugudan;