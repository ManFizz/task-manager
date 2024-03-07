class Member {
	constructor({
		user,
		guarantor = null,
		dateInvited = null,
		role = null,
	}) {
		this.user = user;
		this.guarantor = guarantor;
		this.dateInvited = dateInvited;
		this.role = role;
	}
}

export default Member;