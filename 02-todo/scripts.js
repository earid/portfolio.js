document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // টাস্ক যোগ করার ফাংশন
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'task-item';
            
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'মুছুন';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = function() {
                taskList.removeChild(li);
            };
            
            li.appendChild(taskSpan);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            
            taskInput.value = '';
        }
    }

    // বাটন ক্লিক ইভেন্ট
    addBtn.addEventListener('click', addTask);
    
    // এন্টার কী প্রেস ইভেন্ট
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
// টাস্ক সেভ করার ফাংশন
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task-item span').forEach(task => {
        tasks.push(task.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// টাস্ক লোড করার ফাংশন
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(taskText => {
        // addTask() ফাংশন কল করে টাস্ক যোগ করুন
    });
}

// DOM কন্টেন্ট লোড হওয়ার পর loadTasks() কল করুন
