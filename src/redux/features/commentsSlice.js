import {createSlice} from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState:{
        comments: []
    },
    reducers:{
        addComment: (state, payload) => {
            return {
                ...state,
                comments: [...state.comments, payload]

            }
        }
    }
})