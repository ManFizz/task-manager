const express = require('express');
const app = express();
const sequelize = require('./database');
const {GetUsers, CreateUser, UpdateUser, DeleteUser} = require("./Controllers/UserController");
const {GetTags, CreateTag, UpdateTag, DeleteTag} = require("./Controllers/TagController");
const {GetProjects, CreateProject, UpdateProject, DeleteProject} = require("./Controllers/ProjectController");
const {GetActions, CreateAction, UpdateAction, DeleteAction} = require("./Controllers/ActionController");
const {GetMembers, CreateMember, UpdateMember, DeleteMember} = require("./Controllers/MemberController");
const {GetStatuses, CreateStatus, UpdateStatus, DeleteStatus} = require("./Controllers/StatusController");
const {GetTasks, CreateTask, UpdateTask, DeleteTask} = require("./Controllers/TaskController");

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
	console.log(`Server is running on port ${PORT}`);

	console.log(`Try connect to database...`);
	sequelize
		.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.');
		})
		.catch((err) => {
			console.log('Unable to connect to the database:', err);
		});
	await sequelize.sync({ force: true });
});

//Action
app.get('/actions', GetActions);
app.post('/actions', CreateAction);
app.put('/actions/:id', UpdateAction);
app.delete('/actions/:id', DeleteAction);

//Member
app.get('/members', GetMembers);
app.post('/members', CreateMember);
app.put('/members/:id', UpdateMember);
app.delete('/members/:id', DeleteMember);

//Project
app.get('/projects', GetProjects);
app.post('/projects', CreateProject);
app.put('/projects/:id', UpdateProject);
app.delete('/projects/:id', DeleteProject);

//Status
app.get('/statuses', GetStatuses);
app.post('/statuses', CreateStatus);
app.put('/statuses/:id', UpdateStatus);
app.delete('/statuses/:id', DeleteStatus);

//Tag
app.get('/tags', GetTags);
app.post('/tags', CreateTag);
app.put('/tags/:id', UpdateTag);
app.delete('/tags/:id', DeleteTag);

//Task
app.get('/tasks', GetTasks);
app.post('/tasks', CreateTask);
app.put('/tasks/:id', UpdateTask);
app.delete('/tasks/:id', DeleteTask);

//User
app.get('/users', GetUsers);
app.post('/users', CreateUser);
app.put('/users/:id', UpdateUser);
app.delete('/users/:id', DeleteUser);
