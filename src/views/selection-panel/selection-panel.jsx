import * as React from 'react';
import './selection-panel.scss';
import selectorsJSON from '../../files/initialization/selectors.json';
import Selector from './selector/selector';
import PropTypes from 'prop-types';
import {useState} from "react";

function getSelectors(rows) {
    let emptyArray = [];

    for (let i = 0; i < rows - selectorsJSON.length; i++) {
        emptyArray.push({
            name: '',
            type: 'EMP'
        });
    }

    return selectorsJSON.concat(emptyArray);
}

const SelectionPanel = (props) => {
    const [selectors, setSelectors] = useState(getSelectors(props.rows));

    return (
        <div className={'panel'}>
            {selectors.map((item, index) => (
                <Selector key={index} name={item.name} type={item.type} />
            ))}
        </div>
    );
};

SelectionPanel.propTypes = {
    selectors: PropTypes.array,
    rows: PropTypes.number.isRequired
}

export default SelectionPanel;
