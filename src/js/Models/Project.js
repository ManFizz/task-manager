class Project {
	constructor({
		title,
		memberList = [],
		taskList = [],
		dateCreate = null,
	}) {
		this.title = title;
		this.memberList = memberList;
		this.taskList = taskList;
		this.dateCreate = dateCreate;
	}
}

export default Project;