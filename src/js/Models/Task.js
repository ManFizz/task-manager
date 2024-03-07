class Task {
	constructor({
      title,
      content = '',
      dateEnd = null,
      author = null,
      priority = null,
    }) {
		this.title = title;
		this.content = content;
		this.dateEnd = dateEnd;
		this.author = author;
		this.priority = priority;

		this.project = null;
		this.tagList = null;
		this.dateHistory = null;
		this.childList = null;
		this.memberList = null;
		this.status = null;
	}
}

export default Task;