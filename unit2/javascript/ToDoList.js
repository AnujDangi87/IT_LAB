var task = [];
var tkStatus = [];
var tkDate = [];

function addTask()
{
    let taskText = document.getElementById("task-text").value.trim();
    let taskDate = document.getElementById("task-date").value;

    if(taskText == "")
    {
        alert("Task text can't be empty!");
        return;
    }
    for(let i=0;i<task.length;i++)
    {
        if(taskText === task[i] && taskDate == tkDate[i])
        {
            alert("This task is already present.");
            return;
        }
    }

    task.push(taskText);
    tkStatus.push(0);
    tkDate.push(taskDate);
    showTask();
    document.getElementById("task-text").innerHTML = "";
    document.getElementById("task-date").innerHTML = "";
    filterTask(document.getElementById("filter-dropdown").value);
}

function showTask(){
    let obj = document.getElementById("tasks");
    obj.innerHTML = "";

    for(let i=0;i<task.length;i++)
    {
        if(tkStatus[i] === 1)
        {
            if(tkDate[i] == "")
                obj.innerHTML = obj.innerHTML + "<input type='checkbox' checked><s>" + task[i] + "<s> (no date)<br>";
            else
                obj.innerHTML = obj.innerHTML + "<input type='checkbox' checked><s>" + task[i] + "<s> ("+ tkDate[i] +")<br>";
        }
        else
        {
            if(tkDate[i] == "")
                obj.innerHTML = obj.innerHTML + "<input type='checkbox'>" + task[i] + " (no date)<br>";
            else
            obj.innerHTML = obj.innerHTML + "<input type='checkbox'>" + task[i] + " (" +tkDate[i]+")<br>";
        }
    }
     
}

function filterTask(value)
{
    let taskDisplay = document.getElementById("tasks");
    
    if (value === "All")
    {
        return;
    }
    else if(value === "Completed task")
    {
        for(let i=0;i<task.length;i++)
            {
                if(tkStatus[i] === 1)
                {
                    if(tkDate[i] == "")
                        obj.innerHTML = obj.innerHTML + "<input type='checkbox' checked><s>" + task[i] + "<s> (no date)<br>";
                    else
                        obj.innerHTML = obj.innerHTML + "<input type='checkbox' checked><s>" + task[i] + "<s> ("+ tkDate[i] +")<br>";
                }
            }
    }
    else if(value === "Pending task")
    {   
        for(let i=0;i<task.length;i++)
        {
            if(tkStatus[i] === 0)
            {
                if(tkDate[i] == "")
                    obj.innerHTML = obj.innerHTML + "<input type='checkbox'>" + task[i] + " (no date)<br>";
                else
                obj.innerHTML = obj.innerHTML + "<input type='checkbox'>" + task[i] + " (" +tkDate[i]+")<br>";
            }
        }
    }

    
}
