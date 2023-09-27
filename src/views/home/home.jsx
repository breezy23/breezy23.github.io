import * as React from 'react';
import SelectionPanel from '../selection-panel/selection-panel';
import ViewContainer from '../view-container/view-container';
import Path from '../path/path';
import './home.scss';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
    const selected = useSelector((state) => state.selectors.selected)
    const dispatch = useDispatch()
    const handleInput = (event) => {
        console.log(selected)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleInput);

        return () => {
            document.removeEventListener('keydown', handleInput);
        };
    }, []);

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
}

export default Home;
