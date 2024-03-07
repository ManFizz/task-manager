const Project = require("../Models/Project");

async function GetProjects(req, res) {
	try {
		const projects = await Project.findAll();
		res.json(projects);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function CreateProject(req, res) {
	const { title, dateCreate } = req.body;
	try {
		const newProject = await Project.create({
			title,
			dateCreate
		});
		res.status(201).json(newProject);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function UpdateProject(req, res) {
	const projectId = req.params.id;
	const { title, dateCreate } = req.body;
	try {
		const project = await Project.findByPk(projectId);
		if (!project) {
			return res.status(404).json({ error: 'Project not found' });
		}
		await project.update({
			title,
			dateCreate
		});
		res.json(project);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function DeleteProject(req, res) {
	const projectId = req.params.id;
	try {
		const project = await Project.findByPk(projectId);
		if (!project) {
			return res.status(404).json({ error: 'Project not found' });
		}
		await project.destroy();
		res.status(204).end();
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = { GetProjects, CreateProject, UpdateProject, DeleteProject };