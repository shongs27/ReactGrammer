const React = require("react");
const { useState, useRef, useReducer, useCallback, useMemo, memo } = React;

const ini = {
    text: "홍원배",
    value: "",
    result: "",
    // goRef : useRef(null)
};

function reducer(state, action) {
    switch (action.type) {
        case "성공":
            return {
                result: "정답",
                text: state.value,
                value: "",
                // goRef : goRef.current.focus()
            };
        case "실패":
            return {
                ...state,
                result: "실패",
                value: "",
                // goRef : goRef.current.focus()
            };
        case "타겟":
            return {
                ...state,
                value: action.value,
            };
        default:
            throw new Error();
    }
}

const WordRelayHook = () => {
    // const [text,setText] = useState('홍원배');
    // const [value,setValue] = useState('');
    // const [result,setResult] = useState('');
    const goRef = useRef(null);

    const [state, dispatch] = useReducer(reducer, ini);
    const { text, value, result } = state;


    const onSubmitInput = (e) => {
        e.preventDefault();
        if (text[text.length - 1] === value[0]) {
            dispatch({ type: "성공" });
            // setResult('정답');
            // setText(value);
            // setValue('');
            goRef.current.focus();
        } else {
            dispatch({ type: "실패" });
            // setResult('실패');
            // setValue('')
            goRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        // setValue(e.target.value)
        dispatch({ type: "타겟", value: e.target.value });
    };

    return (
        <>
            <h1>{text}</h1>
            <form onSubmit={onSubmitInput}>
                <input type="text" ref={goRef} value={value} onChange={onChangeInput} />
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );
};

module.exports = WordRelayHook;
