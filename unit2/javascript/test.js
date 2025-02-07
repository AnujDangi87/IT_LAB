let tasks = [];

function addTask() {
    const taskText = document.getElementById("task-text").value.trim();
    const taskDate = document.getElementById("task-date").value;

    if (taskText === "") {
        alert("Task description cannot be empty.");
        return;
    }

    if (tasks.some(task => task.text === taskText && task.date === taskDate)) {
        alert("Task already exists.");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        date: taskDate,
        completed: false,
    };

    tasks.push(task);
    document.getElementById("task-text").value = "";
    document.getElementById("task-date").value = "";
    renderTasks(document.getElementById("filter-dropdown").value);
}

function renderTasks(filter = "All") {
    const taskContainer = document.getElementById("tasks");
    taskContainer.innerHTML = "";

    let filteredTasks = tasks;

    if (filter === "Completed task") {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === "Pending Task") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    filteredTasks.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date) - new Date(b.date);
    });

    filteredTasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.id = `task-${task.id}`;
        taskCheckbox.checked = task.completed;
        taskCheckbox.onclick = () => toggleTaskCompletion(task.id);

        const taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", `task-${task.id}`);
        taskLabel.textContent = `${task.text} (${task.date || "No date"})`;

        if (task.completed) {
            taskLabel.style.textDecoration = "line-through";
        }

        taskDiv.appendChild(taskCheckbox);
        taskDiv.appendChild(taskLabel);
        taskContainer.appendChild(taskDiv);
    });
}

function toggleTaskCompletion(taskId) {
    tasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    renderTasks(document.getElementById("filter-dropdown").value);
}

document.getElementById("filter-dropdown").addEventListener("change", (event) => {
    renderTasks(event.target.value);
});
