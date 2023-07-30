import * as React from 'react';
import SelectionPanel from '../selection-panel/selection-panel';
import ViewContainer from '../view-container/view-container';
import Path from '../path/path';
import './home.scss'

function Home() {
    return (
        <div
            className={'home'}
        >
            <SelectionPanel />
            <ViewContainer />
            <Path />
        </div>
    );
}

export default Home;
