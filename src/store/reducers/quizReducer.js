import { GET_QUESTIONS, RESOLVE_QN } from '../actions';

const initalState = {
    currentQuestion: 1,
    qnPerPage:1,
    totalMarks:0,
    questions:[]
};

export default function(state = initalState, action){
    console.log('quiz reducer:',action)
    switch(action.type){
        case GET_QUESTIONS:
            return {
                ...state,
                questions: action.questions
            };
        case RESOLVE_QN:
            return{
                ...state,
                currentQuestion: action.currentQuestion,
                totalMarks: action.totalMarks,
                qnPerPage: action.qnPerPage
            }
        default:
            return state;
    }
}