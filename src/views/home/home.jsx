import * as React from 'react';
import SelectionPanel from '../selection-panel/selection-panel';
import ViewContainer from '../view-container/view-container';
import Path from '../path/path';
import './home.scss';

class Home extends React.Component {
    render() {
        return (
            <div
                className={'home'}
            >
                <SelectionPanel
                    rows={24}
                />
                <ViewContainer/>
                <Path/>
            </div>
        );
    };
}

export default Home;
