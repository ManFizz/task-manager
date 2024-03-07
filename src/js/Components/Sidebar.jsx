import React, { Component } from "react";
import { ACTION, NAV } from "../Definitions";

export class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.BuildSideSection = this.BuildSideSection.bind(this);
	}

	BuildSideSection(data) {
		const {setNav, nav} = this.props;
		return (
			<li key={data.model}>
				<div
					role="button"
					className={`nav-link ${data.model === nav.model ? "active" : "link-body-emphasis"}`}
					onClick={() => setNav(data.model, ACTION.VIEW_LIST)}
				>
					{data.title}
				</div>
			</li>
		);
	};

	render() {
		const {project} = this.props;
		const title = project ? project.title : null;
		const elements = [
			{
				model: NAV.PROJECT,
				title: "Projects",
			},
			{
				model: NAV.TASK,
				title: "Tasks",
			},
			{
				model: NAV.USER,
				title: "Users",
			},
		];
		return (<>
			<div className="col-sm-3 p-3 bg-body-tertiary">
				<h4>{title}</h4>
				<hr/>
				<ul className="nav nav-pills flex-column mb-auto">
					{elements.map(el => {
						return this.BuildSideSection(el);
					})}
				</ul>
			</div>
		</>);
	}
}

export default Sidebar;