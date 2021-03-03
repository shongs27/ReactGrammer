import React, {useReducer, useCallback, useEffect} from 'react';
import Table from './Table';

const initialState = {
    winner : "",
    turn : "O",
    tableData : [["","",""],["","",""],["","",""]],
    recentCell : [-1,-1]
}

//미래의 팁
export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";

const reducer = (state, action) => {
    switch (action.type){
        case SET_WINNER: {
            return {
                ...state,
                winner: action.winner,
            }
        }
        case CLICK_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData,
                recentCell: [action.row, action.cell]
            }
        }
        case CHANGE_TURN : {
            return {
                ...state,
                turn : state.turn === "O" ? "X" :"O"
            }
        }
        case RESET_GAME: {
            return {
                ...state,
                tableData : [["","",""],["","",""],["","",""]],
                recentCell : [-1,-1]
            }
        }
        default:
            return state;
    }

}

const Tictactoe = () => {
    // state, setState를 한방에 처리하기 위해 redux에서 따온 개념
    const [state, dispatch] = useReducer(reducer, initialState);
    const {tableData, turn, winner, recentCell} = state
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('o');
    // const [tableData, setTableData] = useState([["","",""],["","",""],["","",""]])
    
    const onClickTable = useCallback(() => {
        dispatch({type: SET_WINNER, winner : "O"})
    }, [])

    useEffect( () => {
        const [row, cell] = recentCell;
        if (row < 0){
            return;
        }
        let win = false;
        if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn){
            win = true; //클릭한 Td 열 검사
        }
        if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn){
            win = true; //클릭한 Td 행 검사
        }
        if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn){
            win = true; // 대각선
        }
        if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn){
            win = true; //역대각선
        }
        if (win){ //승리시}
            dispatch({type: SET_WINNER, winner: turn})
            dispatch({type: RESET_GAME, })
        }else{
            let all = true; //all이 true면 무승부라는 뜻
            tableData.forEach((row) => {
                row.forEach((cell) => {
                    if(!cell){
                    all = false; 
                    }
                });
            })
            if(all){
                dispatch({ type: SET_WINNER, winner: "아무개" });
                dispatch({ type: RESET_GAME });
            }else {
                dispatch({type: CHANGE_TURN});
            }  
        }           
    }, [tableData])

    return (
        <>
            <Table onClick = {onClickTable} tableData={tableData}
            dispatch = {dispatch} />
            {winner && <div>{winner}님의 승리</div>}
        </>
    )
}

export default Tictactoe;