import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import * as R from 'ramda';
import {addNewAnswerUrl, answersDataUrl} from "../../util/url";

export const slice = createSlice({
    name: 'answers',
    initialState: {
        answers: {},
        answersError: {}
    },
    reducers: {
        addAnswers: (state, action) => {

            const {data, questionId} = action.payload;
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [questionId]: data
                },
                answersError: Object.keys(state.answersError)
                    .filter(questionId => questionId !== questionId)
                    .reduce((acc, key) => ({[key]: state.answersError[key]}), {})

            }
        },
        addAnswer: (state, action) => {
            const {data} = action.payload;
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [data.questionId]:  [data, ...state.answers.answers[data.questionId]]
                },
                answersError: Object.keys(state.answersError)
                    .filter(questionId => questionId !== questionId)
                    .reduce((acc, key) => ({[key]: state.answersError[key]}), {})

            }
        },
        addError: (state, action) => {
            const {error, questionId} = action.payload;
            return {
                ...state,
                answersError: {
                    ...state.answersError,
                    [questionId]: error
                }
            }
        }
    },
});

export const {addAnswers, addError, addAnswer} = slice.actions;

export const getAnswers = questionId => (dispatch, getState) => {
    if (!R.isEmpty(selectAnswers(questionId)(getState()))) {
        return;
    }
    axios.get(answersDataUrl(questionId))
        .then(reponse => {
                const {data} = reponse;
                dispatch(addAnswers({data: data, questionId: questionId}));
            }
        ).catch((error) => {
        if (!error.response) {
            dispatch(addError({error: {message: "Something went wrong! Check your internet connection"}, questionId}))
        } else {
            dispatch(addError({error: error.response.data, questionId}))
        }
    });
};

export const addAnswerAction = (answer) => (dispatch, getState) => {
    axios.post(addNewAnswerUrl, answer ).then(data => {})
        .catch(error => {
            console.log(error)
        })
    dispatch(addAnswers({answer: answer}));
}

export const selectAnswers = questionId => state => {
    console.log(state.answers.answers[questionId])
    return state.answers.answers[questionId] || {};
};

export default slice.reducer;