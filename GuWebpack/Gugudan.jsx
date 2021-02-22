const React = require('react');


    
const Gugudan = () =>  {
            const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
            const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
            const [result, setResult] = React.useState('');
            const [value, setValue] = React.useState('');
            const focu = React.useRef(null);


            const mit = (e) => {
                e.preventDefault();
                if(first * second === parseInt(value)){
                    setFirst(Math.ceil(Math.random() * 9));
                    setSecond(Math.ceil(Math.random() * 9));
                    setValue('');
                    setResult('성공');
                    focu.current.focus();
                } else {
                    setValue('');
                    setResult('실패');
                    focu.current.focus();
                }

            }

            const input = (e) => {setValue(e.target.value);}

            return (

                <div>
                    <div> {first} 곱하기 {second} 는?</div>
                    <form onSubmit = {mit}>
                        <input type="number" ref={focu} value ={ value } onInput ={input}  />
                        <button>눌러</button>
                        <div>{result}</div>
                    </form> 
                </div>

            )

        
        }        

module.exports = Gugudan;