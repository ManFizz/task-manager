import Tag from "../Models/Tag";

async function createTag(tagData) {
	try {
		const response = await fetch('/tags', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(tagData)
		});

		if (response.ok) {
			return true;
		} else {
			console.error('Failed to create tag:', response.statusText);
			return false;
		}
	} catch (error) {
		console.error('Error creating tag:', error);
		return false;
	}
}

async function getTags() {
	try {
		const response = await fetch('/tags');
		const data = await response.json();
		return data.map(tag => new Tag(tag));
	} catch (error) {
		console.error('Error fetching tags:', error);
		return [];
	}
}

async function updateTag(updatedTag) {
	try {
		const response = await fetch(`/tags/${updatedTag.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(updatedTag)
		});

		if (response.ok) {
			return true;
		} else {
			console.error('Failed to update tag:', response.statusText);
			return false;
		}
	} catch (error) {
		console.error('Error updating tag:', error);
		return false;
	}
}

async function deleteTag(tagId) {
	try {
		const response = await fetch(`/tags/${tagId}`, {
			method: 'DELETE'
		});

		if (response.ok) {
			return true;
		} else {
			console.error('Failed to delete tag:', response.statusText);
			return false;
		}
	} catch (error) {
		console.error('Error deleting tag:', error);
		return false;
	}
}