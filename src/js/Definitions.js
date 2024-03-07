export const BUTTON_TYPE = {
	EDIT: 0,
	DELETE: 1,
};

export const ACTION = {
	VIEW_LIST: 0,
	EDIT: 1,
	CREATE: 2,
	VIEW_SINGLE: 3,
}

export const NAV = {
	PROJECT: 0,
	TASK: 1,
	USER: 2,
};

export const NAV_NAME = [
	[
		"Project list",
		"Project edit",
		"Project create",
		"Project view",
	],
	[
		"Task list",
		"Task edit",
		"Task create",
		"Task view",
	],
	[
		"User list",
		"User edit",
		"User create",
		"User view",
	],
];

export const TYPE_MODEL = {
	ACTION: 0,
	MEMBER: 1,
	PROJECT: 2,
	STATUS: 3,
	TAG: 4,
	TASK: 5,
	USER: 6,
};

export const API_MODEL = [
	'actions',
	'members',
	'projects',
	'statuses',
	'tags',
	'tasks',
	'users',
];