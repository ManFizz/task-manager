const Task = require('./models/Task');

async function GetTasks(req, res) {
	try {
		const tasks = await Task.findAll();
		res.json(tasks);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function CreateTask(req, res) {
	try {
		const newTask = await Task.create(req.body);
		res.status(201).json(newTask);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function UpdateTask(req, res) {
	const { id } = req.params;
	try {
		const [updatedRowsCount] = await Task.update(req.body, {
			where: { id }
		});
		if (updatedRowsCount === 0) {
			res.status(404).json({ error: 'Task not found' });
		} else {
			res.status(200).json({ message: 'Task updated successfully' });
		}
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function DeleteTask(req, res) {
	const { id } = req.params;
	try {
		const deletedRowCount = await Task.destroy({
			where: { id }
		});
		if (deletedRowCount === 0) {
			res.status(404).json({ error: 'Task not found' });
		} else {
			res.status(200).json({ message: 'Task deleted successfully' });
		}
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = {
	GetTasks,
	CreateTask,
	UpdateTask,
	DeleteTask
};
