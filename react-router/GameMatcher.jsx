import React, { Component } from 'react';
// GameMatcher가 연결되어있지 않은 경우
// import { withRouter } from 'react-router-dom';

import Baseball from '../Baseball/BaseballClass';
import RSP from '../RSP/RspClass';
import Lotto from '../Lotto/LottoClass';

const GameMatcher = ({ history, location, match }) => {

    if (match.params.name === 'Baseball') {
        return <Baseball />
    } else if (match.params.name === 'RSP') {
        return <RSP />
    } else if (match.params.name === 'Lotto') {
        return <Lotto />
    }

    return (
        <>
            일치하는 게임이 없습니다
        </>

    )
}

export default GameMatcher;