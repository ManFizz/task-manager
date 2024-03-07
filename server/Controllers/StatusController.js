const Status = require('../Models/Status');

async function GetStatuses(req, res) {
	try {
		const statuses = await Status.findAll();
		res.json(statuses);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function CreateStatus(req, res) {
	try {
		const newStatus = await Status.create(req.body);
		res.status(201).json(newStatus);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function UpdateStatus(req, res) {
	const { id } = req.params;
	try {
		const [updatedRowsCount] = await Status.update(req.body, {
			where: { id }
		});
		if (updatedRowsCount === 0) {
			res.status(404).json({ error: 'Status not found' });
		} else {
			res.status(200).json({ message: 'Status updated successfully' });
		}
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function DeleteStatus(req, res) {
	const { id } = req.params;
	try {
		const deletedRowCount = await Status.destroy({
			where: { id }
		});
		if (deletedRowCount === 0) {
			res.status(404).json({ error: 'Status not found' });
		} else {
			res.status(200).json({ message: 'Status deleted successfully' });
		}
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = {
	GetStatuses,
	CreateStatus,
	UpdateStatus,
	DeleteStatus
};
