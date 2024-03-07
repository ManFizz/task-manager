import React, { Component } from 'react';
import { ACTION, NAV } from "../Definitions";

class UserCreateForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			dateBirthday: '',
			login: '',
			mail: '',
		};
		this.handleBack = this.handleBack.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.handleReset();
	}

	handleReset() {
		this.setState({
			name: '',
			dateBirthday: '',
			login: '',
			mail: '',
		});
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			dateBirthday: new Date(this.state.dateBirthday),
			dateJoin: new Date(),
			login: this.state.login,
			mail: this.state.mail,
		};

		await this.props.createUser(newUser);
		this.props.setNav(NAV.USER, ACTION.VIEW_LIST);
	}

	handleBack() {
		this.props.setNav(NAV.USER, ACTION.VIEW_LIST);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} onReset={this.handleReset}>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange}/>
				</div>
				<div className="mb-3">
					<label className="form-label">Date of Birth</label>
					<input type="date" className="form-control" name="dateBirthday" value={this.state.dateBirthday}
								 onChange={this.handleChange}/>
				</div>
				<div className="mb-3">
					<label className="form-label">Login</label>
					<input type="text" className="form-control" name="login" value={this.state.login}
								 onChange={this.handleChange}/>
				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input type="email" className="form-control" name="mail" value={this.state.mail}
								 onChange={this.handleChange}/>
				</div>
				<div className="btn-group">
					<button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
					<button type="reset" className="btn btn-warning">Reset</button>
					<button type="submit" className="btn btn-success">Create</button>
				</div>
			</form>
		);
	}
}

export default UserCreateForm;