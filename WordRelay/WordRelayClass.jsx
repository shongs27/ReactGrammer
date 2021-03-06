const React = require('react');
const {Component} = React;

class WordRelayClass extends Component {
    state = {
        text : '홍원배',
        value : '',
        result : '',
        goRef : React.createRef()
               
    }       
    
   

    onSubmitInput = (e) => {
        e.preventDefault();        
        if (this.state.text[this.state.text.length-1] === this.state.value[0] ){
                    this.setState({result: "정답",
                                    text: this.state.value,
                                    value : ''});
                    this.state.goRef.current.focus();                  
                }else {
                    this.setState({result: '실패'});
                    this.setState({value: ''})
                    this.state.goRef.current.focus(); 
                }
    }
    onChangeInput = (e) => {
    
        this.setState({value: e.target.value});
                
    }
    
    render() {
        return ( 
            <>
            <h1>{this.state.text}</h1>
            <form onSubmit = {this.onSubmitInput}>
                <input type="text" ref = {this.state.goRef} value = {this.state.value} onChange = {this.onChangeInput}/>
                <button>입력</button>
            </form>
            <div>{this.state.result}</div>
            </>
        )
    }
    
}

module.exports = WordRelayClass;