import * as React from 'react';
import SelectionPanel from '../selection-panel/selection-panel';
import ViewContainer from '../view-container/view-container';
import Path from '../path/path';

function Home() {
    return (
        <div>
            <SelectionPanel />
            <ViewContainer />
            <Path />
        </div>
    );
}

export default Home;
