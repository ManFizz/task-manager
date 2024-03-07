const Member = require('../Models/Member');

async function GetMembers(req, res) {
	try {
		const members = await Member.findAll();
		res.json(members);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function CreateMember(req, res) {
	try {
		const newMember = await Member.create(req.body);
		res.status(201).json(newMember);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function UpdateMember(req, res) {
	const { id } = req.params;
	try {
		const [updatedRowsCount] = await Member.update(req.body, {
			where: { id }
		});
		if (updatedRowsCount === 0) {
			res.status(404).json({ error: 'Member not found' });
		} else {
			res.status(200).json({ message: 'Member updated successfully' });
		}
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function DeleteMember(req, res) {
	const { id } = req.params;
	try {
		const deletedRowCount = await Member.destroy({
			where: { id }
		});
		if (deletedRowCount === 0) {
			res.status(404).json({ error: 'Member not found' });
		} else {
			res.status(200).json({ message: 'Member deleted successfully' });
		}
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = {
	GetMembers,
	CreateMember,
	UpdateMember,
	DeleteMember
};
