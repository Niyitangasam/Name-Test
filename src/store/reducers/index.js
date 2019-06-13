import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import quizReducer from './quizReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    questions: quizReducer
});
