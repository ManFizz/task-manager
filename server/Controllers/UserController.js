const User = require("../Models/User");

async function GetUsers(req, res)  {
	try {
		const users = await User.findAll();
		res.json(users);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function CreateUser (req, res) {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function UpdateUser(req, res) {
	const userId = req.params.id;
	try {
		const [updatedRowsCount, updatedRows] = await User.update(req.body, {
			where: { id: userId },
			returning: true
		});
		if (updatedRowsCount === 0) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.json(updatedRows[0]);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function DeleteUser(req, res) {
	const userId = req.params.id;
	try {
		const deletedRowCount = await User.destroy({ where: { id: userId } });
		if (deletedRowCount === 0) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.sendStatus(204);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = { GetUsers, CreateUser, UpdateUser, DeleteUser };