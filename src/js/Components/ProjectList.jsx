import { Component } from "react";

class ProjectList extends Component {
	render() {
		const { projectList } = this.props;
		return (
		<>
			<header>Project list</header>
			{projectList.map((project, index) => {
				return (<>
					<div className={"card"} key={index}>
						<header>{project.title}</header>
					</div>
				</>);
			})}
		</>
	)};
}

export default ProjectList;