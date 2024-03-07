import User from "../Models/User";

export async function createUser(user) {
	try {
		const response = await fetch('/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		if (response.ok) {
			return true;
		} else {
			console.error('Failed to create user:', response.statusText);
			return false;
		}

	} catch (error) {
		console.error('Error creating user:', error);
		return false;
	}
}

export async function getUsers() {
	try {
		const response = await fetch('/users');
		const data = await response.json();
		let newUsers = [];
		data.forEach(u => {
			newUsers.push(new User(u));
		});
		return newUsers;
	} catch (error) {
		console.error('Error fetching users:', error);
	}
	return null;
}

export async function updateUser(updatedUser) {
	try {
		const response = await fetch(`/users/${updatedUser.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(updatedUser)
		});

		if (response.ok) {
			return true;
		} else {
			console.error('Failed to update user:', response.statusText);
			return false;
		}
	} catch (error) {
		console.error('Error updating user:', error);
		return false;
	}
}

async function deleteUser(userId) {
	try {
		const response = await fetch(`/users/${userId}`, {
			method: 'DELETE'
		});

		if (response.ok) {
			return true;
		} else {
			console.error('Failed to delete user:', response.statusText);
			return false;
		}
	} catch (error) {
		console.error('Error deleting user:', error);
		return false;
	}
}