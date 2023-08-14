import * as React from 'react';
import './selection-panel.scss';
import selectorsJSON from '../files/initialization/selectors.json';
import Selector from './selector/selector';
import PropTypes from 'prop-types';

function getSelectors(rows) {
    let emptyArray = [];

    for (let i = 0; i < rows - selectorsJSON.length; i++) {
        emptyArray.push({
            "name": "",
            "type": "EMP"
        });
    }

    console.log(selectorsJSON.concat(emptyArray))
    return selectorsJSON.concat(emptyArray);
}

class SelectionPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectors: getSelectors(props.rows),
            rows: props.rows
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
