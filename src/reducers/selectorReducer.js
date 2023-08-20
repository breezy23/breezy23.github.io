import {createSlice} from '@reduxjs/toolkit';

export const selectorSlice = createSlice ({
    name: 'selector',
    initialState: {
        selected: 'readme'
    },
    reducers: {
        change: (state, action) => {
            state.selected = action.payload;
        }
    }
});

export const {change} = selectorSlice.actions;

export default selectorSlice.reducer;