import React, {Component, PureComponent, memo} from 'react';



const RenderTest = memo(() => {

    const [counter, setCounter] = React.useState(0);

    const onClick = () => {
        setCounter({});
        
    }

         return (

            <div>
                <button onClick ={onClick}>클릭</button>
            </div>



        )

})


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

