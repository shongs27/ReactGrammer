const React = require('react');
const {useState, useRef} = React;

const WordRelayHook = () => {

    const [text,setText] = useState('홍원배');
    const [value,setValue] = useState('');
    const [result,setResult] = useState('');
    const goRef = useRef(null)    
    
   

    onSubmitInput = (e) => {
        e.preventDefault();        
        if (text[text.length-1] === value[0] ){
                    setResult('정답');
                    setText(value);
                    setValue('');
                    goRef.current.focus();                  
                }else {
                    setResult('실패');
                    setValue('')
                    goRef.current.focus(); 
                }
    }
    onChangeInput = (e) => {
        setValue(e.target.value)
                
    }
    
    return ( 
            <>
            <h1>{text}</h1>
            <form onSubmit = {onSubmitInput}>
                <input type="text" ref = {goRef} value = {value} onChange = {onChangeInput}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
            </>
        )
    }
    




module.exports = WordRelayHook;