import React from 'react';
import {BrowserRouter, HashRouter, Route, Link} from 'react-router-dom';

import Baseball from '../Baseball/BaseballClass';
import RSP from '../RSP/RspClass';
import Lotto from '../Lotto/LottoClass';
import GameMatcher from './GameMatcher'

const Games = () => {
    return (
        <BrowserRouter>
            {/* 공통인부분 */}
            <div> 
                
                <Link to="/game/Baseball">숫자야구 </Link>
                &nbsp;
                <Link to="/game/RSP">가위바위보 </Link>
                &nbsp;
                <Link to="/game/Lotto">로또생성기</Link>
                &nbsp;
                <Link to="/game/index">게임 매쳐</Link>
            </div>
            {/* 바뀌는 부분 */}
            <div>

                {/* <Route path="/Baseball" component={Baseball} />
                <Route path="/RSP" component={RSP} />
                <Route path="/lotto" component={Lotto} /> */}
                
                <Route path="/game/:name" component={GameMatcher} /> 
                <Route path="/game/Baseball" render ={(props) => <GameMatcher {...props} />}
                />
            </div>
        
        </BrowserRouter>
    )
}

export default Games;