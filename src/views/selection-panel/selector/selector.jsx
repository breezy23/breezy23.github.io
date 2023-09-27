import * as React from 'react';
import PropTypes from 'prop-types';
import styles from '../selection-panel.module.scss'
import {useState} from "react";

const typeMap = {
    'DIR': '---DIR->',
    'ITM': '--FILE->',
    'EMP': '        '
}

const Selector = (props) => {
    const [state] = useState({
        id: props.id,
        name: props.name,
        selected: props.selected,
        type: props.type
    });

    const selectedSelector = state.selected ? styles.selected : '';

    return (
        <div
            className={`${styles.selector} ${selectedSelector}`}
        >
            <span
                className={styles.selectorLeft}
            >
                {state.name}
            </span>
            <span
                className={state.type !== 'EMP' ? styles.selectorRight : styles.selectorHidden}
            >
                    {typeMap[state.type]}
            </span>
        </div>
    );
}

Selector.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    type: PropTypes.oneOf(['DIR', 'ITM', 'EMP']),
}

Selector.defaultProps = {
    selected: false,
    type: 'EMP'
}

export default Selector;
