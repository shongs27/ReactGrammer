const React = require('react');
const { Component, PureComponent, memo } = React;


console.log('다음 컴포넌트(무시)')

const Try = ({ tryInfo, tryClick }) => {
    console.log('넥스트 컴포넌트 -1')


    const onClick2 = () => {


    }

    return (
        <li>
            {console.log('넥스트 컴포넌트 -2')}
            <span>{tryInfo}</span>
            <button onClick={tryClick}>버튼2</button>
            {/* <div>{tryInfo.result}</div> */}
        </li>
    )
}

module.exports = memo(Try);








// class Try extends PureComponent {

//     render() {
//         const { tryInfo } = this.props
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>

//         )
//     }
// }