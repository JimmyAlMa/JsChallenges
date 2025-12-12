// Simple Task List Management
// Challenge from Google Gemini AI

let todoList = [
    { id: 1, task: "Learning JavaScript Async", isCompleted: false },
    { id: 2, task: "Designing website", isCompleted: true },
    { id: 3, task: "Working on a new JS Challenge", isCompleted: false }
];

function addNewTask(todoList, addText) {
    let newItem = {
        id: todoList.length + 1, 
        task: addText,
        isCompleted: false
    };
    todoList.push(newItem);
    return todoList;
    //          OR
    // return [...todoList, newItem];
}
console.log('Add new task:')
console.log(addNewTask(todoList, 'Send email to Boss'));

function checkmark(todoList, taskID) {
    let newList = todoList.map(task => {
        if (task.id === taskID) {
            return {
                ...task,
                isCompleted: true
            }   
        } else {
            return task;
        }
    });
    return newList;
}
console.log('New finished task:')
console.log(checkmark(todoList, 3));

function viewActiveTask(todoList) {
    let activeTasks = todoList.filter(task => {
        return task.isCompleted === false;
    });
    return activeTasks;
}
console.log('Active task total: ');
console.log(viewActiveTask(todoList));