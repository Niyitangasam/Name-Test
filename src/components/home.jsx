import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import '../assets/css/oneStory.scss';
import '../assets/css/pagination.scss';
import { NavBar } from './';
import { paginate } from '../utils/paginate';
import { getQuestions } from '../store/helpers/setQuestions';
// import { Paginator } from './';

class Home extends Component {
	onGoToNext() {
        this.props.changeCurrent(this.props.currentQuestion);
    }
    onAnswerSelected(){
        
    }
    componentDidMount(){
		this.props;
	}
	render() {
		console.log('sdfds====>',this.props)
		return <div>damg</div>
		// const { questions:allQuestions } = this.props
        // const { currentQuestion, qnPerPage } = this.props;
		// const qnsLength = allQuestions.length;
		// const pageCount = qnsLength / qnPerPage;
        // const pages = _.range(1, pageCount + 1);
        // const questions = paginate(allQuestions, currentQuestion, qnPerPage);
		// return (
		// 	<React.Fragment>
		// 		<NavBar />
		// 		<div className="container">
		// 			<table>
		// 				<thead>
		// 					<tr>
		// 						<th>Name Test question #1</th>
		// 					</tr>
		// 					{questions.map((question) => (
		// 						<tr key={question.id}>
		// 							<td>
		// 								<h3>
		// 									{question.id}.{question.title}
		// 								</h3>
        //                                 {question.answers.map((answer) => (
        //                                     <div key={answer}>
        //                                         <input id="option" type="radio" name="field" value={answer} onChange={this.onAnswerSelected}/>
        //                                         <label htmlFor="option">{answer}</label>
        //                                     </div>
        //                                 ))}
		// 							</td>
		// 						</tr>
		// 					))}
		// 				</thead>
		// 			</table>
		// 			<div>
		// 				<div className="pagination">
		// 					{pages.map((page) => (
		// 						<a key={page} href="#" onClick={this.onGoToNext}>
		// 							{page}
		// 						</a>
		// 					))}
		// 				</div>
		// 				{/* <button>Next</button> */}
		// 			</div>
		// 		</div>
		// 	</React.Fragment>
		// );
	}
}

const mapStateToProps = (state) => {
	const { errors, auth, questions } = state;
	return {
		errors,
		auth,
		questions,
	};
};

const connectedHomePage = connect(mapStateToProps, {getQuestions})(Home);
export { connectedHomePage as Home };
