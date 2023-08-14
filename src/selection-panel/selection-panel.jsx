import * as React from 'react';
import './selection-panel.scss';
import selectorsJSON from '../files/initialization/selectors.json';
import Selector from './selector/selector';
import PropTypes from 'prop-types';

class SelectionPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectors: selectorsJSON
        }
    }

    render() {
        return (
            <div
                className={'panel'}
            >
                {
                    this.state.selectors.map((item) => {
                        return (
                            <Selector
                                name={item.name}
                                type={item.type}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

SelectionPanel.propTypes = {
    selectors: PropTypes.array,
    rows: PropTypes.number.isRequired
}

export default SelectionPanel;
