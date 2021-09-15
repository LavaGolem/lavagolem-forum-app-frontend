import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import * as R from 'ramda';
import {questionsUrl} from "../../util/url";

export const slice = createSlice({
    name: 'questions',
    initialState: {
        questions: [],
        questionsError: {},
    },
    reducers: {
        addQuestions: (state, action) => {
            const {data} = action.payload
            return {
                ...state,
                questions: data
            }
        },
        addError: (state, action) => {
            const {error} = action.payload;
            return {
                ...state,
                questionsError: error
            }
        }
    },
});

export const {addQuestions, addError} = slice.actions;

export const getQuestions = () => (dispatch, getState) => {
    if (!R.is(selectQuestions()(getState()).questions)) {
        return;
    }
    axios.get(questionsUrl)
        .then(questions => {
            const {data} = questions
            dispatch(addQuestions({data: data}));
            }
        ).catch((error) => {
        if (!error.response) {
            dispatch(addError({error: {message: "Something went wrong! Check your internet connection"}}))
        } else {
            dispatch(addError({error: error.response.data}))
        }
    });
};

export const selectQuestions = () => state => {
    return state.questions || [];
}

export default slice.reducer;