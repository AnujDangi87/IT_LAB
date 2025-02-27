enum TaskStatus{
    Pending = "pending", 
    Completed = "completed"
}

type TaskType = {
    title : string;
    date : Date;
    status : TaskStatus;
}

class Task{
    title : string;
    date : Date;
    status : TaskStatus;

    constructor(title : string, status : TaskStatus = TaskStatus.Pending)
    {
        this.title = title;
        this.status = status;
    }

    markCompleted()
    {
        this.status = TaskStatus.Completed;
    }
}

class TaskManager{
    private tasks : Task[] = [];

    addTask(title : string){
        this.tasks.push(new Task(title));
    }

    completeTask(index : number)
    {
        if(this.tasks[index])
        {
            this.tasks[index].markCompleted();
        }
        else
        {
            console.log("Invalid task index");
        }
    }

    listTask() : void{
        this.tasks.forEach((task, index ) => {
            console.log(`${index + 1} ${task.title}-${task.status}`);
        });
    }
}

const taskManager = new TaskManager();

taskManager.addTask("Learn Typescript");
taskManager.listTask();
let a = new Date(2003, 12, 2);
console.log(a);