class Project {
	constructor({
		title,
		dateCreate = null,
	}) {
		this.title = title;
		this.dateCreate = dateCreate;
	}
}

export default Project;