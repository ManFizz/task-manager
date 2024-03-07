import React, { Component } from "react";
import { BsPencil, BsTrash3 } from "react-icons/bs";
import { BUTTON_TYPE } from "../Definitions";

class ProjectViewList extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};

		this.buttonClickHandler = this.buttonClickHandler.bind(this);
	}

	buttonClickHandler(e, data) {
		e.stopPropagation();
	}

	render() {
		const { projectList, project, setProject } = this.props;
		return (
		<>
			<div className="main-box clearfix">
				<div className="table-responsive">
					<table className="table table-hover ">
						<thead className="thead-light">
						<tr>
							<th><span>Title</span></th>
							<th className="text-center"><span>Created</span></th>
							<th className="text-center"><span>Tasks</span></th>
							<th className="text-center"><span>Members</span></th>
							<th>&nbsp;</th>
						</tr>
						</thead>
						<tbody className="table-striped">
						{projectList.map((proj, index) => {
							return (<tr
								key={index}
								className={`${project === proj ? "table-active" : ""}`}
								onClick={() => setProject(proj)}
								role="button"
							>
								<td>{proj.title}</td>
								<td className="text-center">{proj.dateCreate}</td>
								<td className="text-center">{proj.taskList.length}</td>
								<td className="text-center">{proj.memberList.length}</td>
								<td className="text-center hstack gap-2">
									<button
										className="btn bg-primary btn-sm text-white"
										onClick={(e) => this.buttonClickHandler(e, {
											type: BUTTON_TYPE.EDIT,
											proj: proj,
										})}
										type={"button"}
									>
										<BsPencil />
									</button>
									<button
										className="btn bg-danger btn-sm text-white"
										onClick={(e) => this.buttonClickHandler(e, {
											type: BUTTON_TYPE.DELETE,
											proj: proj,
										})}
										type={"button"}
									>
										<BsTrash3 />
									</button>
								</td>
							</tr>);
						})}
						</tbody>
					</table>
				</div>
			</div>
		</>
		)
	};
}

export default ProjectViewList;