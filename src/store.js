import {configureStore} from '@reduxjs/toolkit'
import selectorReducer from './reducers/selectorReducer';

export default configureStore({
    reducer: {
        selectors: selectorReducer
    },
});
