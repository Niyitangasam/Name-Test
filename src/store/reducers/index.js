import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import quizReducer from './quizReducer';
import { getQns } from '../../services/fakeQuestions';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    quiz: quizReducer,
    questions:getQns()
});
