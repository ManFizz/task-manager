const Action = require('../Models/Action');

async function GetActions(req, res) {
	try {
		const actions = await Action.findAll();
		res.json(actions);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function CreateAction(req, res) {
	try {
		const newAction = await Action.create(req.body);
		res.status(201).json(newAction);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function UpdateAction(req, res) {
	const { id } = req.params;
	try {
		const [updatedRowsCount] = await Action.update(req.body, {
			where: { id }
		});
		if (updatedRowsCount === 0) {
			res.status(404).json({ error: 'Action not found' });
		} else {
			res.status(200).json({ message: 'Action updated successfully' });
		}
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function DeleteAction(req, res) {
	const { id } = req.params;
	try {
		const deletedRowCount = await Action.destroy({
			where: { id }
		});
		if (deletedRowCount === 0) {
			res.status(404).json({ error: 'Action not found' });
		} else {
			res.status(200).json({ message: 'Action deleted successfully' });
		}
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = {
	GetActions,
	CreateAction,
	UpdateAction,
	DeleteAction
};
