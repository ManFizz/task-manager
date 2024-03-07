import Action from "../Models/Action";
import Member from "../Models/Member";
import Project from "../Models/Project";
import Status from "../Models/Status";
import Tag from "../Models/Tag";
import Task from "../Models/Task";
import User from "../Models/User";
import { API_MODEL, TYPE_MODEL } from "../Definitions";

const MODELS = [
	Action,
	Member,
	Project,
	Status,
	Tag,
	Task,
	User,
];

function getIndex(obj) {
	const index = MODELS.indexOf(obj.constructor);
	if(index === -1) {
		throw new Error(`Undef obj constructor: ${obj}`);
	}
	return index;
}

export class db {
	async Create(obj) {
		try {
			const index = getIndex(obj);
			const response = await fetch('/' + API_MODEL[index], {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(obj)
			});

			if (response.ok) {
				return true;
			} else {
				console.error('Failed to create object:', response.statusText);
				return false;
			}

		} catch (error) {
			console.error('Error creating object:', error);
			return false;
		}
	}

	 async getObjects(Model) {
		try {
			const index = MODELS.indexOf(Model);
			if(index === -1)
				throw new Error(`Undef model: ${Model}`);

			const response = await fetch('/' + API_MODEL[index]);
			const data = await response.json();
			let newObjects = [];
			data.forEach(o => {
				newObjects.push(new Model(o));
			});
			return newObjects;
		} catch (error) {
			console.error('Error fetching objects:', error);
		}
		return null;
	}

	 async updateObject(obj) {
		try {
			const index = getIndex(obj);
			const response = await fetch(`/${API_MODEL[index]}/${obj.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(obj)
			});

			if (response.ok) {
				return true;
			} else {
				console.error('Failed to update object:', response.statusText);
				return false;
			}
		} catch (error) {
			console.error('Error updating object:', error);
			return false;
		}
	}

	async deleteUser(obj) {
		try {
			const index = getIndex(obj);
			const response = await fetch(`/${API_MODEL[index]}/${obj.id}`, {
				method: 'DELETE'
			});

			if (response.ok) {
				return true;
			} else {
				console.error('Failed to delete object:', response.statusText);
				return false;
			}
		} catch (error) {
			console.error('Error deleting object:', error);
			return false;
		}
	}
};