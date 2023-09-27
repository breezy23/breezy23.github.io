import * as React from 'react';
import styles from './selection-panel.module.scss';
import selectorsJSON from '../../files/initialization/selectors.json';
import Selector from './selector/selector';
import PropTypes from 'prop-types';
import {useState} from 'react';

function getSelectors(rows) {
    let emptyArray = [];

    for (let i = 0; i < rows - selectorsJSON.length; i++) {
        emptyArray.push({
            name: '',
            id: '',
            type: 'EMP'
        });
    }
    let selectors = selectorsJSON.concat(emptyArray);

    for(let i = 0; i < selectors.length; i++) {
        selectors[i].index = i;
    }

    return selectors;
}

const SelectionPanel = (props) => {
    const [selectors] = useState(getSelectors(props.rows));

    return (
        <div className={styles.panel}>
            {selectors.map((item) => (
                <Selector
                    id={item.id ? item.id : ''}
                    name={item.name}
                    selected={false}
                    type={item.type}
                />
            ))}
        </div>
    );
};

SelectionPanel.propTypes = {
    selectors: PropTypes.array,
    rows: PropTypes.number.isRequired
}

export default SelectionPanel;
