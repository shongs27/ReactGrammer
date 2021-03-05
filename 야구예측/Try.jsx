const React = require('react');
const {Component, PureComponent, memo} = React;


class Try extends PureComponent{
    
    render(){
        const {tryInfo} = this.props
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
                  
        )
    }
}

// const Try = memo({tryInfo}) => {
    
    
//     return (
//         <li>
//             <div>{tryInfo.try}</div>
//             <div>{tryInfo.result}</div>
//         </li>
//     )
// }

module.exports = Try;
