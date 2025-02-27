var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "pending";
    TaskStatus["Completed"] = "completed";
})(TaskStatus || (TaskStatus = {}));
var Task = /** @class */ (function () {
    function Task(title, status) {
        if (status === void 0) { status = TaskStatus.Pending; }
        this.title = title;
        this.status = status;
    }
    Task.prototype.markCompleted = function () {
        this.status = TaskStatus.Completed;
    };
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (title) {
        this.tasks.push(new Task(title));
    };
    TaskManager.prototype.completeTask = function (index) {
        if (this.tasks[index]) {
            this.tasks[index].markCompleted();
        }
        else {
            console.log("Invalid task index");
        }
    };
    TaskManager.prototype.listTask = function () {
        this.tasks.forEach(function (task, index) {
            console.log("".concat(index + 1, " ").concat(task.title, "-").concat(task.status));
        });
    };
    return TaskManager;
}());
var taskManager = new TaskManager();
taskManager.addTask("Learn Typescript");
taskManager.listTask();
var a = new Date(2003, 12, 2);
console.log(a);
