import {configureStore} from '@reduxjs/toolkit';
import questionsReducer from './questions/questionsSlice';
import userDataReducer from './userData/userDataSlice';
import answersReducer from './answers/answersSlice';

export default configureStore({
    reducer: {
        questions: questionsReducer,
        userData: userDataReducer,
        answers: answersReducer
    }
});