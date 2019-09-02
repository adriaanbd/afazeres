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

	getTitle() {
		return this.title;
	};

	setTitle(title) {
		this.title = title;
	};

	getDescription() {
		return this.description;
	};

	setDescription(des) {
		this.description = des;
	};

	getDueDate() {
		return this.dueDate;
	};

	setDueDate(date) {
		this.dueDate = date;
	};

	getPriority() {
		return this.priority;
	};

	setPriority(priority) {
		if (this.validPriority(priority)) {
			this.priority = priority;
		}
	};
}