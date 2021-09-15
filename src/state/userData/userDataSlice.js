import {createSlice} from '@reduxjs/toolkit';
import * as R from 'ramda';
import {addNewQuestionUrl, userDataUrl} from "../../util/url";
import axios from "axios";

export const slice = createSlice({
    name: 'userData',
    initialState: {
        userData: {},
        userDataError: {},
    },
    reducers: {
        addUserData: (state, action) => {
            const {data} = action.payload
            return {
                ...state,
                userData: data,
            }
        },
        addQuestion: (state, action) => {
            const {question} = action.payload
            return {
                ...state,
                userData: {
                    ...state.userData,
                    questions: [question, ...state.userData.questions]
                }
            }
        },
    },
});

export const {addUserData, addError, addQuestion} = slice.actions;

export const getUserData = () => (dispatch, getState) => {
    if (!R.isEmpty(selectUserData()(getState()).userData)) {
        return;
    }
    axios.get(userDataUrl).then(userData => {
            dispatch(addUserData({data: userData.data}))
        }
    ).catch((error) => {
        if (!error.response) {
            dispatch(addError({error: {message: "Something went wrong! Check your internet connection"}}))
        } else {
            dispatch(addError({error: error.response.data}))
        }
    });
};

export const addQuestionAction = (question) => (dispatch, getState) => {
    axios.post(addNewQuestionUrl, question ).then(data => {})
        .catch(error => {
            console.log(error)
        })
    dispatch(addQuestion({question: question}));
}

export const selectUserData = () => state => {
    return state.userData || {};
}

export default slice.reducer;