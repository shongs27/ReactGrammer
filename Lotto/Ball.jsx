import React, {PureComponent, memo} from 'react';

//함수 컴포넌트가 Hooks를 말하는것은 아니다
//useState, useEffect같은 것이 Hooks를 말한다
// PureComponent를 적용하고 싶으면 

const Ball = memo((props) => {
    const {number} = props;
        let background;
        if(number <= 10){
            background = 'red';
        } else if (number <=20) {
            background ='orange';
        } else if (number <= 30){
            background = 'yellow';
        } else if (number <= 40){
            background = "blue";
        } else {
            background = 'green';
        }
        return (
            <div className ="ball" style={{background}}>{number}</div>
        )

});

// class Ball extends PureComponent {
//     render() {
//         const {number} = this.props;
//         let background;
//         let(number <= 10){
//             background = 'red';
//         } else if (number <=20) {
//             background ='orange';
//         } else if (number <= 30){
//             background = 'yellow';
//         } else if (number <= 40){
//             background = "blue";
//         } else {
//             background = 'green';
//         }
//         return (
//             <div className ="ball" style={{background}}>{number}</div>
//         )
//     }

// }
export default Ball;