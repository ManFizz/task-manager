const Tag = require("../Models/Tag");

async function GetTags(req, res)  {
	try {
		const tags = await Tag.findAll();
		res.json(tags);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function CreateTag (req, res) {
	try {
		const newTag = await Tag.create(req.body);
		res.status(201).json(newTag);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function UpdateTag(req, res) {
	const tagId = req.params.id;
	try {
		const [updatedRowsCount, updatedRows] = await Tag.update(req.body, {
			where: { id: tagId },
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

async function DeleteTag(req, res) {
	const tagId = req.params.id;
	try {
		const deletedRowCount = await Tag.destroy({ where: { id: tagId } });
		if (deletedRowCount === 0) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.sendStatus(204);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = { GetTags, CreateTag, DeleteTag, UpdateTag };