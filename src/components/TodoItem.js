export default class TodoItem {
	constructor(title, description, dueDate, priority = 'none') {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.validPriority = (priority) => {
			const priorities = ['none', 'low', 'medium', 'high'];
			return priorities.includes(priority);
		};
	};

	const getTitle = () => {
		return this.title;
	};

	const setTitle = (title) => {
		this.title = title;
	};

	const getDescription = () => {
		return this.description;
	};

	const setDescription = (des) => {
		this.description = des;
	};

	const getDueDate = () => {
		return this.dueDate;
	};

	const setDueDate = (date) => {
		this.dueDate = date;
	};

	const getPriority = () => {
		return this.priority;
	};

	const setPriority = (priority) => {
		if (this.validPriority(priority)) {
			this.priority = priority;
		}
	};
}