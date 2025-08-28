let tasks = []; // Variable declaration
let maxTasks = 10; // Max number of tasks allowed

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();

  if (task === "") {
    alert("Task cannot be empty!");
    return;
  }

  if (tasks.length >= maxTasks) {
    alert("You've reached the maximum number of tasks!");
    return;
  }

  tasks.push(task); // Add task to array
  input.value = ""; // Clear input
  displayTasks(); // Update UI
}

function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement('li');
    li.textContent = tasks[i];

    // Add delete button
    const btn = document.createElement('button');
    btn.textContent = "❌";
    btn.style.marginLeft = "10px";
    btn.onclick = function () {
      removeTask(i);
    };

    li.appendChild(btn);
    list.appendChild(li);
  }

  // Another loop example: Log tasks to console
  for (let task of tasks) {
    console.log("Task:", task);
  }
}
