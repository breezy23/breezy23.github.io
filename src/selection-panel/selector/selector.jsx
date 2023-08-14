import * as React from 'react';
import PropTypes from 'prop-types';
import '../selection-panel.scss'

const typeMap = {
    'DIR': '---DIR->',
    'ITM': '--FILE->',
    'EMP': '        '
}

class Selector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            type: props.type
        };
    }

    render() {
        return (
            <div
                className={'selector'}
            >
                <span
                    className={'selector-left'}
                >
                    {this.state.name}
                </span>
                    <span
                        className={'selector-right'}
                    >
                    {typeMap[this.state.type]}
                </span>
            </div>
        );
    };
}

Selector.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['DIR', 'ITM', 'EMP'])
}

Selector.defaultProps = {
    type: 'EMP'
}

export default Selector;
