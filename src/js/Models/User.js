class User {
	constructor({ id, name, dateBirthday, dateJoin, login, mail }) {
		this.id = id;
		this.name = name;
		this.dateBirthday = dateBirthday instanceof Date ? dateBirthday : new Date(dateBirthday);
		this.dateJoin = dateJoin instanceof Date ? dateJoin : new Date(dateJoin);
		this.login = login;
		this.mail = mail;
	}
}

export default User;