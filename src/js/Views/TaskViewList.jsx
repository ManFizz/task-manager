import React, { Component } from "react";
import { BsPencil, BsTrash3 } from "react-icons/bs";
import { BUTTON_TYPE } from "../Definitions";
import Utils from "../Utils";

class TaskViewList extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

		this.buttonClickHandler = this.buttonClickHandler.bind(this);
	}

	buttonClickHandler(e, data) {
	}

	render() {
		const { taskList } = this.props;
		return (
			<>
				<div className="main-box clearfix">
					<div className="table-responsive">
						<table className="table table-hover ">
							<thead className="thead-light">
							<tr>
								<th><span>Title</span></th>
								<th className="text-center"><span>Dead line</span></th>
								<th className="text-center"><span>Tags</span></th>
								<th className="text-center"><span>Author</span></th>
								<th>&nbsp;</th>
							</tr>
							</thead>
							<tbody className="table-striped">
							{taskList.map((task, index) => {
								return (<tr key={index}>
									<td>{task.title}</td>
									<td className="text-center">{Utils.FormatDate(task.dateEnd)}</td>
									<td className="text-center">{task.tagList.join(", ")}</td>
									<td className="text-center">{task.author}</td>
									<td className="text-center hstack gap-2">
										<button
											className="btn bg-primary btn-sm text-white"
											onClick={(e) => this.buttonClickHandler(e, {
												type: BUTTON_TYPE.EDIT,
												task: task,
											})}
											type={"button"}
										>
											<BsPencil />
										</button>
										<button
											className="btn bg-danger btn-sm text-white"
											onClick={(e) => this.buttonClickHandler(e, {
												type: BUTTON_TYPE.DELETE,
												task: task,
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

export default TaskViewList;