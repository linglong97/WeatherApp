import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchWeather from "../actions/index";

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e){
		this.setState({term: e.target.value})
	}

	onFormSubmit(e){
		e.preventDefault();
		//we need to go fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}

	render(){
		return (
			<form 
			className = "input-group"
			onSubmit = {this.onFormSubmit}
			>
				<input 
				placeholder = "Get a 5-day weather forecast in your favourite cities!"
				onChange = {this.onInputChange}
				value = {this.state.term}
				className = "form-control"
				/>
				<span className = "input-group-btn">
					<button type = "submit" className = "btn btn-secondary"> submit </button>
				</span>
			</form>
		);
	}
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
