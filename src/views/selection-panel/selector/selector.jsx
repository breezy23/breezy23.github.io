import * as React from 'react';
import PropTypes from 'prop-types';
import '../selection-panel.scss'
import {useState} from "react";

const typeMap = {
    'DIR': '---DIR->',
    'ITM': '--FILE->',
    'EMP': '        '
}

const Selector = (props) => {
    const [state] = useState({
        name: props.name,
        type: props.type
    });

    return (
        <div
            className={'selector'}
        >
                <span
                    className={'selector-left'}
                >
                    {state.name}
                </span>
            <span
                className={state.type !== 'EMP' ? 'selector-right' : 'selector-hidden'}
            >
                    {typeMap[state.type]}
                </span>
        </div>
    );
}

Selector.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['DIR', 'ITM', 'EMP'])
}

Selector.defaultProps = {
    type: 'EMP'
}

export default Selector;
