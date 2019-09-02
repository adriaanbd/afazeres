export default class TodoItem {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}

	const getTitle = () => {
		return this.title;
	};

	const setTitle = (title) => {
		this.title = title;
	};
}