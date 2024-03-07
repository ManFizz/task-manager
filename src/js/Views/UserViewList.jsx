import { Component } from "react";
import { ACTION, BUTTON_TYPE, NAV } from "../Definitions";
import { BsPencil, BsTrash3 } from "react-icons/bs";
import Utils from "../Utils";

class UserViewList extends Component {
	constructor(props) {
		super(props);

		this.buttonClickHandler = this.buttonClickHandler.bind(this);
	}

	buttonClickHandler(e, data) {
		e.preventDefault();
		if(data.type === BUTTON_TYPE.DELETE) {

		}

		if(data.type === BUTTON_TYPE.EDIT) {
			this.props.setCurrentData({user: data.user});
			this.props.setNav(NAV.USER, ACTION.EDIT);
		}
	}

	render() {
		const { userList } = this.props;
		return(<>
			<div className="main-box clearfix">
				<div className="table-responsive">
					<table className="table table-hover ">
						<thead className="thead-light">
						<tr>
							<th className="text-center"><span>Id</span></th>
							<th className="text-center"><span>Login</span></th>
							<th className="text-center"><span>Name</span></th>
							<th className="text-center"><span>Date of birthday</span></th>
							<th className="text-center"><span>Date of join</span></th>
							<th className="text-center"><span>Email</span></th>
							<th>&nbsp;</th>
						</tr>
						</thead>
						<tbody className="table-striped">
						{userList.map((user, index) => {
							return (<tr key={index}>
								<td className="text-center">{user.id}</td>
								<td className="text-center">{user.login}</td>
								<td className="text-center">{user.name}</td>
								<td className="text-center">{Utils.FormatDate(user.dateBirthday)}</td>
								<td className="text-center">{Utils.FormatDate(user.dateJoin)}</td>
								<td className="text-center">{user.mail}</td>
								<td className="text-center hstack gap-2">
									<button
										className="btn bg-primary btn-sm text-white"
										onClick={(e) => this.buttonClickHandler(e, {
											type: BUTTON_TYPE.EDIT,
											user: user,
										})}
										type={"button"}
									>
										<BsPencil/>
									</button>
									<button
										className="btn bg-danger btn-sm text-white"
										onClick={(e) => this.buttonClickHandler(e, {
											type: BUTTON_TYPE.DELETE,
											user: user,
										})}
										type={"button"}
									>
										<BsTrash3/>
									</button>
								</td>
							</tr>);
						})}
						</tbody>
					</table>
				</div>
			</div>
		</>);
	}

}

export default UserViewList;