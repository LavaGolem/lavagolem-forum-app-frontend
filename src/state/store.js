import {configureStore} from '@reduxjs/toolkit';
import questionsReducer from './questions/questionsSlice';
import userDataReducer from './userData/userDataSlice';

export default configureStore({
    reducer: {
        questions: questionsReducer,
        userData: userDataReducer
    }
});