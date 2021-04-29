import React, { useCallback, Component, PureComponent, memo, useState } from 'react';
import Try from './Try';

//불변성
// props 렌더링

console.log('컴포넌트 시작(무시)');

const RenderTest = () => {
    console.log('안 첫번째')
    const [counter, setCounter] = useState(0);

    const onClick = useCallback(() => {

        setCounter((counter) => counter + 1);
    }, [])

    console.log('안 두번째')
    return (

        <div>
            {console.log('안 세번째(렌더링부분)')}
            {counter}
                &nbsp;
            <button onClick={onClick}>클릭</button>
            <Try tryInfo={counter} tryClick={onClick} />
        </div>



    )

}


export default RenderTest;




// class RenderTest extends PureComponent{

//     state = {
//         counter: 0,
//     }

//     onClick = () => {
//         this.setState({

//         });

//     }

//     // shouldComponentUpdate(nextProps, nextState){
//     //     if (this.state.counter !== nextState.counter){
//     //         return true
//     //     }
//     //     return false
//     // }

//     render(){
//         return (

//             <div>
//                 <button onClick ={this.onClick}>클릭</button>
//             </div>



//         )

//     }

// }
// export default RenderTest;


// state값이 변화할때마다 렌더링을 하자
// 성능최적화를 위해 PureComponent/ Component + shoudComponentUpdate()메서드

