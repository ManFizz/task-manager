class Tag {
	constructor({
		id,
		title,
		color = 'primary',
	}) {
		this.title = title;
		this.color = color;
	}
}

export default Tag;