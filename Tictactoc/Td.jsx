import React, {memo, useEffect,useRef, useCallback} from 'react';
import { CLICK_CELL } from './Tictactoe';

const Td = memo(
    ({rowIndex, cellIndex, dispatch, cellData}) => {

    console.log("tddddddd")


    //뭐가 렌더링을 유발했는지 잘 모르겠을때 쓰는 방식
    const ref = useRef([]);
    useEffect(()=> {
        console.log(rowIndex === ref.current[0], rowIndex === ref.current[1], rowIndex === ref.current[2], rowIndex === ref.current[3])

        ref.current  = [rowIndex, cellIndex, dispatch, cellData]
    }, [rowIndex,cellIndex, dispatch, cellData])

    const onClickTd = useCallback(()=> {
        console.log(rowIndex, cellIndex)
        if (cellData){
            return;
        }
        dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex});
        // dispatch({type: CHANGE_TURN});
    },[cellData])

    return (
        <td onClick={onClickTd}>{cellData}</td>
    );
    }
);
export default Td