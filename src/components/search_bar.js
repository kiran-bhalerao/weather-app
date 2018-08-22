import React, { Component } from 'react';
import {connect} from 'react-redux';
import getFetchAction from '../actions';
import axiosRequest from '../API';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
		this.inputChange = this.inputChange.bind(this);
		this.submit = this.submit.bind(this);
	}
	inputChange(event) {
		this.setState({
			term: event.target.value
		});
	}
	submit(event) {
		event.preventDefault();
		axiosRequest(this.state.term).then((res) => {
			if (res)
				this.props.dispatch(getFetchAction(res));
		});
		this.setState({
			term: ''
		});
	}
    render() {
      return (
        <form onSubmit={this.submit} className="input-group">
        	<input className="form-control" placeholder="Enter city name" value = {this.state.term} onChange = {this.inputChange} />
        	<span className="input-group-btn">
        	<button type="submit" className="btn btn-success">submit</button>
        	</span>
        </form>
      );
    }
}

const mapStateToProp = (state) => {
	return {
		...state
	}
};

export default connect(mapStateToProp)(SearchBar);