const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('list');

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Mark as completed
        checkbox.addEventListener('change', () => {
            taskSpan.classList.toggle('completed');
        });

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
        taskInput.focus();
    }
}