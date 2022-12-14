import Task from "./task.js";

export default class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    }

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    createTask(description) {
        const task = new Task(description);
        this._list[task.id] = task;
    }

    listTasks() {
        console.log();
        this.listArr.forEach((task, i) => {
            const idx = `${i + 1}`;
            const {description, completed} = task;
            const state = (completed)
                ? "Completed".green
                : "Pending".red;
            console.log(`${(idx + ".").green} ${description} -> ${state}`);
        });
    }

    listDoneTasks(done = true) {
        console.log();
        let counter = 0;
        this.listArr.forEach((task) => {
                const {description, completed} = task;
                const state = (completed)
                    ? "Completed".green
                    : "Pending".red;
                if (done) {
                    if (completed) {
                        counter += 1;
                        console.log(`${(counter + ".").green} ${description} -> ${completed.green}`);
                    }
                } else {
                    if (!completed) {
                        counter += 1;
                        console.log(`${(counter + ".").green} ${description} -> ${state}`);
                    }
                }
            }
        );
    }

    deleteTask(id = "") {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

    toggleCompleted(ids = []) {
        ids.forEach(id => {
            const task = this._list[id];
            if (!task.completed) {
                task.completed = new Date().toLocaleString('en-GB', {
                    timeZone: 'Europe/London'
                });
            }
        });
        this.listArr.forEach(task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completed = null;
            }
        });
    }

}

