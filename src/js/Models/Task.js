class Task {
	constructor({
      title,
      content = '',
      dateHistory = [],
      dateDeadline = null,
      tagList = [],
      author = null,
      priority = null,
			type = null,
    }) {
		this.title = title;
		//this.workspace
		this.content = content;
		this.dateHistory = dateHistory;
		this.dateDeadline = dateDeadline;
		this.tagList = tagList;
		this.author = author;
		this.priority = priority;
		this.type = type;
		//this.childs
	}
}

export default Task;